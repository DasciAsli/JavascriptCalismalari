const deger = document.querySelector("#Deger");
const ayarla = document.querySelector("#Ayarla");
const baslat = document.querySelector("#Baslat");
const durdur = document.querySelector("#Durdur");
const sonuc = document.querySelector("#Sonuc");
ayarla.addEventListener("click", Ayarla);
baslat.addEventListener("click", Baslat);
durdur.addEventListener("click", Durdur);
var intervalid = null;

function Ayarla() {
  if (deger.value != "") sonuc.textContent = deger.value;
  else {
    alert("Lütfen bir değer giriniz");
  }
}

function say() {
  var sayacBaslangıc = Number(sonuc.textContent);
  if (sayacBaslangıc > 0) {
    sayacBaslangıc--;
    sonuc.textContent = sayacBaslangıc;
  }
}

function Baslat() {
  intervalid = setInterval(say, 1000);
}

function Durdur() {
  console.log("clicked");
  clearInterval(intervalid);
}
