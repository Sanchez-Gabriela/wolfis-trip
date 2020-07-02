exports.ids = [0];
exports.modules = {

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: getPlaces, selectUserByUsername, insertUser, selectSessionByToken, deleteSessionByToken, insertSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlaces\", function() { return getPlaces; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectUserByUsername\", function() { return selectUserByUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertUser\", function() { return insertUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSessionByToken\", function() { return selectSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSessionByToken\", function() { return deleteSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSession\", function() { return insertSession; });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst argon2 = __webpack_require__(/*! argon2 */ \"argon2\");\n\nconst postgres = __webpack_require__(/*! postgres */ \"postgres\");\n\nconst sql = postgres(); // const sights = [\n//   {\n//     name: 'Rathaus',\n//     address: '1., Rathausplatz 1',\n//     image: '/rathaus.jpg',\n//     description:\n//       'Nearly all-the-year you can find here some special events like the film festival, circus, Christkindlmarkt (Christmas market), Wiener Eistraum (ice-skating rink) and some other seasonal events.',\n//     parent_id: 'architecture',\n//   },\n//   {\n//     name: 'Parlament',\n//     address: '1., Dr. Karl-Renner-Ring 2',\n//     image: '/parlament.jpg',\n//     description:\n//       'with the Pallas Athene statue at the front is one of the most important splendor building at the Wiener Ringstraße. Built from 1874 to 1883 according the plans of architect Theophil Hansen in the Greek-Roman style the historical rooms are used as residence for the Austrian National and Federal council.',\n//     parent_id: 'architecture',\n//   },\n//   {\n//     name: 'Hofburg/Heldenplatz',\n//     address: '1., Hofburg',\n//     image: '/heldenplatz.jpg',\n//     description:\n//       'The Hofburg Vienna is an impressive building at the Heldenplatz with long history. It is located at Viennas splendor boulevard, the Ringstrasse, and is reachable from there through the Burgtor gate.',\n//     parent_id: 'architecture',\n//   },\n// ];\n\nasync function getPlaces() {\n  const places = await sql`\n    select * from places\n  `;\n  return places;\n}\nasync function selectUserByUsername(username, password) {\n  const usersWithUsername = await sql`\n  SELECT * FROM users WHERE username = ${username}\n  `; //select from always returns an array, even if its one\n  // console.log(usersWithUsername[0]);\n\n  if (usersWithUsername.length === 0) return usersWithUsername;\n  const passwordMatches = await argon2.verify(usersWithUsername[0].password_hash, password); //this returns boolean\n\n  if (passwordMatches) {\n    return usersWithUsername;\n  } else {\n    return [];\n  }\n}\nasync function insertUser(username, passwordHash) {\n  return sql`\n    INSERT INTO users (username, password_hash) VALUES (${username}, ${passwordHash})\n  `;\n}\nasync function selectSessionByToken(token) {\n  return sql`\n    SELECT * FROM sessions WHERE token = ${token}\n  `;\n}\nasync function deleteSessionByToken(token) {\n  return sql`\n    DELETE FROM sessions WHERE token = ${token}\n  `;\n}\nasync function insertSession(userId, token) {\n  return sql`\n    INSERT INTO sessions (user_id, token) VALUES (${userId}, ${token})\n  `;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi5qcz8yNmY1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJhcmdvbjIiLCJwb3N0Z3JlcyIsInNxbCIsImdldFBsYWNlcyIsInBsYWNlcyIsInNlbGVjdFVzZXJCeVVzZXJuYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzV2l0aFVzZXJuYW1lIiwibGVuZ3RoIiwicGFzc3dvcmRNYXRjaGVzIiwidmVyaWZ5IiwicGFzc3dvcmRfaGFzaCIsImluc2VydFVzZXIiLCJwYXNzd29yZEhhc2giLCJzZWxlY3RTZXNzaW9uQnlUb2tlbiIsInRva2VuIiwiZGVsZXRlU2Vzc2lvbkJ5VG9rZW4iLCJpbnNlcnRTZXNzaW9uIiwidXNlcklkIl0sIm1hcHBpbmdzIjoiQUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsbUJBQU8sQ0FBQyxzQkFBRCxDQUFQLENBQWtCQyxNQUFsQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUdGLG1CQUFPLENBQUMsc0JBQUQsQ0FBdEI7O0FBQ0EsTUFBTUcsUUFBUSxHQUFHSCxtQkFBTyxDQUFDLDBCQUFELENBQXhCOztBQUNBLE1BQU1JLEdBQUcsR0FBR0QsUUFBUSxFQUFwQixDLENBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxlQUFlRSxTQUFmLEdBQTJCO0FBQ2hDLFFBQU1DLE1BQU0sR0FBRyxNQUFNRixHQUFJOztHQUF6QjtBQUdBLFNBQU9FLE1BQVA7QUFDRDtBQUVNLGVBQWVDLG9CQUFmLENBQW9DQyxRQUFwQyxFQUE4Q0MsUUFBOUMsRUFBd0Q7QUFDN0QsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTU4sR0FBSTt5Q0FDR0ksUUFBUztHQURoRCxDQUQ2RCxDQUcxRDtBQUNIOztBQUNBLE1BQUlFLGlCQUFpQixDQUFDQyxNQUFsQixLQUE2QixDQUFqQyxFQUFvQyxPQUFPRCxpQkFBUDtBQUNwQyxRQUFNRSxlQUFlLEdBQUcsTUFBTVYsTUFBTSxDQUFDVyxNQUFQLENBQzVCSCxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLENBQXFCSSxhQURPLEVBRTVCTCxRQUY0QixDQUE5QixDQU42RCxDQVMxRDs7QUFDSCxNQUFJRyxlQUFKLEVBQXFCO0FBQ25CLFdBQU9GLGlCQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxFQUFQO0FBQ0Q7QUFDRjtBQUVNLGVBQWVLLFVBQWYsQ0FBMEJQLFFBQTFCLEVBQW9DUSxZQUFwQyxFQUFrRDtBQUN2RCxTQUFPWixHQUFJOzBEQUM2Q0ksUUFBUyxLQUFJUSxZQUFhO0dBRGxGO0FBR0Q7QUFFTSxlQUFlQyxvQkFBZixDQUFvQ0MsS0FBcEMsRUFBMkM7QUFDaEQsU0FBT2QsR0FBSTsyQ0FDOEJjLEtBQU07R0FEL0M7QUFHRDtBQUVNLGVBQWVDLG9CQUFmLENBQW9DRCxLQUFwQyxFQUEyQztBQUNoRCxTQUFPZCxHQUFJO3lDQUM0QmMsS0FBTTtHQUQ3QztBQUdEO0FBRU0sZUFBZUUsYUFBZixDQUE2QkMsTUFBN0IsRUFBcUNILEtBQXJDLEVBQTRDO0FBQ2pELFNBQU9kLEdBQUk7b0RBQ3VDaUIsTUFBTyxLQUFJSCxLQUFNO0dBRG5FO0FBR0QiLCJmaWxlIjoiLi9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5jb25zdCBhcmdvbjIgPSByZXF1aXJlKCdhcmdvbjInKTtcbmNvbnN0IHBvc3RncmVzID0gcmVxdWlyZSgncG9zdGdyZXMnKTtcbmNvbnN0IHNxbCA9IHBvc3RncmVzKCk7XG5cbi8vIGNvbnN0IHNpZ2h0cyA9IFtcbi8vICAge1xuLy8gICAgIG5hbWU6ICdSYXRoYXVzJyxcbi8vICAgICBhZGRyZXNzOiAnMS4sIFJhdGhhdXNwbGF0eiAxJyxcbi8vICAgICBpbWFnZTogJy9yYXRoYXVzLmpwZycsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICAnTmVhcmx5IGFsbC10aGUteWVhciB5b3UgY2FuIGZpbmQgaGVyZSBzb21lIHNwZWNpYWwgZXZlbnRzIGxpa2UgdGhlIGZpbG0gZmVzdGl2YWwsIGNpcmN1cywgQ2hyaXN0a2luZGxtYXJrdCAoQ2hyaXN0bWFzIG1hcmtldCksIFdpZW5lciBFaXN0cmF1bSAoaWNlLXNrYXRpbmcgcmluaykgYW5kIHNvbWUgb3RoZXIgc2Vhc29uYWwgZXZlbnRzLicsXG4vLyAgICAgcGFyZW50X2lkOiAnYXJjaGl0ZWN0dXJlJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG5hbWU6ICdQYXJsYW1lbnQnLFxuLy8gICAgIGFkZHJlc3M6ICcxLiwgRHIuIEthcmwtUmVubmVyLVJpbmcgMicsXG4vLyAgICAgaW1hZ2U6ICcvcGFybGFtZW50LmpwZycsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICAnd2l0aCB0aGUgUGFsbGFzIEF0aGVuZSBzdGF0dWUgYXQgdGhlIGZyb250IGlzIG9uZSBvZiB0aGUgbW9zdCBpbXBvcnRhbnQgc3BsZW5kb3IgYnVpbGRpbmcgYXQgdGhlIFdpZW5lciBSaW5nc3RyYcOfZS4gQnVpbHQgZnJvbSAxODc0IHRvIDE4ODMgYWNjb3JkaW5nIHRoZSBwbGFucyBvZiBhcmNoaXRlY3QgVGhlb3BoaWwgSGFuc2VuIGluIHRoZSBHcmVlay1Sb21hbiBzdHlsZSB0aGUgaGlzdG9yaWNhbCByb29tcyBhcmUgdXNlZCBhcyByZXNpZGVuY2UgZm9yIHRoZSBBdXN0cmlhbiBOYXRpb25hbCBhbmQgRmVkZXJhbCBjb3VuY2lsLicsXG4vLyAgICAgcGFyZW50X2lkOiAnYXJjaGl0ZWN0dXJlJyxcbi8vICAgfSxcbi8vICAge1xuLy8gICAgIG5hbWU6ICdIb2ZidXJnL0hlbGRlbnBsYXR6Jyxcbi8vICAgICBhZGRyZXNzOiAnMS4sIEhvZmJ1cmcnLFxuLy8gICAgIGltYWdlOiAnL2hlbGRlbnBsYXR6LmpwZycsXG4vLyAgICAgZGVzY3JpcHRpb246XG4vLyAgICAgICAnVGhlIEhvZmJ1cmcgVmllbm5hIGlzIGFuIGltcHJlc3NpdmUgYnVpbGRpbmcgYXQgdGhlIEhlbGRlbnBsYXR6IHdpdGggbG9uZyBoaXN0b3J5LiBJdCBpcyBsb2NhdGVkIGF0IFZpZW5uYXMgc3BsZW5kb3IgYm91bGV2YXJkLCB0aGUgUmluZ3N0cmFzc2UsIGFuZCBpcyByZWFjaGFibGUgZnJvbSB0aGVyZSB0aHJvdWdoIHRoZSBCdXJndG9yIGdhdGUuJyxcbi8vICAgICBwYXJlbnRfaWQ6ICdhcmNoaXRlY3R1cmUnLFxuLy8gICB9LFxuLy8gXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYWNlcygpIHtcbiAgY29uc3QgcGxhY2VzID0gYXdhaXQgc3FsYFxuICAgIHNlbGVjdCAqIGZyb20gcGxhY2VzXG4gIGA7XG4gIHJldHVybiBwbGFjZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWxlY3RVc2VyQnlVc2VybmFtZSh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgY29uc3QgdXNlcnNXaXRoVXNlcm5hbWUgPSBhd2FpdCBzcWxgXG4gIFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcm5hbWUgPSAke3VzZXJuYW1lfVxuICBgOyAvL3NlbGVjdCBmcm9tIGFsd2F5cyByZXR1cm5zIGFuIGFycmF5LCBldmVuIGlmIGl0cyBvbmVcbiAgLy8gY29uc29sZS5sb2codXNlcnNXaXRoVXNlcm5hbWVbMF0pO1xuICBpZiAodXNlcnNXaXRoVXNlcm5hbWUubGVuZ3RoID09PSAwKSByZXR1cm4gdXNlcnNXaXRoVXNlcm5hbWU7XG4gIGNvbnN0IHBhc3N3b3JkTWF0Y2hlcyA9IGF3YWl0IGFyZ29uMi52ZXJpZnkoXG4gICAgdXNlcnNXaXRoVXNlcm5hbWVbMF0ucGFzc3dvcmRfaGFzaCxcbiAgICBwYXNzd29yZCxcbiAgKTsgLy90aGlzIHJldHVybnMgYm9vbGVhblxuICBpZiAocGFzc3dvcmRNYXRjaGVzKSB7XG4gICAgcmV0dXJuIHVzZXJzV2l0aFVzZXJuYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0VXNlcih1c2VybmFtZSwgcGFzc3dvcmRIYXNoKSB7XG4gIHJldHVybiBzcWxgXG4gICAgSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lLCBwYXNzd29yZF9oYXNoKSBWQUxVRVMgKCR7dXNlcm5hbWV9LCAke3Bhc3N3b3JkSGFzaH0pXG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWxlY3RTZXNzaW9uQnlUb2tlbih0b2tlbikge1xuICByZXR1cm4gc3FsYFxuICAgIFNFTEVDVCAqIEZST00gc2Vzc2lvbnMgV0hFUkUgdG9rZW4gPSAke3Rva2VufVxuICBgO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2Vzc2lvbkJ5VG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBERUxFVEUgRlJPTSBzZXNzaW9ucyBXSEVSRSB0b2tlbiA9ICR7dG9rZW59XG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRTZXNzaW9uKHVzZXJJZCwgdG9rZW4pIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBJTlNFUlQgSU5UTyBzZXNzaW9ucyAodXNlcl9pZCwgdG9rZW4pIFZBTFVFUyAoJHt1c2VySWR9LCAke3Rva2VufSlcbiAgYDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./db.js\n");

/***/ })

};;