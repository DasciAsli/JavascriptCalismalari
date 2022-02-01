//DOM
// let val;

// val = window.document;
// val = document.all; //Sayfa üzerindeki tüm etiketleri gösterir
// val = document.all.length; //Sayfa üzerindeki tüm etiketlerin adetini verir
// val = document.all[10];
// val = document.head;
// val = document.body;
// val = document.anchors; //Sayfadaki bütün linkleri html collection şeklinde alabiliriz
// val = document.URL;
// val = document.domain; //Domaini almak için
// val = document.images; //Sayfa üzerindeki tüm resimleri getirir
// val = document.title;
// val = document.forms;
// val = document.forms[0];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;
// val = document.scripts; //Sayfadaki scriptlerin hepsini getirir
// val = document.scripts[2];
// val = document.scripts[2].getAttribute("src");

// console.log(val);

//TEKİL ELEMENT SEÇİMİ
// let val;
// val = document.getElementById("header"); //elemanı idsine göre seçmek istersek
// val = document.getElementById("header").id;
// val = document.getElementById("header").className; //idsi header olan elementin sınıf ismi nedir

// let val = document.getElementById("header");
// val.style.fontSize = "45px"; //idsi header olan elementini fontszieini 45 yaptık
// val.style.color = "red";
// val.style.fontWeight = "bold";

// let val = (document.getElementById("header").innerText = "My Todo App"); //idsi header olan elementin yazısını değiştirdik
// let val = (document.getElementById("header").innerHTML = "<b>My Todo App</b>"); //idsi header olan elementin yazısını değiştirdik ama b etiketinide algılaması için innerhtml kullandık

// console.log(val);

// let val = document.querySelector("#header"); //idsi header olan elementi queryselector ile de seçebilirz.queryselector bize daha geniş kullanım alanı sağlar
// let val = (document.querySelector("li").style.color = "red"); //Son bulduğu elemana kırmızı rengini verir.
// document.querySelector("li:last-child").style.color = "red"; //li elementlerinden sonuncusunun rengini kırmızı yapar.
// document.querySelector("li:last-child").textContent = "Task item"; //li elementlerinden sonuncusunun yazısını Task item olarak değiştirdik
// document.querySelector("li").classList.add("active"); //li ementinin clasına active ekledik

//ÇOKLU ELEMENT SEÇİMİ

//classname
// let val = document.getElementsByClassName("list-group-item");
// val[0].style.color = "blue";
// val[0].style.fontSize = "45px";
// val[0].textContent = "New item";
// console.log(val[2]);

// document.getElementsByTagName
// let val = document.getElementById("task-list"); //idsi task-list olan elementi buldu
// val = val.getElementsByTagName("li"); //bu elementin içindeki li etiketli elementleri aldı.
// console.log(val);

// document.querySelectorAll
// let val = document.querySelectorAll("li"); //sayfa üzerindeki tüm lileri aldı
// val.forEach(function (item, index) {
//   item.textContent = `${index} : Hello`;
// });
// console.log(val);

// let val = document.querySelectorAll("li:nth-child(odd)");
// val.forEach(function (item) {
//   item.style.background = "#ccc";
// });

//DOM ELEMENTLERİ ÜZERİNDE GEZİNME
// let val;
// let list = document.querySelector(".list-group");
// val = list;

// val = list.childNodes; //listenin alt elementleri geliyor.NodeList döndürür
// val = list.children; //Html Collection döndürür
// val = list.childNodes[0].nodeType; //3 değerini dönüyorsa text oldugu anlamına gelir,1'se element

// val = list.firstChild; //Node olarak gelmekte ilk eleman
// val = list.firstElementChild; //Element olarak gelmekte ilk eleman
// val = list.childElementCount; //listenin kaç elemanı var
// val = list.parentElement; //listenin bir üst elemanına ebeveynini alırız.
// val = list.children[0].nextSibling; //listenin ilk elemanının sonraki kardeşine git Node olarak getir
// val = list.children[0].nextElementSibling; //listenin ilk elemanının sonraki kardeşini element olarak getir
// val = list.children[1].previousElementSibling; //listenin ikinci elemanının önceki kardeşini element olarak getir

// for (let index = 0; index < list.childNodes.length; index++) {
//   if (list.childNodes[index].nodeType === 3) {
//     console.log(list.childNodes[index]);
//   }
// }

//Nodelist gelirse foreach ile dönebilirsin yani nodelist ise dönebilirsin
//TextNodelar satır aralıklarını temsil eder

// //ELEMENT OLUŞTURMA
// const li = document.createElement("li");
// //sınıf ekleme
// li.className = "list-group-item list-group-item-secondary";
// //özellik ekleme
// li.setAttribute("title", "New item");

// const text = document.createTextNode("new item");
// li.appendChild(text);

// const a = document.createElement("a");
// a.setAttribute("href", "#");
// a.className = "delete-item float-right";

// // const i = document.createElement("i");
// // i.className = "fas fa-times";
// // a.appendChild(i);

// //Alternatif ekleme yöntemi
// a.innerHTML = '<i class="fas fa-times"></i>';
// li.appendChild(a);
// // console.log(li);
// document.querySelector("#task-list").appendChild(li);

// //ELEMENT SİLME ve GÜNCELLEME
// const taskList = document.querySelector("#task-list");
// //Element silme
// var silinecekEleman = taskList.children[4];
// silinecekEleman.remove();
// taskList.removeChild(taskList.children[0]); //eleman silmek için alternatif yöntem
//Özellik silme
// taskList.children[0].removeAttribute("class");

//Eleman güncelleme
// const cardHeader = document.querySelector(".card-header");
// const h2 = document.createElement("h2");
// h2.setAttribute("class", "card-header");
// h2.appendChild(document.createTextNode("New Task"));

// const parent = document.querySelector(".card");
// parent.replaceChild(h2, cardHeader);

//Attributes
// var taskList = document.querySelector("#task-list");
// var link = taskList.children[0].children[0];
// val = link.getAttribute("href"); //link'in href attirbutenu alır ve val değişkenşine atar
// link.setAttribute("href", "https://www.youtube.com/"); //href attribute'nu 2.parametre ile değiştirir
// var varMı = link.hasAttribute("href");
// console.log(varMı);

//EVENT LİSTENERS

// const btn = document.querySelector("#btnDeleteAll");

// btn.addEventListener("click", function (e) {
//   console.log("btn clicked");
//   //   e.target; hangi butona tıklanıldığını vermekte.
//   e.preventDefault(); //tıkladığımız eleman bir a etiketi ve biryere yönlendirmek istiyor bu davranılının önünü kesmek için kullanıyoruz.
// });

// function btnClick() {
//   console.log("Btn Clicked");
// }

// btn.addEventListener("click", btnClick);

//MOUSE EVENTS
//CLİCK
// const ul = document.querySelector("#task-list");

// ul.addEventListener("click", eventhandler);

// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `);
// }

//DOUBLECLİCK
// const ul = document.querySelector("#task-list");

// ul.addEventListener("dblclick", eventhandler);

// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `);
// }

//MOUSE DOWN -MOUSE UP
// const ul = document.querySelector("#task-list");

// ul.addEventListener("mousedown", eventhandler); //tıkladığınız anda
// ul.addEventListener("mouseup", eventhandler); //tıklamayı sonlandırdığınız anda

// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `);
// }

//MOUSE ENTER
// const ul = document.querySelector("#task-list");

// ul.addEventListener("mouseenter", eventhandler); //mouse ile üzerine her geldiğiniz anda aktif olur
// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `);
// }

//MOUSE LEAVE
// const ul = document.querySelector("#task-list");

// ul.addEventListener("mouseleave", eventhandler); //mouse ile belirlediğimiz nesnenin üzerinden çıktığı zaman aktif olur
// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `);
// }

//MOUSE OVER
// const ul = document.querySelector("#task-list");

// ul.addEventListener("mouseover", eventhandler); //mouse ile belirlediğimiz nesnenin çerçevesine girdiğimiz zaman aktif olur
// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `);
// }

//MOUSE OUT
// const ul = document.querySelector("#task-list");

// ul.addEventListener("mouseout", eventhandler); //mouse ile belirlediğimiz nesnenin çerçevesinden çıktığımız zaman aktif olur
// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `);
// }

//Nesnelerin alt elemanlarında da mouse out ve mouse over çalışmakta.

//MOUSE MOVE
// const ul = document.querySelector("#task-list");

// ul.addEventListener("mousemove", eventhandler); //mouse oynadığı sürece aktif olur
// function eventhandler(event) {
//   console.log(`Mouse X : ${event.offsetX} `); //Mouse'un bulunduğu yerin x koordinatını verir
// }

//KEYBOARD EVENTS(Kullanıcı herhangi bir tuşa bastığı zaman olacak olaylar)

//KEYDOWN-KEYUP
// const input = document.querySelector("#txtTaskName");

// input.addEventListener("keydown", eventHandler); //input nesnesindeyken bir tuşa bastıım anda aktif olur
// input.addEventListener("keyup", eventHandler); //input nesnesindeyken tuşa basmayı sonlandırdığımda aktif olur

// function eventHandler(event) {
//   console.log(`Event type : ${event.type}`);
//   console.log(`Key code : ${String.fromCharCode(event.keyCode)}`); //Hangi tuşa bastığımı verir
// }

//FOCUS,BLUR,CUT,PASTE,SELECT
// const input = document.querySelector("#txtTaskName");

// input.addEventListener("focus", eventhandler); //mouse oynadığı sürece aktif olur
// input.addEventListener("blur", eventhandler); //mouse çerçevenin dışına çıkınca aktif olur
// input.addEventListener("cut", eventhandler); //kesme işlemi yapıldığında aktif olur
// input.addEventListener("paste", eventhandler); //yapıştırma işlemi yapıldığında aktif olur
// input.addEventListener("select", eventhandler); //yapıştırma işlemi yapıldığında aktif olur

// function eventhandler(event) {
//   console.log(`Event type : ${event.type} `); //Mouse'un bulunduğu yerin x koordinatını verir
// }

//EVENT BUBBLİNG(Bir elemana tıklanıldığı zaman alt elemanlardan üst elemanlara doğru bir aktarım etkileşim söz konusudur.içten dışa doğru gelen bir olay)

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener("click", function () {
//   console.log("form clicked");
// });

// cardBody.addEventListener("click", function (e) {
//   console.log("cardBody clicked");
//   e.stopPropagation(); //Olay sadece cardBody için geçerli olsun altındaki elementlere yansımasın demek
// });

// card.addEventListener("click", function () {
//   console.log("card clicked");
// });

// container.addEventListener("click", function () {
//   console.log("container clicked");
// });

//EVENT CAPTURİNG(Dıştan içe doğru gelen bir olay)

// const form = document.querySelector("form");
// const cardBody = document.querySelector(".card-body");
// const card = document.querySelector(".card");
// const container = document.querySelector(".container");

// form.addEventListener(
//   "click",
//   function (e) {
//     console.log("form clicked");
//     e.stopPropagation(); //Olay sadece cardBody için geçerli olsun
//   },
//   true
// );

// cardBody.addEventListener(
//   "click",
//     console.log("cardBody clicked");
//   function (e) {
//     e.stopPropagation(); //Olay sadece cardBody için geçerli olsun
//   },
//   true
// );

// card.addEventListener(
//   "click",
//   function (e) {
//     console.log("card clicked");
//     e.stopPropagation(); //Olay sadece cardBody için geçerli olsun
//   },
//   true
// );

// container.addEventListener(
//   "click",
//   function (e) {
//     console.log("container clicked");
//     e.stopPropagation(); //Olay sadece cardBody için geçerli olsun
//   },
//   true
// );

//stopPropagation'i bubbling için kullanmak daha mantıklı çünkü içten dışa doğru bir yayılım gösterdiği için tıkladığımız elemanın hangi elemente ait olduğunu direk gösterir.Ama capturing'de dıştan içe doğru bir yayılım söz konusu olduğu için tıkladığımız elemanın en üst parent elementini bize gösterir

//LOCAL && SESSİON STORAGE(Yapmış olduğumuz uygulamaların bilgilerini tarayıcı hafızasında saklamak isteriz.Bu işlem için kullanılır.)
//LOCAL STORAGE(Belli url ile ilişkilendirilmiş olan elemanları tarayıcı kapansa bile saklanıyor)
// const firstName = localStorage.setItem("firstName", "Sadık");
// const lastName = localStorage.setItem("lastName", "Turan");

// console.log(window.localStorage);

//SESSİON STORAGE(Belli url ile ilişkilendirilmiş olan elemanları tarayıcı kapanana kadar saklanıyor)

//SETITEM(Eleman atarken setItem kullanılıyor)
// const city = sessionStorage.setItem("city", "Kocaeli");
// const country = sessionStorage.setItem("country", "Türkiye");
// console.log(window.sessionStorage);

//GETITEM(Eleman atarken getItem kullanılıyor)

// let val = localStorage.getItem("firstName");
// console.log(val);

//Silme işlemi

// localStorage.removeItem("lastName"); //lastName isimli storage elemanını siler
// localStorage.clear(); //local storage'i tamamen temizler
