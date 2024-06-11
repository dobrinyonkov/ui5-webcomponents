"use strict";import a from"../types/InvisibleMessageMode.js";import o from"./getSingletonElementInstance.js";import{attachBoot as r}from"../Boot.js";let t,n;const l=e=>{e.style.position="absolute",e.style.clip="rect(1px,1px,1px,1px)",e.style.userSelect="none",e.style.left="-1000px",e.style.top="-1000px",e.style.pointerEvents="none"};r(()=>{t&&n||(t=document.createElement("span"),n=document.createElement("span"),t.classList.add("ui5-invisiblemessage-polite"),n.classList.add("ui5-invisiblemessage-assertive"),t.setAttribute("aria-live","polite"),n.setAttribute("aria-live","assertive"),t.setAttribute("role","alert"),n.setAttribute("role","alert"),l(t),l(n),o("ui5-announcement-area").appendChild(t),o("ui5-announcement-area").appendChild(n))});const p=(e,s)=>{const i=s===a.Assertive?n:t;i.textContent="",i.textContent=e,s!==a.Assertive&&s!==a.Polite&&console.warn('You have entered an invalid mode. Valid values are: "Polite" and "Assertive". The framework will automatically set the mode to "Polite".'),setTimeout(()=>{i.textContent===e&&(i.textContent="")},3e3)};export default p;
//# sourceMappingURL=InvisibleMessage.js.map
