"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[96348],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.createContext({}),m=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return l.createElement(p.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(p,".").concat(d)]||u[d]||k[d]||r;return n?l.createElement(f,i(i({ref:t},s),{},{components:n})):l.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},65302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var l=n(87462),a=(n(67294),n(3905));const r={title:"ZFS \u7b46\u8a18",date:"2013-10-12 17:53",author:"hwchiu",tags:["FreeBSD","System","ZFS"]},i=void 0,o={permalink:"/2013/10/12/zfs",source:"@site/blog/2013-10-12-zfs.md",title:"ZFS \u7b46\u8a18",description:"\u4e4b\u524d\u6a5f\u5668\u56e0\u70baZFS\u7a7a\u9593\u6eff\u4e86\uff0c\u56e0\u70ba\u5e73\u5e38\u6709\u518d\u4f5csnapshot\u7684\u7de3\u6545\uff0c\u5c0e\u81f4\u6771\u897f\u90fd\u522a\u9664\u4e0d\u4e86",date:"2013-10-12T17:53:00.000Z",formattedDate:"October 12, 2013",tags:[{label:"FreeBSD",permalink:"/tags/free-bsd"},{label:"System",permalink:"/tags/system"},{label:"ZFS",permalink:"/tags/zfs"}],readingTime:3.85,hasTruncateMarker:!1,authors:[{name:"hwchiu"}],frontMatter:{title:"ZFS \u7b46\u8a18",date:"2013-10-12 17:53",author:"hwchiu",tags:["FreeBSD","System","ZFS"]},prevItem:{title:"Shell Script \u7b46\u8a18",permalink:"/2013/11/24/shell-note"},nextItem:{title:"Vim & Nerdtree",permalink:"/2013/10/11/vim-plugin"}},p={authorsImageUrls:[void 0]},m=[{value:"Files",id:"files",level:2},{value:"Zpool",id:"zpool",level:2},{value:"ZFS database",id:"zfs-database",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"\u6a21\u64ec\u60c5\u6cc1",id:"\u6a21\u64ec\u60c5\u6cc1",level:3},{value:"\u89e3\u6c7a\u554f\u984c",id:"\u89e3\u6c7a\u554f\u984c",level:3}],s={toc:m},u="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e4b\u524d\u6a5f\u5668\u56e0\u70baZFS\u7a7a\u9593\u6eff\u4e86\uff0c\u56e0\u70ba\u5e73\u5e38\u6709\u518d\u4f5csnapshot\u7684\u7de3\u6545\uff0c\u5c0e\u81f4\u6771\u897f\u90fd\u522a\u9664\u4e0d\u4e86\n\u56e0\u70ba\u522a\u9664\u7684\u6642\u5019\u90fd\u6703\u6709\u4e00\u4e9bmetadata\u7684\u5beb\u5165\uff0c\u5c0e\u81f4\u6574\u500bzfs\u52d5\u5f48\u4e0d\u5f97\uff0c\u9019\u6642\u5019\u5c31\u82b1\u4e86\u5f88\u591a\u6642\u9593\u518d\u7814\u5c31\u600e\u9ebc\u8655\u7406\n\u9019\u908a\u7a0d\u5fae\u8a18\u9304\u4e00\u4e0bZFS\u76f8\u95dc\u5f97\u64cd\u4f5c\u3002\nZPOOL\u7684\u4f86\u6e90\u53ef\u4ee5\u662fdevice\u4e5f\u53ef\u4ee5\u662ffiles,\u9019\u908a\u5c31\u7528\u5169\u500b\u6a94\u6848\u7576\u4f5c\u4f86\u6e90\u3002"),(0,a.kt)("h2",{id:"files"},"Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo dd if=/dev/zero of=/zfs1 bs=1M count=256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sudo dd if=/dev/zero of=/zfs2 bs=1M count=256"))),(0,a.kt)("h2",{id:"zpool"},"Zpool"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create a mirror pool",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool create ftphome mirror /zfs1 /zfs2")))),(0,a.kt)("li",{parentName:"ul"},"destroy a pool",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool destroy ftphome")))),(0,a.kt)("li",{parentName:"ul"},"check zpool status",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool status <pool>")))),(0,a.kt)("li",{parentName:"ul"},"export pool ( \u628a\u67d0\u4e9bpool export\u51fa\u53bb\uff0c\u66ab\u6642\u4e0d\u4f7f\u7528)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool export ftphome")))),(0,a.kt)("li",{parentName:"ul"},"import pool ( \u628a\u88abexport \u7684pool \u91cd\u65b0import\u56de\u4f86)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool import -d /  ftphome"),"  (\u7528-d\u6307\u5b9a\u4f60\u6a94\u6848\u7684\u4f4d\u7f6e\uff0c\u9810\u8a2d\u6703\u53bb\u5403/dev/)"),(0,a.kt)("li",{parentName:"ul"},"\u4ee5\u6211\u7684\u7bc4\u4f8b\u4f86\u8aaa\uff0c\u7576import\u56de\u4f86\u5f8c\uff0c\u540d\u7a31\u6703\u8b8a\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"//zfs1"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"//zfs2"),"\uff0c\u591a\u4e86\u4e00\u500b/\uff0c\u539f\u56e0\u4e0d\u660e\u4e2d\u3002"))),(0,a.kt)("li",{parentName:"ul"},"attach ( \u53ea\u80fd\u5c0dmirror\u4f7f\u7528)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool attach ftphome /xxx")))),(0,a.kt)("li",{parentName:"ul"},"detach ( \u53ea\u80fd\u5c0dmirror\u4f7f\u7528)",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool detach ftphome /zfs1"))))),(0,a.kt)("p",null,"\u9084\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"offline"),",",(0,a.kt)("inlineCode",{parentName:"p"},"online"),",",(0,a.kt)("inlineCode",{parentName:"p"},"remove"),"...\uff0c\u5269\u4e0b\u7684\u5c31\u8981\u7528\u7684\u6642\u5019\u53bbman zpool,\u9084\u6eff\u8a73\u7d30\u8aaa\u660e\u7684\u3002"),(0,a.kt)("h2",{id:"zfs-database"},"ZFS database"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"set attributes ",(0,a.kt)("inlineCode",{parentName:"li"},"zfs set key=value <filesystem|volume|snapshot> "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs get compression ftphome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs set mountpoint=/home/ftp ftphome")))),(0,a.kt)("li",{parentName:"ul"},"get attributes ",(0,a.kt)("inlineCode",{parentName:"li"},"zfs get key <filesystem|volume|snapshot> "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs get compression ftphome")))),(0,a.kt)("li",{parentName:"ul"},"snapshot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs snapshot ftphome@today ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs list -t snapshot"))))),(0,a.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5047\u5982\u4f60\u7684ZFS\u6709\u4f7f\u7528snapshot\u540c\u6642\u7a7a\u9593\u53c8\u6eff\u7684\u8a71\uff0c\u9019\u6642\u5019\u6703\u767c\u73fe\u6240\u6709\u6a94\u6848\u90fd\u6703\u522a\u9664\u5931\u6557\uff0c\u90fd\u6703\u5f97\u5230\u7a7a\u9593\u4e0d\u8db3\u7684\u8a0a\u606f,\u9019\u908a\u7a0d\u5fae\u6a21\u64ec\u4e00\u4e0b\u8a72\u60c5\u6cc1\uff0c\u4e26\u4e14\u60f3\u8fa6\u6cd5\u89e3\u6c7a\u6b64\u554f\u984c\u3002")),(0,a.kt)("h3",{id:"\u6a21\u64ec\u60c5\u6cc1"},"\u6a21\u64ec\u60c5\u6cc1"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"snatshot \u8a72zfs")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs snapshot ftphome@today")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs list -t snapshot"),"   \u770b\u4e00\u4e0b\u662f\u5426\u6709\u6210\u529f")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u585e\u7206\u8a72\u7a7a\u9593")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs list")," \u770b\u4e00\u4e0b\u9084\u5269\u4e0b\u591a\u5c11\u7a7a\u9593"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd if=/dev/random of=/home/ftp/file bs=1M count=256")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"cd /home/ftp")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"rm file"),"  => \u61c9\u8a72\u6703\u5f97\u5230 ",(0,a.kt)("inlineCode",{parentName:"li"},"No space left on device"),"\u7a7a\u9593\u4e0d\u8db3\u7684\u8a0a\u606f\u3002")),(0,a.kt)("h3",{id:"\u89e3\u6c7a\u554f\u984c"},"\u89e3\u6c7a\u554f\u984c"),(0,a.kt)("p",null,"ZFS \u8b8a\u5927\u5bb9\u6613(\u591a\u585e\u500b\u786c\u789f\u5373\u53ef)\uff0c\u8b8a\u5c0f\u56f0\u96e3(\u5e7e\u4e4e\u7121\u6cd5)\uff0c\u56e0\u6b64\u7576ZFS\u7684\u786c\u789f\u6eff\u7684\u6642\u5019\uff0c\u6709\u5169\u7a2e\u505a\u6cd5"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u518d\u52a0\u5165\u5169\u500b\u65b0\u7684\u786c\u789f\uff0c\u7136\u5f8c\u5408\u4f75\u5230\u76ee\u524d\u7684zpool,\u53ef\u662f\u9019\u6a23\u5c31\u6703\u8b8a\u6210\u6709\u5169\u4efdmirror\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u6e96\u5099\u5169\u500b\u66f4\u5927\u7684\u786c\u789f\uff0c\u628a\u539f\u672c\u7684zpool\u5167\u7684data\u5168\u90fd\u8907\u88fd\u904e\u53bb\u3002\n\u9019\u908a\u4f7f\u7528\u7b2c\u4e8c\u7a2e\u505a\u6cd5")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5148\u5e6b\u672c\u4f86\u7684pool\u52a0\u5165\u4e00\u500b\u6a94\u6848\uff0c\u589e\u52a0\u672c\u4f86\u7684\u7a7a\u9593\uff0c\u5982\u6b64\u4e00\u4f86\u624d\u53ef\u4ee5\u505a\u66f4\u591a\u64cd\u4f5c")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd if=/dev/zero of=/zfs5 bs=1M count=128")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd if=/dev/zero of=/zfs6 bs=1M count=128")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool add ftphome mirror /zfs5 /zfs6")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs list"),"\n(\u6b64\u6642\u53ef\u4ee5\u770b\u5230\u672c\u4f86\u7684\u7a7a\u9593\u8b8a\u5927\u4e86)")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5275\u9020\u4e00\u500b\u66f4\u5927\u7684zpool\u4f86\u53d6\u4ee3")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd if=/dev/zero of=/zfs3 bs=1M count=512")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dd if=/dev/zero of=/zfs4 bs=1M count=512")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool create ftphome3 mirror /zfs3 /zfs4")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs set compression=gzip-9 ftphome2"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u628a\u8cc7\u6599\u8907\u88fd\u904e\u53bb")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs snapshot ftphome@send")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs send ftphome@send | zfs receive -F ftphome2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs list")," \u770b\u4e00\u4e0b\u5927\u5c0f\u662f\u5426\u76f8\u540c")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"mount\u65b0\u7684\uff0c\u820a\u7684\u780d\u6389")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs umount ftphome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zfs set mountpoint=/home/ftp/ ftphome2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"zpool destroy ftphome"))),(0,a.kt)("p",null,"\u505a\u5230\u9019\u908a\uff0c\u5c31\u7b97\u5b8c\u6210\u4e86\uff0c\u6210\u529f\u7684\u628a\u672c\u4f86\u7684\u8cc7\u6599\u8907\u88fd\u904e\u53bb\u3002\n\u5982\u679c\u60f3\u8981\u6539\u8b8azpool\u7684\u540d\u7a31\uff0c\u53ef\u4ee5\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"export"),"\u8ddf",(0,a.kt)("inlineCode",{parentName:"p"},"import"),"\u4f86\u6539\u540d\u7a31\u3002"))}k.isMDXComponent=!0}}]);