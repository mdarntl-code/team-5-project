import{i as x,a as $}from"./assets/vendor-CK1Rzdhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=a(s);fetch(s.href,i)}})();const H={position:"topRight",timeout:4e3,theme:"dark",backgroundColor:"#060307",progressBarColor:"#4E75FF"},L=(t,e="error")=>{x[e]({...H,title:e==="error"?"Error":"Success",message:t,backgroundColor:e==="error"?"#1a0505":"#060307"})};$.defaults.baseURL="https://sound-wave.b.goit.study/api";async function w(t,e,a={}){var o,s;try{return(await $({method:t,url:e,...a})).data}catch(i){const n=((s=(o=i.response)==null?void 0:o.data)==null?void 0:s.message)||i.message;return L(n),null}}const I=({page:t=1,limit:e})=>w("get","/artists",{params:{page:t,limit:e}}),j=t=>w("get",`/artists/${t}`),Y="/team-5-project/assets/sprite-Cu7vlAtS.svg",D=document.querySelector(".artists-list");function S(t){const e=t.map(({_id:a,strArtist:o,strArtistThumb:s,genres:i,strBiographyEN:n})=>{const c=i.map(l=>`<span class="artist-genre">${l}</span>`).join("");return`
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
        `}).join("");D.insertAdjacentHTML("beforeend",e)}function F(t){return t.length===0?'<p class="no-data">No tracks found</p>':t.map(e=>`
    <div class="artistModal-album-item">
      <h4 class="artistModal-album-name">${e.strAlbum}</h4>
      <div class="artistModal-track-header">
        <span>Track</span>
        <span>Time</span>
        <span>Link</span>
      </div>
      <ul class="artistModal-track-list">
        ${e.tracks.map(a=>{const o=Math.floor(a.intDuration/1e3),s=Math.floor(o/60),i=String(o%60).padStart(2,"0"),n=a.movie?a.movie.split(" ")[0]:null;return`
            <li class="artistModal-track-item">
              <span class="artistModal-track-name">${a.strTrack}</span>
              <span class="artistModal-track-duration">${s}:${i}</span>
              <span class="artistModal-track-link">
                ${n&&n!=="null"?`
                  <a href="${n}" target="_blank" class="artistModal-yt-link" rel="noopener noreferrer">
                    <svg class="artistModal-yt-icon" width="24" height="24">
                      <use href="${Y}#icon-Youtube"></use> 
                    </svg>
                  </a>`:""}
              </span>
            </li>`}).join("")}
      </ul>
    </div>`).join("")}function G({artist:t,yearsActive:e,specificInfoMarkup:a,albumsMarkup:o}){const{strArtist:s,strArtistThumb:i,strCountry:n,strBiographyEN:c,genres:l}=t;return`
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
      <div class="artistModal-albums-section">${o}</div>
    </div>`}const f=document.querySelector(".artists-button");let b=1;const C=8;let m=[],M=0;function R(){f.classList.remove("is-hidden")}function B(){f.classList.add("is-hidden")}async function _(){const t=await I({page:b,limit:C});t&&(M=t.totalArtists,S(t.artists),m=[...m,...t.artists],m.length<M?R():B())}_();f.addEventListener("click",K);async function K(t){t.preventDefault(),b+=1,f.disabled=!0,f.classList.add("loading");const e=await I({page:b,limit:C});f.classList.remove("loading"),f.disabled=!1,e&&(S(e.artists),m=[...m,...e.artists],m.length>=M&&(B(),L("You have reached the limit","error")))}console.log("feedbacks");(function(){const t=document.querySelector(".header-btn"),e=document.querySelector(".header-menu");if(!t||!e)return;const a=t.querySelector("use"),o="./img/sprite.svg",s="#icon-exit",i="#icon-menu-burger";let n=null,c=e.parentNode,l=e.nextSibling;function d(u){if(!a)return;const v=o+u;a.setAttribute("href",v),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",v)}function g(){n=document.createElement("div"),n.className="header-overlay",Object.assign(n.style,{position:"fixed",top:"0",left:"0",right:"0",bottom:"0",background:"#060307",zIndex:"999",overflow:"auto",display:"none"}),document.body.appendChild(n),e.addEventListener("click",u=>{u.target.closest('a[href^="#"]')&&p()})}function k(){n||g(),n.style.display="block",document.body.style.overflow="hidden",n.appendChild(e),e.classList.add("is-open"),t.setAttribute("aria-expanded","true"),d(s),document.addEventListener("keydown",h)}function p(){!n||n.style.display==="none"||(n.style.display="none",document.body.style.overflow="",c.insertBefore(e,l),e.classList.remove("is-open"),t.setAttribute("aria-expanded","false"),d(i),document.removeEventListener("keydown",h))}function h(u){u.key==="Escape"&&p()}t.addEventListener("click",u=>{u.preventDefault(),t.getAttribute("aria-expanded")==="true"?p():k()})})();const O=16;function U(){const t=document.querySelectorAll(".hero-gallery-track");V(t),Z(t),z()}function z(){const t=document.querySelector("[data-scroll-to]");t&&t.addEventListener("click",function(){const e=this.dataset.scrollTo,a=document.getElementById(e);a&&a.scrollIntoView({behavior:"smooth",block:"start"})})}function V(t){t.forEach(e=>{[...e.querySelectorAll(".hero-gallery-img")].forEach(o=>{const s=o.cloneNode(!0);e.appendChild(s)})})}function Z(t){t.forEach(e=>{tt(e);const a=J(e),o=Q(a);let s=0,i=0;function n(){X(e,s),et(e)}function c(){i++,i===o.length&&n()}o.forEach(l=>{const d=l.querySelector("img");W(d)?(s+=E(l),c()):d.addEventListener("load",()=>{setTimeout(()=>{s+=E(l),c()},10)})}),st(e)})}function J(t){return[...t.querySelectorAll(".hero-gallery-img")]}function Q(t){return t.slice(0,t.length/2)}function W(t){return t.complete&&t.naturalHeight!==0}function E(t){return t.offsetHeight+O}function X(t,e){const a=e-O;t.style.setProperty("--original-height",`${a}px`)}function tt(t){t.style.animationPlayState="paused"}function et(t){t.style.animationPlayState="running"}function st(t){if(!nt(t))return;const e=setInterval(()=>{const a=t.style.getPropertyValue("--original-height");a&&(t.style.transform=`translateY(calc(-1 * ${a}))`,clearInterval(e))},50)}function nt(t){return t.closest(".hero-gallery-column-right")}document.addEventListener("DOMContentLoaded",U);const r={overlay:document.getElementById("artist-modal-overlay"),closeBtn:document.getElementById("modal-close"),detailsContainer:document.getElementById("artist-details"),loader:document.getElementById("loader"),artistsList:document.querySelector(".artists-list")};var A;(A=r.artistsList)==null||A.addEventListener("click",at);async function at(t){const e=t.target.closest(".artist-link");if(!e)return;const a=e.dataset.id;it(a)}async function it(t){P(),ct(),rt(),r.detailsContainer.innerHTML="";try{const e=await j(t);if(!e)return;const a=e.tracksList||[],o={};a.forEach(function(i){const n=i.strAlbum||"Other Tracks";o[n]||(o[n]={strAlbum:n,tracks:[]}),o[n].tracks.push(i)});const s=Object.values(o);ot(e,s)}catch(e){console.error("Помилка при завантаженні даних:",e),L("Error loading artist details")}finally{lt()}}function ot(t,e){const{strArtist:a,strArtistThumb:o,intFormedYear:s,intBornYear:i,intDiedYear:n,strCountry:c,strBiographyEN:l,strGender:d,intMembers:g,genres:k}=t;let p="information missing";const h=s||i;h&&(p=`${h} – ${n&&n!=="null"&&n!==""?n:"present"}`);const v=g&&parseInt(g)>1?`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Members</span>
         <p class="artistModal-info-value">${g}</p>
       </div>`:`<div class="artistModal-info-item">
         <span class="artistModal-info-label">Sex</span>
         <p class="artistModal-info-value">${d||"Not specified"}</p>
       </div>`,q=F(e);r.detailsContainer.innerHTML=G({artist:t,yearsActive:p,specificInfoMarkup:v,albumsMarkup:q})}function P(){var t,e;(t=r.overlay)==null||t.classList.toggle("is-hidden"),document.body.style.overflow=(e=r.overlay)!=null&&e.classList.contains("is-hidden")?"":"hidden"}function rt(){var t;(t=r.loader)==null||t.classList.remove("is-hidden")}function lt(){var t;(t=r.loader)==null||t.classList.add("is-hidden")}function y(){P(),dt()}function N(t){t.code==="Escape"&&y()}function T(t){t.target===r.overlay&&y()}function ct(){var t,e;(t=r.closeBtn)==null||t.addEventListener("click",y),(e=r.overlay)==null||e.addEventListener("click",T),window.addEventListener("keyup",N)}function dt(){var t,e;(t=r.closeBtn)==null||t.removeEventListener("click",y),(e=r.overlay)==null||e.removeEventListener("click",T),window.removeEventListener("keyup",N)}document.getElementById("app-loader");console.log("loader");console.log("feedback modal");
//# sourceMappingURL=index.js.map
