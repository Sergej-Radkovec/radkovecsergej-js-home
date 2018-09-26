'use strict';
// p.1 Build a function constructor called Question
function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

// p.2 Create a couple of questions
var question1 = new Question('Столица Беларуси?', ['Гродно', 'Минск', 'Брест'], 2);
var question2 = new Question('Производитель смартфонов?', ['Груша', 'Персик', 'Яблоко'], 3);
var question3 = new Question('Куда Маск отправил Теслу?', ['В космос', 'На дно океана', 'На марс'], 3);

// p.3 Store all questions inside an array
var questions = [question1, question2, question3];

// p.4 Select one random question and log it on the console
function selectOneRandom(questionsArray) {
  return questionsArray[(Math.ceil(Math.random() * (questionsArray.length)) - 1)];
}

Question.prototype.printQuestion  = function () {
  var strAnswers = '';
  for (var i = 1; i <= this.answers.length; i++) {
    strAnswers = strAnswers + i + ')' + this.answers[i - 1] + ';' + '\n';
  }
  console.log(this.question + '\n' + strAnswers);
};

// p.5 Use the 'prompt' function to ask the user for the correct answer
var userAnswer = parseInt(prompt('Номер вашего варианта'), 10);

// p.6 Check user's answer
Question.prototype.checkAnswer = function (answer) {
  if (answer === this.correctAnswer) {
    console.log('Ваш ответ верен');
  } else {
    console.log('Правильный ответ ' + this.correctAnswer);
  }
};

