webpackHotUpdate("static/development/pages/readytogo.js",{

/***/ "./pages/readytogo.js":
/*!****************************!*\
  !*** ./pages/readytogo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return readytogo; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! constants */ \"./node_modules/constants-browserify/constants.json\");\nvar constants__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! constants */ \"./node_modules/constants-browserify/constants.json\", 1);\n\nvar _jsxFileName = \"/Users/gabrielasanchez/projects/wolfis-trip/pages/readytogo.js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    text-align: center;\\n    font-size: 1.5rem;\\n    font-family: 'Karla', sans-serif;\\n    margin-top: 60px;\\n    margin-right: 200px;\\n    color: #555555;\\n    text-align: center;\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    padding-right: 20px;\\n    padding-left: 20px;\\n    margin-left: 10px;\\n    margin-right: 10px;\\n    font-size: 1.5rem;\\n    font-family: 'Karla', sans-serif;\\n    text-decoration: none;\\n    background-color: #4abdac;\\n    color: #ffff;\\n    border-radius: 4px;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    background-color: #4abdac;\\n    display: flex;\\n    flex-direction: row;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n/** @jsx jsx */\n\n/** @jsxFrag React.Fragment */\n\n\n\nfunction readytogo(props) {\n  var _this = this;\n\n  var header = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\n  var links = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n  var quote = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject3());\n  console.log(fetch, \"object\", typeof sessionStorage); // let tagArray = [];\n\n  var tagArray = JSON.parse(window.sessionStorage.getItem('tags')); // window === globalThis\n\n  /*useEffect(() => {\n  });*/\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  }, \"@import url('https://fonts.googleapis.com/css2?family=Karla:wght@400;700&display=swap');\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    css: header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"p\", {\n    css: quote,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }, \"Enjoy Vienna!\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"ul\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }, tagArray.map(function (value) {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 17\n      }\n    }, \"Name: \", value.name), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 61,\n        columnNumber: 17\n      }\n    }, \"Address: \", value.address), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"img\", {\n      src: value.image,\n      alt: value.name,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 62,\n        columnNumber: 17\n      }\n    }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"li\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 63,\n        columnNumber: 17\n      }\n    }, value.description));\n  }))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }));\n}\n/*export async function getServerSideProps(context) {\n  console.log(context);\n  const { insertEntries } = await import('../db.js');\n\n  const tagArray = await insertEntries([]);\n  return {\n    props: {\n      tagArray,\n    },\n  };\n}*/\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWFkeXRvZ28uanM/NDU4YiJdLCJuYW1lcyI6WyJyZWFkeXRvZ28iLCJwcm9wcyIsImhlYWRlciIsImNzcyIsImxpbmtzIiwicXVvdGUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJzZXNzaW9uU3RvcmFnZSIsInRhZ0FycmF5IiwiSlNPTiIsInBhcnNlIiwid2luZG93IiwiZ2V0SXRlbSIsIm1hcCIsInZhbHVlIiwibmFtZSIsImFkZHJlc3MiLCJpbWFnZSIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxDQUFtQkMsS0FBbkIsRUFBMEI7QUFBQTs7QUFDdkMsTUFBTUMsTUFBTSxHQUFHQyx5REFBSCxtQkFBWjtBQU9BLE1BQU1DLEtBQUssR0FBR0QseURBQUgsb0JBQVg7QUFhQSxNQUFNRSxLQUFLLEdBQUdGLHlEQUFILG9CQUFYO0FBVUFHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLFlBQWtDLE9BQU9DLGNBQXpDLEVBL0J1QyxDQWdDdkM7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0MsTUFBTSxDQUFDSixjQUFQLENBQXNCSyxPQUF0QixDQUE4QixNQUE5QixDQUFYLENBQWpCLENBakN1QyxDQWlDNkI7O0FBRXBFOzs7QUFHQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdHQURGLEVBS0UsMERBQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUxGLEVBTUU7QUFBSyxPQUFHLEVBQUVaLE1BQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsT0FBRyxFQUFFRyxLQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dLLFFBQVEsQ0FBQ0ssR0FBVCxDQUFhLFVBQUNDLEtBQUQsRUFBVztBQUN2QixXQUNFLHVIQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVdBLEtBQUssQ0FBQ0MsSUFBakIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBQWNELEtBQUssQ0FBQ0UsT0FBcEIsQ0FGRixFQUdFO0FBQUssU0FBRyxFQUFFRixLQUFLLENBQUNHLEtBQWhCO0FBQXVCLFNBQUcsRUFBRUgsS0FBSyxDQUFDQyxJQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEYsRUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUtELEtBQUssQ0FBQ0ksV0FBWCxDQUpGLENBREY7QUFRRCxHQVRBLENBREgsQ0FGRixDQU5GLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFyQkYsQ0FERjtBQXlCRDtBQUVEIiwiZmlsZSI6Ii4vcGFnZXMvcmVhZHl0b2dvLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbi8qKiBAanN4IGpzeCAqL1xuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgU1NMX09QX05PX1NFU1NJT05fUkVTVU1QVElPTl9PTl9SRU5FR09USUFUSU9OIH0gZnJvbSAnY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVhZHl0b2dvKHByb3BzKSB7XG4gIGNvbnN0IGhlYWRlciA9IGNzc2BcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGFiZGFjO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYDtcblxuICBjb25zdCBsaW5rcyA9IGNzc2BcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YWJkYWM7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYDtcblxuICBjb25zdCBxdW90ZSA9IGNzc2BcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLXRvcDogNjBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYDtcblxuICBjb25zb2xlLmxvZyhmZXRjaCwgdHlwZW9mIHdpbmRvdywgdHlwZW9mIHNlc3Npb25TdG9yYWdlKTtcbiAgLy8gbGV0IHRhZ0FycmF5ID0gW107XG4gIGNvbnN0IHRhZ0FycmF5ID0gSlNPTi5wYXJzZSh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndGFncycpKTsgLy8gd2luZG93ID09PSBnbG9iYWxUaGlzXG5cbiAgLyp1c2VFZmZlY3QoKCkgPT4ge1xuICB9KTsqL1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgQGltcG9ydFxuICAgICAgICB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9S2FybGE6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCcpO1xuICAgICAgPC9zdHlsZT5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY3NzPXtoZWFkZXJ9PlxuICAgICAgICA8cCBjc3M9e3F1b3RlfT5FbmpveSBWaWVubmEhPC9wPlxuICAgICAgICA8dWw+XG4gICAgICAgICAge3RhZ0FycmF5Lm1hcCgodmFsdWUpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgPGxpPk5hbWU6IHt2YWx1ZS5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgPGxpPkFkZHJlc3M6IHt2YWx1ZS5hZGRyZXNzfTwvbGk+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3ZhbHVlLmltYWdlfSBhbHQ9e3ZhbHVlLm5hbWV9IC8+XG4gICAgICAgICAgICAgICAgPGxpPnt2YWx1ZS5kZXNjcmlwdGlvbn08L2xpPlxuICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbi8qZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XG4gIGNvbnNvbGUubG9nKGNvbnRleHQpO1xuICBjb25zdCB7IGluc2VydEVudHJpZXMgfSA9IGF3YWl0IGltcG9ydCgnLi4vZGIuanMnKTtcblxuICBjb25zdCB0YWdBcnJheSA9IGF3YWl0IGluc2VydEVudHJpZXMoW10pO1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICB0YWdBcnJheSxcbiAgICB9LFxuICB9O1xufSovXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/readytogo.js\n");

/***/ })

})