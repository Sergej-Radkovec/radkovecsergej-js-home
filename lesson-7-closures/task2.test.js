var interviewQuestion = require('./task2');

describe('test task2 with different jobs', () => {
  it('question for the teacher: What subject do you teach John?', () => {
    expect(interviewQuestion('teacher')('John')).toBe('What subject do you teach John?');
  });

  it('question for the designer: John can you please explain what UX design is?', () => {
    expect(interviewQuestion('designer')('John')).toBe('John can you please explain what UX design is?');
  });

  it('question for other jobs: Hello John, what do you do?', () => {
    expect(interviewQuestion('driver')('John')).toBe('Hello John, what do you do?');
  });
});