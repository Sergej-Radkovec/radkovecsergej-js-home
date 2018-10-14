'use strict';
(function () {
  function generateClock(parent, size, clockColor, sectionColor){
    var clock = doc.createElement('div');
    clock.style.position = 'absolute';
    clock.style.width = size + 'px';
    clock.style.height = size + 'px';
    clock.style.backgroundColor = clockColor;
    clock.style.borderRadius = '50%';
    container.appendChild(clock);

    var clockCenterX = clock.offsetWidth / 2;
    var clockCenterY = clock.offsetHeight / 2;

    var angle = 0;

    for (var i = 1; i < 13; i++) {
      var sectionCenterX = clockCenterX + (size * 0.42) * Math.sin((angle) / 180 * Math.PI);
      var sectionCenterY = clockCenterY - (size * 0.42) * Math.cos((angle) / 180 * Math.PI);

      var section = doc.createElement('div');
      section.style.position = 'absolute';
      section.style.width = size / 15 + 'px';
      section.style.height = size / 15 + 'px';
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
  }

  var doc = document;
  var container = doc.body;
  generateClock(container, 600, 'green', 'red');
})();

