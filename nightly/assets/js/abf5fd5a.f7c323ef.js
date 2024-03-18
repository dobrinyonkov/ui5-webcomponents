"use strict";(self.webpackChunk_ui5_webcomponents_website=self.webpackChunk_ui5_webcomponents_website||[]).push([[1109],{1078:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>o});var s=i(1085),t=i(1184);const c={},d="Configuration",l={id:"docs/advanced/configuration",title:"Configuration",description:"This section explains how you can configure UI5 Web Components globally, and what configuration settings are available.",source:"@site/docs/docs/2-advanced/01-configuration.md",sourceDirName:"docs/2-advanced",slug:"/docs/advanced/configuration",permalink:"/ui5-webcomponents/nightly/docs/advanced/configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Advanced Concepts",permalink:"/ui5-webcomponents/nightly/docs/advanced/"},next:{title:"Right-To-Left (RTL) and Compact Mode",permalink:"/ui5-webcomponents/nightly/docs/advanced/RTL-and-compact-mode"}},r={},o=[{value:"Configuration Settings",id:"configuration-settings",level:2},{value:"theme",id:"theme",level:3},{value:"language",id:"language",level:3},{value:"animationMode",id:"animationmode",level:3},{value:"calendarType",id:"calendartype",level:3},{value:"noConflict <a></a>",id:"noconflict-",level:3},{value:"formatSettings",id:"formatsettings",level:3},{value:"fetchDefaultLanguage",id:"fetchdefaultlanguage",level:3},{value:"Configuration Script",id:"configuration-script",level:2},{value:"Configuration Module Imports",id:"configuration-module-imports",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This section explains how you can configure UI5 Web Components globally, and what configuration settings are available."})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-settings",children:"Configuration Settings"}),"\n",(0,s.jsx)(n.p,{children:"There are several configuration settings that affect all UI5 Web Components globally."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Setting"}),(0,s.jsx)(n.th,{children:"Values"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Applies To"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#theme",children:"theme"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"sap_fiori_3"}),", ",(0,s.jsx)(n.code,{children:"sap_fiori_3_dark"}),", ",(0,s.jsx)(n.code,{children:"sap_fiori_3_hcb"}),", ",(0,s.jsx)(n.code,{children:"sap_fiori_3_hcw"}),", ",(0,s.jsx)(n.code,{children:"sap_horizon"}),", ",(0,s.jsx)(n.code,{children:"sap_horizon_dark"}),", ",(0,s.jsx)(n.code,{children:"sap_horizon_hcb"}),", ",(0,s.jsx)(n.code,{children:"sap_horizon_hcw"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"sap_horizon"})}),(0,s.jsx)(n.td,{children:"Visual theme to be applied"}),(0,s.jsx)(n.td,{children:"All components"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#language",children:"language"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"ar"}),", ",(0,s.jsx)(n.code,{children:"bg"}),", ",(0,s.jsx)(n.code,{children:"ca"}),", ",(0,s.jsx)(n.code,{children:"cs"}),", ",(0,s.jsx)(n.code,{children:"cy"}),", ",(0,s.jsx)(n.code,{children:"da"}),", ",(0,s.jsx)(n.code,{children:"de"}),", ",(0,s.jsx)(n.code,{children:"el"}),", ",(0,s.jsx)(n.code,{children:"en"}),", ",(0,s.jsx)(n.code,{children:"en_GB"}),", ",(0,s.jsx)(n.code,{children:"es"}),", ",(0,s.jsx)(n.code,{children:"es_MX"}),", ",(0,s.jsx)(n.code,{children:"et"}),", ",(0,s.jsx)(n.code,{children:"fi"}),", ",(0,s.jsx)(n.code,{children:"fr"}),", ",(0,s.jsx)(n.code,{children:"fr_CA"}),", ",(0,s.jsx)(n.code,{children:"hi"}),", ",(0,s.jsx)(n.code,{children:"hr"}),", ",(0,s.jsx)(n.code,{children:"hu"}),", ",(0,s.jsx)(n.code,{children:"in"}),", ",(0,s.jsx)(n.code,{children:"it"}),", ",(0,s.jsx)(n.code,{children:"iw"}),", ",(0,s.jsx)(n.code,{children:"ja"}),", ",(0,s.jsx)(n.code,{children:"kk"}),", ",(0,s.jsx)(n.code,{children:"ko"}),", ",(0,s.jsx)(n.code,{children:"lt"}),", ",(0,s.jsx)(n.code,{children:"lv"}),", ",(0,s.jsx)(n.code,{children:"ms"}),", ",(0,s.jsx)(n.code,{children:"nl"}),", ",(0,s.jsx)(n.code,{children:"no"}),", ",(0,s.jsx)(n.code,{children:"pl"}),", ",(0,s.jsx)(n.code,{children:"pt_PT"}),", ",(0,s.jsx)(n.code,{children:"pt"}),", ",(0,s.jsx)(n.code,{children:"ro"}),", ",(0,s.jsx)(n.code,{children:"ru"}),", ",(0,s.jsx)(n.code,{children:"sh"}),", ",(0,s.jsx)(n.code,{children:"sk"}),", ",(0,s.jsx)(n.code,{children:"sl"}),", ",(0,s.jsx)(n.code,{children:"sv"}),", ",(0,s.jsx)(n.code,{children:"th"}),", ",(0,s.jsx)(n.code,{children:"tr"}),", ",(0,s.jsx)(n.code,{children:"uk"}),", ",(0,s.jsx)(n.code,{children:"vi"}),", ",(0,s.jsx)(n.code,{children:"zh_CN"}),", ",(0,s.jsx)(n.code,{children:"zh_TW"})]}),(0,s.jsxs)(n.td,{children:["N/A (",(0,s.jsx)(n.code,{children:"null"}),")"]}),(0,s.jsx)(n.td,{children:"Language to be used for translatable texts"}),(0,s.jsx)(n.td,{children:"Components and icons with translatable texts"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#animationMode",children:"animationMode"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"full"}),", ",(0,s.jsx)(n.code,{children:"basic"}),", ",(0,s.jsx)(n.code,{children:"minimal"}),", ",(0,s.jsx)(n.code,{children:"none"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"full"})}),(0,s.jsx)(n.td,{children:"Amount/intensity of animations to be played for some components"}),(0,s.jsxs)(n.td,{children:["Components with animations (",(0,s.jsx)(n.code,{children:"ui5-panel"}),", ",(0,s.jsx)(n.code,{children:"ui5-carousel"}),", etc.)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#calendarType",children:"calendarType"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"Gregorian"}),", ",(0,s.jsx)(n.code,{children:"Islamic"}),", ",(0,s.jsx)(n.code,{children:"Buddhist"}),", ",(0,s.jsx)(n.code,{children:"Japanese"}),", ",(0,s.jsx)(n.code,{children:"Persian"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Gregorian"})}),(0,s.jsx)(n.td,{children:"Default calendar type to be used for date-related components"}),(0,s.jsxs)(n.td,{children:["Date/time components (",(0,s.jsx)(n.code,{children:"ui5-date-picker"}),", etc.)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#calendarType",children:"secondaryCalendarType"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"Gregorian"}),", ",(0,s.jsx)(n.code,{children:"Islamic"}),", ",(0,s.jsx)(n.code,{children:"Buddhist"}),", ",(0,s.jsx)(n.code,{children:"Japanese"}),", ",(0,s.jsx)(n.code,{children:"Persian"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"undefined"})}),(0,s.jsx)(n.td,{children:"Default secondary calendar type to be used for date-related components"}),(0,s.jsxs)(n.td,{children:["Date/time components (",(0,s.jsx)(n.code,{children:"ui5-date-picker"}),", etc.)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#noConflict",children:"noConflict"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsxs)(n.td,{children:["When set to true, all events will be fired with a ",(0,s.jsx)(n.code,{children:"ui5-"})," prefix only"]}),(0,s.jsx)(n.td,{children:"Components that fire events (most do)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#formatSettings",children:"formatSettings"})}),(0,s.jsxs)(n.td,{children:["See the ",(0,s.jsx)(n.a,{href:"#formatSettings",children:"Format settings"})," section below"]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{}"})}),(0,s.jsx)(n.td,{children:"Allows to override locale-specific configuration"}),(0,s.jsxs)(n.td,{children:["Date/time components (",(0,s.jsx)(n.code,{children:"ui5-date-picker"}),", etc.)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"#fetchDefaultLanguage",children:"fetchDefaultLanguage"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"true"}),", ",(0,s.jsx)(n.code,{children:"false"})]}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Whether to fetch assets even for the default language"}),(0,s.jsx)(n.td,{children:"Framework"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"theme",children:"theme"}),"\n",(0,s.jsx)("a",{name:"theme"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"theme"})," setting values above are the technical names of the supported themes:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_horizon"})," is known as ",(0,s.jsx)(n.code,{children:"Morning Horizon"})," and it's the latest theme and default theme."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_horizon_dark"})," is known as ",(0,s.jsx)(n.code,{children:"Evening Horizon"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_horizon_hcb"})," is known as ",(0,s.jsx)(n.code,{children:"High Contrast Black"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_horizon_hcw"})," is known as ",(0,s.jsx)(n.code,{children:"High Contrast White"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_fiori_3"})," is known as ",(0,s.jsx)(n.code,{children:"Quartz Light"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_fiori_3_dark"})," is known as ",(0,s.jsx)(n.code,{children:"Quartz Dark"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_fiori_3_hcb"})," is known as ",(0,s.jsx)(n.code,{children:"Quartz High Contrast Black"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_fiori_3_hcw"})," is known as ",(0,s.jsx)(n.code,{children:"Quartz High Contrast White"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The default theme (",(0,s.jsx)(n.code,{children:"sap_horizon"}),") is built in all UI5 Web Components. Thus, components are always themed.\nConfiguring another theme will additionally fetch and use that theme. Any theme is fetched just once."]}),"\n",(0,s.jsxs)(n.p,{children:["To use additional themes (other than ",(0,s.jsx)(n.code,{children:"sap_horizon"}),"):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Import the ",(0,s.jsx)(n.code,{children:"Assets.js"})," module of each component library you're using, for example:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import "@ui5/webcomponents/dist/Assets.js";\nimport "@ui5/webcomponents-fiori/dist/Assets.js";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For more about assets, see the dedicated ",(0,s.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/getting-started/using-assets",children:"Assets"})," section."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure the additional theme either via the ",(0,s.jsx)(n.a,{href:"#script",children:"configuration script"})," or ",(0,s.jsx)(n.a,{href:"#imports",children:"module imports"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";\nsetTheme("sap_horizon_hcb");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To reset the theme to the default one:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { setTheme, getDefaultTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";\nsetTheme(getDefaultTheme());\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Note: Deprecated themes"})}),"\n",(0,s.jsxs)(n.p,{children:["The following themes are deprecated and no longer maintained - out of maintenance and left for compatibility only. The themes will be removed in the next major version.\nWe recommend using ",(0,s.jsx)(n.code,{children:"Horizon"})," (sap_horizon) and ",(0,s.jsx)(n.code,{children:"Quartz"})," (sap_fiori_3) theme families."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_belize"})," is known as ",(0,s.jsx)(n.code,{children:"Belize"})," [deprecated since 1.22]."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_belize_hcb"})," is known as ",(0,s.jsx)(n.code,{children:"High Contrast Black"})," [deprecated since 1.22]."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"sap_belize_hcw"})," is known as ",(0,s.jsx)(n.code,{children:"High Contrast White"})," [deprecated since 1.22]."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"language",children:"language"}),"\n",(0,s.jsx)("a",{name:"language"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"language"})," configuration setting does not have a default value (the default value is technically ",(0,s.jsx)(n.code,{children:"null"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"This is how the language to use is determined:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If a language is ",(0,s.jsx)(n.em,{children:"configured"}),", it will be used."]}),"\n",(0,s.jsxs)(n.li,{children:["If no language is configured (the setting is ",(0,s.jsx)(n.code,{children:"null"}),"), the user's ",(0,s.jsx)(n.em,{children:"browser language"})," is checked, and if in the supported list, used."]}),"\n",(0,s.jsxs)(n.li,{children:["If the user's browser language is not in the supported list, but is a variation of a supported language, this language will be used (e.g. ",(0,s.jsx)(n.code,{children:"fr_**"})," -> ",(0,s.jsx)(n.code,{children:"fr"})," )"]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.code,{children:"en"})," language will be used."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"en"})," language is built in all UI5 Web Components that have translatable texts. Thus, components are always translated.\nConfiguring another language will additionally fetch and use that language. Any language is fetched once."]}),"\n",(0,s.jsxs)(n.p,{children:["To use additional languages (other than ",(0,s.jsx)(n.code,{children:"en"}),"):"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Import the ",(0,s.jsx)(n.code,{children:"Assets.js"})," module of each component/icon library you're using (in general, each library that provides languages assets),\nfor example:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import "@ui5/webcomponents/dist/Assets.js";\nimport "@ui5/webcomponents-fiori/dist/Assets.js";\nimport "@ui5/webcomponents-icons/dist/Assets.js";\n'})}),"\n",(0,s.jsxs)(n.p,{children:["For more about assets, see the dedicated ",(0,s.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/getting-started/using-assets",children:"Assets"})," section."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Configure the additional language either via the ",(0,s.jsx)(n.a,{href:"#script",children:"configuration script"})," or ",(0,s.jsx)(n.a,{href:"#imports",children:"module imports"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";\nsetLanguage("fr");\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To reset the langauge to the default one:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { setLanguage, getDefaultLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";\nsetLanguage(getDefaultLanguage());\n'})}),"\n",(0,s.jsx)(n.h3,{id:"animationmode",children:"animationMode"}),"\n",(0,s.jsx)("a",{name:"animationMode"}),"\n",(0,s.jsx)(n.p,{children:"This setting only applies to components that run animations."}),"\n",(0,s.jsx)(n.p,{children:"Animation modes allow to specify different animation scenarios or levels."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"full"}),", all animations run unrestricted."]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"basic"}),", more light-weight set of animations would run."]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"minimal"}),", animations of fundamental functionalities are included."]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"none"}),", all animations are completely suspended."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Please, note that each component determines which animations would run for a specific mode."]}),"\n",(0,s.jsx)(n.h3,{id:"calendartype",children:"calendarType"}),"\n",(0,s.jsx)("a",{name:"calendarType"}),"\n",(0,s.jsxs)(n.p,{children:["This setting determines the default calendar type for all date-related components such as ",(0,s.jsx)(n.code,{children:"ui5-date-picker"}),", ",(0,s.jsx)(n.code,{children:"ui5-datetime-picker"}),", etc."]}),"\n",(0,s.jsx)(n.p,{children:"You can always override the calendar type for each instance via component-specific properties. See the documentation of each component for details."}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"Gregorian"})," calendar type is built in all date-related UI5 Web Components."]}),"\n",(0,s.jsxs)(n.p,{children:["Calendar types are opt-in features, see ",(0,s.jsx)(n.a,{href:"/ui5-webcomponents/nightly/docs/getting-started/using-features",children:"Using Features"})," for details.\nSetting another calendar type via configuration or component properties requires that the respective calendar type be explicitly imported."]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Make sure you've bundled the required calendar type:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import "@ui5/webcomponents-localization/dist/features/calendar/Islamic.js"; \n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Configure this calendar:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script data-ui5-config type="application/json">\n{\n    "calendarType": "Islamic"\n}\n<\/script>\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Now all date-related components will use the ",(0,s.jsx)(n.code,{children:"Islamic"})," calendar type by default."]}),"\n",(0,s.jsx)("a",{name:"noConflict"}),"\n",(0,s.jsxs)(n.h3,{id:"noconflict-",children:["noConflict ",(0,s.jsx)("a",{name:"no_conflict"})]}),"\n",(0,s.jsxs)(n.p,{children:["By default, UI5 Web Components fire all custom events twice - once with the documented name (e.g. ",(0,s.jsx)(n.code,{children:"change"}),"), and once more with a ",(0,s.jsx)(n.code,{children:"ui5-"})," prefix (e.g. ",(0,s.jsx)(n.code,{children:"ui5-change"}),").\nFor example, when the ",(0,s.jsx)(n.code,{children:"ui5-switch"})," is toggled, it fires a ",(0,s.jsx)(n.code,{children:"change"})," event, but also a ",(0,s.jsx)(n.code,{children:"ui5-change"})," event."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"noConflict"})," configuration setting allows certain control over this behavior:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"false"})," (default value), all custom events are fired with and without the ",(0,s.jsx)(n.code,{children:"ui5-"})," prefix."]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.code,{children:"true"}),", all custom events are fired with the ",(0,s.jsx)(n.code,{children:"ui5-"})," prefix ",(0,s.jsx)(n.strong,{children:"only"}),". Hence the ",(0,s.jsx)(n.code,{children:"noConflict"})," semantic in the name of the setting.\nThis is handy, for example, if the name of an event, fired by a component, happens to collide with the name of an event provided by a third-party library."]}),"\n",(0,s.jsxs)(n.li,{children:["When an object is supplied, just the specified events will be fired with the ",(0,s.jsx)(n.code,{children:"ui5-"})," prefix ",(0,s.jsx)(n.strong,{children:"only"}),".\nAll other events will be fired normally - once with the prefix, and once without it.\nThe format of this object is as follows:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "events": ["selection-change", "header-click"]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Please, note that other keys may be added to this object in the future for the purpose of name conflict resolution."]}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, only the ",(0,s.jsx)(n.code,{children:"selection-change"})," and ",(0,s.jsx)(n.code,{children:"header-click"})," events will be fired with a prefix.\nYou can still use them by listening to ",(0,s.jsx)(n.code,{children:"ui5-selection-change"})," and ",(0,s.jsx)(n.code,{children:"ui5-header-click"}),", but the names ",(0,s.jsx)(n.code,{children:"selection-change"})," and ",(0,s.jsx)(n.code,{children:"header-click"})," will be\nfree for use by other UI components and libraries without name collision."]}),"\n",(0,s.jsx)(n.h3,{id:"formatsettings",children:"formatSettings"}),"\n",(0,s.jsx)("a",{name:"formatSettings"}),"\n",(0,s.jsx)(n.p,{children:"This setting allows to override locale-specific settings for date-related controls."}),"\n",(0,s.jsx)(n.p,{children:"For example, to force the first day of week to Sunday, no matter the locale:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n\t"formatSettings": {\n\t\t"firstDayOfWeek": 0\n\t}\n}\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Setting"}),(0,s.jsx)(n.th,{children:"Values"}),(0,s.jsx)(n.th,{children:"Default Value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"firstDayOfWeek"}),(0,s.jsx)(n.td,{children:"0 (Sunday) through 6 (Saturday)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.em,{children:"Depends on locale"})}),(0,s.jsx)(n.td,{children:"When set, overrides the locale's default value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"legacyDateCalendarCustomizing"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{dateFormat: string, islamicMonthStart: string, gregDate: string }"})}),(0,s.jsx)(n.td,{children:"[]"}),(0,s.jsx)(n.td,{children:"When set, adds customizing data for Islamic calendar support"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," legacyDateCalendarCustomizing takes affect only if following features are imported:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"@ui5/webcomponents-base/dist/features/LegacyDateFormats.js\n"})}),"\n",(0,s.jsx)(n.h3,{id:"fetchdefaultlanguage",children:"fetchDefaultLanguage"}),"\n",(0,s.jsx)("a",{name:"fetchDefaultLanguage"}),"\n",(0,s.jsxs)(n.p,{children:["As described in the ",(0,s.jsx)(n.code,{children:"language"})," configuration option section, the ",(0,s.jsx)(n.code,{children:"en"})," language is built in all components that have translatable texts.\nAll other languages are fetched as additional assets."]}),"\n",(0,s.jsxs)(n.p,{children:["Normally, you would never want to change that setting, but if for technical reasons you prefer even the default language to be fetched\nover the network, although it's built-in, then set ",(0,s.jsx)(n.code,{children:"fetchDefaultLanguage"})," this to ",(0,s.jsx)(n.code,{children:"true"})]}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script data-ui5-config type="application/json">\n{\n\t"fetchDefaultLanguage": true\n}\n<\/script>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-script",children:"Configuration Script"}),"\n",(0,s.jsx)("a",{name:"script"}),"\n",(0,s.jsxs)(n.p,{children:["In order to provide configuration settings, include a ",(0,s.jsx)(n.code,{children:"<script>"})," element in your HTML page with:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"data-ui5-config"})," attribute"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'type="application/json"'})," attribute"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Provide the desired configuration settings in a JSON object, as shown in the example below."}),"\n",(0,s.jsx)(n.p,{children:"Example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script data-ui5-config type="application/json">\n{\n\t"theme": "sap_belize_hcb",\n\t"language": "ja",\n\t"animationMode": "none",\n\t"calendarType": "Japanese",\n\t"formatSettings": {\n\t\t"firstDayOfWeek": 0\n\t},\n\t"noConflict": {\n\t\t"events": ["selection-change", "header-click"]\n\t},\n\t"fetchDefaultLanguage": true\n}\n<\/script>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configuration-module-imports",children:"Configuration Module Imports"}),"\n",(0,s.jsx)("a",{name:"imports"}),"\n",(0,s.jsx)(n.p,{children:"The configuration script is used to set the initial configuration in a declarative manner.\nHowever, reading/modifying the configuration reliably can only be done programmatically."}),"\n",(0,s.jsxs)(n.p,{children:["To do so, please import the desired functionality from the respective ",(0,s.jsx)(n.code,{children:'"@ui5/webcomponents-base/dist/config/"'})," module."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"theme"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { getTheme, setTheme } from "@ui5/webcomponents-base/dist/config/Theme.js";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"language"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { getLanguage, setLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"animationMode"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { getAnimationMode, setAnimationMode } from "@ui5/webcomponents-base/dist/config/AnimationMode.js";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"calendarType"})," - can only be set initially in the configuration script."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { getCalendarType } from "@ui5/webcomponents-base/dist/config/CalendarType.js";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"noConflict"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { getNoConflict, setNoConflict } from "@ui5/webcomponents-base/dist/config/NoConflict.js";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"formatSettings"})," - can only be set initially in the configuration script."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { getFirstDayOfWeek } from "@ui5/webcomponents-base/dist/config/FormatSettings.js";\n'})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"fetchDefaultLanguage"})}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { getFetchDefaultLanguage, setFetchDefaultLanguage } from "@ui5/webcomponents-base/dist/config/Language.js";\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1184:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var s=i(4041);const t={},c=s.createContext(t);function d(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);