"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[86820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},i=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,d=h["".concat(c,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(d,p(p({ref:t},i),{},{components:n})):a.createElement(d,p({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[h]="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33097:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"OpenvSwitch - hmap",date:"2013-12-27 04:18",comments:!0,tags:["SDN","Network","OpenvSwitch","SourceCode"],description:"hmap \u662f\u4e00\u7a2ehash bucket\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u5728 OpenvSwitch \u4e2d\u5230\u8655\u90fd\u53ef\u4ee5\u770b\u5230\u5176\u8eab\u5f71\uff0c\uff0c\u8b6c\u5982 kernel space \u4e2d\u7684 flow_key \u5c31\u662f\u900f\u904e\u9019\u7a2e\u7d50\u69cb\u4f86\u5b58\u653e\u7684\u3002\u672c\u6587\u6703\u6aa2\u8996\u4e00\u4e0b\u8a72 hamp \u7684\u7d50\u69cb\uff0c\u4e26\u4e14\u7a0d\u5fae\u770b\u4e00\u4e0b\u95dc\u65bc\u63d2\u5165\u9019\u500b\u52d5\u4f5c\u7684\u539f\u59cb\u78bc"},p=void 0,s={unversionedId:"techPost/2013/openvswitch-hmap",id:"techPost/2013/openvswitch-hmap",title:"OpenvSwitch - hmap",description:"hmap \u662f\u4e00\u7a2ehash bucket\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u5728 OpenvSwitch \u4e2d\u5230\u8655\u90fd\u53ef\u4ee5\u770b\u5230\u5176\u8eab\u5f71\uff0c\uff0c\u8b6c\u5982 kernel space \u4e2d\u7684 flow_key \u5c31\u662f\u900f\u904e\u9019\u7a2e\u7d50\u69cb\u4f86\u5b58\u653e\u7684\u3002\u672c\u6587\u6703\u6aa2\u8996\u4e00\u4e0b\u8a72 hamp \u7684\u7d50\u69cb\uff0c\u4e26\u4e14\u7a0d\u5fae\u770b\u4e00\u4e0b\u95dc\u65bc\u63d2\u5165\u9019\u500b\u52d5\u4f5c\u7684\u539f\u59cb\u78bc",source:"@site/docs/techPost/2013/openvswitch-hmap.md",sourceDirName:"techPost/2013",slug:"/techPost/2013/openvswitch-hmap",permalink:"/docs/techPost/2013/openvswitch-hmap",draft:!1,tags:[{label:"SDN",permalink:"/docs/tags/sdn"},{label:"Network",permalink:"/docs/tags/network"},{label:"OpenvSwitch",permalink:"/docs/tags/openv-switch"},{label:"SourceCode",permalink:"/docs/tags/source-code"}],version:"current",frontMatter:{title:"OpenvSwitch - hmap",date:"2013-12-27 04:18",comments:!0,tags:["SDN","Network","OpenvSwitch","SourceCode"],description:"hmap \u662f\u4e00\u7a2ehash bucket\u7684\u8cc7\u6599\u7d50\u69cb\uff0c\u5728 OpenvSwitch \u4e2d\u5230\u8655\u90fd\u53ef\u4ee5\u770b\u5230\u5176\u8eab\u5f71\uff0c\uff0c\u8b6c\u5982 kernel space \u4e2d\u7684 flow_key \u5c31\u662f\u900f\u904e\u9019\u7a2e\u7d50\u69cb\u4f86\u5b58\u653e\u7684\u3002\u672c\u6587\u6703\u6aa2\u8996\u4e00\u4e0b\u8a72 hamp \u7684\u7d50\u69cb\uff0c\u4e26\u4e14\u7a0d\u5fae\u770b\u4e00\u4e0b\u95dc\u65bc\u63d2\u5165\u9019\u500b\u52d5\u4f5c\u7684\u539f\u59cb\u78bc"},sidebar:"techPost",previous:{title:"OpenvSwitch source code(2)",permalink:"/docs/techPost/2013/openvswitch-3"},next:{title:"OpenVSwitch - Basic Install",permalink:"/docs/techPost/2013/openvswitch-install"}},c={},l=[{value:"insert",id:"insert",level:2}],i={toc:l},h="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u793a\u610f\u5716\u5982\u4e0b"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"http://user-image.logdown.io/user/415/blog/415/post/169371/hZKD65KuSJyQat4j7Qd6_hmap.png",alt:"hmap.png"})),(0,r.kt)("p",null,"\u6bcf\u4e00\u500b ",(0,r.kt)("strong",{parentName:"p"},"hmap_node"),"\u90fd\u5b58\u653e\u4e00\u500bhash\u503c\uff0c\u76f8\u540chash\u503c\u7684\u4eba\u6703\u900f\u904e\u55ae\u5411link\u4e32\u8d77\u4f86\n",(0,r.kt)("strong",{parentName:"p"},"hmap"),"\u64c1\u6709\u591a\u500b\u6307\u6a19\uff0c\u6307\u5411\u6bcf\u500bhash\u7684\u958b\u982d\uff0c\u4e5f\u5c31\u662f\u6240\u8b02\u7684bucket\uff0c\u6240\u6709\u7684\u64cd\u4f5c\u90fd\u8981\u900f\u904e\u6b64\u7d50\u69cb"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hmap_node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"struct hmap_node {\n    size_t hash;                /* Hash value. */\n    struct hmap_node *next;     /* Next in linked list. */\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u500b\u7d50\u69cb\u5f88\u7c21\u55ae\uff0c\u7d00\u9304\u4e86\u672c\u8eab\u7684 hash\u503c\uff0c\u4e26\u4e14\u6709\u4e00\u500b\u6307\u6a19\u6307\u5411\u4e0b\u4e00\u500b\u76f8\u540chash\u7684node")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hmap")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"struct hmap {\n    struct hmap_node **buckets; /* Must point to 'one' iff 'mask' == 0. */\n    struct hmap_node *one;\n    size_t mask;\n    size_t n;\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"buckets \u662f\u4e00\u500b ",(0,r.kt)("strong",{parentName:"li"},"pointer to pointer"),", \u6307\u5411\u5404\u500b\u4e0d\u540chash value\u7684\u958b\u982dnode."),(0,r.kt)("li",{parentName:"ul"},"one \u7528\u9014\u4e0d\u660e"),(0,r.kt)("li",{parentName:"ul"},"mask \u642d\u914dhash\u503c\u53ef\u4ee5\u5f97\u5230\u5c0d\u61c9\u7684bucket"),(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524dhmap\u4e2d\u5df2\u7d93\u6709\u591a\u5c11\u500b ",(0,r.kt)("strong",{parentName:"li"},"hmap_node"),", n< 2*mask + 1.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"hmap.h/hmap.c"),"\n\u95dc\u65bchmap\u7684\u64cd\u4f5c\u5927\u90e8\u5206\u90fd\u5b9a\u7fa9\u5728\u9019\u5169\u500b\u6a94\u6848\u5167\uff0c\u6709function\u4e5f\u6709marco.\u9019\u908a\u7bc0\u9304\u5e7e\u500b\u4f86\u770b"),(0,r.kt)("h2",{id:"insert"},"insert"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"static inline void\nhmap_insert_fast(struct hmap *hmap, struct hmap_node *node, size_t hash)\n{\n    struct hmap_node **bucket = &hmap->buckets[hash & hmap->mask];\n    node->hash = hash;\n    node->next = *bucket;\n    *bucket = node;\n    hmap->n++;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5148\u5229\u7528\u6b64hash\u8207mask\u627e\u5230\u5c0d\u61c9\u7684 bucket, \u503c\u5f97\u6ce8\u610f\u7684\u662f\u9019\u908a\u62ff\u5230\u7684\u4e5f\u662f\u4e00\u500b ",(0,r.kt)("strong",{parentName:"li"},"pointer to pointer")),(0,r.kt)("li",{parentName:"ul"},"node\u7684 next \u6307\u5411 bucket\u6240\u6307\u5411\u7684\u7b2c\u4e00\u500bnode\uff0c\u7136\u5f8cbucket\u5247\u6539\u6210\u6307\u5411node\uff0c\u7d50\u8ad6\u5c31\u662f\u6703\u628a\u9019\u500bnode\u5f9e\u524d\u9762\u63d2\u5165")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"#define HMAP_FOR_EACH_WITH_HASH(NODE, MEMBER, HASH, HMAP)               \\\n    for (ASSIGN_CONTAINER(NODE, hmap_first_with_hash(HMAP, HASH), MEMBER); \\\n         NODE != OBJECT_CONTAINING(NULL, NODE, MEMBER);                  \\\n         ASSIGN_CONTAINER(NODE, hmap_next_with_hash(&(NODE)->MEMBER),   \\\n                          MEMBER))\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u9019\u662f\u4e00\u500b\u7528\u4f86\u641c\u5c0b\u7684 marco,\u4f7f\u7528\u5230\u4e86 ",(0,r.kt)("strong",{parentName:"li"},"ASSIGN_CONTAINER")," \u4ee5\u53ca ",(0,r.kt)("strong",{parentName:"li"},"OBJECT_CONTAINING"),"\u5169\u500bmarco"),(0,r.kt)("li",{parentName:"ul"},"\u547c\u53eb ",(0,r.kt)("strong",{parentName:"li"},"ASSIGN_CONTAINER")," \u53d6\u5f97\u5728hmap\u4e2d\u542b\u6709\u7279\u5b9a hash\u7684\u7b2c\u4e00\u500b ",(0,r.kt)("strong",{parentName:"li"},"hmap_node")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"OBJECT_CONTAINING")," \u56de\u50b3\u4e00\u500bNULL\u7269\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u90fd\u900f\u904e ",(0,r.kt)("strong",{parentName:"li"},"hmap_next_with_hash")," \u53d6\u5f97\u76f8\u540chash\u4e0b\u7684\u4e0b\u4e00\u500bnode")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-c"},"static inline struct hmap_node *\nhmap_next_with_hash__(const struct hmap_node *node, size_t hash)\n{\n    while (node != NULL && node->hash != hash) {\n        node = node->next;\n    }\n    return CONST_CAST(struct hmap_node *, node);\n}\n\nstatic inline struct hmap_node *\nhmap_next_with_hash(const struct hmap_node *node)\n{\n    return hmap_next_with_hash__(node->next, node->hash);\n}\n")))}m.isMDXComponent=!0}}]);