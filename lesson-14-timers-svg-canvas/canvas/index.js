'use strict';
const baseRadius = 300;
const numbersBaseRadius = baseRadius / 1.2;
const circleRadius = 30;
const arrowHourWidth = 150;
const arrowMinuteWidth = 200;
const arrowSecondWidth = 250;
const arrowHourBold = 20;
const arrowMinuteBold = 10;
const arrowSecondBold = 2;

const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');

canvas.width = baseRadius * 2;
canvas.height = baseRadius * 2;

setInterval(tickTimer, 1000);

function createClock() {
  createBase();
  createClockFace();
}

function createBase() {
  context.fillStyle = 'yellow';
  context.beginPath();
  context.arc(baseRadius, baseRadius, baseRadius, 0, Math.PI/0.5);
  context.fill();
  context.closePath();
}

function createClockFace() {
  for (let number = 1; number <= 12; number++) {
    let angle = number * 30;
    let x = baseRadius + numbersBaseRadius * Math.sin((angle) / 180 * Math.PI);
    let y = baseRadius - numbersBaseRadius * Math.cos((angle) / 180 * Math.PI);
    createHourCircle(x, y);
    createNumberCircle(x, y, number);
  }
}

function createHourCircle(circleX, circleY) {
  context.beginPath();
  context.fillStyle = 'green';
  context.arc(circleX, circleY, circleRadius, 0, Math.PI / 0.5);
  context.fill();
  context.closePath();
}

function createNumberCircle(circleX, circleY, number) {
  context.fillStyle = 'blue';
  context.font = `normal ${circleRadius}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(number, circleX, circleY);
}

function createDigitalWatch(text) {
  context.fillStyle = 'blue';
  context.font = `normal ${circleRadius}px Arial`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(text, baseRadius, baseRadius / 2);
}

function createArrow(arrowWidth, arrowBold, x, y) {
  context.strokeStyle = 'black';
  context.lineWidth = arrowBold;
  context.lineCap = 'round';
  context.beginPath();
  context.moveTo(baseRadius + x, baseRadius + y);
  context.lineTo(baseRadius, baseRadius);
  context.stroke();
  context.closePath();
}

function tickTimer() {
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour   = now.getHours();
  createClock();
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
  updateWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  let thisSecondRotate = (second / 60) * 360;
  let thisMinuteRotate = (minute) / 60 * 360;
  let thisHourRotate   = (hour + minute / 60) / 12 * 360;
  rotateHandle(arrowHourWidth, arrowHourBold, thisHourRotate);
  rotateHandle(arrowMinuteWidth, arrowMinuteBold, thisMinuteRotate);
  rotateHandle(arrowSecondWidth, arrowSecondBold, thisSecondRotate);
}

function rotateHandle(arrowWidth, arrowBold, degree) {
  let posX = arrowWidth * Math.sin((degree) / 180 * Math.PI);
  let posY = -arrowWidth * Math.cos((degree) / 180 * Math.PI);
  createArrow(arrowWidth, arrowBold, posX, posY);
}

function updateDigitalWatch(hour, minute, second) {
  let time = addZeroToNumber(hour) + ':' + addZeroToNumber(minute) + ':' + addZeroToNumber(second);
  createDigitalWatch(time);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
