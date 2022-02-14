/* 
Fetch API
ES6 ile gelen bir kavramdır.Bu kavram sayesinde fonksiyonlardan geriye bir promise döndürmemize gerek yok.Bunu arka planda fetch zaten yapmaktadır
*/

//TEXT
// function GetText() {
//   fetch("text.txt")
//     .then((response) => {
//       return response.text();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// GetText();

//GET EXTERNAL API
// function GetJson() {
//   var url = "https://randomuser.me/api/";
//   fetch(url)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data.results[0]);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }
// GetJson();

//FETCH API İLE POST İŞLEMİ

function postExternalApi() {
  const url = "https://jsonplaceholder.typicode.com/todos";
  var data = {
    method: "POST",
    body: JSON.stringify({
      userId: 1,
      title: "sample title",
      completed: "sample body",
    }),
    headers: new Headers({
      "content-type": "application/json",
    }),
  };

  fetch(url, data)
    .then((res) => {
      return res.json();
    })
    .then((data) => console.log(data));
}

postExternalApi();
