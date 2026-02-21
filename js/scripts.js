
window.addEventListener('scroll',()=>{
 const nav=document.querySelector('.nav');
 if(nav) nav.style.background=window.scrollY>50?'#000':'rgba(0,0,0,.3)';
});
