'use strict';
const baseRadius = 300; // радиус часов
const numbersBaseRadius = baseRadius / 1.2; // радиус циферблата
const circleRadius = 30; // радиус кружков с цифрами
const wrapper = document.getElementById('wrapper');
wrapper.setAttribute('width', baseRadius * 2);
wrapper.setAttribute('height', baseRadius * 2);

createClock(wrapper);

function createClock(container) {
  container.appendChild(createBase());
  container.appendChild(createClockFace());
  container.appendChild(createDigitalWatch());
  container.appendChild(createArrow('hours', 150, 12));
  container.appendChild(createArrow('minutes', 220, 5));
  container.appendChild(createArrow('seconds', 250, 1));
}

function createBase() {
  let base = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  base.id = 'base';
  base.setAttribute('stroke', 'green');
  base.setAttribute('fill', 'yellow');
  base.setAttribute('cx', baseRadius);
  base.setAttribute('cy', baseRadius);
  base.setAttribute('r', baseRadius);
  return base;
}

function createClockFace() {
  let clockFace = document.createDocumentFragment();
  for (let number = 1; number <= 12; number++){
    let angle = number * 30;
    let x = baseRadius + numbersBaseRadius * Math.sin((angle) / 180 * Math.PI);
    let y = baseRadius - numbersBaseRadius * Math.cos((angle) / 180 * Math.PI);
    clockFace.appendChild(createHourCircle(x, y));
    clockFace.appendChild(createNumberCircle(x, y, number));
  }
  return clockFace;
}

function createHourCircle(circleX, circleY) {
  let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
  circle.setAttribute('stroke', 'yellow');
  circle.setAttribute('fill', 'green');
  circle.setAttribute('cx', circleX);
  circle.setAttribute('cy', circleY);
  circle.setAttribute('r', circleRadius);
  return circle;
}

function createNumberCircle(circleX, circleY, number) {
  let numberText = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  numberText.appendChild(document.createTextNode(number));
  numberText.setAttribute('x', circleX);
  numberText.setAttribute('y', circleY + circleRadius / 4);
  numberText.setAttribute('text-anchor', 'middle');
  numberText.setAttribute('style', `font-size: ${circleRadius}px`);
  return numberText;
}

function createDigitalWatch() {
  let digits = document.createElementNS("http://www.w3.org/2000/svg", 'text');
  digits.id = 'digits';
  digits.setAttribute('x', baseRadius);
  digits.setAttribute('y', baseRadius / 2);
  digits.setAttribute('text-anchor', 'middle');
  digits.setAttribute('style', `font-size: ${circleRadius}px`);
  digits.appendChild(document.createTextNode('00:00:00'));
  return digits;
}

function createArrow(arrowType, arrowWidth, arrowBold) {
  let arrow = document.createElementNS("http://www.w3.org/2000/svg", 'line');
  arrow.id = arrowType;
  arrow.setAttribute('x1', baseRadius);
  arrow.setAttribute('y1', baseRadius);
  arrow.setAttribute('x2', baseRadius + arrowWidth);
  arrow.setAttribute('y2', baseRadius);
  arrow.setAttribute('stroke-width', arrowBold);
  arrow.setAttribute('stroke', 'blue');
  return arrow;
}

setInterval(tickTimer, 1000);

function tickTimer() {
  let now = new Date();
  let thisSecond = now.getSeconds();
  let thisMinute = now.getMinutes();
  let thisHour   = now.getHours();
  updateWatch(thisHour, thisMinute, thisSecond);
  updateDigitalWatch(thisHour, thisMinute, thisSecond);
}

function updateWatch(hour, minute, second) {
  let thisSecondRotate = (second / 60) * 360 - 90;
  let thisMinuteRotate = (minute) / 60 * 360 - 90;
  let thisHourRotate   = (hour + minute / 60) / 12 * 360 - 90;
  rotateHandle('seconds', thisSecondRotate );
  rotateHandle('minutes', thisMinuteRotate);
  rotateHandle('hours', thisHourRotate);
}

function rotateHandle(handle, degree) {
  let arrow = document.getElementById(`${handle}`);

  arrow.setAttribute('transform', `rotate(${degree} ${baseRadius} ${baseRadius})`);
}

function updateDigitalWatch(hour, minute, second) {
  let digital = document.getElementById('digits');
  digital.textContent = addZeroToNumber(hour) + ':' + addZeroToNumber(minute) + ':' + addZeroToNumber(second);
}

function addZeroToNumber(currentTime) {
  return (`${currentTime}`.length < 2) ? (`0${currentTime}`) : currentTime;
}
