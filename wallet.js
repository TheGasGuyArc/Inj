window.Wallet = (() => {
  let connected=false;
  function open(){document.querySelector("#walletModal").classList.remove("is-hidden")}
  function close(){document.querySelector("#walletModal").classList.add("is-hidden")}
  function connect(){
    connected=true;
    document.querySelectorAll("#walletBtn,#footerWallet").forEach(b=>b.textContent="0x7F...A21");
    close();
    document.querySelector(".runner-info h3").textContent="RUNNER #4821";
    window.Runner.addXP(250);
    window.App.toast("RUNNER CLAIMED"," +250 XP");
  }
  return {open,close,connect};
})();