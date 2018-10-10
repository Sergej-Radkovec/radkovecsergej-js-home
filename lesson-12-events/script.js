'use strict';

var dragImg = null;

var dragShiftX = 0;
var dragShiftY = 0;
var zIndex = 0;

function startDrag(EO) {
  EO = EO || window.event;
  var selectElement = EO.path[0];
  if (selectElement.tagName === 'IMG') {
    dragImg = selectElement;
    EO.preventDefault();
    dragShiftX = EO.pageX - dragImg.offsetLeft;
    dragShiftY = EO.pageY - dragImg.offsetTop;
    window.onmousemove = drag;
    zIndex += 1;
  }
}

function drag(EO) {
  EO = EO || window.event;
  dragImg.style.position = 'absolute';
  dragImg.style.left = EO.pageX - dragShiftX + 'px';
  dragImg.style.top = EO.pageY - dragShiftY + 'px';
  dragImg.style.zIndex = zIndex;
}

function endDrag() {
  dragImg = null;
  window.onmousemove = null;
  dragShiftX = 0;
  dragShiftY = 0;
}

window.addEventListener('mousedown', startDrag);
window.addEventListener('mouseup', endDrag);


