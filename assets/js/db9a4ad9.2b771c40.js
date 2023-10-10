"use strict";(self.webpackChunkhwchiu=self.webpackChunkhwchiu||[]).push([[19721],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),f=o,d=c["".concat(s,".").concat(f)]||c[f]||m[f]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},72626:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={title:"Blktrace, Blkparse and Fio example",author:"hwchiu",tags:["Linux","Kernel","System"],date:new Date("2017-06-02T03:54:37.000Z"),description:"\u7d00\u9304 blktrace, blkparse \u8207 fio \u7684\u7528\u6cd5"},i=void 0,l={permalink:"/2017/06/02/blktrace",source:"@site/blog/2017-06-02-blktrace.md",title:"Blktrace, Blkparse and Fio example",description:"\u7d00\u9304 blktrace, blkparse \u8207 fio \u7684\u7528\u6cd5",date:"2017-06-02T03:54:37.000Z",formattedDate:"June 2, 2017",tags:[{label:"Linux",permalink:"/tags/linux"},{label:"Kernel",permalink:"/tags/kernel"},{label:"System",permalink:"/tags/system"}],readingTime:6.695,hasTruncateMarker:!1,authors:[{name:"hwchiu"}],frontMatter:{title:"Blktrace, Blkparse and Fio example",author:"hwchiu",tags:["Linux","Kernel","System"],date:"2017-06-02T03:54:37.000Z",description:"\u7d00\u9304 blktrace, blkparse \u8207 fio \u7684\u7528\u6cd5"},prevItem:{title:"Costco \u53bb\u9aa8\u96de\u817f\u6392\u7d00\u9304",permalink:"/2018/08/08/costco-chicken"},nextItem:{title:"perf_for_drbd_9.0",permalink:"/2017/05/19/perf-for-drbd"}},s={authorsImageUrls:[void 0]},p=[{value:"Step1",id:"step1",level:2},{value:"Step2",id:"step2",level:2},{value:"Step3",id:"step3",level:2}],u={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"blktrace")," is a block layer IO tracing mechanism which provide detailed information about request queue operations up to user space."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"blkparse")," will combine streams of events for various devices on various CPUs, and produce a formatted output the the event information.\nIt take the output of above tool ",(0,o.kt)("strong",{parentName:"p"},"blktrace")," and convert those information into fency readable form."),(0,o.kt)("p",null,"In the following, We will use those tools ",(0,o.kt)("strong",{parentName:"p"},"blktrace")," and ",(0,o.kt)("strong",{parentName:"p"},"blkparse")," to help us to observe sector numbers which has been written by fio requests.\nWe will use the fil to generate two diffenrt IO pattern requests, sequence write and random write."),(0,o.kt)("h1",{id:"environment"},"Environment"),(0,o.kt)("p",null,"OS: Ubuntu 14.04\nStorage: NVME\nFIO: ",(0,o.kt)("strong",{parentName:"p"},"fio-2.19-12-gb94d"),"\nblktrace: ",(0,o.kt)("strong",{parentName:"p"},"2.0.0"),"\nblkparse: ",(0,o.kt)("strong",{parentName:"p"},"1.1.0")),(0,o.kt)("p",null,"you can use following commands to install ",(0,o.kt)("strong",{parentName:"p"},"blktrace")," and ",(0,o.kt)("strong",{parentName:"p"},"blkparse")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"apt-get install -y blktrace\n")),(0,o.kt)("h1",{id:"experiment"},"Experiment"),(0,o.kt)("h2",{id:"step1"},"Step1"),(0,o.kt)("p",null,"In order to make the output of ",(0,o.kt)("strong",{parentName:"p"},"blkparse")," more easily to read, we set the ",(0,o.kt)("strong",{parentName:"p"},"numjobs")," to ",(0,o.kt)("strong",{parentName:"p"},"1"),".\nFollowing is my fio config"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[global]\niodepth=256\nnumjobs=1\ndirect=1\n\ntime_based\nruntime=120\ngroup_reporting\nsize=5G\nioengine=libaio\n\nfilename=/dev/nvme1n1\n[rw]\nbs=4k\nrw=randwrite\n\n[sw]\nbs=64k\nrw=write\n\n")),(0,o.kt)("p",null,"After we setup the fio config, use the fio to generate the IO request. In this example, we ask the fio to generate the IO via ",(0,o.kt)("strong",{parentName:"p"},"sequence write")," pattern."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"fio ${path_of_config} section=sw\n")),(0,o.kt)("p",null,"During the experiment, you can use the tool ",(0,o.kt)("inlineCode",{parentName:"p"},"iostat")," to monitor the I/O information about the device we want to observe."),(0,o.kt)("h2",{id:"step2"},"Step2"),(0,o.kt)("p",null,"Open other terminal and use ",(0,o.kt)("inlineCode",{parentName:"p"},"blktrace")," to collection the data, there are two parameter we need to use,\nFirst one is ",(0,o.kt)("strong",{parentName:"p"},"-d"),", which indicate what target device blktrace will monitor to.\nSecond, is  ",(0,o.kt)("strong",{parentName:"p"},"-w"),", we use it to limit the time (seconds) how long blktrace will run.\nSo, our final command looks like below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"blktrace -d /dev/nvme1n1 -w 60\n")),(0,o.kt)("p",null,"In the end of ",(0,o.kt)("strong",{parentName:"p"},"blktrace"),", you can discover some new files has created by ",(0,o.kt)("strong",{parentName:"p"},"blktrace")," and its prefix name is ",(0,o.kt)("strong",{parentName:"p"},"nvme1n1.blktrac.xx"),"\nThe number of files is depends how may CPUs in your system."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"-rw-r--r--  1 root     root         821152 Jun  2 10:39 nvme1n1.blktrace.0\n-rw-r--r--  1 root     root       21044368 Jun  2 10:39 nvme1n1.blktrace.1\n-rw-r--r--  1 root     root         462864 Jun  2 10:39 nvme1n1.blktrace.10\n-rw-r--r--  1 root     root         737960 Jun  2 10:39 nvme1n1.blktrace.11\n-rw-r--r--  1 root     root         865872 Jun  2 10:39 nvme1n1.blktrace.12\n-rw-r--r--  1 root     root         755248 Jun  2 10:39 nvme1n1.blktrace.13\n-rw-r--r--  1 root     root        4675176 Jun  2 10:39 nvme1n1.blktrace.14\n-rw-r--r--  1 root     root        4471480 Jun  2 10:39 nvme1n1.blktrace.15\n-rw-r--r--  1 root     root        5070264 Jun  2 10:39 nvme1n1.blktrace.16\n-rw-r--r--  1 root     root        5075040 Jun  2 10:39 nvme1n1.blktrace.17\n-rw-r--r--  1 root     root        5062104 Jun  2 10:39 nvme1n1.blktrace.18\n-rw-r--r--  1 root     root        5586936 Jun  2 10:39 nvme1n1.blktrace.19\n-rw-r--r--  1 root     root        3718848 Jun  2 10:39 nvme1n1.blktrace.2\n\n")),(0,o.kt)("h2",{id:"step3"},"Step3"),(0,o.kt)("p",null,"Now, we can use the ",(0,o.kt)("strong",{parentName:"p"},"blkparse")," to regenerate human-readable output form the output we get via ",(0,o.kt)("strong",{parentName:"p"},"blktrace")," before."),(0,o.kt)("p",null,"We need to indicate source files, you can just use the device name without ",(0,o.kt)("strong",{parentName:"p"},".blktrace.xx"),", for example,\n",(0,o.kt)("strong",{parentName:"p"},"nvmen1"),", it will search all files which match the pattern ",(0,o.kt)("strong",{parentName:"p"},"nvmen1.blktrace.xx")," and put together to analyze.\nThen, the ",(0,o.kt)("strong",{parentName:"p"},"-f")," option used to foramt the output data, you can find more about it via ",(0,o.kt)("strong",{parentName:"p"},"man blkparse")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"OUTPUT DESCRIPTION AND FORMATTING\n       The output from blkparse can be tailored for specific use -- in particular, to ease parsing of output, and/or limit output fields to those the user wants to see. The data for fields which can be output include:\n\n       a   Action, a (small) string (1 or 2 characters) -- see table below for more details\n\n       c   CPU id\n\n       C   Command\n\n       d   RWBS field, a (small) string (1-3 characters)  -- see section below for more details\n\n       D   7-character string containing the major and minor numbers of the event's device (separated by a comma).\n\n       e   Error value\n\n       m   Minor number of event's device.\n\n       M   Major number of event's device.\n\n       n   Number of blocks\n\n       N   Number of bytes\n\n       p   Process ID\n\n       P   Display packet data -- series of hexadecimal values\n\n       s   Sequence numbers\n\n       S   Sector number\n\n       t   Time stamp (nanoseconds)\n\n       T   Time stamp (seconds)\n\n       u   Elapsed value in microseconds (-t command line option)\n\n       U   Payload unsigned integer\n")),(0,o.kt)("p",null,"For our observation, we use ",(0,o.kt)("strong",{parentName:"p"},"%5T.%9t, %p, %C, %a, %S\\n")," to format our result containing timestamp, command, process ID, action and sequence number."),(0,o.kt)("p",null,"Since the data I/O contains many action, such as complete, queued, inserted..ect. we can use option ",(0,o.kt)("strong",{parentName:"p"},"-a")," to filter actions, you can find more info via ",(0,o.kt)("strong",{parentName:"p"},"man blktrace"),".\nIn this case, we use the ",(0,o.kt)("strong",{parentName:"p"},"write")," to filter the actions."),(0,o.kt)("p",null,"In the end, use the ",(0,o.kt)("strong",{parentName:"p"},"-o")," options to indicate the output file name."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"barrier: barrier attribute\ncomplete: completed by driver\nfs: requests\nissue: issued to driver\npc: packet command events\nqueue: queue operations\nread: read traces\nrequeue: requeue operations\nsync: synchronous attribute\nwrite: write traces\nnotify: trace messages\ndrv_data: additional driver specific trace\n")),(0,o.kt)("p",null,"The command will look like below and it will output the result to file output.txt."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'blkparse nvme1n1 -f "%5T.%9t, %p, %C, %a, %S\\n"  -a write -o output.txt\n')),(0,o.kt)("p",null,"open the file, the result looks like"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    0.000000000, 22890, fio, Q, 1720960\n    0.000001857, 22890, fio, G, 1720960\n    0.000005803, 22890, fio, I, 1720960\n    0.000009234, 22890, fio, D, 1720960\n    0.000036821, 0, swapper/0, C, 1996928\n    0.000067519, 22890, fio, Q, 1721088\n    0.000068538, 22890, fio, G, 1721088\n    0.000071531, 22890, fio, I, 1721088\n    0.000073102, 22890, fio, D, 1721088\n    0.000093464, 0, swapper/0, C, 1994624\n    0.000123806, 0, swapper/0, C, 1785472\n    0.000147436, 22892, fio, C, 1784576\n    0.000159977, 22891, fio, C, 1997312\n    0.000166653, 22891, fio, Q, 2006912\n    0.000167632, 22891, fio, G, 2006912\n    0.000169422, 22891, fio, I, 2006912\n    0.000171178, 22891, fio, D, 2006912\n    0.000188830, 22892, fio, Q, 1817728\n    0.000189783, 22892, fio, G, 1817728\n    0.000191405, 22892, fio, I, 1817728\n    0.000192830, 22892, fio, D, 1817728\n    0.000202367, 22891, fio, Q, 2007040\n    0.000203160, 22891, fio, G, 2007040\n    0.000205969, 22891, fio, I, 2007040\n    0.000207524, 22891, fio, D, 2007040\n    0.000227655, 22892, fio, Q, 1817856\n    0.000228457, 22892, fio, G, 1817856\n    0.000231936, 22892, fio, I, 1817856\n....\n")),(0,o.kt)("p",null,"Since the fio will fork to two process to handle the process, we use the ",(0,o.kt)("strong",{parentName:"p"},"grep")," to focus on one specific process (pid=22892)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'grep "22892, fio" output.txt | more\n')),(0,o.kt)("p",null,'Now, the result seems good, we can discover the sequence number (fifth column) is increasing.\nOne thing we need to care about is the row which action is "C", which means the completed, since we don\'t know how NVME handle those request and reply to upper layer. we only need to focus on other action. such as "Q (queued This notes intent to queue i/o at the given location.  No real requests exists yet.)" or "I (inserted A request is being sent to the i/o scheduler for addition to the internal queue and later service by the driver. The request is fully formed at this time)".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    0.000147436, 22892, fio, C, 1784576\n    0.000188830, 22892, fio, Q, 1817728\n    0.000189783, 22892, fio, G, 1817728\n    0.000191405, 22892, fio, I, 1817728\n    0.000192830, 22892, fio, D, 1817728\n    0.000227655, 22892, fio, Q, 1817856\n    0.000228457, 22892, fio, G, 1817856\n    0.000231936, 22892, fio, I, 1817856\n    0.000233530, 22892, fio, D, 1817856\n    0.000360361, 22892, fio, Q, 1817984\n    0.000361310, 22892, fio, G, 1817984\n    0.000364163, 22892, fio, I, 1817984\n    0.000366696, 22892, fio, D, 1817984\n    0.000536731, 22892, fio, Q, 1818112\n    0.000537758, 22892, fio, G, 1818112\n    0.000539371, 22892, fio, I, 1818112\n    0.000541407, 22892, fio, D, 1818112\n    0.000670209, 22892, fio, Q, 1818240\n    0.000671345, 22892, fio, G, 1818240\n    0.000673383, 22892, fio, I, 1818240\n    0.000676260, 22892, fio, D, 1818240\n    0.001885543, 22892, fio, Q, 1818368\n    0.001887444, 22892, fio, G, 1818368\n    0.001891353, 22892, fio, I, 1818368\n    0.001895917, 22892, fio, D, 1818368\n    0.001934546, 22892, fio, Q, 1818496\n    0.001935468, 22892, fio, G, 1818496\n    0.001936891, 22892, fio, I, 1818496\n    0.001938742, 22892, fio, D, 1818496\n    0.001965818, 22892, fio, Q, 1818624\n\n")),(0,o.kt)("p",null,"Now, we can do all above command again and change the ",(0,o.kt)("strong",{parentName:"p"},"section")," to rw for fio using the randon write pattern. The ",(0,o.kt)("strong",{parentName:"p"},"blkparse")," result will show the random sequence number."),(0,o.kt)("h1",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this article, we try to use tools ",(0,o.kt)("strong",{parentName:"p"},"blktrace")," and ",(0,o.kt)("strong",{parentName:"p"},"blkparse")," to analysiz the block level I/O  for ",(0,o.kt)("strong",{parentName:"p"},"fio")," request.\nWe observe the filed ",(0,o.kt)("strong",{parentName:"p"},"sequence number")," to make sure thhat the fio can generate the ",(0,o.kt)("strong",{parentName:"p"},"sequence")," or ",(0,o.kt)("strong",{parentName:"p"},"random")," according to its config."),(0,o.kt)("h1",{id:"reference"},"Reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://fibrevillage.com/storage/539-blktrace-and-btt-example-to-debug-and-tune-disk-i-o-on-linux"},"539-blktrace-and-btt-example-to-debug-and-tune-disk-i-o-on-linux"))))}m.isMDXComponent=!0}}]);