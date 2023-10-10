"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[9947],{3905:(e,t,r)=>{r.d(t,{Zo:()=>h,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),m=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=m(r),u=a,k=p["".concat(o,".").concat(u)]||p[u]||i[u]||l;return r?n.createElement(k,s(s({ref:t},h),{},{components:r})):n.createElement(k,s({ref:t},h))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=u;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var m=2;m<l;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88657:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>i,frontMatter:()=>l,metadata:()=>c,toc:()=>m});var n=r(87462),a=(r(67294),r(3905));const l={title:"\u900f\u904e RKE \u67b6\u8a2d\u7b2c\u4e00\u5957 Rancher(\u4e0b)",sidebar_position:5,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},s="\u524d\u8a00",c={unversionedId:"techPost/2021/iThome_Challenge/day5",id:"techPost/2021/iThome_Challenge/day5",title:"\u900f\u904e RKE \u67b6\u8a2d\u7b2c\u4e00\u5957 Rancher(\u4e0b)",description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2021/iThome_Challenge/day5.md",sourceDirName:"techPost/2021/iThome_Challenge",slug:"/techPost/2021/iThome_Challenge/day5",permalink:"/docs/techPost/2021/iThome_Challenge/day5",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Rancher",permalink:"/docs/tags/rancher"}],version:"current",sidebarPosition:5,frontMatter:{title:"\u900f\u904e RKE \u67b6\u8a2d\u7b2c\u4e00\u5957 Rancher(\u4e0b)",sidebar_position:5,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},sidebar:"techPost",previous:{title:"\u900f\u904e RKE \u67b6\u8a2d\u7b2c\u4e00\u5957 Rancher(\u4e0a)",permalink:"/docs/techPost/2021/iThome_Challenge/day4"},next:{title:"Rancher \u7cfb\u7d71\u7ba1\u7406\u6307\u5357 - \u4f7f\u7528\u8005\u767b\u5165\u7ba1\u7406",permalink:"/docs/techPost/2021/iThome_Challenge/day6"}},o={},m=[],h={toc:m},p="wrapper";function i(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u5c07\u6703\u793a\u7bc4\u5982\u4f55\u4f7f\u7528 Rke + Helm \u4f86\u642d\u5efa\u4e00\u500b\u57fa\u65bc RKE \u53e2\u96c6\u7684 Rancher \u670d\u52d9\u3002\n\u8a72 RKE \u53e2\u96c6\u6703\u6709\u4e09\u500b\u7bc0\u9ede\uff0c\u56e0\u6b64\u74b0\u5883\u65b9\u9762\u5c31\u6703\u6e96\u5099\u4e09\u53f0 VM\uff0c\u9019\u4e09\u53f0 VM \u524d\u9762\u5c31\u6703\u67b6\u8a2d\u4e00\u500b Load-Balancer \u4f86\u5e6b\u5fd9\u5c07\u6d41\u91cf\u5c0e\u5411\u5f8c\u65b9\u670d\u52d9\u3002\n\u540c\u6642\u4e5f\u6703\u6e96\u5099\u4e00\u500b rancher.hwchiu.com \u7684 DNS \u7d00\u9304\uff0c\u9019\u6a23\u4e4b\u5f8c\u5b58\u53d6\u6642\u6703\u66f4\u70ba\u7c21\u55ae\u8207\u65b9\u4fbf\u3002"),(0,a.kt)("h1",{id:"\u74b0\u5883\u6e96\u5099"},"\u74b0\u5883\u6e96\u5099"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u7684\u74b0\u5883\u90fd\u6703\u57fa\u65bc Azure \u96f2\u7aef\u74b0\u5883\u4f86\u4f7f\u7528\uff0c\u5305\u542b\u4e86 VMs \u8207 LoadBalancer \u7684\u8a2d\u5b9a\n\u672c\u6587\u7ae0\u4e0d\u6703\u63a2\u8a0e Azure \u96f2\u7aef\u8a72\u5982\u4f55\u4f7f\u7528\uff0c\u4e8b\u5be6\u4e0a\u8b80\u8005\u53ef\u4ee5\u4f7f\u7528\u4efb\u610f\u7684\u516c\u6709\u96f2\u670d\u52d9\uff0c\u751a\u81f3\u662f\u5730\u7aef\u6a5f\u5668\u90fd\u53ef\u3002\n\u4e0b\u8ff0\u70ba\u76f8\u95dc\u7684\u8edf\u9ad4\u7248\u672c\u8cc7\u8a0a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VM: Azure VM"),(0,a.kt)("li",{parentName:"ul"},"OS: Ubuntu 20.04.2 LTS"),(0,a.kt)("li",{parentName:"ul"},"Rke: v1.2.11")),(0,a.kt)("p",null,"\u6574\u500b\u67b6\u69cb\u5982\u5716\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://imgur.com/TSO7fHf.png",alt:"Imgur"})),(0,a.kt)("h1",{id:"rancher"},"Rancher"),(0,a.kt)("p",null,"\u524d\u7bc7\u6587\u7ae0\u4e2d\u5df2\u7d93\u900f\u904e rke \u7684\u6307\u4ee4\u5275\u5efa\u4e86\u4e00\u500b\u57fa\u65bc\u4e09\u7bc0\u9ede\u7684 Kubernetes \u53e2\u96c6\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u8981\u900f\u904e Helm \u6307\u4ee4\u5c07 Rancher \u7d66\u5b89\u88dd\u5230\u6211\u5011\u7684 RKE \u4e4b\u4e2d\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u518d\u6b21\u63d0\u9192\uff0c\u91dd\u5c0d Rancher v2.5 \u8207\u4e4b\u5f8c\u7684\u7248\u672c\u8acb\u4f7f\u7528 Helm v3 \u4f86\u5b89\u88dd\uff0c\u5b98\u65b9\u5df2\u7d93\u4e0d\u518d\u652f\u63f4\u4f7f\u7528 Helm v2\uff0c\u5982\u679c\u4f60\u820a\u7248\u7684 Rancher \u662f\u4f7f\u7528 Helm v2 \u5b89\u88dd\u7136\u5f8c\u60f3\u8981\u5c07\u5176\u5347\u7d1a\u5230 Rancher v2.5 \u7cfb\u5217\uff0c\u5247\u5fc5\u9808\u8981\u5148\u91dd\u5c0d Helm v2 -> Helm v3 \u9032\u884c\u8f49\u79fb\u3002\n\u8f49\u79fb\u7684\u65b9\u5f0f\u53ef\u4ee5\u53c3\u8003 [Helm Plugin helm-2to3](https://github.com/helm/helm-2to3)\uff0c\u5b98\u65b9\u9801\u9762\u6709\u4ecb\u7d39\u8a73\u7d30\u7684\u7528\u6cd5\uff0c\u6ce8\u610f\u4f7f\u7528\u524d\u5148\u5c0d\u6240\u6709 helm \u7684\u6a94\u6848\u9032\u884c\u5099\u4efd\u4ee5\u514d\u4e0d\u719f\u6089\u91c0\u6210\u4e0d\u53ef\u6062\u5fa9\u7684\u60c5\u6cc1\n")),(0,a.kt)("p",null,"\u7b2c\u4e00\u6b65\u5148\u5c07 Rancher \u5b98\u65b9\u7684 Helm Repo \u7d66\u52a0\u5165\u5230 Helm \u6e05\u55ae\u4e2d\uff0c\u5b98\u65b9\u63d0\u4f9b\u4e09\u7a2e\u4e0d\u540c\u7684 Helm Repo \u4f9b\u4f7f\u7528\u8005\u4f7f\u7528\uff0c\u5305\u542b"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Latest: ",(0,a.kt)("a",{parentName:"li",href:"https://releases.rancher.com/server-charts/latest"},"https://releases.rancher.com/server-charts/latest")),(0,a.kt)("li",{parentName:"ol"},"Stable: ",(0,a.kt)("a",{parentName:"li",href:"https://releases.rancher.com/server-charts/stable"},"https://releases.rancher.com/server-charts/stable")),(0,a.kt)("li",{parentName:"ol"},"Alpha: ",(0,a.kt)("a",{parentName:"li",href:"https://releases.rancher.com/server-charts/alpha"},"https://releases.rancher.com/server-charts/alpha"))),(0,a.kt)("p",null,"\u6839\u64da\u4e0d\u540c\u7684\u9700\u6c42\u63a1\u7528\u4e0d\u540c\u7684\u7248\u672c\uff0c\u5982\u679c\u4e0d\u662f Rancher \u958b\u767c\u8005\u7684\u8a71\uff0c\u6211\u8a8d\u70ba Alpha \u6c92\u6709\u4f7f\u7528\u7684\u9700\u6c42\uff0c\u800c Latest \u5247\u662f\u8b93\u4f60\u6709\u6a5f\u6703\u53ef\u4ee5\u5617\u8a66\u76ee\u524d\u6700\u65b0\u7684\u7248\u672c\uff0c\u770b\u770b\u4e00\u4e9b\u65b0\u529f\u80fd\u6216\u662f\u4e00\u4e9b\u820a\u6709 Bug \u662f\u5426\u6709\u88ab\u79fb\u9664\u3002\u5927\u90e8\u5206\u60c5\u6cc1\u4e0b\u63a8\u85a6\u7a69\u7a69\u5730\u4f7f\u7528 stable \u7248\u672c\uff0c\u9047\u5230\u554f\u984c\u4e5f\u6bd4\u8f03\u6709\u6a5f\u6703\u88ab\u89e3\u6c7a\u3002"),(0,a.kt)("p",null,"\u672c\u6b21\u5b89\u88dd\u5c07\u63a1\u7528 stable \u4f5c\u70ba\u4f86\u6e90\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'azureuser@rke-management:~$ helm repo add rancher-stable https://releases.rancher.com/server-charts/stable\n"rancher-stable" has been added to your repositories\nazureuser@rke-management:~$ helm repo update\nHang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "rancher-stable" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\n')),(0,a.kt)("p",null,"\u8981\u5b89\u88dd Rancher \u4e4b\u524d\uff0c\u6709\u4e00\u500b\u8981\u8655\u7406\u7684\u6771\u897f\u5c31\u662f\u6240\u8b02\u7684 SSL \u6191\u8b49\uff0c",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s/#3-choose-your-ssl-configuration"},"\u5b98\u7db2\u6709\u63d0\u4f9b\u4e0d\u540c\u9078\u9805\u7684\u6559\u5b78"),"\uff0c\u4e3b\u8981\u53ef\u4ee5\u5206\u6210"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Rancher \u81ea\u7c3d\u6191\u8b49"),(0,a.kt)("li",{parentName:"ol"},"\u81ea\u884c\u6e96\u5099\u6191\u8b49"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e Let's Encrypt \u7372\u5f97\u7684\u6191\u8b49")),(0,a.kt)("p",null,"\u70ba\u4e86\u5f8c\u7e8c\u9023\u7dda\u9806\u5229\u8207\u65b9\u4fbf\uff0c\u5927\u90e8\u5206\u90fd\u4e0d\u6703\u8003\u616e\u4f7f\u7528\u81ea\u7c3d\u6191\u8b49\u800c\u662f\u6703\u63a1\u7528(2)/(3)\u5169\u500b\u9078\u9805\uff0c\u800c Let's Encrypt \u4f7f\u7528\u4e0a\u9084\u662f\u76f8\u5c0d\u7c21\u55ae\u8207\u8f15\u9b06\u3002\nKubernetes \u751f\u614b\u7cfb\u4e2d\u91dd\u5c0d Let's Encrypt \u4f86\u7522\u751f\u6191\u8b49\u7684\u5c08\u6848\u4e5f\u4e0d\u5c11\uff0c\u5176\u4e2d\u76ee\u524d\u6700\u71b1\u9580\u4e14\u6700\u591a\u4eba\u4f7f\u7528\u7684\u975e cert-manager \u83ab\u5c6c\u3002\n\u540c\u6642 Rancher \u5b98\u65b9\u4e5f\u63a8\u85a6\u4f7f\u7528 cert-manager \u4f86\u4f7f\u7528\uff0c\u56e0\u6b64\u63a5\u4e0b\u4f86\u5c31\u6703\u4f7f\u7528 cert-manager \u4f86\u8f14\u52a9 Let's Encrypt \u7684\u8655\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u9019\u908a\u8981\u6ce8\u610f\u7684\u662f\uff0c Rancher \u5b98\u7db2\u6709\u63a8\u85a6\u4f7f\u7528\u7684 Cert-Manager \u7248\u672c\uff0c\u8a72\u7248\u672c\u901a\u5e38\u90fd\u6703\u6bd4 Cert-Manager \u6162\u4e00\u4e9b\uff0c\u56e0\u6b64\u4f7f\u7528\u4e0a\u8acb\u4ee5 Rancher \u63a8\u85a6\u7684\u70ba\u4e3b\uff0c\u4e0d\u8981\u81ea\u884c\u7684\u5347\u7d1a cert-manager \u5230\u6700\u65b0\u7248\u672c\uff0c\u4ee5\u514d Rancher \u6c92\u6709\u9032\u884c\u6e2c\u8a66\u6574\u5408\u800c\u767c\u751f\u4e00\u4e9b\u4e0d\u9810\u671f\u7684\u932f\u8aa4\uff0c\u5230\u6642\u5019\u9664\u932f\u8d77\u4f86\u4e5f\u9ebb\u7169\u3002\n")),(0,a.kt)("p",null,"\u5982\u540c\u524d\u8ff0\u74b0\u5883\u6307\u51fa\uff0c\u672c\u7bc4\u4f8b\u6703\u4f7f\u7528\u7684\u57df\u540d\u662f rancher.hwchiu.com\uff0c\u8a72\u57df\u540d\u6703\u4e8b\u5148\u6307\u5411 Load-Balancer\uff0c\u4e26\u4e14\u5c07 HTTP/HTTPS \u7684\u9023\u7dda\u90fd\u5c0e\u5411\u5f8c\u65b9\u7684\u4e09\u53f0\u4f3a\u670d\u5668 server{1,2,3}\u3002"),(0,a.kt)("p",null,"\u63a5\u8005\u900f\u904e helm \u5b89\u88dd cert-manager \u5230\u74b0\u5883\u4e2d\uff0c\u6574\u500b\u6b65\u9a5f\u8ddf Rancher \u975e\u5e38\u96f7\u540c\uff0c\u6e96\u5099\u76f8\u95dc\u7684 repo \u4e26\u4e14\u900f\u904e helm \u5b89\u88dd\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'azureuser@rke-management:~$ helm repo add jetstack https://charts.jetstack.io\n"jetstack" has been added to your repositories\nazureuser@rke-management:~$ helm repo update\nHang tight while we grab the latest from your chart repositories...\n...Successfully got an update from the "jetstack" chart repository\n...Successfully got an update from the "rancher-stable" chart repository\nUpdate Complete. \u2388Happy Helming!\u2388\nazureuser@rke-management:~$\nazureuser@rke-management:~$ kubectl create namespace cert-manager\nazureuser@rke-management:~$ helm install   cert-manager jetstack/cert-manager   --namespace cert-manager   --version v1.0.4 --set installCRDs=true\n')),(0,a.kt)("p",null,"\u78ba\u8a8d cert-manager \u7684 pod \u90fd\u8d77\u4f86\u5f8c\uff0c\u4e0b\u4e00\u6b65\u5c31\u662f\u7e7c\u7e8c\u5b89\u88dd Rancher"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"azureuser@rke-management:~$ kubectl -n cert-manager get pods\nNAME                                       READY   STATUS    RESTARTS   AGE\ncert-manager-6d87886d5c-fr5r4              1/1     Running   0          2m\ncert-manager-cainjector-55db655cd8-2xfhf   1/1     Running   0          2m\ncert-manager-webhook-6846f844ff-8l299      1/1     Running   0          2m\n")),(0,a.kt)("p",null,"\u9996\u5148\u65bc rke \u53e2\u96c6\u4e2d\u5275\u7acb\u500b\u7d66 rancher \u4f7f\u7528\u7684 namespace\uff0c\u63a5\u8005\u900f\u904e helm \u6307\u4ee4\u52a0\u4e0a\u4e00\u4e9b\u53c3\u6578\uff0c\u9019\u4e9b\u53c3\u6578\u4e3b\u8981\u662f\u544a\u8a34 Rancher \u6211\u5011\u7684 Ingress \u60f3\u8981\u4f7f\u7528 letsEncrypt \u4f86\u7522\u751f\u76f8\u95dc\u7684 SSL \u6191\u8b49\b\uff0c\u5e0c\u671b\u6307\u5411\u7684\u57df\u540d\u662f rancher.hwchiu.com."),(0,a.kt)("p",null,"Rancher Helm Chart \u5c31\u6703\u91dd\u5c0d\u9019\u4e9b\u53c3\u6578\u53bb\u7522\u751f cert-manager \u9700\u8981\u7684\u7269\u4ef6\uff0c\u5982 Issuer\uff0c\u63a5\u8005 cert-manager \u5c31\u6703\u63a5\u66ff\u5f8c\u7e8c\u884c\u70ba\u4f86\u900f\u904e ACME \u7522\u751f\u4e00\u7d44\u5408\u6cd5\u7684 TLS \u6191\u8b49\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"azureuser@rke-management:~$ kubectl create namespace cattle-system\nazureuser@rke-management:~$ helm install rancher rancher-stable/rancher \\\n   --namespace cattle-system \\\n   --set hostname=rancher.hwchiu.com \\\n   --set replicas=3 \\\n   --set ingress.tls.source=letsEncrypt \\\n   --set letsEncrypt.email=hwchiu@hwchiu.com  \\\n   --version 2.5.9\nNAME: rancher\nLAST DEPLOYED: Sun Aug  8 20:14:03 2021\nNAMESPACE: cattle-system\nSTATUS: deployed\nREVISION: 1\nTEST SUITE: None\nNOTES:\nRancher Server has been installed.\n\nNOTE: Rancher may take several minutes to fully initialize. Please standby while Certificates are being issued and Ingress comes up.\n\nCheck out our docs at https://rancher.com/docs/rancher/v2.x/en/\n\nBrowse to https://rancher.hwchiu.com\n\nHappy Containering!\n")),(0,a.kt)("p",null,"\u8a3b: \u9810\u8a2d\u60c5\u6cc1\u4e0b ACME \u6703\u63a1\u7528 HTTP \u6311\u6230\u7684\u65b9\u5f0f\u4f86\u9a57\u8b49\u57df\u540d\u7684\u64c1\u6709\u6b0a\uff0c\u6240\u4ee5 load-balancer \u8a18\u5f97\u8981\u6253\u958b 80/443 \u7684 port\uff0c\u5c07\u9019\u4e9b\u670d\u52d9\u5c0e\u5411\u5f8c\u7aef\u7684 rke \u53e2\u96c6\u3002Rancher \u6703\u4f7f\u7528 cert-manager + ingress \u7b49\u76f8\u95dc\u8cc7\u6e90\u81ea\u52d5\u8655\u7406\u6191\u8b49\u3002"),(0,a.kt)("p",null,"\u5b89\u88dd\u5b8c\u7562\u5f8c\uff0c\u7b49\u5f85\u76f8\u95dc\u7684\u670d\u52d9\u88ab\u90e8\u7f72\uff0c\u78ba\u8a8d cattle-system \u9019\u500b namespace \u4e0b\u7684\u670d\u52d9\u90fd\u5448\u73fe running \u5f8c\uff0c\u6253\u958b\u700f\u89bd\u5668\u9023\u4e0a ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.hwchiu.com"},"https://rancher.hwchiu.com")," \u5c31\u6703\u770b\u5230\u4e0b\u8ff0\u7684\u767b\u5165\u756b\u9762"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/jddVbhD.png",alt:null})),(0,a.kt)("p",null,"\u56e0\u70ba\u662f\u7b2c\u4e00\u6b21\u767b\u5165\uff0c\u7cfb\u7d71\u6703\u8981\u6c42\u4f60\u66f4\u65b0\u5bc6\u78bc\uff0c\u540c\u6642\u53ef\u4ee5\u9078\u64c7\u9810\u8a2d\u7684\u700f\u89bd\u6a21\u5f0f\uff0c\u7531\u65bc\u6211\u5011\u60f3\u8981\u4f7f\u7528 Rancher \u53bb\u7ba1\u7406\u591a\u500b Cluster\uff0c\u56e0\u6b64\u6211\u5011\u9078\u64c7\u5de6\u908a\u7684\u683c\u5f0f\u3002\u63a5\u8005\u4e0b\u4e00\u6b65\u518d\u6b21\u78ba\u8a8d\u8981\u5b58\u53d6\u7684 URL\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/e5DJbIu.png",alt:null})),(0,a.kt)("p",null,"\u4e00\u5207\u9806\u5229\u7684\u8a71\uff0c\u5c31\u53ef\u4ee5\u6b63\u5f0f\u9032\u5165\u5230 Rancher \u7684\u4e3b\u8981\u4ecb\u9762\uff0c\u9019\u6642\u5019\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u756b\u9762\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/iIHlbp9.png",alt:null})),(0,a.kt)("p",null,"Rancher Server \u5b89\u88dd\u5b8c\u7562\u5f8c\uff0c\u6703\u628a ",(0,a.kt)("strong",{parentName:"p"},"\u7528\u4f86\u90e8\u7f72 Rancher \u7684 Kubernetes \u53e2\u96c6")," \u4e5f\u52a0\u5165\u5230 Rancher \u7684\u7ba1\u7406\u8996\u89d2\u4e2d\uff0c\u4e26\u4e14\u4f7f\u7528 local \u9019\u500b\u540d\u7a31\u4f86\u8868\u793a\u9019\u500b cluster\u3002\n\u5176\u4e2d\u53ef\u4ee5\u6ce8\u610f\u5230\u7684\u662f\u8a72\u53e2\u96c6\u7684 Provider \u662f\u986f\u793a\u70ba Imported\uff0c\u9019\u610f\u5473\u8005\u9019\u500b Kubernetes \u53e2\u96c6\u4e26\u4e0d\u662f\u7531 Rancher \u5e6b\u4f60\u5275\u9020\uff0c\u800c\u662f\u628a\u4e00\u500b\u5df2\u7d93\u904b\u884c\u7684\u53e2\u96c6\u7d66\u532f\u5165\u5230 Rancher \u4e2d\u3002"),(0,a.kt)("p",null,"\u7db2\u9801\u53ef\u4ee5\u9806\u5229\u5b58\u53d6\u5c31\u610f\u5473\u6211\u5011\u7b2c\u4e00\u500b Rancher \u670d\u52d9\u9806\u5229\u7684\u67b6\u8a2d\u8d77\u4f86\uff0c\u4e0b\u4e00\u7bc7\u6587\u7ae0\u5c31\u6703\u4f86\u4ed4\u7d30\u4ecb\u7d39\u5c0d\u65bc\u4e00\u500b IT Team \u7684\u7ba1\u7406\u4eba\u54e1\u4f86\u8aaa\uff0c\u5f9e\u7cfb\u7d71\u5c64\u9762\u4f86\u770b Rancher \u7684\u8a2d\u5b9a\u6709\u54ea\u4e9b\uff0c\u6bcf\u500b\u8a2d\u5b9a\u5c0d\u5718\u968a\u6709\u4ec0\u9ebc\u76ca\u8655\u8207\u597d\u8655\u3002"),(0,a.kt)("p",null,"\u6700\u5f8c\u4f86\u770b\u4e00\u4e0b kubernetes \u7684\u76f8\u95dc\u670d\u52d9\uff0c\u89c0\u5bdf\u4e00\u4e0b\u4e00\u500b\u57fa\u672c\u7684 Rancher \u670d\u52d9\u6709\u54ea\u4e9b\u4e00\u4e9b Pod\uff0c\u672a\u4f86\u8981\u9664\u932f\u6642\u624d\u6709\u6982\u5ff5\u61c9\u8a72\u8981\u53bb\u54ea\u500b namespace \u770b\u54ea\u4e9b\u670d\u52d9\u3002\ncattle-system \u8207 kube-system \u5167\u90fd\u6709\u76f8\u95dc\u7684\u670d\u52d9\uff0c\u9019\u908a\u8981\u6ce8\u610f\u7684\u662f kube-system \u653e\u7684\u662f\u6211\u5011\u6700\u521d\u5b89\u88dd RKE \u6642\u90e8\u7f72\u7684\u8cc7\u6e90\uff0c\u800c cattle-system \u5247\u662f\u6211\u5011\u900f\u904e helm \u90e8\u7f72 Rancher \u7528\u7684\u3002\u6240\u4ee5\u57fa\u672c\u4e0a\u5c31\u662f\u4e09\u500b rancher Pod \u4ee5\u53ca\u4e00\u500b webhook\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"azureuser@rke-management:~$ kubectl get pods -A  | awk '{print $1\"\\t\"$2}'\nNAMESPACE       NAME\ncattle-system   helm-operation-56h22\ncattle-system   helm-operation-bjvmx\ncattle-system   helm-operation-jtwf6\ncattle-system   helm-operation-stv9x\ncattle-system   helm-operation-ttxt4\ncattle-system   helm-operation-xtznm\ncattle-system   rancher-745c97799b-fqfsw\ncattle-system   rancher-745c97799b-ls8wc\ncattle-system   rancher-745c97799b-nhlz6\ncattle-system   rancher-webhook-6cccfd96b5-grd4q\ncert-manager    cert-manager-6d87886d5c-fr5r4\ncert-manager    cert-manager-cainjector-55db655cd8-2xfhf\ncert-manager    cert-manager-webhook-6846f844ff-8l299\nfleet-system    fleet-agent-d59db746-hfbcq\nfleet-system    fleet-controller-79554fcbf5-b7ckf\nfleet-system    gitjob-568c57cfb9-ncpf5\ningress-nginx   default-http-backend-6977475d9b-hk2br\ningress-nginx   nginx-ingress-controller-8rtpv\ningress-nginx   nginx-ingress-controller-bv2lq\ningress-nginx   nginx-ingress-controller-mhfm6\nkube-system     coredns-55b58f978-545dx\nkube-system     coredns-55b58f978-qznqj\nkube-system     coredns-autoscaler-76f8869cc9-hrlqq\nkube-system     kube-flannel-44hvn\nkube-system     kube-flannel-rhw7v\nkube-system     kube-flannel-thrln\nkube-system     metrics-server-55fdd84cd4-wqdkw\nkube-system     rke-coredns-addon-deploy-job-pjdln\nkube-system     rke-ingress-controller-deploy-job-m7sj2\nkube-system     rke-metrics-addon-deploy-job-vtnfk\nkube-system     rke-network-plugin-deploy-job-mv8nr\nrancher-operator-system rancher-operator-595ddc6db9-tfgp8\n")),(0,a.kt)("p",null,"\u4e00\u4f46\u4f7f\u7528 Helm \u5b89\u88dd Rancher\uff0c\u672a\u4f86\u7684\u5347\u7d1a\u5927\u90e8\u5206\u90fd\u53ef\u4ee5\u900f\u904e Helm \u9019\u500b\u6307\u4ee4\u7e7c\u7e8c\u5347\u7d1a\uff0c\u5347\u7d1a\u7684\u6982\u5ff5\u4e5f\u975e\u5e38\u7c21\u55ae"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6aa2\u67e5\u7576\u524d\u7248\u672c\u7684 release note\uff0c\u770b\u770b\u6709\u4ec0\u9ebc\u5347\u7d1a\u9700\u8981\u6ce8\u610f\u7684\u4e8b\u9805"),(0,a.kt)("li",{parentName:"ol"},"\u66f4\u65b0 helm repo"),(0,a.kt)("li",{parentName:"ol"},"\u900f\u904e helm \u66f4\u65b0 rancher \u9019\u500b release\uff0c\u4e26\u4e14\u900f\u904e --version \u6307\u540d\u4f7f\u7528\u65b0\u7684\u7248\u672c"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e0d\u60f3\u8981\u6bcf\u6b21\u90fd\u8f38\u5165\u524d\u8ff0\u4e00\u5806\u95dc\u65bc SSL \u7684\u53c3\u6578\uff0c\u53ef\u4ee5\u628a\u54ea\u4e9b\u53c3\u6578\u8b8a\u6210\u4e00\u500b values.yaml \u7d66\u50b3\u5165")),(0,a.kt)("p",null,"\u8a73\u7d30\u8cc7\u8a0a\u5efa\u8b70\u53c3\u95b1",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s/upgrades/"},"\u5b98\u7db2\u6587\u7ae0"),"\u4f86\u770b\u770b\u66f4\u8a73\u7d30\u7684\u5347\u7d1a\u7b56\u7565\u3002\n\u5982\u679c\u4e0d\u60f3\u8981\u900f\u904e rke \u4f86\u7dad\u8b77 Rancher \u7684\u8a71\uff0c\u5b98\u7db2\u4e5f\u6709\u5982\u4f55\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s/amazon-eks/"},"EKS"),"/",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s/aks/"},"AKS"),"/",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.5/en/installation/install-rancher-on-k8s/gke/"},"GKE")," \u7b49\u516c\u6709\u96f2 kubernetes \u670d\u52d9\u7dad\u8b77 Rancher \u7684\u76f8\u95dc\u6559\u5b78\u3002"))}i.isMDXComponent=!0}}]);