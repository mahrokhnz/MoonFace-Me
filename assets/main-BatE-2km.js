var q=Object.defineProperty;var H=(e,t,c)=>t in e?q(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c;var f=(e,t,c)=>(H(e,typeof t!="symbol"?t+"":t,c),c);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function c(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=c(r);fetch(r.href,n)}})();const W=`
    <ul class="menu">
        <li><a data-i18n-key="home" href="#home"></a></li>
        <li><a data-i18n-key="aboutMe" href="#aboutMe"></a></li>
        <li class="menuItem"><a data-i18n-key="projects" href="#myProjects"></a></li>
        <li><a data-i18n-key="skills" href="#skills"></a></li>
        <li><a data-i18n-key="education" href="#education"></a></li>
    </ul>
`;class A extends HTMLElement{constructor(){super();f(this,"isHeaderMenu",this.getAttribute("isHeaderMenu"));this.innerHTML=W,this.isHeaderMenu&&this.children[0].classList.add("headerMenu")}}customElements.define("menu-component",A);const I=`<svg class="svgContainer" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path class="backWave"
              d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,80C672,85,768,139,864,154.7C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              fill="currentColor"
              fill-opacity="1"></path>
        <path class="frontWave"
              d="M0,128L80,117.3C160,107,320,85,480,106.7C640,128,800,192,960,224C1120,256,1280,256,1360,256L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
              fill="currentColor"
              fill-opacity="1"></path>

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
    </svg>`;class P extends HTMLElement{constructor(){super(),this.innerHTML=I}}customElements.define("svg-component",P);const U=`
    <div class="contactWrapper">
        <a class="iconWrapper" href="https://github.com/mahrokhnz" target="_blank">
            <img alt="Github Icon" src="/icons/square-github.svg">
        </a>
        <a class="iconWrapper" href="https://www.hackerrank.com/mahrokhnz" target="_blank">
            <img alt="Hackerrank Icon" src="/icons/hackerrank.svg">
        </a>
        <a class="iconWrapper" href="https://www.linkedin.com/in/mahrokh-nabizadeh-335326144/" target="_blank">
            <img alt="linkedin Icon" src="/icons/linkedin.svg">
        </a>
        <a class="iconWrapper" href="https://twitter.com/mahrokhnz" target="_blank">
            <img alt="Twitter Icon" src="/icons/twitter.svg">
        </a>
        <a class="iconWrapper" href="https://www.instagram.com/mahrokhnz/" target="_blank">
            <img alt="Instagram Icon" src="/icons/instagram.svg">
        </a>
    </div>
`;class _ extends HTMLElement{constructor(){super(),this.innerHTML=U}}customElements.define("contact-component",_);const j=`
   <div class="card bachelor active">
        <div class="universityWrapper">
            <img alt="University of Tehran"
                 src="/images/logos/universities/University_of_Tehran.svg.png">
            <h2 data-i18n-key="bachelorUniName"></h2>
        </div>
    
        <div class="infoWrapper">
            <h3 data-i18n-key="bachelorUniDegree"></h3>
            <span data-i18n-key="bachelorUniTime"></span>
        </div>
   </div>
`,O=`
   <div class="card master">
        <div class="universityWrapper">
            <img alt="University of Science And Culture"
                 src="/images/logos/universities/University_of_Science_&_Culture.png">
            <h2 data-i18n-key="masterUniName"></h2>
        </div>
    
        <div class="infoWrapper">
            <h3 data-i18n-key="masterUniDegree"></h3>
            <span data-i18n-key="masterUniTime"></span>
        </div>
    </div>
`;class D extends HTMLElement{constructor(){super();f(this,"grade",this.getAttribute("grade"));this.innerHTML=this.grade==="bachelor"?j:O}}customElements.define("education-component",D);const x=document.documentElement,N=document.querySelector(".language"),h=document.querySelector(".languageWrapper"),u=document.querySelector(".en"),d=document.querySelector(".fa"),F="en";let w,k={};document.addEventListener("DOMContentLoaded",()=>{C(F)});async function C(e){if(e===w)return;const t=await Y(e);w=e,k=t,z()}async function Y(e){return(await fetch(`lang/${e}.json`)).json()}function z(){document.querySelectorAll("[data-i18n-key]").forEach(t=>{B(t)})}function B(e){const t=e.getAttribute("data-i18n-key");e.innerText=k[t]}N.addEventListener("click",e=>{e.stopPropagation(),h.classList.toggle("active")});u.addEventListener("click",()=>{u.classList.contains("active")||(d.classList.remove("active"),u.classList.add("active"),C("en"),x.lang="en")});d.addEventListener("click",()=>{d.classList.contains("active")||(u.classList.remove("active"),d.classList.add("active"),C("fa"),x.lang="fa")});document.addEventListener("click",()=>{h.classList.contains("active")&&h.classList.remove("active")});const l=document.getElementById("myCanvas"),i=l.getContext("2d"),G=e=>{if(e>1500)return 250;if(e>1e3)return 200;if(e>500)return 150;if(e>200)return 50},K=e=>{if(e>1e3)return 120;if(e>200)return 90};l.width=window.innerWidth;l.height=window.innerHeight;let y={x:0,y:0};const L=new Array(G(screen.width)).fill(0).map(()=>({x:Math.random()*l.width,y:Math.random()*l.height,r:.9,color:"#808188",sx:.1-Math.random()*.5,sy:.1-Math.random()*.5}));function R(){i.clearRect(0,0,l.width,l.height),L.forEach(e=>{i.fillStyle=e.color,i.beginPath(),i.arc(e.x,e.y,e.r,0,Math.PI*2,!1),i.fill()})}function b(){L.forEach(e=>{e.x+=e.sx,e.y+=e.sy,(e.x<e.r||e.x>l.width-e.r)&&(e.sx=-e.sx),(e.y<e.r||e.y>l.height-e.r)&&(e.sy=-e.sy)}),R(),E(y),requestAnimationFrame(b)}requestAnimationFrame(b);const M=(e,t)=>{const c=Math.abs(e.x-t.x),o=Math.abs(e.y-t.y);return Math.sqrt(Math.pow(c,2)+Math.pow(o,2))},V=e=>{for(let t=0;t<e.length;t++)for(let c=1;c<e.length-1;c++)M(e[t],e[c])<150&&(i.beginPath(),i.moveTo(e[t].x,e[t].y),i.lineTo(e[c].x,e[c].y),i.strokeStyle="rgba(255, 0, 180, .5)",i.stroke(),i.closePath())},E=e=>{const t=[];L.forEach(c=>{M(e,c)<150&&c.y>K(screen.width)&&t.push(c)}),V(t)};l.addEventListener("mousemove",e=>{y={x:e.pageX,y:e.pageY},E(y)});const T=document.documentElement,p=document.body,Z=document.querySelector(".firstColumn"),$=document.querySelector(".secondColumn"),J=document.querySelectorAll(".theme"),g=document.querySelector(".bachelor"),v=document.querySelector(".master"),Q=document.querySelector(".copyWrite"),s=document.querySelector(".hamburgerMenu"),S=document.querySelector(".headerMenu"),X=document.querySelectorAll(".menuItem"),a=[],ee=[{column:1,row:1,title:"Html",count:9},{column:1,row:1,title:"CSS (Stylus/Sass)",count:9},{column:1,row:1,title:"Responsive Web Design",count:9},{column:1,row:1,title:"JavaScript",count:8},{column:1,row:1,title:"Typescript",count:8},{column:1,row:1,title:"React.js",count:8},{column:1,row:1,title:"Graphql",count:8},{column:1,row:1,title:"Vite",count:5},{column:1,row:1,title:"Webpack",count:4},{column:2,row:1,title:"Data Structure",count:8},{column:2,row:1,title:"Git",count:7},{column:2,row:1,title:"Ubuntu",count:4},{column:2,row:1,title:"MySQL",count:5},{column:2,row:1,title:"Node.js",count:3},{column:2,row:1,title:"Express.js",count:2},{column:2,row:1,title:"English",count:9},{column:2,row:1,title:"Deno",count:1},{column:2,row:1,title:"Test",count:2}],te=()=>{for(let e=0;e<a.length;e++)a[e].classList.add("active")},ce=()=>{for(let e=0;e<a.length;e++)a[e].classList.remove("active")},re=(e,t,c=10)=>{let o=0,r=0;for(;o<c;){const n=document.createElement("div");e.appendChild(n),n.classList.add("circle"),r<t&&(a.push(n),r++),o++}};ee.map(e=>{const t=document.createElement("div");e.column===1?Z.appendChild(t):$.appendChild(t),t.classList.add("skill");const c=document.createElement("h3");t.appendChild(c),c.innerHTML=e.title;const o=document.createElement("div");t.appendChild(o),o.classList.add("wrapper"),re(o,e.count)});document.addEventListener("scroll",()=>{const e=window.innerHeight,t=window.scrollY;t>2.5*e&&t<3.5*e?te():ce()});const ne=e=>{T.setAttribute("data-theme",e)},oe=()=>{const e=T.getAttribute("data-theme");ne(e==="dark"?"light":"dark")};J.forEach(e=>{e.addEventListener("click",oe)});v.addEventListener("click",()=>{v.classList.add("active"),g.classList.remove("active")});g.addEventListener("click",()=>{g.classList.add("active"),v.classList.remove("active")});const ie=new Date,le=ie.getFullYear();Q.innerHTML=`© ${le} MAHrokh Tehran, Iran. All rights reserved.`;s.addEventListener("click",()=>{p.style.overflowY="unset",s.classList.toggle("open"),S.classList.toggle("openMenu"),s.classList.contains("open")&&(p.style.overflowY="hidden")});X.forEach(e=>{e.addEventListener("click",()=>{S.classList.remove("openMenu"),s.classList.remove("open"),s.classList.remove("open"),p.style.overflowY="unset"})});
