'use strict';
// 1. Build a function constructor called Question
function Question(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

// 2. Create a couple of questions
var question1 = new Question('Столица Беларуси?', ['Гродно', 'Минск', 'Брест'], 2);
var question2 = new Question('Производитель смартфонов?', ['Груша', 'Персик', 'Яблоко'], 3);
var question3 = new Question('Куда Маск отправил Теслу?', ['В космос', 'На дно океана', 'На марс'], 3);

// 3. Store all questions inside an array
var questions = [question1, question2, question3];

// 4. Select one random question and log it on the console
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

var examQuestion = selectOneRandom(questions);
examQuestion.printQuestion();

// 5. Use the 'prompt' function to ask the user for the correct answer
var userAnswer = parseInt(prompt('Номер вашего варианта ответа'), 10);

// 6. Check user's answer
Question.prototype.checkAnswer = function (answer) {
  if (answer === this.correctAnswer) {
    console.log('Ваш ответ верен');
  } else {
    console.log('Правильный ответ ' + this.correctAnswer);
  }
};

examQuestion.checkAnswer(userAnswer);

// 7. Private
function QuestionPrivate(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;

  var self = this;

  function printQuestion() {
    var strAnswers = '';
    for (var i = 1; i <= self.answers.length; i++) {
      strAnswers = strAnswers + i + ')' + self.answers[i - 1] + ';' + '\n';
    }
    console.log(self.question + '\n' + strAnswers);
  }

  function checkAnswer(answer) {
    if (answer === self.correctAnswer) {
      console.log('Ваш ответ верен');
    } else {
      console.log('Правильный ответ ' + self.correctAnswer);
    }
  }

  this.exam = function () {
    printQuestion();
    checkAnswer(parseInt(prompt('Номер вашего варианта ответа'), 10));
  };
}

