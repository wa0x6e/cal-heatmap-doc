"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[3680],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?n.createElement(g,i(i({ref:t},s),{},{components:a})):n.createElement(g,i({ref:t},s))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8332:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={title:"data",sidebar_position:6},i=void 0,o={unversionedId:"options/data",id:"options/data",title:"data",description:"Specify how to fetch and process the data used to fill the calendar",source:"@site/docs/options/data.md",sourceDirName:"options",slug:"/options/data",permalink:"/docs/options/data",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/data.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"data",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"date",permalink:"/docs/options/date"},next:{title:"verticalOrientation",permalink:"/docs/options/verticalOrientation"}},p={},u=[{value:"<code>source</code>",id:"source",level:2},{value:"Using a local object",id:"using-a-local-object",level:3},{value:"Fetching data from a remote source",id:"fetching-data-from-a-remote-source",level:3},{value:"<code>type</code>",id:"type",level:2},{value:"<code>requestInit</code>",id:"requestinit",level:2},{value:"<code>x</code>",id:"x",level:2},{value:"Example",id:"example",level:4},{value:"<code>y</code>",id:"y",level:2},{value:"Example",id:"example-1",level:4},{value:"<code>groupY</code>",id:"groupy",level:2},{value:"Example",id:"example-2",level:4}],s={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",{className:"subhead"},"Specify how to fetch and process the data used to fill the calendar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type DataRecord = Record<string, string | number>;\ntype DataGroupType = 'sum' | 'count' | 'min' | 'max' | 'median';\n\ntype DataOptions = {\n  source: string | DataRecord[],\n  type: 'json' | 'csv' | 'tsv' | 'txt',\n  requestInit: object,\n  x: string | ((datum: DataRecord) => number),\n  y: string | ((datum: DataRecord) => number),\n  groupY: DataGroupType | ((values: number[]) => number),\n};\n")),(0,r.kt)("p",null,"The calendar is expecting an array of objects as input.",(0,r.kt)("br",{parentName:"p"}),"\n","There is no expected pre-defined structure for the object,\nbut it must at least have one or more property for the date,\nand another one for the value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Classic object"',title:'"Classic','object"':!0},"[\n  { date: '2012-01-01', value: 3 },\n  { date: '2012-01-02', value: 6 },\n  ...\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using timestamp"',title:'"Using','timestamp"':!0},"[\n  { t: 1673388319933, p: 3, v: 58 },\n  { t: 1673388319934, p: 6, v: 1 },\n  ...\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using multiple properties to define a date"',title:'"Using',multiple:!0,properties:!0,to:!0,define:!0,a:!0,'date"':!0},"[\n  { year: 2020, month: 1, day: 1, temperature: 38 },\n  ...\n];\n")),(0,r.kt)("p",null,"More options are available below to instruct the calendar on\nhow to fetch, read and extract the date and value from your dataset."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"source"},(0,r.kt)("inlineCode",{parentName:"h2"},"source")),(0,r.kt)("p",null,"Data used to populate the calendar."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"source: string | DataRecord[],\n")),(0,r.kt)("p",null,"There are 2 ways to pass your data to the calendar:"),(0,r.kt)("h3",{id:"using-a-local-object"},"Using a local object"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// highlight-start\nconst data = [\n  { date: '2012-01-01', value: 3 },\n  { date: '2012-01-02', value: 6 },\n];\n// highlight-end\n\nconst cal = new CalHeatmap();\ncal.paint({\n  // highlight-next-line\n  data: { source: data },\n});\n")),(0,r.kt)("h3",{id:"fetching-data-from-a-remote-source"},"Fetching data from a remote source"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," value will be interpreted as an url, and the data\nwill be retrieved via a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\ncal.paint({\n  // highlight-next-line\n  data: { source: 'https://your-api.com/data.json' },\n});\n")),(0,r.kt)("p",null,"Some tokens are available to customize your url,\nin order to limit the data time range from your remote source."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Token"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Example output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{t:start}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp (in seconds)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1673388319"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{t:end}")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Timestamp (in seconds)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"1673388319"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{d:start}")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString"},"ISO 8601 formatted Date")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2011-10-05T14:48:00.000Z"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"{d:end}")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString"},"ISO 8601 formatted Date")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"2011-10-05T14:48:00.000Z"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"start")," refers to the start of the first subDomain of the calendar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"end")," refers to the end of the last subDomain of the calendar")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"start")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"end")," time range are both inclusive.")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"The tokens' value will dynamically update on ",(0,r.kt)("a",{parentName:"p",href:"/docs/API/navigation/"},"navigation"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage"',title:'"Usage"'},"const cal = new CalHeatmap();\ncal.paint({\n  // highlight-next-line\n  data: { source: 'https://your-api.com/data?start={t:start}&end{t:end}' },\n});\n")),(0,r.kt)("p",null,"If the remote source is behind authentication, or requires additional request\ncustomization, see ",(0,r.kt)("a",{parentName:"p",href:"#requestinit"},"requestInit"),"."),(0,r.kt)("h2",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h2"},"type")),(0,r.kt)("p",null,"Parser used to interpret the data returned by your url source."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type: 'json' | 'csv' | 'tsv' | 'txt',\n")),(0,r.kt)("p",null,"The parser will interpret the data, and convert it to an array of DataRecord."),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"json")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This option is used only when the ",(0,r.kt)("a",{parentName:"p",href:"#source"},(0,r.kt)("inlineCode",{parentName:"a"},"source"))," is an url.")),(0,r.kt)("h2",{id:"requestinit"},(0,r.kt)("inlineCode",{parentName:"h2"},"requestInit")),(0,r.kt)("p",null,"Additional ",(0,r.kt)("a",{parentName:"p",href:"https://fetch.spec.whatwg.org/#requestinit"},"requestInit")," options, send along your data request."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-fetch"},"d3-fetch")," is used under the hood to handle all network requests. See their documentation for further information and usage."),(0,r.kt)("p",null,"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This option is used only when the ",(0,r.kt)("inlineCode",{parentName:"p"},"source")," is an url.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage"',title:'"Usage"'},"{\n    method: 'POST', // *GET, POST, PUT, DELETE, etc.\n    mode: 'cors', // no-cors, *cors, same-origin\n    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached\n    credentials: 'same-origin', // include, *same-origin, omit\n    headers: {\n      'Content-Type': 'application/json'\n      // 'Content-Type': 'application/x-www-form-urlencoded',\n    },\n    redirect: 'follow', // manual, *follow, error\n    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url\n  }\n")),(0,r.kt)("h2",{id:"x"},(0,r.kt)("inlineCode",{parentName:"h2"},"x")),(0,r.kt)("p",null,"Property name of the date, or a function returning a timestamp.",(0,r.kt)("br",{parentName:"p"}),"\n","Instruct the calendar how to extract the ",(0,r.kt)("em",{parentName:"p"},"date")," property from your data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"x: string | ((datum: DataRecord) => number),\n")),(0,r.kt)("p",null,"You can either pass a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": key name of the property holding the date, in your datum object. The date will be parsed using ",(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date.parse")),". Ensure that\nthe date format is ISO 8601 compliant."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function"),": function taking the datum as argument, and should return a timestamp")),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Extract date using property name"',title:'"Extract',date:!0,using:!0,property:!0,'name"':!0},"// highlight-next-line\nvar data = [{ column1: '2012-01-01', column2: 3 }];\n\ncal.paint({\n  // highlight-next-line\n  data: { source: data, x: 'column1' },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Extract date using a custom function"',title:'"Extract',date:!0,using:!0,a:!0,custom:!0,'function"':!0},"// highlight-next-line\nvar data = [{ column1: '2012-01-01', column2: 3 }];\n\ncal.paint({\n  data: {\n    source: data,\n    // highlight-start\n    x: datum => {\n      return +new Date(datum['column1']);\n    },\n    // highlight-end\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Compute date from multiple properties"',title:'"Compute',date:!0,from:!0,multiple:!0,'properties"':!0},"// highlight-next-line\nvar data = [{ year: 2020, month: 1, value: 3 }];\n\ncal.paint({\n  data: {\n    source: data,\n    // highlight-start\n    x: datum => {\n      return +new Date(datum['year'], datum['month'] - 1, 1);\n    },\n    // highlight-end\n  },\n});\n")),(0,r.kt)("h2",{id:"y"},(0,r.kt)("inlineCode",{parentName:"h2"},"y")),(0,r.kt)("p",null,"Property name of the the value, or a function returning the value.",(0,r.kt)("br",{parentName:"p"}),"\n","Instruct the calendar how to extract the ",(0,r.kt)("em",{parentName:"p"},"value")," property from your data."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"y: string | ((datum: DataRecord) => number),\n")),(0,r.kt)("p",null,"You can either pass a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": key name of the property holding the value, in your datum object. The value should be a number."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function"),": function taking the datum as argument, and should return the value, as a number.")),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Extract value using property name"',title:'"Extract',value:!0,using:!0,property:!0,'name"':!0},"// highlight-next-line\nvar data = [{ column1: '2012-01-01', column2: 3 }];\n\ncal.paint({\n  // highlight-next-line\n  data: { source: data, y: 'column2' },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Extract value using a built-in function"',title:'"Extract',value:!0,using:!0,a:!0,"built-in":!0,'function"':!0},"// highlight-next-line\nvar data = [{ date: '2012-01-01', high: '30', low: '16' }];\n\ncal.paint({\n  data: {\n    source: data,\n    // highlight-start\n    y: datum => {\n      // You can use the function to pre-process your values\n      return +datum['high'] + +datum['low']) / 2;\n    },\n    // highlight-end\n  },\n});\n")),(0,r.kt)("h2",{id:"groupy"},(0,r.kt)("inlineCode",{parentName:"h2"},"groupY")),(0,r.kt)("p",null,"Aggregate function, to group all values from the same subDomain."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type DataGroupType = 'sum' | 'count' | 'min' | 'max' | 'median';\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"groupY: DataGroupType | ((values: number[]) => number),\n")),(0,r.kt)("p",null,"You can either pass a:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string"),": name of a built-in aggregate function (see ",(0,r.kt)("em",{parentName:"li"},"DataGroupType"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"function"),": function taking an array of datum from the same subDomain, and should return a new aggregated value.")),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="data.js"',title:'"data.js"'},"var data = [\n  { column1: '2012-01-01', column2: 3 },\n  { column1: '2012-01-01', column2: 3 },\n  { column1: '2012-01-02', column2: 3 },\n];\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Group using a built-in function"',title:'"Group',using:!0,a:!0,"built-in":!0,'function"':!0},"cal.paint({\n  data: {\n    source: data,\n    x: 'column1',\n    y: 'column2',\n    // highlight-next-line\n    groupY: 'sum',\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Group using a custom function"',title:'"Group',using:!0,a:!0,custom:!0,'function"':!0},"cal.paint({\n  data: {\n    source: data,\n    x: 'column1',\n    y: 'column2',\n    // highlight-start\n    groupY: data => {\n      return data.reduce((a, b) => a + b, 0);\n    },\n    // highlight-end\n  },\n});\n")))}c.isMDXComponent=!0}}]);