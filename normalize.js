"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractFields = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(apiURL, store, cache, createNode, touchNode, auth, item) {
    var _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, key, field;

    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context2.prev = 3;
            _iterator = (0, _getIterator3.default)((0, _keys2.default)(item));

          case 5:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context2.next = 14;
              break;
            }

            key = _step.value;
            field = item[key];

            if (!Array.isArray(field)) {
              _context2.next = 11;
              break;
            }

            _context2.next = 11;
            return _promise2.default.all(field.map(function () {
              var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(f) {
                return _regenerator2.default.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        return _context.abrupt("return", extractFields(apiURL, store, cache, createNode, touchNode, auth, f));

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, undefined);
              }));

              return function (_x8) {
                return _ref2.apply(this, arguments);
              };
            }()));

          case 11:
            _iteratorNormalCompletion = true;
            _context2.next = 5;
            break;

          case 14:
            _context2.next = 20;
            break;

          case 16:
            _context2.prev = 16;
            _context2.t0 = _context2["catch"](3);
            _didIteratorError = true;
            _iteratorError = _context2.t0;

          case 20:
            _context2.prev = 20;
            _context2.prev = 21;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 23:
            _context2.prev = 23;

            if (!_didIteratorError) {
              _context2.next = 26;
              break;
            }

            throw _iteratorError;

          case 26:
            return _context2.finish(23);

          case 27:
            return _context2.finish(20);

          case 28:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, undefined, [[3, 16, 20, 28], [21,, 23, 27]]);
  }));

  return function extractFields(_x, _x2, _x3, _x4, _x5, _x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();

// Downloads media from image type fields
exports.downloadMediaFiles = function () {
  var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(_ref4) {
    var entities = _ref4.entities,
        apiURL = _ref4.apiURL,
        store = _ref4.store,
        cache = _ref4.cache,
        createNode = _ref4.createNode,
        touchNode = _ref4.touchNode,
        auth = _ref4.jwtToken;
    return _regenerator2.default.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", _promise2.default.all(entities.map(function () {
              var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(entity) {
                var _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, item;

                return _regenerator2.default.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context3.prev = 3;
                        _iterator2 = (0, _getIterator3.default)(entity);

                      case 5:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                          _context3.next = 12;
                          break;
                        }

                        item = _step2.value;
                        _context3.next = 9;
                        return extractFields(apiURL, store, cache, createNode, touchNode, auth, item);

                      case 9:
                        _iteratorNormalCompletion2 = true;
                        _context3.next = 5;
                        break;

                      case 12:
                        _context3.next = 18;
                        break;

                      case 14:
                        _context3.prev = 14;
                        _context3.t0 = _context3["catch"](3);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context3.t0;

                      case 18:
                        _context3.prev = 18;
                        _context3.prev = 19;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                          _iterator2.return();
                        }

                      case 21:
                        _context3.prev = 21;

                        if (!_didIteratorError2) {
                          _context3.next = 24;
                          break;
                        }

                        throw _iteratorError2;

                      case 24:
                        return _context3.finish(21);

                      case 25:
                        return _context3.finish(18);

                      case 26:
                        return _context3.abrupt("return", entity);

                      case 27:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3, undefined, [[3, 14, 18, 26], [19,, 21, 25]]);
              }));

              return function (_x10) {
                return _ref5.apply(this, arguments);
              };
            }())));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, undefined);
  }));

  return function (_x9) {
    return _ref3.apply(this, arguments);
  };
}();