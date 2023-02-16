"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),m=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=m(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||p[u]||o;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[c]="string"==typeof e?e:i,l[1]=r;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4606:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>m});var a=n(7462),i=(n(7294),n(3905));const o={title:"Events",sidebar_position:6},l=void 0,r={unversionedId:"events",id:"events",title:"Events",description:"Listen for events emitted by the calendar",source:"@site/docs/events.md",sourceDirName:".",slug:"/events",permalink:"/docs/events",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/events.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Events",sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"scale",permalink:"/docs/options/scale"},next:{title:"Plugins",permalink:"/docs/plugins/"}},s={},m=[{value:"Events list",id:"events-list",level:2},{value:"<code>resize</code>",id:"resize",level:3},{value:"Arguments:",id:"arguments",level:4},{value:"<code>fill</code>",id:"fill",level:3},{value:"Arguments: <code>none</code>",id:"arguments-none",level:4},{value:"<code>click</code>",id:"click",level:3},{value:"Arguments:",id:"arguments-1",level:4},{value:"<code>mouseover</code>",id:"mouseover",level:3},{value:"Arguments:",id:"arguments-2",level:4},{value:"<code>mouseout</code>",id:"mouseout",level:3},{value:"Arguments:",id:"arguments-3",level:4},{value:"<code>minDateReached</code>",id:"mindatereached",level:3},{value:"Arguments: <code>none</code>",id:"arguments-none-1",level:4},{value:"<code>maxDateReached</code>",id:"maxdatereached",level:3},{value:"Arguments: <code>none</code>",id:"arguments-none-2",level:4},{value:"<code>minDateNotReached</code>",id:"mindatenotreached",level:3},{value:"Arguments: <code>none</code>",id:"arguments-none-3",level:4},{value:"<code>maxDateNotReached</code>",id:"maxdatenotreached",level:3},{value:"Arguments: <code>none</code>",id:"arguments-none-4",level:4},{value:"<code>destroy</code>",id:"destroy",level:3},{value:"Arguments: <code>none</code>",id:"arguments-none-5",level:4}],d={toc:m};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",{class:"subhead"},"Listen for events emitted by the calendar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\n// highlight-start\ncal.on(eventName: string, (arguments: any): void => {\n  // Do something with the arguments on event trigger\n})\n// highlight-end\ncal.paint();\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Define your listeners before calling ",(0,i.kt)("inlineCode",{parentName:"p"},"paint()"),", to make sure you're catching events emitted by the ",(0,i.kt)("inlineCode",{parentName:"p"},"paint()")," call.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"events-list"},"Events list"),(0,i.kt)("h3",{id:"resize"},(0,i.kt)("inlineCode",{parentName:"h3"},"resize")),(0,i.kt)("p",null,"Event emitted when the calendar size has changed."),(0,i.kt)("h4",{id:"arguments"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newWidth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"newHeight")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oldWidth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"oldHeight"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('resize', (newW, newH, oldW, oldH) => {\n  console.log(\n    `Calendar has been resized from ${oldW}x${oldH} to ${newW}x${newH}`\n  );\n});\n")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can also retrieve the calendar's dimensions with ",(0,i.kt)("a",{parentName:"p",href:"/docs/API/dimensions"},(0,i.kt)("inlineCode",{parentName:"a"},"dimensions()")))),(0,i.kt)("h3",{id:"fill"},(0,i.kt)("inlineCode",{parentName:"h3"},"fill")),(0,i.kt)("p",null,"Event emitted after new data have been loaded and painted into the calendar."),(0,i.kt)("h4",{id:"arguments-none"},"Arguments: ",(0,i.kt)("inlineCode",{parentName:"h4"},"none")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('fill', () => {\n  console.log('New data have been loaded!');\n});\n")),(0,i.kt)("h3",{id:"click"},(0,i.kt)("inlineCode",{parentName:"h3"},"click")),(0,i.kt)("p",null,"Event emitted on a subDomain cell click"),(0,i.kt)("h4",{id:"arguments-1"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"PointerEvent"))," object"),(0,i.kt)("li",{parentName:"ul"},"subDomain timestamp (in ms), rounded to the start of the subdomain"),(0,i.kt)("li",{parentName:"ul"},"Value (from your dataset) associated to this subdomain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('click', (event, timestamp, value) => {\n  console.log(\n    'On <b>' +\n      new Date(timestamp).toLocaleDateString() +\n      '</b>, the max temperature was ' +\n      value +\n      '\xb0C'\n  );\n});\n")),(0,i.kt)("h3",{id:"mouseover"},(0,i.kt)("inlineCode",{parentName:"h3"},"mouseover")),(0,i.kt)("p",null,"Event emitted when the mouse enter a subDomain cell."),(0,i.kt)("h4",{id:"arguments-2"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"PointerEvent"))," object"),(0,i.kt)("li",{parentName:"ul"},"subDomain timestamp (in ms), rounded to the start of the subdomain"),(0,i.kt)("li",{parentName:"ul"},"Value (from your dataset) associated to this subdomain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('mouseover', (event, timestamp, value) => {\n  console.log(\n    'On <b>' +\n      new Date(timestamp).toLocaleDateString() +\n      '</b>, the max temperature was ' +\n      value +\n      '\xb0C'\n  );\n});\n")),(0,i.kt)("h3",{id:"mouseout"},(0,i.kt)("inlineCode",{parentName:"h3"},"mouseout")),(0,i.kt)("p",null,"Event emitted when the mouse exit a subDomain cell."),(0,i.kt)("h4",{id:"arguments-3"},"Arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/PointerEvent"},(0,i.kt)("inlineCode",{parentName:"a"},"PointerEvent"))," object"),(0,i.kt)("li",{parentName:"ul"},"subDomain timestamp (in ms), rounded to the start of the subdomain"),(0,i.kt)("li",{parentName:"ul"},"Value (from your dataset) associated to this subdomain")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('mouseout', (event, timestamp, value) => {\n  console.log(\n    'On <b>' +\n      new Date(timestamp).toLocaleDateString() +\n      '</b>, the max temperature was ' +\n      value +\n      '\xb0C'\n  );\n});\n")),(0,i.kt)("h3",{id:"mindatereached"},(0,i.kt)("inlineCode",{parentName:"h3"},"minDateReached")),(0,i.kt)("p",null,"Event emitted after a navigation event, and when the calendar has reached the ",(0,i.kt)("a",{parentName:"p",href:"/docs/options/date#min"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," date, if set."),(0,i.kt)("h4",{id:"arguments-none-1"},"Arguments: ",(0,i.kt)("inlineCode",{parentName:"h4"},"none")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('minDateReached', () => {\n  // Do something to disable the navigation PREVIOUS button\n});\n")),(0,i.kt)("h3",{id:"maxdatereached"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxDateReached")),(0,i.kt)("p",null,"Event emitted after a navigation event, and when the calendar has reached the ",(0,i.kt)("a",{parentName:"p",href:"/docs/options/date#max"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," date, if set."),(0,i.kt)("h4",{id:"arguments-none-2"},"Arguments: ",(0,i.kt)("inlineCode",{parentName:"h4"},"none")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('maxDateReached', () => {\n  // Do something to disable the navigation NEXT button\n});\n")),(0,i.kt)("h3",{id:"mindatenotreached"},(0,i.kt)("inlineCode",{parentName:"h3"},"minDateNotReached")),(0,i.kt)("p",null,"Event emitted after a navigation event, and when the calendar has ",(0,i.kt)("em",{parentName:"p"},"not")," reached the ",(0,i.kt)("a",{parentName:"p",href:"/docs/options/date#min"},(0,i.kt)("inlineCode",{parentName:"a"},"min"))," date, if set.\nUsed to exit the calendar from the ",(0,i.kt)("inlineCode",{parentName:"p"},"minDateReached")," status."),(0,i.kt)("h4",{id:"arguments-none-3"},"Arguments: ",(0,i.kt)("inlineCode",{parentName:"h4"},"none")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('minDateNotReached', () => {\n  // Do something to enable back the PREVIOUS button,\n  // after disabling it with the minDateReached event\n});\n")),(0,i.kt)("h3",{id:"maxdatenotreached"},(0,i.kt)("inlineCode",{parentName:"h3"},"maxDateNotReached")),(0,i.kt)("p",null,"Event emitted after a navigation event, and when the calendar has ",(0,i.kt)("em",{parentName:"p"},"not")," reached the ",(0,i.kt)("a",{parentName:"p",href:"/docs/options/date#max"},(0,i.kt)("inlineCode",{parentName:"a"},"max"))," date, if set.\nUsed to exit the calendar from the ",(0,i.kt)("inlineCode",{parentName:"p"},"maxDateReached")," status."),(0,i.kt)("h4",{id:"arguments-none-4"},"Arguments: ",(0,i.kt)("inlineCode",{parentName:"h4"},"none")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('maxDateNotReached', () => {\n  // Do something to enable back the NEXT button,\n  // after disabling it with the maxDateReached event\n});\n")),(0,i.kt)("h3",{id:"destroy"},(0,i.kt)("inlineCode",{parentName:"h3"},"destroy")),(0,i.kt)("p",null,"Event emitted when calling ",(0,i.kt)("a",{parentName:"p",href:"/docs/API/destroy"},(0,i.kt)("inlineCode",{parentName:"a"},"destroy()")),"."),(0,i.kt)("h4",{id:"arguments-none-5"},"Arguments: ",(0,i.kt)("inlineCode",{parentName:"h4"},"none")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This event is emitted at the start of the destroy process,\nuse the promise returned by ",(0,i.kt)("a",{parentName:"p",href:"/docs/API/destroy"},(0,i.kt)("inlineCode",{parentName:"a"},"destroy()"))," if you want to wait for the\ndestroy process to complete.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage example"',title:'"Usage','example"':!0},"cal.on('destroy', () => {\n  // Calendar has started destroying\n  // Do something\n});\n")))}c.isMDXComponent=!0}}]);