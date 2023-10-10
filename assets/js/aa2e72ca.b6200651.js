"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[74035],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),k=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},i=function(e){var t=k(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=k(r),u=a,g=m["".concat(s,".").concat(u)]||m[u]||N[u]||p;return r?n.createElement(g,o(o({ref:t},i),{},{components:r})):n.createElement(g,o({ref:t},i))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var k=2;k<p;k++)o[k]=r[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},92773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>N,frontMatter:()=>p,metadata:()=>l,toc:()=>k});var n=r(87462),a=(r(67294),r(3905));const p={title:"NAT Lookback Introduction",keywords:["nat loopback"],tags:["Linux","Network","Ubuntu"],date:new Date("2017-08-17T06:46:14.000Z"),description:"\u4ecb\u7d39 NAT Loopback \u7684\u6982\u5ff5"},o=void 0,l={unversionedId:"techPost/2017/nat-loopback",id:"techPost/2017/nat-loopback",title:"NAT Lookback Introduction",description:"\u4ecb\u7d39 NAT Loopback \u7684\u6982\u5ff5",source:"@site/docs/techPost/2017/nat-loopback.md",sourceDirName:"techPost/2017",slug:"/techPost/2017/nat-loopback",permalink:"/docs/techPost/2017/nat-loopback",draft:!1,tags:[{label:"Linux",permalink:"/docs/tags/linux"},{label:"Network",permalink:"/docs/tags/network"},{label:"Ubuntu",permalink:"/docs/tags/ubuntu"}],version:"current",frontMatter:{title:"NAT Lookback Introduction",keywords:["nat loopback"],tags:["Linux","Network","Ubuntu"],date:"2017-08-17T06:46:14.000Z",description:"\u4ecb\u7d39 NAT Loopback \u7684\u6982\u5ff5"},sidebar:"techPost",previous:{title:"LXR Server With Multiple Projects",permalink:"/docs/techPost/2017/lxr-setup-with-multiple-projects"},next:{title:"ONOS Trellis Testing",permalink:"/docs/techPost/2017/onos-trllis-testing"}},s={},k=[{value:"Introduction",id:"introduction",level:3},{value:"NAT Loopback",id:"nat-loopback",level:3},{value:"Linux Kernel trobule shooting",id:"linux-kernel-trobule-shooting",level:3},{value:"Summary",id:"summary",level:3}],i={toc:k},m="wrapper";function N(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5176\u5be6\u7db2\u8def\u4e0a\u95dc\u65bc NAT Loopback \u7684\u6587\u7ae0\u5230\u8655\u90fd\u6709\uff0c\u5f9e\u539f\u7406\uff0c\u5230\u5982\u4f55\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Linux"),"\u5be6\u4f5c\u7b49\u7db2\u8def\u4e0a\u5404\u7a2e\u8cc7\u6e90\u90fd\u6709\uff0c\u90a3\u9019\u7bc7\u6587\u7ae0\u8ddf\u7db2\u8def\u4e0a\u7684\u6559\u5b78\u53c8\u6709\u4ec0\u9ebc\u4e0d\u540c\uff1f\n\u6211\u552f\u4e00\u80fd\u5920\u8ca2\u737b\u7684\u662f NAT Loopback \u95dc\u65bc ",(0,a.kt)("inlineCode",{parentName:"p"},"Linux Kernel")," \u7684\u554f\u984c\uff0c\u5728\u67d0\u4e9b\u60c5\u6cc1\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"NATLoop Back")," \u6703\u56e0\u70ba ",(0,a.kt)("inlineCode",{parentName:"p"},"Linux Kernel Network Stack")," \u7684\u95dc\u4fc2\u5c0e\u81f4\u7121\u6cd5\u904b\u4f5c\u3002\u7576\u521d\u6211\u9047\u5230\u9019\u500b\u554f\u984c\u6642\u4e5f\u662f\u767e\u601d\u4e0d\u5f97\u5176\u89e3\uff0c\u65bc google \u4e16\u754c\u5230\u8655\u5c0b\u627e\uff0c\u90fd\u6c92\u6709\u770b\u5230\u4efb\u4f55\u7dda\u7d22\u3002\n\u6700\u5f8c\u53ea\u597d\u81ea\u5df1\u6df1\u5165 ",(0,a.kt)("strong",{parentName:"p"},"kernel")," \u5167\u627e\u5c0b\u539f\u56e0\uff0c\u5f9e ",(0,a.kt)("strong",{parentName:"p"},"Linux Kernel Network Stack")," \u958b\u59cb\u7ffb\u627e\u3002\n\u7d93\u904e\u4e00\u4e9b\u6642\u9593\u7684\u7814\u7a76\u8207\u8a3c\u5be6\u5f8c\uff0c\u4e5f\u7d42\u65bc\u78ba\u8a8d\u4e86\u67d0\u500b\u539f\u56e0\uff0c\u7136\u5f8c\u5c07\u9019\u500b\u554f\u984c\u7684\u95dc\u9375\u5b57\u8f49\u63db\u5f8c\uff0c\u4e5f\u6709\u627e\u5230\u4e00\u500b\u6c92\u6709\u4e0a\u5230 ",(0,a.kt)("strong",{parentName:"p"},"upstream")," \u7684 ",(0,a.kt)("strong",{parentName:"p"},"kernel patch")," \u91dd\u5c0d\u6b64\u554f\u984c\u8655\u7406\u3002"),(0,a.kt)("p",null,"\u5728\u771f\u6b63\u8e0f\u5165\u6838\u5fc3\u554f\u984c\u4ee5\u524d\uff0c\u9084\u662f\u8981\u4f86\u8aaa\u660e\u4e00\u4e0b\u4ec0\u9ebc\u662f NAT Loopback\uff0c\u5c0d\u65bc\u9019\u500b\u6982\u5ff5\u6709\u57fa\u672c\u7684\u8a8d\u77e5\u8207\u77ad\u89e3\u5f8c\uff0c\u518d\u4f86\u5be6\u969b\u770b\u770b ",(0,a.kt)("strong",{parentName:"p"},"kernel")," \u4e0a\u9762\u51fa\u73fe\u4e86\u4ec0\u9ebc\u554f\u984c\uff0c\u4ee5\u53ca\u90a3\u500b ",(0,a.kt)("strong",{parentName:"p"},"patch")," \u662f\u5982\u4f55\u89e3\u6c7a\u9019\u500b\u554f\u984c"),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u5047\u8a2d\u6709\u4e00\u500b\u4ee5\u4e0b\u7684\u7db2\u8def\u74b0\u5883\uff0c\u6211\u5011\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u5f8c\u9762\u8a2d\u7f6e\u4e86\u5169\u53f0 \u6a5f\u5668\uff0c\u4e00\u53f0\u662f ",(0,a.kt)("strong",{parentName:"p"},"Web Server"),"\uff0c\u53e6\u5916\u4e00\u53f0\u5247\u662f\u4e00\u822c\u7684 PC\u3002\n\u7531\u65bc\u8a72 PC \u8ddf\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u90fd\u5c6c\u65bc\u540c\u4e00\u500b\u7db2\u57df\u4e14\u90fd\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Router"),"  \u5e95\u4e0b\uff0c\u56e0\u6b64\u5169\u53f0\u6a5f\u5668\u4e4b\u9593\u82e5\u8981\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"IP addresss")," \u4f86\u50b3\u8f38\u57fa\u672c\u4e0a\u6c92\u6709\u592a\u591a\u554f\u984c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/wpKSalS.jpg",alt:null})),(0,a.kt)("p",null,"\u4f46\u662f\u5916\u7db2\u7684\u6a5f\u5668\u60f3\u8981\u5b58\u53d6\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u7684\u8a71\uff0c\u7531\u65bc ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u672c\u8eab\u7684 ",(0,a.kt)("strong",{parentName:"p"},"IP address")," \u5c6c\u65bc ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://en.wikipedia.org/wiki/Private_network"},"Private Network")),"\uff0c\u8b6c\u5982",(0,a.kt)("strong",{parentName:"p"},"192.168.0.0/16"),"\u9019\u500b\u7bc4\u570d\u5167\u3002\n\u56e0\u6b64\u5916\u7db2\u7684\u6a5f\u5668\u672c\u8eab\u4e26\u6c92\u6709\u8fa6\u6cd5\u76f4\u63a5\u5b58\u53d6\u5230\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"Web Server"),"\uff0c\u4f46\u662f\u82e5\u6211\u5011\u80fd\u5920\u5c07\u5c01\u5305\u9001\u5230\u524d\u9762\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Router"),"\uff0c\u518d\u900f\u904e\u67d0\u7a2e\u65b9\u5f0f\u544a\u8a34 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u8aaa\u9019\u500b\u5c01\u5305\u4e0d\u662f\u7d66\u4f60\u7684\uff0c\u8acb\u5e6b\u6211\u5f80\u4e0b\u8f49\u767c\u7d66\u5e95\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Web Server"),"\uff0c\u5247\u5c01\u5305\u5c31\u53ef\u4ee5\u5f88\u9806\u5229\u7684\u5230\u9054 ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u53bb\uff0c\u4e00\u5207\u7684\u9023\u7dda\u5c31\u9806\u5229\u5b8c\u6210\u3002"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u884c\u70ba\u88e1\u9762\u6700\u91cd\u8981\u7684\u90e8\u5206\u5c31\u662f\u5982\u4f55\u8b93 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u77e5\u9053\u4ec0\u9ebc\u6a23\u7684\u5c01\u5305\u8981\u9001\u7d66\u5e95\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Web Server"),"\uff0c\u4e00\u822c\u4f86\u8aaa\u90fd\u6703\u63a1\u7528 DNAT (Destination NAT)\u7684\u505a\u6cd5\u3002Router \u672c\u8eab\u6307\u5b9a\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"Port Number"),"\uff0c\u7576\u770b\u5230\u5c01\u5305\u662f\u9019\u500b Port \u7684\u6642\u5019\uff0c\u5c31\u6703\u5c07\u5c01\u5305\u8f49\u9001\u5230\u5e95\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Web Server"),"\uff0c\u4e26\u4e14\u5c07\u5c01\u5305\u5167\u5bb9\u4fee\u6539\u8b93 ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u80fd\u5920\u8655\u7406\u8a72\u5c01\u5305\u3002"),(0,a.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u5047\u8a2d\u6211\u5011\u5728 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u4e0a\u9762\u653e\u4e00\u689d DNAT \u7684\u898f\u5247"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"1.2.3.4:8001 ---\x3e 192.168.1.5:80\n")),(0,a.kt)("p",null,"\u5c0d\u65bc ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u4f86\u8aaa\uff0c\u7576\u770b\u5230\u5c01\u5305\u7684 ",(0,a.kt)("strong",{parentName:"p"},"ip:port")," \u662f ",(0,a.kt)("strong",{parentName:"p"},"1.2.3.4:8001"),"\uff0c\u5247\u6703\u5c07\u5c01\u5305\u6a19\u982d\u6539\u6210 ",(0,a.kt)("strong",{parentName:"p"},"192.168.1.5:80"),"\uff0c\u7136\u5f8c\u4f9d\u7167\u672c\u6a5f\u7aef\u5167\u7684 ",(0,a.kt)("strong",{parentName:"p"},"route rules")," \u5c07\u5176\u8f49\u767c\u5230\u5e95\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u53bb\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\u5047\u8a2d\u4eca\u5929\u5916\u7db2\u7684\u6a5f\u5668(9.8.7.6)\u767c\u9001\u4e86\u4e00\u500b\u5c01\u5305\uff0c\u5176\u6d41\u5411\u662f\n",(0,a.kt)("inlineCode",{parentName:"p"},"9.8.7.6:1234 ---\x3e 1.2.3.4:8001"),"\n\u7576 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u6536\u5230\u6b64\u5c01\u5305\u5f8c\uff0c\u5c31\u6703\u5c07\u5176\u8f49\u63db\u6210\n",(0,a.kt)("inlineCode",{parentName:"p"},"9.8.7.6:1234 ---\x3e 192.168.1.5:80")),(0,a.kt)("p",null,"\u7576 ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u6536\u5230\u6b64\u5c01\u5305\u5f8c\uff0c\u6703\u6709\u4e00\u500b\u56de\u61c9\u7684\u5c01\u5305\uff0c\u6b64\u5c01\u5305\u7684\u6d41\u5411\u662f\n",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.5:80 --\x3e 9.8.7.6:1234"),"\n\u7576\u6b64\u5c01\u5305\u5230\u9054 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u5f8c\uff0c ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u6703\u5148\u67e5\u8a62\u770b\u770b\u9019\u500b\u5c01\u5305\u662f\u4e0d\u662f\u7d93\u904e\u4e0a\u8ff0\u898f\u5247\u8f49\u63db\u7684\uff0c\u82e5\u662f\u7684\u8a71\u5c31\u5c07\u5c01\u5305\u5167\u5bb9\u91cd\u65b0\u8f49\u6210\uff08\u9032\u4f86\u7684\u5c01\u5305\u8f49\u63db\u5176 Destination, \u56de\u53bb\u7684\u5c01\u5305\u8f49\u63db\u5176 Source)\n",(0,a.kt)("inlineCode",{parentName:"p"},"1.2.3.4:8001 --\x3e 9.8.7.6:1234")),(0,a.kt)("p",null,"\u9019\u6a23\u5916\u7db2\u7684\u6a5f\u5668 (9.8.7.6) \u5c31\u53ef\u4ee5\u5f88\u9806\u5229\u8ddf\u5167\u7db2\u5167\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Web Server")," \u6e9d\u901a\u4e86\u3002"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u9019\u500b\u884c\u70ba\u6709\u4e9b\u6703\u7a31 ",(0,a.kt)("strong",{parentName:"p"},"Port Forwarding"),"\uff0c\u6709\u4e9b\u6703\u7a31 ",(0,a.kt)("strong",{parentName:"p"},"Virtual Server"),"\uff0c\u4e0d\u8ad6\u600e\u9ebc\u7a31\u547c\uff0c\u5176\u80cc\u5f8c\u7684\u610f\u7fa9\u90fd\u76f8\u540c\u3002"),(0,a.kt)("p",null,"\u7136\u800c\u5728\u771f\u5be6\u7684\u74b0\u5883\u4e2d\uff0c\u6211\u5011\u901a\u5e38\u4e0d\u6703\u53bb\u6b7b\u8a18\u9019\u4e9b ",(0,a.kt)("strong",{parentName:"p"},"IP address"),"\uff0c\u6211\u5011\u6703\u4f7f\u7528 DNS \u7684\u670d\u52d9\u4f86\u5e6b\u9019\u4e9b ",(0,a.kt)("strong",{parentName:"p"},"IP address")," \u8a2d\u5b9a\u4e00\u7d44\u597d\u8a18\u7684\u540d\u7a31\uff0c\u8209\u4f8b\u4f86\u8aaa\u53ef\u4ee5\u8a2d\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"webserver.com")," \u6307\u5411 ",(0,a.kt)("strong",{parentName:"p"},"1.2.3.4"),"\u3002\n\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5916\u9762\u6a5f\u5668\u60f3\u8981\u5b58\u53d6\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"webserver")," \u7684\u6d41\u7a0b\u5c31\u6703\u662f"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5916\u7db2\u6a5f\u5668(9.8.7.6)\u60f3\u8981\u5b58\u53d6 ",(0,a.kt)("strong",{parentName:"li"},"webserver.com"),"\uff0c\u56e0\u6b64\u5411 ",(0,a.kt)("strong",{parentName:"li"},"DNS server")," \u8a62\u554f\u5176\u5c0d\u61c9\u7684 ",(0,a.kt)("strong",{parentName:"li"},"IP address")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DNS server")," \u56de\u61c9 ",(0,a.kt)("strong",{parentName:"li"},"webserver.com")," \u5c31\u662f ",(0,a.kt)("strong",{parentName:"li"},"1.2.3.4"),"\uff0c\u56e0\u6b64\u5916\u7db2\u6a5f\u5668\u63a5\u4e0b\u4f86\u6703\u767c\u9001\u5c01\u5305\u5230 ",(0,a.kt)("strong",{parentName:"li"},"1.2.3.4")),(0,a.kt)("li",{parentName:"ol"},"\u5c01\u5305\u5230\u9054 ",(0,a.kt)("strong",{parentName:"li"},"1.2.3.4")," \u5f8c\uff0c\u6839\u64da DNAT \u7684\u898f\u5247\u8f49\u9001\u5230\u5e95\u4e0b\u771f\u6b63\u7684 ",(0,a.kt)("strong",{parentName:"li"},"web server"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5e95\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"li"},"web server")," \u56de\u9001\u5c01\u5305\uff0c\u900f\u904e ",(0,a.kt)("strong",{parentName:"li"},"1.2.3.4")," \u9001\u56de\u5230\u5916\u7db2\u6a5f\u5668(9.8.7.6)")),(0,a.kt)("p",null,"\u5176\u6d41\u7a0b\u53ef\u4ee5\u7528\u4e0b\u5217\u5169\u5f35\u5716\u4f86\u8aaa\u660e\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/YVIB4Uz.jpg",alt:null}),"\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/Di1smh6.jpg",alt:null})),(0,a.kt)("h3",{id:"nat-loopback"},"NAT Loopback"),(0,a.kt)("p",null,"\u5047\u8a2d\u6211\u5011\u90fd\u5df2\u7d93\u77ad\u89e3\u4e0a\u8ff0\u7684\u6982\u5ff5\u5f8c\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u5c07\u8a72\u5916\u7db2\u96fb\u8166()\u7684\u89d2\u8272\u7d66\u653e\u5230\u540c\u6a23\u5340\u7db2\u5167(192.168.1.6)\u4f86\u770b\uff0c\u57fa\u672c\u4e0a ",(0,a.kt)("inlineCode",{parentName:"p"},"NAT  Loopback")," \u4ee3\u8868\u7684\u6db5\u610f\u5c31\u662f\u8b93\u5167\u7db2\u7684\u6a5f\u5668\u80fd\u5920\u9075\u5faa\u539f\u672c\u7684\u6d41\u7a0b\u53bb\u5b58\u53d6\u5167\u7db2\u7684\u6a5f\u5668\u3002"),(0,a.kt)("p",null,"\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u82e5\u5167\u7db2\u7684\u6a5f\u5668\u60f3\u8981\u4f9d\u5faa\u4e0a\u8ff0\u7684\u6d41\u7a0b\u904b\u884c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u9996\u5148\u5167\u7db2\u6a5f\u5668 (192.168.1.6) \u900f\u904e DNS \u7684\u670d\u52d9\uff0c\u5f97\u5230 ",(0,a.kt)("strong",{parentName:"li"},"webserver.com")," \u6307\u5411 ",(0,a.kt)("strong",{parentName:"li"},"1.2.3.4")),(0,a.kt)("li",{parentName:"ol"},"\u63a5\u4e0b\u4f86\u5c07\u5c01\u5305\u9001\u5f80\u5230 ",(0,a.kt)("strong",{parentName:"li"},"1.2.3.4"),"\uff0c\u9047\u5230 ",(0,a.kt)("strong",{parentName:"li"},"DNAT")," \u5f8c\u5c07\u5c01\u5305\u8f49\u63db\n\u6240\u4ee5\u5047\u8a2d\u4eca\u5929\u5167\u90e8\u6a5f\u5668(192.168.1.6)\u767c\u9001\u4e86\u4e00\u500b\u5c01\u5305\uff0c\u5176\u6d41\u5411\u662f\n",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.6:1234 ---\x3e 1.2.3.4:8001"),"\n\u7576 ",(0,a.kt)("strong",{parentName:"li"},"Router")," \u6536\u5230\u6b64\u5c01\u5305\u5f8c\uff0c\u5c31\u6703\u5c07\u5176\u8f49\u63db\u6210\n",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.6:1234 ---\x3e 192.168.1.5:80")),(0,a.kt)("li",{parentName:"ol"},"\u7576 ",(0,a.kt)("strong",{parentName:"li"},"web server")," \u6536\u5230\u5c01\u5305\u5f8c\u5c31\u6703\u56de\u61c9\u4e00\u500b\u5c01\u5305\uff0c\u8a72\u5c01\u5305\u900f\u904e ",(0,a.kt)("strong",{parentName:"li"},"Router")," \u5c31\u6703\u4f9d\u5faa\u4e0a\u8ff0\u7684\u6a21\u5f0f\u56de\u5230\u5167\u7db2\u7684\u6a5f\u5668(192.168.1.6)\u3002")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u6d41\u7a0b\u770b\u8d77\u4f86\u662f\u9806\u5229\u4e5f\u6c92\u6709\u554f\u984c\u7684\uff0c\u4f46\u662f\u6709\u6642\u5019\u5be6\u9ad4\u7db2\u8def\u74b0\u5883\u4e2d\uff0c\u53ef\u80fd\u9019\u4e9b\u6a5f\u5668(PC,Server)\u662f\u63a5\u5728\u540c\u4e00\u53f0 switch \u5e95\u4e0b\uff0c\u8b6c\u5982\u4e0b\u5217\u9019\u7a2e\u60c5\u6cc1\uff0c\n\u6216\u662f ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u5167\u542b Hardware L2 switch\u3002\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/u42Xgob.jpg",alt:null})),(0,a.kt)("p",null,"\u5728\u9019\u7a2e\u74b0\u5883\u4e0b\uff0c\u4e0a\u8ff0\u7684\u6d41\u7a0b\u6703\u8b8a\u6210\u4e0b\u5217\u60c5\u6cc1\uff0c\u4e26\u4e14\u7522\u751f\u4e00\u500b\u554f\u984c"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DNS \u7684\u90e8\u5206\u6c92\u6709\u554f\u984c\uff0c\u53ef\u4ee5\u6b63\u5e38\u904b\u4f5c"),(0,a.kt)("li",{parentName:"ol"},"\u5167\u7db2\u7684\u6a5f\u5668\u5c01\u5305\u53ef\u4ee5\u9806\u5229\u5230\u9054 ",(0,a.kt)("strong",{parentName:"li"},"web server")),(0,a.kt)("li",{parentName:"ol"},"\u7576 ",(0,a.kt)("strong",{parentName:"li"},"web server")," \u6536\u5230\u8acb\u6c42\u4e26\u4e14\u5c07\u5c01\u5305\u9001\u56de\u53bb\u6642\n\u9019\u6642\u5019\u7684\u5c01\u5305\u6a19\u982d\u6a94\u53ef\u80fd\u662f\n",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.5:80 ---\x3e 192.168.1.6:1234"),"\n4.\u7576\u5c01\u5305\u5230\u9054",(0,a.kt)("strong",{parentName:"li"},"switch"),"\u6642\uff0c\u5c31\u6703\u767c\u73fe\u9019\u662f\u500b\u540c\u7db2\u6bb5\u7684\u5c01\u5305\uff0c\u6240\u4ee5\u5c31\u76f4\u63a5\u5e6b\u4ed6\u56de\u50b3\u7d66\u5167\u7db2\u6a5f\u5668 ",(0,a.kt)("strong",{parentName:"li"},"192.168.1.6"),"\u4e86\n5.\u7576\u5167\u7db2\u6a5f\u5668\u6536\u5230\u9019\u500b\u5c01\u5305\u6642\uff0c\u5c31\u6703\u611f\u53d7\u5230\u4e00\u81c9\u56f0\u60d1\u3002\n\u4e00\u958b\u59cb\u9001\u51fa\u53bb\u7684\u5c01\u5305\u662f\n",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.6:1234---\x3e 1.2.3.4:8001"),"\n\u6240\u4ee5\u671f\u671b\u6536\u56de\u5230\u7684\u5c01\u5305\u61c9\u8a72\u662f\n",(0,a.kt)("inlineCode",{parentName:"li"},"1.2.3.4:8001 ---\x3e 192.168.1.6:1234"),"\n\u6240\u4ee5\u7576\u4ed6\u770b\u5230\u4e0d\u7b26\u5408\u671f\u671b\u7684\u5c01\u5305\u6a19\u982d\u6642\uff0c\u5c31\u6703\u5c07\u5176\u4e1f\u68c4\n",(0,a.kt)("inlineCode",{parentName:"li"},"192.168.1.5:80 ---\x3e 192.168.1.6:1234"))),(0,a.kt)("p",null,"\u6574\u500b\u6d41\u7a0b\u5982\u4e0b\u5716\u6240\u793a\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/vKFAZp9.jpg",alt:null})),(0,a.kt)("p",null,"\u9019\u908a\u6700\u5927\u7684\u554f\u984c\u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},"web server")," \u9001\u56de\u53bb\u7684\u5c01\u5305\u5fc5\u9808\u8981\u5148\u7d66 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u5c07\u5176\u6839\u64da ",(0,a.kt)("strong",{parentName:"p"},"DNAT")," \u7684\u898f\u5247\u7d66\u91cd\u65b0\u53cd\u8f49\u4e00\u6b21\u3002\n\u4f46\u662f\u5728\u6b64\u74b0\u5883\u4e0b\uff0c\u56e0\u70ba\u4e2d\u9593\u6709\u4e00\u53f0 ",(0,a.kt)("strong",{parentName:"p"},"switch")," \u5b58\u5728\uff0c\u6240\u4ee5\u5c01\u5305\u5c31\u6c92\u6709\u9001\u56de\u5230 ",(0,a.kt)("strong",{parentName:"p"},"router")," \u90a3\u908a\u53bb\u8655\u7406\u800c\u662f\u76f4\u63a5\u9001\u56de\u53bb\u7d66\u5167\u7db2\u6a5f\u5668\u4e86\u3002"),(0,a.kt)("p",null,"\u82e5\u8981\u80fd\u5920\u8655\u7406\u4e0a\u8ff0\u7684\u60c5\u6cc1\uff0c\u6211\u5011\u5c31\u5fc5\u9808\u8981\u60f3\u8fa6\u6cd5\u5c07\u5c01\u5305\u4e5f\u9001\u56de\u5230 ",(0,a.kt)("strong",{parentName:"p"},"router")," \u7aef\u53bb\u8655\u7406\uff0c\u70ba\u4e86\u9054\u5230\u9019\u500b\u76ee\u7684\u6211\u5011\u53ef\u4ee5\u5728 ",(0,a.kt)("strong",{parentName:"p"},"router")," \u4e5f\u63a1\u7528 SNAT (Source NAT)\n\u898f\u5247\u5927\u6982\u5982\u4e0b\uff0c\u53ea\u8981\u662f\u5f9e\u67d0\u500b ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u8fd1\u4f86\u7684\uff0c\u5c31\u5c07\u6b64\u5c01\u5305\u6a19\u982d\u5167\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Source IP Address")," \u8b8a\u6210 ",(0,a.kt)("strong",{parentName:"p"},"192.168.1.1"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"in_interface = xxxx, source ip = 192.168.1.1:xxxx\n")),(0,a.kt)("p",null,"\u81f3\u65bc\u5be6\u969b\u4e0a\u8981\u63a1\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Masquerade")," \u6216\u662f ",(0,a.kt)("strong",{parentName:"p"},"SNAT")," \u4f86\u6c7a\u5b9a\u600e\u9ebc\u8f49\u63db ",(0,a.kt)("strong",{parentName:"p"},"Source IP")," \u90fd\u53ef\u4ee5\u3002"),(0,a.kt)("p",null,"\u56e0\u6b64\uff0c\u76ee\u524d\u7684\u8a2d\u5b9a\u4e2d\uff0c",(0,a.kt)("strong",{parentName:"p"},"Router"),"\u540c\u6642\u6703\u9032\u884c ",(0,a.kt)("strong",{parentName:"p"},"SNAT")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"DNAT"),"\uff0c\u56e0\u6b64\u5047\u8a2d\u5167\u7db2\u6a5f\u5668(",(0,a.kt)("strong",{parentName:"p"},"192.168.1.6"),")\u8981\u5c0d ",(0,a.kt)("strong",{parentName:"p"},"1.2.3.4:80"),"\u9032\u884c\u5b58\u53d6\u3002\n\u63a5\u4e0b\u4f86\u4ee5\u4e0b\u5716\u4f86\u89e3\u91cb\u6bcf\u500b\u6b65\u9a5f\u4e2d\u5c01\u5305\u7684\u8b8a\u5316\u3002\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/1BOxrGE.jpg",alt:null}),"\n\u85cd\u8272\u5340\u57df\n1,2: ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.6:1234 -> 1.2.3.4:8001"),"\n\u63a5\u4e0b\u4f86\u5c01\u5305\u6703\u9032\u5165 ",(0,a.kt)("strong",{parentName:"p"},"router"),"\uff0c\u57f7\u884c ",(0,a.kt)("strong",{parentName:"p"},"SNAT/DNAT"),"\n3,4: ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.1:5678 -> 192.168.1.5:80")),(0,a.kt)("p",null,"\u7576\u5c01\u5305\u5230\u9054 ",(0,a.kt)("strong",{parentName:"p"},"web server"),"\u5f8c\uff0c\u63a5\u4e0b\u4f86 ",(0,a.kt)("strong",{parentName:"p"},"web server")," \u6703\u56de\u50b3\u4e00\u500b\u5c01\u5305\u56de\u53bb\n1,2: ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.5:80 --\x3e 192.168.1.1:5678"),"\n\u7576\u5c01\u5305\u5230\u9054 switch \u6642\uff0c\u67e5\u4e86\u4e00\u4e0b\u76ee\u7684\u5730\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"192.168.1.1"),",\u56e0\u6b64\u5c31\u6703\u5e7e\u8a72\u5c01\u5305\u9001\u56de\u5230 ",(0,a.kt)("strong",{parentName:"p"},"router")," \u53bb\u8655\u7406\u3002\n\u7576\u5c01\u5305\u5230\u9054 ",(0,a.kt)("strong",{parentName:"p"},"router")," \u6642\uff0c\u6703\u6839\u64da\u4e4b\u524d\u7684\u8a18\u9304\u77ad\u89e3\u8a72\u5c01\u5305\u6709\u4f7f\u7528\u904e ",(0,a.kt)("strong",{parentName:"p"},"SNAT")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"DNAT"),"\uff0c\u56e0\u6b64\u6703\u5c07\u5c01\u5305\u6a19\u982d\u7d66\u91cd\u65b0\u4fee\u6539\n3,4: ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2.3.4:8001 --\x3e 192.168.1.6:1234")),(0,a.kt)("p",null,"\u7576\u5167\u7db2\u6a5f\u5668(",(0,a.kt)("strong",{parentName:"p"},"192.168.1.6"),")\u6536\u5230\u6b64\u5c01\u5305\u5f8c\u56e0\u70ba\u8207\u9810\u671f\u7684\u76f8\u540c\uff0c\u6240\u4ee5\u5c31\u53ef\u4ee5\u6b63\u78ba\u5730\u5efa\u7acb\u8d77\u9023\u7dda\u4e26\u4e14\u958b\u59cb\u50b3\u8f38\u3002"),(0,a.kt)("p",null,"\u5230\u9019\u908a\u6211\u5011\u5df2\u7d93\u5b8c\u6210\u4e86\u6700\u57fa\u672c\u7684 ",(0,a.kt)("strong",{parentName:"p"},"NAT Loopback"),"\uff0c\u57fa\u672c\u4e0a\u5927\u90e8\u5206\u7684\u60c5\u6cc1\u90fd\u53ef\u4ee5\u4f9d\u7167\u9019\u7a2e\u601d\u8def\u4f86\u5b8c\u6210\u3002\n\u7576\u7136\u82e5\u662f\u4f60\u7db2\u8def\u4e2d\u9593\u6709\u9047\u5230\u4e00\u4e9b Hardware \u6703\u5e6b\u4f60\u5077\u5077\u505a\u4e8b\u60c5\u7684\uff0c\u90a3\u4f60\u7684\u5c01\u5305\u53ef\u80fd\u5c31\u6703\u88ab\u5f71\u97ff\u5c0e\u81f4\u6574\u500b\u50b3\u8f38\u90fd\u51fa\u554f\u984c\uff0c\u9019\u908a\u8981\u7279\u5225\u5c0f\u5fc3\u3002"),(0,a.kt)("h3",{id:"linux-kernel-trobule-shooting"},"Linux Kernel trobule shooting"),(0,a.kt)("p",null,"\u524d\u9762\u8b1b\u4e86\u9019\u9ebc\u591a\u8a71\u4e4b\u5f8c\uff0c\u6211\u5011\u4f86\u770b\u770b\u5be6\u969b\u64cd\u4f5c\u4e0a\u53ef\u80fd\u6703\u9047\u5230\u7684\u554f\u984c\u3002\n\u4ee5\u4e0b\u5217\u9019\u5f35\u5716\u70ba\u7bc4\u4f8b ",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/u42Xgob.jpg",alt:null})),(0,a.kt)("p",null,"\u70ba\u4e86\u7c21\u5316\u554f\u984c\uff0c\u6211\u5011\u5047\u8a2d ",(0,a.kt)("strong",{parentName:"p"},"router")," \u542b\u6709\u516b\u500b\u5be6\u9ad4\u9023\u63a5\u57e0\uff0c\u5176\u4e2d\u7b2c\u4e00\u500b\u9023\u63a5\u57e0\u8ddf\u5e95\u4e0b\u7684",(0,a.kt)("strong",{parentName:"p"},"switch"),"\u6709\u9023\u7d50\u3002"),(0,a.kt)("p",null,"\u5047\u8a2d\u9019\u4e00\u53f0 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u6211\u5011\u7cfb\u7d71\u4e2d\u6709\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"Linux bridge")," \u5275\u5efa\u4e86\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"bridge br0"),"\uff0c\u7136\u5f8c\u6211\u5011\u5e6b\u516b\u500b\u9023\u63a5\u57e0\u90fd\u63a5\u5230\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"br0"),"\u5e95\u4e0b\uff0c\u5176\u4e2d\u7b2c\u4e00\u500b\u9023\u63a5\u57e0\u5c0d\u61c9\u5230\u7cfb\u7d71\u4e0a\u7684 interface \u662f ",(0,a.kt)("strong",{parentName:"p"},"eth0"),"\n\u6240\u4ee5\u9019\u6642\u5019\u5927\u6982\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u9762\u7684\u67b6\u69cb"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"br0:\n    eth0\n    eth1\n    ...\n    eth8\n")),(0,a.kt)("p",null,"\u5728\u9019\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u525b\u525b\u4e0a\u8ff0 ",(0,a.kt)("strong",{parentName:"p"},"NAT Loopback")," \u7684\u5c01\u5305\u6703\u9047\u5230\u4e00\u554f\u984c\u3002\n\u7576\u5167\u7db2\u6a5f\u5668\u7684\u5c01\u5305\u9001\u5230  ",(0,a.kt)("strong",{parentName:"p"},"router"),"\u6642\uff0c\u6703\u5148\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"eth0"),"\u9032\u5165\u5230\u7cfb\u7d71\u5f8c\u5230\u9054 ",(0,a.kt)("strong",{parentName:"p"},"br0"),"\uff0c\u63a5\u4e0b\u4f86\u9032\u884c ",(0,a.kt)("strong",{parentName:"p"},"SNAT")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"DNAT")," \u7684\u8655\u7406\u3002\n\u7136\u5f8c\u6700\u5f8c\u5c01\u5305\u53c8\u8981\u5f9e ",(0,a.kt)("strong",{parentName:"p"},"br0")," \u5f80 ",(0,a.kt)("strong",{parentName:"p"},"eth0")," \u51fa\u53bb\uff0c\u4e00\u5207\u7684\u6599\u60f3\u90fd\u662f\u5982\u6b64\u7f8e\u597d\u3002\n\u7136\u800c\u5be6\u969b\u4e0a\u5c31\u6703\u767c\u73fe\u5c01\u5305\u4e0d\u898b\u4e86!!\n\u6839\u64da ",(0,a.kt)("strong",{parentName:"p"},"Linux kernel 3.6 source code"),"\uff0c\u7576\u7cfb\u7d71\u5e95\u4e0b\u7684 ",(0,a.kt)("strong",{parentName:"p"},"bridge")," \u518d\u8f49\u767c\u5c01\u5305\u7684\u6642\u5019\uff0c\u6703\u547c\u53eb\u5230 ",(0,a.kt)("strong",{parentName:"p"},"br_forward")," \u53bb\u8655\u7406\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"/* called with rcu_read_lock */\nvoid br_forward(const struct net_bridge_port *to, struct sk_buff *skb, struct sk_buff *skb0)\n{\n    if (should_deliver(to, skb)) {\n        if (skb0)\n            deliver_clone(to, skb, __br_forward);\n        else\n            __br_forward(to, skb);\n        return;\n    }\n\n    if (!skb0)\n        kfree_skb(skb);\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-c"},"/* Don't forward packets to originating port or forwarding diasabled */\nstatic inline int should_deliver(const struct net_bridge_port *p,\n                 const struct sk_buff *skb)\n{\n    return (((p->flags & BR_HAIRPIN_MODE) || skb->dev != p->dev) &&\n        p->state == BR_STATE_FORWARDING);\n}\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7a0b\u5f0f\u78bc\u6709\u4e00\u500b\u6700\u91cd\u8981\u7684\u5730\u65b9\n",(0,a.kt)("strong",{parentName:"p"},"skb->dev != p->dev"),"\uff0c\u5982\u679c\u7576\u524d\u5c01\u5305\u9032\u5165\u7684 ",(0,a.kt)("strong",{parentName:"p"},"bridge port")," \u8ddf\u51fa\u53bb\u7684 ",(0,a.kt)("strong",{parentName:"p"},"bridge port")," \u662f\u4e00\u6a23\u7684\u8a71\uff0c\u90a3\u5c31\u4e0d\u6703\u8f49\u767c\uff0c\u5c0e\u81f4\u9019\u500b\u5c01\u5305\u88ab\u4e1f\u68c4\u4e86..."),(0,a.kt)("p",null,"\u53ef\u662f\u5728\u7576\u524d\u7684\u7db2\u8def\u62d3\u58a3\u4e2d\u4f60\u5c31\u662f\u8981\u9019\u500b\u5c01\u5305\u53bb\u8f49\u767c\uff0c\u6240\u4ee5\u53ef\u4ee5\u89c0\u5bdf\u5230\u4e0a\u8ff0\u7a0b\u5f0f\u78bc\u9084\u6709\u4e00\u500b\u95dc\u9375\u9ede\n",(0,a.kt)("strong",{parentName:"p"},"(p->flags & BR_HAIRPIN_MODE)"),"\uff0c\n\u6839\u64da\u9019\u7bc7 ",(0,a.kt)("a",{parentName:"p",href:"https://lwn.net/Articles/347344/"},"patch"),", \u53ea\u8981\u91dd\u5c0d interface \u53bb\u555f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"hairpin_mode")," \u5c31\u53ef\u4ee5\u8b93\u5c01\u5305\u9806\u5229\u5f9e\u540c\u500b\u9ede\u9032\u51fa\u4f86\u56de\u4e86\u3002\n\u4f46\u662f\u4e8b\u60c5\u4f9d\u7136\u6c92\u6709\u9019\u6a23\u7c21\u55ae\uff0c\u9019\u6a23\u5b8c\u7562\u5f8c\u5c01\u5305\u7684 ",(0,a.kt)("strong",{parentName:"p"},"IP")," \u7684\u78ba\u90fd\u6709\u6b63\u78ba\u7684\u4fee\u6539\u4e86\uff0c\u4f46\u662f\u5728 ",(0,a.kt)("strong",{parentName:"p"},"MAC Address")," \u7684\u90e8\u5206\u6709\u9ede\u554f\u984c\uff0c",(0,a.kt)("strong",{parentName:"p"},"Source MAC"),"\u6c92\u6709\u5982\u9810\u671f\u7684\u88ab\u4fee\u6539\uff0c\u6240\u4ee5\u9019\u908a\u53c8\u8981\u4f9d\u8cf4\u53e6\u5916\u4e00\u500b\u5de5\u5177 ",(0,a.kt)("strong",{parentName:"p"},"ebtables")," \u4f86\u9032\u884c MAC \u7684\u4fee\u6539\uff0c\u518d\u8005\u7a2e\u60c5\u6cc1\u4e0b\uff0c\u5c01\u5305\u5c31\u53ef\u4ee5\u9806\u5229\u901a\u904e\u4e86\u3002\n\u56e0\u6b64\u6211\u5011\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Router")," \u5c31\u6709\u4e09\u7a2e\u8a2d\u5b9a\n1.\u6253\u958b ",(0,a.kt)("strong",{parentName:"p"},"hairpin mode"),"\n2.\u57f7\u884c ",(0,a.kt)("strong",{parentName:"p"},"iptables")," \u7684 SNAT/DNAT(\u6539 IP)\n3.\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ebtables")," \u7684 SNAT (\u6539 MAC)"),(0,a.kt)("p",null,"\u5f8c\u4f86\u767c\u73fe\u7db2\u8def\u4e0a\u4e5f\u6709\u5176\u4ed6\u4eba\u9047\u5230\u4e00\u6a23\u7684\u554f\u984c\uff0c\u8a72\u4f7f\u7528\u8005\u56e0\u70ba\u6c92\u6709\u8fa6\u6cd5\u91dd\u5c0d ",(0,a.kt)("strong",{parentName:"p"},"user-space")," \u53bb\u9032\u884c\u4fee\u6539\uff0c\u6240\u4ee5\u53ea\u80fd\u5f9e ",(0,a.kt)("strong",{parentName:"p"},"kernel")," \u5167\u9032\u884c\u4e00\u4e9b\u5c0f\u90e8\u5206\u7684\u4fee\u6539\uff0c\u5e0c\u671b\u53ef\u4ee5\u8655\u7406\u9019\u500b\u554f\u984c\n\u9019\u908a\u53ef\u4ee5\u53c3\u8003\u9019\u500b ",(0,a.kt)("a",{parentName:"p",href:"http://marc.info/?l=linux-netdev&m=136627779125382&w=2"},"patch"),"\n\u5728\u9019\u500b patch \u4e2d\uff0c\u8a72\u7a0b\u5f0f\u78bc\u6703\u5148\u91dd\u5c0d\u6709\u9032\u884c ",(0,a.kt)("strong",{parentName:"p"},"DNAT")," \u7684\u5c01\u5305\u9032\u884c\u6a19\u8a18\uff0c\u7136\u5f8c\u5728 ",(0,a.kt)("strong",{parentName:"p"},"bridge forward")," \u7684\u904e\u7a0b\u4e2d\uff0c\u5c07\u8a72\u5c01\u5305\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Source MAC")," \u9032\u884c\u4fee\u6539\uff0c\u6700\u5f8c\u518d\u8b93\u8a72\u5c01\u5305\u901a\u904e\u5f80\u4e0b\u8f49\u767c\u3002"),(0,a.kt)("h3",{id:"summary"},"Summary"),(0,a.kt)("p",null,"\u5176\u5be6\u4e0a\u8ff0\u7684\u554f\u984c\u4e00\u4e9b\u5bb6\u7528 ",(0,a.kt)("strong",{parentName:"p"},"router")," \u4e0d\u6703\u9047\u5230\u7684\u4e00\u500b\u539f\u56e0\u662f ",(0,a.kt)("strong",{parentName:"p"},"kernel")," \u592a\u820a\u4e86\uff0c\u5c31\u5982\u540c\u8a72  ",(0,a.kt)("a",{parentName:"p",href:"http://marc.info/?l=linux-netdev&m=136627779125382&w=2"},"patch")," \u6240\u8aaa, \u65bc ",(0,a.kt)("strong",{parentName:"p"},"2.6.35")," \u5f8c\u7684\u7cfb\u7d71\u5c31\u6703\u6709\u9019\u6a23\u7684\u554f\u984c\u5b58\u5728\uff0c\u6709\u4e9b\u5bb6\u7528 ",(0,a.kt)("strong",{parentName:"p"},"router")," \u7684 kernel \u9084\u5728 2.6.x \u7136\u5f8c\u6c92\u6709\u8ffd\u4e0a\u65b0\u7684\uff0c\u56e0\u6b64\u525b\u597d\u9003\u904e\u6b64\u554f\u984c\u3002"))}N.isMDXComponent=!0}}]);