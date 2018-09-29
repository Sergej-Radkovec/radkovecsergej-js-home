'Use strict';

function isPol(str) {
  const strNormal = str.toLowerCase().split(' ').join('');
  const strReverse = strNormal.split('').reverse().join('');
  return strNormal === strReverse;
}

module.exports = isPol;
