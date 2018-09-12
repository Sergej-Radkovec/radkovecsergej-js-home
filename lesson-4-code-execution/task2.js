'use strict';

function multiplyNumeric(list) {
  for (var key in list) {
    if (typeof (list[key]) === 'number') {
      list[key] *= 2;
    }
  }
  return list;
}
module.exports = multiplyNumeric;
