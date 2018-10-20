'use strict';

var dragImg = null;

var dragShiftX = 0;
var dragShiftY = 0;

var allIMG = document.querySelectorAll('img');

function addAbsolutePos(elements) {
  var i = elements.length - 1;
  for (; i >= 0; i--) {
    var selectElem = elements[i];
    selectElem.style.top = selectElem.offsetTop + 'px';
    selectElem.style.left = selectElem.offsetLeft + 'px';
    selectElem.style.position = 'absolute';
  }
}

function startDrag(EO) {
  EO = EO || window.event;
  var selectElement = EO.target;
  if (selectElement.tagName === 'IMG') {
    dragImg = selectElement;
    EO.preventDefault();
    dragShiftX = EO.pageX - dragImg.offsetLeft;
    dragShiftY = EO.pageY - dragImg.offsetTop;
    window.onmousemove = drag;
    window.addEventListener('mouseup', endDrag);
  }
}

function drag(EO) {
  EO = EO || window.event;
  dragImg.style.cursor = 'move';
  dragImg.style.left = EO.pageX - dragShiftX + 'px';
  dragImg.style.top = EO.pageY - dragShiftY + 'px';
  dragImg.style.zIndex = 1;
}

function endDrag() {
  dragImg.style.cursor = 'default';
  dragImg.style.zIndex = 0;
  dragImg = null;
  window.onmousemove = null;
  dragShiftX = 0;
  dragShiftY = 0;
}

addAbsolutePos(allIMG);
window.addEventListener('mousedown', startDrag);
