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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./db.js":
/*!***************!*\
  !*** ./db.js ***!
  \***************/
/*! exports provided: getPlaces, selectUserByUsername, insertUser, selectSessionByToken, deleteSessionByToken, insertSession, insertJourney, insertEntries, sessionsJoinENtries, personalizedPlan */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlaces\", function() { return getPlaces; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectUserByUsername\", function() { return selectUserByUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertUser\", function() { return insertUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSessionByToken\", function() { return selectSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSessionByToken\", function() { return deleteSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSession\", function() { return insertSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertJourney\", function() { return insertJourney; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertEntries\", function() { return insertEntries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sessionsJoinENtries\", function() { return sessionsJoinENtries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"personalizedPlan\", function() { return personalizedPlan; });\n__webpack_require__(/*! ./extractHerokuDatabaseEnvVars */ \"./extractHerokuDatabaseEnvVars.js\")();\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst argon2 = __webpack_require__(/*! argon2 */ \"argon2\");\n\nconst postgres = __webpack_require__(/*! postgres */ \"postgres\");\n\nconst sql = false ? // Heroku needs SSL connections but\n// has an \"unauthorized\" certificate\n// https://devcenter.heroku.com/changelog-items/852\nundefined : postgres();\nasync function getPlaces() {\n  const places = await sql`\n    select * from places\n  `;\n  return places;\n}\nasync function selectUserByUsername(username, password) {\n  const usersWithUsername = await sql`\n  SELECT * FROM users WHERE username = ${username}\n  `; //select from always returns an array, even if its one\n  // console.log(usersWithUsername[0]);\n\n  if (usersWithUsername.length === 0) return usersWithUsername;\n  const passwordMatches = await argon2.verify(usersWithUsername[0].password_hash, password); //this returns boolean\n\n  if (passwordMatches) {\n    return usersWithUsername;\n  } else {\n    return [];\n  }\n}\nasync function insertUser(username, passwordHash) {\n  return sql`\n    INSERT INTO users (username, password_hash) VALUES (${username}, ${passwordHash})\n  `;\n}\nasync function selectSessionByToken(token) {\n  return sql`\n    SELECT * FROM sessions WHERE token = ${token}\n  `;\n}\nasync function deleteSessionByToken(token) {\n  return sql`\n    DELETE FROM sessions WHERE token = ${token}\n  `;\n}\nasync function insertSession(userId, token) {\n  return sql`\n    INSERT INTO sessions (user_id, token) VALUES (${userId}, ${token})\n  `;\n}\nasync function insertJourney(startDate, endDate, token) {\n  const search = await sql`\n    SELECT user_id FROM sessions WHERE token = ${token}\n  `;\n  console.log(search);\n  const userId = search[0].user_id;\n  return sql`\n    INSERT INTO journeys (start_date, end_date, user_id) VALUES (${startDate}, ${endDate}, ${userId}) RETURNING id, start_date, end_date, user_id\n  `;\n}\n\nfunction getRandomItem(arr) {\n  return arr[Math.floor(Math.random() * arr.length)];\n}\n\nasync function insertEntries(tagIds, journeyId) {\n  console.log('fromCrazyFunction', journeyId); // selectedTags shows me places_id column based tags_id\n\n  const placesAndTags = await sql`\n    SELECT places_id, tags_id FROM places_tags WHERE tags_id IN (${tagIds})\n  `;\n  console.log('placesandTags:', placesAndTags);\n  console.log('tagIds', tagIds); // tag gives a random number from the places_id column\n\n  const selectedPlacesAndTags = [];\n  tagIds.forEach(tagId => {\n    // these are the placesIds based on the tagId\n    const placesByTag = placesAndTags.filter(placeAndTag => {\n      return placeAndTag.tags_id === Number(tagId);\n    });\n    const selectedPlaceAndTag = getRandomItem(placesByTag);\n    selectedPlacesAndTags.push(selectedPlaceAndTag);\n    console.log('selectedplaces:', selectedPlacesAndTags);\n  });\n  console.log('selectedplaces:', selectedPlacesAndTags);\n  const places = selectedPlacesAndTags.map(place_id => {\n    console.log(place_id);\n    return place_id.places_id;\n  });\n  console.log('places', places);\n  const tagArray = await sql`\n    SELECT name, address, image, description FROM places WHERE id IN (${places}) \n  `;\n  console.log('tagArray', tagArray);\n  await sql`\n    INSERT INTO journeys_places (journey_id, place_id)\n    SELECT ${journeyId}, x\n      FROM unnest(ARRAY[${places}]) x\n  `;\n  return tagArray;\n}\nasync function sessionsJoinENtries(token) {\n  const trip = await sql`\n    SELECT \n      journeys.id as journey_id\n    FROM \n      sessions,\n      users,\n      journeys\n    WHERE \n      sessions.token = ${token} AND\n      users.id = sessions.user_id AND\n      journeys.user_id = users.id;\n  `;\n  return trip;\n}\nasync function personalizedPlan(journeyId) {\n  const plan = await sql`\n    SELECT \n      places.name,  \n      places.address, \n      places.image,\n      places.description \n    FROM \n      places,\n      journeys_places \n    WHERE \n      places.id = journeys_places.place_id AND \n      journeys_places.journey_id = ${journeyId}\n  `;\n  return plan;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi5qcz8yNmY1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJhcmdvbjIiLCJwb3N0Z3JlcyIsInNxbCIsImdldFBsYWNlcyIsInBsYWNlcyIsInNlbGVjdFVzZXJCeVVzZXJuYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzV2l0aFVzZXJuYW1lIiwibGVuZ3RoIiwicGFzc3dvcmRNYXRjaGVzIiwidmVyaWZ5IiwicGFzc3dvcmRfaGFzaCIsImluc2VydFVzZXIiLCJwYXNzd29yZEhhc2giLCJzZWxlY3RTZXNzaW9uQnlUb2tlbiIsInRva2VuIiwiZGVsZXRlU2Vzc2lvbkJ5VG9rZW4iLCJpbnNlcnRTZXNzaW9uIiwidXNlcklkIiwiaW5zZXJ0Sm91cm5leSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwidXNlcl9pZCIsImdldFJhbmRvbUl0ZW0iLCJhcnIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbnNlcnRFbnRyaWVzIiwidGFnSWRzIiwiam91cm5leUlkIiwicGxhY2VzQW5kVGFncyIsInNlbGVjdGVkUGxhY2VzQW5kVGFncyIsImZvckVhY2giLCJ0YWdJZCIsInBsYWNlc0J5VGFnIiwiZmlsdGVyIiwicGxhY2VBbmRUYWciLCJ0YWdzX2lkIiwiTnVtYmVyIiwic2VsZWN0ZWRQbGFjZUFuZFRhZyIsInB1c2giLCJtYXAiLCJwbGFjZV9pZCIsInBsYWNlc19pZCIsInRhZ0FycmF5Iiwic2Vzc2lvbnNKb2luRU50cmllcyIsInRyaXAiLCJwZXJzb25hbGl6ZWRQbGFuIiwicGxhbiJdLCJtYXBwaW5ncyI6IkFBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLG1CQUFPLENBQUMseUVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxzQkFBRCxDQUFQLENBQWtCQyxNQUFsQjs7QUFFQSxN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QUFNLENBQUNMLEtBQUQsQ0FBckM7QUFDRCxLQUZtQixDQUFwQjtBQUdBLFVBQU1NLG1CQUFtQixHQUFHakIsYUFBYSxDQUFDWSxXQUFELENBQXpDO0FBQ0FILHlCQUFxQixDQUFDUyxJQUF0QixDQUEyQkQsbUJBQTNCO0FBQ0FwQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQlcscUJBQS9CO0FBQ0QsR0FSRDtBQVVBWixTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQlcscUJBQS9CO0FBQ0EsUUFBTWhDLE1BQU0sR0FBR2dDLHFCQUFxQixDQUFDVSxHQUF0QixDQUEyQkMsUUFBRCxJQUFjO0FBQ3JEdkIsV0FBTyxDQUFDQyxHQUFSLENBQVlzQixRQUFaO0FBQ0EsV0FBT0EsUUFBUSxDQUFDQyxTQUFoQjtBQUNELEdBSGMsQ0FBZjtBQUtBeEIsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQnJCLE1BQXRCO0FBQ0EsUUFBTTZDLFFBQVEsR0FBRyxNQUFNL0MsR0FBSTt3RUFDMkNFLE1BQU87R0FEN0U7QUFJQW9CLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0J3QixRQUF4QjtBQUVBLFFBQU0vQyxHQUFJOzthQUVDZ0MsU0FBVTswQkFDRzlCLE1BQU87R0FIL0I7QUFNQSxTQUFPNkMsUUFBUDtBQUNEO0FBRU0sZUFBZUMsbUJBQWYsQ0FBbUNsQyxLQUFuQyxFQUEwQztBQUMvQyxRQUFNbUMsSUFBSSxHQUFHLE1BQU1qRCxHQUFJOzs7Ozs7Ozt5QkFRQWMsS0FBTTs7O0dBUjdCO0FBYUEsU0FBT21DLElBQVA7QUFDRDtBQUVNLGVBQWVDLGdCQUFmLENBQWdDbEIsU0FBaEMsRUFBMkM7QUFDaEQsUUFBTW1CLElBQUksR0FBRyxNQUFNbkQsR0FBSTs7Ozs7Ozs7Ozs7cUNBV1lnQyxTQUFVO0dBWDdDO0FBYUEsU0FBT21CLElBQVA7QUFDRCIsImZpbGUiOiIuL2RiLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsicmVxdWlyZSgnLi9leHRyYWN0SGVyb2t1RGF0YWJhc2VFbnZWYXJzJykoKTtcbnJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5jb25zdCBhcmdvbjIgPSByZXF1aXJlKCdhcmdvbjInKTtcbmNvbnN0IHBvc3RncmVzID0gcmVxdWlyZSgncG9zdGdyZXMnKTtcblxuY29uc3Qgc3FsID1cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgID8gLy8gSGVyb2t1IG5lZWRzIFNTTCBjb25uZWN0aW9ucyBidXRcbiAgICAgIC8vIGhhcyBhbiBcInVuYXV0aG9yaXplZFwiIGNlcnRpZmljYXRlXG4gICAgICAvLyBodHRwczovL2RldmNlbnRlci5oZXJva3UuY29tL2NoYW5nZWxvZy1pdGVtcy84NTJcbiAgICAgIHBvc3RncmVzKHsgc3NsOiB7IHJlamVjdFVuYXV0aG9yaXplZDogZmFsc2UgfSB9KVxuICAgIDogcG9zdGdyZXMoKTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFBsYWNlcygpIHtcbiAgY29uc3QgcGxhY2VzID0gYXdhaXQgc3FsYFxuICAgIHNlbGVjdCAqIGZyb20gcGxhY2VzXG4gIGA7XG4gIHJldHVybiBwbGFjZXM7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWxlY3RVc2VyQnlVc2VybmFtZSh1c2VybmFtZSwgcGFzc3dvcmQpIHtcbiAgY29uc3QgdXNlcnNXaXRoVXNlcm5hbWUgPSBhd2FpdCBzcWxgXG4gIFNFTEVDVCAqIEZST00gdXNlcnMgV0hFUkUgdXNlcm5hbWUgPSAke3VzZXJuYW1lfVxuICBgOyAvL3NlbGVjdCBmcm9tIGFsd2F5cyByZXR1cm5zIGFuIGFycmF5LCBldmVuIGlmIGl0cyBvbmVcbiAgLy8gY29uc29sZS5sb2codXNlcnNXaXRoVXNlcm5hbWVbMF0pO1xuICBpZiAodXNlcnNXaXRoVXNlcm5hbWUubGVuZ3RoID09PSAwKSByZXR1cm4gdXNlcnNXaXRoVXNlcm5hbWU7XG4gIGNvbnN0IHBhc3N3b3JkTWF0Y2hlcyA9IGF3YWl0IGFyZ29uMi52ZXJpZnkoXG4gICAgdXNlcnNXaXRoVXNlcm5hbWVbMF0ucGFzc3dvcmRfaGFzaCxcbiAgICBwYXNzd29yZCxcbiAgKTsgLy90aGlzIHJldHVybnMgYm9vbGVhblxuICBpZiAocGFzc3dvcmRNYXRjaGVzKSB7XG4gICAgcmV0dXJuIHVzZXJzV2l0aFVzZXJuYW1lO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0VXNlcih1c2VybmFtZSwgcGFzc3dvcmRIYXNoKSB7XG4gIHJldHVybiBzcWxgXG4gICAgSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJuYW1lLCBwYXNzd29yZF9oYXNoKSBWQUxVRVMgKCR7dXNlcm5hbWV9LCAke3Bhc3N3b3JkSGFzaH0pXG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWxlY3RTZXNzaW9uQnlUb2tlbih0b2tlbikge1xuICByZXR1cm4gc3FsYFxuICAgIFNFTEVDVCAqIEZST00gc2Vzc2lvbnMgV0hFUkUgdG9rZW4gPSAke3Rva2VufVxuICBgO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlU2Vzc2lvbkJ5VG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBERUxFVEUgRlJPTSBzZXNzaW9ucyBXSEVSRSB0b2tlbiA9ICR7dG9rZW59XG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRTZXNzaW9uKHVzZXJJZCwgdG9rZW4pIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBJTlNFUlQgSU5UTyBzZXNzaW9ucyAodXNlcl9pZCwgdG9rZW4pIFZBTFVFUyAoJHt1c2VySWR9LCAke3Rva2VufSlcbiAgYDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydEpvdXJuZXkoc3RhcnREYXRlLCBlbmREYXRlLCB0b2tlbikge1xuICBjb25zdCBzZWFyY2ggPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIHVzZXJfaWQgRlJPTSBzZXNzaW9ucyBXSEVSRSB0b2tlbiA9ICR7dG9rZW59XG4gIGA7XG4gIGNvbnNvbGUubG9nKHNlYXJjaCk7XG5cbiAgY29uc3QgdXNlcklkID0gc2VhcmNoWzBdLnVzZXJfaWQ7XG5cbiAgcmV0dXJuIHNxbGBcbiAgICBJTlNFUlQgSU5UTyBqb3VybmV5cyAoc3RhcnRfZGF0ZSwgZW5kX2RhdGUsIHVzZXJfaWQpIFZBTFVFUyAoJHtzdGFydERhdGV9LCAke2VuZERhdGV9LCAke3VzZXJJZH0pIFJFVFVSTklORyBpZCwgc3RhcnRfZGF0ZSwgZW5kX2RhdGUsIHVzZXJfaWRcbiAgYDtcbn1cbmZ1bmN0aW9uIGdldFJhbmRvbUl0ZW0oYXJyKSB7XG4gIHJldHVybiBhcnJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyLmxlbmd0aCldO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0RW50cmllcyh0YWdJZHMsIGpvdXJuZXlJZCkge1xuICBjb25zb2xlLmxvZygnZnJvbUNyYXp5RnVuY3Rpb24nLCBqb3VybmV5SWQpO1xuICAvLyBzZWxlY3RlZFRhZ3Mgc2hvd3MgbWUgcGxhY2VzX2lkIGNvbHVtbiBiYXNlZCB0YWdzX2lkXG4gIGNvbnN0IHBsYWNlc0FuZFRhZ3MgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIHBsYWNlc19pZCwgdGFnc19pZCBGUk9NIHBsYWNlc190YWdzIFdIRVJFIHRhZ3NfaWQgSU4gKCR7dGFnSWRzfSlcbiAgYDtcbiAgY29uc29sZS5sb2coJ3BsYWNlc2FuZFRhZ3M6JywgcGxhY2VzQW5kVGFncyk7XG4gIGNvbnNvbGUubG9nKCd0YWdJZHMnLCB0YWdJZHMpO1xuXG4gIC8vIHRhZyBnaXZlcyBhIHJhbmRvbSBudW1iZXIgZnJvbSB0aGUgcGxhY2VzX2lkIGNvbHVtblxuICBjb25zdCBzZWxlY3RlZFBsYWNlc0FuZFRhZ3MgPSBbXTtcbiAgdGFnSWRzLmZvckVhY2goKHRhZ0lkKSA9PiB7XG4gICAgLy8gdGhlc2UgYXJlIHRoZSBwbGFjZXNJZHMgYmFzZWQgb24gdGhlIHRhZ0lkXG4gICAgY29uc3QgcGxhY2VzQnlUYWcgPSBwbGFjZXNBbmRUYWdzLmZpbHRlcigocGxhY2VBbmRUYWcpID0+IHtcbiAgICAgIHJldHVybiBwbGFjZUFuZFRhZy50YWdzX2lkID09PSBOdW1iZXIodGFnSWQpO1xuICAgIH0pO1xuICAgIGNvbnN0IHNlbGVjdGVkUGxhY2VBbmRUYWcgPSBnZXRSYW5kb21JdGVtKHBsYWNlc0J5VGFnKTtcbiAgICBzZWxlY3RlZFBsYWNlc0FuZFRhZ3MucHVzaChzZWxlY3RlZFBsYWNlQW5kVGFnKTtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0ZWRwbGFjZXM6Jywgc2VsZWN0ZWRQbGFjZXNBbmRUYWdzKTtcbiAgfSk7XG5cbiAgY29uc29sZS5sb2coJ3NlbGVjdGVkcGxhY2VzOicsIHNlbGVjdGVkUGxhY2VzQW5kVGFncyk7XG4gIGNvbnN0IHBsYWNlcyA9IHNlbGVjdGVkUGxhY2VzQW5kVGFncy5tYXAoKHBsYWNlX2lkKSA9PiB7XG4gICAgY29uc29sZS5sb2cocGxhY2VfaWQpO1xuICAgIHJldHVybiBwbGFjZV9pZC5wbGFjZXNfaWQ7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdwbGFjZXMnLCBwbGFjZXMpO1xuICBjb25zdCB0YWdBcnJheSA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgbmFtZSwgYWRkcmVzcywgaW1hZ2UsIGRlc2NyaXB0aW9uIEZST00gcGxhY2VzIFdIRVJFIGlkIElOICgke3BsYWNlc30pIFxuICBgO1xuXG4gIGNvbnNvbGUubG9nKCd0YWdBcnJheScsIHRhZ0FycmF5KTtcblxuICBhd2FpdCBzcWxgXG4gICAgSU5TRVJUIElOVE8gam91cm5leXNfcGxhY2VzIChqb3VybmV5X2lkLCBwbGFjZV9pZClcbiAgICBTRUxFQ1QgJHtqb3VybmV5SWR9LCB4XG4gICAgICBGUk9NIHVubmVzdChBUlJBWVske3BsYWNlc31dKSB4XG4gIGA7XG5cbiAgcmV0dXJuIHRhZ0FycmF5O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2Vzc2lvbnNKb2luRU50cmllcyh0b2tlbikge1xuICBjb25zdCB0cmlwID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBcbiAgICAgIGpvdXJuZXlzLmlkIGFzIGpvdXJuZXlfaWRcbiAgICBGUk9NIFxuICAgICAgc2Vzc2lvbnMsXG4gICAgICB1c2VycyxcbiAgICAgIGpvdXJuZXlzXG4gICAgV0hFUkUgXG4gICAgICBzZXNzaW9ucy50b2tlbiA9ICR7dG9rZW59IEFORFxuICAgICAgdXNlcnMuaWQgPSBzZXNzaW9ucy51c2VyX2lkIEFORFxuICAgICAgam91cm5leXMudXNlcl9pZCA9IHVzZXJzLmlkO1xuICBgO1xuXG4gIHJldHVybiB0cmlwO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcGVyc29uYWxpemVkUGxhbihqb3VybmV5SWQpIHtcbiAgY29uc3QgcGxhbiA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgXG4gICAgICBwbGFjZXMubmFtZSwgIFxuICAgICAgcGxhY2VzLmFkZHJlc3MsIFxuICAgICAgcGxhY2VzLmltYWdlLFxuICAgICAgcGxhY2VzLmRlc2NyaXB0aW9uIFxuICAgIEZST00gXG4gICAgICBwbGFjZXMsXG4gICAgICBqb3VybmV5c19wbGFjZXMgXG4gICAgV0hFUkUgXG4gICAgICBwbGFjZXMuaWQgPSBqb3VybmV5c19wbGFjZXMucGxhY2VfaWQgQU5EIFxuICAgICAgam91cm5leXNfcGxhY2VzLmpvdXJuZXlfaWQgPSAke2pvdXJuZXlJZH1cbiAgYDtcbiAgcmV0dXJuIHBsYW47XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./db.js\n");

/***/ }),

/***/ "./extractHerokuDatabaseEnvVars.js":
/*!*****************************************!*\
  !*** ./extractHerokuDatabaseEnvVars.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function extractHerokuDatabaseEnvVars() {\n  if (process.env.DATABASE_URL) {\n    const url = __webpack_require__(/*! url */ \"url\");\n\n    const {\n      hostname,\n      pathname,\n      auth\n    } = url.parse(process.env.DATABASE_URL);\n    const [username, password] = auth.split(':');\n    process.env.PGHOST = hostname;\n    process.env.PGDATABASE = pathname.slice(1);\n    process.env.PGUSERNAME = username;\n    process.env.PGPASSWORD = password;\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leHRyYWN0SGVyb2t1RGF0YWJhc2VFbnZWYXJzLmpzPzhhNDQiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsImV4dHJhY3RIZXJva3VEYXRhYmFzZUVudlZhcnMiLCJwcm9jZXNzIiwiZW52IiwiREFUQUJBU0VfVVJMIiwidXJsIiwicmVxdWlyZSIsImhvc3RuYW1lIiwicGF0aG5hbWUiLCJhdXRoIiwicGFyc2UiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwic3BsaXQiLCJQR0hPU1QiLCJQR0RBVEFCQVNFIiwic2xpY2UiLCJQR1VTRVJOQU1FIiwiUEdQQVNTV09SRCJdLCJtYXBwaW5ncyI6IkFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixTQUFTQyw0QkFBVCxHQUF3QztBQUN2RCxNQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsWUFBaEIsRUFBOEI7QUFDNUIsVUFBTUMsR0FBRyxHQUFHQyxtQkFBTyxDQUFDLGdCQUFELENBQW5COztBQUVBLFVBQU07QUFBRUMsY0FBRjtBQUFZQyxjQUFaO0FBQXNCQztBQUF0QixRQUErQkosR0FBRyxDQUFDSyxLQUFKLENBQVVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxZQUF0QixDQUFyQztBQUVBLFVBQU0sQ0FBQ08sUUFBRCxFQUFXQyxRQUFYLElBQXVCSCxJQUFJLENBQUNJLEtBQUwsQ0FBVyxHQUFYLENBQTdCO0FBRUFYLFdBQU8sQ0FBQ0MsR0FBUixDQUFZVyxNQUFaLEdBQXFCUCxRQUFyQjtBQUNBTCxXQUFPLENBQUNDLEdBQVIsQ0FBWVksVUFBWixHQUF5QlAsUUFBUSxDQUFDUSxLQUFULENBQWUsQ0FBZixDQUF6QjtBQUNBZCxXQUFPLENBQUNDLEdBQVIsQ0FBWWMsVUFBWixHQUF5Qk4sUUFBekI7QUFDQVQsV0FBTyxDQUFDQyxHQUFSLENBQVllLFVBQVosR0FBeUJOLFFBQXpCO0FBQ0Q7QUFDRixDQWJEIiwiZmlsZSI6Ii4vZXh0cmFjdEhlcm9rdURhdGFiYXNlRW52VmFycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXh0cmFjdEhlcm9rdURhdGFiYXNlRW52VmFycygpIHtcbiAgaWYgKHByb2Nlc3MuZW52LkRBVEFCQVNFX1VSTCkge1xuICAgIGNvbnN0IHVybCA9IHJlcXVpcmUoJ3VybCcpO1xuXG4gICAgY29uc3QgeyBob3N0bmFtZSwgcGF0aG5hbWUsIGF1dGggfSA9IHVybC5wYXJzZShwcm9jZXNzLmVudi5EQVRBQkFTRV9VUkwpO1xuXG4gICAgY29uc3QgW3VzZXJuYW1lLCBwYXNzd29yZF0gPSBhdXRoLnNwbGl0KCc6Jyk7XG5cbiAgICBwcm9jZXNzLmVudi5QR0hPU1QgPSBob3N0bmFtZTtcbiAgICBwcm9jZXNzLmVudi5QR0RBVEFCQVNFID0gcGF0aG5hbWUuc2xpY2UoMSk7XG4gICAgcHJvY2Vzcy5lbnYuUEdVU0VSTkFNRSA9IHVzZXJuYW1lO1xuICAgIHByb2Nlc3MuZW52LlBHUEFTU1dPUkQgPSBwYXNzd29yZDtcbiAgfVxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./extractHerokuDatabaseEnvVars.js\n");

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

/***/ 7:
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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1cmxcIj82MWU4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InVybC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///url\n");

/***/ })

/******/ });