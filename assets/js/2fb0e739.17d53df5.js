"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[39869],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,h=s["".concat(i,".").concat(m)]||s[m]||f[m]||c;return t?n.createElement(h,l(l({ref:r},u),{},{components:t})):n.createElement(h,l({ref:r},u))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,l=new Array(c);l[0]=m;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a[s]="string"==typeof e?e:o,l[1]=a;for(var p=2;p<c;p++)l[p]=t[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},38556:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>p});var n=t(87462),o=(t(67294),t(3905));const c={title:"Dockerfile \u5167 Shell/Exec \u7684\u7528\u6cd5\u5dee\u7570",authors:"hwchiu",tags:["Docker","Linux"],description:"Docker \u57fa\u672c\u4ecb\u7d39\u6587\uff0c\u4e0d\u77e5\u9053\u5e38\u5beb Dockerfile \u7684\u8b80\u8005\u80fd\u4e0d\u80fd\u5206\u6e05\u695a Dockerfile \u5167 Shell \u8207 Exec \u5169\u7a2e\u683c\u5f0f\u7684\u5dee\u7570",date:new Date("2021-12-21T17:18:28.000Z")},l=void 0,a={permalink:"/2021/12/21/docker-shell-exec",source:"@site/blog/2021-12-21-docker-shell-exec.md",title:"Dockerfile \u5167 Shell/Exec \u7684\u7528\u6cd5\u5dee\u7570",description:"Docker \u57fa\u672c\u4ecb\u7d39\u6587\uff0c\u4e0d\u77e5\u9053\u5e38\u5beb Dockerfile \u7684\u8b80\u8005\u80fd\u4e0d\u80fd\u5206\u6e05\u695a Dockerfile \u5167 Shell \u8207 Exec \u5169\u7a2e\u683c\u5f0f\u7684\u5dee\u7570",date:"2021-12-21T17:18:28.000Z",formattedDate:"December 21, 2021",tags:[{label:"Docker",permalink:"/tags/docker"},{label:"Linux",permalink:"/tags/linux"}],readingTime:.76,hasTruncateMarker:!1,authors:[{name:"HungWei Chiu",title:"Blogger",url:"https://github.com/hwchiu",imageURL:"https://github.com/hwchiu.png",key:"hwchiu"}],frontMatter:{title:"Dockerfile \u5167 Shell/Exec \u7684\u7528\u6cd5\u5dee\u7570",authors:"hwchiu",tags:["Docker","Linux"],description:"Docker \u57fa\u672c\u4ecb\u7d39\u6587\uff0c\u4e0d\u77e5\u9053\u5e38\u5beb Dockerfile \u7684\u8b80\u8005\u80fd\u4e0d\u80fd\u5206\u6e05\u695a Dockerfile \u5167 Shell \u8207 Exec \u5169\u7a2e\u683c\u5f0f\u7684\u5dee\u7570",date:"2021-12-21T17:18:28.000Z"},prevItem:{title:"\u5de5\u4f5c20 \u9918\u5e74\u7684\u8edf\u9ad4\u67b6\u69cb\u7d93\u9a57\u8ac7",permalink:"/2021/12/22/software-experience"},nextItem:{title:"Bash \u4e0b\u8981\u5982\u4f55\u8655\u7406 Signal",permalink:"/2021/12/19/bash-trap"}},i={authorsImageUrls:[void 0]},p=[],u={toc:p},s="wrapper";function f(e){let{components:r,...t}=e;return(0,o.kt)(s,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9023\u7d50: ",(0,o.kt)("a",{parentName:"p",href:"https://emmer.dev/blog/docker-shell-vs.-exec-form/"},"https://emmer.dev/blog/docker-shell-vs.-exec-form/")),(0,o.kt)("p",null,"Docker \u57fa\u672c\u4ecb\u7d39\u6587\uff0c\u4e0d\u77e5\u9053\u5e38\u5beb Dockerfile \u7684\u8b80\u8005\u80fd\u4e0d\u80fd\u5206\u6e05\u695a Dockerfile \u5167 Shell \u8207 Exec \u5169\u7a2e\u683c\u5f0f\u7684\u5dee\u7570\nRUN, CMD, ENTRYPOINT \u7b49\u6307\u4ee4\u90fd\u540c\u6642\u652f\u63f4\u9019\u5169\u7a2e\u683c\u5f0f\nShell \u683c\u5f0f\u5c31\u662f RUN command arg1 arg2 arg3 \u9019\u7a2e\u76f4\u63a5\u63cf\u8ff0\u7684\u683c\u5f0f\uff0c\u800c Exec \u5247\u662f\u7528 [] \u5305\u8d77\u4f86\uff0c\u6bcf\u500b\u53c3\u6578\u55ae\u7368\u6558\u8ff0\uff0c\u8b6c\u5982\nRUN ",'["command", "arg1", "arg2", "arg3"]'," \u7b49\u3002\n\u672c\u7bc7\u6587\u7ae0\u63a8\u85a6 RUN \u6307\u4ee4\u63a1\u53d6 Shell \u683c\u5f0f\u800c CMD/ENTRYPOINT \u90fd\u61c9\u8a72\u63a1\u7528 EXEC \u683c\u5f0f\u3002\n\u5982\u679c\u81ea\u5df1\u4e0d\u6e05\u695a\u5dee\u7570\u4ee5\u53ca\u6c92\u6709\u60f3\u6cd5\u70ba\u4ec0\u9ebc\u5e73\u5e38\u81ea\u5df1\u9019\u9ebd\u5beb\u7684\u8a71\u53ef\u4ee5\u53c3\u8003\u5168\u6587"))}f.isMDXComponent=!0}}]);