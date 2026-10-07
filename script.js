const btn=document.querySelector('.menu-btn'),menu=document.getElementById('menu');
btn.addEventListener('click',()=>{const o=menu.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
menu.addEventListener('click',e=>{if(e.target.tagName==='A'){menu.classList.remove('open');btn.setAttribute('aria-expanded',false)}});
document.getElementById('yr').textContent=new Date().getFullYear();
