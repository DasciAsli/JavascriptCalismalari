/*
Önceki dersimizde XHR objesi ile serverda bulunan bir dosyaya asenkron bir şekilde ulaştık.Ulaştığımız dosya txt dosyasıydı.Bu dosyanın her zaman txt uzantılı bir dosya olmasını istemeyiz.Örneğin bir json ya da xml türünde bir dosya olmasını isteriz.
  Kullanıcı mobil ya da web uygulaması üzerinden serverdan bir bilgi istiyor diyelim .Server bize json ya da xml türünden veri döndürür.Çünkü hem mobil hem de web tarafından anlaşılacak ortak bir dil olması gerekir.

*/

document.getElementById("getEmployee").addEventListener("click", loadEmployee);

function loadEmployee() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "employees.json", true);
  xhr.onload = function () {
    if (this.status === 200) {
      //   console.log(this.responseText);//Bu şekilde gelen veri string tipte
      //   console.log(JSON.parse(this.responseText)); //Bu şekilde gelen veri obje şeklinde gelir

      var employees = JSON.parse(this.responseText);

      var html = "";
      employees.forEach(function (employee) {
        html += `
        <tr>
           <td>${employee.firstName}</td>
           <td>${employee.lastName}</td>
           <td>${employee.age}</td>
           <td>${employee.retired}</td>
        </tr>`;
      });

      document.querySelector("#employees").innerHTML = html;
    }
  };
  xhr.send();
}
