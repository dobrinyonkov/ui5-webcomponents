import"../../bundle.esm-3VTnMENk.js";document.addEventListener("DOMContentLoaded",function(){const o=["1","2","3","4","5","6","7","8","9","10"],r=e=>{console.error("clicked")};document.querySelector("#checkboxId").addEventListener("change",e=>{document.querySelectorAll("ui5-tag").forEach(t=>{t.interactive=e.currentTarget.checked,t.interactive?t.addEventListener("click",r):t.removeEventListener("click",r)})});const n=document.querySelector("#set1Content");o.forEach(e=>{n.insertAdjacentHTML("beforeend",`<ui5-tag design="Set1" color-scheme="${e}">Set 1 - Value - ${e}</ui5-tag>`),n.insertAdjacentHTML("beforeend",`<ui5-tag design="Set1" color-scheme="${e}"><ui5-icon name="error" slot="icon"></ui5-icon>Set 1 - Value - ${e}</ui5-tag>`),n.insertAdjacentHTML("beforeend","<br><br>")});const c=document.querySelector("#set2Content");o.forEach(e=>{c.insertAdjacentHTML("beforeend",`<ui5-tag design="Set2" color-scheme="${e}">Set 2 - Value - ${e}</ui5-tag>`),c.insertAdjacentHTML("beforeend",`<ui5-tag design="Set2" color-scheme="${e}"><ui5-icon name="lab" slot="icon"></ui5-icon>Set 2 - Value - ${e}</ui5-tag>`),c.insertAdjacentHTML("beforeend","<br><br>")})});
