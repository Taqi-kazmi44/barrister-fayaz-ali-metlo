const header=document.getElementById('hdr');
const onScroll=()=>{header.classList.toggle('scrolled',scrollY>30)};
addEventListener('scroll',onScroll,{passive:true});onScroll();
const burger=document.getElementById('burger');
if(burger){burger.addEventListener('click',()=>document.querySelector('.nav').classList.toggle('open'))}
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// animated counters
const cio=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;cio.unobserve(e.target);
  const el=e.target,end=parseFloat(el.dataset.count),dec=el.dataset.dec?1:0,suf=el.dataset.suffix||'';
  const t0=performance.now(),dur=1600;
  const tick=t=>{const p=Math.min(1,(t-t0)/dur),v=end*(1-Math.pow(1-p,3));
    el.textContent=(dec?v.toFixed(1):Math.round(v).toLocaleString())+suf;
    if(p<1)requestAnimationFrame(tick)};
  requestAnimationFrame(tick);
}),{threshold:.4});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
// hero parallax
const hp=document.querySelector('.hero-photo img');
if(hp){addEventListener('scroll',()=>{const y=scrollY;if(y<700)hp.style.translate='0 '+(y*.04)+'px'},{passive:true})}
const form=document.getElementById('consultForm');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const ok=document.getElementById('formOk');ok.style.display='block';ok.scrollIntoView({behavior:'smooth',block:'center'});form.reset();});}
document.getElementById('yr').textContent=new Date().getFullYear();
