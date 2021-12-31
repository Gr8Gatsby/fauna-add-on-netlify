"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var create = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var url, createDB, res, data;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            url = "/.netlify/functions/create";
            _context.next = 3;
            return fetch(url, {
              body: JSON.stringify({
                name: "Todo-list",
                desc: "Patrick's mother"
              }),
              method: "POST",
              "Content-Type": "application/json"
            });

          case 3:
            createDB = _context.sent;
            _context.next = 6;
            return createDB.json();

          case 6:
            res = _context.sent;
            data = res.body;
            console.log(data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function create() {
    return _ref.apply(this, arguments);
  };
}();

var readAll = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var url, readNotes, res, data;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            url = "/.netlify/functions/read";
            _context2.next = 3;
            return fetch(url);

          case 3:
            readNotes = _context2.sent;
            _context2.next = 6;
            return readNotes.json();

          case 6:
            res = _context2.sent;
            data = res.body;
            console.log(data);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function readAll() {
    return _ref2.apply(this, arguments);
  };
}();

var update = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var url, readNotes, res, data;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            url = "/.netlify/functions/update";
            _context3.next = 3;
            return fetch(url, {
              body: JSON.stringify({
                name: "negative",
                desc: "Jesus's mother"
              }),
              method: "PATCH",
              "Content-Type": "application/json"
            });

          case 3:
            readNotes = _context3.sent;
            _context3.next = 6;
            return readNotes.json();

          case 6:
            res = _context3.sent;
            data = res.body;
            console.log(data);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function update() {
    return _ref3.apply(this, arguments);
  };
}();

var deleteOne = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var url, readNotes, res, data;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            url = "/.netlify/functions/delete";
            _context4.next = 3;
            return fetch(url);

          case 3:
            readNotes = _context4.sent;
            _context4.next = 6;
            return readNotes.json();

          case 6:
            res = _context4.sent;
            data = res.body;
            console.log(data);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteOne() {
    return _ref4.apply(this, arguments);
  };
}(); // // create();
// // readAll();
// update();
// // deleteOne();


document.querySelector("#create").addEventListener("click", create);
document.querySelector("#read").addEventListener("click", readAll);
document.querySelector("#update").addEventListener("click", update);
document.querySelector("#delete").addEventListener("click", deleteOne);