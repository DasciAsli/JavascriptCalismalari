const rakamlar = document.querySelector("#rakamlar");
const deger1 = document.querySelector("#deger1");
const deger2 = document.querySelector("#deger2");
const sil = document.querySelector("#Sil");
const temizle = document.querySelector("#C");
const arti = document.getElementById("+");
const eksi = document.getElementById("-");
const bölü = document.getElementById("/");
const carpi = document.getElementById("*");
const esittir = document.getElementById("=");

//Rakamlar oluşturuldu
for (var index = 9; index >= 0; index--) {
  var btnRakam = document.createElement("input");
  btnRakam.setAttribute("type", "button");
  btnRakam.setAttribute("class", "btnRakam py-3 px-4");
  btnRakam.setAttribute("value", `${index}`);
  rakamlar.appendChild(btnRakam);
}

const dokuz = rakamlar.children[0];
const sekiz = rakamlar.children[1];
const yedi = rakamlar.children[2];
const altı = rakamlar.children[3];
const bes = rakamlar.children[4];
const dort = rakamlar.children[5];
const uc = rakamlar.children[6];
const iki = rakamlar.children[7];
const bir = rakamlar.children[8];
const sifir = rakamlar.children[9];

//Rakamlara tıklama
dokuz.addEventListener("click", function () {
  deger2.textContent += dokuz.value;
});
sekiz.addEventListener("click", function () {
  deger2.textContent += sekiz.value;
});
yedi.addEventListener("click", function () {
  deger2.textContent += yedi.value;
});
altı.addEventListener("click", function () {
  deger2.textContent += altı.value;
});
bes.addEventListener("click", function () {
  deger2.textContent += bes.value;
});
dort.addEventListener("click", function () {
  deger2.textContent += dort.value;
});
uc.addEventListener("click", function () {
  deger2.textContent += uc.value;
});
iki.addEventListener("click", function () {
  deger2.textContent += iki.value;
});
bir.addEventListener("click", function () {
  deger2.textContent += bir.value;
});
sifir.addEventListener("click", function () {
  deger2.textContent += sifir.value;
});

var sonuc = 0;
dizi = [];

esittir.addEventListener("click", function () {
  deger1.textContent = deger1.textContent + deger2.textContent;
  if (deger1.textContent.includes("+")) {
    dizi = deger1.textContent.split("+");
    sonuc = Number(dizi[0]) + Number(dizi[1]);
    deger2.textContent = String(sonuc);
  }
  if (deger1.textContent.includes("-")) {
    dizi = deger1.textContent.split("-");
    sonuc = Number(dizi[0]) - Number(dizi[1]);
    deger2.textContent = String(sonuc);
  }
  if (deger1.textContent.includes("*")) {
    dizi = deger1.textContent.split("*");
    sonuc = Number(dizi[0]) * Number(dizi[1]);
    deger2.textContent = String(sonuc);
  }
  if (deger1.textContent.includes("/")) {
    dizi = deger1.textContent.split("/");
    sonuc = Number(dizi[0]) / Number(dizi[1]);
    deger2.textContent = String(sonuc);
  }
});
carpi.addEventListener("click", function () {
  if (
    deger1.textContent.includes("+") ||
    deger1.textContent.includes("-") ||
    deger1.textContent.includes("*") ||
    deger1.textContent.includes("/")
  ) {
    //işaret değiştirme
    var duzeltilecekDizi = deger1.textContent.split("");
    duzeltilecekDizi.pop();
    var yenideger1 = "";
    duzeltilecekDizi.forEach(function (item) {
      yenideger1 += item;
    });
    dizi[0] = yenideger1;
    dizi[1] = carpi.value;
    if (deger2.textContent == "") {
      sonuc = Number(yenideger1);
    } else {
      sonuc = Number(yenideger1) * Number(deger2.textContent);
    }

    deger1.textContent = sonuc + dizi[1];
    deger2.textContent = "";
  } else {
    sonuc = Number(deger2.textContent);
    dizi[0] = sonuc;
    dizi[1] = carpi.value;
    deger1.textContent = dizi[0] + dizi[1];
    deger2.textContent = "";
  }
});
bölü.addEventListener("click", function () {
  if (
    deger1.textContent.includes("+") ||
    deger1.textContent.includes("-") ||
    deger1.textContent.includes("*") ||
    deger1.textContent.includes("/")
  ) {
    //işaret değiştirme
    var duzeltilecekDizi = deger1.textContent.split("");
    duzeltilecekDizi.pop();
    var yenideger1 = "";
    duzeltilecekDizi.forEach(function (item) {
      yenideger1 += item;
    });
    dizi[0] = yenideger1;
    dizi[1] = bölü.value;
    if (deger2.textContent == "") {
      sonuc = Number(yenideger1);
    } else {
      sonuc = Number(yenideger1) / Number(deger2.textContent);
    }

    deger1.textContent = sonuc + dizi[1];
    deger2.textContent = "";
  } else {
    sonuc = Number(deger2.textContent);
    dizi[0] = sonuc;
    dizi[1] = bölü.value;
    deger1.textContent = dizi[0] + dizi[1];
    deger2.textContent = "";
  }
});
eksi.addEventListener("click", function () {
  if (
    deger1.textContent.includes("+") ||
    deger1.textContent.includes("-") ||
    deger1.textContent.includes("*") ||
    deger1.textContent.includes("/")
  ) {
    //işaret değiştirme
    var duzeltilecekDizi = deger1.textContent.split("");
    duzeltilecekDizi.pop();
    var yenideger1 = "";
    duzeltilecekDizi.forEach(function (item) {
      yenideger1 += item;
    });
    dizi[0] = yenideger1;
    dizi[1] = eksi.value;
    if (deger2.textContent == "") {
      sonuc = Number(yenideger1);
    } else {
      sonuc = Number(yenideger1) - Number(deger2.textContent);
    }

    deger1.textContent = sonuc + dizi[1];
    deger2.textContent = "";
  } else {
    sonuc = Number(deger2.textContent);
    dizi[0] = sonuc;
    dizi[1] = eksi.value;
    deger1.textContent = dizi[0] + dizi[1];
    deger2.textContent = "";
  }
});
arti.addEventListener("click", function () {
  sonuc += Number(deger2.textContent);
  dizi[0] = sonuc;
  dizi[1] = arti.value;
  deger1.textContent = dizi[0] + dizi[1];
  deger2.textContent = "";
});
sil.addEventListener("click", function () {
  var silinecekDizi = deger2.textContent.split("");
  silinecekDizi.pop();
  var yenideger2 = "";
  silinecekDizi.forEach(function (item) {
    yenideger2 += item;
  });
  deger2.textContent = yenideger2;
});
temizle.addEventListener("click", function () {
  sonuc = 0;
  deger1.textContent = "";
  deger2.textContent = "";
});
