'use strict';

function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var question1 = new Question('Столица Беларуси?', ['Гродно', 'Минск', 'Брест'], 2);
var question2 = new Question('Производитель смартфонов?', ['Груша', 'Персик', 'Яблоко'], 3);
var question3 = new Question('Куда Маск отправил Теслу?', ['В космос', 'На дно океана', 'На марс'], 3);

var questions = [question1, question2, question3];



Question.prototype.askQuestion  = function () {
  var strAnswers = '';
  for (var i = 1; i <= this.answers.length; i++) {
    strAnswers = strAnswers + i + ')' + this.answers[i - 1] + ';' + '\n';
  }
  console.log(this.question + '\n' + strAnswers);
};

questions[2].askQuestion();

Question.prototype.checkAnswers = function (userAnswers) {
  if (userAnswers === this.correctAnswer) {
    console.log('Ваш ответ верен');
  } else {
    console.log('Правильный ответ ' + this.correctAnswer);
  }
};

questions[2].checkAnswers(parseInt(prompt('Номер вашего варианта'), 10));

