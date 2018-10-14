'use strict';

var secondHand = document.getElementById('secondHand');

var hourHand = document.getElementById('hourHand');

var minuteHand = document.getElementById('minuteHand');

function str0L(val, len) {
  var strVal = val.toString();
  while (strVal.length < len) {
    strVal = '0' + strVal;
  }
  return strVal;
}

function timeSet() {
  var now = new Date();

  var seconds  = now.getSeconds();
  var secondsDegrees = ((seconds / 60) * 360) + 270;
  secondHand.style.transform = 'rotate(' + secondsDegrees + 'deg)'

  var minute = now.getMinutes();
  var minuteDegrees = ((minute * 60 + seconds) / 3600) * 360 + 270;
  minuteHand.style.transform = 'rotate(' + minuteDegrees + 'deg)';

  var hour = now.getHours();
  var hourDegrees = ((hour * 3600 + minute * 60 + seconds) / 43200) * 360 + 270;
  hourHand.style.transform = 'rotate(' + hourDegrees + 'deg)';


  var digital = document.getElementById('digital');
  digital.textContent = str0L(hour, 2) + ':' + str0L(minute, 2) + ':' + str0L(seconds, 2);
}

setInterval(timeSet, 1000);
