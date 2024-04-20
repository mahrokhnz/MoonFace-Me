var A=Object.defineProperty;var P=(c,e,r)=>e in c?A(c,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):c[e]=r;var p=(c,e,r)=>(P(c,typeof e!="symbol"?e+"":e,r),r);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))o(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const f of t.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&o(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(l){if(l.ep)return;l.ep=!0;const t=r(l);fetch(l.href,t)}})();const L=document.documentElement,T=document.querySelector(".language"),y=document.querySelector(".languageWrapper"),a=document.querySelector(".en"),d=document.querySelector(".fa"),H="en";let w,E={};document.addEventListener("DOMContentLoaded",()=>{v(H)});async function v(c){if(c===w)return;const e=await O(c);w=c,E=e,j()}async function O(c){return(await fetch(`lang/${c}.json`)).json()}function j(){document.querySelectorAll("[data-i18n-key]").forEach(e=>{F(e)})}function F(c){const e=c.getAttribute("data-i18n-key");c.innerText=E[e]}T.addEventListener("click",c=>{c.stopPropagation(),y.classList.toggle("active")});a.addEventListener("click",()=>{a.classList.contains("active")||(d.classList.remove("active"),a.classList.add("active"),v("en"),L.lang="en")});d.addEventListener("click",()=>{d.classList.contains("active")||(a.classList.remove("active"),d.classList.add("active"),v("fa"),L.lang="fa")});document.addEventListener("click",()=>{y.classList.contains("active")&&y.classList.remove("active")});const I=`<svg class="svgContainer" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="180" fill="currentColor" r="5"/>
        <circle cx="70" cy="180" fill="currentColor" r="5"/>
        <circle cx="90" cy="180" fill="currentColor" r="5"/>
        <circle cx="110" cy="180" fill="currentColor" r="5"/>
        <circle cx="130" cy="180" fill="currentColor" r="5"/>

        <circle cx="50" cy="200" fill="currentColor" r="5"/>
        <circle cx="70" cy="200" fill="currentColor" r="5"/>
        <circle cx="90" cy="200" fill="currentColor" r="5"/>
        <circle cx="110" cy="200" fill="currentColor" r="5"/>
        <circle cx="130" cy="200" fill="currentColor" r="5"/>

        <circle cx="50" cy="220" fill="currentColor" r="5"/>
        <circle cx="70" cy="220" fill="currentColor" r="5"/>
        <circle cx="90" cy="220" fill="currentColor" r="5"/>
        <circle cx="110" cy="220" fill="currentColor" r="5"/>
        <circle cx="130" cy="220" fill="currentColor" r="5"/>

        <circle cx="50" cy="240" fill="currentColor" r="5"/>
        <circle cx="70" cy="240" fill="currentColor" r="5"/>
        <circle cx="90" cy="240" fill="currentColor" r="5"/>
        <circle cx="110" cy="240" fill="currentColor" r="5"/>
        <circle cx="130" cy="240" fill="currentColor" r="5"/>

        <circle cx="50" cy="260" fill="currentColor" r="5"/>
        <circle cx="70" cy="260" fill="currentColor" r="5"/>
        <circle cx="90" cy="260" fill="currentColor" r="5"/>
        <circle cx="110" cy="260" fill="currentColor" r="5"/>
        <circle cx="130" cy="260" fill="currentColor" r="5"/>

        <circle cx="50" cy="280" fill="currentColor" r="5"/>
        <circle cx="70" cy="280" fill="currentColor" r="5"/>
        <circle cx="90" cy="280" fill="currentColor" r="5"/>
        <circle cx="110" cy="280" fill="currentColor" r="5"/>
        <circle cx="130" cy="280" fill="currentColor" r="5"/>

        <circle cx="50" cy="300" fill="currentColor" r="5"/>
        <circle cx="70" cy="300" fill="currentColor" r="5"/>
        <circle cx="90" cy="300" fill="currentColor" r="5"/>
        <circle cx="110" cy="300" fill="currentColor" r="5"/>
        <circle cx="130" cy="300" fill="currentColor" r="5"/>
    </svg>`,Y=`<svg class="svgContainer" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
                <circle cx="900" cy="90" fill="currentColor" r="5"/>
                <circle cx="920" cy="90" fill="currentColor" r="5"/>
                <circle cx="940" cy="90" fill="currentColor" r="5"/>
                <circle cx="960" cy="90" fill="currentColor" r="5"/>
                <circle cx="980" cy="90" fill="currentColor" r="5"/>
                <circle cx="1000" cy="90" fill="currentColor" r="5"/>
                <circle cx="1020" cy="90" fill="currentColor" r="5"/>

                <circle cx="900" cy="110" fill="currentColor" r="5"/>
                <circle cx="920" cy="110" fill="currentColor" r="5"/>
                <circle cx="940" cy="110" fill="currentColor" r="5"/>
                <circle cx="960" cy="110" fill="currentColor" r="5"/>
                <circle cx="980" cy="110" fill="currentColor" r="5"/>
                <circle cx="1000" cy="110" fill="currentColor" r="5"/>
                <circle cx="1020" cy="110" fill="currentColor" r="5"/>

                <circle cx="900" cy="130" fill="currentColor" r="5"/>
                <circle cx="920" cy="130" fill="currentColor" r="5"/>
                <circle cx="940" cy="130" fill="currentColor" r="5"/>
                <circle cx="960" cy="130" fill="currentColor" r="5"/>
                <circle cx="980" cy="130" fill="currentColor" r="5"/>
                <circle cx="1000" cy="130" fill="currentColor" r="5"/>
                <circle cx="1020" cy="130" fill="currentColor" r="5"/>

                <circle cx="900" cy="150" fill="currentColor" r="5"/>
                <circle cx="920" cy="150" fill="currentColor" r="5"/>
                <circle cx="940" cy="150" fill="currentColor" r="5"/>
                <circle cx="960" cy="150" fill="currentColor" r="5"/>
                <circle cx="980" cy="150" fill="currentColor" r="5"/>
                <circle cx="1000" cy="150" fill="currentColor" r="5"/>
                <circle cx="1020" cy="150" fill="currentColor" r="5"/>

                <circle cx="900" cy="170" fill="currentColor" r="5"/>
                <circle cx="920" cy="170" fill="currentColor" r="5"/>
                <circle cx="940" cy="170" fill="currentColor" r="5"/>
                <circle cx="960" cy="170" fill="currentColor" r="5"/>
                <circle cx="980" cy="170" fill="currentColor" r="5"/>
                <circle cx="1000" cy="170" fill="currentColor" r="5"/>
                <circle cx="1020" cy="170" fill="currentColor" r="5"/>
            </svg>
`;class B extends HTMLElement{constructor(){super();p(this,"direction",this.getAttribute("direction"));this.innerHTML=this.direction==="vertical"?I:Y}}customElements.define("svg-path",B);const i=document.getElementById("myCanvas"),n=i.getContext("2d"),D=c=>{if(c>1500)return 250;if(c>1e3)return 200;if(c>500)return 150;if(c>200)return 50},N=c=>{if(c>1e3)return 120;if(c>200)return 90};i.width=window.innerWidth;i.height=window.innerHeight;let m={x:0,y:0};const g=new Array(D(screen.width)).fill(0).map(()=>({x:Math.random()*i.width,y:Math.random()*i.height,r:.9,color:"#808188",sx:.1-Math.random()*.5,sy:.1-Math.random()*.5}));function W(){n.clearRect(0,0,i.width,i.height),g.forEach(c=>{n.fillStyle=c.color,n.beginPath(),n.arc(c.x,c.y,c.r,0,Math.PI*2,!1),n.fill()})}function M(){g.forEach(c=>{c.x+=c.sx,c.y+=c.sy,(c.x<c.r||c.x>i.width-c.r)&&(c.sx=-c.sx),(c.y<c.r||c.y>i.height-c.r)&&(c.sy=-c.sy)}),W(),b(m),requestAnimationFrame(M)}requestAnimationFrame(M);const S=(c,e)=>{const r=Math.abs(c.x-e.x),o=Math.abs(c.y-e.y);return Math.sqrt(Math.pow(r,2)+Math.pow(o,2))},K=c=>{for(let e=0;e<c.length;e++)for(let r=1;r<c.length-1;r++)S(c[e],c[r])<150&&(n.beginPath(),n.moveTo(c[e].x,c[e].y),n.lineTo(c[r].x,c[r].y),n.strokeStyle="rgba(255, 0, 180, .5)",n.stroke(),n.closePath())},b=c=>{const e=[];g.forEach(r=>{S(c,r)<150&&r.y>N(screen.width)&&e.push(r)}),K(e)};i.addEventListener("mousemove",c=>{m={x:c.pageX,y:c.pageY},b(m)});const q=document.documentElement,x=document.body,R=document.querySelector(".firstColumn"),V=document.querySelector(".secondColumn"),$=document.querySelectorAll(".theme"),h=document.querySelector(".bachelor"),C=document.querySelector(".master"),z=document.querySelector(".copyWrite"),s=document.querySelector(".hamburgerMenu"),k=document.querySelector(".headerMenu"),G=document.querySelectorAll(".menuItem"),u=[],J=[{column:1,row:1,title:"Html",count:9},{column:1,row:1,title:"CSS (Stylus/Sass)",count:9},{column:1,row:1,title:"Responsive Web Design",count:10},{column:1,row:1,title:"JavaScript",count:8},{column:1,row:1,title:"React.js",count:7},{column:1,row:1,title:"Git",count:7},{column:1,row:1,title:"Ubuntu",count:4},{column:1,row:1,title:"English",count:9},{column:2,row:1,title:"Data Structure",count:8},{column:2,row:1,title:"MySQL",count:5},{column:2,row:1,title:"Node.js",count:3},{column:2,row:1,title:"Express.js",count:2},{column:2,row:1,title:"Deno",count:1}],Q=()=>{for(let c=0;c<u.length;c++)u[c].classList.add("active")},U=()=>{for(let c=0;c<u.length;c++)u[c].classList.remove("active")},X=(c,e,r=10)=>{let o=0,l=0;for(;o<r;){const t=document.createElement("div");c.appendChild(t),t.classList.add("circle"),l<e&&(u.push(t),l++),o++}};J.map(c=>{const e=document.createElement("div");c.column===1?R.appendChild(e):V.appendChild(e),e.classList.add("skill");const r=document.createElement("h3");e.appendChild(r),r.innerHTML=c.title;const o=document.createElement("div");e.appendChild(o),o.classList.add("wrapper"),X(o,c.count)});document.addEventListener("scroll",()=>{const c=window.innerHeight,e=window.scrollY;e>2.5*c&&e<3.5*c?Q():U()});const Z=c=>{q.setAttribute("data-theme",c)},_=()=>{const c=q.getAttribute("data-theme");Z(c==="dark"?"light":"dark")};$.forEach(c=>{c.addEventListener("click",_)});C.addEventListener("click",()=>{C.classList.add("active"),h.classList.remove("active")});h.addEventListener("click",()=>{h.classList.add("active"),C.classList.remove("active")});const cc=new Date,ec=cc.getFullYear();z.innerHTML=`© ${ec} MAHrokh Tehran, Iran. All rights reserved.`;s.addEventListener("click",()=>{x.style.overflowY="unset",s.classList.toggle("open"),k.classList.toggle("openMenu"),s.classList.contains("open")&&(x.style.overflowY="hidden")});G.forEach(c=>{c.addEventListener("click",()=>{k.classList.remove("openMenu"),s.classList.remove("open"),s.classList.remove("open"),x.style.overflowY="unset"})});
