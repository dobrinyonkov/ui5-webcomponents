"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[3921],{8725:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>b,default:()=>T,frontMatter:()=>g,metadata:()=>f,toc:()=>y});var s=n(1085),o=n(1184);const i='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button>Show Toast</ui5-button>\n    <ui5-toast>This is a Toast message.</ui5-toast>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Toast.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nconst btn = [...document.getElementsByTagName("ui5-button")][0];\nconst toast = [...document.getElementsByTagName("ui5-toast")][0];\n\nbtn.addEventListener("click", () => {\n\ttoast.show();\t\n});';function d(e){const{Editor:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:i,js:r})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button>Show Toast</ui5-button>\n    <ui5-toast placement="MiddleCenter">Toast message, displayed in the "MiddleCenter".</ui5-toast>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Toast.js";\n\nconst btn = [...document.getElementsByTagName("ui5-button")][0];\nconst toast = [...document.getElementsByTagName("ui5-toast")][0];\n\nbtn.addEventListener("click", () => {\n\ttoast.show();\t\n});';function h(e){const{Editor:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:c,js:a})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}const p='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button>Show Toast</ui5-button>\n    <ui5-toast duration="5000">Toast message, displayed for 5 seconds.</ui5-toast>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',m='import "@ui5/webcomponents/dist/Toast.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nconst btn = [...document.getElementsByTagName("ui5-button")][0];\nconst toast = [...document.getElementsByTagName("ui5-toast")][0];\n\nbtn.addEventListener("click", () => {\n\ttoast.show();\t\n});';function x(e){const{Editor:t}={...(0,o.R)(),...e.components};return t||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(t,{html:p,js:m})}function j(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}const g={slug:"../Toast"},b=void 0,f={id:"components/main/Toast",title:"Toast",description:"The ui5-toast is a small, non-disruptive popup for success or information messages that",source:"@site/docs/components/main/Toast.mdx",sourceDirName:"components/main",slug:"/components/Toast",permalink:"/ui5-webcomponents/nightly/components/Toast",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../Toast"},sidebar:"componentsSidebar",previous:{title:"Title",permalink:"/ui5-webcomponents/nightly/components/Title"},next:{title:"ToggleButton",permalink:"/ui5-webcomponents/nightly/components/ToggleButton"}},v={},y=[{value:"Usage",id:"usage",level:3},{value:"When to use:",id:"when-to-use",level:4},{value:"When not to use:",id:"when-not-to-use",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"duration",id:"duration",level:3},{value:"placement",id:"placement",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"show",id:"show",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Duration",id:"duration-1",level:3},{value:"Placement",id:"placement-1",level:3}];function w(e){const t={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"ui5-toast"})," is a small, non-disruptive popup for success or information messages that\ndisappears automatically after a few seconds."]}),"\n",(0,s.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsx)(t.h4,{id:"when-to-use",children:"When to use:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You want to display a short success or information message."}),"\n",(0,s.jsx)(t.li,{children:"You do not want to interrupt users while they are performing an action."}),"\n",(0,s.jsx)(t.li,{children:"You want to confirm a successful action."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"when-not-to-use",children:"When not to use:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"You want to display error or warning message."}),"\n",(0,s.jsx)(t.li,{children:"You want to interrupt users while they are performing an action."}),"\n",(0,s.jsx)(t.li,{children:"You want to make sure that users read the message before they leave the page."}),"\n",(0,s.jsx)(t.li,{children:"You want users to be able to copy some part of the message text."}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/Toast.js";'})}),"\n",(0,s.jsx)(t.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(l,{}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.h3,{id:"duration",children:"duration"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the duration in milliseconds for which component remains on the screen before it's automatically closed.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," The minimum supported value is ",(0,s.jsx)(t.code,{children:"500"})," ms and even if a lower value is set, the duration would remain ",(0,s.jsx)(t.code,{children:"500"})," ms."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"number"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:"3000"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"placement",children:"placement"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Defines the placement of the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:'"TopStart" | "TopCenter" | "TopEnd" | "MiddleStart" | "MiddleCenter" | "MiddleEnd" | "BottomStart" | "BottomCenter" | "BottomEnd"'})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Default"}),(0,s.jsx)(t.td,{children:'"BottomCenter"'})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(t.h3,{id:"default",children:"default"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsxs)(t.td,{children:["Defines the text of the component.",(0,s.jsx)("br",{}),(0,s.jsx)(t.strong,{children:"Note:"})," Although this slot accepts HTML Elements, it is strongly recommended that you only use text in order to preserve the intended design."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Array<Node>"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(t.p,{children:"No events available for this component."}),"\n",(0,s.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(t.h3,{id:"show",children:"show"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Description"}),(0,s.jsx)(t.td,{children:"Shows the component."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Return type"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"void"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,s.jsx)(t.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,s.jsx)(t.h3,{id:"duration-1",children:"Duration"}),"\n",(0,s.jsx)(j,{}),"\n",(0,s.jsx)(t.h3,{id:"placement-1",children:"Placement"}),"\n",(0,s.jsx)(u,{})]})}function T(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(w,{...e})}):w(e)}},1184:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var s=n(4041);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);