import{i as H,a as S,S as q,N as j,P as Y}from"./assets/vendor-nO3sPJ2J.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const D={position:"topRight",timeout:4e3,theme:"dark",backgroundColor:"#060307",progressBarColor:"#4E75FF"},L=(t,e="error")=>{H[e]({...D,title:e==="error"?"Error":"Success",message:t,backgroundColor:e==="error"?"#1a0505":"#060307"})};S.defaults.baseURL="https://sound-wave.b.goit.study/api";async function E(t,e,a={}){var i,s;try{return(await S({method:t,url:e,...a})).data}catch(r){const n=((s=(i=r.response)==null?void 0:i.data)==null?void 0:s.message)||r.message;return L(n),null}}const I=({page:t=1,limit:e})=>E("get","/artists",{params:{page:t,limit:e}}),R=t=>E("get",`/artists/${t}`),G=t=>E("get","/feedbacks",{params:{limit:t}}),U=new URL("/team-5-project/assets/sprite-D9unHibT.svg",import.meta.url).href,_=document.querySelector(".artists-list");function C(t){const e=t.map(({_id:a,strArtist:i,strArtistThumb:s,genres:r,strBiographyEN:n})=>{const c=r.map(l=>`<span class="artist-genre">${l}</span>`).join("");return`
          <li class="artist-card">
            <img
              src="${s}"
              alt="${i}"
              class="artist-img"
            />
            <div class="artist-genres">
              ${c}
            </div>
            <h4 class="artist-name">${i}</h4>
            <p class="artist-description">
              ${n}
            </p>
            <button
              type="button"
              class="artist-link"
              data-id="${a}"
              >
              Learn more
            </button>
          </li>
        `}).join("");_.insertAdjacentHTML("beforeend",e)}function K(t){return t.length===0?'<p class="no-data">No tracks found</p>':t.map(e=>`
    <div class="artistModal-album-item">
      <h4 class="artistModal-album-name">${e.strAlbum}</h4>
      <div class="artistModal-track-header">
        <span>Track</span>
        <span>Time</span>
        <span>Link</span>
      </div>
      <ul class="artistModal-track-list">
        ${e.tracks.map(a=>{const i=Math.floor(a.intDuration/1e3),s=Math.floor(i/60),r=String(i%60).padStart(2,"0"),n=a.movie?a.movie.split(" ")[0]:null;return`
            <li class="artistModal-track-item">
              <span class="artistModal-track-name">${a.strTrack}</span>
              <span class="artistModal-track-duration">${s}:${r}</span>
              <span class="artistModal-track-link">
                ${n&&n!=="null"?`
                  <a href="${n}" target="_blank" class="artistModal-yt-link" rel="noopener noreferrer">
                    <svg class="artistModal-yt-icon" width="24" height="24">
                      <use href="${U}#icon-Youtube"></use> 
                    </svg>
                  </a>`:""}
              </span>
            </li>`}).join("")}
      </ul>
    </div>`).join("")}function V({artist:t,yearsActive:e,specificInfoMarkup:a,albumsMarkup:i}){const{strArtist:s,strArtistThumb:r,strCountry:n,strBiographyEN:c,genres:l}=t;return`
    <div class="artistModal-content-wrapper">
      <h2 class="artistModal-title">${s}</h2>
      <div class="artistModal-info-wrapper">
        <div class="artistModal-img-wrapper">
          <img src="${r}" class="artistModal-img" alt="${s}">
        </div>
        <div class="artistModal-info-grid">
          <div class="artistModal-info-group">
            <div class="artistModal-info-item">
              <span class="artistModal-info-label">Years active</span>
              <p class="artistModal-info-value">${e}</p>
            </div>     
            ${a}      
            <div class="artistModal-info-item">
              <span class="artistModal-info-label">Country</span>
              <p class="artistModal-info-value">${n||"Unknown"}</p>
            </div>
          </div>
          <div class="artistModal-desc">
            <span class="artistModal-info-label">Biography</span>
            <p>${c||"Biography not available"}</p>
          </div>
          <div class="artistModal-genres">
            ${(l||[]).map(d=>`<span class="artist-genre">${d}</span>`).join("")}
          </div>
        </div> 
      </div>
      <h2 class="artistModal-albums-title">Albums</h2>
      <div class="artistModal-albums-section">${i}</div>
    </div>`}const f=document.querySelector(".artists-button");let k=1;const B=8;let g=[],M=0;function z(){f.classList.remove("is-hidden")}function P(){f.classList.add("is-hidden")}async function Z(){const t=await I({page:k,limit:B});t&&(M=t.totalArtists,C(t.artists),g=[...g,...t.artists],g.length<M?z():P())}Z();f.addEventListener("click",J);async function J(t){t.preventDefault(),k+=1,f.disabled=!0,f.classList.add("loading");const e=await I({page:k,limit:B});f.classList.remove("loading"),f.disabled=!1,e&&(C(e.artists),g=[...g,...e.artists],g.length>=M&&(P(),L("You have reached the limit","error")))}const Q=3;let b=null;async function W(){const t=await G(Q),e=t==null?void 0:t.data;if(console.log("[Feedback] extracted feedbacks:",e),console.log("[Feedback] isArray:",Array.isArray(e)),console.log("[Feedback] length:",e==null?void 0:e.length),!Array.isArray(e)||e.length===0){console.warn("[Feedback] feedbacks array is empty or invalid");return}X(e),et()}function X(t){const e=document.getElementById("feedbackList");e&&(e.innerHTML="",t.forEach((a,i)=>{console.log(`[Feedback] slide ${i}:`,a);const{name:s,rating:r,descr:n}=a;e.insertAdjacentHTML("beforeend",`
      <div class="swiper-slide feedback-card">
        <div class="feedback-rating">
          ${tt(r)}
        </div>
        <p class="feedback-text">"${n}"</p>
        <p class="feedback-author">— ${s}</p>
      </div>
      `)}))}function tt(t=0){const e=Math.round(t);console.log("[Feedback] renderStars rating:",t,"rounded:",e);let a="";for(let i=1;i<=5;i++)a+=`<span class="star ${i<=e?"active":""}">★</span>`;return a}function et(){b&&b.destroy(!0,!0),b=new q(".feedback-swiper",{modules:[j,Y],slidesPerView:1,loop:!0,grabCursor:!0,navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},pagination:{el:".feedback-pagination",clickable:!0}})}document.addEventListener("DOMContentLoaded",W);console.log("Update version");(function(){const t=document.querySelector(".header-btn"),e=document.querySelector(".header-menu");if(!t||!e)return;const a=t.querySelector("use"),i="./img/sprite.svg",s="#icon-exit",r="#icon-menu-burger";let n=null,c=e.parentNode,l=e.nextSibling;function d(u){if(!a)return;const v=i+u;a.setAttribute("href",v),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",v)}function m(){n=document.createElement("div"),n.className="header-overlay",Object.assign(n.style,{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"#060307",zIndex:"999",overflow:"auto",display:"none"}),document.body.appendChild(n),e.addEventListener("click",u=>{u.target.closest('a[href^="#"]')&&p()})}function w(){n||m(),n.style.display="block",document.body.style.overflow="hidden",n.appendChild(e),e.classList.add("is-open"),t.setAttribute("aria-expanded","true"),d(s),document.addEventListener("keydown",h)}function p(){!n||n.style.display==="none"||(n.style.display="none",document.body.style.overflow="",c.insertBefore(e,l),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),d(r),document.removeEventListener("keydown",h))}function h(u){u.key==="Escape"&&p()}t.addEventListener("click",u=>{u.preventDefault(),t.getAttribute("aria-expanded")==="true"?p():w()})})();const O=16;function st(){const t=document.querySelectorAll(".hero-gallery-track");nt(t),rt(t),at()}function at(){const t=document.querySelector("[data-scroll-to]");t&&t.addEventListener("click",function(){const e=this.dataset.scrollTo,a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}function nt(t){t.forEach(e=>{[...e.querySelectorAll(".hero-gallery-img")].forEach(i=>{const s=i.cloneNode(!0);e.appendChild(s)})})}function rt(t){t.forEach(e=>{dt(e);const a=it(e),i=ot(a);let s=0,r=0;function n(){ct(e,s),ut(e)}function c(){r++,r===i.length&&n()}i.forEach(l=>{const d=l.querySelector("img");lt(d)?(s+=A(l),c()):d.addEventListener("load",()=>{setTimeout(()=>{s+=A(l),c()},10)})}),ft(e)})}function it(t){return[...t.querySelectorAll(".hero-gallery-img")]}function ot(t){return t.slice(0,t.length/2)}function lt(t){return t.complete&&t.naturalHeight!==0}function A(t){return t.offsetHeight+O}function ct(t,e){const a=e-O;t.style.setProperty("--original-height",`${a}px`)}function dt(t){t.style.animationPlayState="paused"}function ut(t){t.style.animationPlayState="running"}function ft(t){if(!pt(t))return;const e=setInterval(()=>{const a=t.style.getPropertyValue("--original-height");a&&(t.style.transform=`translateY(calc(-1 * ${a}))`,clearInterval(e))},50)}function pt(t){return t.closest(".hero-gallery-column-right")}document.addEventListener("DOMContentLoaded",st);const o={overlay:document.getElementById("artist-modal-overlay"),closeBtn:document.getElementById("modal-close"),detailsContainer:document.getElementById("artist-details"),loader:document.getElementById("loader"),artistsList:document.querySelector(".artists-list")};var $;($=o.artistsList)==null||$.addEventListener("click",gt);async function gt(t){const e=t.target.closest(".artist-link");if(!e)return;const a=e.dataset.id;mt(a)}async function mt(t){N(),bt(),vt(),o.detailsContainer.innerHTML="";try{const e=await R(t);if(!e)return;const a=e.tracksList||[],i={};a.forEach(function(r){const n=r.strAlbum||"Other Tracks";i[n]||(i[n]={strAlbum:n,tracks:[]}),i[n].tracks.push(r)});const s=Object.values(i);ht(e,s)}catch(e){console.error("Помилка при завантаженні даних:",e),L("Error loading artist details")}finally{yt()}}function ht(t,e){const{strArtist:a,strArtistThumb:i,intFormedYear:s,intBornYear:r,intDiedYear:n,strCountry:c,strBiographyEN:l,strGender:d,intMembers:m,genres:w}=t;let p="information missing";const h=s||r;h&&(p=`${h} – ${n&&n!=="null"&&n!==""?n:"present"}`);const v=m&&parseInt(m)>1?`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Members</span>
         <p class="artistModal-info-value">${m}</p>
       </div>`:`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Sex</span>
         <p class="artistModal-info-value">${d||"Not specified"}</p>
       </div>`,F=K(e);o.detailsContainer.innerHTML=V({artist:t,yearsActive:p,specificInfoMarkup:v,albumsMarkup:F})}function N(){var t,e;(t=o.overlay)==null||t.classList.toggle("is-hidden"),document.body.style.overflow=(e=o.overlay)!=null&&e.classList.contains("is-hidden")?"":"hidden"}function vt(){var t;(t=o.loader)==null||t.classList.remove("is-hidden")}function yt(){var t;(t=o.loader)==null||t.classList.add("is-hidden")}function y(){N(),kt()}function T(t){t.code==="Escape"&&y()}function x(t){t.target===o.overlay&&y()}function bt(){var t,e;(t=o.closeBtn)==null||t.addEventListener("click",y),(e=o.overlay)==null||e.addEventListener("click",x),window.addEventListener("keyup",T)}function kt(){var t,e;(t=o.closeBtn)==null||t.removeEventListener("click",y),(e=o.overlay)==null||e.removeEventListener("click",x),window.removeEventListener("keyup",T)}document.getElementById("app-loader");console.log("loader");console.log("feedback modal");
//# sourceMappingURL=index.js.map
