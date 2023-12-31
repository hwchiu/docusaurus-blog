---
title: FloodLight--Module
date: '2013-06-10 16:56'
comments: true
tags:
  - SDN
  - Floodlight
  - Java
  - Network
---

Floodlight把module分成core跟application兩個方向為主
core的部分提供的都是比較核心的功能，譬如PacketIN,PacketOUt,或是拓樸的更動...等

而application則是用這些core的功能來達到一些進階的功能
如防火牆、最短路徑搜尋....等

這邊就簡單研究一下Core Module中的相關功能。

#Core Module#
##FloodlightProvider##
相關檔案

- FloodlightProvider.java
- IFloodlightProviderService.java
- Controller.java   (主要功能實現)

###FloodlightProvider.java###
實作 IFloodlightModule
並且override五個function

1. getModuleServices()
	回傳一個含有	IFloodlightProviderService.class 的 Collection Container。

2. getServiceImpls()
	回傳一個型態為 `key = <Class<? extends IFloodlightService> value = IFloodlightService`的map container,已包含一個成員，其value 為 Controler()。
	在FloodlightModuleLoader中會執行initModules此function,會把所有要用到的module都產生一份物件，並且透過`floodlightModuleContext.addService`把這些物件都收集起來，這樣所有的module就可以透過`floodlightModuleContext.getServiceImpl(Class<T> service)`的方式來取得其他的module物件。

3. getModuleDependencies()
	回傳這個module會用到的相關module,在FloodlightModuleLoader中會執行使用BFS的方式來取得所有用到的module,接者才會去執行module相關的初始化行為。

4. init()
	module的初始，是個internal的初始化，這個步驟中可以去取得其他module所提供的service以及初始化本module會使用到的data structure。
	會在initModules中依序執行每個module的init。

5. startup()
	module的初始，是個external的初始，此時可以與其他module進行相關操作，如取得其他module的相關結構，是module相關設定的最後一步驟。
	在startupModules中會依序執行毎個module的startup()。


**註:初始化的順序是依據BFS跑出來的結果的，沒有任何規律。**

###IFloodlightProviderService.java###
繼承自IFloodlightService並且提供一些基本功能，這邊列出幾個重要功能。

1. bcStore 是一個`FloodlightContextStore<Ethernet>` 的成員，用來存取Ethernet的值，包含了MAC address,VlanID,Ehternet Type。
存取時會用到IFloodlightService 所定義的一個變數*CONTEXT_PI_PAYLOAD*

2. addOFMessageListener(OFType type, IOFMessageListener listener)
註冊成為OpenFlow message Listener。
OFType 共有
(HELLO
ERROR
ECHO_REQUEST
ECHO_REPLY
VENDOR
FEATURES_REQUEST
FEATURES_REPLY
GET_CONFIG_REQUEST
GET_CONFIG_REPLY
SET_CONFIG
ACKET_IN    FLOW_REMOVED
PORT_STATUS
PACKET_OUT
FLOW_MOD
PORT_MOD
STATS_REQUEST
STATS_REPLY
BARRIER_REQUEST
BARRIER_REPLY
QUEUE_GET_CONFIG_REQUEST
QUEUE_GET_CONFIG_REPLY)
IOFMessageListener 則是一個Interface,必須實做該介面並override下列function。
`public Command receive(IOFSwitch sw, OFMessage msg, FloodlightContext cntx);`

3. removeOFMessageListener(OFType type, IOFMessageListener listener)
取消註冊，與(2)對應。

4. `Map<OFType, List<IOFMessageListener>> getListeners()`;
取得所有Listener。

5. `Map<Long, IOFSwitch> getSwitches()`
取得所有連上的switch與其ID

6. public void addOFSwitchListener(IOFSwitchListener listener);
加入一個Switch Listener，這樣此module就可以聽取相關Switch 相關 event。
IOFSwitchListener 是一個Interface,必須實做該介面並且override下列function。
`public void addedSwitch(IOFSwitch sw);`
`public void removedSwitch(IOFSwitch sw);`
`public void switchPortChanged(Long switchId);`
`public String getName();`

7. removeOFSwitchListener(IOFSwitchListener listener);
取消註冊，與(7)對應

8. public boolean injectOfMessage(IOFSwitch sw, OFMessage msg);
把某個OpenFlow Message送回controller重新處理一次。

9. public void handleOutgoingMessage(IOFSwitch sw, OFMessage m,FloodlightContext bc);
還不是很確定

10. public void addInfoProvider(String type, IInfoProvider provider);
加入一個Info Provider。
IInfoProvider是個介面，必須override下列function。
`public Map<String, Object> getInfo(String type);`
當rest API發出 特定type的請求時，就會呼叫到getInfo(type)。

11. public void removeInfoProvider(String type, IInfoProvider provider);
取消一個Provider,與(10)對應。


###Controller.java###
##DeviceManager##
##LinkDiscoveryManager##
##TopologyService##
##RestApiServer##
##ThreadPool##
##MemoryStorageSource##
##FlowCatch##
##PacketStreamer##
#Application Modules#
##Forwarding##
##Firewall##

#Reference#
[For Developers - Floodlight Controller - OpenFlowHub - OpenFlow news and projects](http://docs.projectfloodlight.org/display/floodlightcontroller/For+Developers)
