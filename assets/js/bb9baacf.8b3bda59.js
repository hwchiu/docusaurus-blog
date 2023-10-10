"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[9308],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42569:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const a={title:"NCurses Disk Usage(ncdu)",date:new Date("2018-10-06T07:37:35.000Z"),tags:["Linux","System","Tool"],description:"NCurses Disk Usage(ncdu) is a powerful tool to view file sizes across different directories in a simple and friendly GUI. Besides, you can also do some operation but read, such as delete file/directory. In this post, I will introduce what is ncdu and how to use it to replace the legacy command du."},i="Preface",s={unversionedId:"techPost/2018/tools-ncdu",id:"techPost/2018/tools-ncdu",title:"NCurses Disk Usage(ncdu)",description:"NCurses Disk Usage(ncdu) is a powerful tool to view file sizes across different directories in a simple and friendly GUI. Besides, you can also do some operation but read, such as delete file/directory. In this post, I will introduce what is ncdu and how to use it to replace the legacy command du.",source:"@site/docs/techPost/2018/tools-ncdu.md",sourceDirName:"techPost/2018",slug:"/techPost/2018/tools-ncdu",permalink:"/docs/techPost/2018/tools-ncdu",draft:!1,tags:[{label:"Linux",permalink:"/docs/tags/linux"},{label:"System",permalink:"/docs/tags/system"},{label:"Tool",permalink:"/docs/tags/tool"}],version:"current",frontMatter:{title:"NCurses Disk Usage(ncdu)",date:"2018-10-06T07:37:35.000Z",tags:["Linux","System","Tool"],description:"NCurses Disk Usage(ncdu) is a powerful tool to view file sizes across different directories in a simple and friendly GUI. Besides, you can also do some operation but read, such as delete file/directory. In this post, I will introduce what is ncdu and how to use it to replace the legacy command du."},sidebar:"techPost",previous:{title:"[\u8ad6\u6587\u5c0e\u8b80] - Towards Zero Copy Dataflows using RDMA",permalink:"/docs/techPost/2018/paper-tensorflow-with-rdma"},next:{title:"\u4f7f\u7528 Travis CI \u70ba\u4f60\u7684 Kubernetes \u61c9\u7528\u7a0b\u5f0f\u6253\u9020\u81ea\u52d5\u5316\u6e2c\u8a66",permalink:"/docs/techPost/2018/travisci-k8s"}},l={},u=[{value:"MacOS (Brew)",id:"macos-brew",level:2},{value:"Ubuntu (apt system)",id:"ubuntu-apt-system",level:2},{value:"Navagation",id:"navagation",level:2},{value:"Open",id:"open",level:2},{value:"Delete",id:"delete",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"preface"},"Preface"),(0,r.kt)("p",null,"We usually use the command df to see the current disk capacitry/size of each mount point and use the command du to see the file size under current directory. In the command du, we can specify options to limit the depth level of the file directory and hence, get the total size of the directory. However, it's not convenient for the administrator to view the file size across different directory, you need to execute the command du many times and use other method to record the current result for later use."),(0,r.kt)("p",null,"Fortunately. We have the Ncurses DIsk Usage(ncdu) and it provides a friendly GUI for administrator to manage the files/directories and you can find more detail about it in its ",(0,r.kt)("a",{parentName:"p",href:"https://dev.yorhel.nl/ncdu"},"official website")),(0,r.kt)("h1",{id:"install"},"Install"),(0,r.kt)("p",null,"You can download the source code from the ",(0,r.kt)("a",{parentName:"p",href:"https://dev.yorhel.nl/ncdu"},"official website"),", compile it and then intall to your system."),(0,r.kt)("p",null,"If you're prfer to download the pre-configured software from some package system, you can use the following command to install the ncdu but it's depend on what package management system you use."),(0,r.kt)("h2",{id:"macos-brew"},"MacOS (Brew)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"brew install ncdu")),(0,r.kt)("h2",{id:"ubuntu-apt-system"},"Ubuntu (apt system)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"apt-get install ncdu")),(0,r.kt)("h1",{id:"usage"},"Usage"),(0,r.kt)("p",null,"Change to any directory you want to inspect the file size and then exectue the commnd ",(0,r.kt)("inlineCode",{parentName:"p"},"ncdu"),"."),(0,r.kt)("p",null,"First, ncdu will recursively collect the file information under the current directory.\nIt will takes a time depends on how big of your directory structure."),(0,r.kt)("p",null,"You will see the following picture in your terminal.\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/CUNwdCt.png",alt:"Imgur"})),(0,r.kt)("p",null,"After the collection has done, it will display the size of each file and directory(total size if it's directory) under the current directory."),(0,r.kt)("h1",{id:"format"},"Format"),(0,r.kt)("p",null,"The output forwat is clear."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"First colume:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The file size and it will automatically transfer to humand readble size."))),(0,r.kt)("li",{parentName:"ul"},"Second colume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the percentage of specified file/directory to the whole root directory, it use the numder of sharp symbol to show the ratio by default and you can toggle the shortcut ",(0,r.kt)("inlineCode",{parentName:"li"},"g")," to display by numbrer."))),(0,r.kt)("li",{parentName:"ul"},"Third colume",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The file/directory name")))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/T49Lmsk.png",alt:"Imgur"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/fIPsGfK.png",alt:"Imgur"})),(0,r.kt)("h1",{id:"operation"},"Operation"),(0,r.kt)("h2",{id:"navagation"},"Navagation"),(0,r.kt)("p",null,"The basic operation is navagation, use the arrow key(up/down) or ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"j")," to move the cursoe up and down respectively."),(0,r.kt)("h2",{id:"open"},"Open"),(0,r.kt)("p",null,"The amazing feature I think better than the legacy command ",(0,r.kt)("inlineCode",{parentName:"p"},"du")," is nctu supports the open opeartion.\nYou can use the to arrow key(right/left) to open the directory and use it as the root directory or go back to the previous root directory.\nWith the help of this feature, we don't need to execute the command ",(0,r.kt)("inlineCode",{parentName:"p"},"du")," many times to see the whole inforatiom."),(0,r.kt)("h2",{id:"delete"},"Delete"),(0,r.kt)("p",null,"Besides, ncdu also provides the delete option to let your delete the file or whole directory in the current window."),(0,r.kt)("p",null,"You can see the instruction help by the key ",(0,r.kt)("inlineCode",{parentName:"p"},"?"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.imgur.com/mtS1Vs5.png",alt:"Imgur"})),(0,r.kt)("h1",{id:"summary"},"Summary"),(0,r.kt)("p",null,"I used to use the command du to inspect the current file/directory size and also use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"sort")," to sort the result by the du command.\nThere're some problem about that usage and bothered me for a long time.\nIf command du shows the output with human-readble foramt, it's hard for sorting, but if it shows the size as numeric format, it's good for sorting but not for reading.\nIn the ",(0,r.kt)("inlineCode",{parentName:"p"},"ncdu"),", that problem doesn't exsit and the ",(0,r.kt)("inlineCode",{parentName:"p"},"ncdu")," also support the delete operation and the way to change the current root directory.\nThat's why I switch to use the ncdu once I had found this powerful tool."))}p.isMDXComponent=!0}}]);