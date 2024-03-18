"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[8799],{5907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>T,contentTitle:()=>w,default:()=>U,frontMatter:()=>g,metadata:()=>D,toc:()=>E});var s=t(1085),i=t(1184);const l='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-file-uploader>\n        <ui5-button icon="upload" accessible-name-ref="upload-single-file-label">Upload File</ui5-button>\n    </ui5-file-uploader>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',d='import "@ui5/webcomponents/dist/FileUploader.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\n\nimport "@ui5/webcomponents-icons/dist/upload.js";';function o(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:l,js:d})}function r(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}const c='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-file-uploader multiple>\n        <ui5-button icon="upload">Upload Multiple Files</ui5-button>\n    </ui5-file-uploader>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',a='import "@ui5/webcomponents/dist/FileUploader.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\n\nimport "@ui5/webcomponents-icons/dist/upload.js";';function h(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:c,js:a})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}const u='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-file-uploader accept="image/*" multiple id="fileuploader">\n        <ui5-button icon="upload">Upload Images</ui5-button>\n    </ui5-file-uploader>\n\n    <div id="result"></div>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',x='import "@ui5/webcomponents/dist/FileUploader.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\n\nimport "@ui5/webcomponents-icons/dist/upload.js";\n\nconst fileUploader = document.querySelector("#fileuploader");\nconst resultDiv = document.querySelector("#result");\n\nfileUploader.addEventListener("change", (event) => {\n    const files = event.target.files;\n\n    if (!files.length) {\n        resultDiv.innerHTML = "<ui5-label>No Files Selected</ui5-label>";\n    } else {\n        resultDiv.innerHTML = "";\n        resultDiv.style.marginTop = "1rem";\n        for (let i = 0; i < files.length; i++) {\n            const img = document.createElement("img");\n            img.src = URL.createObjectURL(files[i]);\n            img.width = 100;\n            img.height = 100;\n            img.onload = function () {\n                URL.revokeObjectURL(img.src);\n            }\n            resultDiv.appendChild(img);\n        }\n    }\n})';function j(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:u,js:x})}function m(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(j,{...e})}):j(e)}const f='\x3c!-- playground-fold --\x3e\n<!DOCTYPE html>\n<html lang="en">\n\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>Sample</title>\n</head>\n\n<body style="background-color: var(--sapBackgroundColor)">\n    \x3c!-- playground-fold-end --\x3e\n\n    <ui5-file-uploader hide-input>\n        <ui5-button icon="upload" >Upload</ui5-button>\n    </ui5-file-uploader>\n    \x3c!-- playground-fold --\x3e\n    <script type="module" src="main.js"><\/script>\n</body>\n\n</html>\n\x3c!-- playground-fold-end --\x3e\n',b='import "@ui5/webcomponents/dist/FileUploader.js";\nimport "@ui5/webcomponents/dist/Button.js";\nimport "@ui5/webcomponents/dist/Label.js";\n\nimport "@ui5/webcomponents-icons/dist/upload.js";';function y(e){const{Editor:n}={...(0,i.R)(),...e.components};return n||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Editor",!0),(0,s.jsx)(n,{html:f,js:b})}function v(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(y,{...e})}):y(e)}const g={slug:"../FileUploader"},w=void 0,D={id:"components/main/FileUploader",title:"FileUploader",description:"The ui5-file-uploader opens a file explorer dialog and enables users to upload files.",source:"@site/docs/components/main/FileUploader.mdx",sourceDirName:"components/main",slug:"/components/FileUploader",permalink:"/ui5-webcomponents/nightly/components/FileUploader",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{slug:"../FileUploader"},sidebar:"componentsSidebar",previous:{title:"Dialog",permalink:"/ui5-webcomponents/nightly/components/Dialog"},next:{title:"Icon",permalink:"/ui5-webcomponents/nightly/components/Icon"}},T={},E=[{value:"ES6 Module Import",id:"es6-module-import",level:3},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Properties",id:"properties",level:2},{value:"accept",id:"accept",level:3},{value:"hideInput",id:"hideinput",level:3},{value:"disabled",id:"disabled",level:3},{value:"multiple",id:"multiple",level:3},{value:"name",id:"name",level:3},{value:"placeholder",id:"placeholder",level:3},{value:"value",id:"value",level:3},{value:"valueState",id:"valuestate",level:3},{value:"files",id:"files",level:3},{value:"Slots",id:"slots",level:2},{value:"default",id:"default",level:3},{value:"valueStateMessage",id:"valuestatemessage",level:3},{value:"Events",id:"events",level:2},{value:"change",id:"change",level:3},{value:"Methods",id:"methods",level:2},{value:"CSS Parts",id:"css-parts",level:2},{value:"More Samples",id:"more-samples",level:2},{value:"Upload Multiple Files",id:"upload-multiple-files",level:3},{value:"Files Filter",id:"files-filter",level:3},{value:"Button Only",id:"button-only",level:3}];function F(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ui5-file-uploader"}),' opens a file explorer dialog and enables users to upload files.\nThe component consists of input field, but you can provide an HTML element by your choice\nto trigger the file upload, by using the default slot.\nFurthermore, you can set the property "hideInput" to "true" to hide the input field.']}),"\n",(0,s.jsx)(n.p,{children:'To get all selected files, you can simply use the read-only "files" property.\nTo restrict the types of files the user can select, you can use the "accept" property.'}),"\n",(0,s.jsx)(n.p,{children:'And, similar to all input based components, the FileUploader supports "valueState", "placeholder", "name", and "disabled" properties.'}),"\n",(0,s.jsxs)(n.p,{children:["For the ",(0,s.jsx)(n.code,{children:"ui5-file-uploader"})]}),"\n",(0,s.jsx)(n.h3,{id:"es6-module-import",children:"ES6 Module Import"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/FileUploader.js";'})}),"\n",(0,s.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,s.jsx)(r,{}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(n.h3,{id:"accept",children:"accept"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Comma-separated list of file types that the component should accept.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," Please make sure you are adding the ",(0,s.jsx)(n.code,{children:"."})," in front on the file type, e.g. ",(0,s.jsx)(n.code,{children:".png"})," in case you want to accept png's only."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"hideinput",children:"hideInput"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:'If set to "true", the input field of component will not be rendered. Only the default slot that is passed will be rendered.'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"disabled",children:"disabled"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Defines whether the component is in disabled state.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," A disabled component is completely noninteractive."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"multiple",children:"multiple"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Allows multiple files to be chosen."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"false"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Determines the name with which the component will be submitted in an HTML form.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Important:"})," For the ",(0,s.jsx)(n.code,{children:"name"})," property to have effect, you must add the following import to your project: ",(0,s.jsx)(n.code,{children:'import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js";'}),(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," When set, a native ",(0,s.jsx)(n.code,{children:"input"})," HTML element will be created inside the component so that it can be submitted as part of an HTML form. Do not use this property unless you need to submit a form."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"placeholder",children:"placeholder"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines a short hint intended to aid the user with data entry when the component has no value."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the name/names of the file/files to upload."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"string"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'""'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"valuestate",children:"valueState"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"Defines the value state of the component."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:'"None" | "Success" | "Warning" | "Error" | "Information"'})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:'"None"'})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"files",children:"files"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{children:"FileList of all selected files."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"FileList | null"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Default"}),(0,s.jsx)(n.td,{children:"null"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"slots",children:"Slots"}),"\n",(0,s.jsx)(n.h3,{id:"default",children:"default"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["By default the component contains a single input field. With this slot you can pass any content that you wish to add. See the samples for more information.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," If no content is provided in this slot, the component will only consist of an input field and will not be interactable using the keyboard. Also it is not recommended to use any non-interactable components, as it may lead to poor accessibility experience."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"valuestatemessage",children:"valueStateMessage"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Defines the value state message that will be displayed as pop up under the component.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," If not specified, a default text (in the respective language) will be displayed.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," The ",(0,s.jsx)(n.code,{children:"valueStateMessage"})," would be displayed, when the component is in ",(0,s.jsx)(n.code,{children:"Information"}),", ",(0,s.jsx)(n.code,{children:"Warning"})," or ",(0,s.jsx)(n.code,{children:"Error"})," value state."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Array<HTMLElement>"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Since"}),(0,s.jsx)(n.td,{children:"1.0.0-rc.9"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"events",children:"Events"}),"\n",(0,s.jsx)(n.h3,{id:"change",children:"change"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsxs)(n.td,{children:["Event is fired when the value of the file path has been changed.",(0,s.jsx)("br",{}),(0,s.jsx)(n.strong,{children:"Note:"})," Keep in mind that because of the HTML input element of type file, the event is also fired in Chrome browser when the Cancel button of the uploads window is pressed."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"CustomEvent<FileUploaderChangeEventDetail>"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Parameters"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.strong,{children:"files"}),": ",(0,s.jsx)(n.code,{children:"FileList | null"}),(0,s.jsx)("br",{}),"The current files."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsx)(n.p,{children:"No methods available for this component."}),"\n",(0,s.jsx)(n.h2,{id:"css-parts",children:"CSS Parts"}),"\n",(0,s.jsx)(n.p,{children:"No CSS parts available for this component."}),"\n",(0,s.jsx)(n.h2,{id:"more-samples",children:"More Samples"}),"\n",(0,s.jsx)(n.h3,{id:"upload-multiple-files",children:"Upload Multiple Files"}),"\n",(0,s.jsx)(n.p,{children:'By default, only one file can be selected,\nto allow multiple files to be uploaded - set the "multiple" property.'}),"\n",(0,s.jsx)(p,{}),"\n",(0,s.jsx)(n.h3,{id:"files-filter",children:"Files Filter"}),"\n",(0,s.jsx)(n.p,{children:'You can define the files, allowed for uploading via the "accept" property.'}),"\n",(0,s.jsx)(m,{}),"\n",(0,s.jsx)(n.h3,{id:"button-only",children:"Button Only"}),"\n",(0,s.jsx)(n.p,{children:'You can hide the input part via the "hide-input" property.'}),"\n",(0,s.jsx)(v,{})]})}function U(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(F,{...e})}):F(e)}},1184:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var s=t(4041);const i={},l=s.createContext(i);function d(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);