'use strict';

function _asyncToGenerator(fn) {
  return function() {
    var gen = fn.apply(this, arguments);
    return new Promise(function(resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error); return;
        }
        if (info.done) {
          resolve(value);
        } else {
          return Promise.resolve(value).then(function(value) {
            step("next", value);
          }, function(err) {
            step("throw", err);
          });
        }
      }
      return step("next");
    });
  };
}

_asyncToGenerator(regeneratorRuntime.mark(function _callee() {
  var response;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (
      _context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return fetch('http://example.com/some.json');

        case 2:
          response = _context.sent;
          _context.t0 = console;
          _context.next = 6;
          return response.json();

        case 6:
          _context.t1 = _context.sent;

          _context.t0.log.call(_context.t0, _context.t1);

        case 8:
        case 'end':
          return _context.stop();
      }
    }
  }, _callee, undefined);
}))();