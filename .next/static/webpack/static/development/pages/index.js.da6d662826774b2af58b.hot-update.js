webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/gabrielasanchez/projects/wolfis-trip/components/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    padding-right: 30px;\\n    padding-left: 20px;\\n    font-size: 1.5rem;\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    display: flex;\\n    color: #555555;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-between;\\n    background: #ffff;\\n    font-family: 'Julius Sans One', sans-serif;\\n    padding: 20px;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 40px;\\n    color: #555555;\\n    border: 2px solid #555555;\\n    font-family: 'Karla', sans-serif;\\n    margin-left: 20px;\\n    margin-top: 20px;\\n    text-decoration: none;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n/** @jsx jsx */\n\n/** @jsxFrag React.Fragment */\n\n\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var logo = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\n  var navbar = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n  var links = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject3());\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var linkList = [{\n    name: 'About',\n    url: '/about'\n  }];\n  console.log('username', user);\n\n  if (user === null) {\n    linkList.push({\n      name: 'Register',\n      url: '/register'\n    });\n    linkList.push({\n      name: 'Login',\n      url: '/login'\n    });\n  } else {\n    linkList.push({\n      name: 'Logout',\n      url: '/logout'\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch('/api/checkLogin', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      } // body: JSON.stringify({ }),\n\n    }).then(function (response) {\n      console.log('success', response);\n\n      if (response.ok !== true) {\n        throw new Error('Error fetching session');\n      }\n\n      return response.json();\n    }).then(function (json) {\n      if (json === true) {\n        setUser('TODO: add the user');\n      }\n    })[\"catch\"](function (err) {\n      console.error('error fetching session', err);\n    });\n  }, []);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"style\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 76,\n      columnNumber: 7\n    }\n  }, \"@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    css: navbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    className: \"logo-header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: '/index',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\", {\n    href: \"#a\",\n    css: logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }\n  }, \"Wolfi\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    className: \"navbar-linkList\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 9\n    }\n  }, linkList.map(function (link) {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      key: link.url,\n      href: link.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 15\n      }\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\", {\n      css: links,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }\n    }, link.name));\n  }))));\n}\n\n_s(Header, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsImxvZ28iLCJjc3MiLCJuYXZiYXIiLCJsaW5rcyIsInVzZVN0YXRlIiwidXNlciIsInNldFVzZXIiLCJsaW5rTGlzdCIsIm5hbWUiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsInVzZUVmZmVjdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZXJyIiwiZXJyb3IiLCJtYXAiLCJsaW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDL0IsTUFBTUMsSUFBSSxHQUFHQyx5REFBSCxtQkFBVjtBQVVBLE1BQU1DLE1BQU0sR0FBR0QseURBQUgsb0JBQVo7QUFZQSxNQUFNRSxLQUFLLEdBQUdGLHlEQUFILG9CQUFYOztBQXZCK0Isa0JBNEJQRyxzREFBUSxDQUFDLElBQUQsQ0E1QkQ7QUFBQSxNQTRCeEJDLElBNUJ3QjtBQUFBLE1BNEJsQkMsT0E1QmtCOztBQTZCL0IsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRUMsUUFBSSxFQUFFLE9BQVI7QUFBaUJDLE9BQUcsRUFBRTtBQUF0QixHQUFELENBQWpCO0FBRUFDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JOLElBQXhCOztBQUVBLE1BQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCRSxZQUFRLENBQUNLLElBQVQsQ0FBYztBQUFFSixVQUFJLEVBQUUsVUFBUjtBQUFvQkMsU0FBRyxFQUFFO0FBQXpCLEtBQWQ7QUFDQUYsWUFBUSxDQUFDSyxJQUFULENBQWM7QUFBRUosVUFBSSxFQUFFLE9BQVI7QUFBaUJDLFNBQUcsRUFBRTtBQUF0QixLQUFkO0FBQ0QsR0FIRCxNQUdPO0FBQ0xGLFlBQVEsQ0FBQ0ssSUFBVCxDQUFjO0FBQUVKLFVBQUksRUFBRSxRQUFSO0FBQWtCQyxTQUFHLEVBQUU7QUFBdkIsS0FBZDtBQUNEOztBQUVESSx5REFBUyxDQUFDLFlBQU07QUFDZEMsU0FBSyxDQUFDLGlCQUFELEVBQW9CO0FBQ3ZCQyxZQUFNLEVBQUUsTUFEZTtBQUV2QkMsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQsT0FGYyxDQUt2Qjs7QUFMdUIsS0FBcEIsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCUixhQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCTyxRQUF2Qjs7QUFDQSxVQUFJQSxRQUFRLENBQUNDLEVBQVQsS0FBZ0IsSUFBcEIsRUFBMEI7QUFDeEIsY0FBTSxJQUFJQyxLQUFKLENBQVUsd0JBQVYsQ0FBTjtBQUNEOztBQUNELGFBQU9GLFFBQVEsQ0FBQ0csSUFBVCxFQUFQO0FBQ0QsS0FiSCxFQWNHSixJQWRILENBY1EsVUFBQ0ksSUFBRCxFQUFVO0FBQ2QsVUFBSUEsSUFBSSxLQUFLLElBQWIsRUFBbUI7QUFDakJmLGVBQU8sQ0FBQyxvQkFBRCxDQUFQO0FBQ0Q7QUFDRixLQWxCSCxXQW1CUyxVQUFDZ0IsR0FBRCxFQUFTO0FBQ2RaLGFBQU8sQ0FBQ2EsS0FBUixDQUFjLHdCQUFkLEVBQXdDRCxHQUF4QztBQUNELEtBckJIO0FBc0JELEdBdkJRLEVBdUJOLEVBdkJNLENBQVQ7QUF5QkEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnR0FERixFQUtFO0FBQUssT0FBRyxFQUFFcEIsTUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxRQUFJLEVBQUUsUUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsSUFBUjtBQUFhLE9BQUcsRUFBRUYsSUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLENBREYsQ0FERixFQVFFO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR08sUUFBUSxDQUFDaUIsR0FBVCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUN0QixXQUNFLDBEQUFDLGdEQUFEO0FBQU0sU0FBRyxFQUFFQSxJQUFJLENBQUNoQixHQUFoQjtBQUFxQixVQUFJLEVBQUVnQixJQUFJLENBQUNoQixHQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxTQUFHLEVBQUVOLEtBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFnQnNCLElBQUksQ0FBQ2pCLElBQXJCLENBREYsQ0FERjtBQUtELEdBTkEsQ0FESCxDQVJGLENBTEYsQ0FERjtBQTBCRDs7R0EzRnVCVCxNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuLyoqIEBqc3gganN4ICovXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIGNvbnN0IGxvZ28gPSBjc3NgXG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIGNvbG9yOiAjNTU1NTU1O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICM1NTU1NTU7XG4gICAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGA7XG5cbiAgY29uc3QgbmF2YmFyID0gY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgICBmb250LWZhbWlseTogJ0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XG4gICAgcGFkZGluZzogMjBweDtcbiAgYDtcblxuICBjb25zdCBsaW5rcyA9IGNzc2BcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgYDtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGxpbmtMaXN0ID0gW3sgbmFtZTogJ0Fib3V0JywgdXJsOiAnL2Fib3V0JyB9XTtcblxuICBjb25zb2xlLmxvZygndXNlcm5hbWUnLCB1c2VyKTtcblxuICBpZiAodXNlciA9PT0gbnVsbCkge1xuICAgIGxpbmtMaXN0LnB1c2goeyBuYW1lOiAnUmVnaXN0ZXInLCB1cmw6ICcvcmVnaXN0ZXInIH0pO1xuICAgIGxpbmtMaXN0LnB1c2goeyBuYW1lOiAnTG9naW4nLCB1cmw6ICcvbG9naW4nIH0pO1xuICB9IGVsc2Uge1xuICAgIGxpbmtMaXN0LnB1c2goeyBuYW1lOiAnTG9nb3V0JywgdXJsOiAnL2xvZ291dCcgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL2NoZWNrTG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeSh7IH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vayAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgc2Vzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgaWYgKGpzb24gPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRVc2VyKCdUT0RPOiBhZGQgdGhlIHVzZXInKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIHNlc3Npb24nLCBlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIEBpbXBvcnRcbiAgICAgICAgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1ham9yK01vbm8rRGlzcGxheSZkaXNwbGF5PXN3YXAnKTtcbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGNzcz17bmF2YmFyfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvLWhlYWRlclwiPlxuICAgICAgICAgIDxMaW5rIGhyZWY9eycvaW5kZXgnfT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjYVwiIGNzcz17bG9nb30+XG4gICAgICAgICAgICAgIFdvbGZpXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZiYXItbGlua0xpc3RcIj5cbiAgICAgICAgICB7bGlua0xpc3QubWFwKChsaW5rKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBrZXk9e2xpbmsudXJsfSBocmVmPXtsaW5rLnVybH0+XG4gICAgICAgICAgICAgICAgPGEgY3NzPXtsaW5rc30+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})