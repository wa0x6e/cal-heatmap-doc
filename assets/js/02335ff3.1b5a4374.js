"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[530],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,g=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>b});var r=n(7294),i=n(6010),a=n(3438),o=n(9960),l=n(3919),c=n(5999);const s="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function d(e){let{href:t,children:n}=e;return r.createElement(o.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},n)}function m(e){let{href:t,icon:n,title:a,description:o}=e;return r.createElement(d,{href:t},r.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:a},n," ",a),o&&r.createElement("p",{className:(0,i.Z)("text--truncate",p),title:o},o))}function g(e){let{item:t}=e;const n=(0,a.Wl)(t);return n?r.createElement(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.xz)(t.docId??void 0);return r.createElement(m,{href:t.href,icon:n,title:t.label,description:i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(f,{item:t});case"category":return r.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,a.jA)();return r.createElement(b,{items:n.items,className:t})}function b(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const o=(0,a.MN)(t);return r.createElement("section",{className:(0,i.Z)("row",n)},o.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(h,{item:e})))))}},2332:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(7462),i=(n(7294),n(3905)),a=n(2991);const o={title:"Plugins",sidebar_position:7},l=void 0,c={unversionedId:"plugins/index",id:"plugins/index",title:"Plugins",description:"Introduction",source:"@site/docs/plugins/index.md",sourceDirName:"plugins",slug:"/plugins/",permalink:"/docs/plugins/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/index.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Plugins",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Events",permalink:"/docs/events"},next:{title:"Legend",permalink:"/docs/plugins/legend"}},s={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Core plugins",id:"core-plugins",level:2},{value:"Usage",id:"usage",level:2},{value:"Write your own plugins",id:"write-your-own-plugins",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Cal-heatmap can be customized further with the help of plugins."),(0,i.kt)("p",null,"A plugin is setup within a ",(0,i.kt)("a",{parentName:"p",href:"/docs/API/paint"},(0,i.kt)("inlineCode",{parentName:"a"},"paint()"))," call."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"interface PluginOptions {}\n// IPluginContructor is the plugin's class\ntype PluginDefinition = [IPluginContructor, PluginOptions?];\n\nconst cal = new CalHeatmap();\ncal.paint(options: Options, plugins?: PluginDefinition[] | PluginDefinition),\n")),(0,i.kt)("h2",{id:"core-plugins"},"Core plugins"),(0,i.kt)("p",null,"Below are the built-in plugins shipped with Cal-Heatmap"),(0,i.kt)(a.Z,{mdxType:"DocCardList"}),(0,i.kt)("p",null,"These plugins are not included in the main bundled, and have to be loaded\nseparatly, alongside their dependencies. See each plugin documentation for details."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"const cal = new CalHeatmap();\ncal.paint({}, [[Legend], [Tooltip, { text: t => `${new Date(t)}` }]]);\n")),(0,i.kt)("h2",{id:"write-your-own-plugins"},"Write your own plugins"),(0,i.kt)("admonition",{title:"Docs coming soon",type:"info"}))}d.isMDXComponent=!0}}]);