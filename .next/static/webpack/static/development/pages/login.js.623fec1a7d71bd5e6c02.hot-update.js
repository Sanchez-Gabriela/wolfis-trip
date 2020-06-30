webpackHotUpdate("static/development/pages/login.js",{

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Login; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ \"./components/Header.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/gabrielasanchez/projects/wolfis-trip/pages/login.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 40px;\\n  color: #fc4a1a;\\n  display: inline-block;\\n  margin-left: 20px;\\n  margin-top: 20px;\\n  font-family: 'Karla', sans-serif;\\n  text-decoration: none;\\n  border: 2px solid #fc4a1a;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  color: #323339;\\n  font-size: 18px;\\n  font-family: 'Karla', sans-serif;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  margin: 15px;\\n  text-decoration: none;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  border-radius: 4px;\\n  font-family: 'Karla', sans-serif;\\n  font-size: 18px;\\n  margin-top: 10px;\\n  background: #ffff;\\n  border: 2px solid #2f4f4f;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  line-height: 2.5;\\n  margin-bottom: 15px;\\n  border-radius: 4px;\\n  border: 2px solid #f7b733;\\n  margin-top: 20px;\\n  font-family: 'Karla', sans-serif;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: #f7b733;\\n  width: 200px;\\n  position: relative;\\n  margin: auto;\\n  margin-top: 10%;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n  padding: 20px;\\n  border-radius: 6px;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background: #4abdac;\\n  min-height: 100vh;\\n  font-weight: 400;\\n  font-family: 'Karla', sans-serif;\\n  width: 100%;\\n  position: absolute;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n/** @jsx jsx */\n\n/** @jsxFrag React.Fragment */\n\n//================================================================================\n// Style\n//================================================================================\nvar app = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject());\nvar form = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject2());\nvar input = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject3());\nvar button = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject4());\nvar forgottenPass = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject5());\nvar logo = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"css\"])(_templateObject6()); //================================================================================\n// Function\n//================================================================================\n\nvar __N_SSP = true;\nfunction Login() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      username = _useState[0],\n      setUsername = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      password = _useState2[0],\n      setPassword = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(''),\n      status = _useState3[0],\n      setStatus = _useState3[1];\n\n  function onSubmit(event) {\n    event.preventDefault();\n    fetch('/api/login', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify({\n        username: username,\n        password: password\n      })\n    }).then(function (response) {\n      if (response.ok !== true) {\n        setStatus('Failed logging in - response is not ok');\n      }\n\n      return response.json();\n    }).then(function (json) {\n      if (json.loggedIn === false) {\n        setStatus('Failed logging in - check username and password');\n      } else {\n        setStatus('Logged in!');\n        setTimeout(function () {\n          next_router__WEBPACK_IMPORTED_MODULE_4___default.a.replace('/');\n        }, 2000);\n      }\n    })[\"catch\"](function () {\n      setStatus('Failed logging in - request failed');\n    });\n  }\n\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 121,\n      columnNumber: 7\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"div\", {\n    css: app,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: '/index',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 123,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\", {\n    href: \"#a\",\n    css: logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 124,\n      columnNumber: 11\n    }\n  }, \"Wolfi\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"form\", {\n    method: \"POST\",\n    css: form,\n    onSubmit: onSubmit,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 128,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"input\", {\n    css: input,\n    onChange: function onChange(event) {\n      return setUsername(event.target.value);\n    },\n    placeholder: \"username\",\n    name: \"username\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 129,\n      columnNumber: 11\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"input\", {\n    css: input,\n    placeholder: \"Password\",\n    type: \"password\",\n    name: \"password\",\n    onChange: function onChange(event) {\n      return setPassword(event.target.value);\n    },\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 136,\n      columnNumber: 11\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"button\", {\n    css: button,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 143,\n      columnNumber: 11\n    }\n  }, \" LOGIN\")), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"p\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 9\n    }\n  }, \"lala: \", status), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\", {\n    href: \"#a\",\n    css: forgottenPass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 146,\n      columnNumber: 9\n    }\n  }, \"I forgot my password, send me an email \\u226B\"), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: '/register',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 149,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_5__[\"jsx\"])(\"a\", {\n    href: \"#a\",\n    css: forgottenPass,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 11\n    }\n  }, \"Register \\u226B\"))));\n}\n\n_s(Login, \"Semm9JWxnwRAVKfWGfrHNA4ULqA=\");\n\n_c = Login;\n\nvar _c;\n\n$RefreshReg$(_c, \"Login\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi50c3g/ZDc1ZiJdLCJuYW1lcyI6WyJhcHAiLCJjc3MiLCJmb3JtIiwiaW5wdXQiLCJidXR0b24iLCJmb3Jnb3R0ZW5QYXNzIiwibG9nbyIsIkxvZ2luIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsInN0YXR1cyIsInNldFN0YXR1cyIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJqc29uIiwibG9nZ2VkSW4iLCJzZXRUaW1lb3V0IiwiUm91dGVyIiwicmVwbGFjZSIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxHQUFHLEdBQUdDLHlEQUFILG1CQUFUO0FBUUEsSUFBTUMsSUFBSSxHQUFHRCx5REFBSCxvQkFBVjtBQWNBLElBQU1FLEtBQUssR0FBR0YseURBQUgsb0JBQVg7QUFTQSxJQUFNRyxNQUFNLEdBQUdILHlEQUFILG9CQUFaO0FBU0EsSUFBTUksYUFBYSxHQUFHSix5REFBSCxvQkFBbkI7QUFZQSxJQUFNSyxJQUFJLEdBQUdMLHlEQUFILG9CQUFWLEMsQ0FXQTtBQUNBO0FBQ0E7OztBQUNlLFNBQVNNLEtBQVQsR0FBaUI7QUFBQTs7QUFBQSxrQkFDRUMsc0RBQVEsQ0FBQyxFQUFELENBRFY7QUFBQSxNQUN2QkMsUUFEdUI7QUFBQSxNQUNiQyxXQURhOztBQUFBLG1CQUVFRixzREFBUSxDQUFDLEVBQUQsQ0FGVjtBQUFB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QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFEQXhCRixFQTJCRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxXQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxJQUFSO0FBQWEsT0FBRyxFQUFFQSxhQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLENBM0JGLENBRkYsQ0FERjtBQXNDRDs7R0F6RXVCRSxLOztLQUFBQSxLIiwiZmlsZSI6Ii4vcGFnZXMvbG9naW4udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBGb3JtRXZlbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgbmV4dENvb2tpZXMgZnJvbSAnbmV4dC1jb29raWVzJztcbi8qKiBAanN4IGpzeCAqL1xuLyoqIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXG5pbXBvcnQgeyBqc3gsIGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCB9IGZyb20gJ25leHQnO1xuXG5pbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSAnbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscyc7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIFN0eWxlXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbmNvbnN0IGFwcCA9IGNzc2BcbiAgYmFja2dyb3VuZDogIzRhYmRhYztcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xuICB3aWR0aDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuYDtcbmNvbnN0IGZvcm0gPSBjc3NgXG4gIGJhY2tncm91bmQ6ICNmN2I3MzM7XG4gIHdpZHRoOiAyMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IGF1dG87XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbmA7XG5cbmNvbnN0IGlucHV0ID0gY3NzYFxuICBsaW5lLWhlaWdodDogMi41O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmN2I3MzM7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xuYDtcblxuY29uc3QgYnV0dG9uID0gY3NzYFxuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGZvbnQtZmFtaWx5OiAnS2FybGEnLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmO1xuICBib3JkZXI6IDJweCBzb2xpZCAjMmY0ZjRmO1xuYDtcblxuY29uc3QgZm9yZ290dGVuUGFzcyA9IGNzc2BcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzMyMzMzOTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LWZhbWlseTogJ0thcmxhJywgc2Fucy1zZXJpZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuYDtcblxuY29uc3QgbG9nbyA9IGNzc2BcbiAgZm9udC1zaXplOiA0MHB4O1xuICBjb2xvcjogI2ZjNGExYTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZm9udC1mYW1pbHk6ICdLYXJsYScsIHNhbnMtc2VyaWY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYm9yZGVyOiAycHggc29saWQgI2ZjNGExYTtcbmA7XG5cbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEZ1bmN0aW9uXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbc3RhdHVzLCBzZXRTdGF0dXNdID0gdXNlU3RhdGUoJycpO1xuXG4gIGZ1bmN0aW9uIG9uU3VibWl0KGV2ZW50OiBGb3JtRXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZldGNoKCcvYXBpL2xvZ2luJywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyB1c2VybmFtZSwgcGFzc3dvcmQgfSksXG4gICAgfSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAocmVzcG9uc2Uub2sgIT09IHRydWUpIHtcbiAgICAgICAgICBzZXRTdGF0dXMoJ0ZhaWxlZCBsb2dnaW5nIGluIC0gcmVzcG9uc2UgaXMgbm90IG9rJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0pXG4gICAgICAudGhlbigoanNvbikgPT4ge1xuICAgICAgICBpZiAoanNvbi5sb2dnZWRJbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBzZXRTdGF0dXMoJ0ZhaWxlZCBsb2dnaW5nIGluIC0gY2hlY2sgdXNlcm5hbWUgYW5kIHBhc3N3b3JkJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0U3RhdHVzKCdMb2dnZWQgaW4hJyk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZSgnLycpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgc2V0U3RhdHVzKCdGYWlsZWQgbG9nZ2luZyBpbiAtIHJlcXVlc3QgZmFpbGVkJyk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDxkaXYgY3NzPXthcHB9PlxuICAgICAgICA8TGluayBocmVmPXsnL2luZGV4J30+XG4gICAgICAgICAgPGEgaHJlZj1cIiNhXCIgY3NzPXtsb2dvfT5cbiAgICAgICAgICAgIFdvbGZpXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBjc3M9e2Zvcm19IG9uU3VibWl0PXtvblN1Ym1pdH0+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjc3M9e2lucHV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gc2V0VXNlcm5hbWUoZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICBjc3M9e2lucHV0fVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFBhc3N3b3JkKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8YnV0dG9uIGNzcz17YnV0dG9ufT4gTE9HSU48L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cD5sYWxhOiB7c3RhdHVzfTwvcD5cbiAgICAgICAgPGEgaHJlZj1cIiNhXCIgY3NzPXtmb3Jnb3R0ZW5QYXNzfT5cbiAgICAgICAgICBJIGZvcmdvdCBteSBwYXNzd29yZCwgc2VuZCBtZSBhbiBlbWFpbCAmI3gwMjI2QjtcbiAgICAgICAgPC9hPlxuICAgICAgICA8TGluayBocmVmPXsnL3JlZ2lzdGVyJ30+XG4gICAgICAgICAgPGEgaHJlZj1cIiNhXCIgY3NzPXtmb3Jnb3R0ZW5QYXNzfT5cbiAgICAgICAgICAgIFJlZ2lzdGVyICYjeDAyMjZCO1xuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoY29udGV4dDogR2V0U2VydmVyU2lkZVByb3BzQ29udGV4dCkge1xuICBpZiAobmV4dENvb2tpZXMoY29udGV4dCkudG9rZW4pIHtcbiAgICBjb250ZXh0LnJlcy5zZXRIZWFkZXIoJ2xvY2F0aW9uJywgJy9pbnRlcmVzdCcpO1xuICAgIGNvbnRleHQucmVzLnN0YXR1c0NvZGUgPSAzMDI7XG4gICAgY29udGV4dC5yZXMuZW5kKCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login.tsx\n");

/***/ })

})