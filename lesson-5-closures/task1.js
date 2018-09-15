'use strict';

function createChessBoard(size) {
  var board = '';
  for (var i = 1; i < size * size; i++) {
    if ((i % (size + 1)) === 0) {
      board += '\n';
    } else if (i % 2 !== 0) {
      board += '#';
    } else {
      board += ' ';
    }
  }
  return board;
}

console.log(createChessBoard(10));

