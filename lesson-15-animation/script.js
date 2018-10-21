'use strict';

const boardHeight = 400;
const boardWidth = boardHeight * 1.62;
const ballRadius = 20;
const racketWidth = boardHeight / 4;

var doc = document;
var container = doc.body;

container.appendChild(createUI());

function createUI() {
  let game = document.createElement('div');
  game.style.width = boardWidth + 'px';
  game.appendChild(createStartButton());
  game.appendChild(createScores());
  game.appendChild(createBord());

  return game;
}

function createStartButton() {
  let startButton = document.createElement('button');
  startButton.id = 'start';
  startButton.style.position = 'absolute';
  startButton.style.width = '80px';
  startButton.style.height = '40px';
  startButton.textContent = 'старт!';

  return startButton;
}

function createScores() {
  let scores = document.createElement('p');
  scores.id = 'scores';
  scores.style.fontSize = '40px';
  scores.style.margin = '0';
  scores.style.textAlign = 'center';
  scores.textContent = '00:00';

  return scores;
}

function createBord() {
  let board = document.createElement('div');
  board.id = 'board';
  board.style.width = boardWidth + 'px';
  board.style.height = boardHeight + 'px';
  board.style.backgroundColor = '#F0EE7E';
  board.style.border = '1px solid black';
  board.style.position = 'relative';
  board.appendChild(createBall());
  board.appendChild(createRacket('left', '#09AA57'));
  board.appendChild(createRacket('right', '#191497'));

  return board;
}

function createBall() {
  let ball = document.createElement('div');
  ball.id = 'ball';
  ball.style.position = 'absolute';
  ball.style.backgroundColor = '#F02137';
  ball.style.borderRadius = '50%';
  ball.style.width = ballRadius * 2 + 'px';
  ball.style.height = ballRadius * 2 + 'px';
  ball.style.top = boardHeight / 2 - ballRadius + 'px';
  ball.style.left = boardWidth / 2 - ballRadius + 'px';
  return ball;
}

function createRacket(pos, color) {
  let racket = document.createElement('div');
  racket.id = pos;
  racket.style.height = racketWidth + 'px';
  racket.style.width = racketWidth / 10 + 'px';
  racket.style.position = 'absolute';
  racket.style.backgroundColor = color;
  racket.style.top = boardHeight / 2 - racketWidth / 2 + 'px';
  if (pos === 'left') {
    racket.style.left = '0';
  } else {
    racket.style.right = '0';
  }

  return racket;
}
