import{i as F,a as C}from"./assets/vendor-CK1Rzdhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const D={position:"topRight",timeout:4e3,theme:"dark",backgroundColor:"#060307",progressBarColor:"#4E75FF"},k=(t,e="error")=>{F[e]({...D,title:e==="error"?"Error":"Success",message:t,backgroundColor:e==="error"?"#1a0505":"#060307"})};C.defaults.baseURL="https://sound-wave.b.goit.study/api";async function B(t,e,n={}){var o,s;try{return(await C({method:t,url:e,...n})).data}catch(i){const a=((s=(o=i.response)==null?void 0:o.data)==null?void 0:s.message)||i.message;return k(a),null}}const O=({page:t=1,limit:e})=>B("get","/artists",{params:{page:t,limit:e}}),R=t=>B("get",`/artists/${t}`),G=new URL("/team-5-project/assets/sprite-Cu7vlAtS.svg",import.meta.url).href,U=document.querySelector(".artists-list");function P(t){const e=t.map(({_id:n,strArtist:o,strArtistThumb:s,genres:i,strBiographyEN:a})=>{const c=i.map(l=>`<span class="artist-genre">${l}</span>`).join("");return`
          <li class="artist-card">
            <img
              src="${s}"
              alt="${o}"
              class="artist-img"
            />
            <div class="artist-genres">
              ${c}
            </div>
            <h4 class="artist-name">${o}</h4>
            <p class="artist-description">
              ${a}
            </p>
            <button
              type="button"
              class="artist-link"
              data-id="${n}"
              >
              Learn more
            </button>
          </li>
        `}).join("");U.insertAdjacentHTML("beforeend",e)}function _(t){return t.length===0?'<p class="no-data">No tracks found</p>':t.map(e=>`
    <div class="artistModal-album-item">
      <h4 class="artistModal-album-name">${e.strAlbum}</h4>
      <div class="artistModal-track-header">
        <span>Track</span>
        <span>Time</span>
        <span>Link</span>
      </div>
      <ul class="artistModal-track-list">
        ${e.tracks.map(n=>{const o=Math.floor(n.intDuration/1e3),s=Math.floor(o/60),i=String(o%60).padStart(2,"0"),a=n.movie?n.movie.split(" ")[0]:null;return`
            <li class="artistModal-track-item">
              <span class="artistModal-track-name">${n.strTrack}</span>
              <span class="artistModal-track-duration">${s}:${i}</span>
              <span class="artistModal-track-link">
                ${a&&a!=="null"?`
                  <a href="${a}" target="_blank" class="artistModal-yt-link" rel="noopener noreferrer">
                    <svg class="artistModal-yt-icon" width="24" height="24">
                      <use href="${G}#icon-Youtube"></use> 
                    </svg>
                  </a>`:""}
              </span>
            </li>`}).join("")}
      </ul>
    </div>`).join("")}function K({artist:t,yearsActive:e,specificInfoMarkup:n,albumsMarkup:o}){const{strArtist:s,strArtistThumb:i,strCountry:a,strBiographyEN:c,genres:l}=t;return`
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
            ${n}      
            <div class="artistModal-info-item">
              <span class="artistModal-info-label">Country</span>
              <p class="artistModal-info-value">${a||"Unknown"}</p>
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
      <div class="artistModal-albums-section">${o}</div>
    </div>`}const f=document.querySelector(".artists-button");let M=1;const T=8;let m=[],L=0;function V(){f.classList.remove("is-hidden")}function N(){f.classList.add("is-hidden")}async function z(){const t=await O({page:M,limit:T});t&&(L=t.totalArtists,P(t.artists),m=[...m,...t.artists],m.length<L?V():N())}z();f.addEventListener("click",Z);async function Z(t){t.preventDefault(),M+=1,f.disabled=!0,f.classList.add("loading");const e=await O({page:M,limit:T});f.classList.remove("loading"),f.disabled=!1,e&&(P(e.artists),m=[...m,...e.artists],m.length>=L&&(N(),k("You have reached the limit","error")))}const w=document.getElementById("feedbackList"),y=document.querySelectorAll(".feedback-pagination .dot");async function J(){return(await(await fetch("https://sound-wave.b.goit.study/api/feedbacks")).json()).data.slice(0,10)}function Q(t){w.innerHTML="",t.forEach(e=>{var a;const n=Math.round(e.rate??5),o=typeof e.comment=="string"&&e.comment.trim()?e.comment:"This user left a feedback about ArtistsHub.",s=((a=e.user)==null?void 0:a.name)||"Anonymous",i=document.createElement("div");i.className="swiper-slide",i.innerHTML=`
      <div class="feedback-card">
        <div class="feedback-stars" data-score="${n}"></div>
        <p class="feedback-text">"${o}"</p>
        <p class="feedback-author">${s}</p>
      </div>
    `,w.appendChild(i)}),W()}function W(){document.querySelectorAll(".feedback-stars").forEach(t=>{$(t).raty({score:t.dataset.score,readOnly:!0,hints:!1,starType:"i"})})}function A(t,e){y.forEach(n=>n.classList.remove("active")),t===0?y[0].classList.add("active"):t===e-1?y[2].classList.add("active"):y[1].classList.add("active")}function X(t){new Swiper(".feedback-swiper",{slidesPerView:1,speed:600,navigation:{nextEl:".feedback-next",prevEl:".feedback-prev"},on:{slideChange(){A(this.activeIndex,t)}}}),A(0,t)}(async function(){const e=await J();Q(e),X(e.length)})();(function(){const t=document.querySelector(".header-btn"),e=document.querySelector(".header-menu");if(!t||!e)return;const n=t.querySelector("use"),o="./img/sprite.svg",s="#icon-exit",i="#icon-menu-burger";let a=null,c=e.parentNode,l=e.nextSibling;function d(u){if(!n)return;const v=o+u;n.setAttribute("href",v),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",v)}function g(){a=document.createElement("div"),a.className="header-overlay",Object.assign(a.style,{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"#060307",zIndex:"999",overflow:"auto",display:"none"}),document.body.appendChild(a),e.addEventListener("click",u=>{u.target.closest('a[href^="#"]')&&p()})}function E(){a||g(),a.style.display="block",document.body.style.overflow="hidden",a.appendChild(e),e.classList.add("is-open"),t.setAttribute("aria-expanded","true"),d(s),document.addEventListener("keydown",h)}function p(){!a||a.style.display==="none"||(a.style.display="none",document.body.style.overflow="",c.insertBefore(e,l),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),d(i),document.removeEventListener("keydown",h))}function h(u){u.key==="Escape"&&p()}t.addEventListener("click",u=>{u.preventDefault(),t.getAttribute("aria-expanded")==="true"?p():E()})})();const x=16;function tt(){const t=document.querySelectorAll(".hero-gallery-track");st(t),at(t),et()}function et(){const t=document.querySelector("[data-scroll-to]");t&&t.addEventListener("click",function(){const e=this.dataset.scrollTo,n=document.getElementById(e);n&&n.scrollIntoView({behavior:"smooth",block:"start"})})}function st(t){t.forEach(e=>{[...e.querySelectorAll(".hero-gallery-img")].forEach(o=>{const s=o.cloneNode(!0);e.appendChild(s)})})}function at(t){t.forEach(e=>{lt(e);const n=nt(e),o=it(n);let s=0,i=0;function a(){rt(e,s),ct(e)}function c(){i++,i===o.length&&a()}o.forEach(l=>{const d=l.querySelector("img");ot(d)?(s+=S(l),c()):d.addEventListener("load",()=>{setTimeout(()=>{s+=S(l),c()},10)})}),dt(e)})}function nt(t){return[...t.querySelectorAll(".hero-gallery-img")]}function it(t){return t.slice(0,t.length/2)}function ot(t){return t.complete&&t.naturalHeight!==0}function S(t){return t.offsetHeight+x}function rt(t,e){const n=e-x;t.style.setProperty("--original-height",`${n}px`)}function lt(t){t.style.animationPlayState="paused"}function ct(t){t.style.animationPlayState="running"}function dt(t){if(!ut(t))return;const e=setInterval(()=>{const n=t.style.getPropertyValue("--original-height");n&&(t.style.transform=`translateY(calc(-1 * ${n}))`,clearInterval(e))},50)}function ut(t){return t.closest(".hero-gallery-column-right")}document.addEventListener("DOMContentLoaded",tt);const r={overlay:document.getElementById("artist-modal-overlay"),closeBtn:document.getElementById("modal-close"),detailsContainer:document.getElementById("artist-details"),loader:document.getElementById("loader"),artistsList:document.querySelector(".artists-list")};var I;(I=r.artistsList)==null||I.addEventListener("click",ft);async function ft(t){const e=t.target.closest(".artist-link");if(!e)return;const n=e.dataset.id;pt(n)}async function pt(t){q(),vt(),gt(),r.detailsContainer.innerHTML="";try{const e=await R(t);if(!e)return;const n=e.tracksList||[],o={};n.forEach(function(i){const a=i.strAlbum||"Other Tracks";o[a]||(o[a]={strAlbum:a,tracks:[]}),o[a].tracks.push(i)});const s=Object.values(o);mt(e,s)}catch(e){console.error("Помилка при завантаженні даних:",e),k("Error loading artist details")}finally{ht()}}function mt(t,e){const{strArtist:n,strArtistThumb:o,intFormedYear:s,intBornYear:i,intDiedYear:a,strCountry:c,strBiographyEN:l,strGender:d,intMembers:g,genres:E}=t;let p="information missing";const h=s||i;h&&(p=`${h} – ${a&&a!=="null"&&a!==""?a:"present"}`);const v=g&&parseInt(g)>1?`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Members</span>
         <p class="artistModal-info-value">${g}</p>
       </div>`:`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Sex</span>
         <p class="artistModal-info-value">${d||"Not specified"}</p>
       </div>`,Y=_(e);r.detailsContainer.innerHTML=K({artist:t,yearsActive:p,specificInfoMarkup:v,albumsMarkup:Y})}function q(){var t,e;(t=r.overlay)==null||t.classList.toggle("is-hidden"),document.body.style.overflow=(e=r.overlay)!=null&&e.classList.contains("is-hidden")?"":"hidden"}function gt(){var t;(t=r.loader)==null||t.classList.remove("is-hidden")}function ht(){var t;(t=r.loader)==null||t.classList.add("is-hidden")}function b(){q(),yt()}function H(t){t.code==="Escape"&&b()}function j(t){t.target===r.overlay&&b()}function vt(){var t,e;(t=r.closeBtn)==null||t.addEventListener("click",b),(e=r.overlay)==null||e.addEventListener("click",j),window.addEventListener("keyup",H)}function yt(){var t,e;(t=r.closeBtn)==null||t.removeEventListener("click",b),(e=r.overlay)==null||e.removeEventListener("click",j),window.removeEventListener("keyup",H)}document.getElementById("app-loader");console.log("loader");console.log("feedback modal");
//# sourceMappingURL=index.js.map
