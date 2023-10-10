"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[67639],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,k=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[u]="string"==typeof e?e:a,l[1]=d;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));const o={title:"Install DRBD v9.0 on Ubuntu 16.04",tags:["System","Ubuntu","DRBD"],date:new Date("2017-05-18T13:48:48.000Z")},l=void 0,d={unversionedId:"techPost/2017/drbd-9-0-install-on-ubuntu-16-04",id:"techPost/2017/drbd-9-0-install-on-ubuntu-16-04",title:"Install DRBD v9.0 on Ubuntu 16.04",description:"Introduction",source:"@site/docs/techPost/2017/drbd-9-0-install-on-ubuntu-16-04.md",sourceDirName:"techPost/2017",slug:"/techPost/2017/drbd-9-0-install-on-ubuntu-16-04",permalink:"/docs/techPost/2017/drbd-9-0-install-on-ubuntu-16-04",draft:!1,tags:[{label:"System",permalink:"/docs/tags/system"},{label:"Ubuntu",permalink:"/docs/tags/ubuntu"},{label:"DRBD",permalink:"/docs/tags/drbd"}],version:"current",frontMatter:{title:"Install DRBD v9.0 on Ubuntu 16.04",tags:["System","Ubuntu","DRBD"],date:"2017-05-18T13:48:48.000Z"},sidebar:"techPost",previous:{title:"Docker image for Hexo (\u4e8c)",permalink:"/docs/techPost/2017/docker-hexo-ii"},next:{title:"Translate jupyter notebook to python script",permalink:"/docs/techPost/2017/jupyter-converter"}},p={},i=[{value:"Introduction",id:"introduction",level:3},{value:"Install",id:"install",level:3},{value:"drbd-9.0",id:"drbd-90",level:4},{value:"drbd-utils",id:"drbd-utils",level:4},{value:"Configure",id:"configure",level:3},{value:"Run",id:"run",level:3},{value:"Test",id:"test",level:3},{value:"Trouble Shooting",id:"trouble-shooting",level:3}],s={toc:i},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"\u672c\u7bc7\u6587\u7ae0\u4e3b\u8981\u8b1b\u8ff0\u5982\u4f55\u518d Ubuntu 16.04 with kernel 4.4.3 \u7684\u74b0\u5883\u4e0b\u5b89\u88dd drbd 9.0 \u4e26\u9032\u884c\u7c21\u55ae\u7684\u8a2d\u5b9a\u8207\u64cd\u4f5c\u3002"),(0,a.kt)("h3",{id:"install"},"Install"),(0,a.kt)("p",null,"\u9019\u908a\u70ba\u4e86\u65b9\u4fbf\u65e5\u5f8c\u7684\u7814\u7a76\uff0c\u9019\u908a\u5b89\u88dd\u7684\u65b9\u5f0f\u662f\u6293\u53d6 source code \u4e0b\u4f86\uff0c\u7136\u5f8c\u9032\u884c\u7de8\u8b6f\u5b89\u88dd\uff0c\u7531\u65bc drbd v8.4.5 \u5f8c\u5c07  module \u4ee5\u53ca\u76f8\u95dc\u7684 utils \u662f\u5206\u958b\u5728\u4e0d\u540c\u7684 ",(0,a.kt)("strong",{parentName:"p"},"git repostory"),"\uff0c\u6240\u4ee5\u6211\u5011\u6703\u6709\u5169\u500b ",(0,a.kt)("strong",{parentName:"p"},"project")," \u4f86\u7de8\u8b6f\u53ca\u5b89\u88dd\u3002\n\u9996\u5148\u5230",(0,a.kt)("a",{parentName:"p",href:"http://git.drbd.org/"},"\u5b98\u7db2"),"\u7684 git \u9996\u9801\u53ef\u4ee5\u770b\u5230\u6eff\u6eff\u7684 projects\uff0c\u9019\u908a\u6211\u5011\u6703\u9700\u8981\u7684\u5169\u500b project \u5206\u5225\u662f ",(0,a.kt)("a",{parentName:"p",href:"http://git.drbd.org/drbd-9.0.git"},"drbd-9.0")," \u4ee5\u53ca ",(0,a.kt)("a",{parentName:"p",href:"http://git.drbd.org/drbd-utils.git"},"drbd-utils"),"\u3002\n\u63a5\u4e0b\u4f86\u5c31\u8aaa\u660e\u9019\u5169\u500b project \u8981\u5982\u4f55\u7de8\u8b6f\u53ca\u5b89\u88dd"),(0,a.kt)("h4",{id:"drbd-90"},"drbd-9.0"),(0,a.kt)("p",null,"\u6b64 ",(0,a.kt)("strong",{parentName:"p"},"project")," \u8ca0\u8cac\u7684\u662f kernel module\u90e8\u5206\uff0c\u6240\u4ee5\u5728\u7de8\u8b6f\u6642\u6703\u9700\u8981 kernel source \u4f86\u7de8\u8b6f\uff0c\u5982\u679c\u4f60\u662f\u6b63\u5e38\u5b89\u88dd\u7684 ubuntu 16.04\uff0c\u7cfb\u7d71\u5167\u61c9\u8a72\u90fd\u5df2\u7d93\u6709 source \u53ef\u4ee5\u7528\u4e86\uff0c\u9019\u90e8\u5206\u4e0d\u592a\u9700\u8981\u984d\u5916\u8a2d\u5b9a\u5373\u53ef\uff0c\u82e5\u6709\u7279\u5b9a\u7684 kernel version \u60f3\u8981\u4f7f\u7528\uff0c\u5247\u8a18\u5f97\u8981\u5148\u5c07\u8a72 kernel source \u6293\u4e0b\u4f86\uff0c\u7136\u5f8c\u7de8\u8b6f\u7684\u6642\u5019\u6307\u5b9a\u7279\u5b9a\u7684 kernel source \u8def\u5f91\u5373\u53ef\u3002\n\u9019\u65b9\u9762\u53ef\u4ee5\u53c3\u8003",(0,a.kt)("a",{parentName:"p",href:"https://drbd15-staging.linbit.com/en/doc/users-guide-83/s-build-from-source#s-build-prepare-kernel-tree"},"\u5b98\u65b9\u7684\u6587\u4ef6\u8aaa\u660e")),(0,a.kt)("p",null,"\u6d41\u7a0b\u57fa\u672c\u4e0a\u5c31\u662f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"clone git project"),(0,a.kt)("li",{parentName:"ul"},"build"),(0,a.kt)("li",{parentName:"ul"},"install")),(0,a.kt)("p",null,"\u57fa\u672c\u4e0a\u6b64\u7de8\u8b6f\u6b64 project \u7684\u904e\u7a0b\u975e\u5e38\u9806\u5229\uff0c\u518d\u57f7\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"make"),"\u5b8c\u7562\u5f8c\uff0c\u6703\u986f\u793a\u4e00\u6bb5\u6587\u5b57\n\u6211\u5011\u53ef\u4ee5\u77e5\u9053\u82e5\u60f3\u8981\u4f7f\u7528 drbd 9.0 \u7684 kernel \u7248\u672c\uff0c\u5247\u6211\u5011\u7684 ",(0,a.kt)("strong",{parentName:"p"},"drbd-utils")," \u81f3\u5c11\u8981 8.9.11 \u7248\u672c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'        Module build was successful.\n=======================================================================\n  With DRBD module version 8.4.5, we split out the management tools\n  into their own repository at http://git.linbit.com/drbd-utils.git\n  (tarball at http://links.linbit.com/drbd-download)\n\n  That started out as "drbd-utils version 8.9.0",\n  and provides compatible drbdadm, drbdsetup and drbdmeta tools\n  for DRBD module versions 8.3, 8.4 and 9.\n\n  Again: to manage DRBD 9 kernel modules and above,\n  you want drbd-utils >= 8.9.11 from above url.\n=======================================================================\n')),(0,a.kt)("p",null,"\u6700\u5f8c\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"make install")," \u5c07\u76f8\u95dc\u7684 kernel module \u7d66\u5b89\u88dd\u5230\u7cfb\u7d71\u7684\u8def\u5f91\uff0c\u7136\u5f8c\u900f\u904e\u6aa2\u8996\u53ef\u4ee5\u767c\u73fe\u5be6\u969b\u4e0a\u5b89\u88dd\u7684 modules  \u6709 ",(0,a.kt)("strong",{parentName:"p"},"drbd.ko")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"drbd_transport_tcp.ko"),"\u3002\n\u5206\u5225\u662f\u6574\u500b drbd \u6838\u5fc3\u7684\u90e8\u5206\uff0c\u4ee5\u53ca\u7db2\u8def\u529f\u80fd\u7684\u90e8\u5206\uff0c\u82e5\u662f\u5546\u696d\u5316\u7248\u672c\u9084\u53ef\u4ee5\u591a\u770b\u5230 ",(0,a.kt)("strong",{parentName:"p"},"drbd_transport_rdma.ko")," \u4f9b RDMA \u4f7f\u7528\u3002"),(0,a.kt)("p",null,"\u6574\u500b\u6b65\u9a5f\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone http://git.drbd.org/drbd-9.0.git\ncd drbd-9.0\nmake\nmake install\n")),(0,a.kt)("h4",{id:"drbd-utils"},"drbd-utils"),(0,a.kt)("p",null,"\u6b64 ",(0,a.kt)("strong",{parentName:"p"},"project")," \u63d0\u4f9b ",(0,a.kt)("strong",{parentName:"p"},"drbd user space")," \u7684\u6240\u6709\u5de5\u5177\uff0c\u5305\u542b\u4e86 ",(0,a.kt)("strong",{parentName:"p"},"drbdadm"),", ",(0,a.kt)("strong",{parentName:"p"},"drbdsetup"),"\u7b49\u5e38\u7528\u5de5\u5177\u3002\n\u57fa\u672c\u4e0a\u6d41\u7a0b\u4e5f\u662f\u6eff\u9806\u5229\u7684"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"clone git project"),(0,a.kt)("li",{parentName:"ol"},"autogen"),(0,a.kt)("li",{parentName:"ol"},"configure"),(0,a.kt)("li",{parentName:"ol"},"build"),(0,a.kt)("li",{parentName:"ol"},"install")),(0,a.kt)("p",null,"\u900f\u904e ",(0,a.kt)("inlineCode",{parentName:"p"},"autogen.sh")," \u7522\u751f\u597d\u5c0d\u61c9\u7684 ",(0,a.kt)("strong",{parentName:"p"},"configure")," \u6a94\u6848\u6642\uff0c\u6703\u6709\u4e0b\u5217\u6587\u5b57\u8aaa\u660e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"suggested configure parameters:\n# prepare for rpmbuild, only generate spec files\n./configure --enable-spec\n# or prepare for direct build\n./configure --prefix=/usr --localstatedir=/var --sysconfdir=/etc\n")),(0,a.kt)("p",null,"\u9019\u908a\u5c31\u5efa\u8b70\u4f9d\u7167\u4ed6\u7684\u8aaa\u6cd5\u53bb\u8a2d\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"configure"),"\uff0c\u4e0d\u7136\u4e4b\u5f8c\u57f7\u884c ",(0,a.kt)("strong",{parentName:"p"},"drbdadm up resource")," \u7684\u6642\u5019\u6703\u767c\u73fe\u6709\u4e9b\u6771\u897f\u627e\u4e0d\u5230\uff0c\u5982\u679c\u4e0d\u60f3\u8981\u5efa\u8b70\u820a\u7248\u7684 tools \u7684\u8a71\uff0c\u53ef\u4ee5\u52a0\u4e0a\u9019\u5169\u500b\u53c3\u6578\n",(0,a.kt)("strong",{parentName:"p"},"--without-83support")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"--without-84support"),"\n\u6b64\u5916\uff0c\u5982\u679c\u6700\u5f8c\u518d\u5efa\u7f6e\u7684\u6642\u5019\u767c\u73fe ",(0,a.kt)("strong",{parentName:"p"},"documentation/v9")," \u4e00\u76f4\u5efa\u7f6e\u4e0d\u904e\uff0c\u7136\u5f8c\u53c8\u4e0d\u9700\u8981\u6587\u4ef6\u7684\u8a71\uff0c\u53ef\u4ee5\u52a0\u4e0a\u4e0b\u5217\u53c3\u6578 ",(0,a.kt)("strong",{parentName:"p"},"--without-manual")),(0,a.kt)("p",null,"\u9019\u908a\u8981\u6ce8\u610f\u7684\u5c31\u662f\u5728 ",(0,a.kt)("strong",{parentName:"p"},"make")," \u7684\u6642\u5019\u6703\u9700\u8981 ",(0,a.kt)("strong",{parentName:"p"},"xsltproc")," \u9019\u500b\u5957\u4ef6\uff0c\u6240\u4ee5\u82e5\u6709\u767c\u73fe\u932f\u8aa4\u986f\u793a ",(0,a.kt)("strong",{parentName:"p"},"xsltproc: command not found"),"\uff0c\u5247\u8a18\u5f97\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"apt-get install xsltproc")," \u5b89\u88dd\u8a72\u5957\u4ef6\u5373\u53ef\u3002"),(0,a.kt)("p",null,"\u6574\u500b\u6b65\u9a5f\u5982\u4e0b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone http://git.drbd.org/drbd-utils.git\n./autogen.sh\n./configure --prefix=/usr --localstatedir=/var --sysconfdir=/etc --without-83support --without-84support --without-manual\nmake\nmake install\n")),(0,a.kt)("h3",{id:"configure"},"Configure"),(0,a.kt)("p",null,"drbd \u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},"drbd.conf")," \u4f86\u8a2d\u5b9a\u76f8\u95dc\u8cc7\u8a0a\uff0c\u9810\u8a2d\u7684\u5b58\u653e\u4f4d\u7f6e\u662f ",(0,a.kt)("strong",{parentName:"p"},"/usr/local/etc/drbd.conf"),"\uff0c\u82e5\u4e4b\u524d\u5728 configure \u6642\u6709\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"--sysconfdir=/etc"),"\uff0c\u5247\u8a72 configure \u7684\u9810\u8a2d\u4f4d\u7f6e\u662f ",(0,a.kt)("strong",{parentName:"p"},"/etc/drbd.conf"),"\u3002\n\u9019\u500b config \u9700\u8981\u6bcf\u4e00\u53f0\u8981\u8dd1 drbd \u7684\u6a5f\u5668\u4e0a\u90fd\u8981\u6709\u4e00\u4efd\uff0c\u6240\u4ee5\u7576\u8a2d\u5b9a\u5b8c\u7562\u5f8c\uff0c\u8acb\u81ea\u884c copy \u5230\u53e6\u5916\u4e00\u53f0\u3002\u672c\u6587\u4e2d\u5047\u8a2d\u6709\u5169\u53f0\u6a5f\u5668\uff0c\u5176 hostname \u5206\u5225\u662f ",(0,a.kt)("strong",{parentName:"p"},"node-1")," \u4ee5\u53ca ",(0,a.kt)("strong",{parentName:"p"},"node-2"),"\u3002"),(0,a.kt)("p",null,"\u5927\u81f4\u6b65\u9a5f\u5982\u4e0b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a /etc/hosts"),(0,a.kt)("li",{parentName:"ul"},"\u8a2d\u5b9a config"),(0,a.kt)("li",{parentName:"ul"},"\u5c07 config \u8907\u88fd\u5230\u6240\u6709\u6a5f\u5668")),(0,a.kt)("p",null,"\u9996\u5148\u7531\u65bc ",(0,a.kt)("strong",{parentName:"p"},"drbd")," \u8a2d\u5b9a host\u7684\u6642\u5019\uff0c\u6703\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"hostname")," \u53bb\u5c0b\u627e\u5c0d\u61c9\u7684 host \u6b04\u4f4d\uff0c\u6240\u4ee5\u5efa\u8b70\u5148\u4fee\u6539 ",(0,a.kt)("strong",{parentName:"p"},"/etc/hosts")," \u5c07\u6240\u6709\u7528\u5230\u7684 hostname \u8207\u5176 ip \u5c0d\u61c9\u95dc\u4fc2\u90fd\u5beb\u4e0a\u53bb\u3002\n\u52a0\u5165\u4e0b\u5217\u8cc7\u8a0a\u9b5a ",(0,a.kt)("strong",{parentName:"p"},"/etc/hosts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"10.0.0.15 node-1\n10.0.0.16 node-2\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u8981\u8a2d\u5b9a ",(0,a.kt)("strong",{parentName:"p"},"drbd.conf"),"\uff0c\u5047\u8a2d\u6211\u5011\u8981\u4f7f\u7528\u7cfb\u7d71\u4e0a\u7684 /dev/nvme0n1 \u7576\u4f5c\u6211\u5011\u7684 disk\uff0c\u63d0\u4f9b\u51fa\u4f86\u7684 block device \u662f ",(0,a.kt)("strong",{parentName:"p"},"/dev/drbd0"),"\uff0c\u5247\u7bc4\u4f8b\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-conf"},"global { usage-count no; }\ncommon { protocol C; }\n\nresource r0 {\n        on node-1 {\n                device /dev/drbd0;\n                disk /dev/nvme0n1;\n                address 10.0.0.15:7788;\n                meta-disk internal;\n        }\n        on node-2 {\n                device /dev/drbd0;\n                disk /dev/nvme0n1;\n                address 10.0.0.16:7788;\n                meta-disk internal;\n        }\n}\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u53ef\u4ee5\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"scp")," \u4e4b\u985e\u7684\u6307\u4ee4\u5c07\u8a72\u8a2d\u5b9a\u6a94\u8907\u88fd\u5230\u53e6\u5916\u4e00\u53f0 ",(0,a.kt)("strong",{parentName:"p"},"node-2"),"\uff0c\u6216\u662f\u6709\u4efb\u4f55\u65b9\u6cd5\u90fd\u53ef\u4ee5\uff0c\u53ea\u8981\u78ba\u4fdd\u5169\u53f0\u6709\u4e00\u6a23\u7684\u8cc7\u6599\u5373\u53ef\u3002"),(0,a.kt)("h3",{id:"run"},"Run"),(0,a.kt)("p",null,"\u8a2d\u5b9a\u6a94\u90fd\u6e96\u5099\u5b8c\u6210\u5f8c\uff0c\u63a5\u4e0b\u4f86\u8981\u4f9d\u8cf4 ",(0,a.kt)("strong",{parentName:"p"},"drbdadm")," \u5e6b\u5fd9\u9032\u884c\u76f8\u95dc\u7684\u8a2d\u5b9a\n\u9996\u5148\u6211\u5011\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"drbdadm create-md")," \u5c07\u8a72 resource \u7d66\u5efa\u7acb\u8d77\u4f86\uff0c\u5927\u6982\u8a0a\u606f\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"You want me to create a v09 style flexible-size internal meta data block.\nThere appears to be a v09 flexible-size internal meta data block\nalready in place on /dev/nvme0n1 at byte offset 400088453120\n\nDo you really want to overwrite the existing meta-data?\n[need to type 'yes' to confirm] yes\n\ninitializing activity log\ninitializing bitmap (11924 KB) to all zero\nWriting meta data...\nNew drbd meta data block successfully created.\n")),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u900f\u904e ",(0,a.kt)("strong",{parentName:"p"},"drbdadm up r0")," \u5c07\u6574\u500b resource \u904b\u884c\u8d77\u4f86\uff0c\u5305\u542b\u5c07 device bloack attach\uff0c\u5efa\u7acb\u7db2\u8def\u9023\u7dda\u7b49\u3002\n\u5f85",(0,a.kt)("strong",{parentName:"p"},"node-1"),"\u4ee5\u53ca",(0,a.kt)("strong",{parentName:"p"},"node-2"),"\u57f7\u884c\u597d\u4e0a\u8ff0\u6307\u4ee4\u5f8c\uff0c\u6211\u5011\u8981\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"node1")," \u7576\u4f5c primary\uff0c\u6240\u4ee5\u9019\u6642\u5019\u518d ",(0,a.kt)("strong",{parentName:"p"},"node-1")," \u4e0a\u9762\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"drbdadm primary r0")," \u5982\u6b64\u4e00\u4f86\u5c31\u6703\u5c07 ",(0,a.kt)("strong",{parentName:"p"},"node-1"),"\u4e0a\u9762\u7684\u8cc7\u6599\u5f9e\u7d66 mirror \u5230 ",(0,a.kt)("strong",{parentName:"p"},"node-2"),"\u4e0a\u4e86\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u4f86\u61c9\u8a72\u53ef\u4ee5\u900f\u904e\u4e0b\u5217\u6307\u4ee4\u89c0\u5bdf\u5230\u4e00\u4e9b\u72c0\u614b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"drbdadm cstate r0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89c0\u5bdf\u7db2\u8def\u9023\u7dda\u72c0\u614b"))),(0,a.kt)("li",{parentName:"ul"},"drbdadm dstate r0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89c0\u5bdf disk \u7684\u72c0\u614b"))),(0,a.kt)("li",{parentName:"ul"},"drbdadm status r0",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u89c0\u5bdf\u6574\u9ad4\u72c0\u614b\uff0c\u5305\u542b\u5176\u4ed6\u7684node\u662f ",(0,a.kt)("strong",{parentName:"li"},"primary"),"/",(0,a.kt)("strong",{parentName:"li"},"secondary"),"\u7b49"))),(0,a.kt)("li",{parentName:"ul"},"drbd-overview",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u986f\u793a\u7576\u524dcluster\u5167\u7684\u72c0\u614b"))),(0,a.kt)("li",{parentName:"ul"},"drbdsetup status r0 --verbose --statistics",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u986f\u793a\u7576\u524d sync \u7d71\u8a08\u8cc7\u8a0a\uff0c\u8b6c\u5982\u9084\u6709\u591a\u5c11\u8cc7\u6599\u672async")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"r0 node-id:1 role:Primary suspended:no\n    write-ordering:flush\n  volume:0 minor:0 disk:UpToDate\n      size:390699424 read:390700584 written:12390400 al-writes:2750 bm-writes:0 upper-pending:0 lower-pending:0 al-suspended:no blocked:no\n  node-2 node-id:0 connection:Connected role:Secondary congested:no\n    volume:0 replication:Established peer-disk:UpToDate resync-suspended:no\n        received:0 sent:403089824 out-of-sync:0 pending:0 unacked:0\n")),(0,a.kt)("p",null,"\u66f4\u591a\u7684\u6307\u4ee4\u7528\u6cd5\u53ef\u53c3\u8003\u5b98\u65b9\u6587\u4ef6\u4e0a\u7684",(0,a.kt)("a",{parentName:"p",href:"https://drbd15-staging.linbit.com/en/doc/users-guide-90/s-check-status"},"\u8aaa\u660e")),(0,a.kt)("h3",{id:"test"},"Test"),(0,a.kt)("p",null,"\u70ba\u4e86\u78ba\u8a8d\u662f\u5426\u771f\u7684\u6709\u6d41\u91cf\u5728\u5169\u500b node \u4e4b\u9593\u904b\u884c\uff0c\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"dd")," \u9019\u500b\u6307\u4ee4\u65bc ",(0,a.kt)("strong",{parentName:"p"},"node-1"),"\u4e0a\u9762\u53bb\u5beb\u5165\u8cc7\u6599\uff0c\u7136\u5f8c\u900f\u904e",(0,a.kt)("strong",{parentName:"p"},"drbdsetup status r0 --verbose --statistics"),"\u78ba\u8a8d\u6709\u7522\u751f\u5927\u91cf\u7684\u8cc7\u6599\u9032\u884c sync"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"dd if=/dev/zero of=/dev/drbd0 bs=1M count=10000\n")),(0,a.kt)("h3",{id:"trouble-shooting"},"Trouble Shooting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"drbdadm primary r0")," \u51fa\u73fe\u932f\u8aa4 ",(0,a.kt)("strong",{parentName:"li"},"State change failed: (-2) Need access to UpToDate data"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57f7\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"drbdadm primary r0 --force")," \u5f37\u8feb\u84cb\u6389")))))}c.isMDXComponent=!0}}]);