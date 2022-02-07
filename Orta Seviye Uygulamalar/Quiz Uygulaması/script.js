//Elementler tanımlandı
var soruYazdir = document.querySelector("#soruYazdir");
var secenek1 = document.querySelector("#secenek1");
var secenek2 = document.querySelector("#secenek2");
var secenek3 = document.querySelector("#secenek3");
var soruTakip = document.querySelector("#soruTakip");
var Baslat = document.querySelector("#Baslat");
var sure = document.querySelector("#sure");
var Next = document.querySelector("#Next");
var Prev = document.querySelector("#Prev");

//Sorularımın barındılacağı dizi
var soruDizisi = [];
var count = 0;

//Question constructor'ı olusturuldu
var Question = function (question, answer, options) {
  this.question = question;
  this.answer = answer;
  this.options = options;
};

//Oluşturduğum Question nesnelerini soruDizisine eklemek için oluşturulmuş bir prototype
Question.prototype.addQuestionArray = function () {
  soruDizisi.push(this);
};

//Kurallar constructor'ı oluşturuldu
var Rule = function (rule) {
  this.rule = rule;
};

//Rule constructor'ının prototype'ına bir fonksiyon eklendi
Rule.prototype.ruleAdd = function () {
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.classList = "mt-3";
  const text = document.createTextNode(`${this.rule}`);
  li.appendChild(text);
  ul.appendChild(li);
};

//Kurallar bölümüne tıklanıldığı zaman kuralların hepsi kullanıcıya gösterilir
$(document).ready(function () {
  $(".kurallar").click(function () {
    var kuralGoster = $("#kuralGoster");
    kuralGoster.fadeToggle(1000);
  });
});

//Sayac işlemleri
var intervalid = null;
var sayacBaslangic = 0;

function say() {
  if (sayacBaslangic >= 0) {
    sure.textContent = String(sayacBaslangic);
    sayacBaslangic--;
    if (sayacBaslangic == -1) {
      Prev.className = "d-none";
      Next.className = "d-none";
      secenek1.classList.add("disabled");
      secenek2.classList.add("disabled");
      secenek3.classList.add("disabled");
    }
  }
}

//Baslat butonuna tıklanıldıgında olacak olaylar
Baslat.addEventListener("click", function () {
  sayacBaslangic = 30;
  intervalid = setInterval(say, 1000);
  count = 0;
  soruGelsin(count);
  Prev.className = "";
  Next.className = " ";
});

//Sayfa ilk açıldığında kuralların gösterilmesin.Kullanıcı tıkladığı anda gösterilsin
(function NoShowRules() {
  $("#kuralGoster").hide();
})();

//Yönlendirme Tuşları ile sorular arasında gezinme işlemi
Next.addEventListener("click", function () {
  if (count == soruDizisi.length - 1) {
    count = -1;
  }
  count++;
  soruGelsin(count);
  soruTakip.textContent = `${count + 1} . Soru`;
});

Prev.addEventListener("click", function () {
  if (count == 0) {
    count = soruDizisi.length;
  }
  count--;
  soruGelsin(count);
  soruTakip.textContent = `${count + 1} . Soru`;
});

//Soruların aktif olması
function soruGelsin(count) {
  soruYazdir.textContent = soruDizisi[count].question;
  secenek1.textContent = soruDizisi[count].options[0];
  secenek2.textContent = soruDizisi[count].options[1];
  secenek3.textContent = soruDizisi[count].options[2];
  secenek1.classList.remove("disabled");
  secenek2.classList.remove("disabled");
  secenek3.classList.remove("disabled");
}

//Question nesneleri üretildi
var soru1 = new Question(
  "'Açlık' kitabının yazarı ünlü romancı kimdir?",
  "Knut Hamsun",
  ["Jose Saramago", "Gabriel Garcia Marquez", "Knut Hamsun"]
);
var soru2 = new Question(
  "Aspirin ilk kez hangi yılda satışa çıkmıştır?",
  "1899",
  ["1899", "1937", "1915"]
);
var soru3 = new Question(
  " Dünya'nın 7 Harikası'ndan biri olan 'Halikarnas Mozolesi' nerededir?",
  "Türkiye",
  ["İtalya", "Türkiye", "Mısır"]
);
var soru4 = new Question(
  "  Fatih Sultan Mehmet’in babası kimdir?",
  "II. Murat",
  ["I. Mehmet", "II. Murat", "Yıldırım Beyazıt"]
);
soru1.addQuestionArray();
soru2.addQuestionArray();
soru3.addQuestionArray();
soru4.addQuestionArray();

//Birkaç kural tanımlandı
var kural1 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
var kural2 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
var kural3 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
var kural4 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
var kural5 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
kural1.ruleAdd();
kural2.ruleAdd();
kural3.ruleAdd();
kural4.ruleAdd();
kural5.ruleAdd();
