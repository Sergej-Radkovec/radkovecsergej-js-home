'Use strict';

function anClean(arr) {
  var newArr = [];
  var tmp = {};
  for (var i = 0; i < arr.length; i++) {
    var sortArrElement = arr[i].toLowerCase().split('').sort().join('');
    if (sortArrElement in tmp) continue;
    newArr.push(arr[i]);
    tmp[sortArrElement] = 1;
  }
  return newArr;
}

module.exports = anClean;
