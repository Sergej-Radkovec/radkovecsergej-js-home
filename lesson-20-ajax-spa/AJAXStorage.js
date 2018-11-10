'use strict';

function AJAXStorage(url, name) {
  const self = this;
  let updatePassword;
  let pHash = {};

  getHash();

  function getHash() {
    updatePassword = Math.random();
    $.ajax(
      {
        url: url,
        type: 'POST',
        data: {
          f: 'LOCKGET', n: name,
          p: updatePassword
        },
        cache: false,
        success: lockGetReady,
        error: errorHandler
      }
    );
  }

  function lockGetReady(result) {
    if (result.error !== undefined) {
      alert(result.error);
    } else if (result.result !== '') {
      pHash = JSON.parse(result.result);
    }
  }

  function saveHash() {
    $.ajax(
      {
        url: url,
        type: 'POST',
        data: {
          f: 'UPDATE', n: name,
          v: JSON.stringify(pHash), p: updatePassword
        },
        cache: false,
        success: updateReady,
        error: errorHandler
      }
    );

    function updateReady(ResultH) {
      if (ResultH.error !== undefined) {
        alert(ResultH.error);
      }
    }
  }

  function errorHandler(jqXHR, StatusStr, ErrorStr) {
    alert(StatusStr + ' ' + ErrorStr);
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
