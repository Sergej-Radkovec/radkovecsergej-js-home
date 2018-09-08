'use strict';

function culcVowels(str) {
  var allVowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];
  var amountVowels = 0;
  for (var i = 0; i <= str.length - 1; i++) {
    for (var j = 0; j <= allVowels.length - 1; j++) {
      if (str[i] === allVowels[j]) {
        amountVowels += 1;
      }
    }
  }
  return amountVowels;
}

console.log(culcVowels(prompt('Для подсчёта гласных введите строку')));
