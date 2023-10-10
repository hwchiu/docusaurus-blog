"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[86108],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,b=p["".concat(u,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},21996:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u5f37\u5316 Kubernetes \u53e2\u96c6\u7684\u5fc5\u5099\u5de5\u5177\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u300c\u5f37\u5316 Kubernetes \u53e2\u96c6\u7684\u5fc5\u5099\u5de5\u5177\u300d",date:new Date("2022-04-18T00:05:09.000Z")},i=void 0,l={permalink:"/2022/04/18/reading-notes-40",source:"@site/blog/2022-04-18-reading-notes-40.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u5f37\u5316 Kubernetes \u53e2\u96c6\u7684\u5fc5\u5099\u5de5\u5177\u300d",description:"\u300c\u5f37\u5316 Kubernetes \u53e2\u96c6\u7684\u5fc5\u5099\u5de5\u5177\u300d",date:"2022-04-18T00:05:09.000Z",formattedDate:"April 18, 2022",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:2.08,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u5f37\u5316 Kubernetes \u53e2\u96c6\u7684\u5fc5\u5099\u5de5\u5177\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u300c\u5f37\u5316 Kubernetes \u53e2\u96c6\u7684\u5fc5\u5099\u5de5\u5177\u300d",date:"2022-04-18T00:05:09.000Z"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cDevOps \u7684 2022 \u5b78\u7fd2\u4e4b\u8def\u300d",permalink:"/2022/04/20/reading-notes-41"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4f60\u771f\u7684\u6709\u6b63\u78ba\u4f7f\u7528 SSH \u55ce?\u300d",permalink:"/2022/04/15/reading-notes-39"}},u={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6a19\u984c: \u300c\u5f37\u5316 Kubernetes \u53e2\u96c6\u7684\u5fc5\u5099\u5de5\u5177\u300d\n\u985e\u5225: kubernetes\n\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/mycloudseries/must-haves-for-your-kubernetes-cluster-to-be-production-ready-dc7d1d18c4a2"},"https://medium.com/mycloudseries/must-haves-for-your-kubernetes-cluster-to-be-production-ready-dc7d1d18c4a2")),(0,a.kt)("p",null,"\u4f5c\u8005\u672c\u7bc7\u6587\u7ae0\u60f3\u8981\u5206\u4eab\u4e00\u500b\u5176\u7528\u4f86\u8b93\u4e00\u500b Kubernetes \u8b8a\u5f97\u80fd\u5920\u771f\u6b63\u4e0a\u6230\u5834\u7684\u76f8\u95dc\u5de5\u5177\uff0c\u56e0\u6b64\u6587\u7ae0\u4e2d\u7279\u5225\u5f37\u8abf\u662f Production-Ready \u7684\u60c5\u6cc1\u3002\n\u4e00\u500b Production Ready \u7684 K8s \u53e2\u96c6\u5fc5\u9808\u5c0d\u65bc\u4e0b\u5217\u6bcf\u500b\u5927\u9805\u76ee\u90fd\u8981\u6709\u76f8\u95dc\u8655\u7406\u65b9\u5f0f\uff0c\u8b6c\u5982"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Reliability and Availability"),(0,a.kt)("li",{parentName:"ol"},"Security"),(0,a.kt)("li",{parentName:"ol"},"Network, Monitoring & Observability"),(0,a.kt)("li",{parentName:"ol"},"Backup/Recovery"),(0,a.kt)("li",{parentName:"ol"},"Cost Optimization"),(0,a.kt)("li",{parentName:"ol"},"Cluster Visualization")),(0,a.kt)("p",null,"Reliability and Availability:\n\u8a72\u9818\u57df\u7684\u5169\u500b\u6307\u6a19\u4ee3\u8868\u7684\u610f\u7fa9\u4e0d\u592a\u4e00\u6a23\uff0c\u4f46\u662f\u5c0d\u65bc\u4e00\u500b\u63d0\u4f9b\u670d\u52d9\u7684\u53e2\u96c6\u4f86\u8aaa\u90fd\u4e00\u6a23\u91cd\u8981"),(0,a.kt)("p",null,"\u9019\u908a\u4f5c\u8005\u5217\u8209\u4e86\u5e7e\u500b\u5de5\u5177\u8b6c\u5982"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"K8s \u5167\u5efa\u7684 HPA"),(0,a.kt)("li",{parentName:"ol"},"AWS \u7684 karpenter\uff0c\u8b93\u4f60\u91dd\u5c0d\u57fa\u65bc\u7bc0\u9ede\u70ba\u55ae\u4f4d\u4f86\u64f4\u5145"),(0,a.kt)("li",{parentName:"ol"},"Cluster-Autoscaler"),(0,a.kt)("li",{parentName:"ol"},"Goldilocks")),(0,a.kt)("p",null,"Backup/Recovery\n\u6709\u4e0d\u5c11\u4eba\u5718\u968a\u90fd\u5c0d\u65bc\u5c0d\u65bc\u53e2\u96c6\u7684\u5099\u4efd\u8207\u9084\u539f\u611f\u5230\u982d\u75db\uff0c\u76ee\u524d\u6700\u77e5\u540d\u7684\u958b\u6e90\u5c08\u6848\u83ab\u904e\u65bc Velero\uff0c\u5176\u652f\u63f4\u4e0d\u540c\u7684\u5132\u5b58\u8a2d\u5099\u5982 Cloud Storage \u7b49\u4f86\u5b58\u653e\uff0c\u8b93\u4e0d\u540c\u74b0\u5883\u7684 k8s \u4f7f\u7528\u8005\u90fd\u6709\u8fa6\u6cd5\u53bb\u5099\u4efd\u5176\u53e2\u96c6\u5167\u7684\u8cc7\u6599"),(0,a.kt)("p",null,"Cost Optimization"),(0,a.kt)("p",null,"\u5c0d\u65bc\u96f2\u7aef\u67b6\u69cb\u4f86\u8aaa\uff0c\u57fa\u672c\u4e0a\u96f2\u7aef\u696d\u8005\u7684\u5167\u5efa\u529f\u80fd\u5df2\u7d93\u53ef\u4ee5\u91dd\u5c0d\u5982 VM, \u5e95\u5c64\u67b6\u69cb\u7b49\u5404\u7a2e\u670d\u52d9\u53bb\u5217\u8209\u51fa\u5404\u81ea\u7684\u82b1\u8cbb\u91d1\u9322\uff0c\u5c07\u6b64\u6982\u5ff5\u5957\u5165\u5230 Kubernetes \u672c\u8eab\u5927\u62b5\u4e0a\u53ea\u80fd\u7406\u89e3\u5230 Master Node, Worker Node \u7b49\u4e4b\u985e\u7684\u82b1\u8cbb\uff0c\n\u56e0\u6b64\u900f\u904e Kubecost \u4e4b\u985e\u7684\u5c08\u6848\u4f86\u5c07\u6210\u672c\u7684\u6d1e\u5bdf\u7bc4\u570d\u64f4\u5145\u5230 Kubernetes \u5167\u90e8\uff0c\u4ee5 namespace, pod \u7b49\u5404\u7a2e k8s \u7684\u8cc7\u6e90\u70ba\u55ae\u4f4d\u4f86\u5217\u8209\u5be6\u969b\u82b1\u8cbb\u7684\u91d1\u984d\uff0c\u80fd\u5920\u8b93\u5718\u968a\u66f4\u6709\u6548\u5730\u53bb\u7ba1\u7406\u76f8\u95dc\u82b1\u8cbb"))}m.isMDXComponent=!0}}]);