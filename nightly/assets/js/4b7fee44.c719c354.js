"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7740],{22302:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var s=i(31085),r=i(71184);const l={title:"Preparing for UI5 Web Components 2.0",tags:["release"],slug:"/releases/preparing-for-v2"},t=void 0,o={permalink:"/ui5-webcomponents/nightly/blog/releases/preparing-for-v2",source:"@site/blog/releases/preparing-for-v2.mdx",title:"Preparing for UI5 Web Components 2.0",description:"UI5 Web Components 2.0 version is on the horizon.",date:"2024-07-01T11:23:15.000Z",formattedDate:"July 1, 2024",tags:[{label:"release",permalink:"/ui5-webcomponents/nightly/blog/tags/release"}],readingTime:2.545,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Preparing for UI5 Web Components 2.0",tags:["release"],slug:"/releases/preparing-for-v2"},unlisted:!1,prevItem:{title:"Popover API in UI5 Web Components 2.0",permalink:"/ui5-webcomponents/nightly/blog/releases/popover-api-in-v2"}},a={authorsImageUrls:[]},d=[{value:"Release Timelines",id:"release-timelines",level:2},{value:"Migration Support",id:"migration-support",level:2},{value:"Maintenance of 1.x",id:"maintenance-of-1x",level:2},{value:"2.0 Features",id:"20-features",level:2},{value:"Framework Features",id:"framework-features",level:3},{value:"New Components",id:"new-components",level:3},{value:"Components Features",id:"components-features",level:3},{value:"Reusable component CSS styles",id:"reusable-component-css-styles",level:3},{value:"New Site for Documentation, Samples and API reference",id:"new-site-for-documentation-samples-and-api-reference",level:3},{value:"2.0 Breaking changes",id:"20-breaking-changes",level:2},{value:"Theming",id:"theming",level:3},{value:"Framework",id:"framework",level:3},{value:"Renamed APIs",id:"renamed-apis",level:3},{value:"Replaced APIs",id:"replaced-apis",level:3},{value:"Removed APIs without alternative",id:"removed-apis-without-alternative",level:3},{value:"Progress Indicator (ui5-progress-indicator)",id:"progress-indicator-ui5-progress-indicator",level:4},{value:"Selects&#39;s Option (ui5-option)",id:"selectss-option-ui5-option",level:4},{value:"Token (ui5-token)",id:"token-ui5-token",level:4}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"UI5 Web Components 2.0 version is on the horizon.\nHere's a summary of everything you need to know (release information, key features and breaking changes)\nand start preparing for it."}),"\n",(0,s.jsx)(n.h2,{id:"release-timelines",children:"Release Timelines"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Release ",(0,s.jsx)(n.code,{children:"2.0"})," RC versions in April","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.0",children:"2.0.0-rc.0"})," (2024-04-09)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/SAP/ui5-webcomponents/releases/tag/v2.0.0-rc.1",children:"2.0.0-rc.1"})," (2024-04-11)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Release ",(0,s.jsx)(n.code,{children:"2.0"})," between ",(0,s.jsx)(n.code,{children:"mid June - mid July"})]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"migration-support",children:"Migration Support"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/docs/migration-guides/to-version-2/",children:"Migration guide"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"maintenance-of-1x",children:"Maintenance of 1.x"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Support until the end of the year"}),"\n",(0,s.jsx)(n.li,{children:"Downport of bug fixes only"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"20-features",children:"2.0 Features"}),"\n",(0,s.jsx)(n.h3,{id:"framework-features",children:"Framework Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Integration of the ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover",children:(0,s.jsx)(n.code,{children:"popover"})})," API in all pop-up based components"]}),"\n",(0,s.jsxs)(n.li,{children:["Form Support with ",(0,s.jsx)(n.a,{href:"https://webkit.org/blog/13711/elementinternals-and-form-associated-custom-elements/",children:(0,s.jsx)(n.code,{children:"Form-Associated Custom Elements"})})," standard"]}),"\n",(0,s.jsx)(n.li,{children:"Timezone support in all date-time components"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"new-components",children:"New Components"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Dynamic Page"}),"\n",(0,s.jsx)(n.li,{children:"Form"}),"\n",(0,s.jsx)(n.li,{children:"Text"}),"\n",(0,s.jsx)(n.li,{children:"Tokenizer"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"components-features",children:"Components Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"List Drag and Drop (comes with TabContainer)?"}),"\n",(0,s.jsx)(n.li,{children:"Tree Drag and Drop"}),"\n",(0,s.jsx)(n.li,{children:"TabContainer Drag and Drop"}),"\n",(0,s.jsx)(n.li,{children:"New Notifications Experience"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"reusable-component-css-styles",children:"Reusable component CSS styles"}),"\n",(0,s.jsx)(n.p,{children:"Styles for creating patterns/layouts or other common styling"}),"\n",(0,s.jsx)(n.h3,{id:"new-site-for-documentation-samples-and-api-reference",children:"New Site for Documentation, Samples and API reference"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/",children:"preview"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Live editor"}),"\n",(0,s.jsx)(n.li,{children:"Playground"}),"\n",(0,s.jsx)(n.li,{children:"Dark mode"}),"\n",(0,s.jsx)(n.li,{children:"Icons view"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"20-breaking-changes",children:"2.0 Breaking changes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"90% is pure API renaming for better consistency"}),"\n",(0,s.jsx)(n.li,{children:"several APIs are replaced by alternatives (listed below)"}),"\n",(0,s.jsx)(n.li,{children:"few APIs are removed without alternatives (listed below)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"theming",children:"Theming"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Removal of Belize (recommendation: migrate to Horizon)"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"framework",children:"Framework"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CSP (Content Security Policy) will be ensured via ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets",children:"adoptedStyleSheets"})," only.\nThe adoptedStyleSheets are CSP compliant by design and all components styles will be defined as adoptedStyleSheets."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"CSP.js"})," module is removed and the creation of ",(0,s.jsx)(n.code,{children:"<style>"})," and ",(0,s.jsx)(n.code,{children:"<link>"})," tags is no longer required as all browsers now support adoptedStyleSheets."]}),"\n",(0,s.jsx)(n.p,{children:"As a result, hte following APIs are not available any more and should not be used:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import { setUseLinks } from "@ui5/webcomponents-base/dist/CSP.js"\nimport { setPackageCSSRoot } from "@ui5/webcomponents-base/dist/CSP.js"\nimport { setPreloadLinks } from "@ui5/webcomponents-base/dist/CSP.js"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"renamed-apis",children:"Renamed APIs"}),"\n",(0,s.jsxs)(n.p,{children:["See the full list ",(0,s.jsx)(n.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/8461",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"replaced-apis",children:"Replaced APIs"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Methods ",(0,s.jsx)(n.code,{children:"openPicker"})," will be replaced by ",(0,s.jsx)(n.code,{children:"open/opener"})," properties to promote declarative API"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Grouping of Items"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Instead of using ",(0,s.jsx)(n.code,{children:"ui5-li-groupheader"})," as separator in a flat structure:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:"<ui5-list>\n\t<ui5-li-groupheader>group<ui5-li-groupheader/>\n\t<ui5-li></ui5-li>\n\t<ui5-li></ui5-li>\n\t<ui5-li></ui5-li>\n</ui5-list>\n"})}),"\n",(0,s.jsx)(n.p,{children:"true nesting will be provided of ListItems inside ListItemGroup\nto easier bind hierarchical data model to the UI:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<ui5-list>\n\t<ui5-li-group header-text="group">\n\t\t<ui5-li></ui5-li>\n\t\t<ui5-li></ui5-li>\n\t\t<ui5-li></ui5-li>\n\t<ui5-li-group>\n</ui5-list>\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Menu"}),": the property ",(0,s.jsx)(n.code,{children:"starts-section"})," will be replaced by ",(0,s.jsx)(n.code,{children:"ui5-menu-separator"})," component."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"List"}),": the property ",(0,s.jsx)(n.code,{children:"image"})," will be replaced by slot ",(0,s.jsx)(n.code,{children:"image"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"TabContainer:"})," the property ",(0,s.jsx)(n.code,{children:"show-overflow"})," property is will be replaced by slot ",(0,s.jsx)(n.code,{children:"overflowButton"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"IllustratedMessage:"})," the property ",(0,s.jsx)(n.code,{children:"titleLevel"})," will be replaced by slot ",(0,s.jsx)(n.code,{children:"title"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"removed-apis-without-alternative",children:"Removed APIs without alternative"}),"\n",(0,s.jsx)(n.h4,{id:"progress-indicator-ui5-progress-indicator",children:"Progress Indicator (ui5-progress-indicator)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"disabled"})," property will be removed. Progress indicator isn't an interactive element so disabled property make no sense.\nAlso aria-disabled is deprecated on the progressbar role since ARIA 1.2 ."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"selectss-option-ui5-option",children:"Selects's Option (ui5-option)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"disabled"})," property will be removed. The UX and ACC standards suggest to not include any disabled items in the dropdown"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"token-ui5-token",children:"Token (ui5-token)"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"readonly"})," property will be removed."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>o});var s=i(14041);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);