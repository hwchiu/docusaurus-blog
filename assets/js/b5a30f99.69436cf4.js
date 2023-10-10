"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[26425],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=l,k=c["".concat(s,".").concat(d)]||c[d]||u[d]||r;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const r={title:"Kubernetes \u61c9\u7528\u6e2c\u8a66",sidebar_position:11,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:new Date("2020-11-26T01:13:17.000Z")},o=void 0,i={unversionedId:"techPost/2020/iThome_Challenge/cicd-11",id:"techPost/2020/iThome_Challenge/cicd-11",title:"Kubernetes \u61c9\u7528\u6e2c\u8a66",description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",source:"@site/docs/techPost/2020/iThome_Challenge/cicd-11.md",sourceDirName:"techPost/2020/iThome_Challenge",slug:"/techPost/2020/iThome_Challenge/cicd-11",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-11",draft:!1,tags:[{label:"iThome",permalink:"/docs/tags/i-thome"},{label:"DevOps",permalink:"/docs/tags/dev-ops"},{label:"Kubernetes",permalink:"/docs/tags/kubernetes"}],version:"current",sidebarPosition:11,frontMatter:{title:"Kubernetes \u61c9\u7528\u6e2c\u8a66",sidebar_position:11,tags:["iThome","DevOps","Kubernetes"],description:"iThome-2020 \u7cfb\u5217\u6587\u7ae0",date:"2020-11-26T01:13:17.000Z"},sidebar:"techPost",previous:{title:"CI \u8207 Kubernetes \u7684\u6574\u5408",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-10"},next:{title:"CI Pipeline x Kubernetes \u7d50\u8ad6",permalink:"/docs/techPost/2020/iThome_Challenge/cicd-12"}},s={},p=[{value:"Yamllint",id:"yamllint",level:2},{value:"Kubeeval",id:"kubeeval",level:2},{value:"Conftest",id:"conftest",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4eca\u5929\u6211\u5011\u4f86\u63a2\u8a0e\u5230\u5e95\u5728 CI \u904e\u7a0b\u4e2d\uff0c\u6211\u5011\u53ef\u4ee5\u5c0d Kubernetes \u61c9\u7528\u505a\u54ea\u4e9b\u6e2c\u8a66?"),(0,l.kt)("p",null,"\u6211\u8a8d\u70ba\u9019\u500b\u6e2c\u8a66\u5305\u542b\u4e86"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u61c9\u7528\u7a0b\u5f0f\u662f\u5426\u65bc Kuberentes \u5167\u904b\u4f5c\u5982\u9810\u671f"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Yaml \u7684\u8a71\uff0c\u5247 Yaml \u672c\u8eab\u683c\u5f0f\u662f\u5426\u6b63\u78ba"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528 Helm \u7684\u8a71\uff0c\u5247 Helm \u8981\u6c42\u7684\u5167\u5bb9\u8207\u683c\u5f0f\u662f\u5426\u6b63\u78ba")),(0,l.kt)("p",null,"\u800c\u4eca\u5929\u9019\u7bc7\u6587\u7ae0\u4e3b\u8981\u6703\u91dd\u5c0d (2),(3) \u5169\u500b\u90e8\u5206\u4f86\u9032\u884c\u7814\u7a76\u3002"),(0,l.kt)("p",null,"\u984c\u5916\u8a71\uff0c(2)(3) \u9019\u4e9b\u683c\u5f0f\u6aa2\u67e5\u7684\u90e8\u5206\u4e0d\u4e00\u5b9a\u8981 CI \u968e\u6bb5\u624d\u6aa2\u67e5\uff0c\u751a\u81f3\u53ef\u4ee5\u8ddf Git \u6574\u5408\uff0c Pre-commit \u968e\u6bb5\u5c31\u9032\u884c\u6aa2\u67e5\uff0c\u78ba\u4fdd\u6240\u6709\u958b\u767c\u8005\u63d0\u4ea4\u7684 Commit \u90fd\u5df2\u7d93\u901a\u904e\u9019\u4e9b\u6e2c\u8a66"),(0,l.kt)("h1",{id:"yaml-\u6e2c\u8a66"},"Yaml \u6e2c\u8a66"),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u63a2\u8a0e\u4e00\u4e0b Yaml \u9019\u683c\u5f0f\u672c\u8eab\u7684\u9a57\u8b49\uff0c\u9019\u90e8\u5206\u6709\u5169\u500b\u6982\u5ff5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Yaml \u683c\u5f0f\u7684\u6b63\u78ba\u6027")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Yaml \u5167\u5bb9\u7684\u5408\u7406\u6027"))),(0,l.kt)("p",null,"(1) \u56e0\u70ba\u78ba\u8a8d\u7684\u662f\u683c\u5f0f\u7684\u6b63\u78ba\u6027\uff0c\u6703\u91dd\u5c0d Yaml \u7684\u683c\u5f0f\u6aa2\u67e5\uff0c\u8b6c\u5982\u7e2e\u6392\uff0c\u96d9\u5f15\u865f\uff0c\u55ae\u5f15\u865f\u7b49\u9032\u884c\u6aa2\u67e5\uff0c\u9019\u90e8\u5206\u53ef\u4ee5\u900f\u904e lint \u7b49\u5de5\u5177\u5e6b\u5fd9\u6aa2\u67e5\uff0c\u540c\u6642\u4e5f\u53ef\u4ee5\u78ba\u4fdd\u5718\u968a\u5167\u7684\u4eba\u64c1\u6709\u4e00\u81f4\u64b0\u5beb Yaml \u7684\u7fd2\u6163\u8207\u683c\u5f0f\u3002 \u57fa\u672c\u4e0a\u4efb\u4f55 Yaml \u90fd\u53ef\u4ee5\u9032\u884c\u9019\u65b9\u9762\u6aa2\u67e5\uff0c\u4e0d\u8ad6\u662f Kubernetes Yaml, Helm \u6216\u662f\u5176\u4ed6\u7684\u5167\u5bb9\uff0c\u8b6c\u5982\u7d66 pipeline \u7cfb\u7d71\u7684 yaml, \u653e\u8a2d\u5b9a\u6a94\u6848\u7684 Yaml \u90fd\u53ef\u4ee5\u9019\u9ebc\u505a\u3002"),(0,l.kt)("p",null,"(2) \u56e0\u70ba\u78ba\u8a8d\u7684\u662f\u5408\u7406\u6027\uff0c\u6240\u4ee5\u5176\u5be6\u6703\u9700\u8981\u6709\u524d\u5f8c\u6587\u7684\u6982\u5ff5\uff0c\u8209\u4f8b\u4f86\u8aaa\uff0c\u4eca\u5929\u8981\u90e8\u7f72 Kubernetes Yaml\uff0c\u6211\u5011\u5c31\u53ef\u4ee5\u91dd\u5c0d Yaml \u7684\u5167\u5bb9\u53bb\u78ba\u8a8d\u662f\u5426\u7b26\u5408 Kubernetes \u7684\u7528\u6cd5\u3002"),(0,l.kt)("p",null,"\u8209\u4f8b\u4f86\u8aaa\uff0c\u4e0b\u5217\u662f\u4e00\u500b\u5408\u6cd5\u7684 Yaml \u6a94\u6848\uff0c\u4f46\u662f\u4e26\u4e0d\u662f\u4e00\u500b\u5408\u6cd5\u7684 Kubernetes Yaml\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.sigs.k8s.io/v1alpha3\nnodes:\n  - role: control-plane\n  - role: worker\n  - role: worker\n")),(0,l.kt)("p",null,"\u6240\u4ee5\u6211\u5011\u9700\u8981\u4e00\u4e9b\u65b9\u6cd5\u4f86\u5e6b\u6211\u5011\u9a57\u8b49\u6240\u6709\u7684 Yaml \u662f\u5426\u53ef\u4ee5\u6eff\u8db3 (1) \u8207 (2) \u5169\u7a2e\u60c5\u6cc1\uff0c\u56e0\u6b64\u63a5\u4e0b\u4f86\u6211\u5011\u5217\u51fa\u5e7e\u500b\u53ef\u80fd\u4f7f\u7528\u7684\u5de5\u5177\uff0c\u770b\u770b\u9019\u4e9b\u5de5\u5177\u600e\u9ebc\u4f7f\u7528\uff0c\u4ee5\u53ca\u4f7f\u7528\u4e0a\u7684\u6548\u679c"),(0,l.kt)("h2",{id:"yamllint"},"Yamllint"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/adrienverge/yamllint"},"yamllint")," \u5b98\u7db2\u4ecb\u7d39\u5982\u4e0b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A linter for YAML files."),(0,l.kt)("p",{parentName:"blockquote"},"yamllint does not only check for syntax validity, but for weirdnesses like key repetition and cosmetic problems such as lines length, trailing spaces, indentation, etc.")),(0,l.kt)("p",null,"\u9019\u500b\u5de5\u5177\u5c31\u662f\u5e6b\u5fd9\u6aa2\u67e5\u4e00\u4e9b\u5beb\u6cd5\uff0c\u4f46\u662f\u4e26\u6c92\u6709\u8a9e\u610f\u7684\u6aa2\u67e5\uff0c\u4e0d\u904e\u6703\u91dd\u5c0d\u4e00\u4e9b key \u91cd\u8907\u7684\u554f\u984c\u4e5f\u6307\u8b49\u51fa\u4f86\uff0c\u4ee5\u4e0b\u6709\u4e00\u4e9b\u7bc4\u4f8b"),(0,l.kt)("p",null,"\u9019\u908a\u662f\u4e00\u500b\u5b8c\u6574\u6c92\u932f\u8aa4\u7684 Yaml \u6a94\u6848"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.sigs.k8s.io/v1alpha3\nnodes:\n  - role: control-plane\n  - role: worker\n  - role: worker\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u5c0d\u5176\u4fee\u6539\uff0c\u8b6c\u5982\u52a0\u5165\u4e00\u500b\u91cd\u8907\u7684 Key, \u7136\u5f8c\u8b93\u5e95\u4e0b\u7684\u7e2e\u6392\u683c\u5f0f\u4e0d\u4e00\u81f4\uff0c\u9577\u9019\u6a23"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.sigs.k8s.io/v1alpha3\nnodes:\n  - role: control-plane\n  - role: worker\n- role: worker\nnodes: test\n")),(0,l.kt)("p",null,"\u9019\u7a2e\u60c5\u72c2\u4e0b\u6211\u5011\u4f7f\u7528 yamllint \u91dd\u5c0d\u9019\u500b\u6a94\u6848\u6aa2\u67e5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ yamllint kind.yaml\nkind.yaml\n  1:1       warning  missing document start "---"  (document-start)\n  6:1       error    syntax error: expected <block end>, but found \'-\'\n  7:1       error    duplication of key "nodes" in mapping  (key-duplicates)\n')),(0,l.kt)("p",null,"\u7b2c\u4e00\u884c\u4e3b\u8981\u662f\u8b66\u544a\uff0c\u63d0\u9192\u8981\u6709\u6587\u4ef6\u7684\u63cf\u8ff0\uff0c\u4f46\u662f\u4e0d\u5f71\u97ff\u904b\u884c\u3002"),(0,l.kt)("p",null,"\u5f8c\u9762\u5169\u884c\u5247\u662f\u4e0d\u540c\u7684\u932f\u8aa4\uff0c\u5206\u5225\u662f\u56e0\u70ba \u7b2c\u516d\u884c\u7684\u7e2e\u6392\u6709\u554f\u984c\uff0c\u4ee5\u53ca\u7b2c\u4e03\u884c\u7522\u751f\u4e00\u500b\u91cd\u8907 key \u800c\u5c0e\u81f4\u7684\u932f\u8aa4\u3002"),(0,l.kt)("p",null,"\u6b64\u5916\u8b6c\u5982\u5b57\u4e32\u96d9\u5f15\u865f/\u55ae\u5f15\u865f\u6c92\u6709\u6210\u96d9\u7b49\u985e\u578b\u932f\u8aa4\u4e5f\u90fd\u53ef\u4ee5\u627e\u5230\uff0c\u6709\u8208\u8da3\u7684\u4eba\u53ef\u4ee5\u53bb\u73a9\u73a9\u770b\u9019\u500b\u5de5\u5177"),(0,l.kt)("h2",{id:"kubeeval"},"Kubeeval"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/instrumenta/kubeval"},"kubeval")," \u5b98\u65b9\u4ecb\u7d39\u5982\u4e0b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"kubeval")," is a tool for validating a Kubernetes YAML or JSON configuration file. It does so using schemas generated from the Kubernetes OpenAPI specification, and therefore can validate schemas for multiple versions of Kubernetes.")),(0,l.kt)("p",null,"\u4e0b\u5217\u4e00\u500b\u5408\u6cd5\u7684 Kubernetes Yaml \u6a94\u6848"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: getting-started\nspec:\n  containers:\n  - name: getting-started\n    image: hwchiu/netutils\n")),(0,l.kt)("p",null,"\u6211\u5011\u53ef\u4ee5\u5148\u7528 kubeeval \u8dd1\u770b\u770b\uff0c\u63a5\u4e0b\u4f86\u6211\u5011\u5728\u4fee\u6539\u9019\u500b\u6a94\u6848\u4f86\u8a66\u8a66\u770b\u6703\u6709\u4ec0\u9ebc\u6a23\u7684\u932f\u8aa4"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kubeval pod.yaml\nPASS - pod.yaml contains a valid Pod (getting-started)\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u4fee\u6539 Yaml \u6a94\u6848\uff0c\u4f86\u9032\u884c\u4e00\u4e9b\u4fee\u6539\u8b93\u4ed6\u4e0d\u5408\u683c\uff0c\u8b6c\u5982\u5c11\u7d66\u4e00\u4e9b\u6b04\u4f4d\uff0c\u6216\u662f\u591a\u7d66\u4e00\u4e9b\u6b04\u4f4d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: getting-started\nspec:\n  ithome: ironman\n")),(0,l.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u4e00\u500b\u4e0d\u5408\u683c\u7684 Pod Yaml, \u9996\u5148\u591a\u4e00\u500b ",(0,l.kt)("inlineCode",{parentName:"p"},"ithome")," \u7684\u6b04\u4f4d\uff0c\u540c\u6642\u53c8\u5c11\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"containers")," \u9019\u500b\u8cc7\u8a0a"),(0,l.kt)("p",null,"\u9996\u5148\u6211\u5011\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"kubeeval")," \u53bb\u8dd1\u4e00\u6b21\uff0c\u767c\u73fe\u6709\u5f97\u5230\u4e00\u500b\u8b66\u544a\uff0c\u544a\u77e5\u6211\u5011 ",(0,l.kt)("inlineCode",{parentName:"p"},"containers")," \u9019\u500b\u6b04\u4f4d\u662f\u5fc5\u9808\u7684\uff0c\u4f46\u662f\u537b\u6c92\u6709\u7d66\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u591a\u51fa\u4f86\u7684 ithome \u537b\u6c92\u6709\u8b66\u544a\uff1f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./kubeval pod.yaml\nWARN - pod.yaml contains an invalid Pod (getting-started) - containers: containers is required\n$ ./kubeval -h\nValidate a Kubernetes YAML file against the relevant schema\n\nUsage:\n  kubeval <file> [file...] [flags]\n\nFlags:\n      --additional-schema-locations strings   Comma-seperated list of secondary base URLs used to download schemas\n  -d, --directories strings                   A comma-separated list of directories to recursively search for YAML documents\n      --exit-on-error                         Immediately stop execution when the first error is encountered\n  -f, --filename string                       filename to be displayed when testing manifests read from stdin (default "stdin")\n      --force-color                           Force colored output even if stdout is not a TTY\n  -h, --help                                  help for kubeval\n      --ignore-missing-schemas                Skip validation for resource definitions without a schema\n  -i, --ignored-filename-patterns strings     A comma-separated list of regular expressions specifying filenames to ignore\n      --insecure-skip-tls-verify              If true, the server\'s certificate will not be checked for validity. This will make your HTTPS connections insecure\n  -v, --kubernetes-version string             Version of Kubernetes to validate against (default "master")\n      --openshift                             Use OpenShift schemas instead of upstream Kubernetes\n  -o, --output string                         The format of the output of this script. Options are: [stdout json tap]\n      --quiet                                 Silences any output aside from the direct results\n      --reject-kinds strings                  Comma-separated list of case-sensitive kinds to prohibit validating against schemas\n  -s, --schema-location string                Base URL used to download schemas. Can also be specified with the environment variable KUBEVAL_SCHEMA_LOCATION.\n      --skip-kinds strings                    Comma-separated list of case-sensitive kinds to skip when validating against schemas\n      --strict                                Disallow additional properties not in schema\n      --version                               version for kubeval\n\n')),(0,l.kt)("p",null,"\u5f9e\u4e0a\u9762\u53ef\u4ee5\u89c0\u5bdf\u5230\u6211\u5011\u9700\u8981\u52a0\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"--strict")," \u9019\u500b\u53c3\u6578\uff0c\u624d\u6703\u53bb\u6aa2\u67e5\u591a\u51fa\u4f86\u4e0d\u5b58\u5728\u539f\u672c schema \u5167\u7684\u6b04\u4f4d\uff0c\u56e0\u6b64\u6211\u5011\u518d\u8dd1\u4e00\u6b21\u770b\u770b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./kubeval --strict pod.yaml\nWARN - pod.yaml contains an invalid Pod (getting-started) - containers: containers is required\nWARN - pod.yaml contains an invalid Pod (getting-started) - voa: Additional property voa is not allowed\n")),(0,l.kt)("p",null,"\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u9806\u5229\u7684\u770b\u5230\u5169\u500b\u932f\u8aa4\u90fd\u88ab\u6293\u51fa\u4f86\u4e86\uff01"),(0,l.kt)("h2",{id:"conftest"},"Conftest"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/conftest"},"conftest")," \u7684\u5b98\u7db2\u8aaa\u660e\u5982\u4e0b"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Conftest is a utility to help you write tests against structured configuration data. For instance you could write tests for your Kubernetes configurations, or Tekton pipeline definitions, Terraform code, Serverless configs or any other structured data.")),(0,l.kt)("p",null,"Conftest \u9019\u500b\u5de5\u5177\u53ef\u4ee5\u5e6b\u52a9\u958b\u767c\u8005\u53bb\u6e2c\u8a66\u4f86\u9a57\u8b49\u4e0d\u540c\u985e\u578b\u7684\u8a2d\u5b9a\u6a94\u6848\uff0c\u8b6c\u5982 Kubernetes, Tekton \u751a\u81f3\u662f Terraform \u7684\u8a2d\u5b9a\u3002"),(0,l.kt)("p",null,"\u4e0d\u904e\u4f7f\u7528\u4e0a\u5fc5\u9808\u8981\u5148\u64b0\u5beb\u76f8\u95dc\u7684 Policy \u53bb\u63cf\u8ff0\u81ea\u5df1\u671f\u671b\u7684\u898f\u5247\uff0c\u6700\u5f8c\u6703\u5e6b\u4f60\u7684\u8a2d\u5b9a\u6a94\u6848\u8207\u76f8\u95dc\u7684 Policy \u53bb\u6bd4\u5c0d\u770b\u770b\u4f60\u7684\u8a2d\u5b9a\u6a94\u6848\u662f\u5426\u7834\u58de\u4f60\u7684 Policy\u3002"),(0,l.kt)("p",null,"\u76f8\u5c0d\u65bc\u524d\u9762\u7684\u5de5\u5177\u53bb\u91dd\u5c0d yaml \u683c\u5f0f\uff0c kubernetes \u8cc7\u6e90\u7684 schema \u7684\u6bd4\u8f03\uff0c contest \u66f4\u50cf\u662f\u91dd\u5c0d policy \u53bb\u6bd4\u5c0d\uff0c\u8209\u4f8b\u4f86\u8aaa\uff0c\u6211\u5011\u6709\u4e00\u4e0b\u5217\u4e00\u500b pod yaml."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n  name: getting-started\nspec:\n  containers:\n  - name: getting-started\n    image: hwchiu/netutils\n  restartPolicy: Always\n")),(0,l.kt)("p",null,"\u7136\u5f8c\u5718\u968a\u4eca\u5929\u6709\u500b\u8981\u6c42\uff0c\u6240\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"Pod")," \u7684 Yaml \u90fd\u5fc5\u9808\u8981\u7b26\u5408\u5169\u500b\u898f\u7bc4"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"restartPolicy \u53ea\u80fd\u662f Never"),(0,l.kt)("li",{parentName:"ol"},"runAsNonRoot \u9019\u500b\u6b04\u4f4d\u5fc5\u9808\u8981\u8a2d\u5b9a\u662f True\uff0c\u5e0c\u671b\u53ef\u4ee5\u4ee5\u975e root \u57f7\u884c")),(0,l.kt)("p",null,"\u53ea\u8981\u6709\u7b26\u5408\u4efb\u4f55\u4e00\u500b\u689d\u4ef6\uff0c\u6211\u5011\u5e0c\u671b conftest \u80fd\u5920\u627e\u51fa\u4f86\uff0c\u4e26\u4e14\u544a\u77e5\u932f\u8aa4\uff0c\u65bc\u662f\u6211\u5011\u6e96\u5099\u4e86\u4e0b\u5217\u6a94\u6848"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ cat policy/pod.rego\npackage main\n\ndeny[msg] {\n  input.kind = "Pod"\n  not input.spec.securityContext.runAsNonRoot = true\n  msg = "Containers must not run as root"\n}\n\ndeny[msg] {\n  input.kind = "Pod"\n  not input.spec.restartPolicy = "Never"\n  msg = "Pod never restart"\n}\n')),(0,l.kt)("p",null,"\u6211\u5011\u4f7f\u7528\u4e86 ",(0,l.kt)("inlineCode",{parentName:"p"},"deny")," \u53bb\u63cf\u8ff0\u5169\u500b policy, \u53ea\u8981\u7b26\u5408\u9019\u4e9b policy \u7684\u90fd\u6703\u5224\u932f"),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u7528 conftest \u53bb\u57f7\u884c\u770b\u770b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ conftest test pod.yaml  -p policy/\nFAIL - pod.yaml - Containers must not run as root\nFAIL - pod.yaml - Pod never restart\n\n2 tests, 0 passed, 0 warnings, 2 failures, 0 exceptions\n")),(0,l.kt)("p",null,"\u53ef\u4ee5\u767c\u73fe conftest \u8a8d\u70ba\u7cfb\u7d71\u4e2d\u6709\u5169\u500b\u6e2c\u8a66\u8981\u8dd1\uff0c\u800c\u9019\u5169\u500b\u6e2c\u8a66\u90fd\u5931\u6557"),(0,l.kt)("p",null,"\u63a5\u4e0b\u4f86\u6211\u5011\u4fee\u6539\u6a94\u6848\u8b93\u4ed6\u7b26\u5408\u6211\u5011\u7684\u898f\u5247\u5f8c\u518d\u8dd1\u4e00\u6b21"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ cat pod.yaml\napiVersion: v1\nkind: Pod\nmetadata:\n  name: getting-started\nspec:\n  containers:\n  - name: getting-started\n    image: hwchiu/netutils\n  restartPolicy: Never\n  securityContext:\n    runAsNonRoot: true\n\n$ conftest test pod.yaml  -p policy/\n\n2 tests, 2 passed, 0 warnings, 0 failures, 0 exceptions\n")),(0,l.kt)("p",null,"\u9019\u6642\u5019\u5c31\u53ef\u4ee5\u767c\u73fe\u5df2\u7d93\u901a\u904e\u6e2c\u8a66\u4e86\uff0c\u6240\u4ee5\u5982\u679c\u5718\u968a\u4e2d\u6709\u9019\u4e9b\u9700\u6c42\u7684\u4eba\u53ef\u4ee5\u8003\u616e\u5c0e\u5165\u9019\u500b\u5de5\u5177\u770b\u770b"),(0,l.kt)("h1",{id:"helm-\u6e2c\u8a66"},"Helm \u6e2c\u8a66"),(0,l.kt)("p",null,"Helm \u7684\u6e2c\u8a66\u5206\u6210\u5e7e\u500b\u9762\u5411\uff0c\u5206\u5225\u662f"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Helm Chart \u7684\u64b0\u5beb\u5167\u5bb9\u662f\u5426\u6b63\u78ba"),(0,l.kt)("li",{parentName:"ol"},"Helm Chart \u642d\u914d Config \u5f8c\u662f\u5426\u5b89\u88dd\u6703\u5931\u6557")),(0,l.kt)("p",null,"\u5176\u4e2d(2)\u9019\u9ede\u4e0d\u662f\u4ec0\u9ebc\u5927\u554f\u984c\uff0c\u56e0\u70ba\u6211\u5011\u53ef\u4ee5\u5148\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"helm template")," \u7684\u65b9\u5f0f\u8b93\u5b83\u6e32\u67d3\u51fa\u6700\u5f8c\u7522\u751f\u7684 Kubernetes Yaml \u6a94\u6848\uff0c\u800c\u56e0\u70ba\u73fe\u5728"),(0,l.kt)("p",null,"\u662f\u539f\u751f\u7684 Kubernetes yaml \u6a94\u6848\u4e86\uff0c\u6240\u4ee5\u5c31\u53ef\u4ee5\u4f7f\u7528\u4e0a\u8ff0\u7684\u4e09\u500b\u5de5\u5177\u4f86\u9032\u884c\u6e2c\u8a66\u3002"),(0,l.kt)("p",null,"\u800c (1) \u7684\u90e8\u5206\u4e3b\u8981\u6703\u727d\u626f\u5230 Helm \u672c\u8eab\u7684\u8cc7\u6599\u593e\u8ddf\u67b6\u69cb\uff0c\u9019\u908a\u6211\u5011\u53ef\u4ee5\u4f7f\u7528\u539f\u751f\u7684\u5de5\u5177 ",(0,l.kt)("inlineCode",{parentName:"p"},"helm lint")," \u4f86\u9032\u884c\u6216\u662f\u900f\u904e ",(0,l.kt)("inlineCode",{parentName:"p"},"helm install --dry-run")," \u7684\u65b9\u5f0f\u4f86\u5617\u8a66\u88dd\u88dd\u770b\uff0c\u4e00\u500b\u7c21\u55ae\u7684\u7bc4\u4f8b\u5982\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ helm create nginx\nCreating nginx\n$ cd nginx/\n$ helm lint\n==> Linting .\n[INFO] Chart.yaml: icon is recommended\n\n1 chart(s) linted, 0 chart(s) failed\n")),(0,l.kt)("p",null,"\u6211\u5011\u900f\u904e helm \u6307\u4ee4\u5275\u5efa\u4e86\u4e00\u500b\u57fa\u672c\u7bc4\u4f8b\u7684\u7d50\u69cb\uff0c\u9019\u6642\u5019\u7528 helm lint \u662f\u6c92\u6709\u4efb\u4f55\u554f\u984c\u7684\uff0c\u7136\u5f8c\u6211\u5011\u5617\u8a66\u4fee\u6539 template \u88e1\u9762\u7684\u5167\u5bb9\uff0c\u8b6c\u5982 \u91dd\u5c0d go template \u7684\u683c\u5f0f\u9032\u884c\u4e00\u4e9b\u4fee\u6539\uff0c\u8b93\u5176\u932f\u8aa4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "{}" >> templates/deployment.yaml\nubuntu@dex-test:~/nginx$ helm lint\n==> Linting .\n[INFO] Chart.yaml: icon is recommended\n[ERROR] templates/deployment.yaml: unable to parse YAML: error converting YAML to JSON: yaml: line 45: did not find expected key\n[ERROR] templates/deployment.yaml: object name does not conform to Kubernetes naming requirements: ""\n\nError: 1 chart(s) linted, 1 chart(s) failed\n')),(0,l.kt)("p",null,"\u4e0a\u8ff0\u53ea\u662f\u4e00\u500b\u7bc4\u4f8b\uff0c\u6709\u8208\u8da3\u7684\u90fd\u53ef\u4ee5\u5230 Helm \u5b98\u7db2\u53bb\u770b\u66f4\u591a\u95dc\u65bc Helm lint \u7684\u8a0e\u8ad6\u8207\u7528\u6cd5\u3002"),(0,l.kt)("h1",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,l.kt)("p",null,"\u672c\u7bc7\u4ecb\u7d39\u4e86\u5f88\u591a\u95dc\u65bc Yaml \u76f8\u95dc\u7684\u5de5\u5177\uff0c\u6bcf\u500b\u5de5\u5177\u90fd\u6703\u6709\u81ea\u5df1\u7684\u6975\u9650\uff0c\u6c92\u6709\u4e00\u500b\u5de5\u5177\u53ef\u4ee5\u6aa2\u67e5\u51fa\u6240\u6709\u554f\u984c\uff0c\u9019\u90e8\u5206\u5c31\u662f\u9700\u8981\u82b1\u6642\u9593\u53bb\u8a55\u4f30\u770b\u770b\u6bcf\u500b\u5de5\u5177\uff0c\u770b\u770b\u54ea\u4e9b\u5de5\u5177\u9069\u5408\u81ea\u5df1\u5718\u968a\uff0c\u662f\u5426\u65b9\u4fbf\u5c0e\u5165\u4ee5\u53ca\u529f\u80fd\u662f\u5426\u6eff\u8db3"),(0,l.kt)("p",null,"\u9664\u4e86\u4e0a\u8ff0\u4e4b\u5916\u9084\u6709\u5f88\u591a\u5de5\u5177\uff0c\u8b6c\u5982 kube-score, config-lint..\u7b49\uff0c\u6709\u8208\u8da3\u7684\u4eba\u90fd\u53ef\u4ee5\u641c\u5c0b\u4f86\u73a9\u800d\u770b\u770b"))}u.isMDXComponent=!0}}]);