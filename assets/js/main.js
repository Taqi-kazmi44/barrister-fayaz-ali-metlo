
const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const cio=new IntersectionObserver(es=>{es.forEach(e=>{if(!e.isIntersecting)return;const el=e.target,end=+el.dataset.count,suf=el.dataset.suffix||'';let t0=null;const step=ts=>{if(!t0)t0=ts;const p=Math.min((ts-t0)/1400,1);el.textContent=Math.floor(end*(0.2+0.8*p)).toLocaleString()+ (p===1?suf:'');if(p<1)requestAnimationFrame(step);};requestAnimationFrame(step);cio.unobserve(el);})},{threshold:.5});
document.querySelectorAll('[data-count]').forEach(el=>cio.observe(el));
function toggleNav(){document.getElementById('mainnav').classList.toggle('open');}
const cf=document.getElementById('cform');
if(cf){cf.addEventListener('submit',e=>{e.preventDefault();cf.style.display='none';document.getElementById('thanks').style.display='block';});}
document.getElementById('yr').textContent=new Date().getFullYear();
