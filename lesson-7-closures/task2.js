'use strict';

function interviewQuestion(job) {
  return function (name) {
    var question;
    if (job === 'designer') {
      question = name + ' can you please explain what UX design is?';
    } else if (job === 'teacher') {
      question = 'What subject do you teach ' + name + '?';
    } else {
      question = 'Hello ' + name + ', what do you do?';
    }
    return question;
  };
}

module.exports = interviewQuestion;
