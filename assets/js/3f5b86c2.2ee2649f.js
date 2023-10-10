"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[42838],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||g[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56076:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4f7f\u7528 Open Policy Agent \u4f86\u4fdd\u8b77 Ingress \u7684\u8aa4\u7528\u300d",authors:"hwchiu",tags:["Reading","Kubernetes","OPA","Network"],description:"\u300c\u4f7f\u7528 Open Policy Agent \u4f86\u4fdd\u8b77 Ingress \u7684\u8aa4\u7528\u300d"},i=void 0,c={permalink:"/2021/12/01/reading-note-17",source:"@site/blog/2021-12-01-reading-note-17.md",title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4f7f\u7528 Open Policy Agent \u4f86\u4fdd\u8b77 Ingress \u7684\u8aa4\u7528\u300d",description:"\u300c\u4f7f\u7528 Open Policy Agent \u4f86\u4fdd\u8b77 Ingress \u7684\u8aa4\u7528\u300d",date:"2021-12-01T00:00:00.000Z",formattedDate:"December 1, 2021",tags:[{label:"Reading",permalink:"/tags/reading"},{label:"Kubernetes",permalink:"/tags/kubernetes"},{label:"OPA",permalink:"/tags/opa"},{label:"Network",permalink:"/tags/network"}],readingTime:1.2,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"\u95b1\u8b80\u7b46\u8a18: \u300c\u4f7f\u7528 Open Policy Agent \u4f86\u4fdd\u8b77 Ingress \u7684\u8aa4\u7528\u300d",authors:"hwchiu",tags:["Reading","Kubernetes","OPA","Network"],description:"\u300c\u4f7f\u7528 Open Policy Agent \u4f86\u4fdd\u8b77 Ingress \u7684\u8aa4\u7528\u300d"},prevItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cContainer Image \u7684\u5132\u5b58\u6311\u6230\u300d",permalink:"/2021/12/03/reading-note-18"},nextItem:{title:"\u95b1\u8b80\u7b46\u8a18: \u300cSCP \u5de5\u5177\u7684\u6ce8\u610f\u4e8b\u9805\u300d",permalink:"/2021/11/30/reading-note-16"}},s={authorsImageUrls:[void 0]},l=[],p={toc:l},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9023\u7d50: ",(0,o.kt)("a",{parentName:"p",href:"https://www.cncf.io/blog/2020/09/29/enforce-ingress-best-practices-using-opa/"},"https://www.cncf.io/blog/2020/09/29/enforce-ingress-best-practices-using-opa/")),(0,o.kt)("p",null,"\u4e0d\u77e5\u9053\u5927\u5bb6\u6709\u6c92\u6709\u807d\u904e Open Policy Agent (OPA) \u9019\u500b CNCF \u5c08\u6848?\n\u6709\u6eff\u591a\u5c08\u6848\u7684\u80cc\u5f8c\u90fd\u4f7f\u7528\u57fa\u65bc OPA \u7684\u8a9e\u8a00 Rego \u4f86\u63cf\u8ff0\u5404\u5f0f\u5404\u6a23\u7684 Policy\uff0c\u8b6c\u5982\u53ef\u4ee5\u4f7f\u7528 conftest \u4f86\u5e6b\u4f60\u7684 kubernetes yaml \u6aa2\u67e5\u8a9e\u610f\u662f\u5426\u6709\u7b26\u5408\u4e8b\u5148\u8a2d\u5b9a\u7684 Policy\u3002\n\u672c\u7bc7\u6587\u7ae0\u5247\u662f\u8ddf\u5927\u5bb6\u5206\u4eab\u5982\u4f55\u4f7f\u7528 OPA \u4f86\u91dd\u5c0d Ingress \u8cc7\u6e90\u9032\u884c\u76f8\u95dc\u9632\u5446\u8207\u9664\u932f\uff0c\u4e00\u500b\u6700\u57fa\u672c\u7684\u7bc4\u4f8b\u5c31\u662f\u5982\u4f55\u907f\u514d\u6709\u591a\u500b Ingress \u4f7f\u7528\u76f8\u540c\u7684 hostname \u537b\u6307\u5411\u4e0d\u540c\u7684 backend service. \u904e\u5f80\u53ef\u80fd\u90fd\u662f\u9760\u4eba\u5de5\u53bb\u7dad\u8b77\n\uff0c\u78ba\u4fdd\u6c92\u6709\u4e00\u81f4\u7684\u540d\u7a31\uff0c\u4f46\u662f\u900f\u904e OPA \u7684\u6982\u5ff5\u6211\u5011\u53ef\u4ee5\u518d\u4f48\u7f72 Ingress \u5230 Kubernetes \u524d\u5148\u9032\u884c\u4e00\u6b21\u52d5\u614b\u7684\u6bd4\u5c0d\uff0c\u78ba\u4fdd\u7576\u524d\u8a2d\u5b9a\u7b26\u5408\u6240\u6709 Policy\uff0c\u5f97\u5230\u6240\u8b02\u7684 Approved \u5f8c\u624d\u80fd\u5920\u4f48\u7f72\u9032\u53bb\u3002\n\u6709\u8208\u8da3\u7684\u4eba\u53ef\u4ee5\u770b\u770b\u9019\u7bc7\u6587\u7ae0\uff0c\u751a\u81f3\u5b78\u7fd2\u4e00\u4e0b OPA \u7684\u4f7f\u7528\u65b9\u5f0f"))}g.isMDXComponent=!0}}]);