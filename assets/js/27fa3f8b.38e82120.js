"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[14540],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),l=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},m=function(t){var e=l(t.components);return r.createElement(i.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,i=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),k=l(n),g=a,u=k["".concat(i,".").concat(g)]||k[g]||c[g]||p;return n?r.createElement(u,s(s({ref:e},m),{},{components:n})):r.createElement(u,s({ref:e},m))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,s=new Array(p);s[0]=g;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[k]="string"==typeof t?t:a,s[1]=o;for(var l=2;l<p;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},51497:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>p,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const p={title:"\u624b\u628a\u624b\u6253\u9020\u4eff mininet \u7db2\u8def",tags:["Mininet","SDN","Network","System","Ubuntu"],date:new Date("2017-06-23T03:03:19.000Z")},s=void 0,o={unversionedId:"techPost/2017/setup-mininet-like-environment",id:"techPost/2017/setup-mininet-like-environment",title:"\u624b\u628a\u624b\u6253\u9020\u4eff mininet \u7db2\u8def",description:"\u76f8\u4fe1\u4e0d\u5c11\u958b\u59cb\u5b78\u7fd2 SDN \u7684\u4eba\u4e00\u5b9a\u90fd\u6709\u807d\u904e mininet \u9019\u5957\u8edf\u9ad4\uff0c\u751a\u81f3\u5927\u91cf\u4f7f\u7528\u904e\u3002",source:"@site/docs/techPost/2017/setup-mininet-like-environment.md",sourceDirName:"techPost/2017",slug:"/techPost/2017/setup-mininet-like-environment",permalink:"/docs/techPost/2017/setup-mininet-like-environment",draft:!1,tags:[{label:"Mininet",permalink:"/docs/tags/mininet"},{label:"SDN",permalink:"/docs/tags/sdn"},{label:"Network",permalink:"/docs/tags/network"},{label:"System",permalink:"/docs/tags/system"},{label:"Ubuntu",permalink:"/docs/tags/ubuntu"}],version:"current",frontMatter:{title:"\u624b\u628a\u624b\u6253\u9020\u4eff mininet \u7db2\u8def",tags:["Mininet","SDN","Network","System","Ubuntu"],date:"2017-06-23T03:03:19.000Z"},sidebar:"techPost",previous:{title:"RDMA Introduction (\u4e00)",permalink:"/docs/techPost/2017/rdma-introduction-i"},next:{title:"2016",permalink:"/docs/category/2016"}},i={},l=[{value:"Step1",id:"step1",level:2},{value:"Step2",id:"step2",level:2},{value:"Step3",id:"step3",level:2},{value:"Step4",id:"step4",level:2},{value:"Step5",id:"step5",level:2}],m={toc:l},k="wrapper";function c(t){let{components:e,...n}=t;return(0,a.kt)(k,(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u76f8\u4fe1\u4e0d\u5c11\u958b\u59cb\u5b78\u7fd2 SDN \u7684\u4eba\u4e00\u5b9a\u90fd\u6709\u807d\u904e ",(0,a.kt)("a",{parentName:"p",href:"http://mininet.org/"},"mininet")," \u9019\u5957\u8edf\u9ad4\uff0c\u751a\u81f3\u5927\u91cf\u4f7f\u7528\u904e\u3002\n\u4e4b\u524d\u65bc ",(0,a.kt)("a",{parentName:"p",href:"https://www.hwchiu.com/2014-08-19-mininet-parsing.html"},"Mininet \u904b\u4f5c\u539f\u7406")," \u6709\u5206\u6790\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"mininet")," \u7684\u539f\u59cb\u78bc\uff0c\u4e26\u77ad\u89e3\u5176\u904b\u4f5c\u539f\u7406\u3002\n\u800c\u4eca\u5929\u9019\u7bc7\u6587\u7ae0\u8981\u8b1b\u8ff0\u7684\u662f\u5982\u4f55\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ip")," \u6307\u4ee4\u914d\u4e0a ",(0,a.kt)("strong",{parentName:"p"},"OpenvSwitch")," \u5728\u81ea\u5df1\u7684\u7cfb\u7d71\u4e0a\u5efa\u9020\u51fa\u4e00\u500b\u985e\u4f3c ",(0,a.kt)("strong",{parentName:"p"},"mininet")," \u7684\u74b0\u5883\u3002"),(0,a.kt)("h1",{id:"environment"},"Environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ubuntu 14.04 LTS"),(0,a.kt)("li",{parentName:"ul"},"OpenvSwitch (\u5176\u5be6\u54ea\u500b\u7248\u672c\u90fd\u7121\u6240\u8b02)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5148\u81ea\u884c\u5b89\u88dd\u597d ovs\uff0c\u4e26\u4e14\u5c07\u76f8\u95dc\u7684 kernel module, daemons \u90fd\u6e96\u5099\u597d\u3002")))),(0,a.kt)("h1",{id:"goal"},"Goal"),(0,a.kt)("p",null,"\u6211\u5011\u7684\u76ee\u6a19\u662f\u5e0c\u671b\u5728\u7cfb\u7d71\u4e0a\u6a21\u64ec\u4e00\u500b\u6700\u7c21\u55ae\u7684\u7db2\u8def\u74b0\u5883\uff0c\u5305\u542b\u4e86\u5169\u500b\u7d42\u7aef\u7684 ",(0,a.kt)("strong",{parentName:"p"},"device")," \u7684\u6a5f\u5668\u4ee5\u53ca\u4e00\u53f0\u9023\u63a5\u5169\u53f0\u6a5f\u5668\u7684 ",(0,a.kt)("strong",{parentName:"p"},"switch"),"\u3002\n\u7531\u65bc\u6211\u5011\u53ea\u6709\u4e00\u53f0\u5be6\u9ad4\u7684\u6a5f\u5668 (Ubuntu)\uff0c\u70ba\u4e86\u9054\u6210\u6211\u5011\u4e0a\u8ff0\u7684\u76ee\u6a19\uff0c\u6211\u5011\u6703\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"OpenvSwitch")," \u5b89\u88dd\u5728 Ubuntu \u4e0a\u9762\u4f5c\u70ba\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"software switch"),"\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u8981\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"network namespace isolation")," \u7684\u6280\u8853\u5728 Ubuntu \u4e0a\u9762\u5275\u9020\u5169\u500b\u7368\u7acb\u7684\u7db2\u8def\u74b0\u5883\uff0c\u5206\u5225\u4ee3\u8868\u5169\u500b\u7d42\u7aef\u7684 ",(0,a.kt)("strong",{parentName:"p"},"device")),(0,a.kt)("p",null,"\u4ee5\u5716\u7247\u62bd\u8c61\u4f86\u770b\uff0c\u6211\u5011\u7684\u76ee\u6a19\u5927\u6982\u5c31\u5982\u4e0b\u5716"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/02gIXfD.jpg",alt:null})),(0,a.kt)("p",null,"\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"network namepsace")," \u5275\u9020\u51fa\u5169\u500b\u7368\u7acb\u7684\u7db2\u8def\u74b0\u5883\uff0c\u5206\u5225\u662f ",(0,a.kt)("strong",{parentName:"p"},"ns1")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"ns2"),"\u3002\n\u63a5\u4e0b\u4f86\u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"OpenvSwitch")," \u5275\u9020\u4e00\u500b ",(0,a.kt)("strong",{parentName:"p"},"ovs-eth0")," \u7684 switch\n\u6700\u5f8c\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ip link")," \u7684\u65b9\u5f0f\u5275\u9020\u5169\u689d\u865b\u64ec\u7684 ",(0,a.kt)("strong",{parentName:"p"},"link")," \u5c07 ",(0,a.kt)("strong",{parentName:"p"},"ovs-eth0")," \u8207 ",(0,a.kt)("strong",{parentName:"p"},"ns1/ns2")," \u7d66\u4e32\u8d77\u4f86\uff0c\u5c31\u53ef\u4ee5\u5f62\u6210\u4e00\u500b\u7c21\u55ae\u7684\u7db2\u8def\u62d3\u6a38\u3002"),(0,a.kt)("h1",{id:"experiment"},"Experiment"),(0,a.kt)("h2",{id:"step1"},"Step1"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6211\u5011\u8981\u5728\u7cfb\u7d71\u4e0a\u5275\u5efa ",(0,a.kt)("strong",{parentName:"p"},"ove-eth0\uff0c\u95dc\u65bc "),"openvswitch",(0,a.kt)("strong",{parentName:"p"}," \u7684\u5b89\u88dd\u8207\u555f\u52d5\uff0c\u672c\u6587\u5c31\u4e0d\u518d\u591a\u6558\u8ff0\uff0c\u7db2\u8def\u4e0a\u6709\u6eff\u591a\u7684\u6587\u4ef6\u90fd\u5728\u8b1b\u8ff0\u5176\u6307\u4ee4\u8207\u6559\u5b78\u3002\n\u56e0\u6b64\u9019\u908a\u5c31\u76f4\u63a5\u4f7f\u7528 "),"ovs-vsctl** \u8a72\u6307\u4ee4\u76f4\u63a5\u4f86\u5275\u9020\u6211\u5011\u6240\u9700\u8981\u7684 switch\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ovs-vsctl add-br ovs-eth0\nifconfig ovs-eth0 up\n")),(0,a.kt)("p",null,"\u9019\u6642\u5019\u7cfb\u7d71\u4e0a\u7684\u67b6\u69cb\u5c31\u5982\u4e0b\u5716\u822c\uff0c\u4ec0\u9ebc\u90fd\u6c92\u6709\uff0c\u53ea\u6709\u4e00\u500b switch\u3002\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/A7BMUXD.jpg",alt:null})),(0,a.kt)("h2",{id:"step2"},"Step2"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u5df2\u7d93\u5f04\u597d\u4e86 switch \u5f8c\uff0c \u6211\u5011\u63a5\u4e0b\u4f86\u8981\u5275\u7acb\u5169\u500b\u7368\u7acb\u7684\u7db2\u8def\u7a7a\u9593 ",(0,a.kt)("strong",{parentName:"p"},"network namespace"),"\uff0c\u9019\u908a\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"ip netns")," \u6307\u4ee4\u4f86\u5e6b\u6211\u5011\u9054\u6210\u3002\n\u5148\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"ip netns help")," \u4f86\u770b\u770b\u6709\u90a3\u4e9b\u6307\u4ee4\u53ef\u4ee5\u4f7f\u7528\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},">ip netns help\nUsage: ip netns list\n       ip netns add NAME\n       ip netns delete NAME\n       ip netns identify PID\n       ip netns pids NAME\n       ip netns exec NAME cmd ...\n       ip netns monitor\n")),(0,a.kt)("p",null,"\u5728\u672c\u7bc4\u4f8b\u4e2d\u6211\u5011\u53ea\u6703\u7528\u5230 ",(0,a.kt)("strong",{parentName:"p"},"list"),", ",(0,a.kt)("strong",{parentName:"p"},"add")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"exec")," \u5169\u500b\u6307\u4ee4\uff0c\u5c31\u5982\u540c\u5b57\u9762\u610f\u601d\u7684\u610f\u7fa9\u4e00\u6a23\uff0c\u7528\u4f86\u5275\u9020\u6aa2\u8996,\u5275\u9020 ",(0,a.kt)("strong",{parentName:"p"},"network namespace")," \u4ee5\u53ca\u5728\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"netns")," \u5167\u57f7\u884c\u5c0d\u61c9\u7684\u6307\u4ee4\u3002"),(0,a.kt)("p",null,"\u4f9d\u5e8f\u57f7\u884c\u4e0b\u5217\u6307\u4ee4\uff0c\u5275\u9020\u597d\u9019\u5169\u500b netns \u5f8c\uff0c\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ip netns list")," \u78ba\u8a8d\u7684\u78ba\u6709\u7522\u751f\u5169\u500b netns \u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip netns add ns1\nip netns add ns2\nip netns list\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ip netns exec ns1 bash")," \u9019\u500b\u6307\u4ee4\u5728 ",(0,a.kt)("strong",{parentName:"p"},"network namespace ns1")," \u5167\u57f7\u884c ",(0,a.kt)("strong",{parentName:"p"},"bash")," \u9019\u500b\u6307\u4ee4\uff0c\u9019\u6a23\u6211\u5011\u5c31\u53ef\u4ee5\u66ab\u6642\u5207\u63db\u88e1\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip netns exec ns1 bash\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u76f4\u63a5\u57f7\u884c ",(0,a.kt)("strong",{parentName:"p"},"ifconfig -a")," \u67e5\u770b\u7cfb\u7d71\u4e0a\u9762\u7684\u7db2\u8def\u8cc7\u8a0a\uff0c\u4f60\u6703\u767c\u73fe\u4ec0\u9ebc\u90fd\u4e0d\u898b\u4e86\uff0c\u53ea\u5269\u4e0b\u4e00\u500b\u6700\u7c21\u55ae\u7684 ",(0,a.kt)("strong",{parentName:"p"},"loopback")," \u4ecb\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> ifconfig -a\nlo        Link encap:Local Loopback\n          LOOPBACK  MTU:65536  Metric:1\n          RX packets:0 errors:0 dropped:0 overruns:0 frame:0\n          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0\n          collisions:0 txqueuelen:1000\n          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)\n")),(0,a.kt)("p",null,"\u9019\u5c31\u662f ",(0,a.kt)("strong",{parentName:"p"},"network isolation")," \u7684\u529f\u7528\uff0c\u5c07\u7db2\u8def\u5b8c\u5168\u9694\u7d55\u958b\u4f86\uff0c\u4e0d\u904e\u6211\u5011\u66ab\u6642\u9084\u6c92\u6709\u4efb\u4f55\u9023\u7dda\u53ef\u4ee5\u4f7f\u7528\uff0c\u6240\u4ee5\u5148\u57f7\u884c ",(0,a.kt)("strong",{parentName:"p"},"exit")," \u96e2\u958b\u8a72 ",(0,a.kt)("strong",{parentName:"p"},"network namespace")," \u56de\u5230\u6211\u5011\u7684 ",(0,a.kt)("strong",{parentName:"p"},"Ubuntu"),"\u5427\u3002"),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u6307\u4ee4\u57f7\u884c\u5b8c\u7562\u5f8c\uff0c\u6211\u5011\u7684\u7cfb\u7d71\u5927\u6982\u5982\u4e0b\u5716\uff0c\u6709\u4e00\u9ede\u9ede\u7684\u9577\u9032\u4e86\u3002\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/zzbxLwQ.jpg",alt:null})),(0,a.kt)("h2",{id:"step3"},"Step3"),(0,a.kt)("p",null,"\u6211\u5011\u5df2\u7d93\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"software switch")," \u4ee5\u53ca\u76f8\u95dc\u7684 ",(0,a.kt)("strong",{parentName:"p"},"network namespace")," \u90fd\u6e96\u5099\u597d\u4e86\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u8981\u60f3\u8fa6\u6cd5\u5c07\u9019\u4e9b\u6771\u897f\u4e32\u8d77\u4f86\uff0c\u6253\u901a\u6574\u500b\u9023\u7dda\u3002\n\u9019\u908a\u8981\u4f7f\u7528\u7684\u662f ",(0,a.kt)("strong",{parentName:"p"},"ip link")," \u9019\u500b\u6307\u4ee4\u4f86\u8655\u7406\uff0c\u7531\u65bc\u6211\u5011\u8981\u5728\u7cfb\u7d71\u4e0a\u5275\u5efa\u7684\u662f\u4e00\u689d\u865b\u64ec\u7684\u9023\u7d50\uff0c\u7a31\u4e4b\u70ba ",(0,a.kt)("strong",{parentName:"p"},"veth"),"\uff0c\u9019\u689d\u865b\u64ec\u9023\u7d50\u8981\u9023\u63a5\u5169\u500b ",(0,a.kt)("strong",{parentName:"p"},"interface"),"\uff0c \u800c\u9019\u5169\u500b ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u5247\u6703\u5206\u5225\u7d66 ",(0,a.kt)("strong",{parentName:"p"},"switch")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"ns")," \u7d66\u4f7f\u7528\uff0c\u56e0\u6b64\u6211\u5011\u6307\u4ee4\u7684\u539f\u578b\u5927\u6982\u5982\u4e0b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ip link add name $name type veth peer name $name2")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u6307\u4ee4\u4ee3\u8868\u6703\u5728\u7cfb\u7d71\u4e2d\u5275\u5efa\u5169\u500b ",(0,a.kt)("strong",{parentName:"p"},"interface"),"\uff0c\u540d\u7a31\u5206\u5225\u662f ",(0,a.kt)("strong",{parentName:"p"},"$name")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"$name2"),"\uff0c\u7136\u5f8c\u5176\u4e2d\u9593\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"veth")," \u65b9\u5f0f\u4e32\u63a5\u8d77\u4f86\uff0c\u4ee3\u8868\u6709\u4efb\u4f55\u5c01\u5305\u5f9e\u4efb\u4f55\u4e00\u7aef\u9032\u5165\uff0c\u90fd\u6703\u5f9e\u53e6\u5916\u4e00\u7aef\u51fa\u4f86\u3002"),(0,a.kt)("p",null,"\u57f7\u884c\u5b8c\u4e0b\u5217\u6307\u4ee4\u5f8c\uff0c\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ifconfig")," \u6216\u662f ",(0,a.kt)("strong",{parentName:"p"},"ip link")," \u770b\u5230\u525b\u5275\u9020\u51fa\u4f86\u7684 ",(0,a.kt)("strong",{parentName:"p"},"interface")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip link add name vet-n1 type veth peer name ovs-1\nip link add name vet-n2 type veth peer name ovs-2\nifconfig vet-n1 up\nifconfig vet-n2 up\nifconfig ovs-1 up\nifconfig ovs-2 up\n")),(0,a.kt)("p",null,"\u5230\u9019\u4e00\u6b65\u9a5f\u5f8c\uff0c\u6574\u500b\u7cfb\u7d71\u67b6\u69cb\u5982\u4e0b\u5716\uff0c\u5df2\u7d93\u6709\u9ede\u6a23\u5b50\u4e86\uff0c\u96e2\u76ee\u6a19\u53ea\u5dee\u4e00\u9ede\u9ede\u4e86\u3002\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/Ek4X7S8.jpg",alt:null})),(0,a.kt)("h2",{id:"step4"},"Step4"),(0,a.kt)("p",null,"\u7d93\u904e\u524d\u8ff0\u7684\u6240\u6709\u6e96\u5099\uff0c\u8a72\u6709\u7684\u6771\u897f\u90fd\u6709\u4e86\uff0c\u5269\u4e0b\u7684\u5c31\u662f\u5c07\u4e0a\u8ff0\u5275\u5efa\u7684 ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u7d66\u653e\u5230\u6b63\u78ba\u7684\u5730\u65b9\u4e0a\uff0c\u4e26\u4e14\u914d\u4e0a\u4e00\u500b\u76f8\u540c\u7db2\u57df\u7684 ",(0,a.kt)("strong",{parentName:"p"},"ip address"),"\uff0c\u5c31\u53ef\u4ee5\u8b93 ",(0,a.kt)("strong",{parentName:"p"},"openvswitch")," \u4ee5 ",(0,a.kt)("strong",{parentName:"p"},"l2 briding")," \u7684\u65b9\u5f0f\u628a\u5c01\u5305\u7d66\u8f49\u767c\u4e86\u3002"),(0,a.kt)("p",null,"\u9019\u908a\u6211\u5011\u8981\u7e7c\u7e8c ",(0,a.kt)("strong",{parentName:"p"},"ip")," \u6307\u4ee4\uff0c\u9996\u5148\u6211\u5011\u8981\u5c07\u525b\u525b\u5275\u5efa\u7684 ",(0,a.kt)("strong",{parentName:"p"},"vet-n1/vet-n2")," \u9019\u5169\u5f35 ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u7d66\u4e1f\u5230 ",(0,a.kt)("strong",{parentName:"p"},"ns1/ns2")," \u88e1\u9762\uff0c\u6307\u4ee4\u5982\u4e0b\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ip link set $interface netns $ns"),"\uff0c \u5957\u5230\u6211\u5011\u7684\u74b0\u5883\u7684\u8a71\uff0c\u5c31\u662f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ip link set vet-n1 netns ns1\nip link set vet-n2 netns ns2\n")),(0,a.kt)("p",null,"\u7576\u57f7\u884c\u5b8c\u9019\u4e9b\u6307\u4ee4\u5f8c\uff0c\u518d\u5ea6\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ip link")," \u4f60\u6703\u767c\u73fe ",(0,a.kt)("strong",{parentName:"p"},"vet-n1/vet-n2")," \u9019\u5169\u5f35 ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u5b8c\u5168\u6d88\u5931\u4e86\uff0c\u5df2\u7d93\u88ab\u5f9e ",(0,a.kt)("strong",{parentName:"p"},"Ubuntu Host")," \u672c\u8eab\u7d66\u642c\u79fb\u5230\u4e0a\u8ff0\u5275\u9020\u597d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"network namespace")," ",(0,a.kt)("strong",{parentName:"p"},"n1/n2")," \u88e1\u9762\u4e86\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"ip netns exec")," \u6307\u4ee4\u9032\u5165\u5230 ",(0,a.kt)("strong",{parentName:"p"},"ns1/ns2")," \u88e1\u9762\u53bb\u8a2d\u5b9a\u6211\u5011\u7684\u7db2\u8def\u4e86\u3002\n\u6211\u5011\u6709\u4e0b\u5217\u4e8b\u60c5\u8981\u505a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c07\u525b\u525b\u7372\u5f97\u5230\u7684 ",(0,a.kt)("strong",{parentName:"li"},"vet-n1/vet-n2")," \u6539\u540d\u6210 ",(0,a.kt)("strong",{parentName:"li"},"eth0")," (\u70ba\u4e86\u597d\u770b)"),(0,a.kt)("li",{parentName:"ul"},"\u5c07 ",(0,a.kt)("strong",{parentName:"li"},"eth0")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"li"},"lo")," \u53eb\u8d77\u4f86"),(0,a.kt)("li",{parentName:"ul"},"\u5e6b ",(0,a.kt)("strong",{parentName:"li"},"eth0")," \u8a2d\u5b9a ip \u53ca\u7db2\u6bb5\u3002")),(0,a.kt)("p",null,"\u6240\u4ee5\u6307\u4ee4\u5927\u6982\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"> ip netns exec ns1 bash\n> ip link set vet-n1 name eth0\n> ip addr add 10.0.0.101/24 dev eth0\n> ip link set eth0 up\n> ip link set lo up\n> exit\n")),(0,a.kt)("p",null,"\u4e0a\u8ff0\u7684\u6307\u4ee4\u6703\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"ns1")," \u76f8\u95dc\u7684\u4e8b\u60c5\u90fd\u8655\u7406\u5b8c\u7562\uff0c\u9019\u6642\u5019\u518d\u91dd\u5c0d ",(0,a.kt)("strong",{parentName:"p"},"ns2")," \u9032\u884c\u4e00\u6a23\u7684\u8655\u7406\uff0c\u552f\u4e00\u8a18\u5f97\u7684\u662f ",(0,a.kt)("strong",{parentName:"p"},"ip")," \u7684\u90e8\u5206\u8a18\u5f97\u4e0d\u8981\u91cd\u8907\u5373\u53ef\u3002\n\u4e00\u5207\u5b8c\u7562\u5f8c\uff0c\u76ee\u524d\u7cfb\u7d71\u4e0a\u7684\u67b6\u69cb\u5982\u4e0b\u5716\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/gC3zpKs.jpg",alt:null})),(0,a.kt)("h2",{id:"step5"},"Step5"),(0,a.kt)("p",null,"\u6700\u5f8c\u56de\u5230 ",(0,a.kt)("strong",{parentName:"p"},"Ubuntu(Host)")," \u672c\u8eab\uff0c\u6700\u5f8c\u5c31\u5269\u4e0b ",(0,a.kt)("strong",{parentName:"p"},"ovs-1/ovs-2")," \u9019\u5169\u5f35 ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u9084\u6c92\u8655\u7406\u4e86\u3002\n\u9019\u908a\u6211\u5011\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ovs-vsctl")," \u7684\u6307\u4ee4\uff0c\u5c07\u8a72\u5169\u5f35 ",(0,a.kt)("strong",{parentName:"p"},"interface")," \u90fd\u63a5\u5230 ",(0,a.kt)("strong",{parentName:"p"},"ovs-eth0")," \u4e0a\u9762\u5373\u53ef\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"ovs-vsctl add-port ovs-eth0 ovs-1\novs-vsctl add-port ovs-eth0 ovs-2\nip link set ovs-eth0 up\nip link set ovs-1 up\nip link set ovs-2 up\n")),(0,a.kt)("p",null,"\u4e00\u5207\u5927\u529f\u544a\u6210\uff0c\u6574\u500b\u7cfb\u7d71\u7684\u67b6\u69cb\u5c31\u5982\u4e00\u958b\u59cb\u7684\u76ee\u6a19\u4e00\u6a23\u4e86\u3002\n",(0,a.kt)("img",{parentName:"p",src:"http://i.imgur.com/02gIXfD.jpg",alt:null})),(0,a.kt)("p",null,"\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"ip netns exec ns2 ping 10.0.0.101")," \u985e\u4f3c\u7684\u6307\u4ee4\u53bb\u78ba\u8a8d ",(0,a.kt)("strong",{parentName:"p"},"ns1")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"ns2")," \u80fd\u4e0d\u80fd\u4e92\u901a\uff0c\u66f4\u8907\u96dc\u4e00\u9ede\u9084\u53ef\u4ee5\u9032\u53bb\u57f7\u884c\u9664\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"ping")," \u4ee5\u5916\u7684\u6307\u4ee4\u3002\n\u82e5\u4eca\u5929 ",(0,a.kt)("strong",{parentName:"p"},"ovs-eth0")," \u4e5f\u6709\u5c07\u7cfb\u7d71\u4e0a\u5176\u4ed6\u7684\u7db2\u5361\u4e5f\u52a0\u5165\u8fd1\u4f86\uff0c\u66f4\u53ef\u4ee5\u8b93 ",(0,a.kt)("strong",{parentName:"p"},"ns1/ns2")," \u8207\u5916\u754c\u7db2\u8def\u9023\u901a\uff0c\u552f\u4e00\u8981\u6ce8\u610f\u7684\u662f\u7531\u65bc\u6211\u5011\u6c92\u6709\u63a1\u7528 ",(0,a.kt)("strong",{parentName:"p"},"Controller")," \u8fd1\u4f86\u8655\u7406\uff0c\u6240\u4ee5\u9810\u8a2d\u7684 ",(0,a.kt)("strong",{parentName:"p"},"openvswitch")," \u53ea\u6703\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"l2 briding")," \u7684\u65b9\u5f0f\u53bb\u8f49\u9001\u5c01\u5305\uff0c\u56e0\u6b64\u4e0d\u540c\u7db2\u6bb5\u7684\u5c01\u5305\u6703\u4e0d\u901a\u7684\u3002"),(0,a.kt)("h1",{id:"summary"},"Summary"),(0,a.kt)("p",null,"\u672c\u6587\u4e2d\u6211\u5011\u7528\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"network namespace")," \u8207 ",(0,a.kt)("strong",{parentName:"p"},"openvswitch")," \u5275\u9020\u4e86\u4e00\u500b\u985e\u4f3c ",(0,a.kt)("strong",{parentName:"p"},"mininet")," \u7684\u74b0\u5883\uff0c\u5be6\u969b\u4e0a ",(0,a.kt)("strong",{parentName:"p"},"mininet")," \u4e5f\u662f\u7528\u4e00\u6a23\u7684\u65b9\u6cd5\u53bb\u5efa\u7f6e\u5176\u6a21\u64ec\u74b0\u5883\u7684\u3002\n\u6211\u5011\u9664\u4e86\u5b78\u7fd2\u600e\u9ebc\u4f7f\u7528\u9019\u4e9b\u5de5\u5177\u5916\uff0c\u82e5\u80fd\u5c0d\u65bc\u5176\u5be6\u4f5c\u65b9\u6cd5\u4e5f\u6709\u77ad\u89e3\uff0c\u66f4\u80fd\u5920\u5e6b\u52a9\u6211\u5011\u53bb\u601d\u8003\u8a72\u5de5\u5177\u7684\u6975\u9650\u4ee5\u53ca\u5176\u80fd\u529b\uff0c\u540c\u6642\u4e5f\u80fd\u5920\u52a0\u6df1\u6211\u5011\u81ea\u5df1\u7684\u77e5\u8b58\u3002"))}c.isMDXComponent=!0}}]);