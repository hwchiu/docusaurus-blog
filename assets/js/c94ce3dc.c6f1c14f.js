"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[72366],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10283:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4e09\u500b\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u6027\u7684\u7d93\u9a57\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u4e09\u500b\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u6027\u7684\u7d93\u9a57",date:new Date("2021-12-10T22:29:51.000Z")},i=void 0,c={permalink:"/2021/12/10/reading-note-21",source:"@site/blog/2021-12-10-reading-note-21.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4e09\u500b\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u6027\u7684\u7d93\u9a57\u300d",description:"\u4e09\u500b\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u6027\u7684\u7d93\u9a57",date:"2021-12-10T22:29:51.000Z",formattedDate:"December 10, 2021",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:2.385,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4e09\u500b\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u6027\u7684\u7d93\u9a57\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u4e09\u500b\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u6027\u7684\u7d93\u9a57",date:"2021-12-10T22:29:51.000Z"},prevItem:{title:"\u53c8\u4e00\u500b 0-day...",permalink:"/2021/12/11/log4j-cve"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDNS 5 \u79d2 Dealy \u7684\u7de3\u7531\u300d",permalink:"/2021/12/08/reading-note-20"}},l={authorsImageUrls:[void 0]},u=[],p={toc:u},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/kudos-engineering/increasing-resilience-in-kubernetes-b6ddc9fecf80"},"https://medium.com/kudos-engineering/increasing-resilience-in-kubernetes-b6ddc9fecf80")),(0,a.kt)("p",null,"\u4eca\u5929\u9019\u7bc7\u6587\u7ae0\u4f5c\u8005\u8ddf\u5927\u5bb6\u5206\u4eab\u4e00\u4e9b\u5982\u4f55\u52a0\u5f37 Kubernetes \u670d\u52d9\u7a69\u5b9a\u7684\u65b9\u5f0f\uff0c\u9019\u7bc7\u6587\u7ae0\u9019\u908a\u505a\u500b\u7c21\u55ae\u6458\u8981\u4e00\u4e0b\n\u767c\u751f\u554f\u984c:\n\u4f5c\u8005\u7684 k8s \u662f\u57fa\u65bc Google Kubernetes Service (GKE)\u7684\u53e2\u96c6\uff0c\u904b\u4f5c\u904e\u7a0b\u4e2d\u6709\u6642\u5019\u6703\u767c\u73fe\u90e8\u5206\u7bc0\u9ede\u7576\u6389\uff0c\u6700\u5f8c\u5c0e\u81f4\u90e8\u5206\u7684\u670d\u52d9\u4e0d\u80fd\u6b63\u78ba\u4f7f\u7528\u3002\u9019\u908a\u4f5c\u8005\u5718\u968a\u5f9e\u5169\u500b\u89d2\u5ea6\u51fa\u767c\u53bb\u6539\u5584"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7814\u7a76\u70ba\u4ec0\u9ebc\u7bc0\u9ede\u6703\u4e00\u76f4\u7576\u6389\uff0c\u8207 Google Supporte Team \u4f86\u56de\u4fe1\u4ef6\u6700\u5f8c\u6709\u627e\u5230\u554f\u984c\u9ede"),(0,a.kt)("li",{parentName:"ol"},"\u5f37\u5316 Kubernetes \u670d\u52d9\u7684\u97cc\u6027\uff0c\u5c31\u7b97\u6709\u90e8\u5206\u7bc0\u9ede\u58de\u6389\u4e5f\u8981\u8b93\u670d\u52d9\u80fd\u5920\u7e7c\u7e8c\u904b\u884c\n\uff0c\u672c\u6587\u4e3b\u8981\u7684\u4e00\u4e9b\u89c0\u9ede\u4e5f\u90fd\u662f\u57fa\u65bc\u9019\u908a\u767c\u5c55\n\u5f37\u5316\u65b9\u5f0f"),(0,a.kt)("li",{parentName:"ol"},"\u4fee\u6b63 Deployment \u7684\u6578\u91cf\uff0c\u4e26\u4e14\u52a0\u4e0a Anti-Affinity\uff0c\u8b93\u9019\u4e9b Deployment \u7684\u526f\u672c\u80fd\u5920\u6563\u843d\u5230\u4e0d\u540c\u7684\u7bc0\u9ede\u4e0a\uff0c\u907f\u514d\u6240\u6709 Pod \u90fd\u585e\u5230\u540c\u500b\u7bc0\u9ede\uff0c\u6700\u5f8c\u8a72\u7bc0\u9ede\u51fa\u554f\u984c\u5c0e\u81f4 Pod \u5168\u90e8\u51fa\u554f\u984c\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6240\u6709\u9700\u8981\u88ab Service \u5b58\u53d6\u7684\u670d\u52d9\u90fd\u52a0\u4e0a Readess Probe \u4f86\u78ba\u4fdd\u9019\u4e9b\u670d\u52d9\u90fd\u6e96\u5099\u597d\u5f8c\u624d\u6703\u6536\u5230\u670d\u52d9\uff0c\u907f\u514d\u4e00\u4e9b\u8acb\u6c42\u88ab\u9001\u904e\u4f86\u78ba\u53c8\u4e0d\u80fd\u6b63\u78ba\u8655\u7406"),(0,a.kt)("li",{parentName:"ol"},"\u52a0\u5165 Pre-Stop \u7684\u4f7f\u7528\uff0c\u518d\u88e1\u9762\u900f\u904e sleep 10\u7684\u65b9\u5f0f\uff0c\u8b93 Pod \u8981\u88ab\u522a\u9664\u80fd\u5920\u5c07\u624b\u4e0a\u7684\u5c01\u5305\u8acb\u6c42\u7d66\u8655\u7406\u5b8c\u7562\n(\u8acb\u770b\u8a3b\u89e3\u88dc\u5145)\n\u8a3b: \u6211\u500b\u4eba\u8a8d\u70ba\u7b2c\u4e09\u9ede\u5176\u5be6\u4e0d\u592a\u9700\u8981\uff0c\u6bd4\u8f03\u6f02\u4eae\u7684\u4f5c\u6cd5\u61c9\u8a72\u662f\u5be6\u4f5c Singal Handler \u53bb\u8655\u7406 SIGTERM \u7684\u8a0a\u865f\uff0c\u6536\u5230\u6b64\u8a0a\u865f\u5f8c\u5c31\u4e0d\u8981\u518d\u63a5\u53d7\u4efb\u4f55 Request \u4e26\u4e14\u628a\u5269\u4e0b\u7684\u5de5\u4f5c\u8655\u7406\u5b8c\u7562\uff0c\u7576\u7136\u5982\u679c\u9019\u90e8\u4efd\u8655\u7406\u7684\u6642\u9593\u904e\u9577\uff0c\u8d85\u904e\u9810\u8a2d\u7684 GracePeriod (30sec)\uff0c\u5c31\u6703\u88ab SIGKILL \u7d66\u5f37\u5236\u522a\u9664\u3002\n\u8981\u89e3\u6c7a\u9019\u500b\u554f\u984c\u53ef\u80fd\u5c31\u8981\u5f9e\u61c9\u7528\u7a0b\u5f0f\u4e0b\u624b\u53bb\u770b\u5982\u4f55\u6539\u5584\uff0c\u6216\u662f\u900f\u904e\u4fee\u6539 Pod Spec \u4f86\u63d0\u6607 GracePeriodTemination \u7684\u9577\u77ed")))}m.isMDXComponent=!0}}]);