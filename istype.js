(function() {
  function isNull(obj, type) {
    return obj === null && type === null;
  }

  function isUndefined(obj, type) {
    return typeof obj === 'undefined' && obj === type;
  }

  function matchesConstructor(obj, type) {
    return obj.constructor === type;
  }

  isType = function(obj, type) {
    if (isUndefined(obj, type)) {
      return true;
    } else if (isNull(obj, type)) {
      return true;
    } else if (matchesConstructor(obj, type)) {
      return true;
    }
    return false;
  }
})();

