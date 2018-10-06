'use strict';

var res = [];
var sum = 0;

do {
  var input = prompt('Введите число', '');
  var value = parseInt(input);
  sum += value;
  res.push(value);
} while (input !== null);

console.log(sum);

