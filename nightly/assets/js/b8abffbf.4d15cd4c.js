"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1724],{12760:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>a,metadata:()=>h,toc:()=>x});var r=n(31085),i=n(71184);const s='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    <div class="section">\n\t\t<template id="rowTemplate">\n\t\t\t<ui5-table-row position="-1" row-key="-1">\n\t\t\t\t<ui5-table-cell data="name"></ui5-table-cell>\n\t\t\t\t<ui5-table-cell data="height"></ui5-table-cell>\n\t\t\t\t<ui5-table-cell data="weight"></ui5-table-cell>\n\t\t\t\t<ui5-table-cell data="price"></ui5-table-cell>\n\t\t\t</ui5-table-row>\n\t\t</template>\n\x3c!-- playground-fold-end --\x3e\n\t\t<ui5-table id="table" loading-delay="100" style="height: 150px;" class="ui5-content-density-compact">\n\t\t\t<ui5-table-virtualizer id="virtualizer" slot="features" row-count="1000" row-height="32"></ui5-table-virtualizer>\n\x3c!-- playground-fold --\x3e\n\t\t\t<ui5-table-selection slot="features"></ui5-table-selection>\n\t\t\t<ui5-table-header-row slot="headerRow" sticky>\n\t\t\t\t<ui5-table-header-cell min-width="150px">Product Name</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell>Dimensions</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell>Weight</ui5-table-header-cell>\n\t\t\t\t<ui5-table-header-cell horizontal-align="Right">Price</ui5-table-header-cell>\n\t\t\t</ui5-table-header-row>\n\x3c!-- playground-fold-end --\x3e\n\t\t</ui5-table>\n\x3c!-- playground-fold --\x3e\n\t</div>\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',l='import "@ui5/webcomponents/dist/Table.js";\nimport "@ui5/webcomponents/dist/TableRow.js";\nimport "@ui5/webcomponents/dist/TableCell.js";\nimport "@ui5/webcomponents/dist/TableHeaderRow.js";\nimport "@ui5/webcomponents/dist/TableHeaderCell.js";\nimport "@ui5/webcomponents/dist/TableVirtualizer.js";\nimport "@ui5/webcomponents/dist/TableSelection.js";\n\nclass ProductStore {\n\tconstructor() {\n\t\tthis.products = [];\n\t}\n\n\tasync fetchProducts(first, last) {\n\t\tconst products = [];\n\t\tfor (let i = first; i < last; i++) {\n\t\t\tthis.products[i] ??= await this.fetchProduct(i);\n\t\t\tproducts.push(this.products[i]);\n\t\t}\n\t\treturn products;\n\t}\n\n\tasync fetchProduct(index) {\n\t\treturn new Promise(resolve => {\n\t\t\tsetTimeout(() => {\n\t\t\t\tresolve({\n\t\t\t\t\tkey: `P${index}`,\n\t\t\t\t\tname: `Product ${index}`,\n\t\t\t\t\theight: `${(Math.random() * 100).toFixed(0)} cm`,\n\t\t\t\t\tweight: `${(Math.random() * 100).toFixed(1)} KG`,\n\t\t\t\t\tprice: `${(Math.random() * 1000).toFixed(2)} EUR`\n\t\t\t\t});\n\t\t\t}, Math.random() * 10); // Simulate network delay\n\t\t});\n\t}\n}\n\nconst productStore = new ProductStore();\nconst table = document.getElementById("table");\nconst rowTemplate = document.getElementById("rowTemplate");\nconst virtualizer = document.getElementById("virtualizer");\n\nvirtualizer.addEventListener("range-change", async (e) => {\n\tconst { first, last } = e.detail;\n\tconst products = await productStore.fetchProducts(first, last);\n\tfor (let i = first; i < last; i++) {\n\t\tconst rowIndex = i - first;\n\t\tconst product = products[rowIndex];\n\t\tconst row = table.rows[rowIndex] || table.appendChild(rowTemplate.content.firstElementChild.cloneNode(true));\n\t\trow.setAttribute("position", i);\n\t\trow.setAttribute("row-key", product.key);\n\t\trow.querySelectorAll("[data]").forEach(el => {\n\t\t\tel.textContent = product[el.getAttribute("data")];\n\t\t});\n\t}\n\tfor (let i = last; i < table.rows.length; i++) {\n\t\ttable.rows[i].remove();\n\t}\n});\n\nrequestAnimationFrame(() => virtualizer.reset());';function o(e){const t={code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components},{Editor:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Enhance your table with virtualization capabilities by incorporating the ",(0,r.jsx)(t.strong,{children:"Virtualizer"})," feature."]}),"\n",(0,r.jsxs)(t.p,{children:["For effective table virtualization, the ",(0,r.jsx)(t.code,{children:"range-change"})," event with its ",(0,r.jsx)(t.code,{children:"first"})," and ",(0,r.jsx)(t.code,{children:"last"})," parameters determines which rows are currently visible and need to be rendered. To ensure proper virtualization, you must set the following attributes:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"row-count"})," for the ",(0,r.jsx)(t.code,{children:"Table"}),": This attribute specifies the total number of rows in the table. It helps the virtualizer determine the number of rows to manage."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"row-height"})," for the ",(0,r.jsx)(t.code,{children:"Table"}),": This attribute defines the height of each row in the table. Consistent row height allows the virtualizer to calculate which rows are currently visible and need to be rendered."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"position"})," for the ",(0,r.jsx)(t.code,{children:"TableRow"}),": This attribute determines the position of each row within the table. Proper positioning ensures that rows are rendered in the correct location when the user scrolls."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["By setting these attributes and handling the ",(0,r.jsx)(t.code,{children:"range-change"})," event properly, the ",(0,r.jsx)(t.code,{children:"TableVirtualizer"})," can efficiently manage and render only the rows that are visible when the user scrolls."]}),"\n",(0,r.jsx)(n,{html:s,js:l})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}const a={slug:"../../TableVirtualizer",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-virtualizer",ui5_since:"2.5.0"},c=void 0,h={id:"components/main/Table/TableVirtualizer",title:"TableVirtualizer",description:"This component is not intended to be used in a productive enviroment. The API is under development and may be changed in the future.",source:"@site/docs/components/main/Table/TableVirtualizer.mdx",sourceDirName:"components/main/Table",slug:"/components/TableVirtualizer",permalink:"/ui5-webcomponents/nightly/components/TableVirtualizer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../../TableVirtualizer",sidebar_class_name:"newComponentBadge expComponentBadge",ui5_tag_name:"ui5-table-virtualizer",ui5_since:"2.5.0"},sidebar:"componentsSidebar",previous:{title:"TableSelection",permalink:"/ui5-webcomponents/nightly/components/TableSelection"},next:{title:"Tag",permalink:"/ui5-webcomponents/nightly/components/Tag"}},u={},x=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Properties",id:"properties",level:2},{value:"rowHeight",id:"rowheight",level:3},{value:"rowCount",id:"rowcount",level:3},{value:"extraRows",id:"extrarows",level:3},{value:"Slots",id:"slots",level:2},{value:"Events",id:"events",level:2},{value:"range-change",id:"range-change",level:3},{value:"Methods",id:"methods",level:2},{value:"reset",id:"reset",level:3},{value:"CSS Parts",id:"css-parts",level:2},{value:"Basic Sample",id:"basic-sample",level:2}];function p(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"This component is not intended to be used in a productive enviroment. The API is under development and may be changed in the future."})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"ui5-table-virtualizer"})," component is used inside the ",(0,r.jsx)(t.code,{children:"ui5-table"})," to virtualize the table rows, if the ",(0,r.jsx)(t.code,{children:"overflowMode"})," property of the table is set to 'Scroll'.\nIt is responsible for rendering only the rows that are visible in the viewport and updating them on scroll.\nThis allows large numbers of rows to exist, but maintain high performance by only paying the cost for those that are currently visible."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Note:"})," The maximum number of virtualized rows is limited by browser constraints, specifically the maximum supported height for a DOM element."]}),"\n",(0,r.jsx)(t.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:'import "@ui5/webcomponents/dist/TableVirtualizer.js";'})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"rowheight",children:"rowHeight"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Defines the height of the rows in the table.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," For virtualization to work properly, this property is mandatory."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:"45"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"rowcount",children:"rowCount"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Defines the total count of rows in the table.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," For virtualization to work properly, this property is mandatory."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:"100"})]})]})]}),"\n",(0,r.jsx)(t.h3,{id:"extrarows",children:"extraRows"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Defines the count of extra rows to be rendered at the top and bottom of the table.",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"Note:"})," This property is experimental and may be changed or deleted in the future."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"number"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Default"}),(0,r.jsx)(t.td,{children:"0"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"slots",children:"Slots"}),"\n",(0,r.jsx)(t.p,{children:"No slots available for this component."}),"\n",(0,r.jsx)(t.h2,{id:"events",children:"Events"}),"\n",(0,r.jsx)(t.h3,{id:"range-change",children:"range-change"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsx)(t.td,{children:"Fired when the virtualizer is changed by user interaction e.g. on scrolling."})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"CustomEvent<RangeChangeEventDetail>"})})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Parameters"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.strong,{children:"first"}),": ",(0,r.jsx)(t.code,{children:"number"}),(0,r.jsx)("br",{}),"The 0-based index of the first children currently rendered",(0,r.jsx)("br",{}),(0,r.jsx)(t.strong,{children:"last"}),": ",(0,r.jsx)(t.code,{children:"number"}),(0,r.jsx)("br",{}),"The 0-based index of the last children currently rendered"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Bubbles"}),(0,r.jsx)(t.td,{children:"No"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Cancelable"}),(0,r.jsx)(t.td,{children:"No"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsx)(t.h3,{id:"reset",children:"reset"}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Description"}),(0,r.jsxs)(t.td,{children:["Resets the virtualizer to its initial state and triggers the ",(0,r.jsx)(t.code,{children:"range-change"})," event."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Return type"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"void"})})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,r.jsx)(t.p,{children:"No CSS parts available for this component."}),"\n",(0,r.jsx)(t.h2,{id:"basic-sample",children:"Basic Sample"}),"\n",(0,r.jsx)(d,{})]})}function b(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},71184:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>o});var r=n(14041);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);