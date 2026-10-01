window.City = (() => {
  function bind(){
    document.querySelectorAll(".district-card").forEach(card=>{
      card.addEventListener("click",()=>{
        const event=card.dataset.event;
        const runner=document.querySelector("#runner");
        runner.style.left=(35+Math.random()*40)+"%";
        document.querySelector("#eventTitle").textContent=event+" DISTRICT ACTIVE";
        document.querySelector("#eventText").textContent=`The ${event.toLowerCase()} is live. Your Runner has entered the district.`;
        document.querySelector("#eventBtn").click();
        window.scrollTo({top:document.querySelector(".market").offsetTop-70,behavior:"smooth"});
      });
    });
    document.querySelectorAll("[data-scroll]").forEach(b=>b.addEventListener("click",()=>document.querySelector(b.dataset.scroll).scrollIntoView({behavior:"smooth"})));
  }
  return {bind};
})();