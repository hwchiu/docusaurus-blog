"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[24098],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),k=r,m=p["".concat(i,".").concat(k)]||p[k]||c[k]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=k;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94151:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const o={slug:"k8s-node-fault-recovery",title:"\u7bc0\u9ede\u5d29\u58de\u6642\u5982\u4f55\u5feb\u901f\u8655\u7406 Pod",keywords:["Kubernetes","Network","Linux","Ubuntu"],date:new Date("2023-08-27T22:28:22.000Z"),tags:["Kubernetes","DevOps"],description:"\u63a2\u8a0e Kubernetes \u5982\u4f55\u5224\u5b9a\u7bc0\u9ede\u70ba NotReady \u4e26\u4e14\u7576\u7bc0\u9ede\u640d\u58de\u6642\uff0c\u7bc0\u9ede\u4e0a\u904b\u884c\u4e4b Pod \u8a72\u5982\u4f55\u5feb\u901f\u53cd\u61c9"},l="\u524d\u8a00",s={unversionedId:"techPost/2023/node-failure-1",id:"techPost/2023/node-failure-1",title:"\u7bc0\u9ede\u5d29\u58de\u6642\u5982\u4f55\u5feb\u901f\u8655\u7406 Pod",description:"\u63a2\u8a0e Kubernetes \u5982\u4f55\u5224\u5b9a\u7bc0\u9ede\u70ba NotReady \u4e26\u4e14\u7576\u7bc0\u9ede\u640d\u58de\u6642\uff0c\u7bc0\u9ede\u4e0a\u904b\u884c\u4e4b Pod \u8a72\u5982\u4f55\u5feb\u901f\u53cd\u61c9",source:"@site/docs/techPost/2023/node-failure-1.md",sourceDirName:"techPost/2023",slug:"/techPost/2023/k8s-node-fault-recovery",permalink:"/docs/techPost/2023/k8s-node-fault-recovery",draft:!1,tags:[{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"DevOps",permalink:"/docs/tags/dev-ops"}],version:"current",frontMatter:{slug:"k8s-node-fault-recovery",title:"\u7bc0\u9ede\u5d29\u58de\u6642\u5982\u4f55\u5feb\u901f\u8655\u7406 Pod",keywords:["Kubernetes","Network","Linux","Ubuntu"],date:"2023-08-27T22:28:22.000Z",tags:["Kubernetes","DevOps"],description:"\u63a2\u8a0e Kubernetes \u5982\u4f55\u5224\u5b9a\u7bc0\u9ede\u70ba NotReady \u4e26\u4e14\u7576\u7bc0\u9ede\u640d\u58de\u6642\uff0c\u7bc0\u9ede\u4e0a\u904b\u884c\u4e4b Pod \u8a72\u5982\u4f55\u5feb\u901f\u53cd\u61c9"},sidebar:"techPost",previous:{title:"\u5f9e KIND \u74b0\u5883\u4e2d\u5b78\u5230\u7684 DNS \u5c0f\u8da3\u805e",permalink:"/docs/techPost/2023/kind-fun-facts"},next:{title:"ruamel.yaml \u5c0f\u7b46\u8a18",permalink:"/docs/techPost/2023/python-ruamel"}},i={},u=[{value:"NodeStatus",id:"nodestatus",level:2},{value:"Lease",id:"lease",level:2},{value:"Heartbeat",id:"heartbeat",level:3},{value:"Status",id:"status",level:3},{value:"Controller Manager",id:"controller-manager",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,r.kt)("p",null,"Kubernetes \u9664\u4e86\u57fa\u672c\u7684 Pod \u985e\u578b\u5916\u4e5f\u63d0\u4f9b\u8af8\u591a\u66f4\u9ad8\u968e\u7684\u904b\u7b97\u985e\u578b\uff0c\u5982 Deployment, DaemonSet, StatefulSet \u7b49\uff0c\u800c\u9019\u4e9b\u9ad8\u968e\u7ba1\u7406\u5668\u80fd\u5920\u8b93\u4f60\u7684 Pod \u4ee5\u591a\u526f\u672c\u7684\u65b9\u5f0f\u4f86\u63d0\u4f9b\u670d\u52d9\uff0c\u57fa\u65bc\u591a\u526f\u672c\u7684\u67b6\u69cb\u4e0b\u66f4\u5bb9\u6613\u53bb\u9054\u5230\u9ad8\u53ef\u7528\u6027\u7684\u67b6\u69cb\u3002"),(0,r.kt)("p",null,"\u7136\u800c\u7576 Kubernetes \u7bc0\u9ede\u51fa\u73fe\u6545\u969c\u554f\u984c\uff0c\u8b6c\u5982\u65b7\u6389\uff0c\u7db2\u8def\u640d\u6bc0\uff0c\u7cfb\u7d71\u640d\u6bc0\u7b49\u72c0\u6cc1\u5c0e\u81f4\u8a72\u7bc0\u9ede\u66ab\u6642\u4e0d\u80fd\u4f7f\u7528\u6642\uff0c\u7bc0\u9ede\u4e0a\u7684 Pod \u8a72\u4f55\u53bb\u4f55\u5f9e\uff1f"),(0,r.kt)("p",null,"\u5f9e\u9ad8\u53ef\u7528\u6027\u7684\u89d2\u5ea6\u4f86\u8aaa\uff0c\u6709\u4e9b\u4eba\u6703\u8a8d\u70ba\u61c9\u7528\u7a0b\u5f0f\u6709\u591a\u500b\u526f\u672c\uff0c\u6240\u4ee5\u7bc0\u9ede\u58de\u6389\u4e0d\u5f71\u97ff\u670d\u52d9\u904b\u4f5c\uff0c\u4f46\u662f\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c\u8a72\u61c9\u7528\u7a0b\u5f0f\u5c6c\u65bc StatefulSet\uff0c\u56e0\u6b64\u6c92\u6709\u8fa6\u6cd5\u4e0d\u505c\u6c34\u5e73\u64f4\u5c55\uff0c\u9019\u7a2e\u60c5\u6cc1\u4e0b\u5c31\u6703\u9700\u8981\u7576\u7bc0\u9ede\u58de\u640d\u6642\uff0c\u76f8\u95dc Pod \u88ab\u5feb\u901f\u91cd\u65b0\u8abf\u5ea6\u4f86\u63d0\u4f9b\u670d\u52d9\u3002"),(0,r.kt)("h1",{id:"\u5be6\u9a57\u74b0\u5883"},"\u5be6\u9a57\u74b0\u5883"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes-sigs/kind?WT.mc_id=AZ-MVP-5003331"},"KIND")," \u7684\u67b6\u69cb\u662f\u57fa\u65bc Docker \u53bb\u5b8c\u6210\uff0c\u672c\u6587\u7684\u5be6\u9a57\u74b0\u5883\u662f\u65bc Ubuntu 20.04 \u4e0a\u4ee5 KIND \u5275\u5efa\u4e00\u500b\u4e09\u7bc0\u9ede\u7684 Kubernetes \u53e2\u96c6\uff0c\u5176\u4e2d\u4e00\u500b\u7bc0\u9ede\u4f5c\u70ba\u63a7\u5236\u5e73\u9762\uff0c\u53e6\u5916\u5169\u500b\u5247\u4f5c\u70ba\u4e00\u822c\u7684 Worker."),(0,r.kt)("h1",{id:"\u7bc0\u9ede"},"\u7bc0\u9ede"),(0,r.kt)("p",null,"Kubelet \u672c\u8eab\u5c6c\u65bc\u7bc0\u9ede\u4e0a\u7684 Agent\uff0c\u5176\u672c\u8eab\u6703\u5b9a\u671f\u8a08\u7b97\u8207\u56de\u5831\u95dc\u65bc\u7bc0\u9ede\u7684\u72c0\u614b\u4e26\u4e14\u901a\u77e5\u63a7\u5236\u5e73\u9762\uff0c\u6280\u8853\u4e0a\u76ee\u524d\u6709\u5169\u7a2e\u4e0d\u540c\u7684\u5be6\u4f5c\u65b9\u5f0f\uff0c\u5176\u4e2d\u7684\u5206\u6c34\u5dba\u53ef\u4ee5\u8a8d\u5b9a\u70ba 1.17 \u4ee5\u5f8c\u3002"),(0,r.kt)("p",null,"\u9996\u5148\u6211\u5011\u8981\u5148\u77e5\u9053\uff0c\u5230\u5e95 Kubelet \u9700\u8981\u56de\u5831\u4ec0\u9ebc\u8cc7\u8a0a\u7d66\u63a7\u5236\u5e73\u9762\uff0c\u4ee5\u4e0b\u5217\u6307\u4ee4 ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl get nodes k8slab-worker2 -o yaml")," \u70ba\u7bc4\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'status:\n  addresses:\n  - address: 172.18.0.2\n    type: InternalIP\n  - address: k8slab-worker2\n    type: Hostname\n  allocatable:\n    cpu: "4"\n    ephemeral-storage: 30298176Ki\n    hugepages-1Gi: "0"\n    hugepages-2Mi: "0"\n    memory: 16386892Ki\n    pods: "110"\n  capacity:\n    cpu: "4"\n    ephemeral-storage: 30298176Ki\n    hugepages-1Gi: "0"\n    hugepages-2Mi: "0"\n    memory: 16386892Ki\n    pods: "110"\n  conditions:\n  - lastHeartbeatTime: "2023-08-27T03:48:19Z"\n    lastTransitionTime: "2023-08-23T17:07:50Z"\n    message: kubelet has sufficient memory available\n    reason: KubeletHasSufficientMemory\n    status: "False"\n    type: MemoryPressure\n  - lastHeartbeatTime: "2023-08-27T03:48:19Z"\n...\n')),(0,r.kt)("p",null,"\u57fa\u672c\u4e0a\u6574\u500b status \u6b04\u4f4d\u5167\u7684\u6240\u6709\u8cc7\u8a0a\u90fd\u9700\u8981\u7531 kubelet \u56de\u5831\uff0c\u800c\u9019\u4e9b\u6b04\u4f4d\u53ef\u4ee5\u89c0\u5bdf\u5230\u8cc7\u8a0a\u7e41\u591a\uff0c\u50b3\u905e\u7684\u8cc7\u8a0a\u91cf\u4e26\u4e0d\u5c0f\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u5f9e kubelet \u56de\u50b3\u8cc7\u8a0a\u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u5be6\u969b\u4e0a\u53ef\u4ee5\u5340\u5206\u6210\u5169\u7a2e\u56de\u5831"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Status \u7684\u5167\u5bb9\u56de\u5831"),(0,r.kt)("li",{parentName:"ol"},"Heartbeat \u7684\u5065\u5eb7\u5ea6\u66f4\u65b0")),(0,r.kt)("p",null,'\u800c\u672c\u6587\u6240\u63a2\u8a0e\u7684\u91cd\u9ede\uff0c\u7576\u7bc0\u9ede\u88ab\u6a19\u793a\u70ba "NotReady" \u72c0\u6cc1\u7684\u53cd\u61c9\u5be6\u969b\u4e0a\u5c0d\u61c9\u5230\u7684\u5c31\u662f (2) \u7684\u8cc7\u8a0a\uff0c\u6240\u8b02\u7684 heartbeat \u8cc7\u8a0a'),(0,r.kt)("p",null,"\u5f9e",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/node/node-status/#heartbeats"},"\u5b98\u65b9\u6587\u4ef6")," \u4e2d\u6240\u8ff0\uff0c\u7bc0\u9ede\u7684 Heartbeats \u53ef\u4ee5\u5340\u5206\u6210\u5169\u7a2e\u65b9\u5f0f\uff0c\u5206\u5225\u662f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"updates to the .status of a Node"),(0,r.kt)("li",{parentName:"ol"},"Lease objects within the kube-node-lease namespace. Each Node has an associated Lease object.")),(0,r.kt)("p",null,"\u63a5\u4e0b\u4f86\u5c31\u91dd\u5c0d\u9019\u5169\u7a2e\u5be6\u4f5c\u65b9\u5f0f\u63a2\u8a0e\u4e00\u4e0b\u6982\u5ff5\u8207\u76f8\u95dc\u8a2d\u5b9a\u6a94\u6848\u3002"),(0,r.kt)("h2",{id:"nodestatus"},"NodeStatus"),(0,r.kt)("p",null,"\u5982\u540c\u524d\u8ff0\uff0c Kubelet \u672c\u8eab\u6703\u9700\u8981\u56de\u50b3\u7bc0\u9ede\u4e0a\u7684\u5404\u7a2e\u904b\u4f5c\u72c0\u614b\u4ee5\u53ca heartbeat \u8cc7\u8a0a\uff0c\u800c\u6700\u521d\u7684 Kubernetes \u5247\u662f\u5c07\u9019\u5169\u500b\u8cc7\u8a0a\u4e00\u8d77\u66f4\u65b0\uff0c\u5176\u66f4\u65b0\u7684\u983b\u7387\u9810\u8a2d\u662f 10 \u79d2\uff0c\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/#kubelet-config-k8s-io-v1beta1-KubeletConfiguration"},"KubeletConfiguration"),"\n\u5167\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeStatusUpdateFrequency")," \u7684\u6b04\u4f4d\u66f4\u65b0"),(0,r.kt)("p",null,"\u6b64\u5916\u5c0d\u65bc\u6bcf\u6b21\u7684\u72c0\u614b\u66f4\u65b0\uff0c kubelet \u90fd\u6709\u5be6\u4f5c\u91cd\u8a66\u6a5f\u5236\uff0c\u6bcf\u6b21\u50b3\u905e\u9810\u8a2d\u90fd\u6703\u5617\u8a66\u4e94\u6b21\uff0c\u800c\u9019\u500b\u6578\u5b57\u76ee\u524d\u662f\u4e0d\u53ef\u66f4\u6539\u7684\uff0c\u5beb\u6b7b\u65bc",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/v1.28.0/pkg/kubelet/kubelet.go#L133?WT.mc_id=AZ-MVP-5003331"},"\u7a0b\u5f0f\u78bc, kubelet.go"),"\u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang="},"const (\n    // nodeStatusUpdateRetry specifies how many times kubelet retries when posting node status failed.\n    nodeStatusUpdateRetry = 5\n    ....\n)\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang="},'func (kl *Kubelet) updateNodeStatus(ctx context.Context) error {\n    klog.V(5).InfoS("Updating node status")\n    for i := 0; i < nodeStatusUpdateRetry; i++ {\n        if err := kl.tryUpdateNodeStatus(ctx, i); err != nil {\n            if i > 0 && kl.onRepeatedHeartbeatFailure != nil {\n                kl.onRepeatedHeartbeatFailure()\n            }\n            klog.ErrorS(err, "Error updating node status, will retry")\n        } else {\n            return nil\n        }\n    }\n    return fmt.Errorf("update node status exceeds retry count")\n}\n')),(0,r.kt)("p",null,"\u4e0b\u5716\u7c21\u6613\u7684\u63cf\u8ff0\u66f4\u65b0\u65b9\u5f0f\n",(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/BkKis_Oah.png",alt:null})),(0,r.kt)("p",null,"\u7136\u800c\u9019\u7a2e\u5be6\u4f5c\u65b9\u5f0f\u5be6\u52d9\u4e0a\u537b\u5e36\u4f86\u7684\u6548\u80fd\u4e0a\u7684\u74f6\u9838\uff0c\u6bcf\u6b21 kubelet \u8cc7\u8a0a\u56de\u5831\u90fd\u4f34\u96a8\u5927\u91cf\u7684\u72c0\u614b\u8cc7\u8a0a\uff0c\u6bcf\u5341\u79d2\u4e00\u6b21\u4e14\u7bc0\u9ede\u6578\u91cf\u904e\u591a\u6642\uff0c\u5c31\u6703\u5c0d\u6574\u500b etcd \u9020\u6210\u7cfb\u7d71\u58d3\u529b\u4f7f\u5f97\u6574\u500b\u53e2\u96c6\u7684\u6548\u80fd\u964d\u4f4e\uff0c\u56e0\u6b64 1.13 \u7248\u672c\u5f8c\u6c7a\u5b9a\u63a1\u7528\u65b0\u7684\u5be6\u4f5c\u65b9\u5f0f\u4e26\u4e14\u65bc 1.17 \u7248\u672c\u6b63\u5f0f\u5ba3\u4f48\u70ba stable \u7248\u672c\u3002"),(0,r.kt)("h2",{id:"lease"},"Lease"),(0,r.kt)("p",null,"\u70ba\u4e86\u6539\u5584\u6574\u500b NodeStatus \u66f4\u65b0\u7684\u6548\u7387\u8207\u6548\u80fd\u554f\u984c\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/589-efficient-node-heartbeats?WT.mc_id=AZ-MVP-5003331"},"Official Proposal"),"\u88ab\u63d0\u51fa\u4e26\u4e14\u6253\u7b97\u63a1\u7528\u57fa\u65bc Lease \u67b6\u69cb\u4f86\u5b8c\u6210\uff0c\u5176\u6838\u5fc3\u6982\u5ff5\u5c31\u662f\u5c07\u524d\u8ff0\u7684 NodeStatus \u8207 Heartbeat \u5169\u500b\u8cc7\u8a0a\u7d66\u62c6\u958b\uff0c\u5169\u4ef6\u4e8b\u60c5\u7368\u7acb\u53bb\u8655\u7406\u3002"),(0,r.kt)("p",null,"Heartbeat \u672c\u8eab\u7684\u6d41\u91cf\u8ca0\u64d4\u5c0f\uff0c\u7dad\u6301\u904e\u5f80\u7684\u983b\u7387\u4e26\u4e0d\u6703\u9020\u6210\u591a\u5927\u7684\u6548\u80fd\u554f\u984c\uff0c\u7136\u800c NodeStatus \u7684\u8cc7\u8a0a\u76f8\u5c0d\u9f90\u5927\uff0c\u56e0\u6b64\u5176\u66f4\u65b0\u983b\u7387\u5c31\u9032\u884c\u8abf\u6574\u3002"),(0,r.kt)("h3",{id:"heartbeat"},"Heartbeat"),(0,r.kt)("p",null,"\u4ee5 Heartbeat \u4f86\u8aaa\uff0c\u63a1\u7528 Kubernetes \u5167\u5efaAPI Lease \u7684\u67b6\u69cb\uff0c\u7576\u6b64\u67b6\u69cb\u904b\u4f5c\u6642\uff0c\u53ef\u4ee5\u89c0\u5bdf\u5230\u7cfb\u7d71\u6703\u81ea\u52d5\u5275\u5efa\u4e00\u500b\u540d\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"kube-node-lease")," \u7684 namespace\uff0c\u4e26\u4e14\u6240\u6709\u500b K8s \u7bc0\u9ede\u90fd\u6703\u8207\u4e4b\u5c0d\u61c9\u5230\u4e00\u500b\u540c\u540d\u7a31\u7684 Lease \u7269\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},"azureuser@course:~$ kubectl -n kube-node-lease get lease\nNAME                   HOLDER                 AGE\nk8slab-control-plane   k8slab-control-plane   3d13h\nk8slab-worker          k8slab-worker          3d13h\nk8slab-worker2         k8slab-worker2         3d13h\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash="},'azureuser@course:~$ kubectl -n kube-node-lease get lease k8slab-worker -o yaml\napiVersion: coordination.k8s.io/v1\nkind: Lease\nmetadata:\n  creationTimestamp: "2023-08-23T17:08:00Z"\n  name: k8slab-worker\n  namespace: kube-node-lease\n  ownerReferences:\n  - apiVersion: v1\n    kind: Node\n    name: k8slab-worker\n    uid: 70c3c25d-dc3d-4ad3-ba3a-36637d3b5b60\n  resourceVersion: "623846"\n  uid: 08013bd8-2dd9-45fe-ad6d-38b77253b437\nspec:\n  holderIdentity: k8slab-worker\n  leaseDurationSeconds: 60\n  renewTime: "2023-08-27T03:21:06.584188Z"\n')),(0,r.kt)("p",null,"\u9019\u4e9b Lease \u7269\u4ef6\u5247\u900f\u904e renewTime \u8207 holderIdentity \u4f86\u4ee3\u8868\u6bcf\u500b\u7bc0\u9ede\u6700\u5f8c\u4e00\u6b21\u66f4\u65b0\u7684\u6642\u5019\uff0c\u9019\u4e9b\u6642\u9593\u4e4b\u5f8c\u6703\u88ab Controller \u7528\u4f86\u5224\u5b9a\u7bc0\u9ede\u672c\u8eab\u662f\u5426 Ready/NotReady."),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/master/pkg/kubelet/kubelet.go#L862-L873?WT.mc_id=AZ-MVP-5003331"},"kubelet \u539f\u59cb\u78bc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang="},"const (\n    // nodeLeaseRenewIntervalFraction is the fraction of lease duration to renew the lease\n    nodeLeaseRenewIntervalFraction = 0.25\n)\n...\n\n\nleaseDuration := time.Duration(kubeCfg.NodeLeaseDurationSeconds) * time.Second\nrenewInterval := time.Duration(float64(leaseDuration) * nodeLeaseRenewIntervalFraction)\nklet.nodeLeaseController = lease.NewController(\n    klet.clock,\n    klet.heartbeatClient,\n    string(klet.nodeName),\n    kubeCfg.NodeLeaseDurationSeconds,\n    klet.onRepeatedHeartbeatFailure,\n    renewInterval,\n    string(klet.nodeName),\n    v1.NamespaceNodeLease,\n    util.SetNodeOwnerFunc(klet.heartbeatClient, string(klet.nodeName)))\n\n")),(0,r.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230 renewInternval \u7684\u8a08\u7b97\u65b9\u5f0f\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"nodeLeaseRenewIntervalFraction")," * ",(0,r.kt)("inlineCode",{parentName:"p"},"NodeLeaseDurationSeconds"),"\uff0c\u524d\u8005\u662f\u4e00\u500b\u56fa\u5b9a\u7684\u5e38\u6578 0.25\uff0c\u800c\u5f8c\u8005\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/#kubelet-config-k8s-io-v1beta1-KubeletConfiguration"},"kubelet")," \u4e2d\u95dc\u65bc nodeLeaseDurationSeconds \u7684\u4ecb\u7d39\uff0c\u9810\u8a2d\u503c\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"40"),"\u3002"),(0,r.kt)("p",null,"\u6839\u64da\u9019\u500b\u8a08\u7b97\u53ef\u4ee5\u5f97\u5230 0.25 * 40 = 10\uff0c\u56e0\u6b64 kubelet \u6bcf 10 \u79d2\u6703\u66f4\u65b0\u4e00\u6b21\u3002"),(0,r.kt)("p",null,"\u6839\u64da\u9019\u500b\u7406\u8ad6\uff0c\u5617\u8a66\u900f\u904e\u6307\u4ee4\u89c0\u5bdf Lease \u7269\u4ef6\u7684\u8b8a\u5316\n",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl -n kube-node-lease get lease k8slab-worker2 -o yaml -w")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'---\napiVersion: coordination.k8s.io/v1\nkind: Lease\nmetadata:\n  creationTimestamp: "2023-08-23T17:08:00Z"\n  name: k8slab-worker2\n  namespace: kube-node-lease\n  ownerReferences:\n  - apiVersion: v1\n    kind: Node\n    name: k8slab-worker2\n    uid: 5ad224c5-11ad-4939-8cfa-0066eb86d6b9\n  resourceVersion: "655385"\n  uid: bf558925-25b8-4483-9f9d-4a78521afa4c\nspec:\n  holderIdentity: k8slab-worker2\n  leaseDurationSeconds: 40\n  renewTime: "2023-08-27T07:39:35.899240Z"\n---\napiVersion: coordination.k8s.io/v1\nkind: Lease\nmetadata:\n  creationTimestamp: "2023-08-23T17:08:00Z"\n  name: k8slab-worker2\n  namespace: kube-node-lease\n  ownerReferences:\n  - apiVersion: v1\n    kind: Node\n    name: k8slab-worker2\n    uid: 5ad224c5-11ad-4939-8cfa-0066eb86d6b9\n  resourceVersion: "655405"\n  uid: bf558925-25b8-4483-9f9d-4a78521afa4c\nspec:\n  holderIdentity: k8slab-worker2\n  leaseDurationSeconds: 40\n  renewTime: "2023-08-27T07:39:45.982209Z"\n')),(0,r.kt)("p",null,"\u5f9e\u4e0a\u8ff0\u7269\u4ef6\u7684\u66f4\u65b0\u72c0\u614b\uff0c\u89c0\u5bdf renewTime \u7684\u5dee\u7570\uff0c\u5206\u5225\u662f ",(0,r.kt)("strong",{parentName:"p"},"07:39:45")," \u8207 ",(0,r.kt)("strong",{parentName:"p"},"07:39:35"),"\uff0c\u5176\u5dee\u503c\u70ba 10 \u79d2\uff0c\u8207\u7406\u8ad6\u4e00\u81f4\u3002"),(0,r.kt)("p",null,"\u5617\u8a66\u5c07\u8a72 leaseDurationSeconds \u6539\u6210 60 \u79d2\uff0c\u89c0\u5bdf ",(0,r.kt)("inlineCode",{parentName:"p"},"renewTime")," \u7684\u8b8a\u5316\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'apiVersion: coordination.k8s.io/v1\nkind: Lease\nmetadata:\n  creationTimestamp: "2023-08-23T17:08:00Z"\n  name: k8slab-worker\n  namespace: kube-node-lease\n  ownerReferences:\n  - apiVersion: v1\n    kind: Node\n    name: k8slab-worker\n    uid: 70c3c25d-dc3d-4ad3-ba3a-36637d3b5b60\n  resourceVersion: "654971"\n  uid: 08013bd8-2dd9-45fe-ad6d-38b77253b437\nspec:\n  holderIdentity: k8slab-worker\n  leaseDurationSeconds: 60\n  renewTime: "2023-08-27T07:36:14.454825Z"\n---\napiVersion: coordination.k8s.io/v1\nkind: Lease\nmetadata:\n  creationTimestamp: "2023-08-23T17:08:00Z"\n  name: k8slab-worker\n  namespace: kube-node-lease\n  ownerReferences:\n  - apiVersion: v1\n    kind: Node\n    name: k8slab-worker\n    uid: 70c3c25d-dc3d-4ad3-ba3a-36637d3b5b60\n  resourceVersion: "655003"\n  uid: 08013bd8-2dd9-45fe-ad6d-38b77253b437\nspec:\n  holderIdentity: k8slab-worker\n  leaseDurationSeconds: 60\n  renewTime: "2023-08-27T07:36:29.654757Z"\n')),(0,r.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230\u5169\u500b\u6642\u9593\u5206\u5225\u70ba ",(0,r.kt)("strong",{parentName:"p"},"07:36:29")," \u8207 ",(0,r.kt)("strong",{parentName:"p"},"07:36:14"),"\uff0c\u9593\u9694\u70ba 15 \u79d2\uff0c\u8207\u8a08\u7b97\u7406\u8ad6\u76f8\u7b26\u3002"),(0,r.kt)("p",null,"Lease \u67b6\u69cb\u4e0b\u900f\u904e\u6b64\u65b9\u5f0f\u4f86\u66f4\u65b0\u7bc0\u9ede\u7684\u6700\u65b0 heartbeat \u72c0\u614b\uff0c\u81f3\u65bc Controller \u662f\u5982\u4f55\u5229\u7528\u9019\u4e9b\u8cc7\u8a0a\u5224\u65b7\u7bc0\u9ede\u662f\u5426\u70ba Ready/NotReady \u7b49\u7b49\u5c31\u6703\u4ecb\u7d39\u3002"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u5217\u5716\u4f86\u7e3d\u7d50\u4e00\u4e0b Lease \u67b6\u69cb\u4e0b Heartbeat \u7684\u66f4\u65b0\u65b9\u5f0f\n",(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/Hk5wyCdp2.png",alt:null})),(0,r.kt)("h3",{id:"status"},"Status"),(0,r.kt)("p",null,"\u70ba\u4e86\u6539\u5584 Status \u50b3\u9001\u8cc7\u6599\u983b\u7e41\u9020\u6210 etcd \u58d3\u529b\u7684\u554f\u984c\uff0c\u65b0\u67b6\u69cb\u4e2d\u5c07 Status \u7684\u50b3\u9001\u6a5f\u5236\u9032\u884c\u8abf\u6574\uff0c\u9996\u5148\u5c07 Status \u5206\u6210\u5169\u500b\u968e\u6bb5"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8a08\u7b97"),(0,r.kt)("li",{parentName:"ol"},"\u56de\u5831")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8a08\u7b97"),"\u968e\u6bb5\u5c31\u662f\u53bb\u7d71\u8a08\u6536\u96c6\u7576\u524d\u7bc0\u9ede\u4e0a\u7684\u8cc7\u8a0a\uff0c\u800c",(0,r.kt)("strong",{parentName:"p"},"\u56de\u5831"),"\u5247\u662f\u5c07\u9019\u4e9b\u8cc7\u8a0a\u7d66\u56de\u5831\u7d66 API Server\uff0c\u800c\u9019\u5169\u500b\u968e\u6bb5\u662f\u7368\u7acb\u9032\u884c\uff0c\u56e0\u6b64\u5f7c\u6b64\u7684\u904b\u4f5c\u9031\u671f\u662f\u4e0d\u4e00\u81f4\u7684\u3002"),(0,r.kt)("p",null,"\u4ee5",(0,r.kt)("strong",{parentName:"p"},"\u8a08\u7b97"),"\u4f86\u8aaa\uff0c\u76ee\u524d\u9810\u8a2d\u60c5\u6cc1\u4e0b\u662f\u6bcf ",(0,r.kt)("strong",{parentName:"p"},"10s")," \u53bb\u8a08\u7b97\u4e00\u6b21\uff0c\u800c",(0,r.kt)("strong",{parentName:"p"},"\u56de\u5831"),"\u90e8\u5206\u5247\u6709\u5169\u500b\u6b65\u9a5f"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u6839\u64da",(0,r.kt)("strong",{parentName:"li"},"\u8a08\u7b97"),"\u7d50\u679c\uff0c\u82e5\u6709\u4efb\u4f55\u6709\u610f\u7fa9\u7684\u66f4\u65b0\u5247\u99ac\u4e0a\u56de\u5831\u7d66 API Server"),(0,r.kt)("li",{parentName:"ol"},"\u5426\u5247\uff0c\u7b49\u5f85 ",(0,r.kt)("strong",{parentName:"li"},"5m")," \u7684\u6642\u9593\u624d\u66f4\u65b0\u5230 API Server\u3002")),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/config-api/kubelet-config.v1beta1/#kubelet-config-k8s-io-v1beta1-KubeletConfiguration"},"KubeletConfiguration")," \u4e2d\u7684\u4ecb\u7d39\uff0c\u53ef\u4ee5\u900f\u904e ",(0,r.kt)("strong",{parentName:"p"},"nodeStatusUpdateFrequency")," \u8207 ",(0,r.kt)("strong",{parentName:"p"},"nodeStatusReportFrequency")," \u5169\u500b\u8b8a\u6578\u4f86\u5206\u5225\u8abf\u6574\u76f8\u95dc\u983b\u7387\u3002"),(0,r.kt)("p",null,"\u6839\u64da\u8aaa\u660e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'nodeStatusUpdateFrequency is the frequency that kubelet computes node status. \nIf node lease feature is not enabled, it is also the frequency that kubelet posts node status to master. \nNote: When node lease feature is not enabled, be cautious when changing the constant,\nit must work with nodeMonitorGracePeriod in nodecontroller. Default: "10s"\n\nnodeStatusReportFrequency is the frequency that kubelet posts \nnode status to master if node status does not change. Kubelet will ignore this frequency and post node status immediately if any \nchange is detected. It is only used when node lease feature is enabled. nodeStatusReportFrequency\'s default value is 5m. \nBut if nodeStatusUpdateFrequency is set explicitly, nodeStatusReportFrequency\'s default value will be set \nto nodeStatusUpdateFrequency for backward compatibility. Default: "5m"\n')),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/v1.28.0/pkg/kubelet/kubelet_node_status.go#L570"},"kubelet \u76f8\u95dc\u7a0b\u5f0f\u78bc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang="},'originalNode, err := kl.heartbeatClient.CoreV1().Nodes().Get(ctx, string(kl.nodeName), opts)\nif err != nil {\n    return fmt.Errorf("error getting node %q: %v", kl.nodeName, err)\n}\nif originalNode == nil {\n    return fmt.Errorf("nil %q node object", kl.nodeName)\n}\n\nnode, changed := kl.updateNode(ctx, originalNode)\nshouldPatchNodeStatus := changed || kl.clock.Since(kl.lastStatusReportTime) >= kl.nodeStatusReportFrequency\n')),(0,r.kt)("p",null,"\u6bcf\u6b21\u9032\u884c NodeStatus \u66f4\u65b0\u6642\u90fd\u6703\u5617\u8a66\u8ddf\u7576\u524d\u7269\u4ef6\u9032\u884c\u6bd4\u5c0d\uff0c\u53ea\u6709\u7576\u6709\u7269\u4ef6\u767c\u751f\u6539\u8b8a\u6216\u662f\u6642\u9593\u8d85\u904e ",(0,r.kt)("strong",{parentName:"p"},"nodeStatusReportFrequency")," \u6642\u624d\u6703\u771f\u6b63\u7684\u767c\u9001\u8cc7\u8a0a\u5230 API Server\u3002"),(0,r.kt)("p",null,"\u85c9\u7531\u9019\u7a2e\u6a5f\u5236\u964d\u4f4e\u6574\u500b\u66f4\u65b0\u983b\u7387\uff0c\u4e26\u964d\u4f4e\u983b\u7e41\u66f4\u65b0\u9020\u6210\u7684\u6548\u80fd\u5f71\u97ff\u3002"),(0,r.kt)("p",null,"\u5c07\u5169\u8005\u7d50\u5408\u8d77\u4f86\u7684\u8a71\uff0c\u5176\u793a\u610f\u5716\u5982\u4e0b\n",(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/Sk39kA_T2.png",alt:null})),(0,r.kt)("p",null,"\u4ee5\u9810\u8a2d\u8a2d\u5b9a\u4e0b\uff0c\u904b\u4f5c\u908f\u8f2f\u5716\u5982\u4e0b\uff0c Kubelet \u5982\u4eca\u7522\u751f\u5169\u689d\u4e0d\u540c\u7684\u8def\uff0c\u4e00\u689d\u8ca0\u8cac Status\uff0c\u4e00\u689d\u8ca0\u8cac Heartbeat"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/Sy_HtFYT3.png",alt:null})),(0,r.kt)("h2",{id:"controller-manager"},"Controller Manager"),(0,r.kt)("p",null,"\u524d\u8ff0\u63a2\u8a0e\u4e86 Kubelet \u662f\u5982\u4f55\u56de\u5831\u7bc0\u9ede\u5230\u63a7\u5236\u5e73\u9762\uff0c\u800c\u771f\u6b63\u5224\u5225\u7bc0\u9ede\u70ba Reday/NotReady \u5247\u662f\u7531 Controller \u5167\u7684 node lifecycle controller \u4f86\u5224\u5225\u7684\u3002"),(0,r.kt)("p",null,"\u5176\u6982\u5ff5\u5f88\u7c21\u55ae\uff0c\u5c31\u662f\u5b9a\u671f\u53bb\u6aa2\u67e5\u6bcf\u500b\u7bc0\u9ede\u5c0d\u61c9\u7684 Lease \u7269\u4ef6\u72c0\u614b\uff0c\u53ea\u8981\u8a72 Lease \u7269\u4ef6\u8d85\u904e\u4e00\u5b9a\u6642\u9593\u6c92\u6709 Renew\uff0c\u5c31\u8a8d\u5b9a\u8a72\u7bc0\u9ede\u592a\u4e45\u6c92\u6709\u56de\u5831\u8cc7\u8a0a\uff0c\u56e0\u6b64\u6703\u5c07\u5176\u72c0\u614b\u8a2d\u5b9a\u70ba NotReady\u3002"),(0,r.kt)("p",null,"\u4e0a\u8ff0\u6982\u5ff5\u5167\u6709\u5169\u500b\u53c3\u6578\u53ef\u4ee5\u8a2d\u5b9a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Controller \u591a\u4e45\u53bb\u6aa2\u67e5 Lease \u7269\u4ef6"),(0,r.kt)("li",{parentName:"ol"},"Renew \u6642\u9593\u8d85\u904e\u591a\u4e45\u6c92\u6709\u66f4\u65b0\u8996\u70ba NotReady")),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-controller-manager/"},"kube-controller-manager")," \u4e2d\u6240\u8ff0\uff0c\u6709\u5169\u500b\u53c3\u6578\u53ef\u4ee5\u8abf\u6574\uff0c\u5206\u5225\u662f\n",(0,r.kt)("strong",{parentName:"p"},"--node-monitor-period duration")," \u8207 ",(0,r.kt)("strong",{parentName:"p"},"--node-monitor-grace-period duration")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"node-monitor-period")," \u7684\u8aaa\u660e\u5982\u4e0b (\u9810\u8a2d 5s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The period for syncing NodeStatus in cloud-node-lifecycle-controller.\n")),(0,r.kt)("p",null,"\u800c\u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/v1.28.0/pkg/controller/nodelifecycle/node_lifecycle_controller.go#L502-L507?WT.mc_id=AZ-MVP-5003331"},"Controller \u539f\u59cb\u78bc")),(0,r.kt)("p",null,"\u53ef\u4ee5\u89c0\u5bdf\u5230\u4e0b\u5217\u7684\u8a2d\u5b9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang="},'...\n// Incorporate the results of node health signal pushed from kubelet to master.\ngo wait.UntilWithContext(ctx, func(ctx context.Context) {\n    if err := nc.monitorNodeHealth(ctx); err != nil {\n        logger.Error(err, "Error monitoring node health")\n    }\n}, nc.nodeMonitorPeriod)\n...\n')),(0,r.kt)("p",null,"\u671f\u900f\u904e go routine \u6bcf nodeMonitorPeriod \u7684\u6642\u9593\u5c31\u53bb\u57f7\u884c\u4e00\u6b21 ",(0,r.kt)("strong",{parentName:"p"},"monitorNodeHealth")," \u4f86\u6aa2\u67e5\u7bc0\u9ede\u7684\u72c0\u6cc1\u3002"),(0,r.kt)("p",null,"\u800c ",(0,r.kt)("strong",{parentName:"p"},"node-monitor-grace-period")," \u7684\u8aaa\u660e\u5982\u4e0b(\u9810\u8a2d 40s)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Amount of time which we allow running Node to be unresponsive before marking it unhealthy. Must be N times more than kubelet's nodeStatusUpdateFrequency, where N means number of retries allowed for kubelet to post node status.\n")),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/kubernetes/kubernetes/blob/v1.28.0/pkg/controller/nodelifecycle/node_lifecycle_controller.go#L821?WT.mc_id=AZ-MVP-5003331"},"Controller \u539f\u59cb\u78bc")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang="},"func (nc *Controller) tryUpdateNodeHealth(ctx context.Context, node *v1.Node) (time.Duration, v1.NodeCondition, *v1.NodeCondition, error) {\n...\n    if currentReadyCondition == nil {\n...\n    } else {\n        // If ready condition is not nil, make a copy of it, since we may modify it in place later.\n        observedReadyCondition = *currentReadyCondition\n        gracePeriod = nc.nodeMonitorGracePeriod\n    }\n...\n    if nc.now().After(nodeHealth.probeTimestamp.Add(gracePeriod)) {\n        // NodeReady condition or lease was last set longer ago than gracePeriod, so\n        // update it to Unknown (regardless of its current value) in the master.\n....\n    }\n....\n}\n")),(0,r.kt)("p",null,'\u7531\u4e0a\u8ff0\u7684\u7a0b\u5f0f\u78bc\u53ef\u4ee5\u89c0\u5bdf\u5230\uff0c\u5176\u6703\u5148\u5c07\u8a2d\u5b9a\u597d\u7684 nodeMonitorGracePeriod \u8ce6\u4e88\u5230\u672c\u5730\u8b8a\u6578 gracePeriod\uff0c\u63a5\u8005\u5c31\u6703\u53bb\u6aa2\u67e5\u7576\u524d\u6642\u9593\u662f\u5426\u8d85\u904e lease + gracePeriod\uff0c \u82e5\u662f\u5247\u5c07\u7bc0\u9ede\u8a2d\u5b9a\u70ba NotReady\uff0c\u4e26\u4e14\u7406\u7531\u8a2d\u5b9a\u70ba "Unknown"\u3002'),(0,r.kt)("p",null,"\u7bc4\u4f8b\u5982\u4e0b (kubectl get node k8slab-worker -o yaml)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'status:\n  conditions:\n  - lastHeartbeatTime: "2023-08-27T14:03:45Z"\n    lastTransitionTime: "2023-08-27T14:04:30Z"\n    message: Kubelet stopped posting node status.\n    reason: NodeStatusUnknown\n    status: Unknown\n    type: Ready\n\n')),(0,r.kt)("p",null,"\u6240\u4ee5\u5c07\u9019\u4e9b\u6982\u5ff5\u6574\u5408\u8d77\u4f86\uff0c\u53ef\u4ee5\u5f97\u5230\u4e0b\u5217\u7684\u6982\u5ff5\u5716\uff0cKubelet \u672c\u8eab\u8207 Controller \u662f\u975e\u540c\u6b65\u5de5\u4f5c\uff0c\u4e00\u500b\u8ca0\u8cac\u66f4\u65b0\u72c0\u614b\uff0c\u4e00\u500b\u8ca0\u8cac\u78ba\u8a8d\u72c0\u614b\u4e26\u4e14\u66f4\u65b0"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SyLbzR_T2.png",alt:null})),(0,r.kt)("p",null,"\u800c\u6574\u500b\u908f\u8f2f\u5de5\u4f5c\u6d41\u7a0b\u5247\u53ef\u4ee5\u7528\u4e0b\u5716\u4f86\u8868\u9054\n",(0,r.kt)("img",{parentName:"p",src:"https://hackmd.io/_uploads/SJU-KKYan.png",alt:null})),(0,r.kt)("h1",{id:"evict-pod"},"Evict Pod"),(0,r.kt)("p",null,"\u524d\u8ff0\u63a2\u8a0e\u7684\u662f Kubernetes \u5982\u4f55\u5c07\u4e00\u500b\u7bc0\u9ede\u8996\u70ba\u6545\u969c(NotReady)\uff0c\u90a3\u7576\u7bc0\u9ede\u70ba NotReady \u5f8c\uff0c\u7bc0\u9ede\u4e0a\u904b\u884c\u7684 Pod \u6703\u591a\u4e45\u624d\u88ab\u91cd\u751f?"),(0,r.kt)("p",null,"\u9019\u90e8\u5206 Kubernetes \u662f\u5229\u7528\u4e86 Taint/Toleration \u7684\u6a5f\u5236\u4f86\u9054\u5230\u81ea\u52d5\u91cd\u751f\u7684\uff0c\u8a73\u7d30\u8aaa\u660e\u53ef\u4ee5\u53c3\u95b1 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions"},"Kubernetes Taint Based Evicition"),"\u3002"),(0,r.kt)("p",null,"\u7c21\u55ae\u4f86\u8aaa\uff0c\u7576\u7bc0\u9ede\u88ab\u5224\u5b9a\u70ba\u6545\u969c\u6642\uff0c\u6703\u81ea\u52d5\u88ab\u6253\u4e0a\u4e00\u500b ",(0,r.kt)("strong",{parentName:"p"},"node.kubernetes.io/not-ready")," \u7684 Taint\uff0c\u800c\u6bcf\u500b Pod \u53ef\u4ee5\u900f\u904e Toleration \u642d\u914d tolerationSeconds \u4f86\u6c7a\u5b9a\u80fd\u5920\u5fcd\u53d7\u8a72\u7bc0\u9ede\u591a\u4e45\uff0c\u6642\u9593\u4e00\u5230\u7121\u6cd5\u5fcd\u53d7\u5247\u81ea\u52d5\u6703\u88ab\u91cd\u65b0\u90e8\u7f72\u3002"),(0,r.kt)("p",null,"\u6839\u64da ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/command-line-tools-reference/kube-apiserver/"},"API-Server")," \u6587\u4ef6\u53ef\u4ee5\u767c\u73fe\u5169\u500b\u76f8\u95dc\u8a2d\u5b9a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"--default-not-ready-toleration-seconds int     Default: 300\nIndicates the tolerationSeconds of the toleration for notReady:NoExecute \nthat is added by default to every pod that does \nnot already have such a toleration.\n\n--default-unreachable-toleration-seconds int     Default: 300\nIndicates the tolerationSeconds of the toleration for unreachable:NoExecute \nthat is added by default to every pod that does \nnot already have such a toleration.\n")),(0,r.kt)("p",null,"\u9019\u5169\u500b\u8a2d\u5b9a\u9810\u8a2d\u90fd\u662f 300 \u79d2\uff0c\u9019\u610f\u5473\u8005\u7576\u7bc0\u9ede\u88ab\u6a19\u793a\u70ba\u640d\u58de\u5f8c\uff0c\u904b\u884c\u7684 Pod \u6703\u5b58\u6d3b\u81f3\u5c11 300s \u624d\u6703\u88ab\u79fb\u9664\u91cd\u65b0\u90e8\u7f72\u3002"),(0,r.kt)("p",null,"\u800c\u8a72\u6578\u503c\u9664\u4e86\u900f\u904e API-Server \u8a2d\u5b9a\u9810\u8a2d\u503c\u5916\uff0c\u6bcf\u500b Pod \u4e5f\u53ef\u4ee5\u7368\u7acb\u8a2d\u5b9a\uff0c\u7bc4\u4f8b\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml="},'tolerations:\n- key: "node.kubernetes.io/unreachable"\n  operator: "Exists"\n  effect: "NoExecute"\n  tolerationSeconds: 20\n')),(0,r.kt)("p",null,"\u56e0\u6b64\u5982\u679c\u5e0c\u671b Pod \u53ef\u4ee5\u66f4\u5feb\u7684\u56e0\u61c9\u7bc0\u9ede\u6545\u969c\u800c\u88ab\u91cd\u65b0\u90e8\u7f72\uff0c\u5247\u90e8\u7f72\u7684\u6642\u5019\u53ef\u4ee5\u8abf\u6574 ",(0,r.kt)("inlineCode",{parentName:"p"},"tolerationSeconds")," \u8b93\u5176\u66f4\u5feb\u88ab\u53cd\u61c9\uff0c\u53e6\u5916\u4e5f\u53ef\u4ee5\u5f9e kubelet/controller \u7684\u53c3\u6578\u53bb\u8abf\u6574\u8b93\u7bc0\u9ede\u66f4\u5feb\u7684\u88ab\u8b58\u5225\u70ba\u640d\u58de\u4f86\u89f8\u767c\u7bc0\u9ede\u7684\u91cd\u65b0\u8abf\u5ea6\u884c\u70ba\u3002"),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Kubelet \u65bc 1.17 \u5f8c\u90fd\u63a1\u7528 Lease \u7684\u65b9\u5f0f\u4f86\u56de\u5831 heartbeat"),(0,r.kt)("li",{parentName:"ol"},"Kubelet \u8207 Controller \u662f\u975e\u540c\u6b65\u5de5\u4f5c\uff0c\u4e00\u500b\u8ca0\u8cac\u56de\u5831\uff0c\u4e00\u500b\u8ca0\u8cac\u76e3\u63a7\uff0c\u5f7c\u6b64\u9593\u7684 timeout \u8a2d\u5b9a\u4e0a\u8981\u4ed4\u7d30\u8207\u5c0f\u5fc3"),(0,r.kt)("li",{parentName:"ol"},"kubelet \u4e0a\u7684 ",(0,r.kt)("strong",{parentName:"li"},"nodeLeaseDurationSeconds")," \u6c7a\u5b9a\u591a\u4e45\u66f4\u65b0\u4e00\u6b21 Lease \u7269\u4ef6\uff0c\u76ee\u524d\u8a2d\u5b9a\u7684\u6578\u503c*0.25 \u5247\u662f\u6700\u5f8c\u7684\u79d2\u6578"),(0,r.kt)("li",{parentName:"ol"},"Contoller \u4e0a\u7684 ",(0,r.kt)("strong",{parentName:"li"},"node-monitor-period")," \u8207 ",(0,r.kt)("strong",{parentName:"li"},"node-monitor-grace-period")," \u5247\u6c7a\u5b9a Controller \u591a\u4e45\u6aa2\u67e5\u4e00\u6b21\uff0c\u4ee5\u53ca\u8d85\u6642\u591a\u4e45\u8981\u5224\u5b9a\u70ba NotReady."),(0,r.kt)("li",{parentName:"ol"},"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u6700\u5feb\u9700\u8981 40 \u79d2\u53bb\u5075\u6e2c\u7bc0\u9ede\u6545\u969c"),(0,r.kt)("li",{parentName:"ol"},"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u6bcf\u500b Pod \u53ef\u4ee5\u65bc\u6545\u969c\u7bc0\u9ede\u4e0a\u5b58\u6d3b 300 \u79d2"),(0,r.kt)("li",{parentName:"ol"},"\u9810\u8a2d\u60c5\u6cc1\u4e0b\uff0c\u4e00\u500b Pod \u6700\u5feb\u9700\u8981 340 \u79d2\u624d\u53ef\u4ee5\u5f9e\u6545\u969c\u7bc0\u9ede\u4e2d\u88ab\u91cd\u65b0\u90e8\u7f72"),(0,r.kt)("li",{parentName:"ol"},"Pod \u53ef\u4ee5\u900f\u904e Taint-Based Evicition \u7684\u65b9\u5f0f\u4f86\u8abf\u6574\u53cd\u61c9\u6642\u9593")),(0,r.kt)("h1",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes-sigs/kubespray/blob/master/docs/kubernetes-reliability.md"},"https://github.com/kubernetes-sigs/kubespray/blob/master/docs/kubernetes-reliability.md")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions"},"https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#taint-based-evictions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/589-efficient-node-heartbeats"},"https://github.com/kubernetes/enhancements/tree/master/keps/sig-node/589-efficient-node-heartbeats"))))}c.isMDXComponent=!0}}]);