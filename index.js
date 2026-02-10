import{i as q,a as S,S as j,N as F,P as Y}from"./assets/vendor-nO3sPJ2J.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const D={position:"topRight",timeout:4e3,theme:"dark",backgroundColor:"#060307",progressBarColor:"#4E75FF"},k=(t,e="error")=>{q[e]({...D,title:e==="error"?"Error":"Success",message:t,backgroundColor:e==="error"?"#1a0505":"#060307"})};S.defaults.baseURL="https://sound-wave.b.goit.study/api";async function E(t,e,a={}){var r,s;try{return(await S({method:t,url:e,...a})).data}catch(i){const n=((s=(r=i.response)==null?void 0:r.data)==null?void 0:s.message)||i.message;return k(n),null}}const I=({page:t=1,limit:e})=>E("get","/artists",{params:{page:t,limit:e}}),R=t=>E("get",`/artists/${t}`),G=t=>E("get","/feedbacks",{params:{limit:t}}),U=new URL("/team-5-project/assets/sprite-D9unHibT.svg",import.meta.url).href,_=document.querySelector(".artists-list");function C(t){const e=t.map(({_id:a,strArtist:r,strArtistThumb:s,genres:i,strBiographyEN:n})=>{const c=i.map(l=>`<span class="artist-genre">${l}</span>`).join("");return`
          <li class="artist-card">
            <img
              src="${s}"
              alt="${r}"
              class="artist-img"
            />
            <div class="artist-genres">
              ${c}
            </div>
            <h4 class="artist-name">${r}</h4>
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
        ${e.tracks.map(a=>{const r=Math.floor(a.intDuration/1e3),s=Math.floor(r/60),i=String(r%60).padStart(2,"0"),n=a.movie?a.movie.split(" ")[0]:null;return`
            <li class="artistModal-track-item">
              <span class="artistModal-track-name">${a.strTrack}</span>
              <span class="artistModal-track-duration">${s}:${i}</span>
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
    </div>`).join("")}function V({artist:t,yearsActive:e,specificInfoMarkup:a,albumsMarkup:r}){const{strArtist:s,strArtistThumb:i,strCountry:n,strBiographyEN:c,genres:l}=t;return`
    <div class="artistModal-content-wrapper">
      <h2 class="artistModal-title">${s}</h2>
      <div class="artistModal-info-wrapper">
        <div class="artistModal-img-wrapper">
          <img src="${i}" class="artistModal-img" alt="${s}">
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
      <div class="artistModal-albums-section">${r}</div>
    </div>`}const f=document.querySelector(".artists-button");let M=1;const B=8;let m=[],L=0;function z(){f.classList.remove("is-hidden")}function P(){f.classList.add("is-hidden")}async function Z(){const t=await I({page:M,limit:B});t&&(L=t.totalArtists,C(t.artists),m=[...m,...t.artists],m.length<L?z():P())}Z();f.addEventListener("click",J);async function J(t){t.preventDefault(),M+=1,f.disabled=!0,f.classList.add("loading");const e=await I({page:M,limit:B});f.classList.remove("loading"),f.disabled=!1,e&&(C(e.artists),m=[...m,...e.artists],m.length>=L&&(P(),k("You have reached the limit","error")))}const Q=3;let b=null;async function W(){const t=await G(Q),e=t==null?void 0:t.data;!Array.isArray(e)||e.length===0||(X(e),et())}function X(t){const e=document.getElementById("feedbackList");e&&(e.innerHTML="",t.forEach((a,r)=>{const{name:s,rating:i,descr:n}=a;e.insertAdjacentHTML("beforeend",`
      <div class="swiper-slide feedback-card">
        <div class="feedback-rating">
          ${tt(i)}
        </div>
        <p class="feedback-text">"${n}"</p>
        <p class="feedback-author">— ${s}</p>
      </div>
      `)}))}function tt(t=0){const e=Math.round(t);let a="";for(let r=1;r<=5;r++)a+=`<span class="star ${r<=e?"active":""}">★</span>`;return a}function et(){b&&b.destroy(!0,!0),b=new j(".feedback-swiper",{modules:[F,Y],slidesPerView:1,loop:!0,grabCursor:!0,navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},pagination:{el:".feedback-pagination",clickable:!0}})}document.addEventListener("DOMContentLoaded",W);(function(){const t=document.querySelector(".header-btn"),e=document.querySelector(".header-menu");if(!t||!e)return;const a=t.querySelector("use"),r="./img/sprite.svg",s="#icon-exit",i="#icon-menu-burger";let n=null,c=e.parentNode,l=e.nextSibling;function d(u){if(!a)return;const v=r+u;a.setAttribute("href",v),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",v)}function g(){n=document.createElement("div"),n.className="header-overlay",Object.assign(n.style,{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"#060307",zIndex:"999",overflow:"auto",display:"none"}),document.body.appendChild(n),e.addEventListener("click",u=>{u.target.closest('a[href^="#"]')&&p()})}function w(){n||g(),n.style.display="block",document.body.style.overflow="hidden",n.appendChild(e),e.classList.add("is-open"),t.setAttribute("aria-expanded","true"),d(s),document.addEventListener("keydown",h)}function p(){!n||n.style.display==="none"||(n.style.display="none",document.body.style.overflow="",c.insertBefore(e,l),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),d(i),document.removeEventListener("keydown",h))}function h(u){u.key==="Escape"&&p()}t.addEventListener("click",u=>{u.preventDefault(),t.getAttribute("aria-expanded")==="true"?p():w()})})();const O=16;function st(){const t=document.querySelectorAll(".hero-gallery-track");at(t),it(t),nt()}function nt(){const t=document.querySelector("[data-scroll-to]");t&&t.addEventListener("click",function(){const e=this.dataset.scrollTo,a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}function at(t){t.forEach(e=>{[...e.querySelectorAll(".hero-gallery-img")].forEach(r=>{const s=r.cloneNode(!0);e.appendChild(s)})})}function it(t){t.forEach(e=>{dt(e);const a=rt(e),r=ot(a);let s=0,i=0;function n(){ct(e,s),ut(e)}function c(){i++,i===r.length&&n()}r.forEach(l=>{const d=l.querySelector("img");lt(d)?(s+=A(l),c()):d.addEventListener("load",()=>{setTimeout(()=>{s+=A(l),c()},10)})}),ft(e)})}function rt(t){return[...t.querySelectorAll(".hero-gallery-img")]}function ot(t){return t.slice(0,t.length/2)}function lt(t){return t.complete&&t.naturalHeight!==0}function A(t){return t.offsetHeight+O}function ct(t,e){const a=e-O;t.style.setProperty("--original-height",`${a}px`)}function dt(t){t.style.animationPlayState="paused"}function ut(t){t.style.animationPlayState="running"}function ft(t){if(!pt(t))return;const e=setInterval(()=>{const a=t.style.getPropertyValue("--original-height");a&&(t.style.transform=`translateY(calc(-1 * ${a}))`,clearInterval(e))},50)}function pt(t){return t.closest(".hero-gallery-column-right")}document.addEventListener("DOMContentLoaded",st);const o={overlay:document.getElementById("artist-modal-overlay"),closeBtn:document.getElementById("modal-close"),detailsContainer:document.getElementById("artist-details"),loader:document.getElementById("loader"),artistsList:document.querySelector(".artists-list")};var $;($=o.artistsList)==null||$.addEventListener("click",mt);async function mt(t){const e=t.target.closest(".artist-link");if(!e)return;const a=e.dataset.id;gt(a)}async function gt(t){N(),bt(),vt(),o.detailsContainer.innerHTML="";try{const e=await R(t);if(!e)return;const a=e.tracksList||[],r={};a.forEach(function(i){const n=i.strAlbum||"Other Tracks";r[n]||(r[n]={strAlbum:n,tracks:[]}),r[n].tracks.push(i)});const s=Object.values(r);ht(e,s)}catch(e){console.error("Помилка при завантаженні даних:",e),k("Error loading artist details")}finally{yt()}}function ht(t,e){const{strArtist:a,strArtistThumb:r,intFormedYear:s,intBornYear:i,intDiedYear:n,strCountry:c,strBiographyEN:l,strGender:d,intMembers:g,genres:w}=t;let p="information missing";const h=s||i;h&&(p=`${h} – ${n&&n!=="null"&&n!==""?n:"present"}`);const v=g&&parseInt(g)>1?`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Members</span>
         <p class="artistModal-info-value">${g}</p>
       </div>`:`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Sex</span>
         <p class="artistModal-info-value">${d||"Not specified"}</p>
       </div>`,H=K(e);o.detailsContainer.innerHTML=V({artist:t,yearsActive:p,specificInfoMarkup:v,albumsMarkup:H})}function N(){var t,e;(t=o.overlay)==null||t.classList.toggle("is-hidden"),document.body.style.overflow=(e=o.overlay)!=null&&e.classList.contains("is-hidden")?"":"hidden"}function vt(){var t;(t=o.loader)==null||t.classList.remove("is-hidden")}function yt(){var t;(t=o.loader)==null||t.classList.add("is-hidden")}function y(){N(),Mt()}function T(t){t.code==="Escape"&&y()}function x(t){t.target===o.overlay&&y()}function bt(){var t,e;(t=o.closeBtn)==null||t.addEventListener("click",y),(e=o.overlay)==null||e.addEventListener("click",x),window.addEventListener("keyup",T)}function Mt(){var t,e;(t=o.closeBtn)==null||t.removeEventListener("click",y),(e=o.overlay)==null||e.removeEventListener("click",x),window.removeEventListener("keyup",T)}document.getElementById("app-loader");
//# sourceMappingURL=index.js.map
