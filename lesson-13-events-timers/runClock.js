'use strict';

function str0L(val, len) {
  var strVal = val.toString();
  while (strVal.length < len) {
    strVal = '0' + strVal;
  }
  return strVal;
}

function timeSet() {
  var now = new Date();

  var second  = now.getSeconds();
  var minute = now.getMinutes();
  var hour = now.getHours();

  updateWatch(hour, minute, second);
  updateDigitalWatch(hour, minute, second);
}

function updateWatch(hour, minute, second) {
  var secondsDegrees = ((second / 60) * 360) + 270;
  var minuteDegrees = ((minute * 60 + second) / 3600) * 360 + 270;
  var hourDegrees = ((hour * 3600 + minute * 60 + second) / 43200) * 360 + 270;

  rotateHandle('secondHand', secondsDegrees );
  rotateHandle('minuteHand', minuteDegrees);
  rotateHandle('hourHand', hourDegrees);
}

function rotateHandle(handle, degree) {
  let arrow = document.getElementById(handle);
  arrow.style.transform = 'rotate(' + degree + 'deg)';
}

function updateDigitalWatch(hour, minute, second) {
  var digital = document.getElementById('digital');
  digital.textContent = str0L(hour, 2) + ':' + str0L(minute, 2) + ':' + str0L(second, 2);
}

setInterval(timeSet, 1000);
