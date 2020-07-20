webpackHotUpdate("static/development/pages/weather.js",{

/***/ "./pages/weather.js":
/*!**************************!*\
  !*** ./pages/weather.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Weather; });\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/gabrielasanchez/projects/wolfis-trip/pages/weather.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n/** @jsx jsx */\n\n/** @jsxFrag React.Fragment */\n\n\nfunction Weather() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      weather = _useState[0],\n      setWeather = _useState[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var getWeather = /*#__PURE__*/function () {\n      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n        var response, jsonResponse;\n        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return fetch('http://api.openweathermap.org/data/2.5/weather?q=Vienna&APPID=ffc63954e8b3eb859d3685f92e76982b&units=metric');\n\n              case 2:\n                response = _context.sent;\n                _context.next = 5;\n                return response.json();\n\n              case 5:\n                jsonResponse = _context.sent;\n                console.log(jsonResponse);\n                setWeather(jsonResponse);\n\n              case 8:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n\n      return function getWeather() {\n        return _ref.apply(this, arguments);\n      };\n    }();\n\n    getWeather();\n  }, []);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, \"@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, \"Weather in Vienna\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_3__[\"jsx\"])(\"li\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 11\n    }\n  }, \"Temperature: \"))));\n}\n\n_s(Weather, \"Mos131Hxz3VSc+jVtInwzSzjUQ4=\");\n\n_c = Weather;\n\nvar _c;\n\n$RefreshReg$(_c, \"Weather\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy93ZWF0aGVyLmpzPzFlMGEiXSwibmFtZXMiOlsiV2VhdGhlciIsInVzZVN0YXRlIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJ1c2VFZmZlY3QiLCJnZXRXZWF0aGVyIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJqc29uUmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUNBOztBQUNBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBLGtCQUNGQyxzREFBUSxDQUFDLEVBQUQsQ0FETjtBQUFBLE1BQ3pCQyxPQUR5QjtBQUFBLE1BQ2hCQyxVQURnQjs7QUFFaENDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLFVBQVU7QUFBQSxrTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNNQyxLQUFLLENBQzFCLDZHQUQwQixDQURYOztBQUFBO0FBQ1hDLHdCQURXO0FBQUE7QUFBQSx1QkFJVUEsUUFBUSxDQUFDQyxJQUFULEVBSlY7O0FBQUE7QUFJWEMsNEJBSlc7QUFLakJDLHVCQUFPLENBQUNDLEdBQVIsQ0FBWUYsWUFBWjtBQUNBTiwwQkFBVSxDQUFDTSxZQUFELENBQVY7O0FBTmlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUg7O0FBQUEsc0JBQVZKLFVBQVU7QUFBQTtBQUFBO0FBQUEsT0FBaEI7O0FBUUFBLGNBQVU7QUFDWCxHQVZRLEVBVU4sRUFWTSxDQUFUO0FBV0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnR0FERixFQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsQ0FGRixDQUxGLENBREY7QUFjRDs7R0EzQnVCTCxPOztLQUFBQSxPIiwiZmlsZSI6Ii4vcGFnZXMvd2VhdGhlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLyoqIEBqc3gganN4ICovXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdlYXRoZXIoKSB7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBnZXRXZWF0aGVyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgJ2h0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT1WaWVubmEmQVBQSUQ9ZmZjNjM5NTRlOGIzZWI4NTlkMzY4NWY5MmU3Njk4MmImdW5pdHM9bWV0cmljJyxcbiAgICAgICk7XG4gICAgICBjb25zdCBqc29uUmVzcG9uc2UgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zb2xlLmxvZyhqc29uUmVzcG9uc2UpO1xuICAgICAgc2V0V2VhdGhlcihqc29uUmVzcG9uc2UpO1xuICAgIH07XG4gICAgZ2V0V2VhdGhlcigpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgQGltcG9ydFxuICAgICAgICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FybGE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPldlYXRoZXIgaW4gVmllbm5hPC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlRlbXBlcmF0dXJlOiA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/weather.js\n");

/***/ })

})