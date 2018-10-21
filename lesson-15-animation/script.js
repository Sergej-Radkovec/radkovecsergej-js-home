'use strict';

const racketWidth = 100;
const ballRadius = 20;

const area = {
  height: 400,
  width: 620
};

let ball = {
  posX: area.width / 2 - ballRadius,
  posY: area.height / 2 - ballRadius,
  speedX: 30,
  speedY: 30,

  setBall: function () {
    const ballObj = document.getElementById('ball');
    this.posX = area.width / 2 - ballRadius;
    this.posY = area.height / 2 - ballRadius;
    ballObj.style.left = this.posX + 'px';
    ballObj.style.top = this.posY + 'px';
  },

  update: function () {
    const ballObj = document.getElementById('ball');
    ballObj.style.left = this.posX + 'px';
    ballObj.style.top = this.posY + 'px';
  }
};

let racketLeft = {
  posY: 0,
  speedY: 50,

  update: function () {
    const racketObj = document.getElementById('left');

    racketObj.style.top = this.posY + 'px';
  }
};

let racketRight = {
  posY: 0,
  speedY: 50,

  update: function () {
    const racketObj = document.getElementById('right');
    racketObj.style.top = this.posY + 'px';
  }
};

var doc = document;
var container = doc.body;

container.appendChild(createUI());

function createUI() {
  let game = document.createElement('div');
  game.style.width = area.width + 'px';
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
  board.style.width = area.width + 'px';
  board.style.height = area.height + 'px';
  board.style.backgroundColor = '#F0EE7E';
  board.style.border = '1px solid black';
  board.style.position = 'relative';
  board.appendChild(createBall());
  board.appendChild(createRacket('left', '#09AA57'));
  board.appendChild(createRacket('right', '#191497'));

  return board;
}

function createBall() {
  let ballObj = document.createElement('div');
  ballObj.id = 'ball';
  ballObj.style.position = 'absolute';
  ballObj.style.backgroundColor = '#F02137';
  ballObj.style.borderRadius = '50%';
  ballObj.style.width = ballRadius * 2 + 'px';
  ballObj.style.height = ballRadius * 2 + 'px';
  ballObj.style.top = ball.posY + 'px';
  ballObj.style.left = ball.posX + 'px';
  return ballObj;
}

function createRacket(pos, color) {
  let racket = document.createElement('div');
  racket.id = pos;
  racket.style.height = racketWidth + 'px';
  racket.style.width = racketWidth / 10 + 'px';
  racket.style.position = 'absolute';
  racket.style.backgroundColor = color;
  racket.style.top = area.height / 2 - racketWidth / 2 + 'px';
  if (pos === 'left') {
    racket.style.left = '0';
  } else {
    racket.style.right = '0';
  }

  return racket;
}

document.getElementById('start').addEventListener('click', start);

function tick() {
  ball.posX += ball.speedX;

  if (ball.posX + ballRadius * 2 > area.width) {
    ball.speedX = -ball.speedX;
    ball.posX = area.width - ballRadius * 2;
  }
  if (ball.posX < 0) {
    ball.speedX = -ball.speedX;
    ball.posX = 0;
  }

  ball.posY += ball.speedY;
  if (ball.posY + ballRadius * 2 > area.height) {
    ball.speedY = -ball.speedY;
    ball.posY = area.height - ballRadius * 2;
  }

  if (ball.posY < 0) {
    ball.speedY = -ball.speedY;
    ball.posY = 0;
  }
  ball.update();
}

function start() {
  ball.setBall();
  setInterval(tick, 60);
}


ball.update();

