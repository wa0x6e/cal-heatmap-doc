"use strict";(self.webpackChunkcal_heatmap_doc=self.webpackChunkcal_heatmap_doc||[]).push([[3543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(n),u=r,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1007:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function l(e){let{children:t,minHeight:n,url:l="http://localhost:3000"}=e;return a.createElement("div",{className:o.browserWindow,style:{minHeight:n}},a.createElement("div",{className:o.browserWindowHeader},a.createElement("div",{className:o.buttons},a.createElement("span",{className:o.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:o.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:o.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(o.browserWindowAddressBar,"text--truncate")},l),a.createElement("div",{className:o.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar}),a.createElement("span",{className:o.bar})))),a.createElement("div",{className:o.browserWindowBody},t))}},2247:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),o=n(1007);const l={title:"scale",sidebar_position:47},i="scale",s={unversionedId:"options/scale",id:"options/scale",title:"scale",description:"Control how your data are represented on the heatmap",source:"@site/docs/options/scale.md",sourceDirName:"options",slug:"/options/scale",permalink:"/docs/options/scale",draft:!1,editUrl:"https://github.com/wa0x6e/cal-heatmap-doc/edit/main/docs/options/scale.md",tags:[],version:"current",sidebarPosition:47,frontMatter:{title:"scale",sidebar_position:47},sidebar:"tutorialSidebar",previous:{title:"verticalOrientation",permalink:"/docs/options/verticalOrientation"},next:{title:"animationDuration",permalink:"/docs/options/animationDuration"}},d={},p=[{value:"<code>color</code>",id:"color",level:2},{value:"<code>scheme</code>",id:"scheme",level:3},{value:"Playground",id:"playground",level:4},{value:"<code>range</code>",id:"range",level:3},{value:"<code>interpolate</code>",id:"interpolate",level:3},{value:"Playground",id:"playground-1",level:4},{value:"<code>domain</code>",id:"domain",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>opacity</code>",id:"opacity",level:2},{value:"<code>baseColor</code>",id:"basecolor",level:3},{value:"<code>domain</code>",id:"domain-1",level:3},{value:"<code>type</code>",id:"type-1",level:3},{value:"Playground",id:"playground-2",level:4},{value:"More advanced guide",id:"more-advanced-guide",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"scale"},"scale"),(0,r.kt)("p",{className:"subhead"},"Control how your data are represented on the heatmap"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type scaleOptions = {\n  opacity?: {\n    baseColor: string,\n    domain: number[],\n    type: string,\n  },\n  color?: {\n    scheme: string,\n    range: string[] | d3-scale-chromatic,\n    interpolate: string | d3-interpolator,\n    domain: number[],\n    type: string,\n  },\n};\n")),(0,r.kt)("p",null,"Your dataset can be represented either with a range of different colors, or with a single color with different opacity."),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"color")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," are mutually exclusive, you should only use one.")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"domain")," is always required")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"color"},(0,r.kt)("inlineCode",{parentName:"h2"},"color")),(0,r.kt)("p",null,"Use 2 or more colors to represent your dataset. Depending on the ",(0,r.kt)("a",{parentName:"p",href:"#type"},(0,r.kt)("inlineCode",{parentName:"a"},"type")),", it will use a continuous range of colors, or a discret set."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"color: {\n  scheme: string,\n  range: string[] | d3-scale-chromatic-scheme,\n  interpolate: string | d3-interpolator,\n  domain: number[],\n  type: string,\n},\n")),(0,r.kt)("h3",{id:"scheme"},(0,r.kt)("inlineCode",{parentName:"h3"},"scheme")),(0,r.kt)("p",null,"Use a predefined color scheme name from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-scale-chromatic"},"d3-scale-chromatic"),"."),(0,r.kt)("p",null,"This is the easiest way to bind color to your dataset, using predefined color palette and interpolator"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'scheme: string, // scheme name from d3-chromatic-scale, e.g. "Purple", "RdYlGn"\n')),(0,r.kt)("h4",{id:"playground"},"Playground"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  range: 1,\n  domain: { type: 'year', label: { text: null } },\n  subDomain: { type: 'day' },\n  data: {\n    source: '/fixtures/seattle-weather.csv',\n    type: 'csv',\n    x: 'date',\n    y: d => +d['temp_max'],\n    groupY: 'max',\n  },\n  date: { start: new Date('2012-01-01') },\n  scale: {\n    color: {\n      // Try some values: Purple, Blues, Turbo, Magma, etc ...\n      scheme: 'Cool',\n      type: 'linear',\n      domain: [0, 30],\n    },\n  },\n});\n\nrender(<div id=\"cal-heatmap\"></div>);\n"))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can see a more visual list of predefined color scheme ",(0,r.kt)("a",{parentName:"p",href:"https://observablehq.com/@d3/color-schemes"},"here"))),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"#scheme"},(0,r.kt)("inlineCode",{parentName:"a"},"scheme"))," is mutually exclusive with ",(0,r.kt)("a",{parentName:"p",href:"#range"},(0,r.kt)("inlineCode",{parentName:"a"},"range")),", which will take precedence if set.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"#range"},(0,r.kt)("inlineCode",{parentName:"a"},"range"))," if you want to use your own color palette.")),(0,r.kt)("h3",{id:"range"},(0,r.kt)("inlineCode",{parentName:"h3"},"range")),(0,r.kt)("p",null,"Define your own color palette"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"range: string[] | d3-scale-chromatic-scheme\n")),(0,r.kt)("p",null,"Accepts an array of colors, or a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-scale-chromatic"},"d3 color scheme function"),"."),(0,r.kt)("p",null,"When using an array of colors, it expects a minimum of 2 colors."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using an array of colors"',title:'"Using',an:!0,array:!0,of:!0,'colors"':!0},"const cal = new CalHeatmap();\ncal.paint({\n  scale: {\n    color: {\n      // highlight-next-line\n      range: ['red', '#0000FF'],\n    },\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Using an d3 color scheme function"',title:'"Using',an:!0,d3:!0,color:!0,scheme:!0,'function"':!0},"const cal = new CalHeatmap();\ncal.paint({\n  scale: {\n    color: {\n      // highlight-next-line\n      range: d3.schemeSpectral[3],\n    },\n  },\n});\n")),(0,r.kt)("h3",{id:"interpolate"},(0,r.kt)("inlineCode",{parentName:"h3"},"interpolate")),(0,r.kt)("p",null,"Used in conjuction with ",(0,r.kt)("inlineCode",{parentName:"p"},"range"),", define how to interpolate the color range."),(0,r.kt)("p",null,"The following color interpolators are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"rgb")," - RGB (red, green, blue)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hsl")," - HSL (hue, saturation, lightness)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lab")," - CIELAB (a.k.a. \u201cLab\u201d)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hcl")," - CIELChab (a.k.a. \u201cLCh\u201d or \u201cHCL\u201d)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\ncal.paint({\n  scale: {\n    color: {\n      range: ['red', 'green', 'blue'],\n      // highlight-next-line\n      interpolate: 'hcl',\n    },\n  },\n});\n")),(0,r.kt)("p",null,"Or you can also use a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/d3/d3-interpolate/blob/main/README.md#color-spaces"},"d3.interpolator")," directly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const cal = new CalHeatmap();\ncal.paint({\n  scale: {\n    color: {\n      range: ['red', 'blue'],\n      // highlight-next-line\n      interpolate: d3.interpolateRgb.gamma(2.2),\n    },\n  },\n});\n")),(0,r.kt)("h4",{id:"playground-1"},"Playground"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  itemSelector: '#scale-color',\n  range: 1,\n  domain: { type: 'year', label: { text: null } },\n  subDomain: { type: 'day' },\n  data: {\n    source: '/fixtures/seattle-weather.csv',\n    type: 'csv',\n    x: 'date',\n    y: d => +d['temp_max'],\n    groupY: 'max',\n  },\n  date: { start: new Date('2012-01-01') },\n  scale: {\n    color: {\n      range: ['yellow', 'red'],\n      interpolate: 'hsl',\n      type: 'linear',\n      domain: [0, 30],\n    },\n  },\n});\n\nrender(<div id=\"scale-color\"></div>);\n"))),(0,r.kt)("h3",{id:"domain"},(0,r.kt)("inlineCode",{parentName:"h3"},"domain")),(0,r.kt)("p",null,"An array of at least 2 values, specifying the ",(0,r.kt)("em",{parentName:"p"},"minimum")," and ",(0,r.kt)("em",{parentName:"p"},"maximum")," value of your dataset."),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"threshold"),"'s type, domain should be a list of different threshold"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"domain: number[],\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Linear type, only min/max are required"',title:'"Linear',"type,":!0,only:!0,"min/max":!0,are:!0,'required"':!0},"const cal = new CalHeatmap();\ncal.paint({\n  scale: {\n    color: {\n      // highlight-next-line\n      domain: [-5, 25],\n    },\n  },\n});\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="Threshold type"',title:'"Threshold','type"':!0},"const cal = new CalHeatmap();\ncal.paint({\n  scale: {\n    color: {\n      range: ['red', 'blue'],\n      // highlight-next-line\n      domain: [0, 10, 20, 30, 40, 50],\n      // With n the number of values:\n      // This will generate a scale of 5 (n-1) colors, between red and blue\n      // Use the interpolator to control how the colors are generated,\n      // or you can also use a range with n-1 colors\n    },\n  },\n});\n")),(0,r.kt)("h3",{id:"type"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"The scale type used to encode colors"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"type: string,\n")),(0,r.kt)("p",null,"The following types are supported"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ordinal")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"linear")," (default) - linear transform (translate and scale)-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"pow")," - power (exponential) transform-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sqrt")," - square-root transform (pow transform with exponent = 0.5)-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"log")," - logarithmic transform-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"symlog")," - bi-symmetric logarithmic transform per Webber et al.-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"categorical")," - equivalent to ordinal, but defaults to the tableau10 scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"sequential")," - equivalent to linear-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"cyclical")," - equivalent to linear, but defaults to the rainbow scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"threshold")," - encodes based on the specified discrete thresholds; defaults to the rdylbu scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quantile")," - encodes based on the computed quantile thresholds; defaults to the rdylbu scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quantize")," - transforms a continuous domain into quantized thresholds; defaults to the rdylbu scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging")," - like linear, but with a pivot; defaults to the rdbu scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-log")," - like log, but with a pivot that defaults to 1; defaults to the rdbu scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-pow")," - like pow, but with a pivot; defaults to the rdbu scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-sqrt")," - like sqrt, but with a pivot; defaults to the rdbu scheme-"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"diverging-symlog")," - like symlog, but with a pivot; defaults to the rdbu scheme")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Most use cases will use only the 4 most common types:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"quantize"),(0,r.kt)("li",{parentName:"ul"},"linear"),(0,r.kt)("li",{parentName:"ul"},"categorical"),(0,r.kt)("li",{parentName:"ul"},"diverging")),(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/scaleType"},"advanced section")," to learn more about the different type and their usage")),(0,r.kt)("h2",{id:"opacity"},(0,r.kt)("inlineCode",{parentName:"h2"},"opacity")),(0,r.kt)("p",null,"Use the difference in opacity to represent your dataset, using a single color."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"opacity")," is best used when you have a dynamic background color, such as light/dark mode."),(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"/docs/showcase#seattle-daily-average-precipitation"},"daily precipitation example"))),(0,r.kt)("h3",{id:"basecolor"},(0,r.kt)("inlineCode",{parentName:"h3"},"baseColor")),(0,r.kt)("p",null,"The base color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"baseColor: string,\n")),(0,r.kt)("p",null,"Accepts a color name (",(0,r.kt)("inlineCode",{parentName:"p"},"red"),"), a hexadecimal color code (",(0,r.kt)("inlineCode",{parentName:"p"},"#ff0000"),"), or rgb (",(0,r.kt)("inlineCode",{parentName:"p"},"rgb(0, 0, 255)"),")."),(0,r.kt)("h3",{id:"domain-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"domain")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("a",{parentName:"p",href:"#domain"},(0,r.kt)("inlineCode",{parentName:"a"},"color.domain"))),(0,r.kt)("h3",{id:"type-1"},(0,r.kt)("inlineCode",{parentName:"h3"},"type")),(0,r.kt)("p",null,"Same as ",(0,r.kt)("a",{parentName:"p",href:"#type"},(0,r.kt)("inlineCode",{parentName:"a"},"color.type"))),(0,r.kt)("h4",{id:"playground-2"},"Playground"),(0,r.kt)(o.Z,{mdxType:"BrowserWindow"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live noInline",live:!0,noInline:!0},"const cal = new CalHeatmap();\ncal.paint({\n  itemSelector: '#scale-opacity',\n  range: 1,\n  domain: { type: 'year', label: { text: null } },\n  subDomain: { type: 'day' },\n  data: {\n    source: '/fixtures/seattle-weather.csv',\n    type: 'csv',\n    x: 'date',\n    y: d => +d['temp_max'],\n    groupY: 'max',\n  },\n  date: { start: new Date('2012-01-01') },\n  scale: {\n    opacity: {\n      baseColor: '#71b747',\n      type: 'linear',\n      domain: [0, 30],\n    },\n  },\n});\n\nrender(<div id=\"scale-opacity\"></div>);\n"))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Cal-Heatmap is using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/observablehq/plot/tree/977e0118dad0f05158dbc3c0cab5f92047f449fd#color-options"},"Plot")," as the underlying library to handle the color scale.\nTake a look at their documentation for more advanced uses."),(0,r.kt)("p",{parentName:"admonition"},"Some part of the scale documentation are extracted from their own documentation.")),(0,r.kt)("h2",{id:"more-advanced-guide"},"More advanced guide"),(0,r.kt)("p",null,"You can read a more advanced guide about the various scale type in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/advanced/scaleType"},"Advanced section")))}u.isMDXComponent=!0}}]);