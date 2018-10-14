'use strict';
(function () {
  function generateClock(parent, size, clockColor, sectionColor) {
    var clock = doc.createElement('div');
    clock.style.position = 'absolute';
    clock.style.width = size + 'px';
    clock.style.height = size + 'px';
    clock.style.backgroundColor = clockColor;
    clock.style.borderRadius = '50%';
    container.appendChild(clock);

    var clockCenterX = clock.offsetWidth / 2;
    var clockCenterY = clock.offsetHeight / 2;

    var angle = 30;
    var sizeHour = size / 15;
    var radiusHour = size * 0.42;

    for (var i = 1; i < 13; i++) {
      var sectionCenterX = clockCenterX + radiusHour * Math.sin((angle) / 180 * Math.PI);
      var sectionCenterY = clockCenterY - radiusHour * Math.cos((angle) / 180 * Math.PI);

      var section = doc.createElement('div');
      section.style.position = 'absolute';
      section.style.width = sizeHour + 'px';
      section.style.height = sizeHour + 'px';
      section.style.backgroundColor = sectionColor;
      section.style.borderRadius = '50%';
      clock.appendChild(section);
      section.style.left = Math.round(sectionCenterX - section.offsetWidth / 2) + 'px';
      section.style.top = Math.round(sectionCenterY - section.offsetHeight / 2) + 'px';

      var hour = doc.createElement('p');
      hour.style.position = 'absolute';
      hour.style.margin = '0';
      hour.style.top = '50%';
      hour.style.left = '50%';
      hour.style.transform = 'translate(-50%, -50%)';
      hour.textContent = i;
      section.appendChild(hour);

      angle += 30;
    }

    var digitalWatchWidth = size / 1.7;
    var digitalWatchHeight = size / 5;

    var digitalWatch = doc.createElement('div');
    digitalWatch.style.position = 'absolute';
    digitalWatch.style.width = digitalWatchWidth + 'px';
    digitalWatch.style.height = digitalWatchHeight + 'px';
    clock.appendChild(digitalWatch);

    digitalWatch.style.left = clockCenterX - digitalWatchWidth / 2 + 'px';
    digitalWatch.style.top = clockCenterY - digitalWatchHeight * 1.4 + 'px';

    var digitalTime = doc.createElement('p');
    digitalTime.style.textAlign = 'center';
    digitalTime.style.margin = 'auto';
    digitalTime.style.fontSize = size / 10 + 'px';
    digitalTime.style.color = sectionColor;
    digitalTime.id = 'digital';
    digitalWatch.appendChild(digitalTime);
    digitalTime.textContent = '00:00:00';

    var handMargin = size / 40;

    var hourHand = doc.createElement('div');
    var hourHandBold = size / 50;
    hourHand.id = 'hourHand';
    hourHand.style.width = size / 4 + 'px';
    hourHand.style.border = hourHandBold + 'px solid black';
    hourHand.style.borderRadius = hourHandBold + 'px';
    hourHand.style.position = 'absolute';
    hourHand.style.top = clockCenterY - hourHandBold  + 'px';
    hourHand.style.left = clockCenterX - handMargin + 'px';
    hourHand.style.transformOrigin = handMargin + 'px';
    clock.appendChild(hourHand);

    var minuteHand = doc.createElement('div');
    var minuteHandBold = size / 80;
    minuteHand.id = 'minuteHand';
    minuteHand.style.width = size / 2.8 + 'px';
    minuteHand.style.border = minuteHandBold + 'px solid black';
    minuteHand.style.borderRadius = minuteHandBold + 'px';
    minuteHand.style.position = 'absolute';
    minuteHand.style.top = clockCenterY - minuteHandBold  + 'px';
    minuteHand.style.left = clockCenterX - handMargin + 'px';
    minuteHand.style.transformOrigin = handMargin + 'px';
    clock.appendChild(minuteHand);

    var secondHand = doc.createElement('div');
    var secondHandBold = size / 140;
    secondHand.id = 'secondHand';
    secondHand.style.width = size / 2.5 + 'px';
    secondHand.style.border = secondHandBold + 'px solid black';
    secondHand.style.borderRadius = secondHandBold + 'px';
    secondHand.style.position = 'absolute';
    secondHand.style.top = clockCenterY - secondHandBold  + 'px';
    secondHand.style.left = clockCenterX - handMargin + 'px';
    secondHand.style.transformOrigin = handMargin + 'px';
    clock.appendChild(secondHand);
  }

  var doc = document;
  var container = doc.body;
  generateClock(container, 350, '#03a9f4', 'red');
})();
