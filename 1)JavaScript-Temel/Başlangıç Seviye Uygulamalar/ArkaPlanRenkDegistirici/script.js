const btn = document.querySelector("#btn");
var renkler = ["red", "black", "yellow", "blue", "green", "white", "purple"];
btn.addEventListener("click", renkDegistir);
function renkDegistir(e) {
  var indexofRenk = Math.floor(Math.random() * renkler.length);
  document.body.style.background = renkler[indexofRenk];
  e.preventDefault();
}
