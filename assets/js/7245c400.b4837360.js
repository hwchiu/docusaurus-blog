"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[87364],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={title:"[Cloud Design Pattern] - Ambassador \u6a21\u5f0f",authors:"hwchiu",tags:["CloudNative","DesignPattern"],description:"Cloud Design Pattern",date:new Date("2021-12-27T22:52:08.000Z")},i=void 0,l={permalink:"/2021/12/27/cloud-pattern-ambassador",source:"@site/blog/2021-12-27-cloud-pattern-ambassador.md",title:"[Cloud Design Pattern] - Ambassador \u6a21\u5f0f",description:"Cloud Design Pattern",date:"2021-12-27T22:52:08.000Z",formattedDate:"December 27, 2021",tags:[{label:"CloudNative",permalink:"/tags/cloud-native"},{label:"DesignPattern",permalink:"/tags/design-pattern"}],readingTime:1.63,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"[Cloud Design Pattern] - Ambassador \u6a21\u5f0f",authors:"hwchiu",tags:["CloudNative","DesignPattern"],description:"Cloud Design Pattern",date:"2021-12-27T22:52:08.000Z"},prevItem:{title:"2021-\u5e74\u5ea6\u56de\u9867",permalink:"/2021/12/29/2021-review"},nextItem:{title:"\u662f\u6642\u5019\u505c\u6b62\u4f7f\u7528 python 3.6",permalink:"/2021/12/25/stop-python-36"}},c={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9023\u7d50: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/.../archit.../patterns/ambassador"},"https://docs.microsoft.com/.../archit.../patterns/ambassador")),(0,a.kt)("p",null,"\u5fae\u8edf\u6587\u4ef6\u4e2d\u7684\u7cfb\u5217\u597d\u6587\uff0c\u63a2\u8a0e\u96f2\u7aef\u65b9\u9762\u7684\u5404\u7a2e\u8a2d\u8a08\u6a21\u5f0f\uff0c\u800c\u672c\u7bc7\u63a2\u8a0e\u7684\u662f Ambassador \u6a21\u5f0f\n\u60f3\u6cd5:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u60f3\u8981\u63d0\u4f9b\u66f4\u591a\u9032\u968e\u7684\u7db2\u8def\u529f\u80fd\u5230\u61c9\u7528\u7a0b\u5f0f\u4e0a\uff0c\u8b6c\u5982 TLS\u3001circuit\u3001breaking\u3001routing \u6216 metering\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u61c9\u7528\u7a0b\u5f0f\u4e0d\u592a\u65b9\u4fbf\u4fee\u6539\u4f86\u7b26\u5408\u4e0a\u8ff0\u529f\u80fd\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u90e8\u7f72\u4e00\u500b\u8ddf\u539f\u61c9\u7528\u7a0b\u5f0f\u76f8\u9130\u7684\u61c9\u7528\u7a0b\u5f0f\u4f86\u8655\u7406\u9019\u4e9b\u7db2\u8def\u529f\u80fd\u3002\n\u61c9\u7528\u7a0b\u5f0f\u904e\u65bc\u53e4\u8001\uff0c\u5718\u968a\u6c92\u6709\u8fa6\u6cd5\u9032\u884c\u6df1\u5ea6\u4fee\u6539\u6216\u662f\u5718\u968a\u4e2d\u7684\u61c9\u7528\u7a0b\u5f0f\u4f7f\u7528\u904e\u591a\u7684\u8a9e\u8a00\u8207\u6846\u67b6\u5b8c\u6210\uff0c\u5f88\u96e3\u7c21\u6613\u7684\u5c07\u9019\u4e9b\u529f\u80fd\u7d66\u5c0e\u5165\u5230\u65e2\u6709\u7684\u61c9\u7528\u7a0b\u5f0f\u4e2d\n\u9019\u6642\u5019\u90e8\u7f72\u4e00\u500b\u5168\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u5c31\u53ef\u4ee5\u518d\u4e0d\u4fee\u6539\u65e2\u6709\u61c9\u7528\u7a0b\u5f0f\u7684\u524d\u63d0\u4e0b\u4f86\u63d0\u4f9b\u9019\u4e9b\u9032\u968e\u7684\u7db2\u8def\u529f\u80fd\u3002\n\u9019\u500b\u6a21\u5f0f\u666e\u904d\u88ab\u7a31\u70ba ambassador \u6a21\u5f0f\uff0c\u800c\u672c\u7bc7\u6587\u7ae0\u5c31\u662f\u91dd\u5c0d\u8a72\u6a21\u5f0f\u9032\u884c\u4e00\u500b\u79d1\u666e\u6982\u5ff5\u3002\n\u6587\u7ae0\u6700\u5f8c\u9084\u8981\u63a2\u8a0e\u4f7f\u7528\u9019\u7a2e\u6a21\u5f0f\u7684\u4e00\u4e9b\u6ce8\u610f\u4e8b\u9805\uff0c\u8b6c\u5982\u7db2\u8def\u7684\u5ef6\u9072\u6703\u56e0\u70ba\u591a\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\u800c\u63d0\u5347\uff0c\u6240\u4ee5\u4f7f\u7528\u4e0a\u4e5f\u8981\u8a55\u4f30\u770b\u770b\u662f\u5426\u5408\u9069\u3002\n\u4e5f\u6709\u7c21\u55ae\u7684\u5217\u51fa\u4ec0\u9ebc\u60c5\u6cc1\u9069\u5408\u4f7f\u7528 ambassador \u4ec0\u9ebc\u60c5\u6cc1\u4e0d\u9069\u5408\u3002")))}m.isMDXComponent=!0}}]);