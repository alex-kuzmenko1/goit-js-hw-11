import{S as f,a as m,i as n}from"./assets/vendor-XNMCaA0k.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const g=document.querySelector(".gallery");function d(s){g.innerHTML=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:c,downloads:u})=>`
      <li class="gallery-item">
        <a href="${a}" class="gallery-link">
          <img src="${o}" alt="${e}" class="gallery-image" />
        </a>
        <div class="info">
          <p>❤️ ${t}</p>
          <p>👀 ${i}</p>
          <p>💬 ${c}</p>
          <p>⬇️ ${u}</p>
        </div>
      </li>`).join(""),new f(".gallery a").refresh()}const p="49323961-66159e96cf1899f53bae32983",y="https://pixabay.com/api/";async function h(s){try{const r=await m.get(y,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",satisfies:!0}});return console.log(r.data),r.data.hits}catch(r){throw console.error("Error fetching images:",r),r}}const L=document.querySelector("form"),b=document.querySelector(".gallery"),l=document.querySelector(".loader");L.addEventListener("submit",async s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){n.error({title:"Error",message:"Please enter a search query!"});return}b.innerHTML="",l.classList.add("visible");try{const o=await h(r);console.log(o),o.length===0?n.warning({title:"Oops!",message:"No images found. Try again!"}):d(o)}catch{n.error({title:"Error",message:" Failed to fetch images. Try again later!"})}finally{l.classList.remove("visible")}});
//# sourceMappingURL=index.js.map
