'use strict';

var res = [];
var sum = 0;

while (true) {
  var value = prompt('Введите число', '');
  if (value === null) break;
  sum += +value;
  res.push(+value);
}

console.log(sum);

