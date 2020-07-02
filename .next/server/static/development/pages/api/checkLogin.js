module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: getPlaces, selectUserByUsername, insertUser, selectSessionByToken, deleteSessionByToken, insertSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlaces\", function() { return getPlaces; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectUserByUsername\", function() { return selectUserByUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertUser\", function() { return insertUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSessionByToken\", function() { return selectSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSessionByToken\", function() { return deleteSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSession\", function() { return insertSession; });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst argon2 = __webpack_require__(/*! argon2 */ \"argon2\");\n\nconst postgres = __webpack_require__(/*! postgres */ \"postgres\");\n\nconst sql = postgres(); // const sights = [\n//   {\n//     name: 'Rathaus',\n//     address: '1., Rathausplatz 1',\n//     image: '/rathaus.jpg',\n//     description:\n//       'Nearly all-the-year you can find here some special events like the film festival, circus, Christkindlmarkt (Christmas market), Wiener Eistraum (ice-skating rink) and some other seasonal events.',\n//     parent_id: 'architecture',\n//   },\n//   {\n//     name: 'Parlament',\n//     address: '1., Dr. Karl-Renner-Ring 2',\n//     image: '/parlament.jpg',\n//     description:\n//       'with the Pallas Athene statue at the front is one of the most important splendor building at the Wiener Ringstraße. Built from 1874 to 1883 according the plans of architect Theophil Hansen in the Greek-Roman style the historical rooms are used as residence for the Austrian National and Federal council.',\n//     parent_id: 'architecture',\n//   },\n//   {\n//     name: 'Hofburg/Heldenplatz',\n//     address: '1., Hofburg',\n//     image: '/heldenplatz.jpg',\n//     description:\n//       'The Hofburg Vienna is an impressive building at the Heldenplatz with long history. It is located at Viennas splendor boulevard, the Ringstrasse, and is reachable from there through the Burgtor gate.',\n//     parent_id: 'architecture',\n//   },\n// ];\n\nasync function getPlaces() {\n  const places = await sql`\n    select * from places\n  `;\n  return places;\n}\nasync function selectUserByUsername(username, password) {\n  const usersWithUsername = await sql`\n  SELECT * FROM users WHERE username = ${username}\n  `; //select from always returns an array, even if its one\n  // console.log(usersWithUsername[0]);\n\n  if (usersWithUsername.length === 0) return usersWithUsername;\n  const passwordMatches = await argon2.verify(usersWithUsername[0].password_hash, password); //this returns boolean\n\n  if (passwordMatches) {\n    return usersWithUsername;\n  } else {\n    return [];\n  }\n}\nasync function insertUser(username, passwordHash) {\n  return sql`\n    INSERT INTO users (username, password_hash) VALUES (${username}, ${passwordHash})\n  `;\n}\nasync function selectSessionByToken(token) {\n  return sql`\n    SELECT * FROM sessions WHERE token = ${token}\n  `;\n}\nasync function deleteSessionByToken(token) {\n  return sql`\n    DELETE FROM sessions WHERE token = ${token}\n  `;\n}\nasync function insertSession(userId, token) {\n  return sql`\n    INSERT INTO sessions (user_id, token) VALUES (${userId}, ${token})\n  `;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi5qcz8yNmY1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJhcmdvbjIiLCJwb3N0Z3JlcyIsInNxbCIsImdldFBsYWNlcyIsInBsYWNlcyIsInNlbGVjdFVzZXJCeVVzZXJuYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzV2l0aFVzZXJuYW1lIiwibGVuZ3RoIiwicGFzc3dvcmRNYXRjaGVzIiwidmVyaWZ5IiwicGFzc3dvcmRfaGFzaCIsImluc2VydFVzZXIiLCJwYXNzd29yZEhhc2giLCJzZWxlY3RTZXNzaW9uQnlUb2tlbiIsInRva2VuIiwiZGVsZXRlU2Vzc2lvbkJ5VG9rZW4iLCJpbnNlcnRTZXNzaW9uIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiQUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsbUJBQU8sQ0FBQyxzQkFBRCxDQUFQLENBQWtCQyxNQUFsQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdGLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0EsTUFBTUcsUUFBUSxHQUFHSCxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUNBLE1BQU1JLEdBQUcsR0FBR0QsUUFBUSxFQUFwQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxlQUFlRSxTQUFmLEdBQTJCO0FBQ2hDLFFBQU1DLE1BQU0sR0FBRyxNQUFNRixHQUFJOztHQUF6QjtBQUdBLFNBQU9FLE1BQVA7QUFDRDtBQUVNLGVBQWVDLG9CQUFmLENBQW9DQyxRQUFwQyxFQUE4Q0MsUUFBOUMsRUFBd0Q7QUFDN0QsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTU4sR0FBSTt5Q0FDR0ksUUFBUztHQURoRCxDQUQ2RCxDQUcxRDtBQUNIOztBQUNBLE1BQUlFLGlCQUFpQixDQUFDQyxNQUFsQixLQUE2QixDQUFqQyxFQUFvQyxPQUFPRCxpQkFBUDtBQUNwQyxRQUFNRSxlQUFlLEdBQUcsTUFBTVYsTUFBTSxDQUFDVyxNQUFQLENBQzVCSCxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLENBQXFCSSxhQURPLEVBRTVCTCxRQUY0QixDQUE5QixDQU42RCxDQVMxRDs7QUFDSCxNQUFJRyxlQUFKLEVBQXFCO0FBQ25CLFdBQU9GLGlCQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxFQUFQO0FBQ0Q7QUFDRjtBQUVNLGVBQWVLLFVBQWYsQ0FBMEJQLFFBQTFCLEVBQW9DUSxZQUFwQyxFQUFrRDtBQUN2RCxTQUFPWixHQUFJOzBEQUM2Q0ksUUFBUyxLQUFJUSxZQUFhO0dBRGxGO0FBR0Q7QUFFTSxlQUFlQyxvQkFBZixDQUFvQ0MsS0FBcEMsRUFBMkM7QUFDaEQsU0FBT2QsR0FBSTsyQ0FDOEJjLEtBQU07R0FEL0M7QUFHRDtBQUVNLGVBQWVDLG9CQUFmLENBQW9DRCxLQUFwQyxFQUEyQztBQUNoRCxTQUFPZCxHQUFJO3lDQUM0QmMsS0FBTTtHQUQ3QztBQUdEO0FBRU0sZUFBZUUsYUFBZixDQUE2QkMsTUFBN0IsRUFBcUNILEtBQXJDLEVBQTRDO0FBQ2pELFNBQU9kLEdBQUk7b0RBQ3VDaUIsTUFBTyxLQUFJSCxLQUFNO0dBRG5FO0FBR0QiLCJmaWxlIjoiLi9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5jb25zdCBhcmdvbjIgPSByZXF1aXJlKCdhcmdvbjInKTtcbmNvbnN0IHBvc3RncmVzID0gcmVxdWlyZSgncG9zdGdyZXMnKTtcbmNvbnN0IHNxbCA9IHBvc3RncmVzKCk7XG5cbi8vIGNvbnN0IHNpZ2h0cyA9IFtcbi8vICAge1xuLy8gICAgIG5hbWU6ICdSYXRoYXVzJyxcbi8vICAgICBhZGRyZXNzOiAnMS4sIFJhdGhhdXNwbGF0eiAxJyxcbi8vICAgICBpbWFnZTogJy9yYXRoYXVzLmpwZycsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICAnTmVhcmx5IGFsbC10aGUteWVhciB5b3UgY2FuIGZpbmQgaGVyZSBzb21lIHNwZWNpYWwgZXZlbnRzIGxpa2UgdGhlIGZpbG0gZmVzdGl2YWwsIGNpcmN1cywgQ2hyaXN0a2luZGxtYXJrdCAoQ2hyaXN0bWFzIG1hcmtldCksIFdpZW5lciBFaXN0cmF1bSAoaWNlLXNrYXRpbmcgcmluaykgYW5kIHNvbWUgb3RoZXIgc2Vhc29uYWwgZXZlbnRzLicsXG4vLyAgICAgcGFyZW50X2lkOiAnYXJjaGl0ZWN0dXJlJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG5hbWU6ICdQYXJsYW1lbnQnLFxuLy8gICAgIGFkZHJlc3M6ICcxLiwgRHIuIEthcmwtUmVubmVyLVJpbmcgMicsXG4vLyAgICAgaW1hZ2U6ICcvcGFybGFtZW50LmpwZycsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICAnd2l0aCB0aGUgUGFsbGFzIEF0aGVuZSBzdGF0dWUgYXQgdGhlIGZyb250IGlzIG9uZSBvZiB0aGUgbW9zdCBpbXBvcnRhbnQgc3BsZW5kb3IgYnVpbGRpbmcgYXQgdGhlIFdpZW5lciBSaW5nc3RyYcOfZS4gQnVpbHQgZnJvbSAxODc0IHRvIDE4ODMgYWNjb3JkaW5nIHRoZSBwbGFucyBvZiBhcmNoaXRlY3QgVGhlb3BoaWwgSGFuc2VuIGluIHRoZSBHcmVlay1Sb21hbiBzdHlsZSB0aGUgaGlzdG9yaWNhbCByb29tcyBhcmUgdXNlZCBhcyByZXNpZGVuY2UgZm9yIHRoZSBBdXN0cmlhbiBOYXRpb25hbCBhbmQgRmVkZXJhbCBjb3VuY2lsLicsXG4vLyAgICAgcGFyZW50X2lkOiAnYXJjaGl0ZWN0dXJlJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG5hbWU6ICdIb2ZidXJnL0hlbGRlbnBsYXR6Jyxcbi8vICAgICBhZGRyZXNzOiAnMS4sIEhvZmJ1cmcnLFxuLy8gICAgIGltYWdlOiAnL2hlbGRlbnBsYXR6LmpwZycsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICAnVGhlIEhvZmJ1cmcgVmllbm5hIGlzIGFuIGltcHJlc3NpdmUgYnVpbGRpbmcgYXQgdGhlIEhlbGRlbnBsYXR6IHdpdGggbG9uZyBoaXN0b3J5LiBJdCBpcyBsb2NhdGVkIGF0IFZpZW5uYXMgc3BsZW5kb3IgYm91bGV2YXJkLCB0aGUgUmluZ3N0cmFzc2UsIGFuZCBpcyByZWFjaGFibGUgZnJvbSB0aGVyZSB0aHJvdWdoIHRoZSBCdXJndG9yIGdhdGUuJyxcbi8vICAgICBwYXJlbnRfaWQ6ICdhcmNoaXRlY3R1cmUnLFxuLy8gICB9LFxuLy8gXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYWNlcygpIHtcbiAgY29uc3QgcGxhY2VzID0gYXdhaXQgc3FsYFxuICAgIHNlbGVjdCAqIGZyb20gcGxhY2VzXG4gIGA7XG4gIHJldHVybiBwbGFjZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWxlY3RVc2VyQnlVc2VybmFtZSh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgY29uc3QgdXNlcnNXaXRoVXNlcm5hbWUgPSBhd2FpdCBzcWxgXG4gIFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcm5hbWUgPSAke3VzZXJuYW1lfVxuICBgOyAvL3NlbGVjdCBmcm9tIGFsd2F5cyByZXR1cm5zIGFuIGFycmF5LCBldmVuIGlmIGl0cyBvbmVcbiAgLy8gY29uc29sZS5sb2codXNlcnNXaXRoVXNlcm5hbWVbMF0pO1xuICBpZiAodXNlcnNXaXRoVXNlcm5hbWUubGVuZ3RoID09PSAwKSByZXR1cm4gdXNlcnNXaXRoVXNlcm5hbWU7XG4gIGNvbnN0IHBhc3N3b3JkTWF0Y2hlcyA9IGF3YWl0IGFyZ29uMi52ZXJpZnkoXG4gICAgdXNlcnNXaXRoVXNlcm5hbWVbMF0ucGFzc3dvcmRfaGFzaCxcbiAgICBwYXNzd29yZCxcbiAgKTsgLy90aGlzIHJldHVybnMgYm9vbGVhblxuICBpZiAocGFzc3dvcmRNYXRjaGVzKSB7XG4gICAgcmV0dXJuIHVzZXJzV2l0aFVzZXJuYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0VXNlcih1c2VybmFtZSwgcGFzc3dvcmRIYXNoKSB7XG4gIHJldHVybiBzcWxgXG4gICAgSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lLCBwYXNzd29yZF9oYXNoKSBWQUxVRVMgKCR7dXNlcm5hbWV9LCAke3Bhc3N3b3JkSGFzaH0pXG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWxlY3RTZXNzaW9uQnlUb2tlbih0b2tlbikge1xuICByZXR1cm4gc3FsYFxuICAgIFNFTEVDVCAqIEZST00gc2Vzc2lvbnMgV0hFUkUgdG9rZW4gPSAke3Rva2VufVxuICBgO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2Vzc2lvbkJ5VG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBERUxFVEUgRlJPTSBzZXNzaW9ucyBXSEVSRSB0b2tlbiA9ICR7dG9rZW59XG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRTZXNzaW9uKHVzZXJJZCwgdG9rZW4pIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBJTlNFUlQgSU5UTyBzZXNzaW9ucyAodXNlcl9pZCwgdG9rZW4pIFZBTFVFUyAoJHt1c2VySWR9LCAke3Rva2VufSlcbiAgYDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./db.js\n");

/***/ }),

/***/ "./pages/api/checkLogin.ts":
/*!*********************************!*\
  !*** ./pages/api/checkLogin.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return checkLogin; });\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../db */ \"./db.js\");\n\nasync function checkLogin(req, res) {\n  const token = req.cookies.token;\n  const session = await Object(_db__WEBPACK_IMPORTED_MODULE_0__[\"selectSessionByToken\"])(token);\n  res.json(session.length > 0);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY2hlY2tMb2dpbi50cz9hMTUzIl0sIm5hbWVzIjpbImNoZWNrTG9naW4iLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImNvb2tpZXMiLCJzZXNzaW9uIiwic2VsZWN0U2Vzc2lvbkJ5VG9rZW4iLCJqc29uIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVlLGVBQWVBLFVBQWYsQ0FDYkMsR0FEYSxFQUViQyxHQUZhLEVBR2I7QUFDQSxRQUFNQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixDQUFZRCxLQUExQjtBQUNBLFFBQU1FLE9BQU8sR0FBRyxNQUFNQyxnRUFBb0IsQ0FBQ0gsS0FBRCxDQUExQztBQUNBRCxLQUFHLENBQUNLLElBQUosQ0FBU0YsT0FBTyxDQUFDRyxNQUFSLEdBQWlCLENBQTFCO0FBQ0QiLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2hlY2tMb2dpbi50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCB7IHNlbGVjdFNlc3Npb25CeVRva2VuIH0gZnJvbSAnLi4vLi4vZGInO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBjaGVja0xvZ2luKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZSxcbikge1xuICBjb25zdCB0b2tlbiA9IHJlcS5jb29raWVzLnRva2VuO1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgc2VsZWN0U2Vzc2lvbkJ5VG9rZW4odG9rZW4pO1xuICByZXMuanNvbihzZXNzaW9uLmxlbmd0aCA+IDApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/checkLogin.ts\n");

/***/ }),

/***/ 5:
/*!***************************************!*\
  !*** multi ./pages/api/checkLogin.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/gabrielasanchez/projects/wolfis-trip/pages/api/checkLogin.ts */"./pages/api/checkLogin.ts");


/***/ }),

/***/ "argon2":
/*!*************************!*\
  !*** external "argon2" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"argon2\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcmdvbjJcIj9jNDU5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImFyZ29uMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFyZ29uMlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///argon2\n");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkb3RlbnZcIj9lNzBmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6ImRvdGVudi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRvdGVudlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///dotenv\n");

/***/ }),

/***/ "postgres":
/*!***************************!*\
  !*** external "postgres" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"postgres\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwb3N0Z3Jlc1wiP2I0ZGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicG9zdGdyZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb3N0Z3Jlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///postgres\n");

/***/ })

/******/ });