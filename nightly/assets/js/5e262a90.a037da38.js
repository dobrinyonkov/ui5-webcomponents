"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[4405],{74:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=n(1085),r=n(1184);const i={},o="Testing UI5 Web Components",c={id:"docs/development/testing-UI5-Web-Components",title:"Testing UI5 Web Components",description:"Note: All examples in this tutorial are taken from the demo UI5 Web Component (ui5-demo), generated by the package initialization script.",source:"@site/docs/docs/5-development/05-testing-UI5-Web-Components.md",sourceDirName:"docs/5-development",slug:"/docs/development/testing-UI5-Web-Components",permalink:"/ui5-webcomponents/nightly/docs/development/testing-UI5-Web-Components",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Understanding the Handlebars (.hbs) Templates",permalink:"/ui5-webcomponents/nightly/docs/development/understanding-hbs-templates"},next:{title:"Deep Dive and Best Practices",permalink:"/ui5-webcomponents/nightly/docs/development/deep-dive-and-best-practices"}},d={},l=[{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"Managing ChromeDriver",id:"managing-chromedriver",level:4},{value:"2. Running the tests",id:"2-running-the-tests",level:2},{value:"2.1 Test configuration",id:"21-test-configuration",level:2},{value:"2.2 Running all tests",id:"22-running-all-tests",level:2},{value:"2.3 Running a single test spec",id:"23-running-a-single-test-spec",level:2},{value:"3. Writing tests",id:"3-writing-tests",level:2},{value:"4. Debugging tests",id:"4-debugging-tests",level:2},{value:"5. Best practices for writing tests",id:"5-best-practices-for-writing-tests",level:2},{value:"5.1 Do not overuse <code>assert.ok</code>",id:"51-do-not-overuse-assertok",level:3},{value:"5.2 Do not overuse <code>assert.strictEqual</code>",id:"52-do-not-overuse-assertstrictequal",level:3},{value:"5.3 Use <code>isExisting</code> to check the DOM",id:"53-use-isexisting-to-check-the-dom",level:3},{value:"5.4 Do not use <code>browser.executeAsync</code> for properties",id:"54-do-not-use-browserexecuteasync-for-properties",level:3},{value:"5.5 Use <code>assert.include</code> instead of string functions",id:"55-use-assertinclude-instead-of-string-functions",level:3},{value:"5.6 Extract variables before asserting",id:"56-extract-variables-before-asserting",level:3},{value:"6. Using the synchronous syntax for writing tests",id:"6-using-the-synchronous-syntax-for-writing-tests",level:2}];function a(e){const s={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"testing-ui5-web-components",children:"Testing UI5 Web Components"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," All examples in this tutorial are taken from the demo UI5 Web Component (",(0,t.jsx)(s.code,{children:"ui5-demo"}),"), generated by the package initialization script.\nFor more information on creating a new package with a demo web component inside, click ",(0,t.jsx)(s.a,{href:"/ui5-webcomponents/nightly/docs/development/custom-UI5-Web-Components-Packages",children:"here"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"1-prerequisites",children:"1. Prerequisites"}),"\n",(0,t.jsxs)(s.p,{children:["The test framework of choice for UI5 Web Components is ",(0,t.jsx)(s.a,{href:"https://webdriver.io/",children:"WebdriverIO"})," or WDIO for short.\nIt has a straightforward API - ",(0,t.jsx)(s.a,{href:"https://webdriver.io/docs/api.html",children:"https://webdriver.io/docs/api.html"}),", and has excellent support for Web Components."]}),"\n",(0,t.jsxs)(s.p,{children:["The browser of choice for test execution is ",(0,t.jsx)(s.a,{href:"https://www.google.com/chrome/",children:"Google Chrome"}),", respectively the WebDriver used is ",(0,t.jsx)(s.a,{href:"https://chromedriver.chromium.org/",children:"ChromeDriver"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"managing-chromedriver",children:"Managing ChromeDriver"}),"\n",(0,t.jsxs)(s.p,{children:["ChromeDriver is a peer dependency of ",(0,t.jsx)(s.code,{children:"@ui5/webcomponents-tools"}),". Therefore, you are expected to install and upgrade it manually."]}),"\n",(0,t.jsxs)(s.p,{children:["You can install it with ",(0,t.jsx)(s.code,{children:"npm"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"npm i --save-dev chromedriver"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["or with ",(0,t.jsx)(s.code,{children:"yarn"}),":"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.code,{children:"yarn add -D chromedriver"})}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Google Chrome and ChromeDriver need to be the same version to work together. Whenever you update Google Chrome on\nyour system (or it updates automatically, if allowed), you are expected to also update ChromeDriver to the respective version."}),"\n",(0,t.jsx)(s.h2,{id:"2-running-the-tests",children:"2. Running the tests"}),"\n",(0,t.jsx)(s.h2,{id:"21-test-configuration",children:"2.1 Test configuration"}),"\n",(0,t.jsxs)(s.p,{children:["The configuration for WDIO can be found in the ",(0,t.jsx)(s.code,{children:"config/"})," directory under ",(0,t.jsx)(s.code,{children:"wdio.conf.js"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["As explained ",(0,t.jsx)(s.a,{href:"/ui5-webcomponents/nightly/docs/development/custom-UI5-Web-Components-Packages",children:"here"})," in the section about the ",(0,t.jsx)(s.code,{children:"config/"})," directory, you can\ncustomize, or even completely replace the default configuration."]}),"\n",(0,t.jsx)(s.p,{children:"However, before doing so, please note the following two benefits of working with the default configuration, provided by UI5 Web Components:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Hooks, synchronizing the execution of all relevant WDIO commands (e.g. ",(0,t.jsx)(s.code,{children:"click"}),", ",(0,t.jsx)(s.code,{children:"url"}),", ",(0,t.jsx)(s.code,{children:"$"}),", ",(0,t.jsx)(s.code,{children:"$$"}),") with the rendering of the framework to\nensure consistency when reading or changing the state of the components."]}),"\n",(0,t.jsxs)(s.li,{children:["Additional API methods: ",(0,t.jsx)(s.code,{children:"setProperty"}),", ",(0,t.jsx)(s.code,{children:"setAttribute"}),", ",(0,t.jsx)(s.code,{children:"removeAttribute"}),", ",(0,t.jsx)(s.code,{children:"hasClass"}),"."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"So our recommendation would be to modify it, if necessary, but not completely replace it."}),"\n",(0,t.jsx)(s.h2,{id:"22-running-all-tests",children:"2.2 Running all tests"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm run test"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn test"})}),"\n",(0,t.jsxs)(s.p,{children:["This will ",(0,t.jsx)(s.em,{children:"launch a static server"})," and execute all tests found in the ",(0,t.jsx)(s.code,{children:"test/specs/"})," directory of your package."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Before running the tests for the first time, make sure you've built the project, or at least the dev server is running (",(0,t.jsx)(s.code,{children:"build"})," or ",(0,t.jsx)(s.code,{children:"start"})," commands)."]}),"\n",(0,t.jsx)(s.h2,{id:"23-running-a-single-test-spec",children:"2.3 Running a single test spec"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"npm run test test/specs/Demo.spec.js"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn test test/specs/Demo.spec.js"})}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Executing a single test spec only makes sense for debugging purposes, therefore no test server is launched for it.\nMake sure you're running the ",(0,t.jsx)(s.code,{children:"start"})," command while running single test specs, as it provides a server and the ability to change\nfiles, and test the changes on the fly."]}),"\n",(0,t.jsx)(s.h2,{id:"3-writing-tests",children:"3. Writing tests"}),"\n",(0,t.jsx)(s.p,{children:"The simplest test would look something like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'describe("ui5-demo rendering", async () => {\n\tawait browser.url("test/pages/index.html");\n\n\tit("tests if web component is correctly rendered", async () => {\n\t\tconst innerContent = await browser.$("#myFirstComponent").shadow$("div");\n\t\tassert.ok(innerContent, "content rendered");\n\t});\n});\n'})}),"\n",(0,t.jsx)(s.p,{children:"Key points:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Load the test page with the ",(0,t.jsx)(s.code,{children:"browser.url"})," command. You can do this once for each test suite or for each individual test."]}),"\n",(0,t.jsxs)(s.li,{children:["You can access the web components with ",(0,t.jsx)(s.code,{children:"$"})," or ",(0,t.jsx)(s.code,{children:"$$"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["You can access the shadow roots with ",(0,t.jsx)(s.code,{children:"shadow$"})," or ",(0,t.jsx)(s.code,{children:"shadow$$"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Simulate mouse interaction with the web components by calling the ",(0,t.jsx)(s.code,{children:"click"})," command on the web component itself or certain parts of its shadow root."]}),"\n",(0,t.jsxs)(s.li,{children:["Simulate keyboard with the ",(0,t.jsx)(s.code,{children:"keys"})," command."]}),"\n",(0,t.jsxs)(s.li,{children:["You can read the DOM with commands such as ",(0,t.jsx)(s.code,{children:"getHTML"}),", ",(0,t.jsx)(s.code,{children:"getProperty"}),", ",(0,t.jsx)(s.code,{children:"getAttribute"}),", etc."]}),"\n",(0,t.jsxs)(s.li,{children:["You can modify the DOM with commands such as ",(0,t.jsx)(s.code,{children:"setProperty"}),", ",(0,t.jsx)(s.code,{children:"setAttribute"})," etc."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"For WDIO capabilities, see:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Official API: ",(0,t.jsx)(s.a,{href:"https://webdriver.io/docs/api.html",children:"https://webdriver.io/docs/api.html"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["Additional commands provided in our standard WDIO configuration: ",(0,t.jsx)(s.code,{children:"setProperty"}),", ",(0,t.jsx)(s.code,{children:"setAttribute"}),", ",(0,t.jsx)(s.code,{children:"removeAttribute"}),", ",(0,t.jsx)(s.code,{children:"hasClass"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," The standard WDIO configuration we provide automatically synchronizes all test commands' execution with the framework rendering cycle.\nTherefore, in the example above, the ",(0,t.jsx)(s.code,{children:"shadow$"})," command will internally wait for all rendering to be over before being executed. The\nsame holds true for commands that modify the DOM such as ",(0,t.jsx)(s.code,{children:"setAttribute"})," or ",(0,t.jsx)(s.code,{children:"click"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"4-debugging-tests",children:"4. Debugging tests"}),"\n",(0,t.jsx)(s.p,{children:"Debugging with WDIO is really simple. Just follow these 3 steps:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Change the WDIO configuration file ",(0,t.jsx)(s.code,{children:"config/wdio.conf.js"})," to disable ",(0,t.jsx)(s.code,{children:"headless"})," mode for Google Chrome as follows:"]}),"\n",(0,t.jsx)(s.p,{children:"From:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'module.exports = require("@ui5/webcomponents-tools/components-package/wdio.js");\n'})}),"\n",(0,t.jsx)(s.p,{children:"to:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"const result = require(\"@ui5/webcomponents-tools/components-package/wdio.js\");\nresult.config.capabilities[0][\"goog:chromeOptions\"].args = ['--disable-gpu']; // From: ['--disable-gpu', '--headless']\nmodule.exports = result;\n"})}),"\n",(0,t.jsx)(s.p,{children:"If you happen to debug often, it's recommended to keep the file in this format and just comment out the middle line when you're done debugging."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:["Set a breakpoint with ",(0,t.jsx)(s.code,{children:"browser.debug"})," somewhere in your test:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'it("tests if web component is correctly rendered", async () => {\n    const innerContent = await browser.$("#myFirstComponent").shadow$("div");\n    await browser.debug();\n    assert.ok(innerContent, "content rendered");\n});\n'})}),"\n",(0,t.jsxs)(s.p,{children:["For more on ",(0,t.jsx)(s.code,{children:"debug"}),", see ",(0,t.jsx)(s.a,{href:"https://webdriver.io/docs/api/browser/debug.html",children:"https://webdriver.io/docs/api/browser/debug.html"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Run the single test spec and wait for the browser to open and pause on your breakpoint:"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Run the dev server, if you haven't already:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn start"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"npm run start"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Run the single test spec:"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:"yarn test test/specs/Demo.spec.js"})}),"\n",(0,t.jsx)(s.p,{children:"or"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"npm run test test/specs/Demo.spec.js"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Google Chrome will then open in a new window, controlled by WDIO via the ChromeDriver, and your test will pause on your\nbreakpoint of choice. Proceed to debug normally."}),"\n",(0,t.jsx)(s.h2,{id:"5-best-practices-for-writing-tests",children:"5. Best practices for writing tests"}),"\n",(0,t.jsxs)(s.h3,{id:"51-do-not-overuse-assertok",children:["5.1 Do not overuse ",(0,t.jsx)(s.code,{children:"assert.ok"})]}),"\n",(0,t.jsxs)(s.p,{children:["When an ",(0,t.jsx)(s.code,{children:"assert.ok"}),' fails, the error you get is "Expected something to be true, but it was false". This is fine when you\'re passing a Boolean, but not ok when there is an expression inside ',(0,t.jsx)(s.code,{children:"assert.ok"})," and you'd like to know which part of the expression is not as expected."]}),"\n",(0,t.jsxs)(s.p,{children:["For example, when ",(0,t.jsx)(s.code,{children:'assert.ok(a === b, "They match")'})," fails, the error just says that an expression that was expected to be true was false. However, if you use ",(0,t.jsx)(s.code,{children:'assert.strictEqual(a, b, "They match")'}),", and it fails, the error will say that ",(0,t.jsx)(s.code,{children:"a"})," was expected to be a certain value, but it was another value, which makes it much easier to debug."]}),"\n",(0,t.jsx)(s.p,{children:"Prefer one of the following, when applicable:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assert.notOk(a)"})," instead of ",(0,t.jsx)(s.code,{children:"assert.ok(!a)"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assert.strictEqual(a, b)"})," instead of ",(0,t.jsx)(s.code,{children:"assert.ok(a === b)"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assert.isBelow(a, b)"})," instead of ",(0,t.jsx)(s.code,{children:"assert.ok(a < b)"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assert.isAbove(a, b)"})," instead of ",(0,t.jsx)(s.code,{children:"assert.ok(a > b)"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assert.exists"})," / ",(0,t.jsx)(s.code,{children:"assert.notExists"})," when checking for ",(0,t.jsx)(s.code,{children:"null"})," or ",(0,t.jsx)(s.code,{children:"undefined"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"52-do-not-overuse-assertstrictequal",children:["5.2 Do not overuse ",(0,t.jsx)(s.code,{children:"assert.strictEqual"})]}),"\n",(0,t.jsx)(s.p,{children:"Use:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assert.ok"})," instead of ",(0,t.jsx)(s.code,{children:"assert.strictEqual(a, true)"})]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"assert.notOk"})," instead of ",(0,t.jsx)(s.code,{children:"assert.strictEqual(a, false)"})]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"53-use-isexisting-to-check-the-dom",children:["5.3 Use ",(0,t.jsx)(s.code,{children:"isExisting"})," to check the DOM"]}),"\n",(0,t.jsx)(s.p,{children:"Preferred:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"assert.ok(await browser.$(<SELECTOR>).isExisting())\n"})}),"\n",(0,t.jsx)(s.p,{children:"instead of:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:"assert.ok((await browser.$$(<SELECTOR>)).length)\n"})}),"\n",(0,t.jsxs)(s.h3,{id:"54-do-not-use-browserexecuteasync-for-properties",children:["5.4 Do not use ",(0,t.jsx)(s.code,{children:"browser.executeAsync"})," for properties"]}),"\n",(0,t.jsxs)(s.p,{children:["We have custom commands such as ",(0,t.jsx)(s.code,{children:"getProperty"})," and ",(0,t.jsx)(s.code,{children:"setProperty"})," to fill in gaps in the WDIO standard command set. Use them instead of manually setting properties with ",(0,t.jsx)(s.code,{children:"executeAsync"}),"."]}),"\n",(0,t.jsxs)(s.h3,{id:"55-use-assertinclude-instead-of-string-functions",children:["5.5 Use ",(0,t.jsx)(s.code,{children:"assert.include"})," instead of string functions"]}),"\n",(0,t.jsx)(s.p,{children:"Use:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'assert.include(text, EXPECTED_TEXT, "Text found")\nassert.notInclude(text, NOT_EXPECTED_TEXT, "Text not found")\n'})}),"\n",(0,t.jsx)(s.p,{children:"instead of:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-js",children:'assert.ok(text.indexOf(EXPECTED_TEXT) > -1, "Text found")\nassert.ok(text.includes(EXPECTED_TEXT), "Text found")\nassert.notOk(text.includes(NOT_EXPECTED_TEXT), "Text not found")\n'})}),"\n",(0,t.jsx)(s.h3,{id:"56-extract-variables-before-asserting",children:"5.6 Extract variables before asserting"}),"\n",(0,t.jsxs)(s.p,{children:["Avoid complex expressions inside ",(0,t.jsx)(s.code,{children:"assert"}),"s by extracting parts of them to variables and only asserting the variables."]}),"\n",(0,t.jsx)(s.h2,{id:"6-using-the-synchronous-syntax-for-writing-tests",children:"6. Using the synchronous syntax for writing tests"}),"\n",(0,t.jsxs)(s.p,{children:["WebdriverIO still supports (although now deprecated) the ",(0,t.jsx)(s.em,{children:"synchronous"})," syntax for writing tests. Click ",(0,t.jsx)(s.a,{href:"https://webdriver.io/docs/sync-vs-async/",children:"here"}),' for more information on "sync vs async".']}),"\n",(0,t.jsxs)(s.p,{children:["UI5 Web Components versions up to, including, ",(0,t.jsx)(s.code,{children:"1.0.0-rc.15"}),", used to recommend the ",(0,t.jsx)(s.em,{children:"synchronous"})," syntax, as it is easier to use."]}),"\n",(0,t.jsxs)(s.p,{children:["If you have already written tests for your custom UI5 Web Components using the ",(0,t.jsx)(s.em,{children:"synchronous"})," syntax, and you update to a later version than ",(0,t.jsx)(s.code,{children:"1.0.0-rc.15"}),", your tests will no longer run.\nYou have 2 options:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Rewrite all tests to use the ",(0,t.jsx)(s.em,{children:"asynchronous"})," syntax. Click the link above to see some examples. This is the ",(0,t.jsx)(s.strong,{children:"recommended"})," approach, because the ",(0,t.jsx)(s.em,{children:"synchronous"})," syntax will no longer work with future ",(0,t.jsx)(s.code,{children:"nodejs"})," versions."]}),"\n",(0,t.jsxs)(s.li,{children:["For the time being, adapt your WebdriverIO configuration to continue supporting the ",(0,t.jsx)(s.em,{children:"synchronous"})," syntax."]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1184:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var t=n(4041);const r={},i=t.createContext(r);function o(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);