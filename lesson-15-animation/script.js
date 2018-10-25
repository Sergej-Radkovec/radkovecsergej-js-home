'use strict';

const paddleWidth = 150; //  длина рокетки
const paddleBold = paddleWidth / 20; //  толщина рокетки
const ballRadius = 20; //  радиус шарика

const area = {
  height: 400,  //  высота поля
  width: 620  //  ширина поля
};

let ball = {
  posX: area.width / 2 - ballRadius,
  posY: area.height / 2 - ballRadius,
  speed: 30, // скорость шарика
  run: false,

  runBall: function () {
    const ballObj = document.getElementById('ball');
    this.posX = area.width / 2 - ballRadius;
    this.posY = area.height / 2 - ballRadius;
    this.speedY = Math.random() * (this.speed + this.speed / 3) - this.speed / 3;
    this.speedX =  Math.sqrt(this.speed * this.speed - this.speedY * this.speedY);
    if (Math.random() > 0.5) {
      this.speedX *= -1;
    }
    ballObj.style.left = this.posX + 'px';
    ballObj.style.top = this.posY + 'px';
  },

  update: function () {
    const ballObj = document.getElementById('ball');
    ballObj.style.left = this.posX + 'px';
    ballObj.style.top = this.posY + 'px';
  }
};

let paddleLeft = {
  posY: area.height / 2 - paddleWidth / 2,
  speedY: 20, // скорость левой рокетки
  shiftPressed: false,
  controlPressed: false,

  update: function () {
    const paddleObj = document.getElementById('left');
    paddleObj.style.top = this.posY + 'px';
  }
};

let paddleRight = {
  posY: area.height / 2 - paddleWidth / 2,
  speedY: 20, // скорость правой рокетки
  arrowUpPressed: false,
  arrowDownPressed: false,

  update: function () {
    const paddleObj = document.getElementById('right');
    paddleObj.style.top = this.posY + 'px';
  }
};

let scores = {
  scoresLeft: 0,
  scoresRight: 0,
  update: function () {
    const scoresObj = document.getElementById('scores');
    scoresObj.textContent = `${this.scoresLeft}:${this.scoresRight}`;
  }
};

// UI

document.body.appendChild(createUI());

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
  let scoresObj = document.createElement('p');
  scoresObj.id = 'scores';
  scoresObj.style.fontSize = '40px';
  scoresObj.style.margin = '0';
  scoresObj.style.textAlign = 'center';
  scoresObj.textContent = '0:0';

  return scoresObj;
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
  board.appendChild(createPaddle('left', '#09AA57'));
  board.appendChild(createPaddle('right', '#191497'));

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

function createPaddle(pos, color) {
  let paddle = document.createElement('div');
  paddle.id = pos;
  paddle.style.height = paddleWidth + 'px';
  paddle.style.width = paddleBold + 'px';
  paddle.style.position = 'absolute';
  paddle.style.backgroundColor = color;
  paddle.style.top = area.height / 2 - paddleWidth / 2 + 'px';
  if (pos === 'left') {
    paddle.style.left = '0';
  } else {
    paddle.style.right = '0';
  }

  return paddle;
}

//  Logic

setInterval(tick, 60);

function tick() {
  if (ball.run) {
    posBall();
  }
  posPaddle();
}

document.getElementById('start').addEventListener('click', start);

function start() {
  ball.runBall();
  ball.run = true;
}

function posBall() {
  ball.posX += ball.speedX;

  const paddleLeftObj = document.getElementById('left');
  const paddleRightObj = document.getElementById('right');

  if (ball.posX < paddleBold && ball.posY > paddleLeftObj.offsetTop - ballRadius && ball.posY + ballRadius < paddleLeftObj.offsetTop + paddleWidth) {
    ball.posX = paddleBold;
    ball.speedX = -ball.speedX;
  } else if (ball.posX < 0) {
    ball.posX = 0;
    scores.scoresLeft += 1;
    scores.update();
    ball.run = false;
  }

  if (ball.posX + ballRadius * 2 > area.width - paddleBold && ball.posY > paddleRightObj.offsetTop - ballRadius && ball.posY + ballRadius < paddleRightObj.offsetTop + paddleWidth) {
    ball.posX = area.width - ballRadius * 2 - paddleBold;
    ball.speedX = -ball.speedX;
  } else if (ball.posX + ballRadius * 2 > area.width) {
    ball.posX = area.width - ballRadius * 2;
    scores.scoresRight += 1;
    scores.update();
    ball.run = false;
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

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode === 38) {
    paddleRight.arrowUpPressed = true;
  } else if (e.keyCode === 40) {
    paddleRight.arrowDownPressed = true;
  }

  if (e.keyCode === 16) {
    paddleLeft.shiftPressed = true;
  } else if (e.keyCode === 17) {
    paddleLeft.controlPressed = true;
  }
}

function keyUpHandler(e) {
  if (e.keyCode === 38) {
    paddleRight.arrowUpPressed = false;
  } else if (e.keyCode === 40) {
    paddleRight.arrowDownPressed = false;
  }

  if (e.keyCode === 16) {
    paddleLeft.shiftPressed = false;
  } else if (e.keyCode === 17) {
    paddleLeft.controlPressed = false;
  }
}

function posPaddle() {
  if (paddleRight.arrowDownPressed) {
    paddleRight.posY += paddleRight.speedY;
  }
  if (paddleRight.arrowUpPressed) {
    paddleRight.posY += -paddleRight.speedY;
    paddleRight.update();
  }
  if (paddleRight.posY < 0) {
    paddleRight.posY = 0;
  }
  if (paddleRight.posY + paddleWidth > area.height) {
    paddleRight.posY = area.height - paddleWidth;
  }
  if (paddleLeft.controlPressed) {
    paddleLeft.posY += paddleLeft.speedY;
  }
  if (paddleLeft.shiftPressed) {
    paddleLeft.posY += -paddleLeft.speedY;
  }
  if (paddleLeft.posY < 0) {
    paddleLeft.posY = 0;
  }
  if (paddleLeft.posY + paddleWidth > area.height) {
    paddleLeft.posY = area.height - paddleWidth;
  }

  paddleRight.update();
  paddleLeft.update();
}
