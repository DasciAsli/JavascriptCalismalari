// Ders1:Giriş
// console.log("Merhaba");

// Ders 2:Değişkenler
// var age;
// console.log(age);

// age = 20;
// console.log(age);

// Ders3 :Değişken Türleri

// var firstName = "Asli";
// console.log(firstName);

// var age = 30;
// console.log(typeof age); //age'in tipini konsolda yazdırır

// var isActive = true;
// console.log(typeof isActive);
// console.log(isActive);

// var job = null;
// console.log(typeof job);

// let names = ["Ali", "Veli"];
// console.log(typeof names);

// let address = {
//   city: "Kocaeli",
//   counry: "Türkiye",
// };

// console.log(typeof address);

// var calculete = function () {
//   return 0;
// };

// console.log(typeof calculete);

// var date = new Date();
// console.log(typeof date);
// console.log(date);
// console.log(String(date));

// var Ad = "Ali";
// var Soyad = "Kaya";
// var Tc = 109820;
// var Toplam = 100.0;
// var Cinsiyet = true;
// var Address = "Fabrikalar Mah";
// var hobiler = ["Sinema", "Yürüyüş", "Tiyatro"];

// var order1 = "100";
// var order2 = "150";
// var orderToplam = Number(order1) + Number(order2);

// console.log(orderToplam);

//TARİHLER
// var yearofBirth = 1993;
// var date = new Date();

// var yasHesapla = function (year) {
//   return Number(date.getFullYear()) - yearofBirth;
// };

// console.log(yasHesapla(yearofBirth));
// var course = "Modern Javascript Kursu";
// console.log(course.length);

// var Can = {
//   boy: 1.8,
//   kilo: 80,
// };
// var Ada = {
//   boy: 1.65,
//   kilo: 75,
// };

// var kitleindexHesabı = function (boy, kilo) {
//   return kilo / (boy * boy);
// };

// var durum = function (sonuc) {
//   if (sonuc >= 0 && sonuc <= 18.4) {
//     return "Zayıf";
//   } else if (sonuc >= 18.5 && sonuc <= 24.9) {
//     return "Normal";
//   } else if (sonuc >= 25.0 && sonuc <= 29.9) {
//     return "Fazla Kilolu";
//   } else {
//     return "Şişman";
//   }
// };

// console.log(durum(kitleindexHesabı(Can.boy, Can.kilo)));
// console.log(durum(kitleindexHesabı(Ada.boy, Ada.kilo)));

// var date = new Date();

// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getFullYear());
// var date2 = new Date(1993, 10);
// console.log(date2);

// let date3 = new Date("1/1/1990");
// date3.setDate(date3.getDate() - 1);
// console.log(date3);

//NUMBERS

// let val;
// val = Number("10"); //Tür Dönüşümü
// let val1 = parseInt("15"); //Tür Dönüşümü.Tam sayı döndürür.Ondalıklı sayı döndürmesi için parseFloat kullanılır.
// console.log(typeof val);
// console.log(typeof val1);

// let val3;
// val3 = isNaN("10"); //Sayısal bir değer olup olmadığını bize söyler.
// //true çıkarsa sonuç Nandır
// console.log(val3);

// var num = 10.123456789;
// val = num.toPrecision(); //Sayı kaç basamaklıysa o şekilde sayıyı getirir
// console.log(val);
// val = num.toPrecision(2); //Sayının  iki basamağını getirir.
// console.log(val);

// val = num.toFixed(2); //virgülden sonraki 2 basamağıyla beraber getirir.
// console.log(val);

// val = Math.PI; //Math objesi aracılığıyla metodlara ulaşabiliyoruz
// console.log(val);

// val = Math.round(2.4); //En yakın sayıya yuvarlama yapar
// console.log(val);

// val = Math.ceil(2.4); //Her zaman yukarı yuvarlama yapar.
// console.log(val);

// val = Math.floor(2.4); //Her zaman aşağıya yuvarlar
// console.log(val);

// val = Math.sqrt(64); //Karekök hesaplar
// console.log(val);

// val = Math.pow(2, 4); //Üs alma işlemi yapar
// console.log(val);

// val = Math.abs(-12); //Mutlak değer alır
// console.log(val);

// val = Math.min(1, 4, 5, 8); //En küçük değeri bulur
// console.log(val);

// val = Math.max(1, 4, 5, 8, 94); //En büyük değeri bulur
// console.log(val);

// val = Math.random(); //0 ile 1 arasında random sayı üretir.
// val = Math.random() * 100; //0 ile 100 arasında random sayı üretir
// console.log(val);

// //UYGULAMA
// var num = 15.123456789;

// //toplamda 3 basamaklı sayı kullan
// console.log(num.toPrecision(3));

// //Ondalık kısmı 3 basamakta sınırla
// console.log(num.toFixed(3));

// //En yakın sayıya yuvarla
// console.log(Math.round(num));

// //Aşağı yuvarla
// console.log(Math.floor(num));

// //Yukarı yuvarla
// console.log(Math.ceil(num));

// //1,2,10,56,20 sayılarından en küçük ve en büyüğü bul
// console.log(Math.min(1, 2, 10, 56, 20));
// console.log(Math.max(1, 2, 10, 56, 20));

// //Sayı aralığını kullanıcının belirleyeceği rastegele bir sayı üret
// var x = 50;
// var y = 100;
// console.log(Math.floor(x + Math.random() * (y - x)));

// var mesai = 10.3;
// var Brüt = 3700;
// var maas = Brüt + 42 * 10.3;
// console.log(maas);
// var maas = maas - maas * 0.25;
// console.log(maas);

// console.clear();

// //STRİNGS

// const firstName = "Sadık";
// const lastName = "Turan";
// const age = 35;
// var hobbies = "Sinema,Tiyatro,Yürüyüş";

// //String concatenation
// val = firstName + " " + lastName;
// val =
//   "Benim adım " +
//   firstName +
//   " " +
//   lastName +
//   " " +
//   "Yaşım " +
//   age +
//   " " +
//   "İzmit'te yaşıyorum";

// // val = firstName.concat(" ", lastName); //Birleştirme yapar.
// // val = val.length;// Karakter sayısını verir
// // val = val.toUpperCase(); //Büyük harfle yazdırır
// // val = val.toLowerCase(); //Küçük harfle yazdırır
// // val = val[0]; //val değerinin 0.indexindeki elemanı getirir
// //  val = val.indexOf("s"); //s karakteri kaçıncı indexte
// // val = val.substring(0, 5); //0 ile 5.index arası karakterleri getirir
// // val = val.slice(0, 5); //0 ile 5.index arası karakterleri getirir
// // val = val.replace("Sadık", "Çınar"); //Sadık değerini Çınar olarak değiştirir.
// // val = val.trim(); //Başındaki ve sonundaki boşlukları alır.
// // hobbies = hobbies.split(","); //virgül gördüğü yerleri ayırarak dizi haline getirdi.[Sinema,Tiyatro,Yürüyüş]

// console.log(val);
// console.log(typeof val);
// console.log(hobbies);

// //UYGULAMA
// var sentence =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting multi-line industry.";

// var url =
//   "https://www.udemy.com/course/komple-web-developer-kursu/learn/lecture/17801902#questions";
// //Cümle kaç karakterlidir?
// var karaketrsayisi = sentence.length;
// console.log(karaketrsayisi);

// //kaç kelimeden oluşuyor?
// var kelimesayisi = sentence.split(" ");
// console.log(kelimesayisi.length);

// //Tüm cümleyi küçük harfe çevirin
// console.log(sentence.toLowerCase());

// //Cümlenin başındaki ve sonundaki boşlukları siliniz
// console.log(sentence.trim());

// //-karakterini silin
// console.log(sentence.replace("-", " "));

// //url hangi protokolü kullanmaktadır?
// console.log(url.startsWith("http")); //url http ile başlıyorsa true döndürür
// console.log(url.startsWith("https")); //url https ile başlıyorsa true döndürür

// //url .com ifadesi içeriyor mu?
// console.log(url.indexOf(".com")); //.com'un indexini verir
// console.log(url.includes(".com")); //.com içinde varsa true döndürür

// console.clear();

// //TEMPLATE LİTERALS

// const fullName = "Sena Turan";
// const city = "Kocaeli";
// const yearofBirth = 1999;

// val =
//   "My name is" +
//   fullName +
//   "I'm " +
//   (2018 - yearofBirth) +
//   "years old" +
//   "and I live in " +
//   city;

// val = `my name is ${fullName} I'm ${
//   //ternary operator
//   2018 - yearofBirth >= 18 ? "over 18" : "under 18"
// } years old and I live in ${city} `;

// console.log(val);

// console.clear();

//DİZİLER
var names = ["Çınar", "Sena", "Ada"];
var years = [2017, 1999, 2012, 1996];
var mix = ["Sadık", "Turan", 1983];
// console.log(names);
// console.log(names.length); //Dizi kaç elemanlı
// console.log(years);
// console.log(mix);

// console.log(names[0]); //names dizisinin ilk elemanını verir
// names[0] = "Emel"; //0.indexdeki elemanı Emel ile değiştirdik
// console.log(names[0]);
// console.log(names);

// names[names.length] = "Asli"; //Asli elemanıni eklemiş olduk
// console.log(names);

// years.push(1986); //Eleman ekleme
// years.unshift(1987); //En başa ekler
// console.log(years);

// years.pop(); //Son elemanı siler
// years.shift(); //İlk elemanı siler
// console.log(years);

// console.log(names.indexOf("Ada")); //Adanın index değerini verir
// names = names.reverse(); //Ters çevirir
// console.log(names);

// console.log(years.sort()); //Küçükten büyüğe sıralama yapar

// console.log(names.concat(years)); //names dizisine years dizisini ekledi

// console.log(names.splice(2, 0, "seda")); //2.elemandan sonra 0 kadar eleman sil ve sedayı ekle diziye
// console.log(names);
// function over18(year) {
//   var yas = 2022 - year;
//   return yas >= 18;
// }

// var ilkdeger = years.find(over18); //over8 değerini true döndüren ilk değeri getirir.
// console.log(ilkdeger);

// var degerler = years.filter(over18); //over18 değerini true döndüren değerleri getirir
// console.log(degerler);

//UYGULAMA

// //Bmw,Mercedes,Opel,Mazda elemanlarına sahip bir dizi oluşturun
// var cars = ["Bmw", "Mercedes", "Opel", "Mazda"];

// //Dizi kaç elemanlıdır?
// console.log(cars.length);

// //Dizinin ilk ve son elemanı nedir?
// console.log(cars[0], cars[cars.length - 1]);

// //Renault değerini dizinin sonuna ekleyin
// cars.push("Renault");
// console.log(cars);

// //Toyota değerini dizinin başına ekleyiniz
// cars.unshift("Toyota");
// console.log(cars);

// //Renault değerini sil
// cars.pop("Renault");
// console.log(cars);

// //Toyota değerini siliniz
// cars.shift("Toyota");
// console.log(cars);

// //Dizi elemanlarını ters çevir
// console.log(cars.reverse());

// //Dizi elemanlarını alfabetik olarak sıralayın
// console.log(cars.sort());

// //[1,2,5,80] dizisini sıralayın
// console.log([1, 2, 5, 80].sort());

// //Opel değeri dizinin bir elemanı mıdır
// console.log(cars.includes("Opel"));

// //var str="Chevrolet,Dacia" ifadesini diziye çevir
// var str = "Chevrolet,Dacia";
// var strdizi = str.split(",");
// console.log(strdizi);

// //oluşturulan 2 dizinin elemanlarını bir başka dizi ile birleştirin

// var complexarr = cars.concat(strdizi);
// console.log(complexarr);

// //Oluşturulan elemanın son 2 elemanını siliniz

// complexarr.splice(complexarr.length - 2, 2);
// console.log(complexarr);

// var dizi = [
//   ["Yiğit", "Bilgi", 2010],
//   ["Sena", "Turan", 1999],
//   ["Ahmet", "Turan", 1998],
// ];
// console.log(dizi);
// console.log(dizi[0][0]);

// console.clear();

//KOŞUL İFADELERİ UYGULAMALARI

//20.01.2022 tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmişir.
//Bu bilgilere göre servis uyarısını veriniz.
// 1.Bakım :1yıl
// 2.Bakım :2yıl
// 3.bakım :3yıl

// var trafigecıkılantarih = new Date("01/20/2021");
// console.log(trafigecıkılantarih);
// var anTarihi = new Date();
// switch (anTarihi.getFullYear() - trafigecıkılantarih.getFullYear()) {
//   case 1:
//     console.log("Aracınızın 1.bakımı gelmiştir");
//     break;
//   case 2:
//     console.log("Aracınızın 2.bakımı gelmiştir");
//     break;
//   case 3:
//     console.log("Aracınızın 3.bakımı gelmiştir");
//     break;
//   default:
//     break;
// }

// console.clear();

// var role = prompt("Who is there");
// var password = prompt("What is the password?");

// switch (role) {
//   case "Cancel":
//     break;
//   case "Other":
//     console.log("I do not know you");
//     break;
//   case "Admin":
//     if (password == 123) {
//       console.log("Welcome");
//     } else if (password != 123) {
//       console.log("Wrong Password");
//     }
//     break;
//   default:
//     console.log("Login again please");
//     break;
// }

//OBJECT LİTERALS
// let person = {
//   firstName: "Çınar",
//   lastName: "Turan",
//   age: 10,
//   hobbies: ["Müzik", "Oyun"],
//   address: {
//     city: "Kocaeli",
//     country: "Türkiye",
//   },
//   getBirthYear: function () {
//     return 2022 - this.age;
//   },
// };

// val = person.getBirthYear();
// console.log(val);

// var people = [
//   { firstName: "Çınar", lastName: "Turan" },
//   { firstName: "Sena", lastName: "Turan" },
//   { firstName: "Seda", lastName: "Turan" },
// ];

// var ilkeleman = people[2].firstName;
// console.log(ilkeleman);

// var arac = {
//   id: "bmw116d_1234",
//   model: "116d",
//   yıl: 2015,
//   ren: beyaz,
//   serviskayıtları: [
//     {
//       id: "bmw116d_1234_1",
//       tarih: "20.01.2016",
//       km: 13000,
//       toplamucret: 900,
//       detay: [
//         {
//           id: "bmw116d_1234_1_1,",
//           acıklama: "Yağ değişimi",
//           ucret: 300,
//         },
//         {
//           id: "bmw116d_1234_1_2,",
//           acıklama: "Filtre değişimi",
//           ucret: 300,
//         },
//         {
//           id: "bmw116d_1234_1_3,",
//           acıklama: "Fren değişimi",
//           ucret: 300,
//         },
//       ],
//     },
//     {
//       id: "bmw116d_1234_2",
//       tarih: new Date(),
//       km: 10000,
//       toplamucret: 1200,
//       detay: [
//         { id: "bmw116d_1234_2_1,", acıklama: "Yağ değişimi", ucret: 300 },
//         { id: "bmw116d_1234_2_2,", acıklama: "Filtre değişimi", ucret: 300 },
//         { id: "bmw116d_1234_2_3,", acıklama: "Fren değişimi", ucret: 300 },
//         { id: "bmw116d_1234_2_3,", acıklama: "Balata değişimi", ucret: 300 },
//       ],
//     },
//   ],
// };

//LOOPS
//for loop

// for (let index = 0; index <= 10; index++) {
//   if (index == 3) {
//     console.log("En sevdiğim rakam " + index);
//     continue;
//   }
//   console.log(index);
// }

//while loop

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

//do while loop
// var x = 0;
// do {
//   console.log(x);
//   x++;
// } while (x <= 10);

//ÖNEMLİ BİLGİ let ve var arasındaki fark let'in sadece bulunduğu süslü parantez içinden erişilebilir var'ın ise her yerden erişilebilir olmasıdır

//10dan 1e kadar olan sayıların çarpımı
// var sonuc = 1;
// for (let index = 10; index >= 1; index--) {
//   sonuc = sonuc * index;
// }
// console.log(sonuc);

//for ile *larla ters üçgen oluştur

// for (var i = 3; i >= 0; i--) {
//   var yıldız = "";
//   for (var j = 0; j <= i; j++) {
//     yıldız = yıldız + "*";
//   }
//   console.log(yıldız);
// }

//LOOPS İN ARRAY & OBJECTS

var cars = ["Bmw", "Mercedes", "Toyota"];

// for (let index = 0; index < cars.length; index++) {
//   console.log(cars[index]);
// }

//for-in
// for (const i in cars) {
//   console.log(cars[i]);
// }

//for-each

// cars.forEach(function (item) {
//   console.log(item);
// });

//map:returns an array

// let numbers = [1, 2, 3, 4, 10];
// let num = numbers.map(function (a) {
//   return a * a;
// });
// console.log(num);

//UYGULAMA
//1-10 arası rastgele sayı üretilen bir sayıyı aşağı yukarı ifadeleri ile buldurmaya çalışın
//Puanlama yapın

// var rsayi = Math.floor(Math.random(0, 1) * 10);
// var puan = 100;
// console.log(rsayi);
// alert(
//   "Sayı tahmin oyununa hoşgeldiniz.10 adet deneme hakkınız bulunmakta.Lütfen başlayın"
// );
// var i = 0;
// do {
//   i++;
//   var ksayi = prompt("Tahmin giriniz");
//   if (rsayi == Number(ksayi)) {
//     alert(`Doğru tahmin!!! Puanınız:${puan} `);
//     break;
//   }
//   if (i == 10) {
//     alert(`Kaybettiniz :( `);
//   }
//   puan = puan - 10;
// } while (i < 10);

//FUNCTİON

// function yasHesapla(dogumYili) {
//   var date = new Date();
//   return date.getFullYear() - dogumYili;
// }
// console.log(yasHesapla(1983));

//Function Declarations

// function sum(a, b) {
//   var c = a + b;
//   return c;
// }
// console.log(sum(10, 20));

//Function Expressions

// const sum = function (a, b) {
//   var c = a + b;
//   return c;
// };

// console.log(sum(10, 20));
// console.log(sum(10)); //Bu şekilde bir kullanımda b parametresi boş geleceği için NaN(Not a Number) değeri döndürür
// console.log(sum(10, 20, 30, 40)); //Bu şekilde bir kullanımda gönderilen fazla parametreler kullanıma alınmaz ve programda hata vermez

// function arg() {
//   console.log(arguments); //arguments özel bir property dizinin argümanlarını getiriyor
// }

// arg(10, 20, 30);

// function sumAll() {
//   var total = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     total += arguments[index];
//   }
//   console.log(total);
// }

// sumAll(10, 20, 40, 50);

//UYGULAMA
//Banka uygulaması

// var kBanka = {
//   cekmelimiti: 2000,
//   ekHesap: 650,
// };

// function bankamatik(cekilecektutar) {
//   if (
//     cekilecektutar > kBanka.cekmelimiti &&
//     cekilecektutar - kBanka.cekmelimiti < kBanka.ekHesap
//   ) {
//     var cevap = prompt(
//       "Çekmek istediğiniz tutar limitinizi aşmaktadır.Ek hesabın kullanılmasını ister misiniz?"
//     );
//     if (cevap == "Evet") {
//       kBanka.ekHesap = kBanka.ekHesap - (cekilecektutar - kBanka.cekmelimiti);
//       kBanka.cekmelimiti = 0;
//     }
//   } else if (
//     cekilecektutar > kBanka.cekmelimiti &&
//     cekilecektutar - kBanka.cekmelimiti > kBanka.ekHesap
//   ) {
//     alert(
//       "Çekmek istediğiniz tutar limitinizi ve esnek hesabınızı aşmaktadır."
//     );
//   } else if (cekilecektutar < kBanka.cekmelimiti) {
//     kBanka.cekmelimiti = kBanka.cekmelimiti - cekilecektutar;
//   }
//   console.log(
//     `Cekme limitiniz: ${kBanka.cekmelimiti} \n Esnek Hesap : ${kBanka.ekHesap}`
//   );
// }

// bankamatik(2200);

//WİNDOW OBJECT

// let val;
// var a = 10;
// function abc() {
//   return 0;
// }
// val = window; //Sayfada tanımladığımız değişkende window objesinin bir elemanı oluyor.Bu tanımlamaya global scope denmekte.

// alert("Merhaba");//Uyarı mesajı
// var b = prompt("Bir sayi giriniz");//Kullanıcıdan veri almak için kullanılıyor
// var confirm = confirm("emin misiniz?"); //Kullanıcıdan teyit almak için kullanılıyor
// val = window.location; //host ,hostname,href gibi sayfa hakkındaki detayları verir
// console.log(val);

//SCOPES-->Yazdığımız bir değişkenin hangi kod parçası tarafından ulaşılır olup olmamasıyla alakalıdır
//Global scope
// var isim = "Çınar";

// function logName() {
//   console.log(isim);
// }
// logName();

//fonksiyon içindeki özel değişkene dışarıdan ulaşamayız
// function Yashesapla() {
//   var dogumYili = 1993;
//   var yil = new Date().getFullYear();
//   return yil - dogumYili;
// }

// console.log(dogumYili); //Hata verir
// console.log(Yashesapla());

//Local scopes
//Fonksiyonlar kendi scopelarını oluşturur ama Blocklar yeni scope oluşturmaz
// var age = 20;
// function degistir() {
//   var age = 15;
//   console.log(age);
// }
// if (true) {
//   var age = 25;
// }
// degistir();
// console.log(age);

// if (true) {
//   var model = "Opel";
//   let year = 2016;
//   const color = "white";
//   //   console.log(model, year, color);
// }
// console.log(model, year, color); //burada hata verir çünkü year let ile tanımlandığı için bulunduğu bloğun içinde çağrılabilir.
//DOM(Document Object Model)
