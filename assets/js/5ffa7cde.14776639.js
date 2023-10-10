"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[12822],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var l=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=l.createContext({}),p=function(e){var t=l.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(a.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(a,".").concat(d)]||c[d]||m[d]||i;return n?l.createElement(f,r(r({ref:t},u),{},{components:n})):l.createElement(f,r({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var l=n(87462),o=(n(67294),n(3905));const i={title:"Kubernetes \u7b2c\u4e09\u65b9\u597d\u7528\u5de5\u5177\u4ecb\u7d39",sidebar_position:28,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:new Date("2021-02-09T21:50:53.000Z")},r=void 0,s={unversionedId:"techPost/2020/iThome_Challenge/cicd-28",id:"techPost/2020/iThome_Challenge/cicd-28",title:"Kubernetes \u7b2c\u4e09\u65b9\u597d\u7528\u5de5\u5177\u4ecb\u7d39",description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2020/iThome_Challenge/cicd-28.md",sourceDirName:"techPost/2020/iThome_Challenge",slug:"/techPost/2020/iThome_Challenge/cicd-28",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-28",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",sidebarPosition:28,frontMatter:{title:"Kubernetes \u7b2c\u4e09\u65b9\u597d\u7528\u5de5\u5177\u4ecb\u7d39",sidebar_position:28,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:"2021-02-09T21:50:53.000Z"},sidebar:"techPost",previous:{title:"Kubernetes plugin \u7bc4\u4f8b",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-27"},next:{title:"Summary",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-29"}},a={},p=[{value:"\u5b89\u88dd",id:"\u5b89\u88dd",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-1",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528-2",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4eca\u5929\u5247\u8981\u4f86\u4ecb\u7d39\u4e00\u4e9b\u5176\u4ed6\u95dc\u65bc kubernetes \u64cd\u4f5c\u7684\u597d\u5de5\u5177\uff0c\u6bcf\u500b\u5de5\u5177\u90fd\u6709\u81ea\u5df1\u9069\u5408\u7684\u5730\u65b9\u8207\u5834\u666f\uff0c\u6bcf\u500b\u4eba\u5c31\u6839\u64da\u81ea\u5df1\u7684\u7fd2\u6163\u9078\u64c7"),(0,o.kt)("h1",{id:"sternkail"},"Stern/Kail"),(0,o.kt)("p",null,"\u7b2c\u4e00\u500b\u8981\u5206\u4eab\u7684\u5de5\u5177\u662f\u8ddf\u89c0\u770b log \u6709\u95dc\u7684\uff0c Kubernetes \u7531\u65bc\u63d0\u4f9b\u5f88\u591a\u500b\u526f\u672c\uff0c\u540c\u6642\u900f\u904e deployment/replicaset \u5275\u5efa\u51fa\u4f86\u7684 Pod \u540d\u7a31\u4e0a\u9762\u90fd\u6703\u6709\u4e00\u4e9b\u4e0d\u597d\u95b1\u8b80\u7684\u4e82\u6578\uff0c\u8209\u4f8b\u4f86\u8aaa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl get pods\nNAME                      READY   STATUS    RESTARTS   AGE\nithome-6564f65698-947rv   1/1     Running   0          84s\nithome-6564f65698-fglr9   1/1     Running   0          84s\nithome-6564f65698-k5wtg   1/1     Running   0          84s\nithome-6564f65698-rrvk4   1/1     Running   0          84s\nithome-6564f65698-zhwlj   1/1     Running   0          84s\n")),(0,o.kt)("p",null,"\u9019\u7a2e\u60c5\u6cc1\u4e0b\u6211\u5011\u5982\u679c\u4f7f\u7528 kubectl \u4f86\u89c0\u5bdf\u500b\u5225 Pod \u7684 log \u5c31\u5fc5\u9808\u8981\u65bc\u4e0d\u540c\u7684 pod \u4e4b\u9593\u4f86\u56de\u5207\u63db\uff0c\u53ef\u6642\u5019\u6709\u6642\u5019\u8981\u9664\u932f\u554f\u984c\u6642\uff0c\u5c31\u5e0c\u671b\u53ef\u4ee5\u540c\u6642\u89c0\u770b\u9019\u4e9b Pod \u7684 log\u3002"),(0,o.kt)("p",null,"\u56e0\u6b64\u4eca\u5929\u8981\u4ecb\u7d39\u7684\u5de5\u5177\u5c31\u662f\u518d\u8655\u7406\u9019\u65b9\u9762\u7684\u9700\u6c42\uff0c\u4e3b\u8981\u662f\u91dd\u5c0d\u591a\u500b Pod \u540c\u6642\u5b58\u53d6\u76f8\u95dc\u7684 log \u4e26\u4e14\u6574\u7406\u5f8c\u986f\u793a\u51fa\u4f86\uff0c\u9019\u65b9\u9762\u7684\u5de5\u5177\u6eff\u591a\u7684\uff0c\u8b6c\u5982 Stern, Kube-tail, Kail \u7b49\u90fd\u53ef\u4ee5\u3002 \u800c\u4eca\u5929\u5247\u662f\u6703\u4ecb\u7d39 Stern \u7684\u7528\u6cd5"),(0,o.kt)("p",null,"\u5f9e\u5176\u5b98\u7db2\u4e0a\u53ef\u4ee5\u770b\u5230\u8aaa\u660e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Stern allows you to ",(0,o.kt)("inlineCode",{parentName:"p"},"tail")," multiple pods on Kubernetes and multiple containers within the pod. Each result is color coded for quicker debugging."),(0,o.kt)("p",{parentName:"blockquote"},"The query is a regular expression so the pod name can easily be filtered and you don't need to specify the exact id (for instance omitting the deployment id). If a pod is deleted it gets removed from tail and if a new pod is added it automatically gets tailed.")),(0,o.kt)("p",null,"\u7279\u5225\u7684\u662f\u4f60\u53ef\u4ee5\u900f\u904e\u6b63\u898f\u8868\u9054\u5f0f\u7684\u65b9\u5f0f\u4f86\u9078\u64c7\u4f60\u60f3\u8981\u7b26\u5408\u7684 Pod"),(0,o.kt)("h2",{id:"\u5b89\u88dd"},"\u5b89\u88dd"),(0,o.kt)("p",null,"\u76f4\u63a5\u5230\u5b98\u65b9 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wercker/stern/releases"},"Github Release Page")," \u6293\u53bb\u6bcf\u500b\u5e73\u53f0\u7684 binary \u7248\u672c"),(0,o.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u4e0a\u8ff0\u7bc4\u4f8b\u6703\u6709\u4e94\u500b pod\uff0c\u800c\u4e14\u9019\u4e94\u500bpod\u7684\u540d\u7a31\u90fd\u662f ithome\u958b\u982d\uff0c\u56e0\u6b64\u6211\u53ef\u4ee5\u76f4\u63a5\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"stern ithom")," \u7684\u65b9\u5f0f\u4f86\u6293\u53d6\u9019\u4e9b pod \u7684\u8cc7\u8a0a\uff0c\u7d50\u679c\u5982\u4e0b\u5716"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ stern ithome\n...\nithome-6564f65698-zhwlj netutils Hello! 369 secs elapsed...\nithome-6564f65698-fglr9 netutils Hello! 369 secs elapsed...\nithome-6564f65698-947rv netutils Hello! 367 secs elapsed...\nithome-6564f65698-k5wtg netutils Hello! 368 secs elapsed...\nithome-6564f65698-rrvk4 netutils Hello! 369 secs elapsed...\nithome-6564f65698-zhwlj netutils Hello! 370 secs elapsed...\nithome-6564f65698-fglr9 netutils Hello! 370 secs elapsed...\nithome-6564f65698-947rv netutils Hello! 368 secs elapsed...\nithome-6564f65698-k5wtg netutils Hello! 370 secs elapsed...\nithome-6564f65698-rrvk4 netutils Hello! 370 secs elapsed...\nithome-6564f65698-zhwlj netutils Hello! 371 secs elapsed...\nithome-6564f65698-fglr9 netutils Hello! 371 secs elapsed...\nithome-6564f65698-947rv netutils Hello! 369 secs elapsed...\n\nithome-6564f65698-k5wtg netutils Hello! 371 secs elapsed...\nithome-6564f65698-rrvk4 netutils Hello! 371 secs elapsed...\nithome-6564f65698-zhwlj netutils Hello! 372 secs elapsed...\nithome-6564f65698-fglr9 netutils Hello! 372 secs elapsed...\n^C\n")),(0,o.kt)("p",null,"\u5be6\u969b\u4e0a\u89c0\u770b\u7684\u6642\u5019\uff0c\u4e0d\u540c Pod \u7684\u540d\u7a31\u9084\u6703\u6709\u4e0d\u540c\u7684\u984f\u8272\u6a19\u8a3b\uff0c\u5e6b\u52a9\u4f7f\u7528\u8005\u66f4\u5feb\u7684\u5340\u5225\u9019\u4e9b\u6587\u5b57\u3002"),(0,o.kt)("h1",{id:"k9s"},"K9S"),(0,o.kt)("p",null,"\u904e\u5f80\u7e3d\u662f\u900f\u904e kubectl \u6307\u4ee4\u65bc\u5404\u500b\u8cc7\u6e90\uff0c\u5404 namespace \u9593\u5207\u4f86\u5207\u53bb\uff0c\u7279\u5225\u662f\u8981\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"exec, get, describe, logs, delete")," \u7b49\u6307\u4ee4\u6642\uff0c\u5e38\u5e38\u6253\u7684\u624b\u5fd9\u8173\u4e82\u6216\u662f\u89ba\u5f97\u5fc3\u7d2f\uff0c\u6709\u9019\u7a2e\u56f0\u64fe\u7684\u4eba\u53ef\u4ee5\u8003\u616e\u4f7f\u7528\u770b\u770b k9s \u9019\u500b\u5de5\u5177"),(0,o.kt)("p",null,"K9s \u5b98\u7db2\u4ecb\u7d39"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"K9s provides a terminal UI to interact with your Kubernetes clusters. The aim of this project is to make it easier to navigate, observe and manage your applications in the wild. K9s continually watches Kubernetes for changes and offers subsequent commands to interact with your observed resources.")),(0,o.kt)("p",null,"\u57fa\u672c\u4e0a\u5c31\u662f\u57fa\u65bc Terminal \u53bb\u63d0\u4f9b\u4e00\u500b\u53cb\u5584\u7684\u64cd\u4f5c\u756b\u9762\uff0c\u8b93\u4f60\u53ef\u4ee5\u900f\u904e\u9375\u76e4\u4f86\u8f15\u9b06\u7684\u5b8c\u6210\u4e0a\u9762\u63d0\u5230\u7684\u4e8b\u60c5\uff0c\u4e0d\u8ad6\u662f\u5207\u63db namespace, \u780d\u6389\u8cc7\u6e90\uff0c\u57f7\u884c Shell, \u89c0\u770b log \u7b49\u90fd\u53ef\u4ee5\u8f15\u9b06\u9054\u6210\u3002"),(0,o.kt)("h2",{id:"\u4f7f\u7528-1"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u4e0a\u8ff0\u4e94\u500b pod \u7684\u7bc4\u4f8b\u900f\u904e k9s \u57f7\u884c\u5f8c\u53ef\u4ee5\u5f97\u5230\u4e0b\u9762\u7684\u756b\u9762\uff0c\u756b\u9762\u4e2d\u53ef\u4ee5\u6e05\u695a\u5730\u770b\u5230"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Pod \u7684\u540d\u7a31"),(0,o.kt)("li",{parentName:"ol"},"\u6709\u6c92\u6709\u958b Port-Forward"),(0,o.kt)("li",{parentName:"ol"},"\u7576\u524d Continers's READY \u72c0\u614b"),(0,o.kt)("li",{parentName:"ol"},"\u7576\u524d Pod \u72c0\u614b"),(0,o.kt)("li",{parentName:"ol"},"\u7576\u524d IP"),(0,o.kt)("li",{parentName:"ol"},"\u904b\u884c\u7bc0\u9ede\u8cc7\u8a0a"),(0,o.kt)("li",{parentName:"ol"},"\u5b58\u6d3b\u6642\u9593\n\u9019\u4e9b\u6307\u4ee4\u5176\u5be6\u90fd\u53ef\u4ee5\u7528 kubectl \u7372\u5f97\uff0c\u4f46\u662f\u64cd\u4f5c\u8d77\u4f86\u53ef\u80fd\u5c31\u76f8\u5c0d\u7e41\u7463\uff0c\u9700\u8981\u6bd4\u8f03\u591a\u7684\u6307\u4ee4")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/eOMBFcw.png",alt:null})),(0,o.kt)("p",null,"\u6b64\u5916\u756b\u9762\u4e0a\u65b9\u9084\u6703\u6709\u4e00\u4e9b\u57fa\u672c\u8cc7\u8a0a\uff0c\u8b6c\u5982 Context/Cluster/User \u7b49 Kubeconfig \u5167\u7684\u8cc7\u8a0a\uff0c\u53f3\u908a\u9084\u6709\u53ef\u4ee5\u4f7f\u7528\u7684\u5feb\u6377\u9375\uff0c\u9664\u4e86\u4e0a\u8ff0\u63d0\u5230\u7684\u529f\u80fd\u4e4b\u5916\uff0c\u9084\u53ef\u4ee5\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"port-forward")," \u4f86\u4f7f\u7528\uff0c\u500b\u4eba\u89ba\u5f97\u76f8\u7576\u4e0d\u932f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/yNScI5K.png",alt:null})),(0,o.kt)("p",null,"\u4e00\u8def\u5f80\u4e0b\u9ede\u9078\u5f8c\uff0c\u9084\u53ef\u4ee5\u770b\u5230\u6bcf\u500b Pod \u88e1\u9762\u6bcf\u500b Container \u5404\u81ea\u7684 log, \u4f7f\u7528\u4e0a\u975e\u5e38\u65b9\u4fbf\uff0c\u904e\u5f80\u6709\u591a\u500b containers \u7684\u6642\u5019\u90fd\u8981\u65bc ",(0,o.kt)("inlineCode",{parentName:"p"},"kubectl logs -f $Pod_name -c $container_name")," \u4f86\u8b80\u53d6\uff0c\u7279\u5225\u662f\u6c92\u6709\u4ed4\u7d30\u53bb\u770b Pod \u7684\u8a2d\u5b9a\u90fd\u6703\u5fd8\u8a18 Container Name\uff0c\u9019\u6642\u5019\u53c8\u8981\u518d\u8dd1\u5225\u7684\u6307\u4ee4\u67e5\u8a62\u4e00\u6b21\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/GetTetQ.png",alt:null})),(0,o.kt)("p",null,"\u900f\u904e k9s \u9019\u5de5\u5177\u53ef\u4ee5\u63d0\u4f9b\u4e00\u500b\u6eff\u4e0d\u932f\u7684\u8996\u7a97\u7ba1\u7406\u5de5\u5177\uff0c\u8b93\u4f60\u4e00\u76ee\u4e86\u7136 kubernetes \u7576\u524d\u7684\u72c0\u614b\uff0c\u4e26\u4e14\u63d0\u4f9b\u57fa\u672c\u529f\u80fd\u8b93\u4f60\u9032\u884c\u64cd\u4f5c"),(0,o.kt)("h1",{id:"ksniff"},"Ksniff"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u8981\u4ecb\u7d39\u7684\u662f\u4e00\u500b\u6293\u53d6\u7db2\u8def\u5c01\u5305\u7684\u5de5\u5177\uff0c\u904e\u5f80\u6211\u5011\u5206\u6790\u5c01\u5305\u7684\u6642\u5019\u90fd\u6703\u4f7f\u7528 tcpdupm \u6216\u662f wireshark \u9019\u4e9b\u5de5\u5177\u4f86\u8f14\u52a9\uff0c\u800c Ksniff \u5c31\u662f\u4e00\u500b\u5c07\u9019\u4e9b\u5de5\u5177\u6574\u5408\u5230 Kubernetes \u7cfb\u7d71\u5167\u7684\u5de5\u5177"),(0,o.kt)("p",null,"Ksniff \u7684\u4ecb\u7d39\u5982\u4e0b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A kubectl plugin that utilize tcpdump and Wireshark to start a remote capture on any pod in your Kubernetes cluster."),(0,o.kt)("p",{parentName:"blockquote"},"You get the full power of Wireshark with minimal impact on your running pods.")),(0,o.kt)("p",null,"\u57fa\u672c\u4e0a\u672c\u8eab\u4e5f\u662f\u4e00\u500b kubectl \u7684 plugin \uff0c\u6240\u4ee5\u4e5f\u662f\u53ef\u4ee5\u900f\u904e\u524d\u8ff0\u7684 krew \u4f86\u5b89\u88dd\u7ba1\u7406\u3002\u9019\u908a\u5c31\u4e0d\u518d\u8d05\u8ff0\u5176\u5b89\u88dd\u904e\u7a0b"),(0,o.kt)("h2",{id:"\u4f7f\u7528-2"},"\u4f7f\u7528"),(0,o.kt)("p",null,"\u5176\u4f7f\u7528\u4e0a\u7684\u6982\u5ff5\u662f\uff0c\u9078\u64c7\u4e00\u500b\u60f3\u8981\u89c0\u5bdf\u7684 Pod\uff0c\u7136\u5f8c Ksniff \u9019\u500b\u5de5\u5177\u6703\u5617\u8a66\u5e6b\u4f60\u5c07 tcpdump \u7684\u57f7\u884c\u6a94\u6848\u7d66\u8907\u88fd\u5230\u8a72 Pod\u7684\u67d0\u500b Container \u88e1\u9762(\u9810\u8a2d\u662f\u7b2c\u4e00\u500b)\uff0c\u63a5\u4e0b\u4f86\u6839\u64da\u4f60\u7684\u53c3\u6578\u5e6b\u4f60\u904b\u884c tcpdump\uff0c\u6700\u5f8c\u5c07\u7d50\u679c\u8907\u88fd\u51fa\u4f86\u5230\u672c\u6a5f\u4e0a\u9762\u7684 wireshark \u4f86\u5448\u73fe\u3002"),(0,o.kt)("p",null,"\u4f46\u662f\u5047\u5982\u7cfb\u7d71\u4e2d\u6c92\u6709 wireshark \u53ef\u4ee5\u5448\u73fe\u9019\u4e9b\u7d50\u679c\uff0c\u53ef\u4ee5\u6539\u7528\u547d\u4ee4\u5217\u7684\u5de5\u5177\uff0c\u8b6c\u5982 tshark \u4f86\u53d6\u4ee3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo apt install tshark\n$ kubectl sniff ithome-6564f65698-947rv -o - | tshark -r -\n$ kubectl sniff ithome-6564f65698-947rv -o - | tshark -r -\nINFO[0000] sniffing method: upload static tcpdump\nINFO[0000] using tcpdump path at: '/home/ubuntu/.krew/store/sniff/v1.4.2/static-tcpdump'\nINFO[0000] no container specified, taking first container we found in pod.\nINFO[0000] selected container: 'netutils'\nINFO[0000] sniffing on pod: 'ithome-6564f65698-947rv' [namespace: 'default', container: 'netutils', filter: '', interface: 'any']\nINFO[0000] uploading static tcpdump binary from: '/home/ubuntu/.krew/store/sniff/v1.4.2/static-tcpdump' to: '/tmp/static-tcpdump'\nINFO[0000] uploading file: '/home/ubuntu/.krew/store/sniff/v1.4.2/static-tcpdump' to '/tmp/static-tcpdump' on container: 'netutils'\nINFO[0000] executing command: '[/bin/sh -c ls -alt /tmp/static-tcpdump]' on container: 'netutils', pod: 'ithome-6564f65698-947rv', namespace: 'default'\nINFO[0000] command: '[/bin/sh -c ls -alt /tmp/static-tcpdump]' executing successfully exitCode: '0', stdErr :''\nINFO[0000] file found: '-rwxr-xr-x 1 root root 2696368 Jan  1  1970 /tmp/static-tcpdump\n'\nINFO[0000] file was already found on remote pod\nINFO[0000] tcpdump uploaded successfully\nINFO[0000] output file option specified, storing output in: '-'\nINFO[0000] start sniffing on remote container\nINFO[0000] executing command: '[/tmp/static-tcpdump -i any -U -w - ]' on container: 'netutils', pod: 'ithome-6564f65698-947rv', namespace: 'default'\n\n")),(0,o.kt)("p",null,"\u5f9e\u4e0a\u9762\u53ef\u4ee5\u89c0\u5bdf\u5230\u9019\u4e9b\u8cc7\u8a0a\u5c31\u4ee3\u8868\u7cfb\u7d71\u958b\u59cb\u904b\u884c\u4e86\uff0c\u9019\u6642\u5019\u6211\u5011\u53ef\u4ee5\u958b\u555f\u7b2c\u4e8c\u500b\u8996\u7a97\uff0c\u9032\u5165\u5230\u8a72 Container \u5167\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"ping 8.8.8.8")," \u5f80\u5916\u9001\u5c01\u5305\uff0c\u4e26\u4e14\u89c0\u5bdf\u4e0a\u8ff0\u7684\u8f38\u51fa"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ kubectl exec ithome-6564f65698-947rv -- ping 8.8.8.8\nPING 8.8.8.8 (8.8.8.8) 56(84) bytes of data.\n64 bytes from 8.8.8.8: icmp_seq=1 ttl=97 time=9.42 ms\n64 bytes from 8.8.8.8: icmp_seq=2 ttl=97 time=9.44 ms\n64 bytes from 8.8.8.8: icmp_seq=3 ttl=97 time=9.36 ms\n...\n------\n$ kubectl sniff ithome-6564f65698-947rv -o - | tshark -r -\n...\n    2  38.393757   10.244.1.8 \u2192 8.8.8.8      ICMP 100 Echo (ping) request  id=0x04f5, seq=1/256, ttl=64\n    3  38.403163      8.8.8.8 \u2192 10.244.1.8   ICMP 100 Echo (ping) reply    id=0x04f5, seq=1/256, ttl=97 (request in 2)\n    4  39.394274   10.244.1.8 \u2192 8.8.8.8      ICMP 100 Echo (ping) request  id=0x04f5, seq=2/512, ttl=64\n    5  39.403697      8.8.8.8 \u2192 10.244.1.8   ICMP 100 Echo (ping) reply    id=0x04f5, seq=2/512, ttl=97 (request in 4)\n    6  40.395882   10.244.1.8 \u2192 8.8.8.8      ICMP 100 Echo (ping) request  id=0x04f5, seq=3/768, ttl=64\n    7  40.405230      8.8.8.8 \u2192 10.244.1.8   ICMP 100 Echo (ping) reply    id=0x04f5, seq=3/768, ttl=97 (request in 6)\n    8  41.397387   10.244.1.8 \u2192 8.8.8.8      ICMP 100 Echo (ping) request  id=0x04f5, seq=4/1024, ttl=64\n...\n")),(0,o.kt)("p",null,"\u53ef\u4ee5\u770b\u5230\u53e6\u5916\u4e00\u500b\u8996\u7a97\u5f88\u53ca\u6642\u5730\u5c07\u76f8\u95dc\u7684\u5c01\u5305\u5167\u5bb9\u90fd\u7d66\u986f\u793a\u51fa\u4f86\u3002"),(0,o.kt)("p",null,"\u6211\u8a8d\u70ba\u9019\u500b\u5de5\u5177\u6700\u65b9\u4fbf\u7684\u5730\u65b9\u5c31\u662f\u5e6b\u4f60\u4e0a\u50b3 tcpdump \u7684\u6a94\u6848\uff0c\u56e0\u70ba\u5927\u90e8\u5206\u7684 Container \u5167\u5efa\u90fd\u6c92\u6709\u9019\u500b\u57f7\u884c\u6a94\u6848\uff0c\u751a\u81f3\u4e5f\u4e0d\u597d\u5b89\u88dd\uff0c\u6240\u4ee5\u8981\u9304\u88fd\u5c01\u5305\u7684\u6642\u5019\u90fd\u4e0d\u592a\u65b9\u4fbf\uff0c\u7136\u800c\u900f\u904e\u9019\u500b\u5de5\u5177\u53ef\u4ee5\u5e6b\u5fd9\u89e3\u6c7a\u9019\u500b\u554f\u984c"),(0,o.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\u9084\u6709\u5f88\u591a\u6709\u8da3\u597d\u7528\u7684\u5de5\u5177\uff0c\u5c31\u7559\u5f85\u5927\u5bb6\u81ea\u5df1\u6316\u6398\u56c9"))}m.isMDXComponent=!0}}]);