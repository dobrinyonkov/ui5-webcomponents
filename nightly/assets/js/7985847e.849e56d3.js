"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[5962],{88087:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(31085),o=i(71184);const s={},r="Conventions and Guidelines",l={id:"docs/contributing/conventions-and-guidelines",title:"Conventions and Guidelines",description:"JavaScript Coding Guidelines",source:"@site/docs/docs/6-contributing/02-conventions-and-guidelines.md",sourceDirName:"docs/6-contributing",slug:"/docs/contributing/conventions-and-guidelines",permalink:"/ui5-webcomponents/nightly/docs/contributing/conventions-and-guidelines",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Development Workflow",permalink:"/ui5-webcomponents/nightly/docs/contributing/development-workflow"},next:{title:"Definition of Done",permalink:"/ui5-webcomponents/nightly/docs/contributing/DoD"}},c={},d=[{value:"JavaScript Coding Guidelines",id:"javascript-coding-guidelines",level:2},{value:"Testing",id:"testing",level:2},{value:"Git Guidelines",id:"git-guidelines",level:2},{value:"Commit Message Style",id:"commit-message-style",level:3},{value:"Commit Header",id:"commit-header",level:4},{value:"Commit Type",id:"commit-type",level:5},{value:"Commit Scope (optional)",id:"commit-scope-optional",level:5},{value:"Commit Description",id:"commit-description",level:5},{value:"Commit Body (optional)",id:"commit-body-optional",level:4},{value:"Commit Footer (optional)",id:"commit-footer-optional",level:4},{value:"Example",id:"example",level:4}];function a(e){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"conventions-and-guidelines",children:"Conventions and Guidelines"}),"\n",(0,t.jsx)(n.h2,{id:"javascript-coding-guidelines",children:"JavaScript Coding Guidelines"}),"\n",(0,t.jsxs)(n.p,{children:["We enforce code style rules using ",(0,t.jsx)(n.a,{href:"https://eslint.org",children:"ESLint"}),". Execute ",(0,t.jsx)(n.code,{children:"npm run lint"})," to check your code for style issues.",(0,t.jsx)(n.br,{}),"\n","You may also find an ESLint integration for your favorite IDE ",(0,t.jsx)(n.a,{href:"https://eslint.org/docs/user-guide/integrations",children:"here"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"testing",children:"Testing"}),"\n",(0,t.jsxs)(n.p,{children:["Integration testing is based on ",(0,t.jsx)(n.a,{href:"https://webdriver.io/",children:"Webdriver.io"}),". You can run all tests using ",(0,t.jsx)(n.code,{children:"npm run test"}),".\nIf reasonable, take the time and write a test for the proposed change or fix. Learn more about testing at the ",(0,t.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/development/testing-UI5-Web-Components",children:"Testing UI5 Web Components page"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"git-guidelines",children:"Git Guidelines"}),"\n",(0,t.jsxs)(n.p,{children:["We adhere to the ",(0,t.jsx)(n.a,{href:"https://conventionalcommits.org",children:"Conventional Commits"})," specification."]}),"\n",(0,t.jsx)(n.h3,{id:"commit-message-style",children:"Commit Message Style"}),"\n",(0,t.jsx)(n.p,{children:"The commit message consists of three parts:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"header"}),"\n",(0,t.jsx)(n.li,{children:"body (optional)"}),"\n",(0,t.jsx)(n.li,{children:"footer (optional)"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"commit-header",children:"Commit Header"}),"\n",(0,t.jsx)(n.p,{children:"The commit header is the first line of the commit message. It consists of three parts: type, scope and description."}),"\n",(0,t.jsx)(n.h5,{id:"commit-type",children:"Commit Type"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It must be one of the following:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"fix"})," - a bug fix (note: this will indicate a release). If possible, include a test in your change."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"feat"})," - a new feature (note: this will indicate a release)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docs"})," - changes to the documentation or samples"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"style"})," - changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"refactor"})," - a code change that neither fixes a bug nor adds a feature"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"perf"})," - a code change that improves performance"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"test"})," - adding missing tests"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"chore"})," - changes to the build process or auxiliary tools and libraries such as documentation generation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"revert"})," - revert to a commit"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"WIP"})," - work in progress"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"commit-scope-optional",children:"Commit Scope (optional)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"It points to a specific component which is affected by the change. For example, ui5-button, ui5-card and ui5-table."}),"\n"]}),"\n",(0,t.jsx)(n.h5,{id:"commit-description",children:"Commit Description"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Use the ",(0,t.jsx)(n.strong,{children:"imperative present tense"}),'. Instead of "I added feature xy" or "Adding tests for" use "Add feature xy" or "Add tests for".']}),"\n",(0,t.jsxs)(n.li,{children:["It should be no more than ",(0,t.jsx)(n.strong,{children:"100 characters"})," long."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"commit-body-optional",children:"Commit Body (optional)"}),"\n",(0,t.jsx)(n.p,{children:"After the commit header, there should be an empty line followed by the optional commit body."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Describe the intention and reasoning of the change."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"commit-footer-optional",children:"Commit Footer (optional)"}),"\n",(0,t.jsx)(n.p,{children:"After the optional commit body, there should be an empty line followed by the optional footer."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If the change introduces a breaking change, it should start with ",(0,t.jsx)(n.strong,{children:"BREAKING CHANGE:"})," followed by a description of the change.","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"BREAKING CHANGE: remove press event"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If the change fixes an issue reported on GitHub, add the following line to the commit message:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"Fixes #<issueNumber>"})," (e.g. ",(0,t.jsx)(n.code,{children:"Fixes #42"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"fix(ui5-button): correct focus with 'tab' key\n\nThe button should receive a correct focus outline\nwhen the 'tab' key is pressed.\n\nFixes #42\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},71184:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>l});var t=i(14041);const o={},s=t.createContext(o);function r(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);