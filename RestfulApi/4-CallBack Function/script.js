//Süreç içerisinde belli işlemlerin sırasını da kontrol etmek isteyebiliriz.Bu sıra yönetme işlemlerini yönetmenin bir yolu callback fonksiyonlarını kullanmaktır.

// var products = [
//   { id: 1, name: "Samsung S8", price: 3000 },
//   { id: 2, name: "Samsung S7", price: 2000 },
//   { id: 3, name: "Samsung S6", price: 1000 },
// ];

// function addProduct(prd) {
//   setTimeout(() => {
//     products.push(prd);
//   }, 2000);
// }

// function getProducts() {
//   setTimeout(() => {
//     products.forEach((element) => {
//       console.log(element.name);
//     });
//   }, 1000);
// }

// addProduct({ id: 4, name: "Samsung S5", price: 500 });
// getProducts();

/*  !Önemli
Burada getProducts fonksiyonumuz 1 sn içinde çalışacağı için bu işlemi daha önce yapar ve ekleme işlemimiz  sn sonra olduğu için bize getirdiği liste içerisinde eklediğimiz elemanı göremeyiz.Bu gibi durumlarda callback fonksiyonları kullanılır.
 */

var products = [
  { id: 1, name: "Samsung S8", price: 3000 },
  { id: 2, name: "Samsung S7", price: 2000 },
  { id: 3, name: "Samsung S6", price: 1000 },
];

function addProduct(prd, callback) {
  setTimeout(() => {
    products.push(prd);
    callback();
  }, 2000);
}

function getProducts() {
  setTimeout(() => {
    products.forEach((element) => {
      console.log(element.name);
    });
  }, 1000);
}

addProduct({ id: 4, name: "Samsung S5", price: 500 }, getProducts); //Bunu iki saniyede çalıştırıyor
getProducts(); //Bunu bir saniyede çalıştırıyor
