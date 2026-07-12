import{a as c}from"./assets/vendor-Bie5rgBU.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const l="https://wedding-photographer.b.goit.study/api",a="/wedding-photos";async function d(){return(await c.get(`${l}${a}`)).data.weddingPhotos}function u(s){const r=s.map(o=>`
         
              <li class="img-item">
                <img src="${o.img}" alt="${o.title}" />
                <h2 class="title-item">${o.title}</h2>
                <p class="desc-item">${o.desc}</p>
              </li>`).join(""),n=document.querySelector(".gallery");n.innerHTML=r}const f={gallary:document.querySelector(".gallery"),formEl:document.querySelector(".form")};f.formEl.addEventListener("click",p);async function p(s){s.preventDefault();try{const r=await d();u(r)}catch(r){console.error("Request feiled:",r)}}
//# sourceMappingURL=index.js.map
