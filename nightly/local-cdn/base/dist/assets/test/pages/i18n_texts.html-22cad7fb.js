import"../../Icons-e67c99ef.js";import"../../bundle.esm-412e9dbf.js";const a=async()=>{window["sap-ui-webcomponents-bundle"].configuration.setLanguage("fr");const s=["test_1","test_2","test_3","test_4","test_5","test_6","test_7","test_8","test_9"];window["sap-ui-webcomponents-bundle"].registerI18nLoader("myApp","fr",async e=>{const t=await(await fetch(`./assets/messagebundle_${e}.properties`)).text();return window["sap-ui-webcomponents-bundle"].parseProperties(t)});const r=await window["sap-ui-webcomponents-bundle"].getI18nBundle("myApp");s.forEach(e=>{const t=r.getText(e.toUpperCase(),"test"),n=document.getElementById(`${e}_text`);n.innerText=t}),s.forEach(e=>{const t=document.getElementById(`${e}_text`),n=document.getElementById(`${e}_result`);if(t.innerText!==n.innerText){const o=n.parentElement;o.style.textDecoration="underline",o.style.color="red"}})};a();
