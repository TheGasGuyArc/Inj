const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const boot=$('#boot'),modal=$('#modal'),toast=$('#toast');
window.addEventListener('load',()=>setTimeout(()=>boot.classList.add('off'),1650));$('#enterCity').onclick=()=>boot.classList.add('off');
$$('[data-scroll]').forEach(b=>b.onclick=()=>document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:'smooth'}));
function openModal(title,text){$('#modalTitle').textContent=title;$('#modalText').textContent=text;modal.classList.remove('hidden')}
function showToast(a,b){toast.innerHTML=`${a} <b>${b}</b>`;toast.classList.add('show');clearTimeout(window.toastTimer);window.toastTimer=setTimeout(()=>toast.classList.remove('show'),2600)}
$('#closeModal').onclick=()=>modal.classList.add('hidden');modal.addEventListener('click',e=>{if(e.target===modal)modal.classList.add('hidden')});
['#connect','#footerWallet'].forEach(s=>$(s).onclick=()=>openModal('CONNECT YOUR RUNNER.','Wallet connection is the production integration point. This public demo never asks for seed phrases or private keys.'));
$('#modalAction').onclick=()=>{modal.classList.add('hidden');showToast('DEMO STATE','READY')};
$('#terminalBtn').onclick=()=>{addXP(750);showToast('RUNUP DISTRICT','+750 XP')};
$('#joinEvent').onclick=()=>{addXP(500);showToast('EVENT JOINED','+500 XP')};
$$('.quest').forEach(q=>q.onclick=()=>{if(q.classList.contains('done'))return;q.classList.add('done');q.querySelector('strong').textContent='COMPLETED';addXP(Number(q.dataset.xp));showToast('QUEST COMPLETE',`+${Number(q.dataset.xp).toLocaleString()} XP`)})
let xp=6420;function addXP(n){xp+=n;const max=8000;$('#xpText').textContent=`${xp.toLocaleString()} / ${max.toLocaleString()}`;$('#xpBar').style.width=Math.min(100,xp/max*100)+'%';if(xp>=max){$('#level').textContent='08';$('#hudLvl').textContent='08';$('#rank').textContent='#118';showToast('LEVEL UP','LVL 08')}}

// Playable local run system
let running=false,seconds=0,distance=0,steps=0,energy=76,timer;
function renderRun(){const m=Math.floor(seconds/60),s=seconds%60;$('#runTime').textContent=`${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;$('#distance').textContent=distance.toFixed(2);$('#steps').textContent=steps.toLocaleString();$('#profileDistance').textContent=Math.max(4.8,distance).toFixed(1);$('#energy').style.width=energy+'%';$('#locationStatus').textContent=running?'RUNNING':'TEST MODE'}
function tick(){seconds++;distance+=.006+Math.random()*.012;steps+=7+Math.floor(Math.random()*8);energy=Math.max(8,energy-.22);renderRun();if(energy<=8){stopRun();showToast('ENERGY LOW','RUN PAUSED')}}
function startRun(){if(running)return;running=true;$('#startRun').innerHTML='PAUSE RUN <span>Ⅱ</span>';timer=setInterval(tick,1000);showToast('RUN STARTED','LET’S MOVE')}
function stopRun(){running=false;clearInterval(timer);$('#startRun').innerHTML='START WALK <span>→</span>'}
$('#startRun').onclick=()=>running?stopRun():startRun();
$('#autoRun').onclick=()=>{for(let i=0;i<5;i++){seconds+=18;distance+=.18;steps+=190;energy=Math.max(8,energy-2)}renderRun();addXP(250);showToast('AUTO-RUN ×5','+250 XP')};
$('#resetRun').onclick=()=>{stopRun();seconds=0;distance=0;steps=0;energy=76;renderRun()};
$('#locationBtn').onclick=()=>{if(navigator.geolocation){$('#locationStatus').textContent='REQUESTING GPS…';navigator.geolocation.getCurrentPosition(()=>{showToast('LOCATION READY','GPS ENABLED');$('#locationStatus').textContent='GPS READY'},()=>{showToast('GPS UNAVAILABLE','TEST MODE');$('#locationStatus').textContent='TEST MODE'})}else showToast('TEST MODE','GPS NOT AVAILABLE')};renderRun();

// District map nodes
$$('.node').forEach(n=>n.onclick=()=>{showToast('ROUTE SELECTED',`DISTRICT ${n.textContent}`);$$('.node').forEach(x=>x.classList.remove('active'));n.classList.add('active')});

// Market simulation canvas
const canvas=$('#chart'),ctx=canvas.getContext('2d');let t=0;function drawChart(){const d=devicePixelRatio||1,w=canvas.clientWidth,h=canvas.clientHeight;canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);ctx.clearRect(0,0,w,h);ctx.strokeStyle='#1d252e';ctx.lineWidth=1;for(let y=20;y<h;y+=55){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}const pts=[];for(let i=0;i<90;i++){const x=i/(89)*(w-10)+5;const y=h*.62-i*.72+Math.sin(i*.33+t)*16+Math.sin(i*.11)*10+(Math.random()-.5)*3;pts.push([x,y])}ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fillStyle='rgba(255,48,72,.08)';ctx.fill();ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.strokeStyle='#ff3048';ctx.lineWidth=2;ctx.stroke();const last=pts.at(-1);ctx.beginPath();ctx.arc(last[0],last[1],4,0,Math.PI*2);ctx.fillStyle='#ff3048';ctx.fill()}drawChart();window.addEventListener('resize',drawChart);
setInterval(()=>{t+=.25;drawChart();const p=(14.82+Math.sin(t*.23)*.34+Math.random()*.08).toFixed(2);const c=(4.2+Math.random()*1.3).toFixed(2);$('#price').textContent='$'+p;$('#change').textContent='+'+c+'%';const r=470+Math.floor(Math.random()*40);$('#runnerCount').textContent=r;$('#tickerRunners').textContent=r;$('#volume').textContent='$'+(1.15+Math.random()*.4).toFixed(2)+'M'},1600);
let lastX=51;setInterval(()=>{lastX=28+Math.random()*48;$('#runner').style.left=lastX+'%'},3000);
