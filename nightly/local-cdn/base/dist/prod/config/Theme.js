"use strict";import{getTheme as i}from"../InitialConfiguration.js";import{reRenderAllUI5Elements as o}from"../Render.js";import s from"../theming/applyTheme.js";import m from"../theming/getThemeDesignerTheme.js";import{DEFAULT_THEME as a,SUPPORTED_THEMES as h}from"../generated/AssetParameters.js";import{boot as T,isBooted as c}from"../Boot.js";import{attachConfigurationReset as f}from"./ConfigurationReset.js";let t;f(()=>{t=void 0});const r=()=>(t===void 0&&(t=i()),t),u=async e=>{t!==e&&(t=e,c()&&(await s(t),await o({themeAware:!0})))},g=()=>a,p=e=>r()===e,n=()=>{const e=r();return l(e)?!e.startsWith("sap_horizon"):!m()?.baseThemeName?.startsWith("sap_horizon")},d=async()=>(await T(),n()),l=e=>h.includes(e);export{r as getTheme,u as setTheme,p as isTheme,n as isLegacyThemeFamily,d as isLegacyThemeFamilyAsync,g as getDefaultTheme};
//# sourceMappingURL=Theme.js.map
