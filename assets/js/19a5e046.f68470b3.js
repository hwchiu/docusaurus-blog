"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[2712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),h=a,g=s["".concat(i,".").concat(h)]||s[h]||m[h]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=h;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},90143:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Rancher \u5c08\u6848\u7ba1\u7406\u6307\u5357 - \u8cc7\u6e90\u63a7\u7ba1",sidebar_position:13,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},l="\u524d\u8a00",c={unversionedId:"techPost/2021/iThome_Challenge/day13",id:"techPost/2021/iThome_Challenge/day13",title:"Rancher \u5c08\u6848\u7ba1\u7406\u6307\u5357 - \u8cc7\u6e90\u63a7\u7ba1",description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2021/iThome_Challenge/day13.md",sourceDirName:"techPost/2021/iThome_Challenge",slug:"/techPost/2021/iThome_Challenge/day13",permalink:"/docs/techPost/2021/iThome_Challenge/day13",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Rancher",permalink:"/docs/tags/rancher"}],version:"current",sidebarPosition:13,frontMatter:{title:"Rancher \u5c08\u6848\u7ba1\u7406\u6307\u5357 - \u8cc7\u6e90\u63a7\u7ba1",sidebar_position:13,tags:["iThome","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},sidebar:"techPost",previous:{title:"Rancher \u5c08\u6848\u7ba1\u7406\u6307\u5357 - Project \u6982\u5ff5\u4ecb\u7d39",permalink:"/docs/techPost/2021/iThome_Challenge/day12"},next:{title:"Rancher - \u5176\u4ed6\u4e8b\u9805",permalink:"/docs/techPost/2021/iThome_Challenge/day14"}},i={},p=[],u={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u524d\u7bc7\u6587\u7ae0\u63a2\u8a0e\u70ba\u4ec0\u9ebc\u9700\u8981 Project \u9019\u6a23\u7684\u6982\u5ff5\uff0c\u900f\u904e Project \u80fd\u5920\u5e36\u4f86\u4ec0\u9ebc\u6a23\u7684\u597d\u8655\uff0c\u7136\u800c\u524d\u7bc7\u6587\u7ae0\u53ea\u6709\u5e36\u5230\u7c21\u55ae\u7684\u64cd\u4f5c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u900f\u904e Rancher \u7684 UI \u4f86\u6aa2\u8996 Project \u5167\u7684\u5404\u7a2e Kubernetes \u7269\u4ef6\u3002"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u5c07\u4ecb\u7d39\u6211\u8a8d\u70ba Project \u6700\u597d\u4e5f\u6700\u65b9\u4fbf\u7684\u529f\u80fd\uff0c Resource Quotas \u8207 Container Default Resource Limit \u5230\u5e95\u662f\u4ec0\u9ebc\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u3002"),(0,a.kt)("h1",{id:"\u8cc7\u6e90\u63a7\u7ba1\u4ecb\u7d39"},"\u8cc7\u6e90\u63a7\u7ba1\u4ecb\u7d39"),(0,a.kt)("p",null,"\u719f\u6089 Kubernetes \u7684\u8b80\u8005\u61c9\u8a72\u90fd\u77e5\u9053\u8cc7\u6e90\u63a7\u7ba1\u662f\u4e00\u500b\u975e\u5e38\u56f0\u96e3\u7684\u554f\u984c\uff0c\u5176\u6839\u672c\u539f\u56e0\u662f Container \u672c\u8eab\u7684\u5be6\u4f5c\u65b9\u5f0f\u5c0e\u81f4\u8cc7\u6e90\u63a7\u7ba1\u4e0d\u592a\u5bb9\u5668\u3002\n\u5f88\u591a\u4eba\u4f7f\u7528\u8cc7\u6e90\u63a7\u7ba1\u6700\u5e38\u9047\u5230\u7684\u554f\u984c\u6709"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u77e5\u9053\u8a72\u600e\u9ebc\u8a2d\u5b9a Resources Limit\uff0c CPU/Memory \u5230\u5e95\u8981\u7528\u54ea\u7a2e? \u4e09\u7a2e\u5167\u5efa\u7684 QoS \u578b\u614b\u6709\u54ea\u4e9b? \u6709\u54ea\u4e9b\u5f71\u97ff?"),(0,a.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u597d\u4e86 Limit/Request \u5f8c\u7d50\u679c\u904b\u4f5c\u4e0d\u5982\u9810\u671f\uff0c\u6216\u662f\u67d0\u4e9b\u60c5\u6cc1\u4e0b\u61c9\u7528\u7a0b\u5f0f\u6548\u80fd\u5927\u5e45\u5ea6\u964d\u4f4e\u7b49")),(0,a.kt)("p",null,"\u7b2c\u4e00\u9ede\u662f\u6700\u5bb9\u6613\u9047\u5230\u7684\uff0c\u7562\u7adf\u8981\u5982\u4f55\u6709\u6548\u5730\u53bb\u5206\u914d\u5bb9\u5668\u4f7f\u7528\u7684 CPU/Memory \u662f\u500b\u5f88\u56f0\u96e3\u7684\u554f\u984c\uff0c\u7279\u5225\u662f\u7b2c\u4e00\u6b21\u8e0f\u5165\u5230\u5bb9\u5668\u5316\u7684\u5718\u968a\u5c0d\u65bc\u9019\u500b\u554f\u984c\u6703\u6709\u66f4\u5927\u7684\u7591\u60d1\uff0c\u4e0d\u78ba\u5b9a\u8a72\u600e\u9ebc\u7528\u3002\n\u7b2c\u4e8c\u500b\u554f\u984c\u5247\u662f\u90e8\u5206\u7684 Linux Kernel \u7248\u672c\u5be6\u4f5c Container \u7684\u8cc7\u6e90\u63a7\u7ba1\u8207\u9650\u5236\u4e0a\u6703\u6709\u4e00\u4e9b bug\uff0c\u53ef\u80fd\u6703\u5c0e\u81f4\u4f60\u7684\u61c9\u7528\u7a0b\u5f0f\u88ab\u4e0d\u9810\u671f\u7684 throttle\uff0c\u5c0e\u81f4\u6548\u80fd\u8b8a\u5f97\u5f88\u4f4e\u3002"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4e0d\u592a\u63a2\u8a0e\u9019\u5169\u500b\u554f\u984c\uff0c\u53cd\u800c\u662f\u63a2\u8a0e\u6700\u57fa\u672c\u7684\u6982\u5ff5\uff0c\u7562\u7adf\u4e0a\u8ff0\u5169\u500b\u6982\u5ff5\u8ddf Rancher \u6c92\u592a\u5927\u95dc\u4fc2\uff0c\u53cd\u800c\u662f\u6bd4\u8f03\u9032\u968e\u4f7f\u7528\u8207\u9664\u932f\u7684\u5167\u5bb9\u3002"),(0,a.kt)("p",null,"Kubernetes \u4e2d\u91dd\u5c0d CPU/Memory \u7b49\u7cfb\u7d71\u8cc7\u6e90\u6709\u5169\u7a2e\u9650\u5236\uff0c\u7a31\u70ba Request \u8207 Limit\u3002\nRequest \u4ee3\u8868\u7684\u662f\u8981\u6c42\u591a\u5c11\uff0c\u800c Limit \u4ee3\u8868\u7684\u662f\u6700\u591a\u53ef\u4ee5\u4f7f\u7528\u591a\u5c11\u3002\n\u9019\u4e9b\u8cc7\u6e90\u662f\u4ee5 Container \u70ba\u57fa\u672c\u55ae\u4f4d\uff0c\u800c Pod \u672c\u8eab\u662f\u7531\u591a\u500b Container \u7d44\u6210\u7684\uff0c\u6240\u4ee5 CPU/Memory \u7684\u8a08\u7b97\u4e0a\u5c31\u76f8\u5c0d\u7e41\u7463\u3002"),(0,a.kt)("p",null,"Kubernetes \u672c\u8eab\u6709\u4e00\u500b\u7279\u5225\u7684\u7269\u4ef6\u7a31\u70ba ResourceQuota\uff0c\u900f\u904e\u8a72\u7269\u4ef6\u53ef\u4ee5\u91dd\u5c0d\u7279\u5b9a namespace \u53bb\u9650\u5b9a\u8a72 namespace \u5167\u6240\u6709 Container \u7684\u8cc7\u6e90\u4e0a\u9650\u3002\u8b6c\u5982\u53ef\u4ee5\u8a2d\u5b9a default namespace \u6700\u591a\u53ea\u80fd\u7528 10\u9846 vCPU\uff0c\u8d85\u904e\u7684\u8a71\u5c31\u6c92\u6709\u8fa6\u6cd5\u7e7c\u7e8c\u90e8\u7f72\u3002"),(0,a.kt)("p",null,"Rancher \u7684 Project \u672c\u8eab\u5c31\u662f\u4e00\u500b\u7ba1\u7406\u591a namespace \u7684\u62bd\u8c61\u6982\u5ff5\uff0c\u63a5\u4e0b\u4f86\u770b\u4e00\u4e0b Project \u4e2d\u6709\u54ea\u4e9b\u95dc\u65bc Resource \u7684\u7ba1\u7406\u3002"),(0,a.kt)("h1",{id:"\u64cd\u4f5c"},"\u64cd\u4f5c"),(0,a.kt)("p",null,"\u70ba\u4e86\u65b9\u4fbf\u64cd\u4f5c\uff0c\u5148\u5c07 default namespace \u7d66\u52a0\u5165\u5230\u4e4b\u524d\u5275\u7acb\u7684 Project \u4e2d\uff0c\u52a0\u9032\u53bb\u5f8c\u7576\u524d project \u4e2d\u6709\u4e09\u500b namespace\uff0c\u5982\u4e0b\u5716\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/ZeRon6T.png",alt:null})),(0,a.kt)("p",null,"\u63a5\u8005\u7de8\u8f2f\u8a72 Project \u53bb\u8a2d\u5b9a Resource \u76f8\u95dc\u7684\u8cc7\u8a0a\uff0c\u5982\u4e0b\u5716"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/dGxmeOh.png",alt:null})),(0,a.kt)("p",null,"Project \u4e2d\u6709\u5169\u7a2e\u6982\u5ff5\u8981\u8a2d\u5b9a\uff0c\u7b2c\u4e00\u7a2e\u662f Resource Quota\uff0c\u7b2c\u4e8c\u500b\u662f Container Default Resource Limit.\nResource Quota \u662f\u66f4\u9ad8\u968e\u5c64\u7684\u6982\u5ff5\uff0c\u662f\u7528\u4f86\u63a7\u7ba1\u6574\u500b Project \u80fd\u5920\u4f7f\u7528\u7684 CPU/Memory \u7528\u91cf\u3002\n\u7531\u65bc Project \u662f\u7531\u591a\u500b namespaces \u6240\u7d44\u6210\u7684\uff0c\u6240\u4ee5\u8a2d\u5b9a\u4e0a\u9084\u8981\u53bb\u8a2d\u5b9a\u6bcf\u500b namespace \u7684\u7528\u91cf\uff0c\u5982\u4e0a\u8ff0\u7bc4\u4f8b\u5c31\u662f\u8a2d\u5b9a\n\u6574\u500b Project \u53ef\u4ee5\u4f7f\u7528 100\u500b vCPU\uff0c\u800c\u6bcf\u500b namespace \u6700\u591a\u53ef\u4ee5\u4f7f\u7528 10 vCPU\u3002\n\u4f46\u662f\u56e0\u70ba namespace \u672c\u8eab\u5c31\u662f\u4f7f\u7528 kubernetes ResourceQuota \u4f86\u5be6\u4f5c\uff0c\u800c\u9019\u500b\u529f\u80fd\u672c\u8eab\u6703\u6709\u4e00\u500b\u9650\u5236\u5c31\u662f\u3002\n\u4e00\u4f46\u8a72 namespace \u672c\u8eab\u8a2d\u5b9a\u4e86 ResourceQuota\uff0c\u5247\u6240\u6709\u90e8\u7f72\u5230\u8a72 namespace \u7684\u5bb9\u5668\u90fd\u5fc5\u9808\u8981\u660e\u78ba\u7684\u5beb\u51fa CPU/Memory \u7528\u91cf\u3002"),(0,a.kt)("p",null,"\u9019\u500b\u6982\u5ff5\u4e5f\u6eff\u5bb9\u6613\u7406\u89e3\u7684\uff0c\u7562\u7adf\u4f60\u8981\u53bb\u8a08\u7b97 namespace \u7684\u4f7f\u7528\u4e0a\u9650\uff0c\u90a3 namespace \u5167\u7684\u6bcf\u500b container \u90fd\u9700\u8981\u6709 CPU/Memory \u7b49\u76f8\u95dc\u8a2d\u5b9a\uff0c\u5426\u5247\u4e0d\u80fd\u8a08\u7b97\u3002\n\u5982\u679c\u4f60\u7684\u5bb9\u5668\u6c92\u6709\u53bb\u8a2d\u5b9a\u7684\u8a71\uff0c\u4f60\u7684\u670d\u52d9\u6703\u6c92\u6709\u8fa6\u6cd5\u90e8\u7f72\uff0c\u6703\u5361\u5230 Scheduler \u90a3\u500b\u5c64\u7d1a\uff0c\u9023 Pending \u90fd\u4e0d\u6703\u6709\u3002\n\u4f46\u662f\u5982\u679c\u8981\u6c42\u6bcf\u500b\u5bb9\u5668\u90e8\u7f72\u7684\u6642\u5019\u90fd\u8981\u8a2d\u5b9a CPU/Memory \u5176\u5be6\u6703\u6709\u9ede\u7169\u4eba\uff0c\u70ba\u4e86\u8b93\u9019\u500b\u64cd\u4f5c\u66f4\u7c21\u55ae\uff0cProject \u5e95\u4e0b\u9084\u6709 Container Default Resource Limit \u7684\u8a2d\u5b9a\u3002\n\u8a72\u8a2d\u5b9a\u53ea\u8981\u6253\u958b\uff0c\u6240\u6709\u90e8\u7f72\u5230\u8a72 namespace \u5167\u7684 Container \u90fd\u6703\u81ea\u52d5\u7684\u88dc\u4e0a\u9019\u4e9b\u8a2d\u5b9a\u3002\n\u5982\u4e0a\u5716\u7684\u6982\u5ff5\u5c31\u662f\uff0c\u6bcf\u500b Container \u90e8\u7f72\u6642\u5c31\u6703\u88ab\u88dc\u4e0a CPU(Request): 3\u9846, CPU(Limit): 6\u9846"),(0,a.kt)("p",null,"\u9019\u908a\u6709\u4e00\u500b\u6771\u897f\u8981\u7279\u5225\u6ce8\u610f\uff0cProject \u8a2d\u5b9a\u7684 Container Default Resource Limit \u672c\u8eab\u6709\u4e00\u500b\u4f7f\u7528\u9650\u5236\uff0c\u5982\u679c namespace \u662f\u518d\u8a2d\u5b9a Resource Quota \u524d\u5c31\u5df2\u7d93\u52a0\u5165\u5230 Project \u7684\u8a71\uff0c\u8a2d\u5b9a\u7684\u6578\u5b57\u4e26\u4e0d\u6703\u81ea\u52d5\u5730\u5957\u7528\u5230\u6240\u6709\u7684 namespace \u4e0a\u3002\n\u53cd\u904e\u4f86\u8aaa\uff0c\u8a2d\u5b9a\u597d\u9019\u4e9b\u8cc7\u8a0a\u5f8c\uff0c\u6240\u6709\u65b0\u5275\u7acb\u7684 namespace \u90fd\u6703\u81ea\u52d5\u6cbf\u7528\u9019\u4e9b\u8a2d\u5b9a\uff0c\u4f46\u662f\u8a2d\u5b9a\u524d\u7684 namespace \u9700\u8981\u624b\u52d5\u8a2d\u5b9a\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u9019\u6642\u5019\u5fc5\u9808\u8981\u56de\u5230 namespace \u4e0a\u53bb\u91cd\u65b0\u8a2d\u5b9a\uff0c\u5982\u4e0b\u5716"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/UqlqrmS.png",alt:null})),(0,a.kt)("p",null,"namespace \u7684\u7de8\u8f2f\u9801\u9762\u5c31\u53ef\u4ee5\u91cd\u65b0\u8a2d\u5b9a\u8a72 namespace \u4e0a\u7684\u8cc7\u8a0a\uff0c\u7279\u5225\u662f Container Default Resource Limit\u3002\n\u7576\u9019\u908a\u91cd\u65b0\u8a2d\u5b9a\u5b8c\u7562\u5f8c\uff0c\u5c31\u53ef\u4ee5\u5230\u7cfb\u7d71\u4e2d\u53bb\u770b\u76f8\u95dc\u7684\u7269\u4ef6"),(0,a.kt)("p",null,"\u9996\u5148 Project \u8a2d\u5b9a\u597d Resource Quota \u5f8c\uff0cKubernetes \u5c31\u6703\u91dd\u5c0d\u6bcf\u500b namespace \u90fd\u7522\u751f\u4e00\u500b\u5c0d\u61c9\u7684 Quota \u4f86\u8a2d\u5b9a\uff0c\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/SoOUiga.png",alt:null})),(0,a.kt)("p",null,"\u56e0\u70ba\u8a2d\u5b9a\u6bcf\u500b namespace \u7684 CPU \u4e0a\u9650\u662f 10\u9846\uff0c\u800c\u8a72 project \u7e3d\u5171\u6709\u4e09\u500b namespace\uff0c\u6240\u4ee5\u7cfb\u7d71\u4e2d\u9019\u4e09\u500b namespace \u90fd\u7522\u751f\u4e86\u5c0d\u61c9\u7684 quota\uff0c\u800c\u9019\u4e9b quota \u7684\u8a2d\u5b9a\u90fd\u662f 10\u9846 CPU\u3002"),(0,a.kt)("p",null,"\u5176\u4e2d default namespace \u7684\u6a19\u793a\u662f 5025m/10 \u4ee3\u8868\u76ee\u524d\u5df2\u7d93\u7528\u4e86 5.025\u9846 CPU\uff0c\u800c\u7cfb\u7d71\u4e0a\u9650\u662f 10\u9846\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/nq6X7fH.png",alt:null})),(0,a.kt)("p",null,"\u9019\u6642\u5019\u5c07 default namespace \u5167\u7684 pod \u90fd\u6e05\u7a7a\uff0c\u63a5\u8005\u91cd\u65b0\u518d\u770b\u4e00\u6b21\u8a72 quota \u7269\u4ef6\u5c31\u6703\u767c\u73fe used \u7684\u6578\u503c\u5f9e 5025m \u5230 0\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/fiihnjl.png",alt:null})),(0,a.kt)("p",null,"\u7531\u65bc\u4e0a\u8ff0 default namespace \u4e2d\u8a2d\u5b9a CPU \u9810\u8a2d\u88dc\u4e0a 0.1\u9846 CPU (Request/Limit)\uff0c\u6240\u4ee5 Kubernetes \u6703\u5275\u9020\u76f8\u95dc\u7684\u7269\u4ef6 Limits"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/xUGhx8X.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Jg7JvKb.png",alt:null})),(0,a.kt)("p",null,"\u5f9e\u4e0a\u8ff0\u7269\u4ef6\u53ef\u4ee5\u89c0\u5bdf\u5230\u8a72 LimitRange \u8a2d\u5b9a\u4e86 100m \u7684 CPU\u3002"),(0,a.kt)("p",null,"\u6700\u5f8c\u5617\u8a66\u90e8\u7f72\u4e00\u500b\u7c21\u55ae\u7684 deployment \u4f86\u6e2c\u8a66\u6b64\u529f\u80fd\u770b\u770b\uff0c\u4f7f\u7528\u4e00\u500b\u5b8c\u5168\u6c92\u6709\u6a19\u793a\u4efb\u4f55 Resource \u7684 deployment\uff0c\u5167\u5bb9\u5982\u4e0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Ln1SnNw.png",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/OOsDiOY.png",alt:null})),(0,a.kt)("p",null,"\u8a72\u7269\u4ef6\u90e8\u7f72\u5230\u53e2\u96c6\u5f8c\uff0c\u900f\u904e kubectl describe \u53bb\u67e5\u770b\u4e00\u4e0b\u9019\u4e9b Pod \u7684\u72c0\u614b\uff0c\u53ef\u4ee5\u770b\u5230\u5176 Resource \u88ab\u81ea\u52d5\u7684\u88dc\u4e0a Limits/Requests: 100m\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/5drPVJM.png",alt:null})),(0,a.kt)("p",null,"Resource \u7684\u7ba1\u7406\u4e00\u76f4\u4ee5\u4f86\u90fd\u4e0d\u5bb9\u6613\uff0c Rancher \u900f\u904e Project \u7684\u7ba1\u7406\u65b9\u5f0f\u8b93\u5718\u968a\u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u53bb\u7ba1\u7406\u591a namespace \u4e4b\u9593\u7684\u8cc7\u6e90\u7528\u91cf\uff0c\u540c\u6642\u4e5f\u53ef\u4ee5\u900f\u904e\u9019\u500b\u6a5f\u5236\u8981\u6c42\u6240\u6709\u8981\u90e8\u7f72\u7684 container \u90fd\u8981\u53bb\u8a2d\u5b9a\u8cc7\u6e90\u7528\u91cf\u4f86\u78ba\u4fdd\u4e0d\u6703\u6709\u5bb9\u5668\u4f7f\u7528\u904e\u591a\u7684\u8cc7\u6e90\u3002"))}m.isMDXComponent=!0}}]);