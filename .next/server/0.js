exports.ids = [0];
exports.modules = {

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: getSights, selectUserByUsername, insertUser, selectSessionByToken, deleteSessionByToken, insertSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getSights\", function() { return getSights; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectUserByUsername\", function() { return selectUserByUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertUser\", function() { return insertUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSessionByToken\", function() { return selectSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSessionByToken\", function() { return deleteSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSession\", function() { return insertSession; });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst argon2 = __webpack_require__(/*! argon2 */ \"argon2\");\n\nconst postgres = __webpack_require__(/*! postgres */ \"postgres\");\n\nconst sql = postgres(); // const sights = [\n//   {\n//     name: 'Rathaus',\n//     address: '1., Rathausplatz 1',\n//     image: '/rathaus.jpg',\n//     description:\n//       'Nearly all-the-year you can find here some special events like the film festival, circus, Christkindlmarkt (Christmas market), Wiener Eistraum (ice-skating rink) and some other seasonal events.',\n//     parent_id: 'architecture',\n//   },\n//   {\n//     name: 'Parlament',\n//     address: '1., Dr. Karl-Renner-Ring 2',\n//     image: '/parlament.jpg',\n//     description:\n//       'with the Pallas Athene statue at the front is one of the most important splendor building at the Wiener Ringstraße. Built from 1874 to 1883 according the plans of architect Theophil Hansen in the Greek-Roman style the historical rooms are used as residence for the Austrian National and Federal council.',\n//     parent_id: 'architecture',\n//   },\n//   {\n//     name: 'Hofburg/Heldenplatz',\n//     address: '1., Hofburg',\n//     image: '/heldenplatz.jpg',\n//     description:\n//       'The Hofburg Vienna is an impressive building at the Heldenplatz with long history. It is located at Viennas splendor boulevard, the Ringstrasse, and is reachable from there through the Burgtor gate.',\n//     parent_id: 'architecture',\n//   },\n// ];\n\nasync function getSights() {\n  const sights = await sql`\n    select * from sights\n  `;\n  return sights;\n}\nasync function selectUserByUsername(username) {\n  return sql`\n    SELECT * FROM users WHERE username = ${username}\n  `;\n}\nasync function insertUser(username, passwordHash) {\n  return sql`\n    INSERT INTO users (username, password_hash) VALUES (${username}, ${passwordHash})\n  `;\n}\nasync function selectSessionByToken(token) {\n  return sql`\n    SELECT * FROM sessions WHERE token = ${token}\n  `;\n}\nasync function deleteSessionByToken(token) {\n  return sql`\n    DELETE FROM sessions WHERE token = ${token}\n  `;\n}\nasync function insertSession(userId, token) {\n  return sql`\n    INSERT sessions (user_id, token) VALUES (${userId}, ${token})\n  `;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi5qcz8yNmY1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJhcmdvbjIiLCJwb3N0Z3JlcyIsInNxbCIsImdldFNpZ2h0cyIsInNpZ2h0cyIsInNlbGVjdFVzZXJCeVVzZXJuYW1lIiwidXNlcm5hbWUiLCJpbnNlcnRVc2VyIiwicGFzc3dvcmRIYXNoIiwic2VsZWN0U2Vzc2lvbkJ5VG9rZW4iLCJ0b2tlbiIsImRlbGV0ZVNlc3Npb25CeVRva2VuIiwiaW5zZXJ0U2Vzc2lvbiIsInVzZXJJZCJdLCJtYXBwaW5ncyI6IkFBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsTUFBbEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHRixtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1HLFFBQVEsR0FBR0gsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFDQSxNQUFNSSxHQUFHLEdBQUdELFFBQVEsRUFBcEIsQyxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU8sZUFBZUUsU0FBZixHQUEyQjtBQUNoQyxRQUFNQyxNQUFNLEdBQUcsTUFBTUYsR0FBSTs7R0FBekI7QUFHQSxTQUFPRSxNQUFQO0FBQ0Q7QUFFTSxlQUFlQyxvQkFBZixDQUFvQ0MsUUFBcEMsRUFBOEM7QUFDbkQsU0FBT0osR0FBSTsyQ0FDOEJJLFFBQVM7R0FEbEQ7QUFHRDtBQUVNLGVBQWVDLFVBQWYsQ0FBMEJELFFBQTFCLEVBQW9DRSxZQUFwQyxFQUFrRDtBQUN2RCxTQUFPTixHQUFJOzBEQUM2Q0ksUUFBUyxLQUFJRSxZQUFhO0dBRGxGO0FBR0Q7QUFFTSxlQUFlQyxvQkFBZixDQUFvQ0MsS0FBcEMsRUFBMkM7QUFDaEQsU0FBT1IsR0FBSTsyQ0FDOEJRLEtBQU07R0FEL0M7QUFHRDtBQUVNLGVBQWVDLG9CQUFmLENBQW9DRCxLQUFwQyxFQUEyQztBQUNoRCxTQUFPUixHQUFJO3lDQUM0QlEsS0FBTTtHQUQ3QztBQUdEO0FBRU0sZUFBZUUsYUFBZixDQUE2QkMsTUFBN0IsRUFBcUNILEtBQXJDLEVBQTRDO0FBQ2pELFNBQU9SLEdBQUk7K0NBQ2tDVyxNQUFPLEtBQUlILEtBQU07R0FEOUQ7QUFHRCIsImZpbGUiOiIuL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnZG90ZW52JykuY29uZmlnKCk7XG5cbmNvbnN0IGFyZ29uMiA9IHJlcXVpcmUoJ2FyZ29uMicpO1xuY29uc3QgcG9zdGdyZXMgPSByZXF1aXJlKCdwb3N0Z3JlcycpO1xuY29uc3Qgc3FsID0gcG9zdGdyZXMoKTtcblxuLy8gY29uc3Qgc2lnaHRzID0gW1xuLy8gICB7XG4vLyAgICAgbmFtZTogJ1JhdGhhdXMnLFxuLy8gICAgIGFkZHJlc3M6ICcxLiwgUmF0aGF1c3BsYXR6IDEnLFxuLy8gICAgIGltYWdlOiAnL3JhdGhhdXMuanBnJyxcbi8vICAgICBkZXNjcmlwdGlvbjpcbi8vICAgICAgICdOZWFybHkgYWxsLXRoZS15ZWFyIHlvdSBjYW4gZmluZCBoZXJlIHNvbWUgc3BlY2lhbCBldmVudHMgbGlrZSB0aGUgZmlsbSBmZXN0aXZhbCwgY2lyY3VzLCBDaHJpc3RraW5kbG1hcmt0IChDaHJpc3RtYXMgbWFya2V0KSwgV2llbmVyIEVpc3RyYXVtIChpY2Utc2thdGluZyByaW5rKSBhbmQgc29tZSBvdGhlciBzZWFzb25hbCBldmVudHMuJyxcbi8vICAgICBwYXJlbnRfaWQ6ICdhcmNoaXRlY3R1cmUnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ1BhcmxhbWVudCcsXG4vLyAgICAgYWRkcmVzczogJzEuLCBEci4gS2FybC1SZW5uZXItUmluZyAyJyxcbi8vICAgICBpbWFnZTogJy9wYXJsYW1lbnQuanBnJyxcbi8vICAgICBkZXNjcmlwdGlvbjpcbi8vICAgICAgICd3aXRoIHRoZSBQYWxsYXMgQXRoZW5lIHN0YXR1ZSBhdCB0aGUgZnJvbnQgaXMgb25lIG9mIHRoZSBtb3N0IGltcG9ydGFudCBzcGxlbmRvciBidWlsZGluZyBhdCB0aGUgV2llbmVyIFJpbmdzdHJhw59lLiBCdWlsdCBmcm9tIDE4NzQgdG8gMTg4MyBhY2NvcmRpbmcgdGhlIHBsYW5zIG9mIGFyY2hpdGVjdCBUaGVvcGhpbCBIYW5zZW4gaW4gdGhlIEdyZWVrLVJvbWFuIHN0eWxlIHRoZSBoaXN0b3JpY2FsIHJvb21zIGFyZSB1c2VkIGFzIHJlc2lkZW5jZSBmb3IgdGhlIEF1c3RyaWFuIE5hdGlvbmFsIGFuZCBGZWRlcmFsIGNvdW5jaWwuJyxcbi8vICAgICBwYXJlbnRfaWQ6ICdhcmNoaXRlY3R1cmUnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgbmFtZTogJ0hvZmJ1cmcvSGVsZGVucGxhdHonLFxuLy8gICAgIGFkZHJlc3M6ICcxLiwgSG9mYnVyZycsXG4vLyAgICAgaW1hZ2U6ICcvaGVsZGVucGxhdHouanBnJyxcbi8vICAgICBkZXNjcmlwdGlvbjpcbi8vICAgICAgICdUaGUgSG9mYnVyZyBWaWVubmEgaXMgYW4gaW1wcmVzc2l2ZSBidWlsZGluZyBhdCB0aGUgSGVsZGVucGxhdHogd2l0aCBsb25nIGhpc3RvcnkuIEl0IGlzIGxvY2F0ZWQgYXQgVmllbm5hcyBzcGxlbmRvciBib3VsZXZhcmQsIHRoZSBSaW5nc3RyYXNzZSwgYW5kIGlzIHJlYWNoYWJsZSBmcm9tIHRoZXJlIHRocm91Z2ggdGhlIEJ1cmd0b3IgZ2F0ZS4nLFxuLy8gICAgIHBhcmVudF9pZDogJ2FyY2hpdGVjdHVyZScsXG4vLyAgIH0sXG4vLyBdO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2lnaHRzKCkge1xuICBjb25zdCBzaWdodHMgPSBhd2FpdCBzcWxgXG4gICAgc2VsZWN0ICogZnJvbSBzaWdodHNcbiAgYDtcbiAgcmV0dXJuIHNpZ2h0cztcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbGVjdFVzZXJCeVVzZXJuYW1lKHVzZXJuYW1lKSB7XG4gIHJldHVybiBzcWxgXG4gICAgU0VMRUNUICogRlJPTSB1c2VycyBXSEVSRSB1c2VybmFtZSA9ICR7dXNlcm5hbWV9XG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRVc2VyKHVzZXJuYW1lLCBwYXNzd29yZEhhc2gpIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBJTlNFUlQgSU5UTyB1c2VycyAodXNlcm5hbWUsIHBhc3N3b3JkX2hhc2gpIFZBTFVFUyAoJHt1c2VybmFtZX0sICR7cGFzc3dvcmRIYXNofSlcbiAgYDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbGVjdFNlc3Npb25CeVRva2VuKHRva2VuKSB7XG4gIHJldHVybiBzcWxgXG4gICAgU0VMRUNUICogRlJPTSBzZXNzaW9ucyBXSEVSRSB0b2tlbiA9ICR7dG9rZW59XG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uQnlUb2tlbih0b2tlbikge1xuICByZXR1cm4gc3FsYFxuICAgIERFTEVURSBGUk9NIHNlc3Npb25zIFdIRVJFIHRva2VuID0gJHt0b2tlbn1cbiAgYDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydFNlc3Npb24odXNlcklkLCB0b2tlbikge1xuICByZXR1cm4gc3FsYFxuICAgIElOU0VSVCBzZXNzaW9ucyAodXNlcl9pZCwgdG9rZW4pIFZBTFVFUyAoJHt1c2VySWR9LCAke3Rva2VufSlcbiAgYDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./db.js\n");

/***/ })

};;