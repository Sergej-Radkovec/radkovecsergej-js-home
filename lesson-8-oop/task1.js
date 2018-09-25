'use strict';

function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

var questionCapital = new Question('Столица Беларуси?', ['Гродно', 'Минск', 'Брест'], 2);

console.log(questionCapital);

