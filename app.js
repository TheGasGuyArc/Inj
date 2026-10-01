const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
const boot=$("#boot"), modal=$("#modal"), toast=$("#toast");
window.addEventListener("load",()=>setTimeout(()=>boot.classList.add("off"),1750));
$("#enterCity").onclick=()=>boot.classList.add("off");

$$("[data-scroll]").forEach(b=>b.onclick=()=>document.querySelector(b.dataset.scroll)?.scrollIntoView({behavior:"smooth"}));
$$(".district").forEach(b=>b.onclick=()=>openModal("DISTRICT // "+b.dataset.district,"You found a live district inside the city. This build is the front-end shell; production actions can be wired to Injective and RunUp after the launch contract/endpoints are supplied."));
$$(".mission").forEach(b=>b.onclick=()=>{b.disabled=true;b.style.opacity=".45";b.querySelector("i").textContent="COMPLETED";addXP(Number(b.dataset.xp));showToast("MISSION COMPLETE",`+${b.dataset.xp} XP`)});
$("#joinEvent").onclick=()=>{addXP(500);showToast("EVENT JOINED","+500 XP")};
$("#terminalBtn").onclick=()=>openModal("RUNUP // LAUNCH TERMINAL","This is the launch district. The final production version can point this button directly at the RunUp launch flow, while keeping the RUNNERS experience as the front door.");
["#connect","#footerWallet"].forEach(s=>$(s).onclick=()=>openModal("CONNECT YOUR RUNNER","This demo never asks for a seed phrase or private key. For the production build, this button is the wallet integration point."));
$("#closeModal").onclick=()=>modal.classList.add("hidden");modal.addEventListener("click",e=>{if(e.target===modal)modal.classList.add("hidden")});
function openModal(title,text){$("#modalTitle").textContent=title;$("#modalText").textContent=text;modal.classList.remove("hidden")}
function showToast(a,b){toast.innerHTML=`${a} <b>${b}</b>`;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600)}
let xp=6420;function addXP(n){xp+=n;const max=8000;$("#xpText").textContent=`${xp.toLocaleString()} / ${max.toLocaleString()}`;$("#xpBar").style.width=Math.min(100,xp/max*100)+"%";$("#level").textContent=xp>=8000?"08":"07";$("#hudLvl").textContent=xp>=8000?"08":"07";}

const canvas=$("#chart"),ctx=canvas.getContext("2d");let t=0;
function drawChart(){
  const d=devicePixelRatio||1,w=canvas.clientWidth,h=canvas.clientHeight;canvas.width=w*d;canvas.height=h*d;ctx.setTransform(d,0,0,d,0,0);
  ctx.clearRect(0,0,w,h);
  ctx.strokeStyle="#1b222b";ctx.lineWidth=1;
  for(let y=20;y<h;y+=55){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
  const pts=[];for(let i=0;i<80;i++){let x=i/(79)*(w-8)+4;let base=h*.55-i*1.05;let y=base+Math.sin(i*.42+t)*18+Math.sin(i*.13)*12+(Math.random()-.5)*4;pts.push([x,y])}
  ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fillStyle="rgba(255,48,72,.07)";ctx.fill();
  ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(...p):ctx.moveTo(...p));ctx.strokeStyle="#ff3048";ctx.lineWidth=2;ctx.stroke();
}
drawChart();window.addEventListener("resize",drawChart);
setInterval(()=>{t+=.3;drawChart();const p=(14.82+Math.sin(t*.25)*.35+Math.random()*.06).toFixed(2);$("#price").textContent="$"+p;$("#change").textContent=(4.4+Math.random()*.9).toFixed(2)+"%";$("#runnerCount").textContent=470+Math.floor(Math.random()*35)},1600);

let lastX=50;setInterval(()=>{lastX=28+Math.random()*48;$("#runner").style.left=lastX+"%"},3200);
