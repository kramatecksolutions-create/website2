
document.addEventListener('DOMContentLoaded',()=> {
  const nav=document.querySelector('.nav');
  const onScroll=()=>nav && nav.classList.toggle('scrolled',window.scrollY>18);
  onScroll(); window.addEventListener('scroll',onScroll);

  const mob=document.querySelector('.mob'), panel=document.querySelector('.mobile-panel');
  if(mob && panel) mob.addEventListener('click',()=>panel.classList.toggle('open'));

  document.querySelectorAll('.reveal').forEach(el=>{
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting){el.classList.add('show');o.unobserve(el)}},{threshold:.12}); o.observe(el);
  });

  const slides=[...document.querySelectorAll('.hero-slide')], dots=[...document.querySelectorAll('.hero-dot')];
  let si=0, timer;
  const showSlide=i=>{
    slides.forEach((s,n)=>s.classList.toggle('active',n===i)); dots.forEach((d,n)=>d.classList.toggle('active',n===i)); si=i;
  };
  const auto=()=>{clearInterval(timer); if(slides.length>1) timer=setInterval(()=>showSlide((si+1)%slides.length),5200)};
  dots.forEach((d,i)=>d.addEventListener('click',()=>{showSlide(i);auto()})); showSlide(0);auto();

  const stabs=[...document.querySelectorAll('.solution-tab')], spans=[...document.querySelectorAll('.solution-panel')];
  stabs.forEach((t,i)=>t.addEventListener('click',()=>{stabs.forEach((x,n)=>x.classList.toggle('active',n===i));spans.forEach((x,n)=>x.classList.toggle('active',n===i))}));

  const ibtn=[...document.querySelectorAll('.industry-btn')], ipan=[...document.querySelectorAll('.industry-panel')];
  ibtn.forEach((t,i)=>t.addEventListener('click',()=>{ibtn.forEach((x,n)=>x.classList.toggle('active',n===i));ipan.forEach((x,n)=>x.classList.toggle('active',n===i))}));

  document.querySelectorAll('[data-count]').forEach(el=>{
    const target=Number(el.dataset.count), suffix=el.dataset.suffix||''; let started=false;
    const o=new IntersectionObserver(([e])=>{if(e.isIntersecting&&!started){started=true;let n=0;const step=Math.max(1,Math.ceil(target/40));const id=setInterval(()=>{n=Math.min(target,n+step);el.textContent=n+suffix;if(n>=target)clearInterval(id)},35);o.disconnect()}},{threshold:.5});o.observe(el);
  });
});
