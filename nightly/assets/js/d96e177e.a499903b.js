"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[7093],{65628:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(31085),o=i(71184);const s={title:"Announcing UI5 Web Components 2.0! A New Era Begins!",tags:["release","v2"],slug:"/releases/announcing-v2",date:"2024-07-03T10:00"},r="Announcing UI5 Web Components 2.0: A New Era Begins!",a={permalink:"/ui5-webcomponents/nightly/blog/releases/announcing-v2",source:"@site/blog/releases/announcing-v2.mdx",title:"Announcing UI5 Web Components 2.0! A New Era Begins!",description:"A Journey of Innovation and Growth",date:"2024-07-03T10:00:00.000Z",formattedDate:"July 3, 2024",tags:[{label:"release",permalink:"/ui5-webcomponents/nightly/blog/tags/release"},{label:"v2",permalink:"/ui5-webcomponents/nightly/blog/tags/v-2"}],readingTime:7.505,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Announcing UI5 Web Components 2.0! A New Era Begins!",tags:["release","v2"],slug:"/releases/announcing-v2",date:"2024-07-03T10:00"},unlisted:!1,nextItem:{title:"Popover API in UI5 Web Components 2.0",permalink:"/ui5-webcomponents/nightly/blog/releases/popover-api-in-v2"}},l={authorsImageUrls:[]},c=[{value:"A Journey of Innovation and Growth",id:"a-journey-of-innovation-and-growth",level:2},{value:"Announcing UI5 Web Components 2.0! \ud83c\udf89",id:"announcing-ui5-web-components-20-",level:2},{value:"What&#39;s New in UI5 Web Components 2.0?",id:"whats-new-in-ui5-web-components-20",level:2},{value:"<strong>Revolutionary Popover API</strong>",id:"revolutionary-popover-api",level:3},{value:"<strong>Form-Associated Custom Elements</strong>",id:"form-associated-custom-elements",level:3},{value:"<strong>Seamless Time Zone Support</strong>",id:"seamless-time-zone-support",level:3},{value:"<strong>New Components</strong>",id:"new-components",level:3},{value:"<strong>Enhanced Existing Components</strong>",id:"enhanced-existing-components",level:3},{value:"<strong>Revamped Documentation Site</strong>",id:"revamped-documentation-site",level:3},{value:"Adoption and Breaking Changes",id:"adoption-and-breaking-changes",level:2},{value:"Ongoing Support for Version 1.x",id:"ongoing-support-for-version-1x",level:2},{value:"Get Help and Engage with the Community",id:"get-help-and-engage-with-the-community",level:2},{value:"Call to Action",id:"call-to-action",level:2}];function d(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"a-journey-of-innovation-and-growth",children:"A Journey of Innovation and Growth"}),"\n",(0,t.jsx)(n.p,{children:"Since the release of UI5 Web Components 1.0 in 2021, our journey has been marked by unwavering innovation and a commitment to excellence. Over the past three years, we have listened to our community, refined our technologies, and expanded our capabilities."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UI5 Web Components timeline",src:i(25582).A+"",width:"1242",height:"280"})}),"\n",(0,t.jsx)(n.p,{children:"Our project has continuously evolved, embracing new web standards, eliminating legacy code, and integrating invaluable user feedback from our community to enhance our APIs. This journey culminated in April with the unveiling of the first Release Candidate for UI5 Web Components 2.0."}),"\n",(0,t.jsx)(n.h2,{id:"announcing-ui5-web-components-20-",children:"Announcing UI5 Web Components 2.0! \ud83c\udf89"}),"\n",(0,t.jsx)(n.p,{children:"Today, we stand at a pivotal moment in our evolution with the official launch of UI5 Web Components 2.0. This major release marks a new era, enhancing performance and reliability while setting the stage for future innovations. Our commitment to growth and providing cutting-edge tools for web development ensures we continue to meet the evolving needs of our community."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Key Benefits of UI5 Web Components 2.0"})}),"\n",(0,t.jsx)(n.p,{children:"UI5 Web Components 2.0 introduces several substantial improvements:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Embracing New Standards: Future-proofing UI5 Web Components."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Consistent APIs: Streamlined and more intuitive, albeit with some breaking changes."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Elimination of Legacy Code: Reducing footprint and enhancing quality by minimizing bugs."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Looking ahead, we will adhere to Semantic Versioning and release major updates more frequently to keep pace with technological advancements."}),"\n",(0,t.jsx)(n.h2,{id:"whats-new-in-ui5-web-components-20",children:"What's New in UI5 Web Components 2.0?"}),"\n",(0,t.jsx)(n.h3,{id:"revolutionary-popover-api",children:(0,t.jsx)(n.strong,{children:"Revolutionary Popover API"})}),"\n",(0,t.jsxs)(n.p,{children:["Experience a standardized, consistent, and flexible mechanism for displaying popover content across all relevant components.",(0,t.jsx)(n.br,{}),"\n",'This API allows popups to display correctly above all other content, eliminating the need for the "static area" used in version 1.x. Previously, popups were placed in a static area within the body to ensure correct positioning despite various CSS rules. In version 2.x, the ',(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover",children:"popover API"})," simplifies the DOM structure by incorporating the popover directly within the component. This results in easier development, maintenance, and enhanced styling capabilities. It also allows components with popups to have physical children, supporting custom content and simplifying testing. The popover API is fully supported by all major browsers. Discover all the practical benefits in our ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/blog/releases/popover-api-in-v2/",children:"blog post"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"form-associated-custom-elements",children:(0,t.jsx)(n.strong,{children:"Form-Associated Custom Elements"})}),"\n",(0,t.jsxs)(n.p,{children:["Harness the power of native input behavior within HTML forms. This enhancement makes the features/InputElementsFormSupport.js feature redundant, simplifying form handling and enhancing the developer experience. Refer to the ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals",children:"ElementInternals API documentation"})," for more details."]}),"\n",(0,t.jsx)(n.h3,{id:"seamless-time-zone-support",children:(0,t.jsx)(n.strong,{children:"Seamless Time Zone Support"})}),"\n",(0,t.jsxs)(n.p,{children:["Seamlessly manage time zones within your applications for a more personalized user experience. The date and time components are adapted to the time zone feature, allowing the components to present dates in different time zones. The time zone identifiers format is the one used in the IANA time zone database. See a ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/DateTimePicker/#timezones",children:"sample"})," on our website."]}),"\n",(0,t.jsx)(n.h3,{id:"new-components",children:(0,t.jsx)(n.strong,{children:"New Components"})}),"\n",(0,t.jsx)(n.p,{children:"Expand your UI toolkit with new components such as Dynamic Page, Form, Table, Text, Tokenizer, AI Button, and AI Prompt Input."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/DynamicPage/",children:"Dynamic Page"}),": A layout component, representing a web page, consisting of a title, a header with dynamic behavior, a content area, and an optional floating footer. Use the Dynamic Page if you need to have a title, that is always visible and a header, that has configurable Expanding/Snapping functionality."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Form/",children:"Form"}),": The ",(0,t.jsx)(n.code,{children:"ui5-form"}),' is a layout component that arranges labels and form fields (like input fields) pairs into a specific number of columns. And, there is also "grouping" available to assist the implementation of richer UIs. The Form component reacts and changes its layout on predefined breakpoints.']}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Table/",children:"Table"}),": The ",(0,t.jsx)(n.code,{children:"ui5-table"})," component provides a set of sophisticated features for displaying and dealing with vast amounts of data in a responsive manner. This Table replaces the previous Table web component, that has been part of @ui5/webcomponents version 1.x. For compatibility reasons, we moved the previous Table implementation to the ",(0,t.jsx)(n.code,{children:"@ui5/webcomponents-compat"})," package and will be maintained until the new Table is experimental."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Text/",children:"Text"}),": The ",(0,t.jsx)(n.code,{children:"ui5-text"})," component displays text that can be used in any content area of an application. By default, the text will wrap when the space is not enough. In addition, the component supports truncation via the max-lines property, which defines the number of lines the text should wrap before it starts truncating."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/Tokenizer/",children:"Tokenizer"}),": A ",(0,t.jsx)(n.code,{children:"ui5-tokenizer"})," is an invisible container for ",(0,t.jsx)(n.code,{children:"ui5-tokens"})," that supports keyboard navigation and token selection."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/ai/Button/",children:"AI Button"}),": The ",(0,t.jsx)(n.code,{children:"ui5-ai-button"})," component represents a button used in AI-related scenarios. It enables users to trigger actions by clicking or tapping the ui5-ai-button, or by pressing certain keyboard keys, such as Enter."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/ai/PromptInput/",children:"AI Prompt Input"}),": The ",(0,t.jsx)(n.code,{children:"ui5-ai-prompt-input"})," component allows the user to write custom instructions in natural language so that AI is guided to generate content tailored to user needs."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/OptionCustom/",children:"Custom Option"}),": The ",(0,t.jsx)(n.code,{children:"ui5-option-custom"})," component defines a custom content of an option in the ",(0,t.jsx)(n.code,{children:"ui5-select"}),". The component accepts arbitrary HTML content to allow full customization."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/SuggestionItemCustom/",children:"Custom Suggestion Item"}),": The ",(0,t.jsx)(n.code,{children:"ui5-suggestion-item-custom"})," is a type of suggestion item, that can be used to place suggestion items with custom content in the input."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/fiori/NotificationList/",children:"Notification List"}),": The ",(0,t.jsx)(n.code,{children:"ui5-notification-list"})," web component acts as a container for ",(0,t.jsx)(n.code,{children:"ui5-li-notification-group"})," and ",(0,t.jsx)(n.code,{children:"ui5-li-notification"}),", delivering the new SAP Design Notification experience."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/components/ListItemGroup/",children:"List Group"}),": The ",(0,t.jsx)(n.code,{children:"ui5-li-group"})," is a special list item used exclusively for creating groups of list items within a ",(0,t.jsx)(n.code,{children:"ui5-list"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Preview of UI5 Web Components 2.0 new components",src:i(83757).A+"",width:"1242",height:"702"})}),"\n",(0,t.jsx)(n.h3,{id:"enhanced-existing-components",children:(0,t.jsx)(n.strong,{children:"Enhanced Existing Components"})}),"\n",(0,t.jsx)(n.p,{children:"Benefit from improvements in List Drag and Drop, Tree Drag and Drop, Tab Container Drag and Drop, and a revamped Notifications Experience."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Preview of UI5 Web Components 2.0 new features",src:i(97306).A+"",width:"1242",height:"700"})}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:["For the full list of changes, please refer to the release ",(0,t.jsx)(n.a,{href:"https://github.com/SAP/ui5-webcomponents/releases",children:"change log"}),"."]})}),"\n",(0,t.jsx)(n.h3,{id:"revamped-documentation-site",children:(0,t.jsx)(n.strong,{children:"Revamped Documentation Site"})}),"\n",(0,t.jsx)(n.p,{children:"Explore our new documentation site featuring a live editor, playground, dark mode, and an intuitive icons view."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UI5 Web Components 2.0 new website",src:i(83978).A+"",width:"1214",height:"764"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"New logo"}),": We are excited to introduce our new symbol and branding, reflecting the modern and dynamic nature of our project. Our new design incorporates defining elements of the feather and the flame. The feather symbolizes being lightweight, while the flame forms a connection to the phoenix, embodying the spirit of rebirth and continuous improvement."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Explore the Full-Screen Playground"})}),"\n",(0,t.jsxs)(n.p,{children:["Our new ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/play/",children:"full-screen playground"})," offers a range of features designed to enhance your development experience:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Live code editing"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"TypeScript support"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Code completion for components in HTML"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Sample download"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Easy sharing"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Theming options"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Predefined examples"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"UI5 Web Components 2.0 full-screen playground",src:i(49848).A+"",width:"1242",height:"748"})}),"\n",(0,t.jsx)(n.h2,{id:"adoption-and-breaking-changes",children:"Adoption and Breaking Changes"}),"\n",(0,t.jsx)(n.p,{children:"UI5 Web Components 2.0 is a major version and introduces breaking changes that may require updates to your code. Note: The majority of the breaking changes can be achieved with find and replace."}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Our comprehensive ",(0,t.jsx)(n.a,{href:"https://sap.github.io/ui5-webcomponents/nightly/docs/migration-guides/to-version-2/",children:"Migration Guide"})," will assist you in making a smooth transition from UI5 Web Components v1.x to v2.0."]})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Notable Breaking Changes"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The Belize theme has been removed and is no longer available."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["CSP (Content Security Policy) will be ensured via the ",(0,t.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Document/adoptedStyleSheets",children:(0,t.jsx)(n.code,{children:"adoptedStyleSheets"})})," only, which are CSP-compliant by design."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The static area has been removed since the browser now ensures the correct positioning of popups thanks to the popover API that is fully adopted by the UI5 Web Components."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The Badge component (",(0,t.jsx)(n.code,{children:"ui5-badge"}),") has been renamed to Tag (",(0,t.jsx)(n.code,{children:"ui5-tag"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The old Table (",(0,t.jsx)(n.code,{children:"ui5-table"}),") has been moved to ",(0,t.jsx)(n.code,{children:"@ui5/webcomponents-compat"}),"; new Table is available with better API and accessibility."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Public methods for opening popovers are replaced with the ",(0,t.jsx)(n.code,{children:"open"})," property for declarative APIs."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Components like Label, Text, Link, and Title now wrap by default (",(0,t.jsx)(n.code,{children:'wrappingType="Normal"'})," by default, ",(0,t.jsx)(n.code,{children:'wrappingType="None"'})," optionally)."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"SelectMenu and SelectMenuOption components have been removed; standard options with the popover API make them obsolete."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Renaming of properties, events, and enumeration values."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Removed APIs without alternatives:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Progress Indicator (",(0,t.jsx)(n.code,{children:"ui5-progress-indicator"}),"): ",(0,t.jsx)(n.code,{children:"Disabled"})," property removed."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Select Option (",(0,t.jsx)(n.code,{children:"ui5-option"}),"): ",(0,t.jsx)(n.code,{children:"Disabled"})," property removed for UX and accessibility alignment."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Token (",(0,t.jsx)(n.code,{children:"ui5-token"}),"): ",(0,t.jsx)(n.code,{children:"Readonly"})," property removed; logic now within the Tokenizer."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"Device#isIE"})," method has been removed and is no longer available - the IE browser is not supported anymore."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Notification List Group (",(0,t.jsx)(n.code,{children:"ui5-li-notification-group"}),"): The properties ",(0,t.jsx)(n.code,{children:"showClose"}),", ",(0,t.jsx)(n.code,{children:"showCounter"}),", ",(0,t.jsx)(n.code,{children:"priority"}),", the event ",(0,t.jsx)(n.code,{children:"close"})," and the slot ",(0,t.jsx)(n.code,{children:"actions"})," are removed due to the new better notification list design concept."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ongoing-support-for-version-1x",children:"Ongoing Support for Version 1.x"}),"\n",(0,t.jsxs)(n.p,{children:["We will continue to support version 1.x until the ",(0,t.jsx)(n.strong,{children:"end of June 2025"}),", focusing on bug fixes to ensure continuity for our existing users."]}),"\n",(0,t.jsx)(n.h2,{id:"get-help-and-engage-with-the-community",children:"Get Help and Engage with the Community"}),"\n",(0,t.jsxs)(n.p,{children:["Encountering issues? Reach out for support or report bugs on our GitHub project: ",(0,t.jsx)(n.a,{href:"https://github.com/SAP/ui5-webcomponents/issues/new/choose",children:"Submit a bug or ask a question here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"call-to-action",children:"Call to Action"}),"\n",(0,t.jsx)(n.p,{children:"UI5 Web Components 2.0 is a testament to our dedication to innovation, quality, and community engagement. We are particularly excited about the groundbreaking features such as the Popover API, Form-Associated Custom Elements, and seamless time zone support."}),"\n",(0,t.jsx)(n.p,{children:"We invite you to preview the new version and migrate to UI5 Web Components 2.0 to fully leverage these advancements. Together, we are entering a new era of web development, and the possibilities are endless. Thank you for being part of this exciting journey with us! \ud83d\ude4c"})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},49848:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/fullscreen_playground-6dce496fd9f7b8f4d761ca9e56f73ffa.png"},83757:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/new_components_v2-31e9fef6eba2af379de1aaf42170ce94.png"},97306:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/new_features_v2-a90c2faec19524bf2fcbfa123ae33e38.png"},25582:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ui5webcomponents_timeline-1602f431dde12d8bad50959a4a86430f.png"},83978:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/website-316e6be097a954a9a7366fe1661a3d3b.png"},71184:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(14041);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);