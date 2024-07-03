var S=Object.defineProperty;var q=(e,t,c)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:c}):e[t]=c;var d=(e,t,c)=>(q(e,typeof t!="symbol"?t+"":t,c),c);import"./modulepreload-polyfill-B5Qt9EMX.js";const H=`
    <ul class="menu">
        <li><a data-i18n-key="home" href="#home"></a></li>
        <li><a data-i18n-key="aboutMe" href="#aboutMe"></a></li>
        <li class="menuItem"><a data-i18n-key="projects" href="#myProjects"></a></li>
        <li><a data-i18n-key="skills" href="#skills"></a></li>
        <li><a data-i18n-key="education" href="#education"></a></li>
    </ul>
`;class W extends HTMLElement{constructor(){super();d(this,"isHeaderMenu",this.getAttribute("isHeaderMenu"));this.innerHTML=H,this.isHeaderMenu&&this.children[0].classList.add("headerMenu")}}customElements.define("menu-component",W);const A=`<svg class="svgContainer" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
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
    </svg>`;class I extends HTMLElement{constructor(){super(),this.innerHTML=A}}customElements.define("svg-component",I);const U=`
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
`,D=`
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
`;class P extends HTMLElement{constructor(){super();d(this,"grade",this.getAttribute("grade"));this.innerHTML=this.grade==="bachelor"?j:D}}customElements.define("education-component",P);const x=document.documentElement,Y=document.querySelector(".language"),m=document.querySelector(".languageWrapper"),s=document.querySelector(".en"),a=document.querySelector(".fa"),z="en";let w,L={};document.addEventListener("DOMContentLoaded",()=>{v(z)});async function v(e){if(e===w)return;const t=await B(e);w=e,L=t,F()}async function B(e){return(await fetch(`lang/${e}.json`)).json()}function F(){document.querySelectorAll("[data-i18n-key]").forEach(t=>{N(t)})}function N(e){const t=e.getAttribute("data-i18n-key");e.innerText=L[t]}Y.addEventListener("click",e=>{e.stopPropagation(),m.classList.toggle("active")});s.addEventListener("click",()=>{s.classList.contains("active")||(a.classList.remove("active"),s.classList.add("active"),v("en"),x.lang="en")});a.addEventListener("click",()=>{a.classList.contains("active")||(s.classList.remove("active"),a.classList.add("active"),v("fa"),x.lang="fa")});document.addEventListener("click",()=>{m.classList.contains("active")&&m.classList.remove("active")});const o=document.getElementById("myCanvas"),r=o.getContext("2d"),G=e=>{if(e>1500)return 250;if(e>1e3)return 200;if(e>500)return 150;if(e>200)return 50},R=e=>{if(e>1e3)return 120;if(e>200)return 90};o.width=window.innerWidth;o.height=window.innerHeight;let h={x:0,y:0};const g=new Array(G(screen.width)).fill(0).map(()=>({x:Math.random()*o.width,y:Math.random()*o.height,r:.9,color:"#808188",sx:.1-Math.random()*.5,sy:.1-Math.random()*.5}));function V(){r.clearRect(0,0,o.width,o.height),g.forEach(e=>{r.fillStyle=e.color,r.beginPath(),r.arc(e.x,e.y,e.r,0,Math.PI*2,!1),r.fill()})}function k(){g.forEach(e=>{e.x+=e.sx,e.y+=e.sy,(e.x<e.r||e.x>o.width-e.r)&&(e.sx=-e.sx),(e.y<e.r||e.y>o.height-e.r)&&(e.sy=-e.sy)}),V(),b(h),requestAnimationFrame(k)}requestAnimationFrame(k);const M=(e,t)=>{const c=Math.abs(e.x-t.x),n=Math.abs(e.y-t.y);return Math.sqrt(Math.pow(c,2)+Math.pow(n,2))},K=e=>{for(let t=0;t<e.length;t++)for(let c=1;c<e.length-1;c++)M(e[t],e[c])<150&&(r.beginPath(),r.moveTo(e[t].x,e[t].y),r.lineTo(e[c].x,e[c].y),r.strokeStyle="rgba(255, 0, 180, .5)",r.stroke(),r.closePath())},b=e=>{const t=[];g.forEach(c=>{M(e,c)<150&&c.y>R(screen.width)&&t.push(c)}),K(t)};o.addEventListener("mousemove",e=>{h={x:e.pageX,y:e.pageY},b(h)});const E=document.documentElement,f=document.body,O=document.querySelector(".firstColumn"),Z=document.querySelector(".secondColumn"),$=document.querySelectorAll(".theme"),y=document.querySelector(".bachelor"),p=document.querySelector(".master"),J=document.querySelector(".copyWrite"),l=document.querySelector(".hamburgerMenu"),T=document.querySelector(".headerMenu"),Q=document.querySelectorAll(".menuItem"),i=[],X=[{column:1,row:1,title:"Html",count:9},{column:1,row:1,title:"CSS (Stylus/Sass)",count:9},{column:1,row:1,title:"Responsive Web Design",count:9},{column:1,row:1,title:"JavaScript",count:8},{column:1,row:1,title:"Typescript",count:8},{column:1,row:1,title:"React.js",count:8},{column:1,row:1,title:"Graphql",count:8},{column:1,row:1,title:"Vite",count:5},{column:1,row:1,title:"Webpack",count:4},{column:2,row:1,title:"Data Structure",count:8},{column:2,row:1,title:"Git",count:7},{column:2,row:1,title:"Ubuntu",count:4},{column:2,row:1,title:"MySQL",count:5},{column:2,row:1,title:"Node.js",count:3},{column:2,row:1,title:"Express.js",count:2},{column:2,row:1,title:"English",count:9},{column:2,row:1,title:"Deno",count:1},{column:2,row:1,title:"Test",count:2}],ee=()=>{for(let e=0;e<i.length;e++)i[e].classList.add("active")},te=()=>{for(let e=0;e<i.length;e++)i[e].classList.remove("active")},ce=(e,t,c=10)=>{let n=0,C=0;for(;n<c;){const u=document.createElement("div");e.appendChild(u),u.classList.add("circle"),C<t&&(i.push(u),C++),n++}};X.map(e=>{const t=document.createElement("div");e.column===1?O.appendChild(t):Z.appendChild(t),t.classList.add("skill");const c=document.createElement("h3");t.appendChild(c),c.innerHTML=e.title;const n=document.createElement("div");t.appendChild(n),n.classList.add("wrapper"),ce(n,e.count)});document.addEventListener("scroll",()=>{const e=window.innerHeight,t=window.scrollY;t>2.5*e&&t<3.5*e?ee():te()});const re=e=>{E.setAttribute("data-theme",e)},ne=()=>{const e=E.getAttribute("data-theme");re(e==="dark"?"light":"dark")};$.forEach(e=>{e.addEventListener("click",ne)});p.addEventListener("click",()=>{p.classList.add("active"),y.classList.remove("active")});y.addEventListener("click",()=>{y.classList.add("active"),p.classList.remove("active")});const oe=new Date,le=oe.getFullYear();J.innerHTML=`© ${le} MAHrokh Tehran, Iran. All rights reserved.`;l.addEventListener("click",()=>{f.style.overflowY="unset",l.classList.toggle("open"),T.classList.toggle("openMenu"),l.classList.contains("open")&&(f.style.overflowY="hidden")});Q.forEach(e=>{e.addEventListener("click",()=>{T.classList.remove("openMenu"),l.classList.remove("open"),l.classList.remove("open"),f.style.overflowY="unset"})});
