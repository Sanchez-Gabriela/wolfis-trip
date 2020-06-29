exports.ids = [1];
exports.modules = {

/***/ "./hashing.ts":
/*!********************!*\
  !*** ./hashing.ts ***!
  \********************/
/*! exports provided: hashPassword, verifyHashMatchesPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hashPassword\", function() { return hashPassword; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"verifyHashMatchesPassword\", function() { return verifyHashMatchesPassword; });\nconst argon2 = __webpack_require__(/*! argon2 */ \"argon2\");\n\nasync function hashPassword(password) {\n  return argon2.hash(password);\n}\nasync function verifyHashMatchesPassword(passwordHash, password) {\n  return argon2.verify(passwordHash, password);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9oYXNoaW5nLnRzPzNkNzUiXSwibmFtZXMiOlsiYXJnb24yIiwicmVxdWlyZSIsImhhc2hQYXNzd29yZCIsInBhc3N3b3JkIiwiaGFzaCIsInZlcmlmeUhhc2hNYXRjaGVzUGFzc3dvcmQiLCJwYXNzd29yZEhhc2giLCJ2ZXJpZnkiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxzQkFBRCxDQUF0Qjs7QUFFTyxlQUFlQyxZQUFmLENBQTRCQyxRQUE1QixFQUE4QztBQUNuRCxTQUFPSCxNQUFNLENBQUNJLElBQVAsQ0FBWUQsUUFBWixDQUFQO0FBQ0Q7QUFFTSxlQUFlRSx5QkFBZixDQUNMQyxZQURLLEVBRUxILFFBRkssRUFHTDtBQUNBLFNBQU9ILE1BQU0sQ0FBQ08sTUFBUCxDQUFjRCxZQUFkLEVBQTRCSCxRQUE1QixDQUFQO0FBQ0QiLCJmaWxlIjoiLi9oYXNoaW5nLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXJnb24yID0gcmVxdWlyZSgnYXJnb24yJyk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocGFzc3dvcmQ6IHN0cmluZykge1xuICByZXR1cm4gYXJnb24yLmhhc2gocGFzc3dvcmQpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdmVyaWZ5SGFzaE1hdGNoZXNQYXNzd29yZChcbiAgcGFzc3dvcmRIYXNoOiBzdHJpbmcsXG4gIHBhc3N3b3JkOiBzdHJpbmcsXG4pIHtcbiAgcmV0dXJuIGFyZ29uMi52ZXJpZnkocGFzc3dvcmRIYXNoLCBwYXNzd29yZCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./hashing.ts\n");

/***/ })

};;