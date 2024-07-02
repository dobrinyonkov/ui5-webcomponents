(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();const P={themes:{default:"sap_horizon",all:["sap_fiori_3","sap_fiori_3_dark","sap_fiori_3_hcb","sap_fiori_3_hcw","sap_horizon","sap_horizon_dark","sap_horizon_hcb","sap_horizon_hcw","sap_horizon_exp","sap_horizon_dark_exp","sap_horizon_hcb_exp","sap_horizon_hcw_exp"]},languages:{default:"en",all:["ar","bg","ca","cnr","cs","cy","da","de","el","en","en_GB","en_US_sappsd","en_US_saprigi","en_US_saptrc","es","es_MX","et","fi","fr","fr_CA","hi","hr","hu","in","it","iw","ja","kk","ko","lt","lv","mk","ms","nl","no","pl","pt_PT","pt","ro","ru","sh","sk","sl","sr","sv","th","tr","uk","vi","zh_CN","zh_TW"]},locales:{default:"en",all:["ar","ar_EG","ar_SA","bg","ca","cnr","cs","da","de","de_AT","de_CH","el","el_CY","en","en_AU","en_GB","en_HK","en_IE","en_IN","en_NZ","en_PG","en_SG","en_ZA","es","es_AR","es_BO","es_CL","es_CO","es_MX","es_PE","es_UY","es_VE","et","fa","fi","fr","fr_BE","fr_CA","fr_CH","fr_LU","he","hi","hr","hu","id","it","it_CH","ja","kk","ko","lt","lv","ms","mk","nb","nl","nl_BE","pl","pt","pt_PT","ro","ru","ru_UA","sk","sl","sr","sr_Latn","sv","th","tr","uk","vi","zh_CN","zh_HK","zh_SG","zh_TW"]}},k=P.themes.default,dt=P.themes.all,C=P.languages.default,l=P.locales.default,de=P.locales.all,ht=typeof document>"u",pt=()=>{if(ht)return C;const e=navigator.languages,t=()=>navigator.language;return e&&e[0]||t()||C};var Ie={},Oe=Ie.hasOwnProperty,gt=Ie.toString,Me=Oe.toString,mt=Me.call(Object),he=function(e){var t,n;return!e||gt.call(e)!=="[object Object]"?!1:(t=Object.getPrototypeOf(e),t?(n=Oe.call(t,"constructor")&&t.constructor,typeof n=="function"&&Me.call(n)===mt):!0)},Ut=Object.create(null),ke=function(e,t,n,s){var o,r,a,i,f,m,d=arguments[2]||{},H=3,lt=arguments.length,fe=arguments[0]||!1,ft=arguments[1]?void 0:Ut;for(typeof d!="object"&&typeof d!="function"&&(d={});H<lt;H++)if((f=arguments[H])!=null)for(i in f)o=d[i],a=f[i],!(i==="__proto__"||d===a)&&(fe&&a&&(he(a)||(r=Array.isArray(a)))?(r?(r=!1,m=o&&Array.isArray(o)?o:[]):m=o&&he(o)?o:{},d[i]=ke(fe,arguments[1],m,a)):a!==ft&&(d[i]=a));return d};const Be=function(e,t){return ke(!0,!1,...arguments)},Fe=new Map,ts=(e,t)=>{Fe.set(e,t)},S=e=>Fe.get(e),wt=e=>{const t=document.querySelector(`META[name="${e}"]`);return t&&t.getAttribute("content")},yt=e=>{const t=wt("sap-allowedThemeOrigins");return t&&t.split(",").some(n=>n==="*"||e===n.trim())},St=(e,t)=>{const n=new URL(e).pathname;return new URL(n,t).toString()},ze=e=>{let t;try{if(e.startsWith(".")||e.startsWith("/"))t=new URL(e,window.location.href).toString();else{const n=new URL(e),s=n.origin;s&&yt(s)?t=n.toString():t=St(n.toString(),window.location.href)}return t.endsWith("/")||(t=`${t}/`),`${t}UI5/`}catch{}};var ne;(function(e){e.Full="full",e.Basic="basic",e.Minimal="minimal",e.None="none"})(ne||(ne={}));const _t=ne;let pe=!1,c={animationMode:_t.Full,theme:k,themeRoot:void 0,rtl:void 0,language:void 0,timezone:void 0,calendarType:void 0,secondaryCalendarType:void 0,noConflict:!1,formatSettings:{},fetchDefaultLanguage:!1};const ns=()=>(p(),c.animationMode),At=()=>(p(),c.theme),Et=()=>(p(),c.themeRoot),bt=()=>(p(),c.language),Tt=()=>(p(),c.fetchDefaultLanguage),ss=()=>(p(),c.noConflict),os=()=>(p(),c.calendarType),rs=()=>(p(),c.formatSettings),B=new Map;B.set("true",!0);B.set("false",!1);const Ct=()=>{const e=document.querySelector("[data-ui5-config]")||document.querySelector("[data-id='sap-ui-config']");let t;if(e){try{t=JSON.parse(e.innerHTML)}catch{console.warn("Incorrect data-sap-ui-config format. Please use JSON")}t&&(c=Be(c,t))}},vt=()=>{const e=new URLSearchParams(window.location.search);e.forEach((t,n)=>{const s=n.split("sap-").length;s===0||s===n.split("sap-ui-").length||ge(n,t,"sap")}),e.forEach((t,n)=>{n.startsWith("sap-ui")&&ge(n,t,"sap-ui")})},Lt=e=>{const t=e.split("@")[1];return ze(t)},Pt=(e,t)=>e==="theme"&&t.includes("@")?t.split("@")[0]:t,ge=(e,t,n)=>{const s=t.toLowerCase(),o=e.split(`${n}-`)[1];B.has(t)&&(t=B.get(s)),o==="theme"?(c.theme=Pt(o,t),t&&t.includes("@")&&(c.themeRoot=Lt(t))):c[o]=t},Rt=()=>{const e=S("OpenUI5Support");if(!e||!e.isOpenUI5Detected())return;const t=e.getConfigurationSettingsObject();c=Be(c,t)},p=()=>{typeof document>"u"||pe||(Ct(),vt(),Rt(),pe=!0)};class R{constructor(){this._eventRegistry=new Map}attachEvent(t,n){const s=this._eventRegistry,o=s.get(t);if(!Array.isArray(o)){s.set(t,[n]);return}o.includes(n)||o.push(n)}detachEvent(t,n){const s=this._eventRegistry,o=s.get(t);if(!o)return;const r=o.indexOf(n);r!==-1&&o.splice(r,1),o.length===0&&s.delete(t)}fireEvent(t,n){const o=this._eventRegistry.get(t);return o?o.map(r=>r.call(this,n)):[]}fireEventAsync(t,n){return Promise.all(this.fireEvent(t,n))}isHandlerAttached(t,n){const o=this._eventRegistry.get(t);return o?o.includes(n):!1}hasListeners(t){return!!this._eventRegistry.get(t)}}const xe=new R,je="languageChange",Ve=e=>{xe.attachEvent(je,e)},$t=e=>xe.fireEventAsync(je,e),me=10;class Dt{constructor(){this.list=[],this.lookup=new Set}add(t){this.lookup.has(t)||(this.list.push(t),this.lookup.add(t))}remove(t){this.lookup.has(t)&&(this.list=this.list.filter(n=>n!==t),this.lookup.delete(t))}shift(){const t=this.list.shift();if(t)return this.lookup.delete(t),t}isEmpty(){return this.list.length===0}isAdded(t){return this.lookup.has(t)}process(t){let n;const s=new Map;for(n=this.shift();n;){const o=s.get(n)||0;if(o>me)throw new Error(`Web component processed too many times this task, max allowed is: ${me}`);t(n),s.set(n,o+1),n=this.shift()}}}const It=(e,t=document.body,n)=>{let s=document.querySelector(e);return s||(s=n?n():document.createElement(e),t.insertBefore(s,t.firstChild))},Ot=()=>{const e=document.createElement("meta");return e.setAttribute("name","ui5-shared-resources"),e.setAttribute("content",""),e},Mt=()=>typeof document>"u"?null:It('meta[name="ui5-shared-resources"]',document.head,Ot),j=(e,t)=>{const n=e.split(".");let s=Mt();if(!s)return t;for(let o=0;o<n.length;o++){const r=n[o],a=o===n.length-1;Object.prototype.hasOwnProperty.call(s,r)||(s[r]=a?t:{}),s=s[r]}return s},kt={version:"2.0.0-rc.6",major:2,minor:0,patch:0,suffix:"-rc.6",isNext:!1,buildTime:1719878914};let I,Bt="";const G=new Map,v=j("Runtimes",[]),Ft=()=>{if(I===void 0){I=v.length;const e=kt;v.push({...e,alias:Bt,description:`Runtime ${I} - ver ${e.version}`})}},E=()=>I,Ne=(e,t)=>{const n=`${e},${t}`;if(G.has(n))return G.get(n);const s=v[e],o=v[t];if(!s||!o)throw new Error("Invalid runtime index supplied");if(s.isNext||o.isNext)return s.buildTime-o.buildTime;const r=s.major-o.major;if(r)return r;const a=s.minor-o.minor;if(a)return a;const i=s.patch-o.patch;if(i)return i;const m=new Intl.Collator(void 0,{numeric:!0,sensitivity:"base"}).compare(s.suffix,o.suffix);return G.set(n,m),m},zt=()=>v,We=j("Tags",new Map),re=new Set;let g=new Map,q;const Ze=-1,as=e=>{re.add(e),We.set(e,E())},is=e=>re.has(e),xt=()=>[...re.values()],cs=e=>{let t=We.get(e);t===void 0&&(t=Ze),g.has(t)||g.set(t,new Set),g.get(t).add(e),q||(q=setTimeout(()=>{jt(),g=new Map,q=void 0},1e3))},jt=()=>{const e=zt(),t=E(),n=e[t];let s="Multiple UI5 Web Components instances detected.";e.length>1&&(s=`${s}
Loading order (versions before 1.1.0 not listed): ${e.map(o=>`
${o.description}`).join("")}`),[...g.keys()].forEach(o=>{let r,a;o===Ze?(r=1,a={description:"Older unknown runtime"}):(r=Ne(t,o),a=e[o]);let i;r>0?i="an older":r<0?i="a newer":i="the same",s=`${s}

"${n.description}" failed to define ${g.get(o).size} tag(s) as they were defined by a runtime of ${i} version "${a.description}": ${[...g.get(o)].sort().join(", ")}.`,r>0?s=`${s}
WARNING! If your code uses features of the above web components, unavailable in ${a.description}, it might not work as expected!`:s=`${s}
Since the above web components were defined by the same or newer version runtime, they should be compatible with your code.`}),s=`${s}

To prevent other runtimes from defining tags that you use, consider using scoping or have third-party libraries use scoping: https://github.com/SAP/ui5-webcomponents/blob/main/docs/2-advanced/03-scoping.md.`,console.warn(s)},He=new Set,us=e=>{He.add(e)},Vt=e=>He.has(e),ae=new Set,Nt=new R,_=new Dt;let U,O,K,$;const Wt=async e=>{_.add(e),await Ht()},Zt=e=>{Nt.fireEvent("beforeComponentRender",e),ae.add(e),e._render()},ls=e=>{_.remove(e),ae.delete(e)},Ht=async()=>{$||($=new Promise(e=>{window.requestAnimationFrame(()=>{_.process(Zt),$=null,e(),K||(K=setTimeout(()=>{K=void 0,_.isEmpty()&&Jt()},200))})})),await $},Gt=()=>U||(U=new Promise(e=>{O=e,window.requestAnimationFrame(()=>{_.isEmpty()&&(U=void 0,e())})}),U),qt=()=>{const e=xt().map(t=>customElements.whenDefined(t));return Promise.all(e)},Kt=async()=>{await qt(),await Gt()},Jt=()=>{_.isEmpty()&&O&&(O(),O=void 0,U=void 0)},Ge=async e=>{ae.forEach(t=>{const n=t.constructor,s=n.getMetadata().getTag(),o=Vt(n),r=n.getMetadata().isLanguageAware(),a=n.getMetadata().isThemeAware();(!e||e.tag===s||e.rtlAware&&o||e.languageAware&&r||e.themeAware&&a)&&Wt(t)}),await Kt()},Xt=()=>new Promise(e=>{document.body?e():document.addEventListener("DOMContentLoaded",()=>{e()})}),Yt=typeof document>"u",V=(e,t)=>t?`${e}|${t}`:e,Qt=e=>e===void 0?!0:Ne(E(),parseInt(e))===1,N=(e,t,n="",s)=>{const o=typeof e=="string"?e:e.content,r=E(),a=new CSSStyleSheet;a.replaceSync(o),a._ui5StyleId=V(t,n),s&&(a._ui5RuntimeIndex=r,a._ui5Theme=s),document.adoptedStyleSheets=[...document.adoptedStyleSheets,a]},en=(e,t,n="",s)=>{const o=typeof e=="string"?e:e.content,r=E(),a=document.adoptedStyleSheets.find(i=>i._ui5StyleId===V(t,n));if(a)if(!s)a.replaceSync(o||"");else{const i=a._ui5RuntimeIndex;(a._ui5Theme!==s||Qt(i))&&(a.replaceSync(o||""),a._ui5RuntimeIndex=String(r),a._ui5Theme=s)}},W=(e,t="")=>Yt?!0:!!document.adoptedStyleSheets.find(n=>n._ui5StyleId===V(e,t)),tn=(e,t="")=>{document.adoptedStyleSheets=document.adoptedStyleSheets.filter(n=>n._ui5StyleId!==V(e,t))},qe=(e,t,n="",s)=>{W(t,n)?en(e,t,n,s):N(e,t,n,s)},nn=(e,t)=>{if(e===void 0)return t;if(t===void 0)return e;const n=typeof t=="string"?t:t.content;return typeof e=="string"?`${e} ${n}`:{content:`${e.content} ${n}`,packageName:e.packageName,fileName:e.fileName}},sn={packageName:"@ui5/webcomponents-base",fileName:"FontFace.css",content:`@font-face{font-family:"72";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular.woff2?ui5-webcomponents) format("woff2"),local("72");unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:400;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Regular-full.woff2?ui5-webcomponents) format("woff2"),local('72-full')}@font-face{font-family:"72";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:"72full";font-style:normal;font-weight:700;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Bold';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold.woff2?ui5-webcomponents) format("woff2"),local('72-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Boldfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Bold-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72-Light';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light.woff2?ui5-webcomponents) format("woff2"),local('72-Light');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72-Lightfull';font-style:normal;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Light-full.woff2?ui5-webcomponents) format("woff2")}@font-face{font-family:'72Mono';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular.woff2?ui5-webcomponents) format('woff2'),local('72Mono');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Monofull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Regular-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:'72Mono-Bold';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold.woff2?ui5-webcomponents) format('woff2'),local('72Mono-Bold');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Mono-Boldfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72Mono-Bold-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72Black";font-style:bold;font-weight:900;src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black.woff2?ui5-webcomponents) format("woff2"),local('72Black');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}@font-face{font-family:'72Blackfull';src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-Black-full.woff2?ui5-webcomponents) format('woff2')}@font-face{font-family:"72-SemiboldDuplex";src:url(https://sdk.openui5.org/resources/sap/ui/core/themes/sap_horizon/fonts/72-SemiboldDuplex.woff2?ui5-webcomponents) format("woff2"),local('72-SemiboldDuplex');unicode-range:U+00,U+0D,U+20-7E,U+A0-FF,U+131,U+152-153,U+161,U+178,U+17D-17E,U+192,U+237,U+2C6,U+2DC,U+3BC,U+1E9E,U+2013-2014,U+2018-201A,U+201C-201E,U+2020-2022,U+2026,U+2030,U+2039-203A,U+2044,U+20AC,U+2122}`},on={packageName:"@ui5/webcomponents-base",fileName:"OverrideFontFace.css",content:"@font-face{font-family:'72override';unicode-range:U+0102-0103,U+01A0-01A1,U+01AF-01B0,U+1EA0-1EB7,U+1EB8-1EC7,U+1EC8-1ECB,U+1ECC-1EE3,U+1EE4-1EF1,U+1EF4-1EF7;src:local('Arial'),local('Helvetica'),local('sans-serif')}"},rn=()=>{const e=S("OpenUI5Support");(!e||!e.isOpenUI5Detected())&&an(),cn()},an=()=>{W("data-ui5-font-face")||N(sn,"data-ui5-font-face")},cn=()=>{W("data-ui5-font-face-override")||N(on,"data-ui5-font-face-override")},un={packageName:"@ui5/webcomponents-base",fileName:"SystemCSSVars.css",content:":root{--_ui5_content_density:cozy}.sapUiSizeCompact,.ui5-content-density-compact,[data-ui5-compact-size]{--_ui5_content_density:compact}"},ln=()=>{W("data-ui5-system-css-vars")||N(un,"data-ui5-system-css-vars")},Ke=new R,Je="themeRegistered",fn=e=>{Ke.attachEvent(Je,e)},dn=e=>Ke.fireEvent(Je,e),Ue=new Map,Xe=new Map,hn=new Map,Ye=new Set,F=new Set,fs=(e,t,n)=>{Xe.set(`${e}/${t}`,n),Ye.add(e),F.add(t),dn(t)},Qe=async(e,t,n)=>{const s=`${e}_${t}_${n||""}`,o=Ue.get(s);if(o!==void 0)return o;if(!F.has(t)){const f=[...F.values()].join(", ");return console.warn(`You have requested a non-registered theme ${t} - falling back to ${k}. Registered themes are: ${f}`),J(e,k)}const[r,a]=await Promise.all([J(e,t),n?J(e,n,!0):void 0]),i=nn(r,a);return i&&Ue.set(s,i),i},J=async(e,t,n=!1)=>{const o=(n?hn:Xe).get(`${e}/${t}`);if(!o){n||console.error(`Theme [${t}] not registered for package [${e}]`);return}let r;try{r=await o(t)}catch(i){console.error(e,i.message);return}return r._||r},et=()=>Ye,pn=e=>F.has(e),w=new Set,gn=()=>{let e=document.querySelector(".sapThemeMetaData-Base-baseLib")||document.querySelector(".sapThemeMetaData-UI5-sap-ui-core");if(e)return getComputedStyle(e).backgroundImage;e=document.createElement("span"),e.style.display="none",e.classList.add("sapThemeMetaData-Base-baseLib"),document.body.appendChild(e);let t=getComputedStyle(e).backgroundImage;return t==="none"&&(e.classList.add("sapThemeMetaData-UI5-sap-ui-core"),t=getComputedStyle(e).backgroundImage),document.body.removeChild(e),t},mn=e=>{const t=/\(["']?data:text\/plain;utf-8,(.*?)['"]?\)$/i.exec(e);if(t&&t.length>=2){let n=t[1];if(n=n.replace(/\\"/g,'"'),n.charAt(0)!=="{"&&n.charAt(n.length-1)!=="}")try{n=decodeURIComponent(n)}catch{w.has("decode")||(console.warn("Malformed theme metadata string, unable to decodeURIComponent"),w.add("decode"));return}try{return JSON.parse(n)}catch{w.has("parse")||(console.warn("Malformed theme metadata string, unable to parse JSON"),w.add("parse"))}}},Un=e=>{let t,n;try{t=e.Path.match(/\.([^.]+)\.css_variables$/)[1],n=e.Extends[0]}catch{w.has("object")||(console.warn("Malformed theme metadata Object",e),w.add("object"));return}return{themeName:t,baseThemeName:n}},se=()=>{const e=gn();if(!e||e==="none")return;const t=mn(e);if(t)return Un(t)},wn=new R,yn="themeLoaded",Sn=e=>wn.fireEvent(yn,e),_n=(e,t)=>{const n=document.createElement("link");return n.type="text/css",n.rel="stylesheet",t&&Object.entries(t).forEach(s=>n.setAttribute(...s)),n.href=e,document.head.appendChild(n),new Promise(s=>{n.addEventListener("load",s),n.addEventListener("error",s)})};let b;const tt=()=>(b===void 0&&(b=Et()),b),ds=e=>{if(b!==e){if(b=e,!ze(e)){console.warn(`The ${e} is not valid. Check the allowed origins as suggested in the "setThemeRoot" description.`);return}return nt(A())}},An=e=>`${tt()}Base/baseLib/${e}/css_variables.css`,nt=async e=>{const t=document.querySelector(`[sap-ui-webcomponents-theme="${e}"]`);t&&document.head.removeChild(t),await _n(An(e),{"sap-ui-webcomponents-theme":e})},L="@ui5/webcomponents-theming",En=()=>et().has(L),bn=async e=>{if(!En())return;const t=await Qe(L,e);t&&qe(t,"data-ui5-theme-properties",L,e)},Tn=()=>{tn("data-ui5-theme-properties",L)},Cn=async(e,t)=>{const s=[...et()].map(async o=>{if(o===L)return;const r=await Qe(o,e,t);r&&qe(r,`data-ui5-component-properties-${E()}`,o)});return Promise.all(s)},vn=async e=>{var s;const t=se();if(t)return t;const n=S("OpenUI5Support");if(n&&n.isOpenUI5Detected()){if(n.cssVariablesLoaded())return{themeName:(s=n.getConfigurationSettingsObject())==null?void 0:s.theme,baseThemeName:""}}else if(tt())return await nt(e),se()},ie=async e=>{const t=await vn(e);!t||e!==t.themeName?await bn(e):Tn();const n=pn(e)?e:t&&t.baseThemeName;await Cn(n||k,t&&t.themeName===e?e:void 0),Sn(e)};let y;const A=()=>(y===void 0&&(y=At()),y),hs=async e=>{y!==e&&(y=e,ot()&&(await ie(y),await Ge({themeAware:!0})))},Ln=()=>{var t,n;const e=A();return Pn(e)?!e.startsWith("sap_horizon"):!((n=(t=se())==null?void 0:t.baseThemeName)!=null&&n.startsWith("sap_horizon"))},Pn=e=>dt.includes(e);let Z=!1,D;const st=new R,ot=()=>Z,ps=e=>{if(!Z){st.attachEvent("boot",e);return}e()},gs=async()=>{if(D!==void 0)return D;const e=async t=>{if(Ft(),typeof document>"u"){t();return}fn(Rn);const n=S("OpenUI5Support"),s=n?n.isOpenUI5Detected():!1,o=S("F6Navigation");n&&await n.init(),o&&!s&&o.init(),await Xt(),await ie(A()),n&&n.attachListeners(),rn(),ln(),t(),Z=!0,await st.fireEventAsync("boot")};return D=new Promise(e),D},Rn=e=>{Z&&e===A()&&ie(A())};let T,oe;const $n=()=>(T===void 0&&(T=bt()),T),ms=async e=>{T!==e&&(T=e,ot()&&(await $t(e),await Ge({languageAware:!0})))},Dn=e=>{oe=e},In=()=>(oe===void 0&&Dn(Tt()),oe),On=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i;class rt{constructor(t){const n=On.exec(t.replace(/_/g,"-"));if(n===null)throw new Error(`The given language ${t} does not adhere to BCP-47.`);this.sLocaleId=t,this.sLanguage=n[1]||C,this.sScript=n[2]||"",this.sRegion=n[3]||"",this.sVariant=n[4]&&n[4].slice(1)||null,this.sExtension=n[5]&&n[5].slice(1)||null,this.sPrivateUse=n[6]||null,this.sLanguage&&(this.sLanguage=this.sLanguage.toLowerCase()),this.sScript&&(this.sScript=this.sScript.toLowerCase().replace(/^[a-z]/,s=>s.toUpperCase())),this.sRegion&&(this.sRegion=this.sRegion.toUpperCase())}getLanguage(){return this.sLanguage}getScript(){return this.sScript}getRegion(){return this.sRegion}getVariant(){return this.sVariant}getVariantSubtags(){return this.sVariant?this.sVariant.split("-"):[]}getExtension(){return this.sExtension}getExtensionSubtags(){return this.sExtension?this.sExtension.slice(2).split("-"):[]}getPrivateUse(){return this.sPrivateUse}getPrivateUseSubtags(){return this.sPrivateUse?this.sPrivateUse.slice(2).split("-"):[]}hasPrivateUseSubtag(t){return this.getPrivateUseSubtags().indexOf(t)>=0}toString(){const t=[this.sLanguage];return this.sScript&&t.push(this.sScript),this.sRegion&&t.push(this.sRegion),this.sVariant&&t.push(this.sVariant),this.sExtension&&t.push(this.sExtension),this.sPrivateUse&&t.push(this.sPrivateUse),t.join("-")}}const X=new Map,at=e=>(X.has(e)||X.set(e,new rt(e)),X.get(e)),we=e=>{try{if(e&&typeof e=="string")return at(e)}catch{}return new rt(l)},M=e=>{if(e)return we(e);const t=$n();return t?at(t):we(pt())},Mn=/^((?:[A-Z]{2,3}(?:-[A-Z]{3}){0,3})|[A-Z]{4}|[A-Z]{5,8})(?:-([A-Z]{4}))?(?:-([A-Z]{2}|[0-9]{3}))?((?:-[0-9A-Z]{5,8}|-[0-9][0-9A-Z]{3})*)((?:-[0-9A-WYZ](?:-[0-9A-Z]{2,8})+)*)(?:-(X(?:-[0-9A-Z]{1,8})+))?$/i,ye=/(?:^|-)(saptrc|sappsd)(?:-|$)/i,kn={he:"iw",yi:"ji",nb:"no",sr:"sh"},Bn=e=>{let t;if(!e)return l;if(typeof e=="string"&&(t=Mn.exec(e.replace(/_/g,"-")))){let n=t[1].toLowerCase(),s=t[3]?t[3].toUpperCase():void 0;const o=t[2]?t[2].toLowerCase():void 0,r=t[4]?t[4].slice(1):void 0,a=t[6];return n=kn[n]||n,a&&(t=ye.exec(a))||r&&(t=ye.exec(r))?`en_US_${t[1].toLowerCase()}`:(n==="zh"&&!s&&(o==="hans"?s="CN":o==="hant"&&(s="TW")),n+(s?"_"+s+(r?"_"+r.replace("-","_"):""):""))}return l},Fn=e=>{if(!e)return l;if(e==="zh_HK")return"zh_TW";const t=e.lastIndexOf("_");return t>=0?e.slice(0,t):e!==l?l:""},Se=new Set,_e=new Set,ce=new Map,Y=new Map,ue=new Map,Us=(e,t,n)=>{const s=`${e}/${t}`;ue.set(s,n)},Ae=(e,t)=>{ce.set(e,t)},ws=e=>ce.get(e),it=(e,t)=>{const n=`${e}/${t}`;return ue.has(n)},zn=(e,t)=>{const n=`${e}/${t}`,s=ue.get(n);return s&&!Y.get(n)&&Y.set(n,s(t)),Y.get(n)},xn=e=>{Se.has(e)||(console.warn(`[${e}]: Message bundle assets are not configured. Falling back to English texts.`,` Add \`import "${e}/dist/Assets.js"\` in your bundle and make sure your build tool supports dynamic imports and JSON imports. See section "Assets" in the documentation for more information.`),Se.add(e))},Ee=(e,t)=>t!==C&&!it(e,t),jn=async e=>{const t=M().getLanguage(),n=M().getRegion(),s=M().getVariant();let o=t+(n?`-${n}`:"")+(s?`-${s}`:"");if(Ee(e,o))for(o=Bn(o);Ee(e,o);)o=Fn(o);const r=In();if(o===C&&!r){Ae(e,null);return}if(!it(e,o)){xn(e);return}try{const a=await zn(e,o);Ae(e,a)}catch(a){const i=a;_e.has(i.message)||(_e.add(i.message),console.error(i.message))}};Ve(e=>{const t=[...ce.keys()];return Promise.all(t.map(jn))});const Vn=new Map,z=new Map,Q=new Map,be=new Set;let Te=!1;const Nn={iw:"he",ji:"yi",in:"id"},Ce=e=>{Te||(console.warn(`[LocaleData] Supported locale "${e}" not configured, import the "Assets.js" module from the webcomponents package you are using.`),Te=!0)},Wn=(e,t,n)=>{e=e&&Nn[e]||e,e==="no"&&(e="nb"),e==="zh"&&!t&&(n==="Hans"?t="CN":n==="Hant"&&(t="TW")),(e==="sh"||e==="sr"&&n==="Latn")&&(e="sr",t="Latn");let s=`${e}_${t}`;return de.includes(s)||(s=e,de.includes(s))?z.has(s)?s:(Ce(s),l):l},ve=(e,t)=>{Vn.set(e,t)},Zn=e=>{if(!Q.get(e)){const t=z.get(e);if(!t)throw new Error(`CLDR data for locale ${e} is not loaded!`);Q.set(e,t(e))}return Q.get(e)},Hn=async(e,t,n)=>{const s=Wn(e,t,n),o=S("OpenUI5Support");if(o){const r=o.getLocaleDataObject();if(r){ve(s,r);return}}try{const r=await Zn(s);ve(s,r)}catch(r){const a=r;be.has(a.message)||(be.add(a.message),console.error(a.message))}},Gn=(e,t)=>{z.set(e,t)};Gn("en",async()=>(await fetch("https://sdk.openui5.org/1.120.5/resources/sap/ui/core/cldr/en.json")).json());Ve(()=>{const e=M();return Hn(e.getLanguage(),e.getRegion(),e.getScript())});var x;(function(e){e["SAP-icons"]="SAP-icons-v4",e.horizon="SAP-icons-v5",e["SAP-icons-TNT"]="tnt",e.BusinessSuiteInAppSymbols="business-suite"})(x||(x={}));const ct=e=>x[e]?x[e]:e;var h;(function(e){e.SAPIconsV4="SAP-icons-v4",e.SAPIconsV5="SAP-icons-v5",e.SAPIconsTNTV2="tnt-v2",e.SAPIconsTNTV3="tnt-v3",e.SAPBSIconsV1="business-suite-v1",e.SAPBSIconsV2="business-suite-v2"})(h||(h={}));const u=new Map;u.set("SAP-icons",{legacy:h.SAPIconsV4,sap_horizon:h.SAPIconsV5});u.set("tnt",{legacy:h.SAPIconsTNTV2,sap_horizon:h.SAPIconsTNTV3});u.set("business-suite",{legacy:h.SAPBSIconsV1,sap_horizon:h.SAPBSIconsV2});const qn=(e,t)=>{if(u.has(e)){u.set(e,{...t,...u.get(e)});return}u.set(e,t)},Le=e=>{const t=Ln()?"legacy":"sap_horizon";return u.has(e)?u.get(e)[t]:e},Kn=new Map,Jn=e=>Kn.get(e),ut=e=>{const t=Jn(A());return!e&&t?ct(t):Le(e||"SAP-icons")},Xn="legacy",Pe=new Map,le=j("SVGIcons.registry",new Map),ee=j("SVGIcons.promises",new Map),Re="ICON_NOT_FOUND",Yn=async e=>{if(!ee.has(e)){if(!Pe.has(e))throw new Error(`No loader registered for the ${e} icons collection. Probably you forgot to import the "AllIcons.js" module for the respective package.`);const t=Pe.get(e);ee.set(e,t(e))}return ee.get(e)},$e=e=>{Object.keys(e.data).forEach(t=>{const n=e.data[t];Qn(t,{pathData:n.path||n.paths,ltr:n.ltr,accData:n.acc,collection:e.collection,packageName:e.packageName})})},Qn=(e,t)=>{const n=`${t.collection}/${e}`;le.set(n,{pathData:t.pathData,ltr:t.ltr,accData:t.accData,packageName:t.packageName,customTemplate:t.customTemplate,viewBox:t.viewBox,collection:t.collection})},es=e=>{e.startsWith("sap-icon://")&&(e=e.replace("sap-icon://",""));let t;return[e,t]=e.split("/").reverse(),e=e.replace("icon-",""),t&&(t=ct(t)),{name:e,collection:t}},te=async e=>{const{name:t,collection:n}=es(e);let s=Re;try{s=await Yn(ut(n))}catch(r){console.error(r.message)}if(s===Re)return s;const o=De(n,t);return o||(Array.isArray(s)?s.forEach(r=>{$e(r),qn(n,{[r.themeFamily||Xn]:r.collection})}):$e(s),De(n,t))},De=(e,t)=>{const n=`${ut(e)}/${t}`;return le.get(n)},ys=async()=>(await te("edit"),await te("tnt/arrow"),await te("business-suite/3d"),Array.from(le.keys()));export{tt as A,ds as B,E as C,Us as D,R as E,Kt as F,ys as _,ps as a,gs as b,ts as c,Ge as d,j as e,jn as f,ws as g,W as h,S as i,ss as j,Zt as k,ls as l,us as m,is as n,cs as o,as as p,Be as q,fs as r,hs as s,Wt as t,ns as u,os as v,rs as w,$n as x,ms as y,A as z};
