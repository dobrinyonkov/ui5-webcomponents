"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1543],{9210:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>m,contentTitle:()=>u,default:()=>v,frontMatter:()=>a,metadata:()=>p,toc:()=>f});var t=s(1085),n=s(1184);const l='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n        <ui5-shellbar primary-title="Corporate Portal" secondary-title="Secondary title">\n            <ui5-avatar slot="profile" icon="customer"></ui5-avatar>\n            <img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n            <ui5-button icon="nav-back" slot="startButton"></ui5-button>\n        </ui5-shellbar>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\n\nimport "@ui5/webcomponents-icons/dist/customer.js";\nimport "@ui5/webcomponents-icons/dist/nav-back.js";';function d(e){const{Editor:i}={...(0,n.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:l,js:r})}function c(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor);height: 400px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-shellbar id="shellbar" primary-title="Corporate Portal" secondary-title="secondary title"\n        notifications-count="99+" show-notifications="" show-co-pilot="">\n        <ui5-avatar slot="profile">\n            <img src="../assets/images/avatars/woman_avatar_5.png" />\n        </ui5-avatar>\n        <img slot="logo" src="../assets/images/sap-logo-svg.svg" />\n        <ui5-button icon="nav-back" slot="startButton"></ui5-button>\n\n        <ui5-input slot="searchField"></ui5-input>\n        <ui5-li slot="menuItems">Application 1</ui5-li>\n        <ui5-li slot="menuItems">Application 2</ui5-li>\n        <ui5-li slot="menuItems">Application 3</ui5-li>\n        <ui5-li slot="menuItems">Application 4</ui5-li>\n        <ui5-li slot="menuItems">Application 5</ui5-li>\n    </ui5-shellbar>\n    <ui5-popover id="action-popover" placement-type="Bottom">\n        <div class="action-popover-header">\n            <ui5-title style="padding: 0.25rem 1rem 0rem 1rem">An Kimura</ui5-title>\n        </div>\n        <div class="action-popover-content" style="margin-top: 1rem;">\n            <ui5-list separators="None">\n                <ui5-li icon="sys-find">App Finder</ui5-li>\n                <ui5-li icon="settings">Settings</ui5-li>\n                <ui5-li icon="edit">Edit Home Page</ui5-li>\n                <ui5-li icon="sys-help">Help</ui5-li>\n                <ui5-li icon="log">Sign out</ui5-li>\n            </ui5-list>\n        </div>\n    </ui5-popover>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',h='import "@ui5/webcomponents/dist/Avatar.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/StandardListItem.js";\nimport "@ui5/webcomponents/dist/Popover.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/List.js";\n\nimport "@ui5/webcomponents-fiori/dist/ShellBar.js";\n\nimport "@ui5/webcomponents-icons/dist/nav-back.js";\nimport "@ui5/webcomponents-icons/dist/sys-find.js";\nimport "@ui5/webcomponents-icons/dist/settings.js";\nimport "@ui5/webcomponents-icons/dist/edit.js";\nimport "@ui5/webcomponents-icons/dist/sys-help.js";\nimport "@ui5/webcomponents-icons/dist/log.js";\n\nconst shellbar = document.getElementById("shellbar");\nconst actionPopover = document.getElementById("action-popover");\n\nshellbar.addEventListener("ui5-profile-click", (event) => {\n    actionPopover.showAt(event.detail.targetRef);\n});\n';function x(e){const{Editor:i}={...(0,n.R)(),...e.components};return i||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,t.jsx)(i,{html:o,js:h})}function j(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}const a={},u=void 0,p={id:"components/fiori/ShellBar/ShellBar",title:"ShellBar",description:"The ui5-shellbar is meant to serve as an application header",source:"@site/docs/components/fiori/ShellBar/ShellBar.mdx",sourceDirName:"components/fiori/ShellBar",slug:"/components/fiori/ShellBar/",permalink:"/ui5-webcomponents/nightly/components/fiori/ShellBar/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"componentsSidebar",previous:{title:"ProductSwitchItem",permalink:"/ui5-webcomponents/nightly/components/fiori/ProductSwitch/ProductSwitchItem"},next:{title:"ShellBarItem",permalink:"/ui5-webcomponents/nightly/components/fiori/ShellBar/ShellBarItem"}},m={},f=[{value:"Stable DOM Refs",id:"stable-dom-refs",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Fast Navigation",id:"fast-navigation",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"primaryTitle",id:"primarytitle",level:3},{value:"secondaryTitle",id:"secondarytitle",level:3},{value:"notificationsCount",id:"notificationscount",level:3},{value:"showNotifications",id:"shownotifications",level:3},{value:"showProductSwitch",id:"showproductswitch",level:3},{value:"showCoPilot",id:"showcopilot",level:3},{value:"showSearchField",id:"showsearchfield",level:3},{value:"accessibilityRoles",id:"accessibilityroles",level:3},{value:"accessibilityTexts",id:"accessibilitytexts",level:3},{value:"accessibilityAttributes",id:"accessibilityattributes",level:3},{value:"logoDomRef",id:"logodomref",level:3},{value:"copilotDomRef",id:"copilotdomref",level:3},{value:"notificationsDomRef",id:"notificationsdomref",level:3},{value:"overflowDomRef",id:"overflowdomref",level:3},{value:"profileDomRef",id:"profiledomref",level:3},{value:"productSwitchDomRef",id:"productswitchdomref",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"profile",id:"profile",level:3},{value:"logo",id:"logo",level:3},{value:"menuItems",id:"menuitems",level:3},{value:"searchField",id:"searchfield",level:3},{value:"startButton",id:"startbutton",level:3},{value:"Events",id:"events",level:2},{value:"notifications-click",id:"notifications-click",level:3},{value:"profile-click",id:"profile-click",level:3},{value:"product-switch-click",id:"product-switch-click",level:3},{value:"logo-click",id:"logo-click",level:3},{value:"co-pilot-click",id:"co-pilot-click",level:3},{value:"menu-item-click",id:"menu-item-click",level:3},{value:"search-button-click",id:"search-button-click",level:3},{value:"Methods",id:"methods",level:2},{value:"closeOverflow",id:"closeoverflow",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Profile Area",id:"profile-area",level:3}];function b(e){const i={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"ui5-shellbar"})," is meant to serve as an application header\nand includes numerous built-in features, such as: logo, profile image/icon, title, search field, notifications and so on."]}),"\n",(0,t.jsx)(i.h3,{id:"stable-dom-refs",children:"Stable DOM Refs"}),"\n",(0,t.jsxs)(i.p,{children:["You can use the following stable DOM refs for the ",(0,t.jsx)(i.code,{children:"ui5-shellbar"}),":"]}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"logo"}),"\n",(0,t.jsx)(i.li,{children:"copilot"}),"\n",(0,t.jsx)(i.li,{children:"notifications"}),"\n",(0,t.jsx)(i.li,{children:"overflow"}),"\n",(0,t.jsx)(i.li,{children:"profile"}),"\n",(0,t.jsx)(i.li,{children:"product-switch"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,t.jsx)(i.h4,{id:"fast-navigation",children:"Fast Navigation"}),"\n",(0,t.jsxs)(i.p,{children:["This component provides a build in fast navigation group which can be used via ",(0,t.jsx)(i.code,{children:"F6 / Shift + F6"})," or ",(0,t.jsx)(i.code,{children:" Ctrl + Alt(Option) + Down /  Ctrl + Alt(Option) + Up"}),".\nIn order to use this functionality, you need to import the following module:\n",(0,t.jsx)(i.code,{children:'import "@ui5/webcomponents-base/dist/features/F6Navigation.js"'})]}),"\n",(0,t.jsx)(i.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.code,{children:'import "@ui5/webcomponents-fiori/dist/ShellBar.js";'})}),"\n",(0,t.jsx)(i.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,t.jsx)(i.p,{children:"The ShellBar includes Back button, Logo, Title and Profile image."}),"\n",(0,t.jsx)(c,{}),"\n",(0,t.jsx)(i.h2,{id:"properties",children:"Properties"}),"\n",(0,t.jsx)(i.h3,{id:"primarytitle",children:"primaryTitle"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the ",(0,t.jsx)(i.code,{children:"primaryTitle"}),".",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," The ",(0,t.jsx)(i.code,{children:"primaryTitle"})," would be hidden on S screen size (less than approx. 700px)."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:'""'})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"secondarytitle",children:"secondaryTitle"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the ",(0,t.jsx)(i.code,{children:"secondaryTitle"}),".",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," The ",(0,t.jsx)(i.code,{children:"secondaryTitle"})," would be hidden on S and M screen sizes (less than approx. 1300px)."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:'""'})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"notificationscount",children:"notificationsCount"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the ",(0,t.jsx)(i.code,{children:"notificationsCount"}),", displayed in the notification icon top-right corner."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"string"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:'""'})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"shownotifications",children:"showNotifications"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Defines, if the notification icon would be displayed."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"showproductswitch",children:"showProductSwitch"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Defines, if the product switch icon would be displayed."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"showcopilot",children:"showCoPilot"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines, if the product CoPilot icon would be displayed.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," By default the co-pilot is displayed as static SVG. If you need an animated co-pilot, you can import the ",(0,t.jsx)(i.code,{children:'"@ui5/webcomponents-fiori/dist/features/CoPilotAnimation.js"'})," module as add-on feature."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"showsearchfield",children:"showSearchField"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines, if the Search Field would be displayed when there is a valid ",(0,t.jsx)(i.code,{children:"searchField"})," slot.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," By default the Search Field is not displayed."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"boolean"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"false"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"accessibilityroles",children:"accessibilityRoles"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["An object of strings that defines additional accessibility roles for further customization.",(0,t.jsx)("br",{}),"It supports the following fields:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"logoRole"}),": the accessibility role for the ",(0,t.jsx)(i.code,{children:"logo"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ShellBarAccessibilityRoles"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.6.0"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"accessibilitytexts",children:"accessibilityTexts"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["An object of strings that defines several additional accessibility texts for even further customization.",(0,t.jsx)("br",{}),"It supports the following fields:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"profileButtonTitle"}),": defines the tooltip for the profile button",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"logoTitle"}),": defines the tooltip for the logo"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ShellBarAccessibilityTexts"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.1.0"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"accessibilityattributes",children:"accessibilityAttributes"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["An object of strings that defines several additional accessibility attribute values for customization depending on the use case.",(0,t.jsx)("br",{}),"It supports the following fields:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"expanded"}),": Indicates whether the anchor element, or another grouping element it controls, is currently expanded or collapsed. Accepts the following string values:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"true"}),(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"false"}),(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"hasPopup"}),": Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by the anchor element. Accepts the following string values:",(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"Dialog"}),(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"Grid"}),(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"ListBox"}),(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"Menu"}),(0,t.jsx)("br",{}),"- ",(0,t.jsx)(i.code,{children:"Tree"})]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"ShellBarAccessibilityAttributes"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.10.0"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"logodomref",children:"logoDomRef"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Returns the ",(0,t.jsx)(i.code,{children:"logo"})," DOM ref."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"null"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"copilotdomref",children:"copilotDomRef"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Returns the ",(0,t.jsx)(i.code,{children:"copilot"})," DOM ref."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"null"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"notificationsdomref",children:"notificationsDomRef"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Returns the ",(0,t.jsx)(i.code,{children:"notifications"})," icon DOM ref."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"null"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"overflowdomref",children:"overflowDomRef"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Returns the ",(0,t.jsx)(i.code,{children:"overflow"})," icon DOM ref."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"null"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"profiledomref",children:"profileDomRef"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Returns the ",(0,t.jsx)(i.code,{children:"profile"})," icon DOM ref."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"null"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"productswitchdomref",children:"productSwitchDomRef"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Returns the ",(0,t.jsx)(i.code,{children:"product-switch"})," icon DOM ref."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"HTMLElement | null"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Default"}),(0,t.jsx)(i.td,{children:"null"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"slots",children:"Slots"}),"\n",(0,t.jsx)(i.h3,{id:"default",children:"default"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the ",(0,t.jsx)(i.code,{children:"ui5-shellbar"})," aditional items.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," You can use the ",(0,t.jsx)(i.code,{children:"<ui5-shellbar-item></ui5-shellbar-item>"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<ShellBarItem>"})})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"profile",children:"profile"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["You can pass ",(0,t.jsx)(i.code,{children:"ui5-avatar"})," to set the profile image/icon. If no profile slot is set - profile will be excluded from actions.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," We recommend not using the ",(0,t.jsx)(i.code,{children:"size"})," attribute of ",(0,t.jsx)(i.code,{children:"ui5-avatar"})," because it should have specific size by design in the context of ",(0,t.jsx)(i.code,{children:"ui5-shellbar"})," profile."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<HTMLElement>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.6"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"logo",children:"logo"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the logo of the ",(0,t.jsx)(i.code,{children:"ui5-shellbar"}),". For example, you can use ",(0,t.jsx)(i.code,{children:"ui5-avatar"})," or ",(0,t.jsx)(i.code,{children:"img"})," elements as logo."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<HTMLElement>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"menuitems",children:"menuItems"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the items displayed in menu after a click on the primary title.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," You can use the  ",(0,t.jsx)(i.code,{children:"<ui5-li></ui5-li>"})," and its ancestors."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<ListItemBase>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"0.10"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"searchfield",children:"searchField"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines the ",(0,t.jsx)(i.code,{children:"ui5-input"}),", that will be used as a search field."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<Input>"})})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"startbutton",children:"startButton"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Defines a ",(0,t.jsx)(i.code,{children:"ui5-button"})," in the bar that will be placed in the beginning. We encourage this slot to be used for a back or home button. It gets overstyled to match ShellBar's styling."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Array<IButton>"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"events",children:"Events"}),"\n",(0,t.jsx)(i.h3,{id:"notifications-click",children:"notifications-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Fired, when the notification icon is activated."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<ShellBarNotificationsClickEventDetail>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Parameters"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"targetRef"}),": ",(0,t.jsx)(i.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"profile-click",children:"profile-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Fired, when the profile slot is present."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<ShellBarProfileClickEventDetail>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Parameters"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"targetRef"}),": ",(0,t.jsx)(i.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"product-switch-click",children:"product-switch-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Fired, when the product switch icon is activated.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," You can prevent closing of overflow popover by calling ",(0,t.jsx)(i.code,{children:"event.preventDefault()"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<ShellBarProductSwitchClickEventDetail>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Parameters"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"targetRef"}),": ",(0,t.jsx)(i.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"logo-click",children:"logo-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Fired, when the logo is activated."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<ShellBarLogoClickEventDetail>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Parameters"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"targetRef"}),": ",(0,t.jsx)(i.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"0.10"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"co-pilot-click",children:"co-pilot-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Fired, when the co pilot is activated."})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<ShellBarCoPilotClickEventDetail>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Parameters"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"targetRef"}),": ",(0,t.jsx)(i.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"dom ref of the activated element"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"0.10"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"menu-item-click",children:"menu-item-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Fired, when a menu item is activated",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," You can prevent closing of overflow popover by calling ",(0,t.jsx)(i.code,{children:"event.preventDefault()"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<ShellBarMenuItemClickEventDetail>"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Parameters"}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.strong,{children:"item"}),": ",(0,t.jsx)(i.code,{children:"HTMLElement"}),(0,t.jsx)("br",{}),"DOM ref of the activated list item"]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Since"}),(0,t.jsx)(i.td,{children:"0.10"})]})]})]}),"\n",(0,t.jsx)(i.h3,{id:"search-button-click",children:"search-button-click"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsxs)(i.td,{children:["Fired, when the search button is activated.",(0,t.jsx)("br",{}),(0,t.jsx)(i.strong,{children:"Note:"})," You can prevent expanding/collapsing of the search field by calling ",(0,t.jsx)(i.code,{children:"event.preventDefault()"}),"."]})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"CustomEvent<ShellBarSearchButtonEventDetail>"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsx)(i.h3,{id:"closeoverflow",children:"closeOverflow"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{}),(0,t.jsx)(i.th,{})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Description"}),(0,t.jsx)(i.td,{children:"Closes the overflow area. Useful to manually close the overflow after having suppressed automatic closing with preventDefault() of ShellbarItem's press event"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"Return type"}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"void"})})]})]})]}),"\n",(0,t.jsx)(i.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Name"}),(0,t.jsx)(i.th,{children:"Description"})]})}),(0,t.jsx)(i.tbody,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:"root"}),(0,t.jsxs)(i.td,{children:["Used to style the outermost wrapper of the ",(0,t.jsx)(i.code,{children:"ui5-shellbar"})]})]})})]}),"\n",(0,t.jsx)(i.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,t.jsx)(i.h3,{id:"profile-area",children:"Profile Area"}),"\n",(0,t.jsx)(i.p,{children:"Press the profile image on the right-most side to open a simple popup that one can implment its own profile area."}),"\n",(0,t.jsx)(j,{})]})}function v(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},1184:(e,i,s)=>{s.d(i,{R:()=>r,x:()=>d});var t=s(4041);const n={},l=t.createContext(n);function r(e){const i=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(l.Provider,{value:i},e.children)}}}]);