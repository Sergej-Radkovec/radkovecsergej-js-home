var maxTasks = require('./task1');

var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 112,
  'Anton': 99
};

test('max Tasks for Elena', () => {
  expect(maxTasks(tasksCompleted)).toBe('Elena');
});