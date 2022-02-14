//ASENKRON PROGRAMLAMA
// const first = () => {
//   console.log("first");
//   second();
// };

// const second = () => {
//   setTimeout(() => {
//     console.log("second"); //first,third yazar ve iki saniye sonra second yazar
//   }, 2000);

//   third();
// };

// const third = () => {
//   console.log("third");
// };

// first();

//AJAX &XHR OBJECT(XHR = XML HTTP REQUEST)
var xhr = new XMLHttpRequest(); //XMLHttpRequest objemizi oluşturduk
//onreadystatechange herhangi bir durum değişikliği olduğunda tetiklenir
xhr.onreadystatechange = function () {
  //readyState 4 ise response'ın bize verdiği cevap hazır demektir
  //status 200 ise başarılı bir sonuç ürettiği anlamına gelmekte
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else if (xhr.status === 404) {
      console.log("Kaynak bulunamadı");
    }
  }
};

//Kullanıcı serverdan bir istek bulunduğunda kullanıcıya bir gif ya da loading gösterilmesi için kullanılmakta genelde . onprogress sürecin devam ettiğini belirtir.
xhr.onprogress = function () {
  console.log("Süreç devam etmekte");
};

xhr.open("GET", "msg.txt", true); //msg.txt dosyasını serverdan getirmesini istedim.Talep ederken get kullanılır.Post bilgi yüklerken güncellenir.True parametresi işlemimizi asenkron bir şekilde yapılmasını istediğimizi belirtmekte
xhr.send();

console.log("Hello"); //Bunu ilk başta yazdırır.Çünkü sorgu sürerken bizi bloklamaz asenkron olduğu için

/* 


Ready state özellikleri
0 : Request henüz başlatılmamış
1 : Bağlantı kurulmuşsa eğer 1 sonucu gelir
2 : Request server tarafından alınmışsa eğer 2 sonucu gelir
3 : Request server tarafından hala işletilmekteyse eğer 3 sonucu gelir
4 : Cevap hazır demektir.

Status özellikleri

200 : 'OK'
403 : 'Forbitten' talebin onaylanmadığını
404 : 'Not Found'

*/
