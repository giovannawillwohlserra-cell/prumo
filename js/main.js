const header=document.getElementById('header');
if(header){
  const onHeaderScroll=()=>header.classList.toggle('scrolled',window.scrollY>40);
  window.addEventListener('scroll',onHeaderScroll);
  onHeaderScroll();
}

const toggle=document.getElementById('menuToggle'),links=document.getElementById('navLinks');
if(toggle&&links){
  toggle.addEventListener('click',()=>links.classList.toggle('open'));
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
}

const io=new IntersectionObserver((es)=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.16});
document.querySelectorAll('.reveal,.stagger').forEach(el=>io.observe(el));

// Scroll progress bar
const bar=document.getElementById('progress');
if(bar){
  const onScroll=()=>{const h=document.documentElement;const p=h.scrollTop/(h.scrollHeight-h.clientHeight);bar.style.width=(p*100)+'%'};
  window.addEventListener('scroll',onScroll,{passive:true});onScroll();
}

// Count-up nos números (respeita prefers-reduced-motion)
const reduce=window.matchMedia('(prefers-reduced-motion:reduce)').matches;
document.querySelectorAll('[data-count]').forEach(el=>{
  const target=+el.dataset.count;
  if(reduce){el.textContent=target;return;}
  let started=false;
  const obs=new IntersectionObserver((es)=>es.forEach(e=>{
    if(e.isIntersecting&&!started){started=true;let n=0;const step=Math.max(1,Math.round(target/24));
      const t=setInterval(()=>{n+=step;if(n>=target){n=target;clearInterval(t)}el.textContent=n},34);obs.disconnect();}
  }),{threshold:.6});
  obs.observe(el);
});

document.querySelectorAll('.faq-q').forEach(q=>{
  q.addEventListener('click',()=>{
    const item=q.parentElement,a=q.nextElementSibling,open=item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null});
    if(!open){item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
  });
});

// ---------- Calculadora de diagnóstico ----------
const calcForm=document.getElementById('calcForm');
if(calcForm){
  const sizeSel=document.getElementById('calcSize');
  const fronts=()=>Array.from(document.querySelectorAll('.calc-checks input:checked')).map(c=>c.value);

  const SIZE_FACTOR={pequena:1,media:1.45,grande:2.1};
  const SIZE_LABEL={pequena:'até 20 colaboradores',media:'21 a 80 colaboradores',grande:'mais de 80 colaboradores'};
  const FRONT_MONTHS={lideranca:1.5,processos:2,estrategia:1.5,certificacoes:1};
  const FRONT_INVEST={lideranca:7000,processos:8000,estrategia:6000,certificacoes:9000};

  function fmtBRL(v){return v.toLocaleString('pt-BR',{style:'currency',currency:'BRL',maximumFractionDigits:0})}

  function calc(){
    const size=sizeSel.value;
    const factor=SIZE_FACTOR[size]||1;
    const selected=fronts();
    if(selected.length===0){
      document.getElementById('calcMonths').textContent='—';
      document.getElementById('calcInvestMin').textContent='Selecione ao menos uma frente';
      document.getElementById('calcInvestMax').textContent='';
      document.getElementById('calcInvestTotalMin').textContent='—';
      document.getElementById('calcInvestTotalMax').textContent='';
      return;
    }
    let months=1.5; // diagnóstico já considerado concluído
    let investMin=0,investMax=0;
    selected.forEach(f=>{
      months+=FRONT_MONTHS[f]*factor;
      investMin+=FRONT_INVEST[f]*factor*0.85;
      investMax+=FRONT_INVEST[f]*factor*1.25;
    });
    months=Math.round(months);
    document.getElementById('calcMonths').textContent=months+' meses';
    document.getElementById('calcInvestMin').textContent=fmtBRL(investMin/12);
    document.getElementById('calcInvestMax').textContent=fmtBRL(investMax/12);
    document.getElementById('calcInvestTotalMin').textContent=fmtBRL(investMin);
    document.getElementById('calcInvestTotalMax').textContent=fmtBRL(investMax);
    document.getElementById('calcSizeLabel').textContent=SIZE_LABEL[size];
  }

  calcForm.addEventListener('change',calc);
  calc();
}
