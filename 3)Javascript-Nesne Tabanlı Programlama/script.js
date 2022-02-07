// var yigit = {
//   name: "Yigit",
//   age: "18",
//   job: "Student",
// };

// console.log(yigit);
// console.log(yigit.name);

// //array
// var dizi = [10, 20, 30];
// console.log(dizi);

//NESNE OLUŞTURMA
//Object literals
// let ali = {
//   name: "Ali",
//   yearofBirth: 2010,
//   job: "Student",
// };

// function Person(name, yearofBirth, job) {
//   this.name = name;
//   this.yearofBirth = yearofBirth;
//   this.job = job;
//   this.calculateAge = function () {
//     var date = new Date();
//     return date.getFullYear() - yearofBirth;
//   };
// }

// let adem = new Person("Adem", 1990, "engineer");
// let emel = new Person("Emel", 1993, "architect");

// console.log(adem.name);
// console.log(adem.yearofBirth);
// console.log(adem.job);
// console.log(adem.calculateAge());

//PROTOTYPE

// function Person(name, yearofBirth, job) {
//   this.name = name;
//   this.yearofBirth = yearofBirth;
//   this.job = job;
// }

// Person.prototype.calculateAge = function () {
//   var date = new Date();
//   return date.getFullYear() - this.yearofBirth;
// };

// Person.prototype.GetName = function () {
//   console.log(this.name);
// };

// let emel = new Person("Emel", 1993, "architect");

// console.log(emel);
// console.log(emel.calculateAge());
// emel.GetName();

// console.log(emel.hasOwnProperty("name")); //true değerini döndürür.Çünkü emel nesnesinin name isminde bir propertysi var

//CONSTRUCTOR & PROTOTYPE UYGULAMASI
// Dışarıdan name ve salary bilgilerini alan Employee constructorı oluştur.Yıl içinde o ana kadar alınan toplam maaş ve alınan toplam vergi tutarını hesaplayan fonksiyonu oluşturun

// 20.000'e kadar %20 vergi
// 30.000'e kadar %25 vergi
// 30.000'den sonra %27 vergi

// var Employee = function (name, salary) {
//   this.name = name;
//   this.salary = salary;
// };

// Employee.prototype.TaxCalculate = function () {
//   if (this.salary < 20.0) {
//     var tax = 0.2;
//   } else if (this.salary < 30.0) {
//     var tax = 0.25;
//   } else {
//     var tax = 0.27;
//   }
//   var totalSalary = 12 * this.salary - 12 * this.salary * tax; //1 yılda aldığı maaş
//   var totalTax = 12 * this.salary * tax;

//   return `Toplam Maaş : ${totalSalary}\nToplam Alınan Vergi : ${totalTax} `;
// };

// let Mehmet = new Employee("Mehmet", 10.0);
// console.log(Mehmet.TaxCalculate());

//OBJECT CREATE
// let personProto = {
//   calculateAge: function () {
//     return 2022 - this.yearOfBirth;
//   },
// };

// //calculateAge proto kısmında değil de nesnenin özellik kısmında çıkar.
// console.log(personProto);

// //var olan bir objeyi başka bir objenin proto kısmına ekleyebiliriz.
// let yigit = Object.create(personProto);
// yigit.name = "yigit";
// yigit.yearOfBirth = 1990;
// yigit.job = "teacher";
// console.log(yigit);

// let emel = Object.create(personProto, {
//   name: { value: "Emel" },
//   yearOfBirth: { value: 1993 },
//   job: { value: "Farmer" },
// });

// console.log(emel);
// console.log(emel.calculateAge());

//PROTOTYPE TABANLI KALITIM
// var Person = function (name, yearOfBirth, job) {
//   this.name = name;
//   this.yearOfBirth = yearOfBirth;
//   this.job = job;
// };

// Person.prototype.calculateAge = function () {
//   return 2022 - this.yearOfBirth;
// };

// var Teacher = function (name, yearOfBirth, job, subject) {
//   Person.call(this, name, yearOfBirth, job); //Bu teacher objesini al ve bunun içine Persondan gelen name,yearOfBirth ve job özelliklerini ekle
//   this.subject = subject;
// };

// //Inherit the Person prototype methods
// Teacher.prototype = Object.create(Person.prototype);

// //set Teacher constructor
// Teacher.prototype.constructor = Teacher;

// let emel = new Teacher("Emel", 1990, "Teacher", "Matematik");
// console.log(emel);

//BUILT-IN CONSTRUCTOR

//String
// var str1 = "Sadık"; //Primitive
// var str2 = new String("Sadık"); //Object

// console.log(typeof str1);
// console.log(typeof str2);

// //Number
// var num1 = 10;
// var num2 = new Number(10);

// //Array
// var arr1 = ["ada", "yigit", "sena"];
// var arr2 = new Array("ada", "yigit", "sena");
// //Bunların ikisi aynı işlevi görür çünkü dizi zatne bir ojedir ama string ve number primitive tiptedir.new ile oluşturursak Obje şeklinde oluşturmuş oluruz.

// //yeni bir string nesnesi oluşturduk.Ama string constructorı içindeki methodlar bize yeterli gelmezse yeni methodlar tanımlayabiliriz.
// var str3 = new String("Cansu");
// String.prototype.repeat = function (n) {
//   return new Array(n + 1).join(this); //join methodu bir array içindeki bütün elemanları birleştirerek string bir ifade döndürür
// };

// console.log("4".repeat(2));

//KALITIM UYGULAMASI

// //Person constructor
// var Person = function (name) {
//   this.name = name;
// };

// Person.prototype.Introduce = function () {
//   console.log(`My name is ${this.name}`);
// };

// //Student constructor
// var Student = function (name, number) {
//   Person.call(this, name);
//   this.number = number;
// };

// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.study = function () {
//   console.log("I am a student");
// };

// let ogr = new Student("Nehir", 332);
// console.log(ogr);
// ogr.Introduce();
// ogr.study();

// //Teacher constructor
// var Teacher = function (name, branch) {
//   Person.call(this, name);
//   this.branch = branch;
// };

// Teacher.prototype = Object.create(Person.prototype);
// Teacher.prototype.constructor = Teacher;
// Teacher.prototype.teach = function () {
//   console.log("I am a teacher");
// };

// var teacher = new Teacher("Ayşe", "Matematik");
// console.log(teacher);
// teacher.Introduce();
// teacher.teach();

// //HeadMaster Constructor
// var HeadMaster = function (name, branch) {
//   Teacher.call(this, name, branch);
// };

// HeadMaster.prototype = Object.create(Teacher.prototype);
// HeadMaster.prototype.constructor = HeadMaster;
// HeadMaster.prototype.shareTask = function () {
//   console.log("I am a headmaster");
// };

// var head1 = new HeadMaster("Metin", "Türkçe");
// console.log(head1);
// head1.Introduce();
// head1.teach();
// head1.shareTask();

//PRİMİTİVE & OBJECTS
// var a = 10;
// var b = a;

// console.log(a);
// console.log(b);

// var obj1 = {
//   name: "A",
//   age: 1,
// };

// var obj2 = obj1;
// obj2.age = 2; //Bu işlemi yaptığımızda obj1in de age'i 2 olur.
// //Çünkü primitive tiplerde stackde ayrı ayrı yerlerde tutulur veriler ama objectlerde aynı adreste tutulur.

// console.log(obj1);
// console.log(obj2);

/******************************/

// var num = 50;
// var account = {
//   name: "Yigit",
//   accountNumber: "123456",
// };

// function update(a, b) {
//   a = 100;
//   b.accountNumber = "22222";
// }

// update(num, account);

// /*Burası önemli!Primitive değişkenlere stack üzerinden direkt ulaşabiliyoruz ancak reference tipli değişkenler heap üzerinde yer aldığı için direkt ulaşamıyoruz.Bunun için stackde bir reference belirlememiz gerekiyor ve bu reference yardımıyla heape ulaşabiliyoruz.Function burada bir object.
// update(num,account) dediğimiz zaman update fonksiyonunu çalıştırıyoruz ve burada update'in parametresi olan num'a (Bu num stackdeki num ile aynı değil-kopyası gibi düşün) 100degerini aktarmış oluyoruz.Yani primitive tipteki num'ın değeri değişmiyor.ancak account'ın accountNumber değişkenini değiştirerek adresteki account değişkeninin içeriğini değiştirmiş oluyoruz.*/
// console.log(account.name);
// console.log(account.accountNumber);
// console.log(num);

/******************************/

//CALLBACK FUNCTİONS

// let val;
// function MultipleByTwo(a, b, c, callback) {
//   let arr = [];
//   for (let i = 0; i < 3; i++) {
//     arr[i] = callback(arguments[i] * 2);
//   }
//   return arr;
// }

// function addOne(a) {
//   return a + 1;
// }

// val = MultipleByTwo(1, 2, 3, addOne);
// // val = addOne(10);
// // for (var index = 0; index < val.length; index++) {
// //   val[index] = addOne(val[index]);
// // }

// console.log(val);

/******************************/

//IMMEDIATE FUNCTİONS
//Yazdığımız fonksiyonun sadece programın başında bir kere çalışmasını istersek immediate functionsları kullanmamız gerekir.

// (function welcome(name) {
//   var days = [
//     "Sunday",
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//   ];
//   var today = new Date();
//   var message = `Welcome ${name} Today is ${days[today.getDay()]}`;
//   console.log(message);
// })("Ayşe");

/******************************/

//FONKSİYONDAN FONKSİYON DÖNDÜRME

// function Question(hobby) {
//   switch (hobby) {
//     case "Car":
//       return function (name) {
//         console.log(`${name}, Do you have a car?`);
//       };
//       break;
//     case "Book":
//       return function (name) {
//         console.log(`${name} , What is your favourite book?`);
//       };
//       break;
//     case "Software":
//       return function (name) {
//         console.log(`${name} , Are you interested in asp.net?`);
//       };
//       break;
//     default:
//       return function (name) {
//         console.log(`${name} , How are you?`);
//       };
//       break;
//   }
// }

// var softwareQuestion = Question("Software");
// softwareQuestion("Asli");

// var bookQuestion = Question("Book");
// bookQuestion("Evrim");

/******************************/

//GETTER & SETTER

//Uzun yöntem
// const person = {
//   firstName: "Sadık",
//   lastName: "Turan",
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   setFullName: function (value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

//Kısa yöntem
// var person = {
//   firstName: "Sadık",
//   lastName: "Turan",
//   // get FullName() {
//   //   return `${this.firstName} ${this.lastName}`;
//   // },
//   // set FullName(value) {
//   //   const parts = value.split(" ");
//   //   this.firstName = parts[0];
//   //   this.lastName = parts[1];
//   // },
// };

// //getter ve setterları eklemenin başka bir yöntemi
// Object.defineProperty(person, "fullName", {
//   writable: true, //set methodunun yazdırılabilir olması için
//   get function() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set function(value) {
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// });

// person.fullName = "Sena Turan";
// console.log(person.fullName);

/******************************/
//CALL,APPLY &BİND

// var welcome = function () {
//   console.log("Welcome " + this.name);
// };
// var yigit = { name: "Yigit" };
// var sema = { name: "Sema" };
// welcome();
// welcome.call(sema);
// welcome.apply(yigit);
// //apply ve call methodunun kullanımı aynıdır

// welcomeYigit = welcome.bind(yigit); //bind bir fonksiyon döndürür
// welcomeYigit();

//CALL VE APPLY FARKI:Bunların farkı parametre kullanımlarındadır

// var welcome = function (a, b) {
//   console.log(
//     "Welcome " + this.name + ".Are you interested in " + a + " and " + b
//   );
// };
// var yigit = { name: "Yigit" };
// var sema = { name: "Sema" };

// welcome.call(sema, "asp.net", "angular");
// welcome.apply(sema, ["asp.net", "angular"]);

// welcomeYigit = welcome.bind(yigit);
// welcomeYigit("C#", "Mysql");

//CALL&APPLY &BİND UYGULAMA
//NUMERİC RANGE
//Fonksiyona gönderdiğimiz herhangi bir sayının belirlediğimiz değerler içinde olup olmadığını kontrol eden uygulama
// var checkNumber = function (a) {
//   var count = 0;
//   this.dizi.forEach(function (item) {
//     if (item === a) {
//       count++;
//     }
//   });
//   if (count > 0) {
//     console.log(`${a} dizide bulunmaktadır`);
//   } else {
//     console.log(`${a} dizide bulunmamaktadır`);
//   }
// };

// var dizi1 = { dizi: [1, 2, 3, 15, 100] };

// //call ile kullanımı
// checkNumber.call(dizi1, 20);

// //apply ile kullanımı
// checkNumber.apply(dizi1, [15]);

// //bind ile kullanımı
// var checkFunction = checkNumber.bind(dizi1);
// checkFunction(3);
