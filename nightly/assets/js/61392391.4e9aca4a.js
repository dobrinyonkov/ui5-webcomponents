"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[5843],{88967:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>L,contentTitle:()=>N,default:()=>P,frontMatter:()=>_,metadata:()=>M,toc:()=>U});var i=t(31085),s=t(71184);const o='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-card>\n        <ui5-card-header slot="header" title-text="This header is interactive"\n            subtitle-text="Click, press Enter or Space" additional-text="3 of 6" interactive>\n            <ui5-icon name="group" slot="avatar"></ui5-icon>\n        </ui5-card-header>\n        <ui5-list separators="None" style="margin-block-end: 0.75rem;">\n            <ui5-li image="../assets/images/avatars/man_avatar_2.png" description="Software Architect">Richard\n                Wilson</ui5-li>\n            <ui5-li image="../assets/images/avatars/woman_avatar_3.png" description="Visual Designer">Elena\n                Petrova</ui5-li>\n            <ui5-li image="../assets/images/avatars/man_avatar_3.png" description="Quality Specialist">John\n                Miller</ui5-li>\n        </ui5-list>\n    </ui5-card>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',l='import "@ui5/webcomponents/dist/Card.js";\nimport "@ui5/webcomponents/dist/CardHeader.js";\nimport "@ui5/webcomponents/dist/Icon.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/ListItemStandard.js";\n\nimport "@ui5/webcomponents-icons/dist/group.js";',r="ui5-card {\n    width: 22rem;\n}";function a(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:o,js:l,css:r})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-card>\n        <ui5-card-header slot="header" title-text="Team Space" subtitle-text="Direct Reports" additional-text="3 of 10">\n            <ui5-icon name="group" slot="avatar"></ui5-icon>\n            <ui5-button design="Transparent" slot="action">View All</ui5-button>\n        </ui5-card-header>\n        <ui5-list separators="None" style="margin-block-end: 0.75rem;">\n            <ui5-li image="../assets/images/avatars/man_avatar_1.png" description="User Researcher">Alain\n                Chevalier</ui5-li>\n            <ui5-li image="../assets/images/avatars/woman_avatar_1.png" description="Artist">Monique Legrand</ui5-li>\n            <ui5-li image="../assets/images/avatars/woman_avatar_2.png" description="UX Specialist">Isabella\n                Adams</ui5-li>\n        </ui5-list>\n    </ui5-card>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',u='import "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Card.js";\nimport "@ui5/webcomponents/dist/CardHeader.js";\nimport "@ui5/webcomponents/dist/Icon.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/ListItemStandard.js";\n\nimport "@ui5/webcomponents-icons/dist/group.js";',m="ui5-card {\n    width: 22rem;\n}";function p(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:c,js:u,css:m})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}const b='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-card>\n        <ui5-card-header slot="header" title-text="New Purchase Orders" subtitle-text="Today" additional-text="3 of 15">\n        </ui5-card-header>\n\n        <ui5-table style="margin-block-end: 0.75rem;">\n            <ui5-table-column slot="columns">\n                <ui5-label>Sales Order</ui5-label>\n            </ui5-table-column>\n            <ui5-table-column slot="columns">\n                <ui5-label>Customer</ui5-label>\n            </ui5-table-column>\n            <ui5-table-column slot="columns">\n                <ui5-label>Net Amount</ui5-label>\n            </ui5-table-column>\n            <ui5-table-column slot="columns" min-width="450" popin-text="Status" demand-popin>\n                <ui5-label>Status</ui5-label>\n            </ui5-table-column>\n\n            <ui5-table-row>\n                <ui5-table-cell>\n                    <ui5-label>5000010050</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-label>Entertainment Argentina</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-label>6k USD</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-text class="status-success">Approved</ui5-text>\n                </ui5-table-cell>\n            </ui5-table-row>\n            <ui5-table-row>\n                <ui5-table-cell>\n                    <ui5-label>5000010051</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-label>Brazil Technologies</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-label>2k USD</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-text class="status-error">Rejected</ui5-text>\n                </ui5-table-cell>\n            </ui5-table-row>\n            <ui5-table-row>\n                <ui5-table-cell>\n                    <ui5-label>5000010052</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-label>Robert Brown Ent.</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-label>17k USD</ui5-label>\n                </ui5-table-cell>\n                <ui5-table-cell>\n                    <ui5-text class="status-warning">Pending</ui5-text>\n                </ui5-table-cell>\n            </ui5-table-row>\n        </ui5-table>\n    </ui5-card>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',x='import "@ui5/webcomponents/dist/Card.js";\nimport "@ui5/webcomponents/dist/CardHeader.js";\nimport "@ui5/webcomponents-compat/dist/Table.js";\nimport "@ui5/webcomponents-compat/dist/TableColumn.js";\nimport "@ui5/webcomponents-compat/dist/TableRow.js";\nimport "@ui5/webcomponents-compat/dist/TableCell.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Text.js";',j="ui5-card {\n    width: 40rem;\n}\n\n.status-error { color: #b00; }\n.status-warning { color: #e9730c; }\n.status-success { color: #107e3e; }";function g(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:b,js:x,css:j})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}const w='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-card>\n        <ui5-card-header slot="header" title-text="Upcoming Activities" subtitle-text="Today">\n        </ui5-card-header>\n        <ui5-timeline>\n            <ui5-timeline-item title-text="called" timestamp="1487583000000" icon="phone" name="John Smith"\n                name-clickable></ui5-timeline-item>\n            <ui5-timeline-item title-text="Weekly Sync - BTP Design" timestamp="1517349600000" icon="calendar">\n                MR SOF02 2.43\n            </ui5-timeline-item>\n            <ui5-timeline-item title-text="Video Conference Call - UI5" timestamp="1485813600000" icon="calendar">\n                Online meeting\n            </ui5-timeline-item>\n        </ui5-timeline>\n    </ui5-card>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',v='import "@ui5/webcomponents/dist/Card.js";\nimport "@ui5/webcomponents/dist/CardHeader.js";\nimport "@ui5/webcomponents-fiori/dist/Timeline.js";\nimport "@ui5/webcomponents-fiori/dist/TimelineItem.js";\n\nimport "@ui5/webcomponents-icons/dist/phone.js"\nimport "@ui5/webcomponents-icons/dist/calendar.js"',y="ui5-card {\n    width: 22rem;\n}";function C(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:w,js:v,css:y})}function k(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(C,{...e})}):C(e)}const S='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n    <link rel="stylesheet" href="./main.css">\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n        <ui5-card>\n            <ui5-card-header slot="header" title-text="Donna Maria Moore" subtitle-text="Senior Sales Executive">\n                <img src="../assets/images/avatars/man_avatar_1.png" slot="avatar">\n            </ui5-card-header>\n            <div class="content content-padding">\n                <ui5-title level="H5" style="padding-block-end: 1rem;">Contact details</ui5-title>\n                <div class="content-group">\n                    <ui5-label show-colon>Company Name</ui5-label>\n                    <ui5-text>Company A</ui5-text>\n                </div>\n                <div class="content-group">\n                    <ui5-label show-colon>Address</ui5-label>\n                    <ui5-text>481 West Street, Anytown 45066, USA</ui5-text>\n                </div>\n                <div class="content-group">\n                    <ui5-label show-colon>Website</ui5-label>\n                    <ui5-link target="_blank">www.company_a.example.com</ui5-link>\n                </div>\n            </div>\n        </ui5-card>\n\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',T='import "@ui5/webcomponents/dist/Card.js";\nimport "@ui5/webcomponents/dist/CardHeader.js";\nimport "@ui5/webcomponents/dist/List.js";\nimport "@ui5/webcomponents/dist/ListItemStandard.js";\nimport "@ui5/webcomponents/dist/Title.js";\nimport "@ui5/webcomponents/dist/Label.js";\nimport "@ui5/webcomponents/dist/Text.js";\nimport "@ui5/webcomponents/dist/Link.js";\n\nimport "@ui5/webcomponents-icons/dist/competitor.js";\nimport "@ui5/webcomponents-icons/dist/wallet.js";\nimport "@ui5/webcomponents-icons/dist/collaborate.js";',E=".content,\n.content-group {\n    display: flex;\n    flex-direction: column;\n    padding-block-end: 1rem;\n}\n.content-padding {\n    padding: 0.5rem 1rem 0 1rem;\n    box-sizing: border-box;\n}\n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, 22rem);\n    grid-auto-rows: 1fr;\n    gap: 1rem;\n}";function D(e){const{Editor:n}={...(0,s.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,i.jsx)(n,{html:S,js:T,css:E})}function R(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(D,{...e})}):D(e)}const _={slug:"../../Card"},N=void 0,M={id:"components/main/Card/Card",title:"Card",description:"The ui5-card is a component that represents information in the form of a",source:"@site/docs/components/main/Card/Card.mdx",sourceDirName:"components/main/Card",slug:"/components/Card",permalink:"/ui5-webcomponents/nightly/components/Card",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../Card"},sidebar:"componentsSidebar",previous:{title:"CalendarLegendItem",permalink:"/ui5-webcomponents/nightly/components/CalendarLegendItem"},next:{title:"CardHeader",permalink:"/ui5-webcomponents/nightly/components/CardHeader"}},L={},U=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Sample",id:"basic-sample",level:2},{value:"Properties",id:"properties",level:2},{value:"accessibleName",id:"accessiblename",level:3},{value:"accessibleNameRef",id:"accessiblenameref",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"header",id:"header",level:3},{value:"Events",id:"events",level:2},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"List Card",id:"list-card",level:3},{value:"Table Card",id:"table-card",level:3},{value:"Timeline Card",id:"timeline-card",level:3},{value:"Object Card",id:"object-card",level:3}];function A(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"ui5-card"})," is a component that represents information in the form of a\ntile with separate header and content areas.\nThe content area of a ",(0,i.jsx)(n.code,{children:"ui5-card"})," can be arbitrary HTML content.\nThe header can be used through slot ",(0,i.jsx)(n.code,{children:"header"}),". For which there is a ",(0,i.jsx)(n.code,{children:"ui5-card-header"})," component to achieve the card look and feel."]}),"\n",(0,i.jsxs)(n.p,{children:["Note: We recommend the usage of ",(0,i.jsx)(n.code,{children:"ui5-card-header"})," for the header slot, so advantage can be taken for keyboard handling, styling and accessibility."]}),"\n",(0,i.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/Card.js";'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/CardHeader.js";'})," (for ",(0,i.jsx)(n.code,{children:"ui5-card-header"}),")"]}),"\n",(0,i.jsx)(n.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,i.jsx)(d,{}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsx)(n.h3,{id:"accessiblename",children:"accessibleName"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the accessible name of the component, which is used as the name of the card region and should be unique per card.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," ",(0,i.jsx)(n.code,{children:"accessibleName"})," should be always set, unless ",(0,i.jsx)(n.code,{children:"accessibleNameRef"})," is set."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"accessiblenameref",children:"accessibleNameRef"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the IDs of the elements that label the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string | undefined"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Default"}),(0,i.jsx)(n.td,{children:"undefined"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.16"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,i.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{children:"Defines the content of the component."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"header",children:"header"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsxs)(n.td,{children:["Defines the header of the component.",(0,i.jsx)("br",{}),(0,i.jsx)(n.strong,{children:"Note:"})," Use ",(0,i.jsx)(n.code,{children:"ui5-card-header"})," for the intended design."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"Array<CardHeader>"})})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Since"}),(0,i.jsx)(n.td,{children:"1.0.0-rc.15"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,i.jsx)(n.p,{children:"No events available for this component."}),"\n",(0,i.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,i.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,i.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"root"}),(0,i.jsx)(n.td,{children:"Used to style the root DOM element of the card component"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"content"}),(0,i.jsx)(n.td,{children:"Used to style the content of the card"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,i.jsx)(n.h3,{id:"list-card",children:"List Card"}),"\n",(0,i.jsx)(h,{}),"\n",(0,i.jsx)(n.h3,{id:"table-card",children:"Table Card"}),"\n",(0,i.jsx)(f,{}),"\n",(0,i.jsx)(n.h3,{id:"timeline-card",children:"Timeline Card"}),"\n",(0,i.jsx)(k,{}),"\n",(0,i.jsx)(n.h3,{id:"object-card",children:"Object Card"}),"\n",(0,i.jsx)(R,{})]})}function P(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},71184:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(14041);const s={},o=i.createContext(s);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);