import{l as s,c as d,a}from"./store-DGzutKpL.js";const o=document.createElement("div");o.id="codeeditor";document.body.appendChild(o);const i=document.createElement("div");i.id="explorer";i.innerHTML+="<h3>Characters:</h3>";o.appendChild(i);const t=document.createElement("div");t.id="contentarea";o.appendChild(t);const r=document.createElement("button");r.innerText="play";document.body.appendChild(r);r.onclick=()=>{window.location.href="/"};document.addEventListener("keyup",n=>{n.key==="Escape"&&r.click()});async function l(n){let e="";n==="custom"?e=d.value:e=await fetch(`/userscripts/${n}.js`).then(c=>c.text()),t.innerText=e,a.set(e),s.set(n),console.log(a.value)}l(s.value);(async()=>(await fetch("/userscripts/list.json").then(e=>e.json())).concat(d.value?["custom"]:[]).forEach(e=>{const c=document.createElement("p");c.innerText=e,c.addEventListener("click",u=>{l(e)}),i.appendChild(c)}))();t.contentEditable="true";t.innerHTML=a.value;t.addEventListener("input",n=>{a.set(t.innerText),d.set(t.innerText),console.log(a.value)});
