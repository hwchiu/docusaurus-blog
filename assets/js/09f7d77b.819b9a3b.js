"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[29513],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(r),b=a,f=c["".concat(u,".").concat(b)]||c[b]||m[b]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},67411:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300c Kubernetes \u56db\u7a2e\u4e0d\u540c\u958b\u767c\u74b0\u5883\u7684\u6bd4\u8f03\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u300c Kubernetes \u56db\u7a2e\u4e0d\u540c\u958b\u767c\u74b0\u5883\u7684\u6bd4\u8f03\u300d",date:new Date("2022-02-16T00:05:07.000Z")},l=void 0,i={permalink:"/2022/02/16/reading-notes-17",source:"@site/blog/2022-02-16-reading-notes-17.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300c Kubernetes \u56db\u7a2e\u4e0d\u540c\u958b\u767c\u74b0\u5883\u7684\u6bd4\u8f03\u300d",description:"\u300c Kubernetes \u56db\u7a2e\u4e0d\u540c\u958b\u767c\u74b0\u5883\u7684\u6bd4\u8f03\u300d",date:"2022-02-16T00:05:07.000Z",formattedDate:"February 16, 2022",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:2.705,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c Kubernetes \u56db\u7a2e\u4e0d\u540c\u958b\u767c\u74b0\u5883\u7684\u6bd4\u8f03\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u300c Kubernetes \u56db\u7a2e\u4e0d\u540c\u958b\u767c\u74b0\u5883\u7684\u6bd4\u8f03\u300d",date:"2022-02-16T00:05:07.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c \u53d6\u4ee3 Docker Desktop \u7684\u9ad8\u6548\u7387\u958b\u767c\u74b0\u5883\u300d",permalink:"/2022/02/18/reading-notes-18"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c \u8ac7\u8ac7\u9077\u79fb\u61c9\u7528\u7a0b\u5f0f\u5230 Kubernetes \u5167\u7684\u5931\u6557\u7d93\u9a57\u8ac7\u300d",permalink:"/2022/02/14/reading-notes-16"}},u={authorsImageUrls:[void 0]},s=[],p={toc:s},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6a19\u984c: \u300c Kubernetes \u56db\u7a2e\u4e0d\u540c\u958b\u767c\u74b0\u5883\u7684\u6bd4\u8f03\u300d\n\u985e\u5225: Kubernetes\n\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://loft-sh.medium.com/kubernetes-development-environments-a-comparison-f4fa0b3d3d8b"},"https://loft-sh.medium.com/kubernetes-development-environments-a-comparison-f4fa0b3d3d8b")),(0,a.kt)("p",null,"\u6839\u64da VMware 2020 \u7684\u4e00\u500b\u7814\u7a76\u5831\u544a\u6307\u51fa\uff0c\u5982\u4f55\u5b58\u53d6 Kubernetes \u53e2\u96c6\u662f\u5f71\u97ff\u958b\u767c\u8005\u751f\u7522\u6548\u7387\u7684\u6700\u5927\u8981\u7d20\uff0c\u6240\u4ee5\u672c\u7bc7\u6587\u7ae0\u5c31\u662f\u5c31\u6703\u91dd\u5c0d\u5982\u4f55\u53bb\u8a55\u4f30\u8207\u6311\u9078\u4e00\u500b\u9069\u5408\u958b\u767c\u8005\u7684\nKubernetes \u53e2\u96c6\u8207\u5b58\u53d6\u65b9\u5f0f\u3002"),(0,a.kt)("p",null,"\u4f5c\u8005\u5c07 Kubernetes \u53e2\u96c6\u5206\u6210\u56db\u5927\u985e\uff0c\u5206\u5225\u662f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Local Cluster: \u958b\u767c\u8005\u6703\u57fa\u65bc\u81ea\u5df1\u672c\u5730\u7684\u96fb\u8166\u4f86\u5275\u9020\u4e00\u500b\u672c\u5730\u7684 Kubernetes \u53e2\u96c6"),(0,a.kt)("li",{parentName:"ol"},"Individual Cloud-Based Cluster: \u958b\u767c\u8005\u57fa\u65bc\u96f2\u7aef\u74b0\u5883\u4f86\u5275\u5efa\u4e00\u500b\u5c08\u5c6c\u65bc\u8a72\u958b\u767c\u8005\u7684 Kubernetes \u53e2\u96c6"),(0,a.kt)("li",{parentName:"ol"},"Self-Service Namespace: \u4f7f\u7528\u57fa\u65bc namespace \u7684\u65b9\u5f0f\u4f86\u8b93\u591a\u4f4d\u958b\u767c\u8005\u5171\u4eab\u4e00\u500b Kubernetes \u53e2\u96c6"),(0,a.kt)("li",{parentName:"ol"},"Self-Service Virtual Cluster: \u8b93 Kubernetes \u4f86\u5275\u5efa\u66f4\u591a\u5c0f Kubernetes \u53e2\u96c6\u4e26\u4e14\u8b93\u6bcf\u500b\u4f7f\u7528\u8005\u6709\u7368\u7acb\u5c08\u5c6c\u7684 Kubernetes \u53e2\u96c6")),(0,a.kt)("p",null,"\u70ba\u4e86\u6bd4\u8f03\u9019\u56db\u7a2e\u4e0d\u540c\u7684\u53e2\u96c6\uff0c\u4f5c\u8005\u5b9a\u7fa9\u4e86\u5e7e\u500b\u4e0d\u540c\u7684\u9762\u5411\uff0c\u91dd\u5c0d\u9019\u5e7e\u500b\u9762\u5411\u4f86\u8a55\u6bd4\uff0c\u5206\u5225\u662f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Developer Experience: \u5c0d\u65bc\u958b\u767c\u8005\u4f86\u8aaa\u8981\u5982\u4f55\u958b\u59cb\u4f7f\u7528\u53e2\u96c6\uff0c\u5305\u542b\u67b6\u8a2d\u7684\u8907\u96dc\u5ea6\uff0c\u4f7f\u7528\u7684\u96e3\u6613\u5ea6\u4ee5\u53ca\u9700\u8981\u7684\u76f8\u95dc\u80cc\u666f\u591a\u5be1"),(0,a.kt)("li",{parentName:"ol"},"Admin Experience: \u5c0d\u65bc\u516c\u53f8\u7684\u7ba1\u7406\u4eba\u54e1\u4f86\u8aaa\u9700\u8981\u82b1\u591a\u5c11\u5fc3\u529b\u4f86\u7ba1\u7406\u8a72\u5f9e\u958b\u767c\u8005\u74b0\u5883\uff0c\u9664\u4e86\u57fa\u672c\u7684\u7ba1\u7406\u9084\u8981\u8003\u616e\u589e\u52a0\u65b0\u4f7f\u7528\u8005\u5e36\u4f86\u7684\u8ca0\u64d4"),(0,a.kt)("li",{parentName:"ol"},"Flexibility/Realism: \u8a72\u958b\u767c\u74b0\u5883\u8207\u6b63\u5f0f\u751f\u7522\u74b0\u5883\u7684\u67b6\u69cb\u76f8\u4f3c\u5ea6\u5982\u4f55\uff0c\u6b64\u5916\u958b\u767c\u8005\u662f\u5426\u6709\u8db3\u5920\u7684\u5f48\u6027\u53bb\u5ba2\u88fd\u5316\u8a72\u53e2\u96c6\u7684\u6240\u6709\u8a2d\u5b9a"),(0,a.kt)("li",{parentName:"ol"},"Scalability: \u8a72\u74b0\u5883\u662f\u5426\u80fd\u5920\u6839\u64da\u958b\u767c\u9700\u6c42\u4f86\u64f4\u5145\uff1f \u7279\u5225\u662f\u91dd\u5c0d\u90e8\u5206\u9700\u8981\u5927\u91cf\u4f7f\u7528\u8cc7\u6e90\u7684\u61c9\u7528\u7a0b\u5f0f\u958b\u767c\u662f\u5426\u6709\u8fa6\u6cd5\u8655\u7406\u3002"),(0,a.kt)("li",{parentName:"ol"},"Isolation/Stability: \u958b\u767c\u8005\u5f7c\u6b64\u4e4b\u9593\u7684\u9694\u96e2\u7a0b\u5ea6\u5982\u4f55\uff0c\u5f7c\u6b64\u4e4b\u9593\u7684\u5de5\u4f5c\u662f\u5426\u6703\u5f71\u97ff\u5f7c\u6b64\uff1f \u6709\u8cc7\u5b89\u554f\u984c\u7684\u6642\u5019\u662f\u5426\u6703\u9023\u74b0\u7206\uff1f"),(0,a.kt)("li",{parentName:"ol"},"Cost: \u8a72\u89e3\u6c7a\u65b9\u6848\u7684\u6210\u672c\u591a\u5be1\uff0c\u6210\u672c\u5c31\u662f\u771f\u6b63\u7684\u91d1\u9322\u8003\u91cf\u3002")),(0,a.kt)("p",null,"\u6587\u7ae0\u4e00\u958b\u59cb\u5c31\u6709\u5217\u51fa\u4e00\u500b\u7d50\u8ad6\u8868\uff0c\u5c0d\u65bc\u9019\u500b\u8b70\u984c\u6709\u8208\u8da3\u7684\u6b61\u8fce\u95b1\u8b80"))}m.isMDXComponent=!0}}]);