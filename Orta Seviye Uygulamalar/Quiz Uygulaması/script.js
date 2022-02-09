function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

// Quiz Constructor
function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionIndex = 0;
}

// Quiz Prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionIndex];
};

// Quiz isFinish
Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionIndex;
};

// Quiz guess
Quiz.prototype.guess = function (answer) {
  var question = this.getQuestion();

  if (question.checkAnswer(answer)) {
    this.score += 25;
  }
  this.questionIndex++;
};

var q1 = new Question(
  "'Açlık' kitabının yazarı ünlü romancı kimdir?",
  ["Jose Saramago", "Gabriel Garcia Marquez", "Knut Hamsun"],
  "Knut Hamsun"
);
var q2 = new Question(
  "Aspirin ilk kez hangi yılda satışa çıkmıştır?",
  ["1899", "1937", "1915"],
  "1899"
);
var q3 = new Question(
  " Dünya'nın 7 Harikası'ndan biri olan 'Halikarnas Mozolesi' nerededir?",
  ["İtalya", "Türkiye", "Mısır"],
  "Türkiye"
);
var q4 = new Question(
  "  Fatih Sultan Mehmet’in babası kimdir?",
  ["I. Mehmet", "II. Murat", "Yıldırım Beyazıt"],
  "II. Murat"
);

var questions = [q1, q2, q3, q4];

// Start Quiz

var quiz = new Quiz(questions);

loadQuestion();

function loadQuestion() {
  if (quiz.isFinish()) {
    showScore();
  } else {
    var question = quiz.getQuestion();
    var choices = question.choices;

    document.querySelector("#question").textContent = question.text;

    for (var i = 0; i < choices.length; i++) {
      var element = document.querySelector("#choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var btn = document.getElementById(id);
  btn.onclick = function () {
    quiz.guess(guess);
    loadQuestion();
  };
}

function showScore() {
  var html = `<h2>Skor</h2><h4>${quiz.score}</h4>`;

  document.querySelector(".card-body").innerHTML = html;
}

function showProgress() {
  var totalQuestion = quiz.questions.length;
  var questionNumber = quiz.questionIndex + 1;
  var html = questionNumber + ".Soru";

  if (totalQuestion === questionNumber) {
    document.querySelector("#progress").innerHTML = "Quiz bitti";
  } else {
    document.querySelector("#progress").innerHTML = html;
  }
}

//Rule constructor
var Rule = function (rule) {
  this.rule = rule;
};

Rule.prototype.ruleAdd = function () {
  var ul = document.querySelector("ul");
  var li = document.createElement("li");
  li.classList = "mt-3";
  const text = document.createTextNode(`${this.rule}`);
  li.appendChild(text);
  ul.appendChild(li);
};

$(document).ready(function () {
  $(".kurallar").click(function () {
    var kuralGoster = $("#kuralGoster");
    kuralGoster.fadeToggle(1000);
  });
});

//Birkaç kural tanımlandı
var kural1 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
var kural2 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
var kural3 = new Rule(
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
);
kural1.ruleAdd();
kural2.ruleAdd();
kural3.ruleAdd();

(function NoShowRules() {
  $("#kuralGoster").hide();
})();
