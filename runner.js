window.Runner = (() => {
  let xp=6420, level=7, missions=8, crates=19, distance=4.8;
  function addXP(amount){
    xp += amount;
    while(xp>=8000){xp-=8000;level++;}
    render();
  }
  function render(){
    document.querySelector("#level").textContent=String(level).padStart(2,"0");
    document.querySelector("#xpText").textContent=`${xp.toLocaleString()} / 8,000`;
    document.querySelector("#xpBar").style.width=Math.min(100,xp/80)+"%";
    document.querySelector("#missions").textContent=String(missions).padStart(2,"0");
    document.querySelector("#crates").textContent=String(crates).padStart(2,"0");
    document.querySelector("#distance").textContent=distance.toFixed(1);
  }
  return {addXP,render};
})();