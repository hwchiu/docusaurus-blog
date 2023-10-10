"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[68231],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||b[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[p]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={title:"\u95b1\u8b80\u7b46\u8a18: \u300cKubernetes \u591a\u79df\u6236\u5be6\u4f5c\u7684\u6311\u6230\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u300cKubernetes \u591a\u79df\u6236\u5be6\u4f5c\u7684\u6311\u6230\u300d"},i=void 0,u={permalink:"/2021/11/24/reading-note-12",source:"@site/blog/2021-11-24-reading-note-12.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300cKubernetes \u591a\u79df\u6236\u5be6\u4f5c\u7684\u6311\u6230\u300d",description:"\u300cKubernetes \u591a\u79df\u6236\u5be6\u4f5c\u7684\u6311\u6230\u300d",date:"2021-11-24T00:00:00.000Z",formattedDate:"November 24, 2021",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Kubernetes",permalink:"/tags/kubernetes"}],readingTime:4.05,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cKubernetes \u591a\u79df\u6236\u5be6\u4f5c\u7684\u6311\u6230\u300d",authors:"hwchiu",tags:["Reading","Kubernetes"],description:"\u300cKubernetes \u591a\u79df\u6236\u5be6\u4f5c\u7684\u6311\u6230\u300d"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cSO_REUSEPORT \u63d0\u6607 Nginx \u6548\u80fd\u300d",permalink:"/2021/11/25/reading-note-13"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cKubernetes manageFields \u8a0e\u8ad6\u300d",permalink:"/2021/11/22/reading-note-11"}},l={authorsImageUrls:[void 0]},c=[],s={toc:c},p="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://faun.pub/kubernetes-multi-tenancy-a-best-practices-guide-88e37ef2b709?gi=6e43dc5ed7a"},"https://faun.pub/kubernetes-multi-tenancy-a-best-practices-guide-88e37ef2b709?gi=6e43dc5ed7a")),(0,a.kt)("p",null,"\u9019\u908a\u8ddf\u5927\u5bb6\u5206\u4eab\u4e00\u7bc7\u95dc\u65bc Kubernetes \u591a\u79df\u6236\u7684\u76f8\u95dc\u6587\u7ae0\uff0c\u8a72\u6587\u7ae0\u4e2d\u63a2\u8a0e\u5230\u5e95\u591a\u79df\u6236\u7684\u5b9a\u7fa9\uff0c\u4ee5\u53ca\u5be6\u73fe\u4e0a\u7684\u96e3\u6613\u7a0b\u5ea6"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u591a\u79df\u6236\u53ef\u5206\u6210\u8edf\u6027\u8207\u786c\u6027\u5169\u7a2e\u9694\u96e2\uff0c Kubernetes namespace \u53ef\u4ee5\u8996\u70ba\u8edf\u6027\u9694\u96e2\uff0c\u800c\u786c\u6027\u9694\u96e2\u5247\u662f\u5e0c\u671b\u80fd\u5920\u66f4\u5f37\u529b\u7684\u9694\u96e2\u6240\u6709\u8cc7\u6e90\uff0c\u6587\u7ae0\u4e2d\u63d0\u5230\u4e86 vClusters \u7684\u6982\u5ff5\uff0c\u9023\u7d50\u653e\u5728\u6700\u5f8c"),(0,a.kt)("li",{parentName:"ol"},"\u4f5c\u8005\u8a8d\u70ba\u591a\u79df\u6236\u7684 Kubernetes Cluster \u5be6\u969b\u4e0a\u4e5f\u6703\u5e36\u4f86\u4e00\u4e9b\u9650\u5236\uff0c\u8b93\u67d0\u4e9b\u529f\u80fd\u8b8a\u5f97\u4e0d\u65b9\u4fbf\u4f7f\u7528\u3002\na. \u57fa\u65bc namespace \u7684\u79df\u6236\u9694\u96e2\u65b9\u5f0f\u5c31\u53ea\u80fd\u5927\u5bb6\u90fd\u540c\u6a23\u4e00\u500b k8s \u7248\u672c\uff0c\u540c\u6642\u6709\u4e00\u4e9b\u652f\u63f4 RBAC \u8a2d\u5b9a\u7684 Helm Chart \u53ef\u80fd\u5c31\u4e0d\u65b9\u4fbf\u4f7f\u7528\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u4f5c\u8005\u9019\u908a\u53cd\u601d\u63d0\u51fa\u4e00\u500b\u554f\u984c\uff0c\u70ba\u4ec0\u9ebc\u771f\u7684\u9700\u8981\u591a\u79df\u6236\u7684 Kubernetes \u53e2\u96c6\uff0c\u4e0d\u80fd\u5920\u7528\u591a\u500b\u55ae\u4e00\u79df\u6236\u7684 Kubernetes \u53e2\u96c6\u4f86\u53d6\u4ee3?\na. \u771f\u7684\u6709\u9019\u6a23\u7684\u5be6\u4f8b\uff0c\u4f46\u662f\u5176\u5be6\u6210\u672c\u904e\u9ad8\u4e14\u6c92\u6548\u7387\u3002\nb. \u5982\u679c\u516c\u53f8\u5167\u6bcf\u500b\u958b\u767c\u4eba\u54e1\u90fd\u9700\u8981\u4e00\u500b\u81ea\u5df2\u7684 k8s\u4f86\u64cd\u4f5c\u6e2c\u8a66\uff0c\u898f\u6a21\u4e00\u5927\u7684\u8a71\u4f60\u6bcf\u500b\u6708\u7684\u6210\u672c\u975e\u5e38\u53ef\u89c0\uff0c\u56e0\u6b64\u5982\u679c\u53ef\u4ee5\u6709\u4e00\u500b\u591a\u79df\u6236\u7684 k8s\uff0c\u5c31\u53ef\u4ee5\u89e3\u6c7a\u9019\u4e9b\u554f\u984c"),(0,a.kt)("li",{parentName:"ol"},"\u591a\u79df\u6236\u5be6\u4f5c\u4e0a\u7684\u6311\u6230\uff0c\u4f5c\u8005\u9019\u908a\u5217\u51fa\u5e7e\u500b\u554f\u984c\uff0c\u5305\u542b\u4f7f\u7528\u8005\u7ba1\u7406\uff0c\u8cc7\u6e90\u5206\u914d\u4ee5\u53ca\u5982\u4f55\u9694\u96e2\na.\u57fa\u672c\u4e0a\u6bcf\u500b\u7d44\u7e54\u672c\u8eab\u90fd\u5df2\u7d93\u6709\u7ba1\u7406\u4f7f\u7528\u8005\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u8b6c\u5982 AD/LDAP \u7b49\uff0c\u5982\u679c\u8981\u5c07\u9019\u4e9b\u4f7f\u7528\u8005\u7684\u8a8d\u8b49\u6388\u6b0a\u8207 kubernetes \u6574\u5408\uff0c\u63a8\u85a6\u4f7f\u7528 dex \u9019\u500b\u652f\u6301 OpneID/OAtuth2 \u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u5e6b\u4f60\u5c07 Kubernetes \u8207\u5916>\n\u90e8\u8cc7\u6599\u7cfb\u7d71\u6574\u5408\nb. \u5e95\u5c64\u8cc7\u6e90\u7684\u5171\u4eab\uff0c\u907f\u514d\u55ae\u4e00\u79df\u6236\u904e\u5ea6\u4f7f\u7528\u5c0e\u81f4\u5176\u4ed6\u79df\u6236\u4e0d\u80fd\u4f7f\u7528\u3002\u8cc7\u6e90\u5305\u542b\u4e86\u904b\u7b97\u8cc7\u6e90\uff0c\u7db2\u8def\u983b\u5bec\u7b49\u3002\u4f5c\u8005\u5217\u51fa\u900f\u904e Resource Quotas \u7b49\u53ef\u4ee5\u5e6b\u5fd9\u9650\u5236\u904b\u7b97\u8cc7\u6e90\uff0c\u4f46\u662f\u4e26\u6c92\u6709\u8aaa\u51fa\u7db2\u8def\u983b\u5bec\u9019\u90e8\u4efd\u8a72\u600e\u9ebc\u8655\u7406\u3002>\n\u9019\u90e8\u4efd\u6211\u8a8d\u70ba\u9700\u8981\u5c0e\u5165\u66f4\u591a\u7684network qos\u89e3\u6c7a\u65b9\u6848\u4f86\u9650\u5236\uff0c\u61c9\u8a72\u6703\u9700\u8981cni\u4ee5\u53ca\u5916\u90e8\u4ea4\u63db\u6a5f\u8def\u7531\u5668\u7b49\u4f86\u5e6b\u5fd9\nc. \u6700\u5f8c\u5247\u662f\u4e92\u52d5\u4e0a\u7684\u9694\u96e2\uff0c\u8981\u5982\u4f55\u78ba\u4fdd\u9019\u4e9b\u591a\u79df\u6236\u4e0d\u6703\u4e92\u76f8\u5f71\u97ff\u5f7c\u6b64\uff0c\u751a\u81f3\u653b\u64ca\u5f7c\u6b64\u3002\u9019\u90e8\u4efd\u53ef\u80fd\u8981\u5f9e NetworkPolicy \u4f86\u8655\u7406\u7db2\u8def\u6d41\u91cf\uff0c\u540c\u6642\u900f\u904e vCluster\u7684\u65b9\u5f0f\u4f86\u63d0\u4f9b\u76f8\u5c0d\u65bc namespace\u5c64\u7d1a\u66f4\u5f37\u70c8\u7684\u9694\u96e2\uff0c\u78ba\n\u4fdd\u5f7c\u6b64\u4e0d\u6703\u4e92\u76f8\u5f71\u97ff\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6700\u5f8c\uff0c\u4f5c\u8005\u5217\u51fa\u4e86\u4e00\u4e9b\u95dc\u65bc\u591a\u79df\u6236\u7684\u53ef\u80fd\u89e3\u6c7a\u65b9\u6848\uff0c\u5305\u542b\u4e86 kiosk, loft\u7b49\n\u7d50\u8ad6\u4f86\u8aaa\u5c31\u662f\uff0c\u4eca\u5929\u4f60\u5982\u679c\u6709\u591a\u79df\u6236\u7684\u9700\u6c42\uff0c\u8acb\u5148\u554f\u81ea\u5df1\uff0c\u4f60\u9700\u8981\u4ec0\u9ebc\u7b49\u7d1a\u7684\u591a\u79df\u6236\u7ba1\u7406\uff0c\u518d\u4f86\u5247\u662f\u4e09\u500b\u91cd\u9ede\u554f\u984c\u8981\u5148\u60f3\u6e05\u695a\uff0c\u4f60\u8981\u600e\u9ebc\u8655\u7406\n1) \u5982\u4f55\u7ba1\u7406\u4f7f\u7528\u8005/\u79df\u6236\n2) \u7cfb\u7d71\u8cc7\u6e90\u8981\u5982\u4f55\u5206\u914d\u8207\u9650\u5236\n3) \u5982\u4f55\u771f\u6b63\u6709\u6548\u7684\u9694\u96e2\u9019\u4e9b\u79df\u6236\n\u5982\u679c\u6709\u9019\u65b9\u9762\u7684\u9700\u6c42\uff0c\u53ef\u4ee5\u5148\u770b\u770b\u5225\u7684\u958b\u6e90\u8edf\u9ad4\u600e\u9ebc\u5be6\u4f5c\uff0c\u518d\u4f86\u601d\u8003\u662f\u5426\u6eff\u8db3\u9700\u6c42\uff0c\u5982\u679c\u8981\u81ea\u5df1\u5be6\u73fe\uff0c\u6709\u54ea\u4e9b\u597d\u7684\u8a2d\u8a08\u503c\u5f97\u53c3\u8003!")))}b.isMDXComponent=!0}}]);