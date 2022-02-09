//Course constructor
function Course(title, instructor, image) {
  this.title = title;
  this.instructor = instructor;
  this.image = image;
}

//UI Constructor
function UI() {}

//Listeye kurs ekle
UI.prototype.addCourseToList = function (course) {
  const list = document.getElementById("course-list");
  var html = ` 
  <tr>
    <td><img src="img/${course.image}" alt="" width='100%' height='100%' ></td>
    <td>${course.title}</td>
    <td>${course.instructor}</td>
    <td><a href="#" class='btn btn-danger btn-sm delete' >Delete</a></td>
  </tr>
  `;
  list.innerHTML += html;
};

//Formu temizleme
UI.prototype.clearControls = function () {
  const tittle = (document.getElementById("title").value = "");
  const instructor = (document.getElementById("instructor").value = "");
  const image = (document.getElementById("image").value = "");
};

//Eleman silme
UI.prototype.deleteCourse = function (element) {
  if (element.classList.contains("delete")) {
    element.parentElement.parentElement.remove();
  }
};
UI.prototype.showAlert = function (message, className) {
  var alert = `
    
    <div class="alert alert-${className} alert-dismissible fade show w-100 h-25" role="alert">
  <strong> ${message}</strong> 
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>
 
    `;
  const row = document.querySelector(".row");
  row.insertAdjacentHTML("afterBegin", alert);
};

document.getElementById("new-course").addEventListener("submit", function (e) {
  const tittle = document.getElementById("title").value;
  const instructor = document.getElementById("instructor").value;
  const image = document.getElementById("image").value;

  //Yeni bir kurs nesnesi oluşturma
  const course = new Course(tittle, instructor, image);

  //Yeni bir ui nesnesi oluşturma
  const ui = new UI();

  if (tittle === "" || instructor === "" || image === "") {
    ui.showAlert("Formu eksiksiz bir şekilde tamamlayın", "warning");
  } else {
    //Listeye kurs ekleme
    ui.addCourseToList(course);

    //Formu temizle
    ui.clearControls();

    ui.showAlert("Kurs eklendi", "success");
  }

  //Tıklandığında refresh olmaması için
  e.preventDefault();
});

//Delete butonuna tıklama işlemi
document.getElementById("course-list").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteCourse(e.target);
  ui.showAlert("Kurs silindi", "danger");
});
