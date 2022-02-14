document.querySelector("#getOne").addEventListener("click", GetOne);
document.querySelector("#getAll").addEventListener("click", GetAll);
document.querySelector("#postData").addEventListener("click", PostData);
function GetOne() {
  var text = document.querySelector("#text");
  var url = "https://jsonplaceholder.typicode.com/posts/" + text.value;
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      var html = "";
      var value = JSON.parse(this.responseText);
      html = `  
      <tr>
        <td>${value.userId}</td>
        <td>${value.id}</td>
        <td>${value.title}</td>
        <td>${value.body}</td>
       </tr>`;
      document.querySelector("#myValues").innerHTML = html;
    }
  };
  xhr.send();
}

function GetAll() {
  var url = "https://jsonplaceholder.typicode.com/posts";
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status === 200) {
      var html = "";
      var values = JSON.parse(this.responseText);
      values.forEach((value) => {
        html += `  <tr>
          <td>${value.userId}</td>
          <td>${value.id}</td>
          <td>${value.title}</td>
          <td>${value.body}</td>
       
      </tr>
          `;
      });
      document.querySelector("#myValues").innerHTML = html;
    }
  };
  xhr.send();
}

function PostData() {
  const data = {
    userId: 1,
    title: "New Title",
    body: "New Body",
  };
  //data serverın istediği tipte bir json data.Bunu servera gönderirken text olarak göndermemiz gerekiyor
  var json = JSON.stringify(data);
  var url = "https://jsonplaceholder.typicode.com/posts";
  var xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-type", "application/json;charset=utf-8"); //Biz gönderdiğimiz istekte bir header bilgisi göndererek gönderdiğimiz verinin tipini belirtiyoruz.
  xhr.onload = function () {
    if (xhr.status === 201 && xhr.readyState === 4) {
      var post = xhr.responseText;
      console.log(post);
    }
  };
  xhr.send(json);
}
