---
title: 'Kubernetes 怎麼計算 imageFS'
authors: hwchiu
tags:
  - Linux
  - Kubernetes
---

Kubernetes 節點中有一個資訊，紀錄當前 Image FS 的使用狀況，裡面包含 available, capacity 以及 used

```bash=
# kubectl get --raw "/api/v1/nodes/kind-worker/proxy/stats/summary" | grep imageFs -A 5
   "imageFs": {
    "time": "2024-02-26T14:40:12Z",
    "availableBytes": 21507072000,
    "capacityBytes": 31025332224,
    "usedBytes": 541495296,
    "inodesFree": 3668005,
```

上圖可以看到 imageFS 目前顯示
1. availableBytes: 21507072000
2. capacityBytes: 31025332224
3. usedBytes: 541495296
4. inodesFree: 3668005


Kubelet 本身是沒有去紀錄以及計算這些，而是透過 CRI 的標準去問底下 contaienr runtime 來處理
https://github.com/kubernetes/cri-api/blob/c75ef5b/pkg/apis/runtime/v1/api.proto#L120-L136
```golang=
service ImageService {
    // ListImages lists existing images.
    rpc ListImages(ListImagesRequest) returns (ListImagesResponse) {}
    // ImageStatus returns the status of the image. If the image is not
    // present, returns a response with ImageStatusResponse.Image set to
    // nil.
    rpc ImageStatus(ImageStatusRequest) returns (ImageStatusResponse) {}
    // PullImage pulls an image with authentication config.
    rpc PullImage(PullImageRequest) returns (PullImageResponse) {}
    // RemoveImage removes the image.
    // This call is idempotent, and must not return an error if the image has
    // already been removed.
    rpc RemoveImage(RemoveImageRequest) returns (RemoveImageResponse) {}
    // ImageFSInfo returns information of the filesystem that is used to store images.
    rpc ImageFsInfo(ImageFsInfoRequest) returns (ImageFsInfoResponse) {}
}
```

既然 CRI 有提供，就可以使用 crictl 嘗試挖掘看看，果然有找到一個 imagefsinfo 的資訊

```bash=
# crictl  imagefsinfo
{
  "status": {
    "timestamp": "1708958572632331985",
    "fsId": {
      "mountpoint": "/var/lib/containerd/io.containerd.snapshotter.v1.overlayfs"
    },
    "usedBytes": {
      "value": "541495296"
    },
    "inodesUsed": {
      "value": "18150"
    }
  }
}
```

該指令回報了目前使用了 "541495296" Bytes，與 K8s 回報的一樣，但是並沒有解釋怎麼計算 available 以及 capacity。
其中還有提到一個 fsId(FilesystemIdentifier)

接下來從 kubelet 的原始碼可以抓到

https://github.com/kubernetes/kubernetes/blob/cc5362ebc17e1376fa79b510f7f354dbffe7f92e/pkg/kubelet/stats/cri_stats_provider.go#L388-L425
```golang=
...
	imageFsInfo, err := p.getFsInfo(fs.GetFsId())
	if err != nil {
		return nil, nil, fmt.Errorf("get filesystem info: %w", err)
	}
	if imageFsInfo != nil {
		// The image filesystem id is unknown to the local node or there's
		// an error on retrieving the stats. In these cases, we omit those
		// stats and return the best-effort partial result. See
		// https://github.com/kubernetes/heapster/issues/1793.
		imageFsRet.AvailableBytes = &imageFsInfo.Available
		imageFsRet.CapacityBytes = &imageFsInfo.Capacity
		imageFsRet.InodesFree = imageFsInfo.InodesFree
		imageFsRet.Inodes = imageFsInfo.Inodes
	}
...

```

透過 imageFsInfo 內的 GetFsId 獲得相關資訊，往下去翻 getFsInfo 函式

https://github.com/kubernetes/kubernetes/blob/cc5362ebc17e1376fa79b510f7f354dbffe7f92e/pkg/kubelet/stats/cri_stats_provider.go#L449
```golang=
func (p *criStatsProvider) getFsInfo(fsID *runtimeapi.FilesystemIdentifier) (*cadvisorapiv2.FsInfo, error) {
	if fsID == nil {
		klog.V(2).InfoS("Failed to get filesystem info: fsID is nil")
		return nil, nil
	}
	mountpoint := fsID.GetMountpoint()
	fsInfo, err := p.cadvisor.GetDirFsInfo(mountpoint)
	if err != nil {
		msg := "Failed to get the info of the filesystem with mountpoint"
		if errors.Is(err, cadvisorfs.ErrNoSuchDevice) ||
			errors.Is(err, cadvisorfs.ErrDeviceNotInPartitionsMap) ||
			errors.Is(err, cadvisormemory.ErrDataNotFound) {
			klog.V(2).InfoS(msg, "mountpoint", mountpoint, "err", err)
		} else {
			klog.ErrorS(err, msg, "mountpoint", mountpoint)
			return nil, fmt.Errorf("%s: %w", msg, err)
		}
		return nil, nil
	}
	return &fsInfo, nil
}
```

透過 fsID.GetMountpoint() 來取得對應的 mountPoint。
https://github.com/kubernetes/cri-api/blob/v0.25.16/pkg/apis/runtime/v1alpha2/api.pb.go#L7364
```golang=
func (m *FilesystemIdentifier) GetMountpoint() string {
	if m != nil {
		return m.Mountpoint
	}
	return ""
}

```

由於上述的路徑是 '/var/lib/containerd/io.containerd.snapshotter.v1.overlayfs'，搭配我的 'df' 結果去比對
```bash=
# df -BKB
Filesystem     1kB-blocks      Used  Available Use% Mounted on
overlay        31025333kB 9502487kB 21506069kB  31% /
tmpfs             67109kB       0kB    67109kB   0% /dev
shm               67109kB       0kB    67109kB   0% /dev/shm
/dev/root      31025333kB 9502487kB 21506069kB  31% /var
tmpfs          16794874kB    9552kB 16785322kB   1% /run
```

將上述 /var 的大小與之前去比對，幾乎吻合，所以看起來就是根據路徑找到 mountPoint 並且得到目前的使用量以及用量。

"availableBytes": 21507072000,
"capacityBytes": 31025332224,

