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
