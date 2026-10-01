window.App = (() => {
  function toast(title, extra){const t=document.querySelector("#toast");t.firstChild.textContent=title+" ";t.lastChild.textContent=extra||"";t.classList.add("show");setTimeout(()=>t.classList.remove("show"),2600)}
  function clock(){document.querySelector("#clock").textContent=new Date().toLocaleTimeString([], {hour12:false});}
  function init(){
    document.querySelector("#enterBtn").addEventListener("click",()=>{
      document.querySelector("#boot").classList.add("is-hidden");document.querySelector("#app").classList.remove("is-hidden");
      window.scrollTo(0,0);
    });
    document.querySelector("#walletBtn").addEventListener("click",Wallet.open);
    document.querySelector("#footerWallet").addEventListener("click",Wallet.open);
    document.querySelector("#closeModal").addEventListener("click",Wallet.close);
    document.querySelector("#demoConnect").addEventListener("click",Wallet.connect);
    document.querySelector("#eventBtn").addEventListener("click",()=>{Runner.addXP(500);toast("EVENT JOINED","+500 XP")});
    document.querySelectorAll("[data-mission]").forEach(m=>m.addEventListener("click",()=>{Runner.addXP(m.dataset.mission==="runup"?750:m.dataset.mission==="event"?500:250);toast("MISSION COMPLETE","XP ADDED")}));
    document.querySelector("#launchBtn").addEventListener("click",()=>{toast("RUNUP TERMINAL","COMING NEXT")});
    City.bind(); Runner.render(); Market.drawChart(); setInterval(Market.tick,2200); setInterval(clock,1000); clock();
  }
  return {init,toast};
})(); document.addEventListener("DOMContentLoaded",App.init);