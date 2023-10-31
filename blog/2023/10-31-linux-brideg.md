---
title: 'Linux Bridge MTU'
authors: hwchiu
tags:
  - Linux
  - Network
---

Linux Bridge 的 MTU 設定不如一般網卡簡單設定，其 MTU 預設情況下會自動調整，會自動使用所有 slave 網卡上最小的值來取代
以下列[程式碼](https://elixir.bootlin.com/linux/latest/source/net/bridge/br_if.c#L695)來看，剛有任何 slave 網卡加入到 bridge 上後

```
int br_add_if(struct net_bridge *br, struct net_device *dev,
	      struct netlink_ext_ack *extack)
{
	struct net_bridge_port *p;
	int err = 0;
	unsigned br_hr, dev_hr;
	bool changed_addr, fdb_synced = false;

	/* Don't allow bridging non-ethernet like devices. */
	if ((dev->flags & IFF_LOOPBACK) ||
	    dev->type != ARPHRD_ETHER || dev->addr_len != ETH_ALEN ||
	    !is_valid_ether_addr(dev->dev_addr))
		return -EINVAL;

	/* No bridging of bridges */
	if (dev->netdev_ops->ndo_start_xmit == br_dev_xmit) {
		NL_SET_ERR_MSG(extack,
			       "Can not enslave a bridge to a bridge");
		return -ELOOP;
	}

	/* Device has master upper dev */
	if (netdev_master_upper_dev_get(dev))
		return -EBUSY;

	/* No bridging devices that dislike that (e.g. wireless) */
	if (dev->priv_flags & IFF_DONT_BRIDGE) {
		NL_SET_ERR_MSG(extack,
			       "Device does not allow enslaving to a bridge");
		return -EOPNOTSUPP;
	}

	p = new_nbp(br, dev);
	if (IS_ERR(p))
		return PTR_ERR(p);

	call_netdevice_notifiers(NETDEV_JOIN, dev);

	err = dev_set_allmulti(dev, 1);
	if (err) {
		br_multicast_del_port(p);
		netdev_put(dev, &p->dev_tracker);
		kfree(p);	/* kobject not yet init'd, manually free */
		goto err1;
	}

	err = kobject_init_and_add(&p->kobj, &brport_ktype, &(dev->dev.kobj),
				   SYSFS_BRIDGE_PORT_ATTR);
	if (err)
		goto err2;

	err = br_sysfs_addif(p);
	if (err)
		goto err2;

	err = br_netpoll_enable(p);
	if (err)
		goto err3;

	err = netdev_rx_handler_register(dev, br_get_rx_handler(dev), p);
	if (err)
		goto err4;

	dev->priv_flags |= IFF_BRIDGE_PORT;

	err = netdev_master_upper_dev_link(dev, br->dev, NULL, NULL, extack);
	if (err)
		goto err5;

	dev_disable_lro(dev);

	list_add_rcu(&p->list, &br->port_list);

	nbp_update_port_count(br);
	if (!br_promisc_port(p) && (p->dev->priv_flags & IFF_UNICAST_FLT)) {
		/* When updating the port count we also update all ports'
		 * promiscuous mode.
		 * A port leaving promiscuous mode normally gets the bridge's
		 * fdb synced to the unicast filter (if supported), however,
		 * `br_port_clear_promisc` does not distinguish between
		 * non-promiscuous ports and *new* ports, so we need to
		 * sync explicitly here.
		 */
		fdb_synced = br_fdb_sync_static(br, p) == 0;
		if (!fdb_synced)
			netdev_err(dev, "failed to sync bridge static fdb addresses to this port\n");
	}

	netdev_update_features(br->dev);

	br_hr = br->dev->needed_headroom;
	dev_hr = netdev_get_fwd_headroom(dev);
	if (br_hr < dev_hr)
		update_headroom(br, dev_hr);
	else
		netdev_set_rx_headroom(dev, br_hr);

	if (br_fdb_add_local(br, p, dev->dev_addr, 0))
		netdev_err(dev, "failed insert local address bridge forwarding table\n");

	if (br->dev->addr_assign_type != NET_ADDR_SET) {
		/* Ask for permission to use this MAC address now, even if we
		 * don't end up choosing it below.
		 */
		err = dev_pre_changeaddr_notify(br->dev, dev->dev_addr, extack);
		if (err)
			goto err6;
	}

	err = nbp_vlan_init(p, extack);
	if (err) {
		netdev_err(dev, "failed to initialize vlan filtering on this port\n");
		goto err6;
	}

	spin_lock_bh(&br->lock);
	changed_addr = br_stp_recalculate_bridge_id(br);

	if (netif_running(dev) && netif_oper_up(dev) &&
	    (br->dev->flags & IFF_UP))
		br_stp_enable_port(p);
	spin_unlock_bh(&br->lock);

	br_ifinfo_notify(RTM_NEWLINK, NULL, p);

	if (changed_addr)
		call_netdevice_notifiers(NETDEV_CHANGEADDR, br->dev);

	br_mtu_auto_adjust(br);
	br_set_gso_limits(br);

	kobject_uevent(&p->kobj, KOBJ_ADD);

	return 0;

err6:
	if (fdb_synced)
		br_fdb_unsync_static(br, p);
	list_del_rcu(&p->list);
	br_fdb_delete_by_port(br, p, 0, 1);
	nbp_update_port_count(br);
	netdev_upper_dev_unlink(dev, br->dev);
err5:
	dev->priv_flags &= ~IFF_BRIDGE_PORT;
	netdev_rx_handler_unregister(dev);
err4:
	br_netpoll_disable(p);
err3:
	sysfs_remove_link(br->ifobj, p->dev->name);
err2:
	br_multicast_del_port(p);
	netdev_put(dev, &p->dev_tracker);
	kobject_put(&p->kobj);
	dev_set_allmulti(dev, -1);
err1:
	return err;
}
```


其中上述的重點是 `br_mtu_auto_adjust`，該 function 的內容如下，基本上就去找出最小ＭＴＵ並且設定

```
void br_mtu_auto_adjust(struct net_bridge *br)
{
	ASSERT_RTNL();

	/* if the bridge MTU was manually configured don't mess with it */
	if (br_opt_get(br, BROPT_MTU_SET_BY_USER))
		return;

	/* change to the minimum MTU and clear the flag which was set by
	 * the bridge ndo_change_mtu callback
	 */
	dev_set_mtu(br->dev, br_mtu_min(br));
	br_opt_toggle(br, BROPT_MTU_SET_BY_USER, false);
}
```

