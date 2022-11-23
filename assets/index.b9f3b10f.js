(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function i(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(o){if(o.ep)return;o.ep=!0;const a=i(o);fetch(o.href,a)}})();function s(e){history.pushState(null,null,e)}function p(e){window.document.querySelector("#app").innerHTML=e()}function l(e){window.document.location.pathname.replace(/^.*\//g,"");const i=window.location.hash.replace(/([?][A-z]*)([=]).*/,"").replace("#","");e[i]?p(e[i]):p(e.home),window.document.addEventListener("DOMContentLoaded",()=>{document.body.addEventListener("click",n=>{n.target.matches("[ali-link]")&&(n.preventDefault(),s(n.target.href))})})}function m(e,t){localStorage.setItem(e,JSON.stringify(t)||"[]")}function f(){const e=window.location.href,[,t]=e.split("data="),i=decodeURI(t);return JSON.parse(i)}function g(e){return`?data=${JSON.stringify(e)}`}function r(e){return window.document.querySelector(e)}function h(e,t,i){const n={title:e,text:t,url:i};window.compartilhar=async()=>{await navigator.share(n)}}function v(e,t){console.log(e);const i=JSON.parse(localStorage.getItem(e)),n=JSON.parse(localStorage.getItem(t));return g({a:i,b:n})}function k(e,t){const i=JSON.parse(localStorage.getItem(e)||"[]");i.push(t),localStorage.setItem(e,JSON.stringify(i))}function y(e){return window.routertMiniSite=()=>{s("#gerarLinks"),l({gerarLinks:u})},`
    <button onclick="routertMiniSite()" class="navegarDeVoltaButton"><</button>
    `}function b(e){const t=e;let i="";return t.forEach(n=>{i+=`       
        <a href="${n.URL}" class="link" style="" target="_blank">
            <img class="icone"
                src="${n.ICONE}">
            <h1>${n.NOME_ICONE}</h1>
        </a>      
        `}),i}function L(e){return h("LINK","Compartilhe o link",window.location.href),`

    <button onclick="compartilhar()" class="compartilhar">compartilhar\u27A4</button>
 
    `}function d(){const e=f(),t=document.querySelector("head"),i=document.querySelector("title");return t.innerHTML+=`<link rel="icon" type="image/svg+xml" href="${e.a.LogoImput}" />`,i.innerHTML=`${e.a.Nome}`,`

    
    <div class="componete-link"> 

   
    ${L(e.a)}
   
    <div class="container-link">

    ${localStorage.hasOwnProperty("dono")?`${y()}`:""}         
    <img src="${e.a.LogoImput}" class="logo"  loading=lazy  class="mini-site-logo">          
    </div> 
     <span>${e.a.Nome}</span>

    <h1 style="color:" > </h1>
    <div class="container_Links">
    <h2>Seja Bem-vindo! </h2>
    <h2>Visite minhas paginas </h2>
       
   ${b(e.b)}

   <div>      
   <a class="link-minisite" href="https://alifersouza.github.io/links" target="_blank">Crie o seu mini site</a>
   <a class="link-minisite" href="https://bitly.com/" target="_blank"> Ecurtador de link</a>
   </div>

    </div>
 
    <div>
`}function u(){const e=[];return window.pegar=(t,i)=>{const o={URL:r(".url").value,ICONE:i,NOME_ICONE:t};e.push(o)},window.salvarLink=()=>{const t=r(".url").value,i=e[e.length-1];if(!t)alert("preencha o campo URL!");else for(k("link",i),r("form").reset(),r(".buttonSite").innerHTML='<input type="button" value="miniSite" onclick="link()">';e.length;)e.pop()},window.link=()=>{const t=v("dono","link");s("#minisite"+t),l({minisite:d})},`
    <div class="container">
    <div class="forms">

        <div class="form login">

            <span class="title">Crie seus links</span>

            <form action="#">

                <div class="input-field">
                    <input type="text" class="url" placeholder="" required>
                </div>

                <div class="input-field" >

                    <fieldset class="radio-image escolhaFoto">
                        <label for="M">
                            
                            <img src=".././img/facebook.png"id="facebook" onclick="pegar(id, src)" name="facebook" class="escolha" alt="facebook"
                                height="45px">
                        </label>

                        <label for="F">
                           
                            <img src=".././img/instagram.png" id="instagram" onclick="pegar(id, src)"  class="escolha" alt="instagram"
                                height="45px">
                        </label>

                        <label for="A">
                           
                            <img src=".././img/whatsapp.png" id="whatsapp" onclick="pegar(id, src)"  class="escolha" alt="whatsapp"
                                height="45px">
                        </label>
                        <label for="B">
                            
                            <img src="../img/youtube.png" id="youtube" onclick="pegar(id, src)" class="escolha" alt="youtube" height="45px">
                        </label>
                    </fieldset>

                </div>

                <div class="input-field button">
                    <input type="button" value="Salvar" onclick="salvarLink()">
                </div>
                <br />
                <div class="buttonSite">
                ${localStorage.hasOwnProperty("link")?'<input type="button" value="miniSite" onclick="link()">':""}      
                <div>   
               </form>

        </div>
    </div>
</div>
  
    `}function w(){const e=document.querySelector("head");return e.innerHTML+='<link rel="icon" type="image/svg+xml" href=".././img/facebook.png" />',window.salvarLoja=()=>{const t=r(".Name").value,i=r(".Cor").value,n=r(".Logo").files[0],o=new FileReader;o.addEventListener("load",()=>{const a=o.result;!t||!n||!i?alert("Valores obrigatorios para todos os campos"):(m("dono",{Nome:t,LogoImput:a,Cor:i}),s("#gerarLinks"),l({gerarLinks:u}))}),o.readAsDataURL(n)},`
<div class="container">
    <div class="forms">
        <div class="form login">
            <span class="title">Crie seu mini MINI-SITE</span>

            <form action="#">
                <div class="input-field">
                    <input type="text" class="Name" placeholder="Digite o nome" required>
                </div>

                <div class="input-field">
                    <input type="file" class="Logo" placeholder="" accept="image/png, image/jpeg" multiple required >
                </div>

                <div class="input-field">
                    <input type="text" class="Cor" placeholder="Cor #fff hexadecimal " required>
                </div>

                <div class="input-field button">
                    <input type="button" value="Salvar" onclick="salvarLoja()">
                </div>
            </form>
        </div>
    </div>
</div>

<script>

<\/script>
`}const S=location.href.includes("?");S?l({minisite:d}):localStorage.hasOwnProperty("dono")?(s(""),l({gerarLinks:u,minisite:d})):(s("#link"),l({link:w}));
