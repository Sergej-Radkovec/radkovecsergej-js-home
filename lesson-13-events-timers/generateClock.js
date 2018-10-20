'use strict';
var size = 355;
var sizeCircle = size / 15;
var radiusHour = size * 0.42;
var baseColor = '#03a9f4';
var sectionColor = 'red';
var digitalWatchWidth = size / 1.7;
var digitalWatchHeight = size / 5;
var handMargin = size / 40;
var hourHandBold = size / 50;
var hourHandWidth = size / 4;
var minuteHandBold = size / 80;
var minuteHandWidth = size / 2.8;
var secondHandBold = size / 140;
var secondHandWidth = size / 2.5;

var doc = document;
var container = doc.body;

container.appendChild(generateClock());

function generateClock() {
  var base = doc.createElement('div');
  base.style.position = 'relative';
  base.style.width = size + 'px';
  base.style.height = size + 'px';
  base.style.backgroundColor = baseColor;
  base.style.borderRadius = '50%';
  base.appendChild(createClockFace());
  base.appendChild(createDigitalWatch());
  base.appendChild(createArrow('hourHand', hourHandWidth, hourHandBold));
  base.appendChild(createArrow('minuteHand', minuteHandWidth, minuteHandBold));
  base.appendChild(createArrow('secondHand', secondHandWidth, secondHandBold));

  return base;
}

function createClockFace() {
  let clockFace = document.createDocumentFragment();
  var angle = 30;

  for (var i = 1; i < 13; i++) {
    var sectionCenterX = size / 2 + radiusHour * Math.sin((i * angle) / 180 * Math.PI);
    var sectionCenterY = size / 2 - radiusHour * Math.cos((i * angle) / 180 * Math.PI);
    clockFace.appendChild(createHourCircle(sectionCenterX, sectionCenterY, i));
  }
  return clockFace;
}

function createHourCircle(circleX, circleY, number){
  var section = doc.createElement('div');
  section.style.position = 'absolute';
  section.style.width = sizeCircle + 'px';
  section.style.height = sizeCircle + 'px';
  section.style.backgroundColor = sectionColor;
  section.style.borderRadius = '50%';
  section.style.left = Math.round(circleX - sizeCircle / 2) + 'px';
  section.style.top = Math.round(circleY - sizeCircle / 2) + 'px';

  var hour = doc.createElement('p');
  hour.style.position = 'absolute';
  hour.style.margin = '0';
  hour.style.top = '50%';
  hour.style.left = '50%';
  hour.style.transform = 'translate(-50%, -50%)';
  hour.textContent = number;
  section.appendChild(hour);
  return section;
}

function createDigitalWatch() {
  var digitalWatch = doc.createElement('div');
  digitalWatch.style.position = 'absolute';
  digitalWatch.style.width = digitalWatchWidth + 'px';
  digitalWatch.style.height = digitalWatchHeight + 'px';

  digitalWatch.style.left = size / 2 - digitalWatchWidth / 2 + 'px';
  digitalWatch.style.top = size / 2 - digitalWatchHeight * 1.4 + 'px';

  var digitalTime = doc.createElement('p');
  digitalTime.style.textAlign = 'center';
  digitalTime.style.margin = 'auto';
  digitalTime.style.fontSize = size / 10 + 'px';
  digitalTime.style.color = sectionColor;
  digitalTime.id = 'digital';
  digitalWatch.appendChild(digitalTime);
  digitalTime.textContent = '00:00:00';

  return digitalWatch;
}

function createArrow(arrowType, arrowWidth, arrowBold) {
  var arrow = doc.createElement('div');

  arrow.id = arrowType;
  arrow.style.width = arrowWidth + 'px';
  arrow.style.border = arrowBold + 'px solid black';
  arrow.style.borderRadius = arrowBold + 'px';
  arrow.style.position = 'absolute';
  arrow.style.top = size / 2 - arrowBold + 'px';
  arrow.style.left = size / 2 - handMargin + 'px';
  arrow.style.transformOrigin = handMargin + 'px';

  return arrow;
}
