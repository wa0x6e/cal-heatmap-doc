"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[9454],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),a=n(6010),o=n(3438),i=n(9960),c=n(3919),s=n(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function d(e){let{href:t,children:n}=e;return r.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},n)}function p(e){let{href:t,icon:n,title:o,description:i}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},n," ",o),i&&r.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function m(e){let{item:t}=e;const n=(0,o.Wl)(t);return n?r.createElement(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function u(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return r.createElement(p,{href:t.href,icon:n,title:t.label,description:a?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(u,{item:t});case"category":return r.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const n=(0,o.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(f,e);const i=(0,o.MN)(t);return r.createElement("section",{className:(0,a.Z)("row",n)},i.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(b,{item:e})))))}},1007:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(7294),a=n(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:t,minHeight:n,url:i="http://localhost:3000"}=e;return r.createElement("div",{className:o.browserWindow,style:{minHeight:n}},r.createElement("div",{className:o.browserWindowHeader},r.createElement("div",{className:o.buttons},r.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(o.browserWindowAddressBar,"text--truncate")},i),r.createElement("div",{className:o.browserWindowMenuIcon},r.createElement("div",null,r.createElement("span",{className:o.bar}),r.createElement("span",{className:o.bar}),r.createElement("span",{className:o.bar})))),r.createElement("div",{className:o.browserWindowBody},t))}},1202:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(1007),i=n(2991);const c={title:"Options",sidebar_position:3,id:"options"},s=void 0,l={unversionedId:"options/options",id:"options/options",title:"Options",description:"Customize the UI and content of the calendar",source:"@site/docs/options/index.md",sourceDirName:"options",slug:"/options/",permalink:"/docs/options/",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Options",sidebar_position:3,id:"options"},sidebar:"tutorialSidebar",previous:{title:"Typescript",permalink:"/docs/getting-started/typescript"},next:{title:"itemSelector",permalink:"/docs/options/itemSelector"}},d={},p=[],m={toc:p},u="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",{className:"subhead"},"Customize the UI and content of the calendar"),(0,a.kt)("p",null,"The calendar can be customized by passing an ",(0,a.kt)("inlineCode",{parentName:"p"},"Options")," object to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/API/paint"},(0,a.kt)("inlineCode",{parentName:"a"},"paint()"))," method on the calendar instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Usage"',title:'"Usage"'},"const cal = new CalHeatmap();\n// highlight-next-line\ncal.paint(options?: Options): Promise<unknown>;\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Type Signature"',title:'"Type','Signature"':!0},"type Options = {\n  itemSelector: Element | string,\n  range: number,\n  domain: DomainOptions,\n  subDomain: SubDomainOptions,\n  verticalOrientation: boolean,\n  date: DateOptions,\n  data: DataOptions,\n  label: LabelOptions,\n  animationDuration: number,\n  scale: ScaleOptions,\n  theme: 'light' | 'dark',\n};\n")),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Throughout the documentation, you will see block like the following"),(0,a.kt)(o.Z,{mdxType:"BrowserWindow"},(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},'const cal = new CalHeatmap();\ncal.paint({ range: 1 });\n\nrender(<div id="cal-heatmap"></div>);\n'))),(0,a.kt)("p",{parentName:"admonition"},"These are ",(0,a.kt)("em",{parentName:"p"},"live editor"),":\nyou can edit the code inline, and see the result in live."),(0,a.kt)("p",{parentName:"admonition"},"Use them to test settings, and see what happen.")))}b.isMDXComponent=!0}}]);