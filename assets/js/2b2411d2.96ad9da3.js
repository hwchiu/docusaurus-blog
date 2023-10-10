"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[33867],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,h=s["".concat(u,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},95731:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",authors:"hwchiu",tags:["Reading"],description:"\u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",date:new Date("2022-06-27T02:05:08.000Z")},l=void 0,i={permalink:"/2022/06/27/reading-notes-63",source:"@site/blog/2022-06-27-reading-notes-63.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",description:"\u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",date:"2022-06-27T02:05:08.000Z",formattedDate:"June 27, 2022",tags:[{label:"Reading",permalink:"/tags/reading"}],readingTime:3.145,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",authors:"hwchiu",tags:["Reading"],description:"\u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d",date:"2022-06-27T02:05:08.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDevOps is a failure\u300d",permalink:"/2022/06/29/reading-notes-64"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cCloudflare 06/21 \u707d\u5f8c\u5831\u544a\u300d",permalink:"/2022/06/23/reading-notes-62"}},u={authorsImageUrls:[void 0]},c=[],p={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6a19\u984c: \u300c\u9762\u8a66\u4eba\u751f - \u8a2d\u8a08\u4e00\u500b\u7c21\u6613\u7684\u5206\u6563\u5f0f Job Scheduler\u300d\n\u985e\u5225: others\n\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@raxshah/system-design-design-a-distributed-job-scheduler-kiss-interview-series-753107c0104c"},"https://medium.com/@raxshah/system-design-design-a-distributed-job-scheduler-kiss-interview-series-753107c0104c")),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u662f\u4e00\u500b\u9762\u8a66\u6280\u8853\u6587\uff0c\u63a2\u8a0e\u958b\u767c\u4e00\u500b\u985e\u4f3c Job Scheduler \u7684\u5c08\u6848\u6642\u61c9\u8a72\u8981\u5982\u4f55\u53bb\u8a2d\u8a08\u6574\u9ad4\u7cfb\u7d71\u4f86\u5b8c\u6210\u9700\u6c42\uff0c\u6574\u9ad4\u7684\u67b6\u69cb\u57fa\u65bc KISS \u7684\u539f\u5247\uff0c\u5c31\u662f\u7c21\u55ae\u70ba\u4e3b\u3002"),(0,a.kt)("p",null,"\u6574\u500b\u6d41\u7a0b\u539f\u5247\u57fa\u672c\u4e0a\u662f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u7406\u89e3\u6240\u6709\u529f\u80fd\u9700\u6c42\uff0c\u5305\u542b\u529f\u80fd\u9762\u4ee5\u53ca\u975e\u529f\u80fd\u9762"),(0,a.kt)("li",{parentName:"ol"},"\u77ad\u89e3\u53ef\u80fd\u7684\u8cc7\u6599\uff0c\u6839\u64da\u898f\u6a21\u5927\u5c0f\u8207\u529f\u80fd\u9700\u6c42\u53bb\u63a8\u4f30\u51fa\u6574\u9ad4\u7684\u898f\u6a21\u5927\u5c0f"),(0,a.kt)("li",{parentName:"ol"},"\u6839\u64da\u4e0a\u8ff0\u9700\u6c42\u53bb\u898f\u5283\u6574\u9ad4\u67b6\u69cb\uff0c\u5176\u4e2d\u898f\u6a21\u5927\u5c0f\u6709\u6642\u5019\u53ef\u4ee5\u5e6b\u5fd9\u6b78\u7d0d\u51fa \u201d\u8b80\u5beb\u201c\u5f7c\u6b64\u7684\u6bd4\u4f8b\uff0c\u9019\u500b\u6703\u5f71\u97ff\u67b6\u69cb\u8a2d\u8a08")),(0,a.kt)("p",null,"\u529f\u80fd\u9762\u5e38\u898b\u985e\u578b\u5982"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u91dd\u5c0d\u4f7f\u7528\u8005\u63d0\u4f9b\u4f55\u7a2e\u64cd\u4f5c\uff0c\u8b6c\u5982\u905e\u4ea4\u4e00\u500b Job, \u5217\u51fa\u6240\u6709 Job(\u7576\u524d\uff0c\u6b77\u53f2)"),(0,a.kt)("li",{parentName:"ol"},"\u6bcf\u500b Job \u7684\u904b\u884c\u6642\u9593\u9650\u5236(ex, 5min)\uff0c\u540c\u6642 Job \u53ef\u4ee5\u91cd\u8907\u904b\u884c\u6216\u662f\u53ea\u904b\u884c\u4e00\u6b21\u7b49\u4e0d\u540c\u7528\u6cd5"),(0,a.kt)("li",{parentName:"ol"},"Job \u672c\u8eab\u4e5f\u6709\u512a\u5148\u5ea6\u7684\u8a2d\u8a08\uff0c\u53ef\u4ee5\u63d2\u968a\u7b49")),(0,a.kt)("p",null,"\u975e\u76f4\u63a5\u529f\u80fd\u9762\u5982"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u53ef\u52d5\u614b\u64f4\u5145\u898f\u6a21\u4f86\u652f\u63f4\u4e0d\u540c\u91cf\u7d1a\u7684\u9700\u6c42"),(0,a.kt)("li",{parentName:"ol"},"\u4e0d\u8ad6\u767c\u751f\u4efb\u4f55\u932f\u8aa4\u554f\u984c\uff0c\u4f7f\u7528\u8005\u63d0\u4ea4\u904e\u7684 Job \u8cc7\u8a0a\u90fd\u4e0d\u80fd\u907a\u5931"),(0,a.kt)("li",{parentName:"ol"},"\u975e\u540c\u6b65\u8a2d\u8a08\uff0c\u4f7f\u7528\u8005\u905e\u4ea4 Job \u5f8c\u5c31\u53ef\u4ee5\u7e7c\u7e8c\u5225\u7684\u5de5\u4f5c\uff0c Job \u5b8c\u6210\u5f8c\u6703\u4e3b\u52d5\u901a\u77e5\u4f7f\u7528\u8005")),(0,a.kt)("p",null,"\u6709\u4e86\u529f\u80fd\u9762\u7684\u9700\u6c42\uff0c\u63a5\u4e0b\u4f86\u5c31\u662f\u6578\u91cf\u5927\u5c0f\u7684\u9700\u6c42\uff0c\u8b6c\u5982\u8a72\u67b6\u69cb\u8981\u53ef\u4ee5\u9054\u5230\u6bcf\u79d2 1000 \u500b Job(1000QPS),\n\u5f9e\u9019\u4e9b\u9700\u6c42\u4e0b\u53bb\u4f30\u7b97\u5927\u6982\u9700\u8981\u591a\u5c11 CPU \u4ee5\u53ca\u591a\u5c11 Memory\uff0c\u540c\u6642\u9019\u4e9b\u6578\u91cf\u9084\u53ef\u4ee5\u6eff\u8db3\u529f\u80fd\u9762\u7684\u9700\u6c42\uff0c\u8b6c\u5982\u6bcf\u500b Job \u53ef\u4ee5\u904b\u884c\u6700\u591a\u4e94\u5206\u9418\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u4e5f\u8a31\u6703\u5f97\u5230\u9700\u8981 10,000 \u53f0\u7684 (16C) \u6a5f\u5668\uff0c\u4ee5\u53ca 100 \u53f0(16GB) \u7684\u6a5f\u5668\u4f86\u63d0\u4f9b\u670d\u52d9\n\u57fa\u672c\u7684\u904b\u7b97\u53ef\u4ee5\u5feb\u901f\u7684\u7406\u89e3\u8a72\u9700\u6c42\u5230\u5e95\u9700\u4e0d\u9700\u8981\u5206\u6563\u5f0f\u7684\u67b6\u69cb\u4f86\u8655\u7406\uff0c\u672c\u6587\u7684\u7bc4\u4f8b\u8cc7\u6599\u91cf\u5c31\u5f88\u660e\u986f\u662f scale up \u6c92\u6709\u8fa6\u6cd5\u5b8c\u6210\u7684\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u5c31\u57fa\u65bc\u5206\u6563\u5f0f\u7684\u67b6\u69cb\u53bb\u8a2d\u8a08\u76f8\u95dc\u67b6\u69cb\uff0c\u5305\u542b\u5982"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Load Balancer"),(0,a.kt)("li",{parentName:"ol"},"Backend"),(0,a.kt)("li",{parentName:"ol"},"DB"),(0,a.kt)("li",{parentName:"ol"},"Job scheduler"),(0,a.kt)("li",{parentName:"ol"},"Job Executor"),(0,a.kt)("li",{parentName:"ol"},"Queue"),(0,a.kt)("li",{parentName:"ol"},"File system")),(0,a.kt)("p",null,"\u9010\u6b65\u7684\u898f\u5283\u9019\u4e9b\u67b6\u69cb\uff0c\u4e26\u4e14\u63a2\u8a0e\u5f7c\u6b64\u5143\u4ef6\u4e4b\u9593\u7684\u6e9d\u901a\u65b9\u5f0f\uff0c\u9019\u4e9b\u65b9\u5f0f\u662f\u5982\u4f55\u4e92\u76f8\u7d44\u5408\u4f86\u6eff\u8db3\u529f\u80fd\u9762/\u975e\u529f\u80fd\u9762\u7684\u9700\u6c42"),(0,a.kt)("p",null,"\u8a73\u7d30\u9700\u6c42\u53ef\u4ee5\u53c3\u8003\u5168\u6587"))}m.isMDXComponent=!0}}]);