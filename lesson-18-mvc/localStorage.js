'use strict';

function TLocalStorage(name) {
  const self = this;
  let nameStorage = name;
  let pHash = {};
  if (nameStorage in localStorage) {
    pHash = JSON.parse(localStorage[nameStorage]);
  }

  function saveHash() {
    localStorage[name] = JSON.stringify(pHash);
  }

  self.addValue = function (key, value) {
    pHash[key] = value;
    saveHash();
  };

  self.getValue = function (key) {
    return pHash[key];
  };

  self.deleteValue = function (key) {
    delete pHash[key];
    saveHash();
  };

  self.getKeys = function () {
    return Object.keys(pHash);
  };
}