'use strict';

var dragImg = document.getElementById('img1');

var dragShiftX = 0;
var dragShiftY = 0;

dragImg.addEventListener('mousedown', function (MD) {
  MD.preventDefault();
  console.log(MD);
  dragShiftX = MD.pageX - dragImg.offsetLeft;
  dragShiftY = MD.pageY - dragImg.offsetTop;
  console.log(dragShiftX);
  console.log(dragShiftY);

  window.onmousemove = function (EO) {
    dragImg.style.position = 'absolute';
    dragImg.style.left = EO.pageX - dragShiftX + 'px';
    dragImg.style.top = EO.pageY - dragShiftY + 'px';
  };

  window.addEventListener('mouseup', function () {
    window.onmousemove = null;
  });
});



