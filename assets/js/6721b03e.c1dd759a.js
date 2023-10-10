"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[80781],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=l,k=p["".concat(i,".").concat(m)]||p[m]||h[m]||a;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:l,o[1]=c;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var r=n(87462),l=(n(67294),n(3905));const a={title:"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72 - \u6dfa\u8ac7 Rancher \u7684\u61c9\u7528\u7a0b\u5f0f\u7ba1\u7406",sidebar_position:17,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},o="\u6982\u5ff5\u63a2\u8a0e",c={unversionedId:"techPost/2021/iThome_Challenge/day17",id:"techPost/2021/iThome_Challenge/day17",title:"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72 - \u6dfa\u8ac7 Rancher \u7684\u61c9\u7528\u7a0b\u5f0f\u7ba1\u7406",description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2021/iThome_Challenge/day17.md",sourceDirName:"techPost/2021/iThome_Challenge",slug:"/techPost/2021/iThome_Challenge/day17",permalink:"/docs/techPost/2021/iThome_Challenge/day17",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Rancher",permalink:"/docs/tags/rancher"}],version:"current",sidebarPosition:17,frontMatter:{title:"\u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72 - \u6dfa\u8ac7 Rancher \u7684\u61c9\u7528\u7a0b\u5f0f\u7ba1\u7406",sidebar_position:17,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},sidebar:"techPost",previous:{title:"Rancher \u6307\u4ee4\u5de5\u5177\u7684\u64cd\u4f5c",permalink:"/docs/techPost/2021/iThome_Challenge/day16"},next:{title:"Rancher Catalog(v2.0~v2.4) \u4ecb\u7d39",permalink:"/docs/techPost/2021/iThome_Challenge/day18"}},i={},u=[],s={toc:u},p="wrapper";function h(e){let{components:t,...n}=e;return(0,l.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6982\u5ff5\u63a2\u8a0e"},"\u6982\u5ff5\u63a2\u8a0e"),(0,l.kt)("p",null,"Rancher \u4f5c\u70ba\u4e00\u500b Kubernetes \u7ba1\u7406\u5e73\u53f0\uff0c\u63d0\u4f9b\u4e0d\u540c\u7684\u65b9\u5f0f\u5c07 Kubernetes \u53e2\u96c6\u7d66\u532f\u5165\u5230 Rancher \u7ba1\u7406\u5e73\u53f0\u4e2d\uff0c\u4e0d\u8ad6\u662f\u5df2\u7d93\u5275\u7acb\u7684 Kubernetes \u6216\u662f\u5148\u900f\u904e Rancher \u5275\u9020 RKE \u63a5\u8005\u532f\u5165\u5230 Rancher \u4e2d\u3002"),(0,l.kt)("p",null,"\u4f46\u662f Kubernetes \u7d42\u7a76\u53ea\u662f\u4e00\u500b\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\uff0c\u524d\u8ff0\u4ecb\u7d39\u7684\u5404\u7a2e\u6a5f\u5236\u6216\u662f Rancher \u6574\u5408\u7684\u529f\u80fd\u90fd\u662f\u8f14\u52a9 Kubernetes \u7684\u7dad\u8b77\uff0c\u5c0d\u65bc\u5718\u968a\u6700\u91cd\u8981\u7684\u9084\u662f\u7522\u54c1\u672c\u8eab\uff0c\u7522\u54c1\u53ef\u80fd\u662f\u7531\u6578\u500b\u61c9\u7528\u7a0b\u5f0f\u6240\u7d44\u5408\u800c\u6210\uff0c\u800c\u6bcf\u500b\u61c9\u7528\u7a0b\u5f0f\u53ef\u80fd\u5c0d\u61c9\u5230 Kubernetes \u5167\u53c8\u662f\u591a\u7a2e\u4e0d\u540c\u7684\u7269\u4ef6\uff0c\u8b6c\u5982 Deployment, Service, StorageClass \u7b49\u3002\n\u63a5\u4e0b\u4f86\u6703\u4f7f\u7528\u61c9\u7528\u7a0b\u5f0f\u9019\u500b\u8a5e\u4f86\u4ee3\u8868\u591a\u500b Kubernetes \u5167\u7684\u8cc7\u6e90\u96c6\u5408\u3002"),(0,l.kt)("p",null,"\u904e\u5f80\u63a2\u8a0e\u5230\u90e8\u7f72\u61c9\u7528\u7a0b\u5f0f\u5230 Kubernetes \u53e2\u96c6\u5167\u57fa\u672c\u4e0a\u6703\u5206\u6210\u5169\u500b\u65b9\u5411\u4f86\u63a2\u8a0e"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5982\u4f55\u5b9a\u7fa9\u8207\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f\u4f9b\u5718\u968a\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u61c9\u7528\u7a0b\u5f0f\u7d66\u5230 Kubernetes \u53e2\u96c6\u7684\u6d41\u7a0b")),(0,l.kt)("h1",{id:"\u5b9a\u7fa9\u8207\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f"},"\u5b9a\u7fa9\u8207\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f"),(0,l.kt)("p",null,"Kubernetes \u7684\u7269\u4ef6\u57fa\u672c\u4e0a\u53ef\u4ee5\u900f\u904e\u5169\u7a2e\u683c\u5f0f\u4f86\u8868\u9054\uff0c\u5206\u5225\u662f JSON \u8207 YAML\uff0c\u4e0d\u904e\u76ee\u524d\u4e3b\u6d41\u9084\u662f\u4ee5 YAML \u70ba\u4e3b\u3002\n\u9019\u610f\u5473\u9019\u4e00\u500b\u6700\u7c21\u55ae\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f\u7684\u65b9\u5f0f\u5c31\u662f\u4f7f\u7528\u4e00\u5806 YAML \u6a94\u6848\uff0c\u6a94\u6848\u5167\u5247\u662f\u5404\u7a2e Kubernetes \u7684\u7269\u4ef6\u3002"),(0,l.kt)("p",null,"\u9019\u4e9b\u61c9\u7528\u7a0b\u5f0f\u672c\u8eab\u9084\u9700\u8981\u8003\u616e\u5230\u4e0b\u5217\u4f7f\u7528\u60c5\u5883"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u8a72\u61c9\u7528\u7a0b\u5f0f\u6703\u4e0d\u6703\u9700\u8981\u8de8\u5718\u968a\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ol"},"\u8a72\u61c9\u7528\u7a0b\u5f0f\u662f\u5426\u9700\u8981\u91dd\u5c0d\u4e0d\u540c\u74b0\u5883\u6709\u4e0d\u540c\u7684\u53c3\u6578"),(0,l.kt)("li",{parentName:"ol"},"\u8a72\u61c9\u7528\u7a0b\u5f0f\u672c\u8eab\u6709\u6c92\u6709\u5176\u4ed6\u76f8\u4f9d\u6027\uff0c\u8b6c\u5982\u90e8\u7f72 A \u61c9\u7528\u7a0b\u5f0f\u6703\u9700\u8981\u5148\u90e8\u7f72 B \u61c9\u7528\u7a0b\u5f0f"),(0,l.kt)("li",{parentName:"ol"},"...\u7b49")),(0,l.kt)("p",null,"\u4e0a\u8ff0\u7684\u9019\u4e9b\u4f7f\u7528\u60c5\u5883\u662f\u771f\u5be6\u5b58\u5728\u7684\uff0c\u800c\u70ba\u4e86\u89e3\u6c7a\u9019\u4e9b\u554f\u984c\uff0c\u5927\u90e8\u5206\u60c5\u6cc1\u4e0b\u90fd\u4e0d\u6703\u4f7f\u7528\u7d14 YAML \u6a94\u6848\u4f86\u7ba1\u7406\u61c9\u7528\u7a0b\u5f0f\uff0c\u8b6c\u5982\u60f3\u8981\u8b93\u4e00\u500b Service \u91dd\u5c0d\u4e0d\u540c\u74b0\u5883\u6709\u4e0d\u540c\u8a2d\u5b9a\u5c31\u4e0d\u592a\u597d\u8655\u7406\uff0c\u9664\u4e86\u6e96\u5099\u591a\u500b\u5e7e\u4e4e\u4e00\u6a23\u7684\u6a94\u6848\u5916\u5e7e\u4e4e\u6c92\u6709\u8fa6\u6cd5\u3002\n\u76ee\u524d\u4e3b\u6d41\u7684\u7ba1\u7406\u65b9\u5f0f\u6709 Helm, Kustomize\uff0c\u5176\u9918\u7684\u9084\u6709 ksonnet \u7b49\u3002\n\u4e0d\u540c\u89e3\u6c7a\u65b9\u6848\u90fd\u63a1\u7528\u4e0d\u540c\u7684\u5f62\u5f0f\u4f86\u7ba1\u7406\u8207\u90e8\u7f72\u61c9\u7528\u7a0b\u5f0f\uff0c\u8209\u4f8b\u4f86\u8aaa\n\u4f7f\u7528 Helm \u7684\u4f7f\u7528\u8005\u53ef\u4ee5\u63a1\u7528\u4e0b\u5217\u4e0d\u540c\u65b9\u5f0f\u4f86\u5b89\u88dd\u61c9\u7528\u7a0b\u5f0f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"helm install"),(0,l.kt)("li",{parentName:"ol"},"helm template | kubectl apply -")),(0,l.kt)("p",null,"\u800c\u4f7f\u7528 kustomize \u7684\u4f7f\u7528\u8005\u5247\u53ef\u4ee5\u4f7f\u7528"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"kustomize ..."),(0,l.kt)("li",{parentName:"ol"},"kubectl -k ...")),(0,l.kt)("p",null,"\u56e0\u70ba kubectl \u76ee\u524d\u5df2\u7d93\u5167\u5efa kustomize \u7684\u529f\u80fd\uff0c\u6240\u4ee5\u76f4\u63a5\u4f7f\u7528 kustomize \u6307\u5b9a\u6216\u662f kubectl \u90fd\u53ef\u4ee5\u3002\n\u7576\u5718\u968a\u9078\u64c7\u597d\u5982\u4f55\u7ba1\u7406\u8207\u90e8\u7f72\u9019\u4e9b\u61c9\u7528\u7a0b\u5f0f\u5f8c\uff0c\u4e0b\u4e00\u500b\u554f\u984c\u5c31\u662f\u5982\u4f55\u90e8\u7f72\u9019\u4e9b Helm/Kustomize \u7269\u4ef6\u5230 Kubernetes \u53e2\u96c6\u3002"),(0,l.kt)("h1",{id:"\u90e8\u7f72\u6d41\u7a0b"},"\u90e8\u7f72\u6d41\u7a0b"),(0,l.kt)("p",null,"\u57fa\u672c\u4e0a\u6240\u6709\u7684\u90e8\u7f72\u90fd\u4ee5\u81ea\u52d5\u5316\u70ba\u76ee\u6a19\u53bb\u63a2\u8a0e\uff0c\u7576\u7136\u9019\u4e26\u4e0d\u4ee3\u8868\u624b\u52d5\u90e8\u7f72\u5c31\u6c92\u6709\u5176\u50f9\u503c\uff0c\u7562\u7adf\u5728\u81ea\u52d5\u5316\u90e8\u7f72\u6709\u8db3\u5920\u7684\u4fe1\u5fc3\u524d\uff0c\u5718\u968a\u4e5f\u5fc5\u5b9a\u6703\u7d93\u6b77\u904e\u5404\u5f0f\u5404\u6a23\u7684\u624b\u52d5\u90e8\u7f72\uff0c\u751a\u81f3\u5f88\u591a\u81ea\u52d5\u5316\u7684\u64b0\u5beb\u8207\u958b\u767c\u4e5f\u662f\u90fd\u4ef0\u8cf4\u624b\u52d5\u90e8\u7f72\u7684\u7d93\u9a57\u3002"),(0,l.kt)("p",null,"\u5f9e Rancher \u7684\u89d2\u5ea6\u4f86\u770b\uff0c\u81ea\u52d5\u5316\u90e8\u7f72\u6709\u4e09\u7a2e\u4e0d\u540c\u7684\u65b9\u5f0f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Kubeconfig"),(0,l.kt)("li",{parentName:"ol"},"Rancher Catalog"),(0,l.kt)("li",{parentName:"ol"},"Rancher Fleet")),(0,l.kt)("p",null,"\u4e0b\u9762\u7a0d\u5fae\u63a2\u8a0e\u4e00\u4e0b\u9019\u4e09\u8005\u7684\u6982\u5ff5\u8207\u5dee\u7570\u3002"),(0,l.kt)("h1",{id:"kubeconfig"},"Kubeconfig"),(0,l.kt)("p",null,"\u4e00\u500b\u64cd\u4f5c Kubernetes \u6700\u7c21\u55ae\u7684\u6982\u5ff5\u5c31\u662f\u76f4\u63a5\u4f7f\u7528 kubectl/helm \u7b49\u6307\u4ee4\u9032\u884c\u63a7\u5236\uff0c\u800c Rancher \u4e5f\u6709\u91dd\u5c0d\u6bcf\u500b\u5e33\u6236\u63d0\u4f9b\u53ef\u5b58\u53d6 Kubernetes \u53e2\u96c6\u6240\u8981\u4f7f\u7528\u7684 KUBECONFIG\u3002"),(0,l.kt)("p",null,"\u5047\u8a2d\u5718\u968a\u5df2\u7d93\u5b8c\u6210 CI/CD \u7684\u76f8\u95dc\u6d41\u7a0b\uff0c\u5c31\u53ef\u4ee5\u65bc\u8a72\u6d41\u7a0b\u4e2d\u900f\u904e\u8a72 KUBECONFIG \u4f86\u5f97\u5230\u5b58\u53d6\u8a72 Kubernetes \u7684\u6b0a\u9650\uff0c\u63a5\u8005\u4f7f\u7528 Helm/Kubectl \u7b49\u529f\u80fd\u4f86\u90e8\u7f72\u61c9\u7528\u7a0b\u5f0f\u5230\u53e2\u96c6\u4e2d\u3002"),(0,l.kt)("p",null,"\u57fa\u672c\u4e0a\u4f7f\u7528\u9019\u7a2e\u65b9\u5f0f\u6c92\u6709\u4ec0\u9ebc\u5927\u554f\u984c\uff0c\u7562\u7adf RKE \u4e5f\u662f\u4e00\u500b Kubernetes \u53e2\u96c6\uff0c\u6240\u4ee5\u5982\u679c\u5718\u968a\u5df2\u7d93\u6709\u73fe\u5b58\u7684\u89e3\u6c7a\u65b9\u6848\u662f\u900f\u904e\u9019\u7a2e\u985e\u578b\u90e8\u7f72\u7684\u8a71\uff0c\u7e7c\u7e8c\u4f7f\u7528\u9019\u7a2e\u65b9\u5f0f\u6c92\u6709\u4efb\u4f55\u554f\u984c\u3002"),(0,l.kt)("h1",{id:"rancher-catalog"},"Rancher Catalog"),(0,l.kt)("p",null,"Rancher \u672c\u8eab\u6709\u4e00\u500b\u540d\u70ba catalog \u7684\u6a5f\u5236\u7528\u4f86\u7ba1\u7406\u8981\u90e8\u7f72\u5230 Rancher \u5167\u7684\u61c9\u7528\u7a0b\u5f0f\uff0c\u9019\u4e9b\u61c9\u7528\u7a0b\u5f0f\u5fc5\u9808\u8981\u57fa\u65bc Helm \u4f86\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"\u5176\u5e95\u5c64\u80cc\u5f8c\u4e5f\u662f\u5c07 Helm \u8207 Helm values \u8f49\u63db\u70ba YAML \u6a94\u6848\u7136\u5f8c\u9001\u5230 Kubernetes \u4e2d\u3002\n\u9019\u7a2e\u4f5c\u6cd5\u8ddf\u7b2c\u4e00\u7a2e\u6700\u5927\u7684\u5dee\u7570\u5c31\u662f\uff0c\u6240\u6709\u7684\u5b89\u88dd\u8207\u7ba1\u7406\u4e2d\u9593\u90fd\u591a\u4e86\u4e00\u5c64 Rancher Catalog \u7684\u7ba1\u7406\u3002"),(0,l.kt)("p",null,"CI/CD \u6d41\u7a0b\u8981\u5b58\u53d6\u6642\u5c31\u4e0d\u662f\u91dd\u5c0d Kubernetes \u53e2\u96c6\u53bb\u4f7f\u7528\uff0c\u4e5f\u4e0d\u9700\u8981\u53d6\u5f97 KUBECONFIG\u3002\n\u76f8\u53cd\u7684\u9700\u8981\u53d6\u5f97 Rancher API Token\uff0c\u8b93\u4f60 CI/CD \u5167\u7684\u8173\u672c\u6709\u80fd\u529b\u53bb\u547c\u53eb Rancher\uff0c\u8981\u6c42 Rancher \u53bb\u5e6b\u5fd9\u5275\u5efa\uff0c\u7ba1\u7406\uff0c\u522a\u9664\u4e0d\u540c\u7684 Catalog\u3002"),(0,l.kt)("p",null,"\u9019\u7a2e\u65b9\u5f0f\u53ea\u9650\u5b9a\u65bc Rancher \u7ba1\u7406\u7684\u53e2\u96c6\uff0c\u6240\u4ee5\u5982\u679c\u5718\u968a\u4e2d\u4e0d\u662f\u6bcf\u500b\u53e2\u96c6\u90fd\u7528 Rancher \u7ba1\u7406\uff0c\u90a3\u9019\u7a2e\u65b9\u5f0f\u5c31\u4e0d\u63a8\u85a6\u4f7f\u7528\uff0c\u5426\u5247\u53ea\u6703\u8b93\u7cfb\u7d71\u6df7\u4e82\u3002"),(0,l.kt)("h1",{id:"rancher-fleet"},"Rancher Fleet"),(0,l.kt)("p",null,"Rancher Fleet \u662f Rancher v2.5 \u6b63\u5f0f\u63a8\u51fa\u7684\u529f\u80fd\uff0c\u5176\u66ff\u4ee3\u4e86\u904e\u5f80\u7684 Rancher pipeline(\u524d\u8ff0\u6587\u7ae0\u6c92\u6709\u63a2\u8a0e\uff0c\u56e0\u70ba\u57fa\u672c\u4e0a\u8981\u88ab\u6dd8\u6c70\u4e86)\u7684\u90e8\u7f72\u65b9\u5f0f\u3002"),(0,l.kt)("p",null,"Fleet \u662f\u4e00\u500b\u57fa\u65bc GitOps \u7b56\u7565\u7684\u5927\u898f\u6a21 Kubernetes \u61c9\u7528\u90e8\u7f72\u89e3\u6c7a\u65b9\u6848\uff0c\u57fa\u65bc Rancher \u7684\u67b6\u69cb\u4f7f\u5f97 Fleet \u53ef\u4ee5\u5f88\u8f15\u9b06\u7684\u5b58\u53d6\u6240\u6709 Rancher \u63a7\u7ba1\u7684 Kubernetes \u53e2\u96c6\uff0c\u540c\u6642 GitOps \u7684\u65b9\u5f0f\u8b93\u958b\u767c\u8005\u53ef\u4ee5\u7c21\u55ae\u7684\u4e00\u53e3\u6c23\u5c07\u61c9\u7528\u7a0b\u5f0f\u66f4\u65b0\u5230\u591a\u500b Kubernetes \u53e2\u96c6\u3002"),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u7684\u6587\u7ae0\u5c31\u6703\u5f9e Rancher Catalog \u51fa\u767c\uff0c\u63a5\u8005\u63a2\u8a0e GitOps \u8207 Rancher Fleet \u7684\u4f7f\u7528\u65b9\u5f0f\u3002"))}h.isMDXComponent=!0}}]);