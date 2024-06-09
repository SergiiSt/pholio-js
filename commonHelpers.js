import{S as j,a as S,A as k}from"./assets/vendor-06d11035.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const w="/pholio-js/assets/manager-finance-df2f0cd8.jpg",x="/pholio-js/assets/maneger-finance-x2-min-cbbe719a.jpg",E="/pholio-js/assets/vegetables-a587ed88.jpg",L="/pholio-js/assets/vegetables-x2-min-6c61081a.jpg",I="/pholio-js/assets/discover-0b5a74ec.jpg",q="/pholio-js/assets/discover-x2-min-8f5036ce.jpg",J="/pholio-js/assets/transform-your-a0ceb6ad.jpg",P="/pholio-js/assets/transform-your-x2-min-0ab9547c.jpg",M="/pholio-js/assets/traditions-ukraine-e1966ce6.jpg",T="/pholio-js/assets/traditions-ukarain-x2-min-f865a371.jpg",G="/pholio-js/assets/get-body-3915d0f2.jpg",N="/pholio-js/assets/get-body-x2-min-7bb29976.jpg",B="/pholio-js/assets/mimino-5120051c.jpg",$="/pholio-js/assets/mimino-x2-min-2bd02bb8.jpg",O="/pholio-js/assets/brand-7a40e5ec.jpg",A="/pholio-js/assets/brand-x2-min-6d61de72.jpg",C="/pholio-js/assets/fresh-c88d3a45.jpg",R="/pholio-js/assets/fresh-x2-min-7c3cc483.jpg",F="/pholio-js/assets/turn-your-453dc1a7.jpg",H="/pholio-js/assets/turn-your-x2-min-dcb3564d.jpg",c="/pholio-js/assets/symbol-defs-4dfd43f8.svg#icon-arrow",h=[{title:"Wallet Webservice",image:w,image2x:x,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Wallet Webservice Project",svg:c},{title:"Green harvest webservice",image:E,image2x:L,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Green harvest",svg:c},{title:"English Exellence webservice",image:I,image2x:q,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"English Exellence",svg:c},{title:"Transform your webservice",image:J,image2x:P,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transform your",svg:c},{title:"Ukraine traditions webservice",image:M,image2x:T,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Ukraine traditions",svg:c},{title:"Stay Healthy webservice",image:G,image2x:N,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Stay Healthy",svg:c},{title:"Mimino webservice",image:B,image2x:$,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Mimino",svg:c},{title:"Transformation with a Touch of the Brush webservice",image:O,image2x:A,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transformation with a Touch of the Brush",svg:c},{title:"Fresh harvest box webservice",image:C,image2x:R,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Fresh harvest box",svg:c},{title:"Transform your business webservice",image:F,image2x:H,techStack:"React, JavaScript, Node JS, Git",link:"https://github.com/kononova1986/project-15",alt:"Transform your business",svg:c}];let u=0;const b=3;let v;function y(){const t=document.querySelector(".project-list"),r=h.slice(u,u+b).map(({image:o,image2x:s,alt:a,techStack:l,title:m,link:p,svg:n},d)=>`
            <li class="project-item ${(u+d)%2===0?"left":"right"}">
                <img  srcset="${o} 1x, ${s} 2x" src="${o}"  alt="${a}" class="project-image">
                <div class="project-content">
                    <p class="project-tech">${l}</p>
                    <div class="project-name-btn">
                        <h3 class="project-name">${m}</h3>
                        <div class="centered">
                            <button type="button" class="project-button">
                                <a href="${p}" class="project-link" target="_blank">VISIT
                                    <svg class="project-icon">
                                        <use href="${n}"></use>
                                    </svg>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </li>
            `).join("");t.innerHTML+=r,document.querySelectorAll(".project-item:not(.observed)").forEach(o=>{v.observe(o),o.classList.add("observed")}),u+=b,u>=h.length&&(document.querySelector(".load-more").style.display="none")}document.querySelector(".load-more").addEventListener("click",y);v=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("show"),v.unobserve(e.target))})});y();const V=document.querySelector(".backdrop-menu-list"),W=document.querySelector(".menu-btn"),D=document.querySelector(".menu-backdrop"),U=document.querySelector(".close-modal-btn ");function f(){D.classList.toggle("is-open")}W.addEventListener("click",f);U.addEventListener("click",f);V.addEventListener("click",t=>{t.target&&f()});const Y=document.querySelectorAll('a[class="nav-link"]');Y.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault();const r=t.getAttribute("href").substring(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})})});const z=document.querySelector(".swiper-button-next"),K=document.querySelector(".swiper-button-prev");async function _(){try{const t=await fetch("https://portfolio-js.b.goit.study/api/reviews");if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);return await t.json()}catch(t){return alert("Fetch error: "+t.message),console.error("Fetch error:",t),null}}function Q(){new j(".swiper-container",{slidesPerView:1,slidesPerGroup:1,loop:!1,navigation:{nextEl:z,prevEl:K},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:!0,breakpoints:{768:{slidesPerView:1,slidesPerGroup:1,spaceBetween:32,slideWidth:704},1280:{slidesPerView:2,slidesPerGroup:1,spaceBetween:32,slideWidth:592}},on:{reachEnd:function(){document.querySelector(".swiper-button-next").classList.add("disabled")},reachBeginning:function(){document.querySelector(".swiper-button-prev").classList.add("disabled")},fromEdge:function(){document.querySelector(".swiper-button-next").classList.remove("disabled"),document.querySelector(".swiper-button-prev").classList.remove("disabled")}}})}function X(t){return`<li class="swiper-slide review">
    <p class="review-text">${t.review}</p>
    <div class="swiper-img-container">
      <img class="reviews-img" src="${t.avatar_url}" alt="Avatar">
      <h3 class="name">${t.author}</h3>
    </div>
  </li>`}async function Z(t,e){const r=document.querySelector("#reviews-list");if(!r){console.error("Element #reviews-list not found");return}const i=await _();if(!i){r.innerHTML="Not found";return}const o=i.map(s=>e(s)).join("");r.innerHTML=o,t()}Z(Q,X);document.addEventListener("DOMContentLoaded",function(){const t=document.querySelector(".form-work-togezer"),e=document.querySelector(".footer-modal-background"),r=document.querySelector(".footer-modal-btn"),i=document.querySelector(".input-work-togezer"),o=document.querySelector(".textarea-work-togezer"),s=document.querySelectorAll(".error-message")[0],a=document.querySelectorAll(".error-message")[1];e.style.display="none";function l(n){n?document.addEventListener("keydown",m):document.removeEventListener("keydown",m)}function m(n){n.key==="Escape"&&(e.style.display="none")}t.addEventListener("submit",async function(n){n.preventDefault();const d=i.value.trim(),g=o.value.trim();if(p(d))s.style.display="none";else{s.style.display="block";return}if(g===""){a.style.display="block";return}else a.style.display="none";try{await S.post("https://portfolio-js.b.goit.study/api/requests",{email:d,comment:g}),e.style.display="flex",l(!0)}catch{alert("Произошла ошибка при отправке сообщения.")}t.reset()}),r.addEventListener("click",function(){e.style.display="none",l(!1)}),e.addEventListener("click",function(n){n.target===e&&(e.style.display="none",l(!1))});function p(n){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)}});document.addEventListener("DOMContentLoaded",function(){var t={duration:600,ariaEnabled:!0,collapse:!0,showMultiple:!1,openOnInit:[0],elementClass:"accordion-item",triggerClass:"list-title-box",panelClass:"accordion-text",activeClass:"active",beforeOpen:function(e){console.log("Before opening:",e)},onOpen:function(e){console.log("Opened:",e)},beforeClose:function(e){console.log("Before closing:",e)},onClose:function(e){console.log("Closed:",e)}};new k(".accordion",t),document.querySelectorAll(".accordion-item .list-title-box").forEach(function(e){e.addEventListener("click",function(){var r=e.closest(".accordion-item"),i=r.classList.contains("active");document.querySelectorAll(".accordion-item").forEach(function(o){o.classList.remove("active")}),i||r.classList.add("active")})})});
//# sourceMappingURL=commonHelpers.js.map