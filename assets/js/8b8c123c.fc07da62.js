"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[7555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(n),d=o,f=c["".concat(i,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,p(p({ref:t},u),{},{components:n})):r.createElement(f,p({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,p=new Array(l);p[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[c]="string"==typeof e?e:o,p[1]=a;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const l={title:"Python \u52d5\u614b\u8f09\u5165\u6a21\u7d44",date:"2013-04-22 11:59",comments:!0,tags:["Python"]},p=void 0,a={unversionedId:"techPost/2013/dynamicimport",id:"techPost/2013/dynamicimport",title:"Python \u52d5\u614b\u8f09\u5165\u6a21\u7d44",description:"\u6700\u8fd1\u5728\u5f04irc\u6a5f\u5668\u4eba\uff0c\u5e0c\u671b\u9019\u500b\u6a5f\u5668\u4eba\u80fd\u5920\u9748\u6d3b\u4e00\u4e9b\uff0c\u56e0\u6b64\u628a\u6240\u6709\u529f\u80fd\u90fd\u5f04\u6210module",source:"@site/docs/techPost/2013/dynamicimport.md",sourceDirName:"techPost/2013",slug:"/techPost/2013/dynamicimport",permalink:"/docs/techPost/2013/dynamicimport",draft:!1,tags:[{label:"Python",permalink:"/docs/tags/python"}],version:"current",frontMatter:{title:"Python \u52d5\u614b\u8f09\u5165\u6a21\u7d44",date:"2013-04-22 11:59",comments:!0,tags:["Python"]},sidebar:"techPost",previous:{title:"XML in C-Sharp(C#)",permalink:"/docs/techPost/2013/csharp-xml"},next:{title:"Facade Pattern",permalink:"/docs/techPost/2013/facade-pattern"}},i={},s=[],u={toc:s},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u6700\u8fd1\u5728\u5f04irc\u6a5f\u5668\u4eba\uff0c\u5e0c\u671b\u9019\u500b\u6a5f\u5668\u4eba\u80fd\u5920\u9748\u6d3b\u4e00\u4e9b\uff0c\u56e0\u6b64\u628a\u6240\u6709\u529f\u80fd\u90fd\u5f04\u6210module"),(0,o.kt)("p",null,"\u6a5f\u5668\u4eba\u5728\u639b\u4e0a\u9019\u4e9bmodule\u4f86\u5b8c\u6210\u5404\u7a2e\u80fd\u529b\uff0c\u5fc3\u4e2d\u7684\u8a2d\u60f3\u67b6\u69cb\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--------ircbot\n    |-------config.json\n    |\n    |\n    |-------server.py\n    |\n    |\n    |-------modules\n        |\n        |-----googleSearch\n        |   |\n        |   |---googleSearch.py\n        |\n        |-----wikiSearch\n        |   |\n        |   |---wikiSearch.py\n        |\n        |-----echoServer\n            |\n            |---echoServer.py\n")),(0,o.kt)("p",null,"config.json \u662f\u4e3b\u8981\u7684\u8a2d\u5b9a\u6a94\uff0c\u5176\u4e2d\u5305\u542b\u4e86\u8981\u8f09\u5165\u54ea\u4e9bmodule"),(0,o.kt)("p",null,"server.py\u662f\u4e3b\u8981\u7684server\u7a0b\u5f0f\uff0c\u53ef\u4ee5\u900f\u904e\u6307\u4ee4\u91cd\u65b0\u53bb\u8f09\u5165config.json"),(0,o.kt)("p",null,"\u7576server\u8f09\u5165\u8a2d\u5b9a\u6a94\u5f8c\uff0c\u6703\u52d5\u614b\u7684\u53bb\u628amodules\u8cc7\u6599\u593e\u5e95\u4e0b\u7684py\u90fd\u8f09\u5165\uff0c\u9019\u6a23\u672a\u4f86\u7576\u6709\u65b0\u529f\u80fd\u8981\u589e\u52a0\u7684\u6642\u5019\uff0c\u53ea\u8981\u4fee\u6539config.json\uff0c\u7136\u5f8c\u767c\u9001\u6307\u4ee4"),(0,o.kt)("p",null,"\u53ebserver\u91cd\u65b0\u8f09\u5165\u5c31\u53ef\u4ee5\u7372\u5f97\u65b0\u529f\u80fd\uff0c\u800c\u4e0d\u9700\u8981\u6574\u500bserver\u91cd\u958b\u3002"),(0,o.kt)("p",null,"\u53c3\u8003",(0,o.kt)("a",{parentName:"p",href:"http://stackoverflow.com/questions/7218673/telling-import-where-to-look-am-i-stuck-with-sys-path"},"Telling ",(0,o.kt)("strong",{parentName:"a"},"import")," where to look - am I stuck with sys.path?"),"\n\u4ee5\u53ca",(0,o.kt)("a",{parentName:"p",href:"http://eriol.iteye.com/blog/1113588"},"python3.0\u4e2d\u91cd\u8f7d\u6a21\u5757"),"\u5f8c"),(0,o.kt)("p",null,"\u6574\u7406\u5982\u4e0b"),(0,o.kt)("p",null,"\u9996\u5148\u8981\u5148\u5275\u9020\u51fa\u4e00\u500bpseudo-package\uff0csys.modules\u662f\u4e00\u500bdict\u7684\u7269\u4ef6\uff0c\u7531module name mapping \u5230 \u5c0d\u61c9\u7684module"),(0,o.kt)("p",null,"\u9019\u908a\u5148\u5275\u9020\u4e00\u500btuple\uff0ckey='plugins' value = type\u70basys\u7684\u7269\u4ef6\uff0c\u53eb\u505aplugins"),(0,o.kt)("p",null,"\u63a5\u4e0b\u4f86\u628a\u6211\u5011\u8981\u8f09\u5165\u7684module\u8def\u5f91\u90fd\u52a0\u5165\u9053\u525b\u525b\u5275\u7acb\u7684\u7269\u4ef6\u4e4b\u4e2d\uff0c"),(0,o.kt)("p",null,"\u5229\u7528",(0,o.kt)("strong",{parentName:"p"},"path"),"\u9019\u500b\u4e32\u5217\uff0c\u628a\u8def\u5f91\u4e00\u4e00\u52a0\u5165\u9032\u53bb"),(0,o.kt)("p",null,"\u9019\u6a23\u5728pseudo-package  plugins\u5e95\u4e0b\uff0c\u5df2\u7d93\u770b\u5f97\u5230\u6211\u5011\u7684module\u4e86!"),(0,o.kt)("p",null,"\u6700\u5f8c\u518d\u5229\u7528importlib.import_module('plugins.'+moduleNmae) \u4f86\u628a\u9019\u4e9bmodule\u5168\u90fd\u8f09\u5165"),(0,o.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u7531\u65bcmodule\u88ab\u8f09\u5165\u4e00\u6b21\u5f8c\uff0c\u5373\u4f7f\u4f60\u4fee\u6539\u4e86code,\u5229\u7528\u9019\u500b\u65b9\u6cd5\u91cd\u65b0\u8f09\u5165\uff0c\u4f9d\u7136\u6c92\u6709\u8fa6\u6cd5\u6539\u8b8a\u5176\u884c\u70ba"),(0,o.kt)("p",null,"\u6240\u4ee5\u5fc5\u9808\u8981\u4f7f\u7528reload\u9019\u500bfunction\u91cd\u65b0\u8f09\u5165\u503c\uff0c\u4e26\u8b80\u53d6\u65b0\u7684\u5167\u5bb9\uff0c\u56e0\u70bamodule\u8f09\u5165\u4e00\u500b\u5f88\u5927\u958b\u92b7\u7684\u52d5\u4f5c\uff0c\u56e0\u70ba\u6bcf\u6b21\u90fd\u8981\u5c0b\u627e\u6587\u4ef6\u3001\u7de8\u8b6f\u6210"),(0,o.kt)("p",null,"bytecode\u3001\u8f49\u6210\u57f7\u884c\u78bc\uff0c\u56e0\u6b64\u9019\u500b\u884c\u70ba\u5fc5\u9808\u8981\u900f\u904ereload\u5f37\u5236\u91cd\u505a\u624d\u53ef\u4ee5\u9054\u6210\u3002"),(0,o.kt)("p",null,"\u6700\u5f8c\u5c31\u53ef\u4ee5\u547c\u53eb\u6bcf\u500bmodule\u7684\u65b9\u6cd5\u4f86\u9054\u6210\u52d5\u614b\u8f09\u5165\u7684\u529f\u80fd\u4e86"),(0,o.kt)("p",null,"\u7bc4\u4f8b\u5982\u4e0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\n    def dynamicLoadModules(self):\n        sys.modules['plugins'] = self.plugins = type(sys)('plugins')\n        self.plugins.__path__ = []\n        for path in self.config['MODULES']:\n            path = os.path.join(sys.path[0],'modules',path)\n            self.plugins.__path__.append(path)\n\n        ##dynamic load modules\n        self.modules = []\n        self.modules = [ importlib.import_module('plugins.'+module) for module in self.config['MODULES']]\n        for module in self.modules: #\u7528\u6b64\u4f86\u91cd\u65b0\u8f09\u5165module http://eriol.iteye.com/blog/1113588\n            reload(module)\n        for module in self.modules:\n            module.run()\n\n")))}m.isMDXComponent=!0}}]);