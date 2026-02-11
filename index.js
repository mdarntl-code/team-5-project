import{i as q,a as $,S as j,N as F,P as D}from"./assets/vendor-nO3sPJ2J.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function a(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=a(n);fetch(n.href,s)}})();const Y={position:"topRight",timeout:4e3,theme:"dark",backgroundColor:"#060307",progressBarColor:"#4E75FF"},k=(t,e="error")=>{q[e]({...Y,title:e==="error"?"Error":"Success",message:t,backgroundColor:e==="error"?"#1a0505":"#060307"})};$.defaults.baseURL="https://sound-wave.b.goit.study/api";async function E(t,e,a={}){var i,n;try{return(await $({method:t,url:e,...a})).data}catch(s){const r=((n=(i=s.response)==null?void 0:i.data)==null?void 0:n.message)||s.message;return k(r),null}}const S=({page:t=1,limit:e})=>E("get","/artists",{params:{page:t,limit:e}}),R=t=>E("get",`/artists/${t}`),G=t=>E("get","/feedbacks",{params:{limit:t}}),U=new URL("/team-5-project/assets/sprite-D9unHibT.svg",import.meta.url).href,_=document.querySelector(".artists-list");function I(t){const e=t.map(({_id:a,strArtist:i,strArtistThumb:n,genres:s,strBiographyEN:r})=>{const d=s.map(l=>`<span class="artist-genre">${l}</span>`).join("");return`
          <li class="artist-card">
            <img
              src="${n}"
              alt="${i}"
              class="artist-img"
            />
            <div class="artist-genres">
              ${d}
            </div>
            <h4 class="artist-name">${i}</h4>
            <p class="artist-description">
              ${r}
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
        ${e.tracks.map(a=>{const i=Math.floor(a.intDuration/1e3),n=Math.floor(i/60),s=String(i%60).padStart(2,"0"),r=a.movie?a.movie.split(" ")[0]:null;return`
            <li class="artistModal-track-item">
              <span class="artistModal-track-name">${a.strTrack}</span>
              <span class="artistModal-track-duration">${n}:${s}</span>
              <span class="artistModal-track-link">
                ${r&&r!=="null"?`
                  <a href="${r}" target="_blank" class="artistModal-yt-link" rel="noopener noreferrer">
                    <svg class="artistModal-yt-icon" width="24" height="24">
                      <use href="${U}#icon-Youtube"></use> 
                    </svg>
                  </a>`:""}
              </span>
            </li>`}).join("")}
      </ul>
    </div>`).join("")}function V({artist:t,yearsActive:e,specificInfoMarkup:a,albumsMarkup:i}){const{strArtist:n,strArtistThumb:s,strCountry:r,strBiographyEN:d,genres:l}=t;return`
    <div class="artistModal-content-wrapper">
      <h2 class="artistModal-title">${n}</h2>
      <div class="artistModal-info-wrapper">
        <div class="artistModal-img-wrapper">
          <img src="${s}" class="artistModal-img" alt="${n}">
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
              <p class="artistModal-info-value">${r||"Unknown"}</p>
            </div>
          </div>
          <div class="artistModal-desc">
            <span class="artistModal-info-label">Biography</span>
            <p>${d||"Biography not available"}</p>
          </div>
          <div class="artistModal-genres">
            ${(l||[]).map(u=>`<span class="artist-genre">${u}</span>`).join("")}
          </div>
        </div> 
      </div>
      <h2 class="artistModal-albums-title">Albums</h2>
      <div class="artistModal-albums-section">${i}</div>
    </div>`}const f=document.querySelector(".artists-button");let M=1;const C=8;let p=[],L=0;function z(){f.classList.remove("is-hidden")}function B(){f.classList.add("is-hidden")}async function Z(){const t=await S({page:M,limit:C});t&&(L=t.totalArtists,I(t.artists),p=[...p,...t.artists],p.length<L?z():B())}Z();f.addEventListener("click",J);async function J(t){t.preventDefault(),M+=1,f.disabled=!0,f.classList.add("loading");const e=await S({page:M,limit:C});f.classList.remove("loading"),f.disabled=!1,e&&(I(e.artists),p=[...p,...e.artists],p.length>=L&&(B(),k("You have reached the limit","error")))}const Q=3;let b=null;async function W(){const t=await G(Q),e=t==null?void 0:t.data;!Array.isArray(e)||e.length===0||(X(e),et())}function X(t){const e=document.getElementById("feedbackList");e&&(e.innerHTML="",t.forEach((a,i)=>{const{name:n,rating:s,descr:r}=a;e.insertAdjacentHTML("beforeend",`
      <div class="swiper-slide feedback-card">
        <div class="feedback-rating">
          ${tt(s)}
        </div>
        <p class="feedback-text">"${r}"</p>
        <p class="feedback-author">— ${n}</p>
      </div>
      `)}))}function tt(t=0){const e=Math.round(t);let a="";for(let i=1;i<=5;i++)a+=`<span class="star ${i<=e?"active":""}">★</span>`;return a}function et(){b&&b.destroy(!0,!0),b=new j(".feedback-swiper",{modules:[F,D],slidesPerView:1,loop:!0,grabCursor:!0,navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},pagination:{el:".feedback-pagination",clickable:!0}})}document.addEventListener("DOMContentLoaded",W);const st=new URL("/team-5-project/assets/sprite-D9unHibT.svg",import.meta.url).href;(function(){const t=document.querySelector(".header-btn"),e=document.querySelector(".header-menu");if(!t||!e)return;const a=t.querySelector("use"),i="#icon-exit",n="#icon-menu-burger";let s=null,r=e.parentNode,d=e.nextSibling;function l(c){if(!a)return;const v=st+c;a.setAttribute("href",v),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",v)}function u(){s=document.createElement("div"),s.className="header-overlay",Object.assign(s.style,{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"#060307",zIndex:"999",overflow:"auto",display:"none"}),document.body.appendChild(s),e.addEventListener("click",c=>{c.target.closest('a[href^="#"]')&&h()})}function m(){s||u(),s.style.display="block",document.body.style.overflow="hidden",s.appendChild(e),e.classList.add("is-open"),t.setAttribute("aria-expanded","true"),l(i),document.addEventListener("keydown",g)}function h(){!s||s.style.display==="none"||(s.style.display="none",document.body.style.overflow="",r.insertBefore(e,d),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),l(n),document.removeEventListener("keydown",g))}function g(c){c.key==="Escape"&&h()}t.addEventListener("click",c=>{c.preventDefault(),t.getAttribute("aria-expanded")==="true"?h():m()})})();const P=16;function nt(){const t=document.querySelectorAll(".hero-gallery-track");it(t),rt(t),at()}function at(){const t=document.querySelector("[data-scroll-to]");t&&t.addEventListener("click",function(){const e=this.dataset.scrollTo,a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}function it(t){t.forEach(e=>{[...e.querySelectorAll(".hero-gallery-img")].forEach(i=>{const n=i.cloneNode(!0);e.appendChild(n)})})}function rt(t){t.forEach(e=>{ut(e);const a=ot(e),i=lt(a);let n=0,s=0;function r(){dt(e,n),ft(e)}function d(){s++,s===i.length&&r()}i.forEach(l=>{const u=l.querySelector("img");ct(u)?(n+=w(l),d()):u.addEventListener("load",()=>{setTimeout(()=>{n+=w(l),d()},10)})}),pt(e)})}function ot(t){return[...t.querySelectorAll(".hero-gallery-img")]}function lt(t){return t.slice(0,t.length/2)}function ct(t){return t.complete&&t.naturalHeight!==0}function w(t){return t.offsetHeight+P}function dt(t,e){const a=e-P;t.style.setProperty("--original-height",`${a}px`)}function ut(t){t.style.animationPlayState="paused"}function ft(t){t.style.animationPlayState="running"}function pt(t){if(!mt(t))return;const e=setInterval(()=>{const a=t.style.getPropertyValue("--original-height");a&&(t.style.transform=`translateY(calc(-1 * ${a}))`,clearInterval(e))},50)}function mt(t){return t.closest(".hero-gallery-column-right")}document.addEventListener("DOMContentLoaded",nt);const o={overlay:document.getElementById("artist-modal-overlay"),closeBtn:document.getElementById("modal-close"),detailsContainer:document.getElementById("artist-details"),loader:document.getElementById("loader"),artistsList:document.querySelector(".artists-list")};var A;(A=o.artistsList)==null||A.addEventListener("click",gt);async function gt(t){const e=t.target.closest(".artist-link");if(!e)return;const a=e.dataset.id;ht(a)}async function ht(t){O(),Mt(),yt(),o.detailsContainer.innerHTML="";try{const e=await R(t);if(!e)return;const a=e.tracksList||[],i={};a.forEach(function(s){const r=s.strAlbum||"Other Tracks";i[r]||(i[r]={strAlbum:r,tracks:[]}),i[r].tracks.push(s)});const n=Object.values(i);vt(e,n)}catch(e){console.error("Помилка при завантаженні даних:",e),k("Error loading artist details")}finally{bt()}}function vt(t,e){const{strArtist:a,strArtistThumb:i,intFormedYear:n,intBornYear:s,intDiedYear:r,strCountry:d,strBiographyEN:l,strGender:u,intMembers:m,genres:h}=t;let g="information missing";const c=n||s;c&&(g=`${c} – ${r&&r!=="null"&&r!==""?r:"present"}`);const x=m&&parseInt(m)>1?`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Members</span>
         <p class="artistModal-info-value">${m}</p>
       </div>`:`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Sex</span>
         <p class="artistModal-info-value">${u||"Not specified"}</p>
       </div>`,H=K(e);o.detailsContainer.innerHTML=V({artist:t,yearsActive:g,specificInfoMarkup:x,albumsMarkup:H})}function O(){var t,e;(t=o.overlay)==null||t.classList.toggle("is-hidden"),document.body.style.overflow=(e=o.overlay)!=null&&e.classList.contains("is-hidden")?"":"hidden"}function yt(){var t;(t=o.loader)==null||t.classList.remove("is-hidden")}function bt(){var t;(t=o.loader)==null||t.classList.add("is-hidden")}function y(){O(),Lt()}function T(t){t.code==="Escape"&&y()}function N(t){t.target===o.overlay&&y()}function Mt(){var t,e;(t=o.closeBtn)==null||t.addEventListener("click",y),(e=o.overlay)==null||e.addEventListener("click",N),window.addEventListener("keydown",T)}function Lt(){var t,e;(t=o.closeBtn)==null||t.removeEventListener("click",y),(e=o.overlay)==null||e.removeEventListener("click",N),window.removeEventListener("keydown",T)}document.getElementById("app-loader");
//# sourceMappingURL=index.js.map
