"use strict";import d from"./util/whenDOMReady.js";import c from"./EventProvider.js";import u from"./FontFace.js";import v from"./SystemCSSVars.js";import{getTheme as i}from"./config/Theme.js";import a from"./theming/applyTheme.js";import{registerCurrentRuntime as y}from"./Runtimes.js";import{getFeature as p}from"./FeaturesRegistry.js";import{attachThemeRegistered as g}from"./theming/ThemeRegistered.js";let o=!1,r;const m=new c,h=()=>o,P=e=>{if(!o){m.attachEvent("boot",e);return}e()},l=async()=>{if(r!==void 0)return r;const e=async n=>{if(y(),typeof document>"u"){n();return}g(S);const t=p("OpenUI5Support"),f=t?t.isOpenUI5Detected():!1,s=p("F6Navigation");t&&await t.init(),s&&!f&&s.init(),await d(),await a(i()),t&&t.attachListeners(),u(),v(),n(),o=!0,await m.fireEventAsync("boot")};return r=new Promise(e),r},S=e=>{o&&e===i()&&a(i())};export{l as boot,P as attachBoot,h as isBooted};
//# sourceMappingURL=Boot.js.map
