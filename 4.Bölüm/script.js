var models = [
  {
    name: "Blue Dream",
    image: "img/1.jpg",
    link: "img/1.jpg",
  },
  {
    name: "Sun",
    image: "img/2.jpg",
    link: "img/2.jpg",
  },
  {
    name: "Breathe",
    image: "img/3.jpg",
    link: "img/3.jpg",
  },
  {
    name: "Sea",
    image: "img/4.jpg",
    link: "img/4.jpg",
  },
];

var i = 2;
var slideCount = models.length;
var interval;

var settings = {
  duration: "2000",
  random: true,
};

init(settings);
document
  .querySelector(".fa-arrow-circle-left")
  .addEventListener("click", function () {
    i--;
    showSlide(i);
    console.log(i);
  });

document
  .querySelector(".fa-arrow-circle-right")
  .addEventListener("click", function () {
    i++;
    showSlide(i);
    console.log(i);
  });

document.querySelectorAll(".fas").forEach(function (item) {
  item.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });
});

document.querySelectorAll(".fas").forEach(function (item) {
  item.addEventListener("mouseleave", function () {
    init(settings);
  });
});

function init(settings) {
  //   setTimeout; Belli bir süre sonra başlatılacak ve duracak
  //   setInterval; Durdurmadığın sürece devam eder
  var prev;
  interval = setInterval(function () {
    if (settings.random) {
      do {
        i = Math.floor(Math.random() * slideCount);
      } while (i == prev);
      prev = i;
    } else {
      i = i + 1;
      if (slideCount == i) {
        i = 0;
      }
    }
    console.log(i);
    showSlide(i);
  }, settings.duration);
}

function showSlide(index) {
  i = index;
  if (index < 0) {
    i = slideCount - 1;
  }
  if (index >= slideCount) {
    i = 0;
  }
  document.querySelector(".card-title").textContent = models[i].name;
  document.querySelector(".card-link").setAttribute("href", models[i].link);
  document.querySelector(".card-img-top").setAttribute("src", models[i].image);
}
