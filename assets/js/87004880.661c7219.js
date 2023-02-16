"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[646],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),c=l,k=d["".concat(p,".").concat(c)]||d[c]||u[c]||r;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:l,i[1]=o;for(var m=2;m<r;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1007:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7294),l=n(6010);const r="browserWindow_my1Q",i="browserWindowHeader_jXSR",o="buttons_uHc7",p="browserWindowAddressBar_Pd8y",m="dot_giz1",s="browserWindowMenuIcon_Vhuh",d="bar_rrRL",u="browserWindowBody_Idgs";function c(e){let{children:t,minHeight:n,url:c="http://localhost:3000"}=e;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:i},a.createElement("div",{className:o},a.createElement("span",{className:m,style:{background:"#f25f58"}}),a.createElement("span",{className:m,style:{background:"#fbbe3c"}}),a.createElement("span",{className:m,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,l.Z)(p,"text--truncate")},c),a.createElement("div",{className:s},a.createElement("div",null,a.createElement("span",{className:d}),a.createElement("span",{className:d}),a.createElement("span",{className:d})))),a.createElement("div",{className:u},t))}},3971:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),l=(n(7294),n(3905)),r=n(1007);const i={title:"subDomain",sidebar_position:4},o=void 0,p={unversionedId:"options/subDomain",id:"options/subDomain",title:"subDomain",description:"Specify all options related to the subDomain configuration",source:"@site/docs/options/subDomain.md",sourceDirName:"options",slug:"/options/subDomain",permalink:"/docs/options/subDomain",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/subDomain.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"subDomain",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"subLabel",permalink:"/docs/options/domain/sublabel"},next:{title:"date",permalink:"/docs/options/date"}},m={},s=[{value:"<code>type</code>",id:"type",level:2},{value:"Built-in types",id:"built-in-types",level:3},{value:"<code>gutter</code>",id:"gutter",level:2},{value:"<code>width</code>",id:"width",level:2},{value:"<code>height</code>",id:"height",level:2},{value:"<code>radius</code>",id:"radius",level:2},{value:"<code>label</code>",id:"label",level:2},{value:"<code>color</code>",id:"color",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",{class:"subhead"},"Specify all options related to the subDomain configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"type subDomain: {\n  type: string,\n  gutter: number,\n  width: number,\n  height: number,\n  radius: number,\n  label:\n    | string\n    | null\n    | ((timestamp: number, value: number, element: SVGElement) => string);\n  color?:\n    | string\n    | ((timestamp: number, value: number, backgroundColor: string) => string);\n}\n")),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"type"},(0,l.kt)("inlineCode",{parentName:"h2"},"type")),(0,l.kt)("p",null,"SubDomain's type, representing a time unit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"type: string,\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"subDomain")," should always be smaller than the ",(0,l.kt)("inlineCode",{parentName:"p"},"domain")," type."),(0,l.kt)("h3",{id:"built-in-types"},"Built-in types"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"month")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"week")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"day")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"x_day")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"hour")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"minute"))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can create and add your own custom subDomain type, see the ",(0,l.kt)("a",{parentName:"p",href:"/docs/template"},(0,l.kt)("inlineCode",{parentName:"a"},"Template"))," section.")),(0,l.kt)("h2",{id:"gutter"},(0,l.kt)("inlineCode",{parentName:"h2"},"gutter")),(0,l.kt)("p",null,"Space between each subDomain, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"gutter: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"2")),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the gutter value to see result\ncal.paint({\n  itemSelector: '#example-gutter',\n  subDomain: { gutter: 2 },\n});\n\nrender(<div id=\"example-gutter\"></div>);\n"))),(0,l.kt)("h2",{id:"width"},(0,l.kt)("inlineCode",{parentName:"h2"},"width")),(0,l.kt)("p",null,"Width of each subDomain cell, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"width: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"10")),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the width value to see result\ncal.paint({\n  itemSelector: '#example-width',\n  subDomain: { width: 10 },\n});\n\nrender(<div id=\"example-width\"></div>);\n"))),(0,l.kt)("h2",{id:"height"},(0,l.kt)("inlineCode",{parentName:"h2"},"height")),(0,l.kt)("p",null,"Height of each subDomain cell, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"height: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"10")),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the height value to see result\ncal.paint({\n  itemSelector: '#example-height',\n  subDomain: { height: 10 },\n});\n\nrender(<div id=\"example-height\"></div>);\n"))),(0,l.kt)("h2",{id:"radius"},(0,l.kt)("inlineCode",{parentName:"h2"},"radius")),(0,l.kt)("p",null,"Border radius of each subDomain cell, in pixel"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"radius: number,\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"0")),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\n// Change the radius value to see result\ncal.paint({\n  itemSelector: '#example-radius',\n  subDomain: { radius: 2 },\n});\n\nrender(<div id=\"example-radius\"></div>);\n"))),(0,l.kt)("h2",{id:"label"},(0,l.kt)("inlineCode",{parentName:"h2"},"label")),(0,l.kt)("p",null,"Label of the subDomain"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"label:\n    | string\n    | null\n    | ((timestamp: number, value: number, element: SVGElement) => string);\n")),(0,l.kt)("p",null,"Default: ",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("p",null,"This option accepts different value's type, see table below for usage."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Example output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Pass the string to ",(0,l.kt)("a",{parentName:"td",href:"https://day.js.org/docs/en/display/format"},"dayjs ",(0,l.kt)("inlineCode",{parentName:"a"},"format()")),", and display its result. ",(0,l.kt)("em",{parentName:"td"},"(not value aware)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"MMMM")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"March"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Do not show any label"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"null")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"function")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Display the function's return value. The function takes the subDomain's timestamp, value and the label's SVG Element as argument"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function (timestamp, value) { return `${value} items on ${new Date(date).toISOString()}`; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"50 items on 2022-12-06T20:01:51.290Z"))))),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"dayjs ",(0,l.kt)("inlineCode",{parentName:"p"},"format()")," is ",(0,l.kt)("a",{parentName:"p",href:"/docs/options/date#locale"},(0,l.kt)("inlineCode",{parentName:"a"},"locale"))," and ",(0,l.kt)("a",{parentName:"p",href:"/docs/options/date#timezone"},"timezone")," aware.")),(0,l.kt)("admonition",{type:"caution"},(0,l.kt)("p",{parentName:"admonition"},"Depending on your chosen cell size, subDomain label may overflow")),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"You can customize the style of the subDomain label text via css, or by\nmanipulating the ",(0,l.kt)("inlineCode",{parentName:"p"},"SVGElement")," given as argument when using a ",(0,l.kt)("inlineCode",{parentName:"p"},"function"),".")),(0,l.kt)(r.Z,{mdxType:"BrowserWindow"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 3,\n  domain: { type: 'month' },\n  subDomain: {\n    width: 15,\n    height: 15,\n    type: 'day',\n    label: 'D',\n    color: (t, v, backgroundColor) => {\n      return d3.hcl(backgroundColor).l > 60 ? 'blue' : 'red';\n    },\n  },\n});\n\nrender(<div id=\"cal-heatmap\"></div>);\n"))),(0,l.kt)("h2",{id:"color"},(0,l.kt)("inlineCode",{parentName:"h2"},"color")),(0,l.kt)("p",null,"Color of the subDomain's label"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"color?:\n| string\n| ((timestamp: number, value: number, backgroundColor: string) => string);\n")),(0,l.kt)("p",null,"Default:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"d3.hcl(backgroundColor).l > 60 ? 'black' : 'white';\n")),(0,l.kt)("p",null,"This option accepts different value's type, see table below for usage."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Value"),(0,l.kt)("th",{parentName:"tr",align:null},"Example Output"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A hexadecimal color code"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#000")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#000"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"function")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Use the hexadecimal color code returned by the function. The function takes the subDomain's timestamp, value and background color as argument"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"function (timestamp, value, backgroundColor) { return d3.hcl(backgroundColor).l > 60 ? 'black' : 'white' ; }")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"#000"))))),(0,l.kt)("p",null,"Using the ",(0,l.kt)("inlineCode",{parentName:"p"},"string")," value, the same color will be applied to the whole calendar,\nregardless of the subDomain's background color. Depending on your color scale,\nthe label color may not be readable."),(0,l.kt)("p",null,"Using a ",(0,l.kt)("inlineCode",{parentName:"p"},"function")," will allow more fine-tuning of the label color, as you can use:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/d3/d3-scale-chromatic"},"d3-color scale")),(0,l.kt)("li",{parentName:"ul"},"a range of static colors (i.e ",(0,l.kt)("inlineCode",{parentName:"li"},"['#fff', '#eee', '#000']"),", matching the ",(0,l.kt)("a",{parentName:"li",href:"/docs/options/scale"},(0,l.kt)("inlineCode",{parentName:"a"},"scale's range")),")"),(0,l.kt)("li",{parentName:"ul"},"a custom function returning a color, computed from the background color (like the default value)")))}u.isMDXComponent=!0}}]);