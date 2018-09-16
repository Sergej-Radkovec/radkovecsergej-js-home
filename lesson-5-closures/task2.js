'use strict';

function removeClass(obj, cls) {
  while (obj.className.indexOf(cls) !== -1) {
    obj.className = obj.className.replace(cls, '').trim();
  }
  return obj;
}
