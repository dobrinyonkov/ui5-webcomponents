"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1546],{76523:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=n(31085),s=n(71184);const i={},r="Lifecycle Methods",c={id:"docs/development/lifecycle-hooks",title:"Lifecycle Methods",description:"UI5 Web Components are built on top of the native browser APIs, so they naturally support all regular lifecycle hooks such as constuctor, attributeChangedCallback,, connectedCallback, disconnectedCallback, etc.",source:"@site/docs/docs/4-development/06-lifecycle-hooks.md",sourceDirName:"docs/4-development",slug:"/docs/development/lifecycle-hooks",permalink:"/ui5-webcomponents/nightly/docs/development/lifecycle-hooks",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Events",permalink:"/ui5-webcomponents/nightly/docs/development/events"},next:{title:"Styles",permalink:"/ui5-webcomponents/nightly/docs/development/styling"}},l={},d=[{value:"DOM-related lifecycle hooks",id:"dom-related-lifecycle-hooks",level:2},{value:"onEnterDOM",id:"onenterdom",level:3},{value:"onExitDOM",id:"onexitdom",level:3},{value:"Rendering-related lifecycle hooks",id:"rendering-related-lifecycle-hooks",level:2},{value:"onBeforeRendering",id:"onbeforerendering",level:3},{value:"onAfterRendering",id:"onafterrendering",level:3}];function a(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"lifecycle-methods",children:"Lifecycle Methods"}),"\n",(0,o.jsxs)(t.p,{children:["UI5 Web Components are built on top of the native browser APIs, so they naturally support all regular lifecycle hooks such as ",(0,o.jsx)(t.code,{children:"constuctor"}),", ",(0,o.jsx)(t.code,{children:"attributeChangedCallback,"}),", ",(0,o.jsx)(t.code,{children:"connectedCallback"}),", ",(0,o.jsx)(t.code,{children:"disconnectedCallback"}),", etc.\nHowever, to ensure that the state of the component is managed properly, the UI5 Web Components framework offers its own lifecycle methods in place of the original ones, as well as some additional rendering-related ones."]}),"\n",(0,o.jsx)(t.h2,{id:"dom-related-lifecycle-hooks",children:"DOM-related lifecycle hooks"}),"\n",(0,o.jsx)(t.h3,{id:"onenterdom",children:"onEnterDOM"}),"\n",(0,o.jsxs)(t.p,{children:["Use instead of ",(0,o.jsx)(t.code,{children:"connectedCallback"}),". This method is called every time the component is connected to the DOM. It is important to note that this method can be called multiple times whenever the element is attached or moved in the DOM. For logic that needs to run each time the element is attached or moved, it is best practice to use this lifecycle method."]}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," This method is often used to attach event listeners to observe the component size. Keep in mind that it is best practice to detach all event listeners when the component is disconnected from the DOM."]}),"\n",(0,o.jsx)(t.h3,{id:"onexitdom",children:"onExitDOM"}),"\n",(0,o.jsxs)(t.p,{children:["Use instead of ",(0,o.jsx)(t.code,{children:"disconnectedCallback"}),". This method is called every time the component is disconnected from the DOM. It is important to clean up any resources or detach any event listeners when this method is called to avoid memory leaks and ensure proper cleanup."]}),"\n",(0,o.jsx)(t.h2,{id:"rendering-related-lifecycle-hooks",children:"Rendering-related lifecycle hooks"}),"\n",(0,o.jsx)(t.h3,{id:"onbeforerendering",children:"onBeforeRendering"}),"\n",(0,o.jsx)(t.p,{children:"This method is called right before the component is rendered or re-rendered. It is triggered whenever the component state changes (e.g., when a property or slot is changed)."}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Note:"})," Do not access the shadow root in this method, as it won't be available before the first rendering. Use this method only to prepare private state for the purpose of rendering."]}),"\n",(0,o.jsx)(t.h3,{id:"onafterrendering",children:"onAfterRendering"}),"\n",(0,o.jsx)(t.p,{children:"This method is called right after the component is rendered. You can safely access the shadow root in this method."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(14041);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);