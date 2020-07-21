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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPlaces\", function() { return getPlaces; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectUserByUsername\", function() { return selectUserByUsername; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertUser\", function() { return insertUser; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectSessionByToken\", function() { return selectSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteSessionByToken\", function() { return deleteSessionByToken; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertSession\", function() { return insertSession; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertJourney\", function() { return insertJourney; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"insertEntries\", function() { return insertEntries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sessionsJoinENtries\", function() { return sessionsJoinENtries; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"personalizedPlan\", function() { return personalizedPlan; });\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst argon2 = __webpack_require__(/*! argon2 */ \"argon2\");\n\nconst postgres = __webpack_require__(/*! postgres */ \"postgres\");\n\nconst sql = postgres();\nasync function getPlaces() {\n  const places = await sql`\n    select * from places\n  `;\n  return places;\n}\nasync function selectUserByUsername(username, password) {\n  const usersWithUsername = await sql`\n  SELECT * FROM users WHERE username = ${username}\n  `; //select from always returns an array, even if its one\n  // console.log(usersWithUsername[0]);\n\n  if (usersWithUsername.length === 0) return usersWithUsername;\n  const passwordMatches = await argon2.verify(usersWithUsername[0].password_hash, password); //this returns boolean\n\n  if (passwordMatches) {\n    return usersWithUsername;\n  } else {\n    return [];\n  }\n}\nasync function insertUser(username, passwordHash) {\n  return sql`\n    INSERT INTO users (username, password_hash) VALUES (${username}, ${passwordHash})\n  `;\n}\nasync function selectSessionByToken(token) {\n  return sql`\n    SELECT * FROM sessions WHERE token = ${token}\n  `;\n}\nasync function deleteSessionByToken(token) {\n  return sql`\n    DELETE FROM sessions WHERE token = ${token}\n  `;\n}\nasync function insertSession(userId, token) {\n  return sql`\n    INSERT INTO sessions (user_id, token) VALUES (${userId}, ${token})\n  `;\n}\nasync function insertJourney(startDate, endDate, token) {\n  const search = await sql`\n    SELECT user_id FROM sessions WHERE token = ${token}\n  `;\n  console.log(search);\n  const userId = search[0].user_id;\n  return sql`\n    INSERT INTO journeys (start_date, end_date, user_id) VALUES (${startDate}, ${endDate}, ${userId}) RETURNING id, start_date, end_date, user_id\n  `;\n}\n\nfunction getRandomItem(arr) {\n  return arr[Math.floor(Math.random() * arr.length)];\n}\n\nasync function insertEntries(tagIds, journeyId) {\n  console.log('fromCrazyFunction', journeyId); // selectedTags shows me places_id column based tags_id\n\n  const placesAndTags = await sql`\n    SELECT places_id, tags_id FROM places_tags WHERE tags_id IN (${tagIds})\n  `;\n  console.log('placesandTags:', placesAndTags);\n  console.log('tagIds', tagIds); // tag gives a random number from the places_id column\n\n  const selectedPlacesAndTags = [];\n  tagIds.forEach(tagId => {\n    // these are the placesIds based on the tagId\n    const placesByTag = placesAndTags.filter(placeAndTag => {\n      return placeAndTag.tags_id === Number(tagId);\n    });\n    const selectedPlaceAndTag = getRandomItem(placesByTag);\n    selectedPlacesAndTags.push(selectedPlaceAndTag);\n    console.log('selectedplaces:', selectedPlacesAndTags);\n  });\n  console.log('selectedplaces:', selectedPlacesAndTags);\n  const places = selectedPlacesAndTags.map(place_id => {\n    console.log(place_id);\n    return place_id.places_id;\n  });\n  console.log('places', places);\n  const tagArray = await sql`\n    SELECT name, address, image, description FROM places WHERE id IN (${places}) \n  `;\n  console.log('tagArray', tagArray);\n  await sql`\n    INSERT INTO journeys_places (journey_id, place_id)\n    SELECT ${journeyId}, x\n      FROM unnest(ARRAY[${places}]) x\n  `;\n  return tagArray;\n}\nasync function sessionsJoinENtries(token) {\n  const trip = await sql`\n    SELECT \n      journeys.id as journey_id\n    FROM \n      sessions,\n      users,\n      journeys\n    WHERE \n      sessions.token = ${token} AND\n      users.id = sessions.user_id AND\n      journeys.user_id = users.id;\n  `;\n  return trip;\n}\nasync function personalizedPlan(journeyId) {\n  const plan = await sql`\n    SELECT \n      places.name,  \n      places.address, \n      places.image,\n      places.description \n    FROM \n      places,\n      journeys_places \n    WHERE \n      places.id = journeys_places.place_id AND \n      journeys_places.journey_id = ${journeyId}\n  `;\n  return plan;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9kYi5qcz8yNmY1Il0sIm5hbWVzIjpbInJlcXVpcmUiLCJjb25maWciLCJhcmdvbjIiLCJwb3N0Z3JlcyIsInNxbCIsImdldFBsYWNlcyIsInBsYWNlcyIsInNlbGVjdFVzZXJCeVVzZXJuYW1lIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInVzZXJzV2l0aFVzZXJuYW1lIiwibGVuZ3RoIiwicGFzc3dvcmRNYXRjaGVzIiwidmVyaWZ5IiwicGFzc3dvcmRfaGFzaCIsImluc2VydFVzZXIiLCJwYXNzd29yZEhhc2giLCJzZWxlY3RTZXNzaW9uQnlUb2tlbiIsInRva2VuIiwiZGVsZXRlU2Vzc2lvbkJ5VG9rZW4iLCJpbnNlcnRTZXNzaW9uIiwidXNlcklkIiwiaW5zZXJ0Sm91cm5leSIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJzZWFyY2giLCJjb25zb2xlIiwibG9nIiwidXNlcl9pZCIsImdldFJhbmRvbUl0ZW0iLCJhcnIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJpbnNlcnRFbnRyaWVzIiwidGFnSWRzIiwiam91cm5leUlkIiwicGxhY2VzQW5kVGFncyIsInNlbGVjdGVkUGxhY2VzQW5kVGFncyIsImZvckVhY2giLCJ0YWdJZCIsInBsYWNlc0J5VGFnIiwiZmlsdGVyIiwicGxhY2VBbmRUYWciLCJ0YWdzX2lkIiwiTnVtYmVyIiwic2VsZWN0ZWRQbGFjZUFuZFRhZyIsInB1c2giLCJtYXAiLCJwbGFjZV9pZCIsInBsYWNlc19pZCIsInRhZ0FycmF5Iiwic2Vzc2lvbnNKb2luRU50cmllcyIsInRyaXAiLCJwZXJzb25hbGl6ZWRQbGFuIiwicGxhbiJdLCJtYXBwaW5ncyI6IkFBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLG1CQUFPLENBQUMsc0JBQUQsQ0FBUCxDQUFrQkMsTUFBbEI7O0FBRUEsTUFBTUMsTUFBTSxHQUFHRixtQkFBTyxDQUFDLHNCQUFELENBQXRCOztBQUNBLE1BQU1HLFFBQVEsR0FBR0gsbUJBQU8sQ0FBQywwQkFBRCxDQUF4Qjs7QUFDQSxNQUFNSSxHQUFHLEdBQUdELFFBQVEsRUFBcEI7QUFFTyxlQUFlRSxTQUFmLEdBQTJCO0FBQ2hDLFFBQU1DLE1BQU0sR0FBRyxNQUFNRixHQUFJOztHQUF6QjtBQUdBLFNBQU9FLE1BQVA7QUFDRDtBQUVNLGVBQWVDLG9CQUFmLENBQW9DQyxRQUFwQyxFQUE4Q0MsUUFBOUMsRUFBd0Q7QUFDN0QsUUFBTUMsaUJBQWlCLEdBQUcsTUFBTU4sR0FBSTt5Q0FDR0ksUUFBUztHQURoRCxDQUQ2RCxDQUcxRDtBQUNIOztBQUNBLE1BQUlFLGlCQUFpQixDQUFDQyxNQUFsQixLQUE2QixDQUFqQyxFQUFvQyxPQUFPRCxpQkFBUDtBQUNwQyxRQUFNRSxlQUFlLEdBQUcsTUFBTVYsTUFBTSxDQUFDVyxNQUFQLENBQzVCSCxpQkFBaUIsQ0FBQyxDQUFELENBQWpCLENBQXFCSSxhQURPLEVBRTVCTCxRQUY0QixDQUE5QixDQU42RCxDQVMxRDs7QUFDSCxNQUFJRyxlQUFKLEVBQXFCO0FBQ25CLFdBQU9GLGlCQUFQO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBTyxFQUFQO0FBQ0Q7QUFDRjtBQUVNLGVBQWVLLFVBQWYsQ0FBMEJQLFFBQTFCLEVBQW9DUSxZQUFwQyxFQUFrRDtBQUN2RCxTQUFPWixHQUFJOzBEQUM2Q0ksUUFBUyxLQUFJUSxZQUFhO0dBRGxGO0FBR0Q7QUFFTSxlQUFlQyxvQkFBZixDQUFvQ0MsS0FBcEMsRUFBMkM7QUFDaEQsU0FBT2QsR0FBSTsyQ0FDOEJjLEtBQU07R0FEL0M7QUFHRDtBQUVNLGVBQWVDLG9CQUFmLENBQW9DRCxLQUFwQyxFQUEyQztBQUNoRCxTQUFPZCxHQUFJO3lDQUM0QmMsS0FBTTtHQUQ3QztBQUdEO0FBRU0sZUFBZUUsYUFBZixDQUE2QkMsTUFBN0IsRUFBcUNILEtBQXJDLEVBQTRDO0FBQ2pELFNBQU9kLEdBQUk7b0RBQ3VDaUIsTUFBTyxLQUFJSCxLQUFNO0dBRG5FO0FBR0Q7QUFFTSxlQUFlSSxhQUFmLENBQTZCQyxTQUE3QixFQUF3Q0MsT0FBeEMsRUFBaUROLEtBQWpELEVBQXdEO0FBQzdELFFBQU1PLE1BQU0sR0FBRyxNQUFNckIsR0FBSTtpREFDc0JjLEtBQU07R0FEckQ7QUFHQVEsU0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFFQSxRQUFNSixNQUFNLEdBQUdJLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsT0FBekI7QUFFQSxTQUFPeEIsR0FBSTttRUFDc0RtQixTQUFVLEtBQUlDLE9BQVEsS0FBSUgsTUFBTztHQURsRztBQUdEOztBQUNELFNBQVNRLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0FBQzFCLFNBQU9BLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkgsR0FBRyxDQUFDbkIsTUFBL0IsQ0FBRCxDQUFWO0FBQ0Q7O0FBRU0sZUFBZXVCLGFBQWYsQ0FBNkJDLE1BQTdCLEVBQXFDQyxTQUFyQyxFQUFnRDtBQUNyRFYsU0FBTyxDQUFDQyxHQUFSLENBQVksbUJBQVosRUFBaUNTLFNBQWpDLEVBRHFELENBRXJEOztBQUNBLFFBQU1DLGFBQWEsR0FBRyxNQUFNakMsR0FBSTttRUFDaUMrQixNQUFPO0dBRHhFO0FBR0FULFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCVSxhQUE5QjtBQUNBWCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCUSxNQUF0QixFQVBxRCxDQVNyRDs7QUFDQSxRQUFNRyxxQkFBcUIsR0FBRyxFQUE5QjtBQUNBSCxRQUFNLENBQUNJLE9BQVAsQ0FBZ0JDLEtBQUQsSUFBVztBQUN4QjtBQUNBLFVBQU1DLFdBQVcsR0FBR0osYUFBYSxDQUFDSyxNQUFkLENBQXNCQyxXQUFELElBQWlCO0FBQ3hELGFBQU9BLFdBQVcsQ0FBQ0MsT0FBWixLQUF3QkMsTUFBTSxDQUFDTCxLQUFELENBQXJDO0FBQ0QsS0FGbUIsQ0FBcEI7QUFHQSxVQUFNTSxtQkFBbUIsR0FBR2pCLGFBQWEsQ0FBQ1ksV0FBRCxDQUF6QztBQUNBSCx5QkFBcUIsQ0FBQ1MsSUFBdEIsQ0FBMkJELG1CQUEzQjtBQUNBcEIsV0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JXLHFCQUEvQjtBQUNELEdBUkQ7QUFVQVosU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JXLHFCQUEvQjtBQUNBLFFBQU1oQyxNQUFNLEdBQUdnQyxxQkFBcUIsQ0FBQ1UsR0FBdEIsQ0FBMkJDLFFBQUQsSUFBYztBQUNyRHZCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZc0IsUUFBWjtBQUNBLFdBQU9BLFFBQVEsQ0FBQ0MsU0FBaEI7QUFDRCxHQUhjLENBQWY7QUFLQXhCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JyQixNQUF0QjtBQUNBLFFBQU02QyxRQUFRLEdBQUcsTUFBTS9DLEdBQUk7d0VBQzJDRSxNQUFPO0dBRDdFO0FBSUFvQixTQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaLEVBQXdCd0IsUUFBeEI7QUFFQSxRQUFNL0MsR0FBSTs7YUFFQ2dDLFNBQVU7MEJBQ0c5QixNQUFPO0dBSC9CO0FBTUEsU0FBTzZDLFFBQVA7QUFDRDtBQUVNLGVBQWVDLG1CQUFmLENBQW1DbEMsS0FBbkMsRUFBMEM7QUFDL0MsUUFBTW1DLElBQUksR0FBRyxNQUFNakQsR0FBSTs7Ozs7Ozs7eUJBUUFjLEtBQU07OztHQVI3QjtBQWFBLFNBQU9tQyxJQUFQO0FBQ0Q7QUFFTSxlQUFlQyxnQkFBZixDQUFnQ2xCLFNBQWhDLEVBQTJDO0FBQ2hELFFBQU1tQixJQUFJLEdBQUcsTUFBTW5ELEdBQUk7Ozs7Ozs7Ozs7O3FDQVdZZ0MsU0FBVTtHQVg3QztBQWFBLFNBQU9tQixJQUFQO0FBQ0QiLCJmaWxlIjoiLi9kYi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xuXG5jb25zdCBhcmdvbjIgPSByZXF1aXJlKCdhcmdvbjInKTtcbmNvbnN0IHBvc3RncmVzID0gcmVxdWlyZSgncG9zdGdyZXMnKTtcbmNvbnN0IHNxbCA9IHBvc3RncmVzKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQbGFjZXMoKSB7XG4gIGNvbnN0IHBsYWNlcyA9IGF3YWl0IHNxbGBcbiAgICBzZWxlY3QgKiBmcm9tIHBsYWNlc1xuICBgO1xuICByZXR1cm4gcGxhY2VzO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VsZWN0VXNlckJ5VXNlcm5hbWUodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gIGNvbnN0IHVzZXJzV2l0aFVzZXJuYW1lID0gYXdhaXQgc3FsYFxuICBTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIHVzZXJuYW1lID0gJHt1c2VybmFtZX1cbiAgYDsgLy9zZWxlY3QgZnJvbSBhbHdheXMgcmV0dXJucyBhbiBhcnJheSwgZXZlbiBpZiBpdHMgb25lXG4gIC8vIGNvbnNvbGUubG9nKHVzZXJzV2l0aFVzZXJuYW1lWzBdKTtcbiAgaWYgKHVzZXJzV2l0aFVzZXJuYW1lLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHVzZXJzV2l0aFVzZXJuYW1lO1xuICBjb25zdCBwYXNzd29yZE1hdGNoZXMgPSBhd2FpdCBhcmdvbjIudmVyaWZ5KFxuICAgIHVzZXJzV2l0aFVzZXJuYW1lWzBdLnBhc3N3b3JkX2hhc2gsXG4gICAgcGFzc3dvcmQsXG4gICk7IC8vdGhpcyByZXR1cm5zIGJvb2xlYW5cbiAgaWYgKHBhc3N3b3JkTWF0Y2hlcykge1xuICAgIHJldHVybiB1c2Vyc1dpdGhVc2VybmFtZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydFVzZXIodXNlcm5hbWUsIHBhc3N3b3JkSGFzaCkge1xuICByZXR1cm4gc3FsYFxuICAgIElOU0VSVCBJTlRPIHVzZXJzICh1c2VybmFtZSwgcGFzc3dvcmRfaGFzaCkgVkFMVUVTICgke3VzZXJuYW1lfSwgJHtwYXNzd29yZEhhc2h9KVxuICBgO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VsZWN0U2Vzc2lvbkJ5VG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHNxbGBcbiAgICBTRUxFQ1QgKiBGUk9NIHNlc3Npb25zIFdIRVJFIHRva2VuID0gJHt0b2tlbn1cbiAgYDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb25CeVRva2VuKHRva2VuKSB7XG4gIHJldHVybiBzcWxgXG4gICAgREVMRVRFIEZST00gc2Vzc2lvbnMgV0hFUkUgdG9rZW4gPSAke3Rva2VufVxuICBgO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5zZXJ0U2Vzc2lvbih1c2VySWQsIHRva2VuKSB7XG4gIHJldHVybiBzcWxgXG4gICAgSU5TRVJUIElOVE8gc2Vzc2lvbnMgKHVzZXJfaWQsIHRva2VuKSBWQUxVRVMgKCR7dXNlcklkfSwgJHt0b2tlbn0pXG4gIGA7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbnNlcnRKb3VybmV5KHN0YXJ0RGF0ZSwgZW5kRGF0ZSwgdG9rZW4pIHtcbiAgY29uc3Qgc2VhcmNoID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCB1c2VyX2lkIEZST00gc2Vzc2lvbnMgV0hFUkUgdG9rZW4gPSAke3Rva2VufVxuICBgO1xuICBjb25zb2xlLmxvZyhzZWFyY2gpO1xuXG4gIGNvbnN0IHVzZXJJZCA9IHNlYXJjaFswXS51c2VyX2lkO1xuXG4gIHJldHVybiBzcWxgXG4gICAgSU5TRVJUIElOVE8gam91cm5leXMgKHN0YXJ0X2RhdGUsIGVuZF9kYXRlLCB1c2VyX2lkKSBWQUxVRVMgKCR7c3RhcnREYXRlfSwgJHtlbmREYXRlfSwgJHt1c2VySWR9KSBSRVRVUk5JTkcgaWQsIHN0YXJ0X2RhdGUsIGVuZF9kYXRlLCB1c2VyX2lkXG4gIGA7XG59XG5mdW5jdGlvbiBnZXRSYW5kb21JdGVtKGFycikge1xuICByZXR1cm4gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluc2VydEVudHJpZXModGFnSWRzLCBqb3VybmV5SWQpIHtcbiAgY29uc29sZS5sb2coJ2Zyb21DcmF6eUZ1bmN0aW9uJywgam91cm5leUlkKTtcbiAgLy8gc2VsZWN0ZWRUYWdzIHNob3dzIG1lIHBsYWNlc19pZCBjb2x1bW4gYmFzZWQgdGFnc19pZFxuICBjb25zdCBwbGFjZXNBbmRUYWdzID0gYXdhaXQgc3FsYFxuICAgIFNFTEVDVCBwbGFjZXNfaWQsIHRhZ3NfaWQgRlJPTSBwbGFjZXNfdGFncyBXSEVSRSB0YWdzX2lkIElOICgke3RhZ0lkc30pXG4gIGA7XG4gIGNvbnNvbGUubG9nKCdwbGFjZXNhbmRUYWdzOicsIHBsYWNlc0FuZFRhZ3MpO1xuICBjb25zb2xlLmxvZygndGFnSWRzJywgdGFnSWRzKTtcblxuICAvLyB0YWcgZ2l2ZXMgYSByYW5kb20gbnVtYmVyIGZyb20gdGhlIHBsYWNlc19pZCBjb2x1bW5cbiAgY29uc3Qgc2VsZWN0ZWRQbGFjZXNBbmRUYWdzID0gW107XG4gIHRhZ0lkcy5mb3JFYWNoKCh0YWdJZCkgPT4ge1xuICAgIC8vIHRoZXNlIGFyZSB0aGUgcGxhY2VzSWRzIGJhc2VkIG9uIHRoZSB0YWdJZFxuICAgIGNvbnN0IHBsYWNlc0J5VGFnID0gcGxhY2VzQW5kVGFncy5maWx0ZXIoKHBsYWNlQW5kVGFnKSA9PiB7XG4gICAgICByZXR1cm4gcGxhY2VBbmRUYWcudGFnc19pZCA9PT0gTnVtYmVyKHRhZ0lkKTtcbiAgICB9KTtcbiAgICBjb25zdCBzZWxlY3RlZFBsYWNlQW5kVGFnID0gZ2V0UmFuZG9tSXRlbShwbGFjZXNCeVRhZyk7XG4gICAgc2VsZWN0ZWRQbGFjZXNBbmRUYWdzLnB1c2goc2VsZWN0ZWRQbGFjZUFuZFRhZyk7XG4gICAgY29uc29sZS5sb2coJ3NlbGVjdGVkcGxhY2VzOicsIHNlbGVjdGVkUGxhY2VzQW5kVGFncyk7XG4gIH0pO1xuXG4gIGNvbnNvbGUubG9nKCdzZWxlY3RlZHBsYWNlczonLCBzZWxlY3RlZFBsYWNlc0FuZFRhZ3MpO1xuICBjb25zdCBwbGFjZXMgPSBzZWxlY3RlZFBsYWNlc0FuZFRhZ3MubWFwKChwbGFjZV9pZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHBsYWNlX2lkKTtcbiAgICByZXR1cm4gcGxhY2VfaWQucGxhY2VzX2lkO1xuICB9KTtcblxuICBjb25zb2xlLmxvZygncGxhY2VzJywgcGxhY2VzKTtcbiAgY29uc3QgdGFnQXJyYXkgPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIG5hbWUsIGFkZHJlc3MsIGltYWdlLCBkZXNjcmlwdGlvbiBGUk9NIHBsYWNlcyBXSEVSRSBpZCBJTiAoJHtwbGFjZXN9KSBcbiAgYDtcblxuICBjb25zb2xlLmxvZygndGFnQXJyYXknLCB0YWdBcnJheSk7XG5cbiAgYXdhaXQgc3FsYFxuICAgIElOU0VSVCBJTlRPIGpvdXJuZXlzX3BsYWNlcyAoam91cm5leV9pZCwgcGxhY2VfaWQpXG4gICAgU0VMRUNUICR7am91cm5leUlkfSwgeFxuICAgICAgRlJPTSB1bm5lc3QoQVJSQVlbJHtwbGFjZXN9XSkgeFxuICBgO1xuXG4gIHJldHVybiB0YWdBcnJheTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlc3Npb25zSm9pbkVOdHJpZXModG9rZW4pIHtcbiAgY29uc3QgdHJpcCA9IGF3YWl0IHNxbGBcbiAgICBTRUxFQ1QgXG4gICAgICBqb3VybmV5cy5pZCBhcyBqb3VybmV5X2lkXG4gICAgRlJPTSBcbiAgICAgIHNlc3Npb25zLFxuICAgICAgdXNlcnMsXG4gICAgICBqb3VybmV5c1xuICAgIFdIRVJFIFxuICAgICAgc2Vzc2lvbnMudG9rZW4gPSAke3Rva2VufSBBTkRcbiAgICAgIHVzZXJzLmlkID0gc2Vzc2lvbnMudXNlcl9pZCBBTkRcbiAgICAgIGpvdXJuZXlzLnVzZXJfaWQgPSB1c2Vycy5pZDtcbiAgYDtcblxuICByZXR1cm4gdHJpcDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBlcnNvbmFsaXplZFBsYW4oam91cm5leUlkKSB7XG4gIGNvbnN0IHBsYW4gPSBhd2FpdCBzcWxgXG4gICAgU0VMRUNUIFxuICAgICAgcGxhY2VzLm5hbWUsICBcbiAgICAgIHBsYWNlcy5hZGRyZXNzLCBcbiAgICAgIHBsYWNlcy5pbWFnZSxcbiAgICAgIHBsYWNlcy5kZXNjcmlwdGlvbiBcbiAgICBGUk9NIFxuICAgICAgcGxhY2VzLFxuICAgICAgam91cm5leXNfcGxhY2VzIFxuICAgIFdIRVJFIFxuICAgICAgcGxhY2VzLmlkID0gam91cm5leXNfcGxhY2VzLnBsYWNlX2lkIEFORCBcbiAgICAgIGpvdXJuZXlzX3BsYWNlcy5qb3VybmV5X2lkID0gJHtqb3VybmV5SWR9XG4gIGA7XG4gIHJldHVybiBwbGFuO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./db.js\n");

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

/***/ 4:
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