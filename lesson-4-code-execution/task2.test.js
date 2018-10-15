var multiplyNumeric = require('./task2');

var image = {
  width: 100,
  height: 400,
  title: 'Cool image'
};

var multiplyImage = {
  width: 200,
  height: 800,
  title: 'Cool image'
};

test('positive test', () => {
  expect(multiplyNumeric(image)).toEqual(multiplyImage);
});

