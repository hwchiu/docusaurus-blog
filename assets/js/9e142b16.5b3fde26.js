"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[83457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(r),g=o,k=c["".concat(u,".").concat(g)]||c[g]||m[g]||l;return r?n.createElement(k,a(a({ref:t},s),{},{components:r})):n.createElement(k,a({ref:t},s))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=g;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},11182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const l={title:"GitOps \u89e3\u6c7a\u65b9\u6848\u6bd4\u8f03",sidebar_position:21,tags:["iThome","GitOps","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},a="\u524d\u8a00",i={unversionedId:"techPost/2021/iThome_Challenge/day21",id:"techPost/2021/iThome_Challenge/day21",title:"GitOps \u89e3\u6c7a\u65b9\u6848\u6bd4\u8f03",description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2021/iThome_Challenge/day21.md",sourceDirName:"techPost/2021/iThome_Challenge",slug:"/techPost/2021/iThome_Challenge/day21",permalink:"/docs/techPost/2021/iThome_Challenge/day21",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"GitOps",permalink:"/docs/tags/git-ops"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"},{label:"Rancher",permalink:"/docs/tags/rancher"}],version:"current",sidebarPosition:21,frontMatter:{title:"GitOps \u89e3\u6c7a\u65b9\u6848\u6bd4\u8f03",sidebar_position:21,tags:["iThome","GitOps","Kubernetes","Rancher"],description:"iThome-2021 \u7cfb\u5217\u6587\u7ae0"},sidebar:"techPost",previous:{title:"\u521d\u63a2 GitOps \u7684\u6982\u5ff5",permalink:"/docs/techPost/2021/iThome_Challenge/day20"},next:{title:"Rancher Fleet \u67b6\u69cb\u4ecb\u7d39",permalink:"/docs/techPost/2021/iThome_Challenge/day22"}},u={},p=[],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,o.kt)("p",null,"\u524d\u7bc7\u6587\u7ae0\u63a2\u8a0e\u4e86\u57fa\u672c\u7684 GitOps \u6982\u5ff5\uff0cGitOps \u672c\u8eab\u6c92\u6709\u56b4\u8b39\u660e\u78ba\u7684\u5be6\u4f5c\u8207\u5b9a\u7fa9\uff0c\u6240\u4ee5\u4efb\u4f55\u5ba3\u7a31\u7b26\u5408 GitOps \u5de5\u4f5c\u6d41\u7a0b\u7684\u89e3\u6c7a\u65b9\u6848\u5176\u5be6\u4f5c\u65b9\u5f0f\u8207\u4f7f\u7528\u65b9\u6709\u53ef\u80fd\u4e26\u4e0d\u76f8\u540c\u3002"),(0,o.kt)("p",null,"\b\u672c\u6587\u5c07\u63a2\u8a0e\u6578\u500b\u5e38\u898b\u7684 GitOps \u89e3\u6c7a\u65b9\u6848\uff0c\u91dd\u5c0d\u5176\u57fa\u672c\u6982\u5ff5\u9032\u884c\u7814\u7a76\uff0c\u4e00\u65e6\u5c0d\u9019\u4e9b\u89e3\u6c7a\u65b9\u6848\u90fd\u6709\u4e86\u57fa\u672c\u8a8d\u77e5\u5f8c\uff0c\u5c31\u53ef\u4ee5\u66f4\u5feb\u7684\u7406\u89e3 Rancher Fleet \u9019\u5957\u7531 Rancher v2.5 \u5f8c\u4e3b\u63a8\u7684 GitOps \u89e3\u6c7a\u65b9\u6848\u662f\u4ec0\u9ebc\uff0c\u8a72\u600e\u9ebc\u4f7f\u7528\u3002"),(0,o.kt)("h1",{id:"kubestack"},"KubeStack"),(0,o.kt)("p",null,"GitOps \u4e26\u4e0d\u662f\u5c08\u5c6c\u65bc Kubernetes \u7684\u7522\u7269\uff0c\u4efb\u4f55\u67b6\u69cb\u8207\u5c08\u6848\u90fd\u6709\u6a5f\u6703\u63a1\u7528 GitOps \u7684\u6982\u5ff5\u4f86\u5be6\u4f5c\u3002\nKubeStack \u662f\u76ee\u524d\u6975\u70ba\u5c11\u6578\u975e Kubernetes \u61c9\u7528\u7a0b\u5f0f\u7684 GitOps \u89e3\u6c7a\u65b9\u6848\uff0c\u5b98\u7db2\u5ba3\u7a31\u662f\u4e00\u500b\u5c08\u6ce8\u65bc Infrastructure \u7684 GitOps \u6846\u67b6\u3002\u8a72\u67b6\u69cb\u57fa\u65bc Terraform \u53bb\u767c\u5c55\uff0c\u56e0\u6b64 KubeStack \u7684\u4f7f\u7528\u8005\u5be6\u969b\u4e0a\u9084\u662f\u64b0\u5beb Terraform \uff0c\u4f7f\u7528 Terraform \u7684\u8a9e\u8a00\u3002 KubeStack \u91dd\u5c0d Terraform \u767c\u5c55\u4e86\u5169\u5957\u4e0d\u540c\u7684 Terraform Module\uff0c\u5206\u5225\u662f Cluster Module \u4ee5\u53ca Cluster Service Module\u3002"),(0,o.kt)("p",null,"Cluster Module \u8b93\u4f7f\u7528\u8005\u53ef\u4ee5\u65b9\u4fbf\u7684\u53bb\u7ba1\u7406 Kubernetes \u53e2\u96c6\uff0c\u8a72\u53e2\u96c6\u53ef\u4ee5\u5f88\u8f15\u9b06\u7684\u53bb\u6307\u5b9a\u60f3\u8981\u5efa\u7acb\u65bc\u54ea\u7a2e\u96f2\u7aef\u67b6\u69cb\u4e0a\uff0c\u900f\u904e KubeStack \u4f7f\u7528\u8005\u4e5f\u53ef\u4ee5\u5f88\u5bb9\u6613\u7684\u91dd\u5c0d\u4e0d\u540c\u5730\u5340\u4e0d\u7ba1\u96f2\u7aef\u67b6\u69cb\u4f86\u642d\u5efa\u591a\u5957\u7684 Kubernetes \u53e2\u96c6\u3002\n\u5176\u5be6\u6574\u9ad4\u6982\u5ff5\u6eff\u985e\u4f3c Rancher \u7684\uff0c\u53ea\u4e0d\u904e\u9019\u908a\u662f\u4f9d\u8cf4 Terraform \u4f86\u7ba1\u7406\u8207\u591a\u500b\u96f2\u7aef\u67b6\u69cb\u7684\u6574\u5408\uff0c\u540c\u6642 Kubernetes \u53e2\u96c6\u4e5f\u6703\u63a1\u7528\u539f\u751f\u7248\u672c\u6216\u662f Kubernetes \u7ba1\u7406\u670d\u52d9\u7684\u7248\u672c\u3002"),(0,o.kt)("p",null,"Cluster Service Module \u76ee\u7684\u662f\u7528\u4f86\u5275\u9020 Kubernetes \u76f8\u95dc\u8cc7\u6e90\uff0c\u6240\u4ee5\u4f7f\u7528\u4e0a\u6703\u5148\u900f\u904e Cluster Module \u5275\u5efa Kubernetes \u53e2\u96c6\uff0c\u63a5\u8005\u900f\u904e Cluster Service Module \u90e8\u7f72\u76f8\u95dc\u670d\u52d9\u3002\nCluster Service Module \u7684\u76ee\u7684\u4e26\u4e0d\u662f\u90e8\u7f72\u5404\u7a2e\u5718\u968a\u7684\u5546\u696d\u908f\u8f2f\u670d\u52d9\uff0c\u76f8\u53cd\u7684\uff0c\u5176\u76ee\u7684\u662f\u5247\u662f\u90e8\u7f72\u524d\u7f6e\u4f5c\u696d\uff0c\u4efb\u4f55\u771f\u6b63\u90e8\u7f72\u524d\u9700\u8981\u7528\u5230\u7684\u670d\u52d9\u90fd\u6703\u900f\u904e\u9019\u500b Module \u4f86\u8655\u7406\u3002\u9810\u8a2d\u60c5\u6cc1\u4e0b KubeStack \u6709\u63d0\u4f9b Catalog \u6e05\u55ae\u4f86\u63d0\u4f9b\u9810\u8a2d\u63d0\u4f9b\u7684\u670d\u52d9\uff0c\u5305\u542b\u4e86"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ArgoCD/Flux"),(0,o.kt)("li",{parentName:"ol"},"Cert-Manager"),(0,o.kt)("li",{parentName:"ol"},"Sealed Secrets"),(0,o.kt)("li",{parentName:"ol"},"Nginx Ingress"),(0,o.kt)("li",{parentName:"ol"},"Tekton"),(0,o.kt)("li",{parentName:"ol"},"PostgreSQL Operator"),(0,o.kt)("li",{parentName:"ol"},"Prometheus Operator")),(0,o.kt)("p",null,"\u800c\u524d\u8ff0\u5169\u500b\u5247\u662f\u91dd\u5c0d kubernetes \u61c9\u7528\u7a0b\u5f0f\u7684 GitOps \u89e3\u6c7a\u65b9\u6848\u3002"),(0,o.kt)("p",null,"KubeStack \u7684\u4f7f\u7528\u65b9\u5f0f\u662f\u63a1\u7528\u524d\u8ff0\u63a2\u8a0e\u7684\u7b2c\u4e00\u7a2e\u5be6\u4f5c\uff0c\u5718\u968a\u9700\u8981\u6e96\u5099\u4e00\u500b\u5c08\u5c6c\u7684 CI/CD Pipeline\uff0c\u5176\u5167\u900f\u904e\u547c\u53eb Terraform \u7684\u65b9\u5f0f\u4f86\u5b8c\u6210\u6574\u500b\u66f4\u65b0\u7684\u6d41\u7a0b\uff0c\u5c0d\u65bc KubeStack \u6709\u8208\u8da3\u7684\u53ef\u4ee5\u53c3\u95b1\u5176\u5b98\u7db2\u3002"),(0,o.kt)("h1",{id:"argocdflux"},"ArgoCD/Flux"),(0,o.kt)("p",null,"\u63a2\u8a0e\u5230\u958b\u6e90\u4e14\u91dd\u5c0d Kubernetes \u61c9\u7528\u7a0b\u5f0f\u90e8\u7f72\u7684\u89e3\u6c7a\u65b9\u6848\u6642\uff0c\u76ee\u524d\u6700\u77e5\u540d\u7684\u83ab\u904e\u65bc ArgoCD \u4ee5\u53ca Flux\u3002"),(0,o.kt)("p",null,"ArgoCD \u672c\u8eab\u7684\u751f\u614b\u7cfb\u975e\u5e38\u8c50\u5bcc\uff0c\u8a72\u54c1\u724c\u5e95\u4e0b\u6709\u5404\u5f0f\u5404\u6a23\u4e0d\u540c\u7684\u5c08\u6848\uff0c\u5c08\u6ce8\u65bc\u4e0d\u540c\u529f\u80fd\uff0c\u800c\u9019\u4e9b\u529f\u80fd\u53c8\u6709\u6a5f\u6703\u5f7c\u6b64\u4e92\u76f8\u6574\u5408\uff0c\u8b6c\u5982"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"ArgoCD"),(0,o.kt)("li",{parentName:"ol"},"Argo Workflow"),(0,o.kt)("li",{parentName:"ol"},"Argo RollOut")),(0,o.kt)("p",null,"ArgoCD \u662f\u5c08\u6ce8\u65bc GitOps \u7684\u89e3\u6c7a\u65b9\u6848\uff0c Argo Workflow \u662f\u5957 Multi-Stage \u7684 pipeline \u89e3\u6c7a\u65b9\u6848\uff0c\u800c Argo Rollout \u5247\u662f\u5e0c\u671b\u80fd\u5920\u91dd\u5c0d Kubernetes \u63d0\u4f9b\u4e0d\u540c\u7b56\u7565\u7684\u90e8\u7f72\u65b9\u5f0f\uff0c\u8b6c\u5982\u85cd\u7da0\u90e8\u7f72\uff0c\u91d1\u7d72\u96c0\u90e8\u7f72\u7b49\uff0c\u9019\u4e9b\u90fd\u662f Kubernetes \u539f\u751f\u4e0d\u65b9\u4fbf\u5be6\u4f5c\u7684\u7b56\u7565\u3002"),(0,o.kt)("p",null,"ArgoCD \u63a1\u7528\u7684\u662f\u7b2c\u4e8c\u7a2e\u5be6\u4f5c\u65b9\u5f0f\uff0c\u9700\u8981\u65bc Kubernetes \u5167\u5b89\u88dd ArgoCD \u89e3\u6c7a\u65b9\u6848\uff0c\u8a72\u89e3\u6c7a\u65b9\u6848\u5927\u81f4\u4e0a\u6703\u65bc\u53e2\u96c6\u5167\u5b89\u88dd"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Argo API Server"),(0,o.kt)("li",{parentName:"ol"},"Argo Controller"),(0,o.kt)("li",{parentName:"ol"},"Dex Server"),(0,o.kt)("li",{parentName:"ol"},"Repository Service")),(0,o.kt)("p",null,"\u4ee5\u4e0b\u67b6\u69cb\u5716\u4f86\u81ea\u65bc",(0,o.kt)("a",{parentName:"p",href:"https://argo-cd.readthedocs.io/en/stable/"},"\u5b98\u65b9\u7db2\u7ad9"),"\n",(0,o.kt)("img",{parentName:"p",src:"https://i.imgur.com/VdVPq84.png",alt:null})),(0,o.kt)("p",null,"Argo Controller/Repository Service \u662f\u6574\u500b GitOps \u7684\u6838\u5fc3\u529f\u80fd\uff0c\u80fd\u5920\u5075\u6e2c Git \u5c08\u6848\u7684\u8b8a\u52d5\u4e26\u4e14\u57fa\u65bc\u9019\u4e9b\u8b8a\u52d5\u53bb\u6bd4\u8f03\u7576\u524d Kubernetes \u5167\u7684\u5373\u6642\u72c0\u614b\u662f\u5426\u7b26\u5408 Git \u5167\u7684\u671f\u671b\u72c0\u614b\uff0c\u4e26\u4e14\u5617\u8a66\u66f4\u65b0\u4ee5\u7b26\u5408\u9700\u6c42\u3002\nArgo API Server \u5247\u662f\u63d0\u4f9b\u4e00\u5c64 API \u4ecb\u9762\uff0c\u8b93\u5916\u754c\u4f7f\u7528\u8005\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u65b9\u5f0f\u4f86\u64cd\u4f5c ArgoCD \u89e3\u6c7a\u65b9\u6848\uff0c\u8b6c\u5982 CLI, WebUI \u7b49\u3002"),(0,o.kt)("p",null,"ArgoCD \u5b89\u88dd\u5b8c\u7562\u5f8c\u5c31\u6703\u63d0\u4f9b\u4e00\u500b\u65b9\u5f0f\u53bb\u5b58\u53d6\u5176\u7ba1\u7406\u7db2\u9801\uff0c\u5927\u90e8\u5206\u7684\u4f7f\u7528\u8005\u90fd\u6703\u900f\u904e\u8a72\u7ba1\u7406\u7db2\u9801\u4f86\u64cd\u4f5c\u6574\u500b ArgoCD\uff0c\u8a72\u4ecb\u9762\u7684\u64cd\u4f5c\u7b26\u5408\u4e0d\u540c\u9700\u6c42\u7684\u4f7f\u7528\u8005\uff0c\u8b6c\u5982 PM \u60f3\u8981\u7406\u89e3\u7576\u524d\u5c08\u6848\u90e8\u7f72\u72c0\u614b\u6216\u662f\u958b\u767c\u8005\u60f3\u8981\u900f\u904e\u7db2\u9801\u4f86\u9032\u884c\u4e00\u4e9b\u90e8\u7f72\u64cd\u4f5c\u90fd\u53ef\u4ee5\u900f\u904e\u8a72\u7db2\u9801\u5b8c\u6210\u3002\n\u70ba\u4e86\u8b93 ArgoCD \u53ef\u4ee5\u66f4\u5bb9\u6613\u7684\u652f\u63f4\u4e0d\u540c\u5e33\u6236\u7684\u767b\u5165\u8207\u6b0a\u9650\u7ba1\u7406\uff0c\u5176\u5e95\u5c64\u6703\u9810\u5148\u5b89\u88dd Dex \u9019\u5957 OpenID Connector \u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u4f7f\u7528\u8005\u53ef\u4ee5\u6eff\u5bb9\u6613\u5730\u5c07 LDAP/OAuth/Github \u7b49\u5e33\u865f\u7fa4\u7d44\u8207 ArgoCD \u6574\u5408\uff0c\u63a5\u8005\u900f\u904e\u7fa4\u7d44\u7684\u65b9\u5f0f\u4f86\u9032\u884c\u6b0a\u9650\u63a7\u7ba1\u3002"),(0,o.kt)("p",null,"\u61c9\u7528\u7a0b\u5f0f\u7684\u5ba2\u88fd\u5316\u4e5f\u652f\u63f4\u4e0d\u5c11\uff0c\u8b6c\u5982\u539f\u751f\u7684 YAML\uff0cHelm, Kustomize \u7b49\uff0c\u9019\u610f\u5473\u8005\u5927\u90e8\u5206\u7684 kubernetes \u61c9\u7528\u7a0b\u5f0f\u90fd\u53ef\u4ee5\u900f\u904e ArgoCD \u4f86\u90e8\u7f72\u3002"),(0,o.kt)("p",null,"ArgoCD \u5927\u90e8\u5206\u7684\u4f7f\u7528\u8005\u4e00\u958b\u59cb\u90fd\u6703\u4f7f\u7528\u5176 UI \u9032\u884c\u64cd\u4f5c\u8207\u8a2d\u5b9a\uff0c\u4f46\u662f\u9019\u7a2e\u65b9\u5f0f\u57fa\u672c\u4e0a\u8207 Rancher \u6709\u4e00\u6a23\u7684\u554f\u984c"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"UI \u63d0\u4f9b\u7684\u529f\u80fd\u9060\u5c11\u65bc API \u672c\u8eab\uff0cUI \u4e0d\u80fd 100% \u767c\u63ee ArgoCD \u7684\u529f\u80fd"),(0,o.kt)("li",{parentName:"ol"},"\u8a2d\u5b9a\u4e0d\u6613\u4fdd\u5b58\uff0c\u4e0d\u5bb9\u6613\u5feb\u901f\u8907\u88fd\u4e00\u4efd\u4e00\u6a23\u7684 ArgoCD \u89e3\u6c7a\u65b9\u6848\uff0c\u7279\u5225\u662f\u7576\u6709\u707d\u96e3\u9084\u539f\u9700\u6c42\u6642\u3002")),(0,o.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0cArgoCD \u53ef\u4ee5\u7ba1\u7406\u591a\u5957 Kubernetes \u53e2\u96c6\uff0c\u9019\u610f\u5473\u4f60\u53ef\u4ee5\u65bc\u53e2\u96c6(A)\u4e2d\u5b89\u88dd ArgoCD\uff0c\u900f\u904e\u5176\u7ba1\u7406\u53e2\u96c6B,C,D\u3002\n\u7ba1\u7406\u7684\u529f\u80fd\u90fd\u53ef\u4ee5\u900f\u904e\u7db2\u9801\u7684\u65b9\u5f0f\u4f86\u64cd\u4f5c\uff0c\u4f46\u662f\u8981\u5982\u4f55\u8b93 ArgoCD \u6709\u80fd\u529b\u53bb\u5b58\u53d6\u53e2\u96c6 B,C,D\uff0c\u76f8\u95dc\u8a2d\u5b9a\u5247\u6c92\u8fa8\u6cd5\u900f\u904e\u7db2\u9801\u64cd\u4f5c\uff0c\u5fc5\u9808\u8981\u900f\u904e CLI \u6216\u662f\u4fee\u6539\u6700\u521d\u90e8\u7f72 ArgoCD\u6642\u7684 YAML \u6a94\u6848\u3002"),(0,o.kt)("p",null,"ArgoCD \u5be6\u969b\u4e0a\u65bc Kubernetes \u5167\u65b0\u589e\u4e86\u4e0d\u5c11 CRD(Custom Resource Definition)\uff0c\u4f7f\u7528\u8005\u65bc\u7db2\u9801\u4e0a\u7684\u6240\u6709\u8a2d\u5b9a\u90fd\u6703\u88ab\u8f49\u63db\u70ba\u4e00\u500b\u53c8\u4e00\u500b\u7684 Kubernetes \u7269\u4ef6\uff0c\u800c\u4e14 ArgoCD \u672c\u8eab\u7684\u90e8\u7f72\u4e5f\u662f\u4e00\u500b\u53c8\u4e00\u500b YAML \u6a94\u6848\uff0c\u56e0\u6b64\u5be6\u52d9\u4e0a\u89e3\u6c7a\u8a2d\u5b9a\u4e0d\u6613\u4fdd\u5b58\u7684\u65b9\u5f0f\u5c31\u662f \u300c\u8b93 ArgoCD \u900f\u904e GitOps \u7684\u65b9\u5f0f\u4f86\u7ba1\u7406 ArgoCD\u300d"),(0,o.kt)("p",null,"\u8a72\u5de5\u4f5c\u6d41\u7a0b\u5982\u4e0b(\u7bc4\u4f8b)"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c07\u6240\u6709\u5c0d ArgoCD \u7684\u8a2d\u5b9a\u8207\u64cd\u4f5c\u4ee5 YAML \u7684\u5f62\u5f0f\u4fdd\u5b58\u65bc\u4e00\u500b Git \u5c08\u6848\u4e2d"),(0,o.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u5b98\u65b9 Helm \u7684\u65b9\u5f0f\u53bb\u5b89\u88dd\u6700\u4e7e\u6de8\u7684 ArgoCD"),(0,o.kt)("li",{parentName:"ol"},"\u65bc ArgoCD \u7684\u7db2\u9801\u4e0a\u65b0\u589e\u4e00\u500b\u61c9\u7528\u7a0b\u5f0f\uff0c\u8a72\u61c9\u7528\u7a0b\u5f0f\u76ee\u6a19\u662f\u4f86\u81ea(1)\u7684 Git \u5c08\u6848"),(0,o.kt)("li",{parentName:"ol"},"ArgoCD \u6703\u5c07(1)\u5167\u7684 Git \u5167\u5bb9\u90fd\u90e8\u7f72\u5230 Kubernetes \u4e2d"),(0,o.kt)("li",{parentName:"ol"},"ArgoCD \u7db2\u9801\u4e0a\u5c31\u6703\u6162\u6162\u770b\u5230\u6240\u6709\u4e4b\u524d\u8a2d\u5b9a\u7684\u5167\u5bb9")),(0,o.kt)("p",null,"\u5982\u679c\u5c0d\u65bc ArgoCD \u6709\u8208\u8da3\u7684\u8b80\u8005\u53ef\u4ee5\u53c3\u8003\u6211\u958b\u8a2d\u7684\u7dda\u4e0a\u8ab2\u7a0b",(0,o.kt)("a",{parentName:"p",href:"https://hiskio.com/courses/490/about?promo_code=R3Y9O2E"},"kubernetes \u5be6\u4f5c\u624b\u518a\uff1a GitOps \u7248\u63a7\u6574\u5408\u7bc7\n"),"\uff0c\u8a72\u8ab2\u7a0b\u4e2d\u6703\u5be6\u969b\u8d70\u904e\u4e00\u6b21 ArgoCD \u5167\u7684\u5404\u7a2e\u64cd\u4f5c\u8207\u6ce8\u610f\u4e8b\u9805\uff0c\u4e26\u4e14\u6700\u5f8c\u4e5f\u6703\u63a2\u8a0e ArgoCD \u8207 Argo Rollout \u5982\u4f55\u6574\u5408\u8b93\u90e8\u7f72\u5718\u968a\u53ef\u4ee5\u7528\u91d1\u7d72\u96c0\u7b49\u65b9\u5f0f\u4f86\u90e8\u7f72\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,o.kt)("p",null,"\u4e0b\u7bc7\u6587\u7ae0\u5c31\u6703\u56de\u5230 Rancher \u5c08\u6848\u8eab\u4e0a\uff0c\u4f86\u63a2\u8a0e Rancher Fleet \u662f\u4ec0\u9ebc\uff0c\u5176\u57fa\u672c\u5143\u4ef6\u6709\u54ea\u4e9b\uff0c\u63a5\u8005\u6703\u8a73\u7d30\u7684\u4ecb\u7d39 Rancher Fleet \u7684\u7528\u6cd5\u3002"))}m.isMDXComponent=!0}}]);