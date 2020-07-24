webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Header; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/dist/next-server/lib/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/core */ \"./node_modules/@emotion/core/dist/core.browser.esm.js\");\n\n\nvar _jsxFileName = \"/Users/gabrielasanchez/projects/wolfis-trip/components/Header.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-right: 20px;\\n  \"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    padding-right: 30px;\\n    background: #4abdac;\\n    border-radius: 1px;\\n    padding-left: 30px;\\n    margin-right: 10px;\\n    font-size: 1.5rem;\\n    text-decoration: none;\\n    color: #ffff;\\n    &:hover {\\n      color: #eb5e5f;\\n    }\\n  \"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    display: flex;\\n    color: #555555;\\n    flex-direction: row;\\n    align-items: center;\\n    justify-content: space-between;\\n    background: #ffff;\\n    font-family: 'Karla', sans-serif;\\n    margin-left: 30px;\\n    margin-top: 20px;\\n  \"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    font-size: 40px;\\n    color: #555555;\\n    border: 2px solid #555555;\\n    font-family: 'Karla', sans-serif;\\n    margin-top: 20px;\\n    text-decoration: none;\\n    margin-left: -15px;\\n  \"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n/** @jsx jsx */\n\n/** @jsxFrag React.Fragment */\n\n\nfunction Header() {\n  _s();\n\n  var _this = this;\n\n  var logo = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject());\n  var navbar = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject2());\n  var links = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject3());\n  var navbarLinkList = Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"css\"])(_templateObject4());\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var linkList = [{\n    name: 'About',\n    url: '/about'\n  }];\n  console.log('username', user);\n\n  if (user === null) {\n    linkList.push({\n      name: 'Register',\n      url: '/register'\n    });\n    linkList.push({\n      name: 'Login',\n      url: '/login'\n    });\n  } else {\n    linkList.push({\n      name: 'Logout',\n      url: '/logout'\n    });\n  }\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    fetch('/api/checkLogin', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      } // body: JSON.stringify({ }),\n\n    }).then(function (response) {\n      console.log('success', response);\n\n      if (response.ok !== true) {\n        throw new Error('Error fetching session');\n      }\n\n      return response.json();\n    }).then(function (json) {\n      if (json === true) {\n        setUser('TODO: add the user');\n      }\n    })[\"catch\"](function (err) {\n      console.error('error fetching session', err);\n    });\n  }, []);\n  return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 5\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Cabin+Sketch&display=swap\",\n    rel: \"stylesheet\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 7\n    }\n  }), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    css: navbar,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    className: \"logo-header\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 9\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: '/index',\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 11\n    }\n  }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\", {\n    href: \"#a\",\n    css: logo,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 13\n    }\n  }, \"Wolfi\"))), Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"div\", {\n    css: navbarLinkList,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 100,\n      columnNumber: 9\n    }\n  }, linkList.map(function (link) {\n    return Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      key: link.url,\n      href: link.url,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 103,\n        columnNumber: 15\n      }\n    }, Object(_emotion_core__WEBPACK_IMPORTED_MODULE_4__[\"jsx\"])(\"a\", {\n      href: \"#a\",\n      css: links,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 104,\n        columnNumber: 17\n      }\n    }, link.name));\n  }))));\n}\n\n_s(Header, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\n\n_c = Header;\n\nvar _c;\n\n$RefreshReg$(_c, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qcz82ZjRhIl0sIm5hbWVzIjpbIkhlYWRlciIsImxvZ28iLCJjc3MiLCJuYXZiYXIiLCJsaW5rcyIsIm5hdmJhckxpbmtMaXN0IiwidXNlU3RhdGUiLCJ1c2VyIiwic2V0VXNlciIsImxpbmtMaXN0IiwibmFtZSIsInVybCIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJlcnIiLCJlcnJvciIsIm1hcCIsImxpbmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUMvQixNQUFNQyxJQUFJLEdBQUdDLHlEQUFILG1CQUFWO0FBVUEsTUFBTUMsTUFBTSxHQUFHRCx5REFBSCxvQkFBWjtBQWFBLE1BQU1FLEtBQUssR0FBR0YseURBQUgsb0JBQVg7QUFjQSxNQUFNRyxjQUFjLEdBQUdILHlEQUFILG9CQUFwQjs7QUF0QytCLGtCQXlDUEksc0RBQVEsQ0FBQyxJQUFELENBekNEO0FBQUEsTUF5Q3hCQyxJQXpDd0I7QUFBQSxNQXlDbEJDLE9BekNrQjs7QUEwQy9CLE1BQU1DLFFBQVEsR0FBRyxDQUFDO0FBQUVDLFFBQUksRUFBRSxPQUFSO0FBQWlCQyxPQUFHLEVBQUU7QUFBdEIsR0FBRCxDQUFqQjtBQUVBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCTixJQUF4Qjs7QUFFQSxNQUFJQSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNqQkUsWUFBUSxDQUFDSyxJQUFULENBQWM7QUFBRUosVUFBSSxFQUFFLFVBQVI7QUFBb0JDLFNBQUcsRUFBRTtBQUF6QixLQUFkO0FBQ0FGLFlBQVEsQ0FBQ0ssSUFBVCxDQUFjO0FBQUVKLFVBQUksRUFBRSxPQUFSO0FBQWlCQyxTQUFHLEVBQUU7QUFBdEIsS0FBZDtBQUNELEdBSEQsTUFHTztBQUNMRixZQUFRLENBQUNLLElBQVQsQ0FBYztBQUFFSixVQUFJLEVBQUUsUUFBUjtBQUFrQkMsU0FBRyxFQUFFO0FBQXZCLEtBQWQ7QUFDRDs7QUFFREkseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLFNBQUssQ0FBQyxpQkFBRCxFQUFvQjtBQUN2QkMsWUFBTSxFQUFFLE1BRGU7QUFFdkJDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURULE9BRmMsQ0FLdkI7O0FBTHVCLEtBQXBCLENBQUwsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLFFBQUQsRUFBYztBQUNsQlIsYUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUF1Qk8sUUFBdkI7O0FBQ0EsVUFBSUEsUUFBUSxDQUFDQyxFQUFULEtBQWdCLElBQXBCLEVBQTBCO0FBQ3hCLGNBQU0sSUFBSUMsS0FBSixDQUFVLHdCQUFWLENBQU47QUFDRDs7QUFDRCxhQUFPRixRQUFRLENBQUNHLElBQVQsRUFBUDtBQUNELEtBYkgsRUFjR0osSUFkSCxDQWNRLFVBQUNJLElBQUQsRUFBVTtBQUNkLFVBQUlBLElBQUksS0FBSyxJQUFiLEVBQW1CO0FBQ2pCZixlQUFPLENBQUMsb0JBQUQsQ0FBUDtBQUNEO0FBQ0YsS0FsQkgsV0FtQlMsVUFBQ2dCLEdBQUQsRUFBUztBQUNkWixhQUFPLENBQUNhLEtBQVIsQ0FBYyx3QkFBZCxFQUF3Q0QsR0FBeEM7QUFDRCxLQXJCSDtBQXNCRCxHQXZCUSxFQXVCTixFQXZCTSxDQUFUO0FBeUJBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQ0UsUUFBSSxFQUFDLG9FQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBS0U7QUFBSyxPQUFHLEVBQUVyQixNQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSwwREFBQyxnREFBRDtBQUFNLFFBQUksRUFBRSxRQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFFBQUksRUFBQyxJQUFSO0FBQWEsT0FBRyxFQUFFRixJQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsQ0FERixDQURGLEVBUUU7QUFBSyxPQUFHLEVBQUVJLGNBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHSSxRQUFRLENBQUNpQixHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3RCLFdBQ0UsMERBQUMsZ0RBQUQ7QUFBTSxTQUFHLEVBQUVBLElBQUksQ0FBQ2hCLEdBQWhCO0FBQXFCLFVBQUksRUFBRWdCLElBQUksQ0FBQ2hCLEdBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLFVBQUksRUFBQyxJQUFSO0FBQWEsU0FBRyxFQUFFUCxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0d1QixJQUFJLENBQUNqQixJQURSLENBREYsQ0FERjtBQU9ELEdBUkEsQ0FESCxDQVJGLENBTEYsQ0FERjtBQTRCRDs7R0ExR3VCVixNOztLQUFBQSxNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuLyoqIEBqc3gganN4ICovXG4vKiogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cbmltcG9ydCB7IGpzeCwgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgY29uc3QgbG9nbyA9IGNzc2BcbiAgICBmb250LXNpemU6IDQwcHg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzU1NTU1NTtcbiAgICBmb250LWZhbWlseTogJ0thcmxhJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIGA7XG5cbiAgY29uc3QgbmF2YmFyID0gY3NzYFxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgY29sb3I6ICM1NTU1NTU7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZjtcbiAgICBmb250LWZhbWlseTogJ0thcmxhJywgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICBgO1xuXG4gIGNvbnN0IGxpbmtzID0gY3NzYFxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogIzRhYmRhYztcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICNmZmZmO1xuICAgICY6aG92ZXIge1xuICAgICAgY29sb3I6ICNlYjVlNWY7XG4gICAgfVxuICBgO1xuXG4gIGNvbnN0IG5hdmJhckxpbmtMaXN0ID0gY3NzYFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgYDtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IGxpbmtMaXN0ID0gW3sgbmFtZTogJ0Fib3V0JywgdXJsOiAnL2Fib3V0JyB9XTtcblxuICBjb25zb2xlLmxvZygndXNlcm5hbWUnLCB1c2VyKTtcblxuICBpZiAodXNlciA9PT0gbnVsbCkge1xuICAgIGxpbmtMaXN0LnB1c2goeyBuYW1lOiAnUmVnaXN0ZXInLCB1cmw6ICcvcmVnaXN0ZXInIH0pO1xuICAgIGxpbmtMaXN0LnB1c2goeyBuYW1lOiAnTG9naW4nLCB1cmw6ICcvbG9naW4nIH0pO1xuICB9IGVsc2Uge1xuICAgIGxpbmtMaXN0LnB1c2goeyBuYW1lOiAnTG9nb3V0JywgdXJsOiAnL2xvZ291dCcgfSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoKCcvYXBpL2NoZWNrTG9naW4nLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICAvLyBib2R5OiBKU09OLnN0cmluZ2lmeSh7IH0pLFxuICAgIH0pXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5vayAhPT0gdHJ1ZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgZmV0Y2hpbmcgc2Vzc2lvbicpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KVxuICAgICAgLnRoZW4oKGpzb24pID0+IHtcbiAgICAgICAgaWYgKGpzb24gPT09IHRydWUpIHtcbiAgICAgICAgICBzZXRVc2VyKCdUT0RPOiBhZGQgdGhlIHVzZXInKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGZldGNoaW5nIHNlc3Npb24nLCBlcnIpO1xuICAgICAgfSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8bGlua1xuICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYWJpbitTa2V0Y2gmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICA+PC9saW5rPlxuICAgICAgPGRpdiBjc3M9e25hdmJhcn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nby1oZWFkZXJcIj5cbiAgICAgICAgICA8TGluayBocmVmPXsnL2luZGV4J30+XG4gICAgICAgICAgICA8YSBocmVmPVwiI2FcIiBjc3M9e2xvZ299PlxuICAgICAgICAgICAgICBXb2xmaVxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY3NzPXtuYXZiYXJMaW5rTGlzdH0+XG4gICAgICAgICAge2xpbmtMaXN0Lm1hcCgobGluaykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsga2V5PXtsaW5rLnVybH0gaHJlZj17bGluay51cmx9PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjYVwiIGNzcz17bGlua3N9PlxuICAgICAgICAgICAgICAgICAge2xpbmsubmFtZX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})