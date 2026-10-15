const header=document.getElementById('hdr');
addEventListener('scroll',()=>{header.classList.toggle('scrolled',scrollY>30)},{passive:true});
header.classList.toggle('scrolled',scrollY>30||!document.querySelector('.hero'));
const burger=document.getElementById('burger'),nav=document.getElementById('mainnav');
if(burger){burger.addEventListener('click',()=>nav.parentElement.classList.toggle('open'))}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const form=document.getElementById('consultForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const ok=document.getElementById('formOk');ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'center'});form.reset();});}
document.getElementById('yr').textContent=new Date().getFullYear();
