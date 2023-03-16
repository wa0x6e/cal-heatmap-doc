"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[7646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,d=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),s=p(n),c=l,k=s["".concat(d,".").concat(c)]||s[c]||u[c]||o;return n?a.createElement(k,i(i({ref:t},m),{},{components:n})):a.createElement(k,i({ref:t},m))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=c;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[s]="string"==typeof e?e:l,i[1]=r;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1007:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),l=n(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000"}=e;return a.createElement("div",{className:o.browserWindow,style:{minHeight:n}},a.createElement("div",{className:o.browserWindowHeader},a.createElement("div",{className:o.buttons},a.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,l.Z)(o.browserWindowAddressBar,"text--truncate")},i),a.createElement("div",{className:o.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar})))),a.createElement("div",{className:o.browserWindowBody},t))}},3971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>m});var a=n(7462),l=(n(7294),n(3905)),o=n(1007);const i={title:"subDomain",sidebar_position:4},r=void 0,d={unversionedId:"options/subDomain",id:"options/subDomain",title:"subDomain",description:"Specify all options related to the subDomain configuration",source:"@site/docs/options/subDomain.md",sourceDirName:"options",slug:"/options/subDomain",permalink:"/docs/options/subDomain",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/subDomain.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"subDomain",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"label",permalink:"/docs/options/domain/label"},next:{title:"date",permalink:"/docs/options/date"}},p={},m=[{value:"<code>type</code>",id:"type",level:2},{value:"<code>month</code>",id:"month",level:3},{value:"<code>week</code>",id:"week",level:3},{value:"<code>day</code>",id:"day",level:3},{value:"<code>hour</code>",id:"hour",level:3},{value:"<code>minute</code>",id:"minute",level:3},{value:"<code>xDay</code>",id:"xday",level:3},{value:"<code>ghDay</code>",id:"ghday",level:3},{value:"<code>gutter</code>",id:"gutter",level:2},{value:"<code>width</code>",id:"width",level:2},{value:"<code>height</code>",id:"height",level:2},{value:"<code>radius</code>",id:"radius",level:2},{value:"<code>label</code>",id:"label",level:2},{value:"<code>color</code>",id:"color",level:2},{value:"<code>sort</code>",id:"sort",level:2}],s={toc:m},u="wrapper";function c(e){let{components:t,...n}=e;return(0,l.kt)(u,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{className:"subhead"},"Specify all options related to the subDomain configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"type subDomain: {\n  type: string,\n  gutter: number,\n  width: number,\n  height: number,\n  radius: number,\n  label:\n    | string\n    | null\n    | ((timestamp: number, value: number, element: SVGElement) => string);\n  color?:\n    | string\n    | ((timestamp: number, value: number, backgroundColor: string) => string);\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h2"},"type")),(0,l.kt)("p",null,"SubDomain's type, representing a time unit."),(0,l.kt)("p",null,"This is the time unit represented by each cell in the calendar."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"type: string,\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"subDomain")," should always be smaller than the ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," type."),(0,l.kt)("p",null,"Each subdomain type have their own layout (rows/columns count, etc ...)"),(0,l.kt)("h3",{id:"month"},(0,l.kt)("inlineCode",{parentName:"h3"},"month")),(0,l.kt)("p",null,"Shows all the months within the domain type"),(0,l.kt)("p",null,"Allowed domain type: ",(0,l.kt)("inlineCode",{parentName:"p"},"year")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 1,\n  itemSelector: '#example-month',\n  domain: { type: 'year' },\n  subDomain: { type: 'month', label: 'MM', width: 15, height: 15 },\n});\n\nrender(<div id=\"example-month\"></div>);\n"))),(0,l.kt)("h3",{id:"week"},(0,l.kt)("inlineCode",{parentName:"h3"},"week")),(0,l.kt)("p",null,"Shows all the weeks within the domain type"),(0,l.kt)("p",null,"Allowed domain type: ",(0,l.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"month")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 1,\n  itemSelector: '#example-week',\n  domain: { type: 'year' },\n  subDomain: { type: 'week', label: 'ww', width: 15, height: 15 },\n});\n\nrender(<div id=\"example-week\"></div>);\n"))),(0,l.kt)("h3",{id:"day"},(0,l.kt)("inlineCode",{parentName:"h3"},"day")),(0,l.kt)("p",null,"Shows all the days within the domain type"),(0,l.kt)("p",null,"Allowed domain type: ",(0,l.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"week")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 4,\n  itemSelector: '#example-day',\n  // Change to month or week to view result\n  domain: { type: 'month' },\n  subDomain: { type: 'day', label: 'DD' },\n});\n\nrender(<div id=\"example-day\"></div>);\n"))),(0,l.kt)("h3",{id:"hour"},(0,l.kt)("inlineCode",{parentName:"h3"},"hour")),(0,l.kt)("p",null,"Shows all the hours within the domain type"),(0,l.kt)("p",null,"Allowed domain type: ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"week"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"day")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("inlineCode",{parentName:"p"},"year")," domain is not allowed for performance issues.")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 1,\n  itemSelector: '#example-hour',\n  // Change to month or week to view result\n  domain: { type: 'day' },\n  subDomain: { type: 'hour', label: 'HH' },\n});\n\nrender(<div id=\"example-hour\"></div>);\n"))),(0,l.kt)("h3",{id:"minute"},(0,l.kt)("inlineCode",{parentName:"h3"},"minute")),(0,l.kt)("p",null,"Shows all the minutes within the domain type"),(0,l.kt)("p",null,"Allowed domain type: ",(0,l.kt)("inlineCode",{parentName:"p"},"day"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"hour")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Other domains are not allowed for performance issues.")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 1,\n  itemSelector: '#example-minute',\n  // Change to hour to view result\n  domain: { type: 'hour' },\n  subDomain: { type: 'minute', label: 'mm' },\n});\n\nrender(<div id=\"example-minute\"></div>);\n"))),(0,l.kt)("p",null,"There's 2 additional variants for the ",(0,l.kt)("inlineCode",{parentName:"p"},"day")," type"),(0,l.kt)("h3",{id:"xday"},(0,l.kt)("inlineCode",{parentName:"h3"},"xDay")),(0,l.kt)("p",null,"Shows all the days within the domain type, but from left to right, and top to bottom"),(0,l.kt)("p",null,"Allowed domain type: ",(0,l.kt)("inlineCode",{parentName:"p"},"year"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"month"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"week")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 4,\n  itemSelector: '#example-xday',\n  // Change to month or week to view result\n  domain: { type: 'month', gutter: 10, dynamicDimension: false },\n  subDomain: { type: 'xDay', label: 'DD' },\n});\n\nrender(<div id=\"example-xday\"></div>);\n"))),(0,l.kt)("h3",{id:"ghday"},(0,l.kt)("inlineCode",{parentName:"h3"},"ghDay")),(0,l.kt)("p",null,"Shows all the days within the domain type, but domain start and end are rounded\nto the first and end of week of the month, so that each column has the same number of days."),(0,l.kt)("p",null,"This subDomain type ensure that there is no gap between domains, as opposed to just ",(0,l.kt)("a",{parentName:"p",href:"#day"},(0,l.kt)("inlineCode",{parentName:"a"},"day"))),(0,l.kt)("p",null,"Allowed domain type: ",(0,l.kt)("inlineCode",{parentName:"p"},"month")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 6,\n  itemSelector: '#example-ghday',\n  // Change to month or week to view result\n  domain: { type: 'month', gutter: 15 },\n  subDomain: { type: 'ghDay', label: 'DD', width: 15, height: 15 },\n});\n\nrender(<div id=\"example-ghday\"></div>);\n"))),(0,l.kt)("p",null,"Note in the above example that the domains does not start and end exactly on the\nfirst and last day of each month, each column represent a full week, to avoid\npartially populated column seen in ",(0,l.kt)("inlineCode",{parentName:"p"},"xDay")," type."),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"First week of the month is computed as the week having at least 4 days in the week.")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can create and add your own custom subDomain type, see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/template"},(0,l.kt)("inlineCode",{parentName:"a"},"Template"))," section.")),(0,l.kt)("h2",{id:"gutter"},(0,l.kt)("inlineCode",{parentName:"h2"},"gutter")),(0,l.kt)("p",null,"Space between each subDomain, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gutter: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"2")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the gutter value to see result\ncal.paint({\n  itemSelector: '#example-gutter',\n  subDomain: { gutter: 2 },\n});\n\nrender(<div id=\"example-gutter\"></div>);\n"))),(0,l.kt)("h2",{id:"width"},(0,l.kt)("inlineCode",{parentName:"h2"},"width")),(0,l.kt)("p",null,"Width of each subDomain cell, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"width: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"10")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the width value to see result\ncal.paint({\n  itemSelector: '#example-width',\n  subDomain: { width: 10 },\n});\n\nrender(<div id=\"example-width\"></div>);\n"))),(0,l.kt)("h2",{id:"height"},(0,l.kt)("inlineCode",{parentName:"h2"},"height")),(0,l.kt)("p",null,"Height of each subDomain cell, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"height: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"10")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the height value to see result\ncal.paint({\n  itemSelector: '#example-height',\n  subDomain: { height: 10 },\n});\n\nrender(<div id=\"example-height\"></div>);\n"))),(0,l.kt)("h2",{id:"radius"},(0,l.kt)("inlineCode",{parentName:"h2"},"radius")),(0,l.kt)("p",null,"Border radius of each subDomain cell, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"radius: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the radius value to see result\ncal.paint({\n  itemSelector: '#example-radius',\n  subDomain: { radius: 2 },\n});\n\nrender(<div id=\"example-radius\"></div>);\n"))),(0,l.kt)("h2",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h2"},"label")),(0,l.kt)("p",null,"Label of the subDomain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"label:\n    | string\n    | null\n    | ((timestamp: number, value: number, element: SVGElement) => string);\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("p",null,"This option accepts different value's type, see table below for usage."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Example output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Pass the string to ",(0,l.kt)("a",{parentName:"td",href:"https://day.js.org/docs/en/display/format"},"dayjs ",(0,l.kt)("inlineCode",{parentName:"a"},"format()")),", and display its result. ",(0,l.kt)("em",{parentName:"td"},"(not value aware)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MMMM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"March"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Do not show any label"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"function")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Display the function's return value. The function takes the subDomain's timestamp, value and the label's SVG Element as argument"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function (timestamp, value) { return `${value} items on ${new Date(date).toISOString()}`; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50 items on 2022-12-06T20:01:51.290Z"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"dayjs ",(0,l.kt)("inlineCode",{parentName:"p"},"format()")," is ",(0,l.kt)("a",{parentName:"p",href:"/docs/options/date#locale"},(0,l.kt)("inlineCode",{parentName:"a"},"locale"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/options/date#timezone"},"timezone")," aware.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Depending on your chosen cell size, subDomain label may overflow")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can customize the style of the subDomain label text via css, or by\nmanipulating the ",(0,l.kt)("inlineCode",{parentName:"p"},"SVGElement")," given as argument when using a ",(0,l.kt)("inlineCode",{parentName:"p"},"function"),".")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 3,\n  domain: { type: 'month' },\n  subDomain: {\n    width: 15,\n    height: 15,\n    type: 'day',\n    label: 'D',\n    color: (t, v, backgroundColor) => {\n      return d3.hcl(backgroundColor).l > 60 ? 'blue' : 'red';\n    },\n  },\n});\n\nrender(<div id=\"cal-heatmap\"></div>);\n"))),(0,l.kt)("h2",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h2"},"color")),(0,l.kt)("p",null,"Color of the subDomain's label"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"color?:\n| string\n| ((timestamp: number, value: number, backgroundColor: string) => string);\n")),(0,l.kt)("p",null,"Default:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"d3.hcl(backgroundColor).l > 60 ? 'black' : 'white';\n")),(0,l.kt)("p",null,"This option accepts different value's type, see table below for usage."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A hexadecimal color code"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#000")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"function")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use the hexadecimal color code returned by the function. The function takes the subDomain's timestamp, value and background color as argument"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function (timestamp, value, backgroundColor) { return d3.hcl(backgroundColor).l > 60 ? 'black' : 'white' ; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#000"))))),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," value, the same color will be applied to the whole calendar,\nregardless of the subDomain's background color. Depending on your color scale,\nthe label color may not be readable."),(0,l.kt)("p",null,"Using a ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," will allow more fine-tuning of the label color, as you can use:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/d3/d3-scale-chromatic"},"d3-color scale")),(0,l.kt)("li",{parentName:"ul"},"a range of static colors (i.e ",(0,l.kt)("inlineCode",{parentName:"li"},"['#fff', '#eee', '#000']"),", matching the ",(0,l.kt)("a",{parentName:"li",href:"/docs/options/scale"},(0,l.kt)("inlineCode",{parentName:"a"},"scale's range")),")"),(0,l.kt)("li",{parentName:"ul"},"a custom function returning a color, computed from the background color (like the default value)")),(0,l.kt)("h2",{id:"sort"},(0,l.kt)("inlineCode",{parentName:"h2"},"sort")),(0,l.kt)("p",null,"Sort order of the subDomains."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"sort: 'asc' | 'desc';\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"asc")),(0,l.kt)(o.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the sort value to see result\ncal.paint({\n  itemSelector: '#example-sort',\n  domain: { type: 'month' },\n  subDomain: { type: 'day', label: 'D', sort: 'asc' },\n});\n\nrender(<div id=\"example-sort\"></div>);\n"))),(0,l.kt)("admonition",{title:"Option scope",type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"This only affect the subDomain's order, not the Domain. See ",(0,l.kt)("a",{parentName:"p",href:"/docs/options/domain/#sort"},(0,l.kt)("inlineCode",{parentName:"a"},"Domain.sort"))," to also set the domains sort order."),(0,l.kt)("p",{parentName:"admonition"},"You can achieve a RTL result by setting both values to ",(0,l.kt)("inlineCode",{parentName:"p"},"desc"))))}c.isMDXComponent=!0}}]);