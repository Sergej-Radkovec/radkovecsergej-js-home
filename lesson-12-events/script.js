'use strict';

var dragImg = null;

var dragShiftX = 0;
var dragShiftY = 0;
var zIndex = 0;

var allIMG = document.querySelectorAll('img');

function addAbsolutePos(elements) {
  for (var i = 0; i < elements.length; i++) {
    var selectElem =  elements[i];
    selectElem.style.top = selectElem.offsetTop + 'px';
    selectElem.style.left = selectElem.offsetLeft + 'px';
  }

  for (var j = 0; j < elements.length; j++) {
    elements[j].style.position = 'absolute';
  }
}

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
  dragImg.style.cursor = 'move';
  dragImg.style.position = 'absolute';
  dragImg.style.left = EO.pageX - dragShiftX + 'px';
  dragImg.style.top = EO.pageY - dragShiftY + 'px';
  dragImg.style.zIndex = zIndex;
}

function endDrag() {
  dragImg.style.cursor = 'default';
  dragImg = null;
  window.onmousemove = null;
  dragShiftX = 0;
  dragShiftY = 0;
}

addAbsolutePos(allIMG);
window.addEventListener('mousedown', startDrag);
window.addEventListener('mouseup', endDrag);


