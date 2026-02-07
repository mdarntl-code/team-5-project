import{i as L,a as u}from"./assets/vendor-CK1Rzdhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();console.log("About section logic loaded");const v={position:"topRight",timeout:4e3,theme:"dark",backgroundColor:"#060307",progressBarColor:"#4E75FF"},f=(o,t="error")=>{L[t]({...v,title:t==="error"?"Error":"Success",message:o,backgroundColor:t==="error"?"#1a0505":"#060307"})};u.defaults.baseURL="https://sound-wave.b.goit.study/api";async function w(o,t,n={}){var r,e;try{return(await u({method:o,url:t,...n})).data}catch(s){const a=((e=(r=s.response)==null?void 0:r.data)==null?void 0:e.message)||s.message;return f(a),null}}const g=({page:o=1,limit:t})=>w("get","/artists",{params:{page:o,limit:t}}),A=document.querySelector(".artists-list");function p(o){const t=o.map(({_id:n,strArtist:r,strArtistThumb:e,genres:s,strBiographyEN:a})=>{const b=s.map(y=>`<span class="artist-genre">${y}</span>`).join("");return`
          <li class="artist-card">
            <img
              src="${e}"
              alt="${r}"
              class="artist-img"
            />
            <div class="artist-genres">
              ${b}
            </div>
            <h4 class="artist-name">${r}</h4>
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
        `}).join("");A.insertAdjacentHTML("beforeend",t)}const c=document.querySelector(".artists-button");let l=1;const m=8;let i=[],d=0;function M(){c.classList.remove("is-hidden")}function h(){c.classList.add("is-hidden")}async function $(){const o=await g({page:l,limit:m});o&&(d=o.totalArtists,p(o.artists),i=[...i,...o.artists],i.length<d?M():h())}$();c.addEventListener("click",O);async function O(o){o.preventDefault(),l+=1,c.disabled=!0;const t=await g({page:l,limit:m});c.disabled=!1,t&&(p(t.artists),i=[...i,...t.artists],i.length>=d&&(h(),f("You have reached the limit","error")))}console.log("feedbacks");console.log("footer");console.log("header");console.log("hero");console.log("modal");console.log("loader");console.log("feedback modal");
//# sourceMappingURL=index.js.map
