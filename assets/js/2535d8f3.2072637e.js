"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[66401],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,l=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),m=o,k=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(k,p(p({ref:e},c),{},{components:n})):r.createElement(k,p({ref:e},c))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i[d]="string"==typeof t?t:o,p[1]=i;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58903:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={title:"How to download http file in Android",tags:["Android","Java","System"],date:new Date("2017-09-12T08:35:38.000Z"),description:"\u5982\u4f55\u65bc Android \u4e2d\u4e0b\u8f09 HTTP \u6a94\u6848"},p=void 0,i={unversionedId:"techPost/2017/android-http",id:"techPost/2017/android-http",title:"How to download http file in Android",description:"\u5982\u4f55\u65bc Android \u4e2d\u4e0b\u8f09 HTTP \u6a94\u6848",source:"@site/docs/techPost/2017/android-http.md",sourceDirName:"techPost/2017",slug:"/techPost/2017/android-http",permalink:"/docs/techPost/2017/android-http",draft:!1,tags:[{label:"Android",permalink:"/docs/tags/android"},{label:"Java",permalink:"/docs/tags/java"},{label:"System",permalink:"/docs/tags/system"}],version:"current",frontMatter:{title:"How to download http file in Android",tags:["Android","Java","System"],date:"2017-09-12T08:35:38.000Z",description:"\u5982\u4f55\u65bc Android \u4e2d\u4e0b\u8f09 HTTP \u6a94\u6848"},sidebar:"techPost",previous:{title:"DRBD v9.0 Network Work Flow(i)",permalink:"/docs/techPost/2017/DRBD-v9-0-Network-Work-Flow"},next:{title:"Anki \u4f7f\u7528\u611f\u60f3 (tutorial)",permalink:"/docs/techPost/2017/anki-tutorial"}},l={},s=[],c={toc:s},d="wrapper";function u(t){let{components:e,...n}=t;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u7528\u4f86\u8a18\u9304\u5982\u4f55\u5728",(0,o.kt)("strong",{parentName:"p"},"Android"),"\u88e1\u9762\u900f\u904e ",(0,o.kt)("strong",{parentName:"p"},"Http")," \u6293\u53d6\u6a94\u6848"),(0,o.kt)("p",null,"\u9019\u908a\u4e3b\u8981\u6703\u7528\u5230\u5169\u500b\u7269\u4ef6\uff0c\u5206\u5225\u662f ",(0,o.kt)("strong",{parentName:"p"},"URL")," \u4ee5\u53ca ",(0,o.kt)("strong",{parentName:"p"},"HttpURLConnection"),"\u3002"),(0,o.kt)("p",null,"\u6b65\u9a5f\u5982\u4e0b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6839\u64da\u76ee\u6a19\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"URL"),"\u53bb\u521d\u59cb\u5316\u5c0d\u61c9\u7684",(0,o.kt)("strong",{parentName:"li"},"URL"),"\u7269\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u900f\u904e\u8a72 ",(0,o.kt)("strong",{parentName:"li"},"URL")," \u5f97\u5230\u5c0d\u61c9\u7684 ",(0,o.kt)("strong",{parentName:"li"},"HttpURLConnection")),(0,o.kt)("li",{parentName:"ol"},"\u5f9e\u8a72 ",(0,o.kt)("strong",{parentName:"li"},"HttpURLConncetion")," \u53d6\u5f97\u56de\u61c9\uff0c\u8b6c\u5982 ",(0,o.kt)("inlineCode",{parentName:"li"},"Header"),"\u6216\u662f",(0,o.kt)("inlineCode",{parentName:"li"},"Body"))),(0,o.kt)("p",null,"\u6240\u4ee5\u63a5\u4e0b\u4f86\u770b\u4e00\u4e0b\u6bcf\u500b\u8a73\u7d30\u6b65\u9a5f,\u9019\u908a\u5047\u8a2d\u4f7f\u7528 ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"http://127.0.0.1/test"},"http://127.0.0.1/test"))," \u4f5c\u70ba\u6a94\u6848\u7684\u6e2c\u8a66"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},'URL url = null;\ntry {\n    url = new URL("http://127.0.0.1/test");\n} exception (MalformedURLException e) {\n    System.out.println(e.getMessage());\n}\n\n')),(0,o.kt)("p",null,"\u7531\u65bc ",(0,o.kt)("strong",{parentName:"p"},"URL")," \u672c\u8eab\u6703\u6709 ",(0,o.kt)("strong",{parentName:"p"},"MalformedURLException")," \u8981\u8655\u7406\uff0c\u6240\u4ee5\u8a18\u5f97\u7528 ",(0,o.kt)("strong",{parentName:"p"},"Try/Catch")," \u5305\u8d77\u4f86\u8655\u7406\u4e00\u4e0b\u932f\u8aa4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},"HttpURLConnection httpConn = (HttpURLConnction)url.openConnection();\n")),(0,o.kt)("p",null,"\u9019\u6a23\u5c31\u53ef\u4ee5\u53d6\u5f97\u8a72 ",(0,o.kt)("strong",{parentName:"p"},"HTTP")," \u7684\u9023\u7dda\u4e86\uff0c\u63a5\u4e0b\u4f86\u5c31\u53ef\u4ee5\u91dd\u5c0d ",(0,o.kt)("strong",{parentName:"p"},"ResponseCode")," \u4ee5\u53ca ",(0,o.kt)("strong",{parentName:"p"},"Data")," \u672c\u8eab\u53bb\u505a\u5f8c\u7e8c\u7684\u8655\u7406"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Java"},"int responseCode = httpConn.getResponseCode();\n\nif (HttpURLConnection.HTTP_OK == responseCode) {\n    InputStream is = httpConn.getInputStream();\n    //Handle InputStream\n}\n")))}u.isMDXComponent=!0}}]);