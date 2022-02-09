// //ARROW FUNCTİON
// let multiplyES6 = (x, y) => {
//   return x * y;
// };

// console.log(multiplyES6(2, 3));

// /*************************************/
// let splitES6 = (text) => text.split(" ");
// console.log(splitES6("Welcome to ES6"));

//Object Literals
//ES5 ile kullanımı
// let getProductES5 = function (id, name) {
//   return {
//     id: id,
//     name: name,
//   };
// };
// console.log(getProductES5("1", "Ayşe"));

// //ES6 ile kullanımı
// let getProductES6 = (id, name) => ({
//   id: id,
//   name: name,
// });

// console.log(getProductES6("2", "Fatma"));

// const phones = [
//   { name: "IPhone 8", price: 3000 },
//   { name: "IPhone 6", price: 2000 },
//   { name: "IPhone 5", price: 1000 },
//   { name: "IPhone 7", price: 2500 },
// ];
// //ES5 ile kullanımı
// let priceES5 = phones.map(function (phone) {
//   return phone.price;
// });
// console.log(priceES5);

// //ES6 ile kullanımı
// let priceES6 = phones.map((phone) => phone.price);
// console.log(priceES6);

// //ES5 ile filtreleme
// const arr = [1, 2, 3, 6, 10, 20, 40];

// var filterES5 = function (value) {
//   return arr.includes(value);
// };

// console.log(filterES5(10));

// // ES6 ile filtreleme
// var filterES6 = (value) => arr.includes(value);
// console.log(filterES6(3));

//This keywordu
//ES5 ile kullanımı
// let list = {
//   category: "phone",
//   names: ["Samsung", "Iphone", "Nokia"],
//   call: function () {
//     var self = this;
//     this.names.forEach(function (item) {
//       console.log(`${item} ${self.category}`);
//     });
//   },
// };
// list.call();

// //ES6 ile kullanımı
// let list = {
//   category: "phone",
//   names: ["Samsung", "Iphone", "Nokia"],
//   call: function () {
//     this.names.forEach((item) => {
//       console.log(`${item} ${this.category}`); //Burada this kullanmak es6da sıkıntı çıkarmamakta.Çünkü arrow function yeni bir this objesi oluşturmuyor
//     });
//   },
// };
// list.call();

/********************/
//ES5 ile örnek
// var Game = function () {
//   (this.live = 0),
//     (this.addLive = function () {
//       var self = this;
//       setInterval(function () {
//         self.live++;
//         console.log(self.live);
//       }, 1000);
//     });
// };
// var x = new Game();
// x.addLive();

//ES6 ile örnek
// var Game = function () {
//   (this.live = 0),
//     (this.addLive = () => {
//       setInterval(() => {
//         this.live++;
//         console.log(this.live);
//       }, 1000);
//     });
// };
// var x = new Game();
// x.addLive();

// //SPREAD OPERATOR
// function getTotal(a, b, c) {
//   return a + b + c;
// }

// console.log(getTotal(1, 2, 3));

// let numbers = [1, 2, 3];
// //numbers dizisindeki elemanları getTotale parametre olarak gönderebiliriz spread operator kullanarak

// //ES5 ile kullanımı

// console.log(getTotal.apply(null, numbers));
// //ES5 ile kullanımı
// console.log(getTotal(...numbers));

// let arr1 = ["one", "two"];
// let arr2 = ["three", "four"];
// arr1.push(...arr2);
// console.log(arr1);

//REST PARAMETER
//Rest kendisine gelen argümanları diziye çevirir.

//ES5 ile kullanım
// var getTotal = function () {
//   var dizi = [];
//   var total = 0;
//   for (let index = 0; index < arguments.length; index++) {
//     dizi.push(arguments[index]); //argumanlardan gelen değerler ile bir dizi oluşturdum
//     total += arguments[index];
//   }
//   console.log(total);
// };
// getTotal(10, 20, 30);

//ES6 ile kullanım
// function getTotal(...arguments) {
//   let toplam = 0;
//   arguments.forEach((item) => (toplam += item));
//   console.log(toplam);
// }
// getTotal(5, 10, 15);

// //ES6 ile bir rest parametre örneği
// Önemli ! Rest parametresi birden fazla parametre ile beraber kullanılacaksa en son parametreye yazılır
// function isDriver(age, ...years) {
//   years.forEach((item) => console.log(2022 - item >= age));
// }

//DESTRUCTİNG
//Desructing assignment
var a, b, rest;

// [a, b] = [10, 20];

// console.log(a);
// console.log(b);

/**********************************/
// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a);
// console.log(b);
// console.log(rest);

//Array Destructing

// var arrConfig = ["localhost", "8080", "900"];

// //ES5 ile kullanım
// var server = arrConfig[0];
// var port = arrConfig[1];
// var timeout = arrConfig[2];
// console.log(server, port, timeout);

//ES6 ile kullanım
// const [server, port, timeout] = arrConfig;
// console.log(server, port, timeout);

//Object Destructing
// const objConfig = {
//   server: "localhost",
//   port: "8080",
//   timeout: "900",
// };

//ES5 ile kullanımı
// var server = objConfig.server;
// var port = objConfig.port;
// var timeout = objConfig.timeout;
// console.log(server, port, timeout);

//ES6 ile kullanımı
// const { server, port, timeout } = objConfig;
// console.log(server, port, timeout);

// const days = ["Monday", "Tuesday", "Wednesday"];
// const [a, b] = days; //ilk iki parametreyi alır
// Wednesdayi almak istiyorsan
// const [, , x] = days;
// console.log(x); //Wednesday sonucunu döndürür

//ES6 iLE DİZİ KULLANIMI
// const boxes = document.querySelectorAll("div");

//ES5 ile kullanım
// let boxesES5 = Array.prototype.slice.call(boxes);
// console.log(boxesES5);
// boxesES5.forEach(function (box) {
//   box.style.backgroundColor = "green";
// });

//ES6 ile kullanım
// Array.from(boxes).forEach((box) => (box.style.backgroundColor = "green"));

//ES6 ile örnek

//MAPS OBJESİ KULLANIMI
//Map objesinde key/value pairs(collectionları saklayabiliyoruz)

// let val;
// const numbers = new Map();

// numbers.set(1, "one");
// numbers.set(2, "two");
// numbers.set(3, "three");
// numbers.set(4, "four");
// val = numbers;
// val = numbers.get(1);
// val = numbers.size;
// val = numbers.has(1);
// numbers.delete(4);
// // numbers.clear();
// for (const [key, value] of numbers) {
//   console.log(key + "= " + value);
// }

// for (var value of numbers.values()) {
//   console.log(value);
// }

// console.log(val);

//SETS(Collection-Unique Value)
//Bir collection türüdür.Tekil değerler tutmak
// let val;
// var mySet = new Set();
// val = mySet;

// mySet.add(1);
// mySet.add(2);
// mySet.add(2); //Aynı değeri 2 kez eklersen collectiona eklemez çünkü tekil veriler tutuyor
// mySet.add(3);
// mySet.add("dort");

// val = mySet.has(3); //mysetin içinde 3 değeri var mı?true ya da false döndürür
// val = mySet.size; //mysetin içinde kaç adet eleman var?
// mySet.delete(1);
// console.log(Array.from(mySet));
// console.log([...mySet]);

// var mySet2 = new Set([9, 8, 7, 6, 2, 3]);
// console.log(mySet2);

// //intersect
// var intersect = new Set(Array.from(mySet).filter((x) => mySet2.has(x))); //mySet'in içinden mySet2de olan elemanları seç ve bir dizi oluştur
// //Array .from yerine [...mySet]de kullanabiliriz-diziye çevirmek için
// console.log(intersect);

//CLASS
//ES5 ile kullanım

// var PersonES5 = function (name, year) {
//   this.name = name;
//   this.year = year;
// };
// PersonES5.prototype.calculateAge = function () {
//   console.log(2018 - this.year);
// };
// var yigit = new PersonES5("yigit", 2010);
// yigit.calculateAge();

//ES6 ile kullanım

// class PersonES6 {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   calculateAge() {
//     return 2018 - this.year;
//   }
// }

// var emel = new PersonES6("Emel", 1989);
// console.log(emel.calculateAge());

//STATİC METHODLAR
// class PersonES6 {
//   constructor(name, year) {
//     this.name = name;
//     this.year = year;
//   }

//   calculateAge() {
//     return 2018 - this.year;
//   }

//   static sayHi() {
//     console.log("Hello there");
//   }
// }
// //static methodlara oluşturulan kopyalar üzerinden ulaşamayız classın kendisinin üzerinden ulaşabiliyoruz
// PersonES6.sayHi();

//SUB CLASSES
//ES5 ile kullanım
// var Persones5 = function (firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Persones5.prototype.sayHi = function () {
//   console.log("Hello there.I am " + this.firstName + " " + this.lastName);
// };

// var customerES5 = function (firstName, lastName, phone, userName) {
//   Persones5.call(this, firstName, lastName);
//   this.phone = phone;
//   this.userName = userName;
// };

// customerES5.prototype = Object.create(Persones5.prototype);
// customerES5.constructor.type = customerES5;

// var customer = new customerES5("Sena", "Turan", 1111, "Senna");
// customer.sayHi();

//ES6 ile kullanım
class PersonES6 {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHi() {
    console.log("Hello there.I am " + this.firstName + " " + this.lastName);
  }
}

class CustomerES6 extends PersonES6 {
  constructor(firstName, lastName, phone, userName) {
    super(firstName, lastName);
    this.phone = phone;
    this.userName = userName;
  }
}

//ES5de yaptığımız gibi prototypelarını kopyalamamıza gerek yok extend ettiğimiz için

let customer1 = new CustomerES6("Volkan", "Yükselen", 111, "VolkanYukselen");
customer1.sayHi();
