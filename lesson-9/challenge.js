(function() {
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);

    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ': ' + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans) {
    if (ans === this.correct) {
      console.log('Correct answer!');
      return 1;
    } else {
      console.log('Wrong answer. Try again :)')
      return 0;
    }
  };

  var q1 = new Question('Is JavaScript the coolest programming language in the world?',
    ['Yes', 'No'],
    0);

  var q2 = new Question('What is the name of this course\'s teacher?',
    ['John', 'Micheal', 'Jonas'],
    2);

  var q3 = new Question('What does best describe coding?',
    ['Boring', 'Hard', 'Fun', 'Tediuos'],
    2);

  var questions = [q1, q2, q3];

  var  total = 0;

  function exam() {

    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();

    var enteredData = prompt('Please select the correct answer.');

    if (enteredData !== "exit") {
      var answer = parseInt(enteredData);
      total += questions[n].checkAnswer(answer);
      exam();
    }
  }
  exam();
  console.log ('Result:' + total);
})();
