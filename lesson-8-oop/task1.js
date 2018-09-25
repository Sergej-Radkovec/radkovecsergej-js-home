'use strict';

function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var question1 = new Question('Столица Беларуси?', ['Гродно', 'Минск', 'Брест'], 2);
var question2 = new Question('Производитель смартфонов?', ['Груша', 'Персик', 'Яблоко'], 3);
var question3 = new Question('Куда Маск отправил Теслу?', ['В космос', 'На дно океана', 'На марс'], 3);



