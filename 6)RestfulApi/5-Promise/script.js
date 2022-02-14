//Süreç içerisinde belli işlemlerin sırasını da kontrol etmek isteyebiliriz.Bu sıra yönetme işlemlerini yönetmenin bir yolu promise objesi kullanmaktır.

/*
var p = new Promise(function (resolve, reject) {
  if (true) {
    resolve("success");
  } else {
    reject("Failure");
  }
});
Bir promise objesi oluşturuldu ve içine 2 bilgi almakta resolve başarılı bir sonuç olduğu zaman kullanılır,reject hatalı bir sonuç olduğu zaman kullanılır
Burada önceden vermiş olduğumuz sözün bir şemasını oluşturmuş olduk

p.then(function (data) {
  console.log(data);
}).catch(function (error) {
  console.log(error);
});

Burada p işleminin sonunda işlem başarılı ise datayı eğer başarısız ise erroru yazdırıyor.then sonra bunları yap anlamında kullanılıyor

*/

/*******************************************/

// new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// })
//   .then(function (num) {
//     console.log(num); //1 saniye sonra 5 değerini konsola yazdırır
//     return num * num;
//   })
//   .then(function (numsquare) {
//Birinci thenden döndürdüğüm değeri ikinci thende kullanabiliyorum
//     console.log(numsquare);
//   });

/*******************************************/

//UYGULAMA 1

// const isMomHappy = true;
// const willGetNewPhone = new Promise(function (resolve, reject) {
//   if (isMomHappy) {
//     const phone = {
//       name: "Iphone 8",
//       price: 4000,
//       color: "Silver",
//     };
//     resolve(phone);
//   } else {
//     const error = new Error("Mom is not happy");
//     reject(error);
//   }
// });

// const askMom = function () {
//   willGetNewPhone
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// askMom();
