import{i as A,a as h}from"./assets/vendor-CK1Rzdhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();console.log("About section logic loaded");const I={position:"topRight",timeout:4e3,theme:"dark",backgroundColor:"#060307",progressBarColor:"#4E75FF"},p=(t,e="error")=>{A[e]({...I,title:e==="error"?"Error":"Success",message:t,backgroundColor:e==="error"?"#1a0505":"#060307"})};h.defaults.baseURL="https://sound-wave.b.goit.study/api";async function E(t,e,r={}){var s,o;try{return(await h({method:t,url:e,...r})).data}catch(n){const i=((o=(s=n.response)==null?void 0:s.data)==null?void 0:o.message)||n.message;return p(i),null}}const y=({page:t=1,limit:e})=>E("get","/artists",{params:{page:t,limit:e}}),S=document.querySelector(".artists-list");function L(t){const e=t.map(({_id:r,strArtist:s,strArtistThumb:o,genres:n,strBiographyEN:i})=>{const u=n.map(l=>`<span class="artist-genre">${l}</span>`).join("");return`
          <li class="artist-card">
            <img
              src="${o}"
              alt="${s}"
              class="artist-img"
            />
            <div class="artist-genres">
              ${u}
            </div>
            <h4 class="artist-name">${s}</h4>
            <p class="artist-description">
              ${i}
            </p>
            <button
              type="button"
              class="artist-link"
              data-id="${r}"
              >
              Learn more
            </button>
          </li>
        `}).join("");S.insertAdjacentHTML("beforeend",e)}const c=document.querySelector(".artists-button");let d=1;const b=8;let a=[],g=0;function H(){c.classList.remove("is-hidden")}function v(){c.classList.add("is-hidden")}async function q(){const t=await y({page:d,limit:b});t&&(g=t.totalArtists,L(t.artists),a=[...a,...t.artists],a.length<g?H():v())}q();c.addEventListener("click",C);async function C(t){t.preventDefault(),d+=1,c.disabled=!0;const e=await y({page:d,limit:b});c.disabled=!1,e&&(L(e.artists),a=[...a,...e.artists],a.length>=g&&(v(),p("You have reached the limit","error")))}console.log("feedbacks");console.log("footer");console.log("header");const P=16;function $(){const t=document.querySelectorAll(".hero-gallery-track");M(t),O(t),w()}function w(){const t=document.querySelector("[data-scroll-to]");t&&t.addEventListener("click",function(){const e=this.dataset.scrollTo,r=document.getElementById(e);r&&r.scrollIntoView({behavior:"smooth",block:"start"})})}function M(t){t.forEach(e=>{[...e.querySelectorAll(".hero-gallery-img")].forEach(s=>{const o=s.cloneNode(!0);e.appendChild(o)})})}function O(t){t.forEach(e=>{j(e);const r=B(e),s=T(r);let o=0,n=0;function i(){R(e,o),F(e)}function u(){n++,n===s.length&&i()}s.forEach(l=>{const f=l.querySelector("img");N(f)?(o+=m(l),u()):f.addEventListener("load",()=>{setTimeout(()=>{o+=m(l),u()},10)})}),k(e)})}function B(t){return[...t.querySelectorAll(".hero-gallery-img")]}function T(t){return t.slice(0,t.length/2)}function N(t){return t.complete&&t.naturalHeight!==0}function m(t){return t.offsetHeight+P}function R(t,e){const r=e-P;t.style.setProperty("--original-height",`${r}px`)}function j(t){t.style.animationPlayState="paused"}function F(t){t.style.animationPlayState="running"}function k(t){if(!x(t))return;const e=setInterval(()=>{const r=t.style.getPropertyValue("--original-height");r&&(t.style.transform=`translateY(calc(-1 * ${r}))`,clearInterval(e))},50)}function x(t){return t.closest(".hero-gallery-column-right")}document.addEventListener("DOMContentLoaded",$);console.log("modal");console.log("loader");console.log("feedback modal");
//# sourceMappingURL=index.js.map
