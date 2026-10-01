window.Market = (() => {
  const state = { price: 14.82, change: 4.82, volume: 1.28, runners: 482 };
  function tick() {
    const move = (Math.random() - .47) * .08;
    state.price = Math.max(0.01, state.price + move);
    state.change += move / 3;
    document.querySelector("#injPrice").textContent = "$" + state.price.toFixed(2);
    document.querySelector("#injChange").textContent = (state.change >= 0 ? "+" : "") + state.change.toFixed(2) + "%";
    document.querySelector("#eventVolume").textContent = "$" + (state.volume + Math.random()*.08).toFixed(2) + "M";
    document.querySelector("#eventRunners").textContent = Math.floor(state.runners + Math.random()*18);
  }
  function drawChart() {
    const c = document.querySelector("#chart"), ctx = c.getContext("2d");
    function resize(){ c.width = c.clientWidth * devicePixelRatio; c.height = c.clientHeight * devicePixelRatio; ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0); draw(); }
    function draw(){
      const w=c.clientWidth,h=c.clientHeight; ctx.clearRect(0,0,w,h);
      ctx.strokeStyle="#1d232c";ctx.lineWidth=1;
      for(let i=1;i<6;i++){let y=i*h/6;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
      const pts=[];let y=h*.58;
      for(let x=0;x<=w;x+=8){ y += (Math.random()-.49)*11; y=Math.max(30,Math.min(h-25,y)); pts.push([x,y]);}
      ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p[0],p[1]):ctx.moveTo(p[0],p[1]));ctx.strokeStyle="#e92d3d";ctx.lineWidth=2;ctx.stroke();
      ctx.lineTo(w,h);ctx.lineTo(0,h);ctx.closePath();ctx.fillStyle="rgba(233,45,61,.07)";ctx.fill();
    }
    window.addEventListener("resize",resize); resize();
  }
  return {tick,drawChart};
})();