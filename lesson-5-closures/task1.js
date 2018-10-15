'use strict';

function createChessBoard(width, height) {
  var board = '';
  for (var i = 1; i < height; i++) {
    for (var j = 0; j < width; j++) {
      if ((i + j) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  return board;
}

console.log(createChessBoard(9,5));
console.log(createChessBoard(10,8));

