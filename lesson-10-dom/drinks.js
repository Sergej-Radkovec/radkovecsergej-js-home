'use strict';

function THashStorage() {}

THashStorage.prototype.addValue = function (key, value) {
  this[key] = value;
};

THashStorage.prototype.getValue = function (key) {
  return this[key];
};

THashStorage.prototype.deleteValue = function (key) {
  delete this[key];
};

THashStorage.prototype.getKeys = function () {
  return Object.keys(this);
};



