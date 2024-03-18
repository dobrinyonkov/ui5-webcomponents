"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[2115],{2444:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>k,contentTitle:()=>T,default:()=>R,frontMatter:()=>D,metadata:()=>E,toc:()=>C});var i=s(1085),t=s(1184);const d='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog" header-text="Register Form">\n        <section class="login-form">\n            <div>\n                <ui5-label for="username" required show-colon>Username</ui5-label>\n                <ui5-input id="username"></ui5-input>\n            </div>\n            <div>\n                <ui5-label for="password" required show-colon>Password</ui5-label>\n                <ui5-input id="password" type="Password" value-state="Error"></ui5-input>\n            </div>\n            <div>\n                <ui5-label for="email" type="Email" required show-colon>Email</ui5-label>\n                <ui5-input id="email"></ui5-input>\n            </div>\n            <div>\n                <ui5-label for="address" show-colon>Address</ui5-label>\n                <ui5-input id="address"></ui5-input>\n            </div>\n        </section>\n        <div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; align-items: center">\n            <div style="flex: 1;"></div>\n            <ui5-button class="dialogCloser" design="Emphasized">Register</ui5-button>\n        </div>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',r='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Input.js";\nimport "@ui5/webcomponents/dist/Link.js";\nimport "@ui5/webcomponents/dist/Label.js";\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog");\nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})',l=".login-form {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: flex-start;\n    margin: 3rem 6rem;\n}\n\n.login-form > div {\n    display: grid;\n    width: 15rem;\n    margin-bottom: .5rem;\n}\n\n@media(max-width: 600px) {\n    .login-form {\n        margin: 3rem 1rem;\n    }\n}";function o(e){const{Editor:n}={...(0,t.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:d,js:r,css:l})}function c(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}const h='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog" header-text="Draggable/Resizable dialog" draggable resizable>\n        <p>Move this dialog around the screen by dragging it by its header.</p>\n        <p>Resize this dialog by dragging it by its resize handle.</p>\n        <p>These features are available only on Desktop.</p>\n        <div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; align-items: center">\n            <ui5-button class="dialogCloser" design="Emphasized">OK</ui5-button>\n        </div>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog");\nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})';function x(e){const{Editor:n}={...(0,t.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:h,js:a})}function j(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(x,{...e})}):x(e)}const p='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog">\n        <ui5-bar slot="header" design="Header">\n            <ui5-title level="H5" slot="startContent">Bar used in Header and Footer</ui5-title>\n            <ui5-button class="dialogCloser" design="Transparent" id="closeDialogButton" slot="endContent"\n                icon="decline"></ui5-button>\n        </ui5-bar>\n        <p>Adding styles for the parts to remove the default Dialog\'s paddings when ui5-bar is used inside Header and\n            Footer</p>\n        <ui5-bar slot="footer" design="Footer">\n            <ui5-button class="dialogCloser" design="Emphasized" slot="endContent"\n                style="min-width: 4rem;">OK</ui5-button>\n        </ui5-bar>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',u='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nimport "@ui5/webcomponents-fiori/dist/Bar.js";\nimport "@ui5/webcomponents-icons/dist/decline.js";\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog");\nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})',g="#dialog::part(header),\n#dialog::part(footer) {\n    padding-inline: 0;\n}";function b(e){const{Editor:n}={...(0,t.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:p,js:u,css:g})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(b,{...e})}):b(e)}const f='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor); height: 450px;">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-button id="dialogOpener">Open Dialog</ui5-button>\n\n    <ui5-dialog id="dialog" state="Error" header-text="Error">\n        <p>Dialog with state</p>\n        <div slot="footer" style="display: flex; justify-content: flex-end; width: 100%; align-items: center">\n            <ui5-button class="dialogCloser">Close</ui5-button>\n        </div>\n    </ui5-dialog>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',v='import "@ui5/webcomponents/dist/Dialog.js";\nimport "@ui5/webcomponents/dist/Button.js";\n\nvar dialogOpener = document.getElementById("dialogOpener");\nvar dialog = document.getElementById("dialog"); \nvar dialogClosers = [...dialog.querySelectorAll(".dialogCloser")];\n\ndialogOpener.accessibilityAttributes = {\n    hasPopup: "dialog",\n    controls: dialog.id,\n};\ndialogOpener.addEventListener("click", () => {\n    dialog.open = true;\n});\ndialogClosers.forEach(btn => {\n    btn.addEventListener("click", () => {\n        dialog.open = false;\n    });\n})';function y(e){const{Editor:n}={...(0,t.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:f,js:v})}function w(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(y,{...e})}):y(e)}const D={slug:"../Dialog"},T=void 0,E={id:"components/main/Dialog",title:"Dialog",description:"The ui5-dialog component is used to temporarily display some information in a",source:"@site/docs/components/main/Dialog.mdx",sourceDirName:"components/main",slug:"/components/Dialog",permalink:"/ui5-webcomponents/nightly/components/Dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../Dialog"},sidebar:"componentsSidebar",previous:{title:"DateTimePicker",permalink:"/ui5-webcomponents/nightly/components/DateTimePicker"},next:{title:"FileUploader",permalink:"/ui5-webcomponents/nightly/components/FileUploader"}},k={},C=[{value:"Structure",id:"structure",level:3},{value:"Responsive Behavior",id:"responsive-behavior",level:3},{value:"Keyboard Handling",id:"keyboard-handling",level:3},{value:"Basic Navigation",id:"basic-navigation",level:4},{value:"Resizing",id:"resizing",level:4},{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"headerText",id:"headertext",level:3},{value:"stretch",id:"stretch",level:3},{value:"draggable",id:"draggable",level:3},{value:"resizable",id:"resizable",level:3},{value:"state",id:"state",level:3},{value:"initialFocus",id:"initialfocus",level:3},{value:"preventFocusRestore",id:"preventfocusrestore",level:3},{value:"open",id:"open",level:3},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"accessibleRole",id:"accessiblerole",level:3},{value:"Slots",id:"slots",level:2},{value:"header",id:"header",level:3},{value:"footer",id:"footer",level:3},{value:"Events",id:"events",level:2},{value:"before-open",id:"before-open",level:3},{value:"after-open",id:"after-open",level:3},{value:"before-close",id:"before-close",level:3},{value:"after-close",id:"after-close",level:3},{value:"Methods",id:"methods",level:2},{value:"show",id:"show",level:3},{value:"applyFocus",id:"applyfocus",level:3},{value:"isOpen",id:"isopen",level:3},{value:"close",id:"close",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Draggable and Resizable",id:"draggable-and-resizable",level:3},{value:"Usage of Bar as header/footer",id:"usage-of-bar-as-headerfooter",level:3},{value:"Value States",id:"value-states",level:3}];function S(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," component is used to temporarily display some information in a\nsize-limited window in front of the regular app screen.\nIt is used to prompt the user for an action or a confirmation.\nThe ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," interrupts the current app processing as it is the only focused UI element and\nthe main screen is dimmed/blocked.\nThe dialog combines concepts known from other technologies where the windows have\nnames such as dialog box, dialog window, pop-up, pop-up window, alert box, or message box."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," is modal, which means that an user action is required before it is possible to return to the parent window.\nTo open multiple dialogs, each dialog element should be separate in the markup. This will ensure the correct modal behavior. Avoid nesting dialogs within each other.\nThe content of the ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," is fully customizable."]}),"\n",(0,i.jsx)(n.h3,{id:"structure",children:"Structure"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," consists of a header, content, and a footer for action buttons.\nThe ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," is usually displayed at the center of the screen.\nIts position can be changed by the user. To enable this, you need to set the property ",(0,i.jsx)(n.code,{children:"draggable"})," accordingly."]}),"\n",(0,i.jsx)(n.h3,{id:"responsive-behavior",children:"Responsive Behavior"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"stretch"})," property can be used to stretch the\n",(0,i.jsx)(n.code,{children:"ui5-dialog"})," on full screen."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," When a ",(0,i.jsx)(n.code,{children:"ui5-bar"})," is used in the header or in the footer, you should remove the default dialog's paddings."]}),"\n",(0,i.jsx)(n.p,{children:'For more information see the sample "Bar in Header/Footer".'}),"\n",(0,i.jsx)(n.h3,{id:"keyboard-handling",children:"Keyboard Handling"}),"\n",(0,i.jsx)(n.h4,{id:"basic-navigation",children:"Basic Navigation"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," has the ",(0,i.jsx)(n.code,{children:"draggable"})," property set to ",(0,i.jsx)(n.code,{children:"true"})," and the header is focused, the user can move the dialog\nwith the following keyboard shortcuts:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[UP/DOWN] arrow keys - Move the dialog up/down."}),"\n",(0,i.jsx)(n.li,{children:"[LEFT/RIGHT] arrow keys - Move the dialog left/right."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"resizing",children:"Resizing"}),"\n",(0,i.jsxs)(n.p,{children:["When the ",(0,i.jsx)(n.code,{children:"ui5-dialog"})," has the ",(0,i.jsx)(n.code,{children:"resizable"})," property set to ",(0,i.jsx)(n.code,{children:"true"})," and the header is focused, the user can change the size of the dialog\nwith the following keyboard shortcuts:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"[SHIFT] + [UP/DOWN] - Decrease/Increase the height of the dialog."}),"\n",(0,i.jsx)(n.li,{children:"[SHIFT] + [LEFT/RIGHT] - Decrease/Increase the width of the dialog."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/Dialog";'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," We recommend placing popup-like components (",(0,i.jsx)(n.code,{children:"ui5-dialog"})," and ",(0,i.jsx)(n.code,{children:"ui5-popover"}),")\noutside any other components. Preferably, the popup-like components should be placed\nin an upper level HTML element. Otherwise, in some cases the parent HTML elements can break\nthe position and/or z-index management of the popup-like components."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," We don't recommend nesting popup-like components (",(0,i.jsx)(n.code,{children:"ui5-dialog"}),", ",(0,i.jsx)(n.code,{children:"ui5-popover"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,i.jsx)(c,{}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"headertext",children:"headerText"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the header text.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If ",(0,i.jsx)(n.code,{children:"header"})," slot is provided, the ",(0,i.jsx)(n.code,{children:"headerText"})," is ignored."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"stretch",children:"stretch"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Determines whether the component should be stretched to fullscreen.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," The component will be stretched to approximately 90% of the viewport."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"draggable",children:"draggable"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Determines whether the component is draggable. If this property is set to true, the Dialog will be draggable by its header.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," The component can be draggable only in desktop mode.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"}),' This property overrides the default HTML "draggable" attribute native behavior. When "draggable" is set to true, the native browser "draggable" behavior is prevented and only the Dialog custom logic ("draggable by its header") works.']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.9"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"resizable",children:"resizable"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Configures the component to be resizable. If this property is set to true, the Dialog will have a resize handle in its bottom right corner in LTR languages. In RTL languages, the resize handle will be placed in the bottom left corner.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," The component can be resizable only in desktop mode.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," Upon resizing, externally defined height and width styling will be ignored."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.10"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"state",children:"state"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the state of the ",(0,i.jsx)(n.code,{children:"Dialog"}),".",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If ",(0,i.jsx)(n.code,{children:'"Error"'})," and ",(0,i.jsx)(n.code,{children:'"Warning"'}),' state is set, it will change the accessibility role to "alertdialog", if the accessibleRole property is set to ',(0,i.jsx)(n.code,{children:'"Dialog"'}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"None" | "Success" | "Warning" | "Error" | "Information"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'"None"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"initialfocus",children:"initialFocus"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the ID of the HTML Element, which will get the initial focus."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"preventfocusrestore",children:"preventFocusRestore"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines if the focus should be returned to the previously focused element, when the popup closes."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.8"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"open",children:"open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Indicates if the element is open"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"false"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.2.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the accessible name of the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the IDs of the elements that label the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'""'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.1.0"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblerole",children:"accessibleRole"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Allows setting a custom role."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:'"None" | "Dialog" | "AlertDialog"'})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:'"Dialog"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.10.0"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"header"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the header HTML Element.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," When a ",(0,i.jsx)(n.code,{children:"ui5-bar"})," is used in the header, you should remove the default dialog's paddings.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," If ",(0,i.jsx)(n.code,{children:"header"})," slot is provided, the labelling of the dialog is a responsibility of the application developer. ",(0,i.jsx)(n.code,{children:"accessibleName"})," should be used."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"footer",children:"footer"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the footer HTML Element.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," When a ",(0,i.jsx)(n.code,{children:"ui5-bar"})," is used in the footer, you should remove the default dialog's paddings."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.h3,{id:"before-open",children:"before-open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired before the component is opened. This event can be cancelled, which will prevent the popup from opening. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"after-open",children:"after-open"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired after the component is opened. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"before-close",children:"before-close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired before the component is closed. This event can be cancelled, which will prevent the popup from closing. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent<PopupBeforeCloseEventDetail>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"escPressed"}),": ",(0,i.jsx)(n.code,{children:"boolean"}),(0,i.jsx)("br",{}),"Indicates that ",(0,i.jsx)(n.code,{children:"ESC"})," key has triggered the event."]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"after-close",children:"after-close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Fired after the component is closed. ",(0,i.jsx)(n.strong,{children:"This event does not bubble."})]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"CustomEvent"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.h3,{id:"show",children:"show"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Shows the dialog."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Return type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Promise<void>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameters"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"preventInitialFocus"}),": ",(0,i.jsx)(n.code,{children:"boolean"}),(0,i.jsx)("br",{}),"Prevents applying the focus inside the popup"]})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"applyfocus",children:"applyFocus"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Focuses the element denoted by ",(0,i.jsx)(n.code,{children:"initialFocus"}),", if provided, or the first focusable element otherwise."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Return type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Promise<void>"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"isopen",children:"isOpen"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Tells if the component is opened"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Return type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"close",children:"close"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Closes the popup."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Return type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"void"})})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"header"}),(0,i.jsx)(n.td,{children:"Used to style the header of the component"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"Used to style the content of the component"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"footer"}),(0,i.jsx)(n.td,{children:"Used to style the footer of the component"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,i.jsx)(n.h3,{id:"draggable-and-resizable",children:"Draggable and Resizable"}),"\n",(0,i.jsx)(j,{}),"\n",(0,i.jsx)(n.h3,{id:"usage-of-bar-as-headerfooter",children:"Usage of Bar as header/footer"}),"\n",(0,i.jsx)(n.p,{children:"The Bar component can be used as header and/or footer of the Dialog"}),"\n",(0,i.jsx)(m,{}),"\n",(0,i.jsx)(n.h3,{id:"value-states",children:"Value States"}),"\n",(0,i.jsx)(n.p,{children:'The Dialog supports "Success", "Warning", "Error" and "None"states via the "state" property.'}),"\n",(0,i.jsx)(w,{})]})}function R(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(S,{...e})}):S(e)}},1184:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>l});var i=s(4041);const t={},d=i.createContext(t);function r(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);