const vki = document.querySelector(".vki");
const durum = document.querySelector(".durum");
const boy = document.querySelector("#boy");
const kilo = document.querySelector("#kilo");
const hesapla = document.querySelector("#hesapla");

console.log(vki);
console.log(durum);

hesapla.addEventListener("click", vkiHesapla);
function vkiHesapla() {
  var sonuc = Number(kilo.value) / (Number(boy.value) * Number(boy.value));
  vki.textContent = `VKİ :${sonuc}`;
  switch (true) {
    case sonuc < 18.5:
      durum.textContent = "Durum :  Zayıf";
      break;
    case sonuc >= 18.5 && sonuc < 24.9:
      durum.textContent = "Durum :  Normal Kilolu";
      break;
    case sonuc >= 25 && sonuc < 30:
      durum.textContent = "Durum :  Fazla Kilolu";
      break;
    case sonuc >= 30 && sonuc < 35:
      durum.textContent = "Durum :  Tip 1 Obez";
      break;
    default:
      durum.textContent = "Durum : Tip 2 Obez";
      break;
  }
}
