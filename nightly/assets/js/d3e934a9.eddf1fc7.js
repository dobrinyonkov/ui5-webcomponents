"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[189],{998:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>f,default:()=>E,frontMatter:()=>b,metadata:()=>v,toc:()=>w});var i=t(1085),s=t(1184);const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 350px">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="btnOpenBasic" icon="slim-arrow-down" icon-end>Open Menu</ui5-button> <br>\n\n    <ui5-menu header-text="Basic Menu with Items" id="menuBasic">\n        <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>\n        <ui5-menu-item text="New Folder" icon="add-folder" disabled></ui5-menu-item>\n        <ui5-menu-item text="Open" icon="open-folder" starts-section></ui5-menu-item>\n        <ui5-menu-item text="Close"></ui5-menu-item>\n        <ui5-menu-item text="Preferences" icon="action-settings" starts-section></ui5-menu-item>\n        <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>\n    </ui5-menu>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Menu.js";\nimport "@ui5/webcomponents/dist/MenuItem.js";\n\nimport "@ui5/webcomponents-icons/dist/add-document.js";\nimport "@ui5/webcomponents-icons/dist/add-folder.js";\nimport "@ui5/webcomponents-icons/dist/open-folder.js";\nimport "@ui5/webcomponents-icons/dist/save.js";\nimport "@ui5/webcomponents-icons/dist/upload-to-cloud.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\nimport "@ui5/webcomponents-icons/dist/journey-arrive.js";\nimport "@ui5/webcomponents-icons/dist/slim-arrow-down.js";\n\nconst btnOpenBasic = document.getElementById("btnOpenBasic");\nconst menuBasic = document.getElementById("menuBasic");\n\nbtnOpenBasic.addEventListener("click", function(event) {\n    menuBasic.showAt(btnOpenBasic);\n});';function o(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:d,js:r})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}const l='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 350px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="btnOpenBasic" icon="slim-arrow-down" icon-end>Open Menu</ui5-button> <br>\n    \n    <ui5-menu id="menuSubs">\n        <ui5-menu-item text="New File" icon="add-document"></ui5-menu-item>\n        <ui5-menu-item text="New Folder" icon="add-folder" disabled></ui5-menu-item>\n        <ui5-menu-item text="Open" icon="open-folder" starts-section>\n            <ui5-menu-item text="Open Locally" icon="open-folder">\n                <ui5-menu-item text="Open from C"></ui5-menu-item>\n                <ui5-menu-item text="Open from D"></ui5-menu-item>\n                <ui5-menu-item text="Open from E"></ui5-menu-item>\n            </ui5-menu-item>\n            <ui5-menu-item text="Open from Cloud"></ui5-menu-item>\n        </ui5-menu-item>\n        <ui5-menu-item text="Save" icon="save">\n            <ui5-menu-item text="Save Locally" icon="save">\n                <ui5-menu-item text="Save on C" icon="save"></ui5-menu-item>\n                <ui5-menu-item text="Save on D" icon="save"></ui5-menu-item>\n                <ui5-menu-item text="Save on E" icon="save"></ui5-menu-item>\n            </ui5-menu-item>\n            <ui5-menu-item text="Save on Cloud" icon="upload-to-cloud"></ui5-menu-item>\n        </ui5-menu-item>\n        <ui5-menu-item text="Close"></ui5-menu-item>\n        <ui5-menu-item text="Preferences" icon="action-settings" starts-section></ui5-menu-item>\n        <ui5-menu-item text="Exit" icon="journey-arrive"></ui5-menu-item>\n    </ui5-menu>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',h='import "@ui5/webcomponents/dist/Menu.js";\nimport "@ui5/webcomponents/dist/MenuItem.js";\n\nimport "@ui5/webcomponents-icons/dist/add-document.js";\nimport "@ui5/webcomponents-icons/dist/add-folder.js";\nimport "@ui5/webcomponents-icons/dist/open-folder.js";\nimport "@ui5/webcomponents-icons/dist/save.js";\nimport "@ui5/webcomponents-icons/dist/upload-to-cloud.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\nimport "@ui5/webcomponents-icons/dist/journey-arrive.js";\nimport "@ui5/webcomponents-icons/dist/slim-arrow-down.js";\n\nconst btnOpenBasic = document.getElementById("btnOpenBasic");\nconst menuSubs = document.getElementById("menuSubs");\n\nbtnOpenBasic.addEventListener("click", function(event) {\n    menuSubs.showAt(btnOpenBasic);\n});';function u(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:l,js:h})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}const m='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 350px">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="btnOpenAdditionalText" icon="slim-arrow-down" icon-end>Open Menu</ui5-button> <br>\n\n    <ui5-menu id="menuAdditionalText">\n        <ui5-menu-item text="New File" icon="add-document" additional-text="Ctrl+N"></ui5-menu-item>\n        <ui5-menu-item text="New Folder" icon="add-folder" additional-text="Ctrl+F" disabled></ui5-menu-item>\n        <ui5-menu-item text="Open" icon="open-folder" starts-section></ui5-menu-item>\n        <ui5-menu-item text="Close"></ui5-menu-item>\n        <ui5-menu-item text="Preferences" icon="action-settings" starts-section></ui5-menu-item>\n        <ui5-menu-item text="Exit" icon="journey-arrive" additional-text="Ctrl+X"></ui5-menu-item>\n    </ui5-menu>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Menu.js";\nimport "@ui5/webcomponents/dist/MenuItem.js";\n\nimport "@ui5/webcomponents-icons/dist/add-document.js";\nimport "@ui5/webcomponents-icons/dist/add-folder.js";\nimport "@ui5/webcomponents-icons/dist/open-folder.js";\nimport "@ui5/webcomponents-icons/dist/action-settings.js";\nimport "@ui5/webcomponents-icons/dist/journey-arrive.js";\nimport "@ui5/webcomponents-icons/dist/slim-arrow-down.js";\n\nconst btnOpenAdditionalText = document.getElementById("btnOpenAdditionalText");\nconst menuAdditionalText = document.getElementById("menuAdditionalText");\n\nbtnOpenAdditionalText.addEventListener("click", function(event) {\n    menuAdditionalText.showAt(btnOpenAdditionalText);\n});';function j(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:m,js:a})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}const b={slug:"../../Menu"},f=void 0,v={id:"components/main/Menu/Menu",title:"Menu",description:"ui5-menu component represents a hierarchical menu structure.",source:"@site/docs/components/main/Menu/Menu.mdx",sourceDirName:"components/main/Menu",slug:"/components/Menu",permalink:"/ui5-webcomponents/nightly/components/Menu",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../Menu"},sidebar:"componentsSidebar",previous:{title:"StandardListItem",permalink:"/ui5-webcomponents/nightly/components/StandardListItem"},next:{title:"MenuItem",permalink:"/ui5-webcomponents/nightly/components/MenuItem"}},y={},w=[{value:"Usage",id:"usage",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"headerText",id:"headertext",level:3},{value:"open",id:"open",level:3},{value:"busy",id:"busy",level:3},{value:"busyDelay",id:"busydelay",level:3},{value:"opener",id:"opener",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"Events",id:"events",level:2},{value:"item-click",id:"item-click",level:3},{value:"before-open",id:"before-open",level:3},{value:"after-open",id:"after-open",level:3},{value:"before-close",id:"before-close",level:3},{value:"after-close",id:"after-close",level:3},{value:"item-focus",id:"item-focus",level:3},{value:"Methods",id:"methods",level:2},{value:"showAt",id:"showat",level:3},{value:"close",id:"close",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Sub-menu",id:"sub-menu",level:3},{value:"Menu Item with Additional Text",id:"menu-item-with-additional-text",level:3}];function g(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ui5-menu"})," component represents a hierarchical menu structure."]}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"ui5-menu"})," contains ",(0,i.jsx)(n.code,{children:"ui5-menu-item"})," components.\nAn arbitrary hierarchy structure can be represented by recursively nesting menu items."]}),"\n",(0,i.jsx)(n.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ui5-menu"})," provides advanced keyboard handling.\nThe user can use the following keyboard shortcuts in order to navigate trough the tree:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Arrow Up"})," / ",(0,i.jsx)(n.code,{children:"Arrow Down"})," - Navigates up and down the menu items that are currently visible."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Arrow Right"}),", ",(0,i.jsx)(n.code,{children:"Space"})," or ",(0,i.jsx)(n.code,{children:"Enter"})," - Opens a sub-menu if there are menu items nested\nin the currently clicked menu item."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"Arrow Left"})," or ",(0,i.jsx)(n.code,{children:"Escape"})," - Closes the currently opened sub-menu."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Note: if the text ditrection is set to Right-to-left (RTL), ",(0,i.jsx)(n.code,{children:"Arrow Right"})," and ",(0,i.jsx)(n.code,{children:"Arrow Left"})," functionality is swapped."]}),"\n",(0,i.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/Menu.js";'})}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"headertext",children:"headerText"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the header text of the menu (displayed on mobile)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"open",children:"open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Indicates if the menu is open"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"busy",children:"busy"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines if a loading indicator would be displayed inside the corresponding ui5-menu popover."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.13.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"busydelay",children:"busyDelay"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the delay in milliseconds, after which the busy indicator will be displayed inside the corresponding ui5-menu popover.."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.13.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"opener",children:"opener"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the ID or DOM Reference of the element that the menu is shown at"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"HTMLElement | string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the items of this component.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," Use ",(0,i.jsx)(n.code,{children:"ui5-menu-item"})," for the intended design."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<MenuItem>"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"item-click",children:"item-click"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired when an item is being clicked.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," Since 1.17.0 the event is preventable, allowing the menu to remain open after an item is pressed."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<MenuItemClickEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"item"}),": ",(0,i.jsx)(n.code,{children:"HTMLElement"}),(0,i.jsx)("br",{}),"The currently clicked menu item.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"text"}),": ",(0,i.jsx)(n.code,{children:"string"}),(0,i.jsx)("br",{}),"The text of the currently clicked menu item."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"before-open",children:"before-open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired before the menu is opened. This event can be cancelled, which will prevent the menu from opening. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."}),(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," Since 1.14.0 the event is also fired before a sub-menu opens."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<MenuBeforeOpenEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"item"}),": ",(0,i.jsx)(n.code,{children:"HTMLElement"}),(0,i.jsx)("br",{}),"The ",(0,i.jsx)(n.code,{children:"ui5-menu-item"})," that triggers opening of the sub-menu or undefined when fired upon root menu opening.",(0,i.jsx)("br",{}),"Since:1.14.0"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"after-open",children:"after-open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired after the menu is opened. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"before-close",children:"before-close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired before the menu is closed. This event can be cancelled, which will prevent the menu from closing. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<MenuBeforeCloseEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"escPressed"}),": ",(0,i.jsx)(n.code,{children:"boolean"}),(0,i.jsx)("br",{}),"Indicates that ",(0,i.jsx)(n.code,{children:"ESC"})," key has triggered the event."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"after-close",children:"after-close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired after the menu is closed. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"item-focus",children:"item-focus"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Fired when a menu item receives focus."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<MenuItemFocusEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"ref"}),": ",(0,i.jsx)(n.code,{children:"HTMLElement"}),(0,i.jsx)("br",{}),"The currently focused element representing a ",(0,i.jsx)("code",{children:"ui5-menu-item"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"item"}),": ",(0,i.jsx)(n.code,{children:"HTMLElement"}),(0,i.jsx)("br",{}),"The ",(0,i.jsx)("code",{children:"ui5-menu-item"})," represented by the focused element."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.23.1"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"showat",children:"showAt"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Shows the Menu near the opener element."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Return type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Promise<void>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"opener"}),": ",(0,i.jsx)(n.code,{children:"HTMLElement"}),(0,i.jsx)("br",{}),"the element that the popover is shown at"]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Closes the Menu."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Return type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"void"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsx)(n.p,{children:"No CSS parts available for this component."}),"\n",(0,i.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,i.jsx)(n.h3,{id:"sub-menu",children:"Sub-menu"}),"\n",(0,i.jsx)(n.p,{children:"You can nest menu items to create sub menus."}),"\n",(0,i.jsx)(x,{}),"\n",(0,i.jsx)(n.h3,{id:"menu-item-with-additional-text",children:"Menu Item with Additional Text"}),"\n",(0,i.jsx)(p,{})]})}function E(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(4041);const s={},d=i.createContext(s);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);