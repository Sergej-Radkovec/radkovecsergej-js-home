'Use strict';

function anClean(arr) {
  const tmp = {};
  return arr.filter(function (a) {
    const b = a.toLowerCase().split('').sort().join('');
    return b in tmp ? 0 : tmp[b] = 1;
  });
}

module.exports = anClean;
