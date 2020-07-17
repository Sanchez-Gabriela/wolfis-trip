require('dotenv').config();

const argon2 = require('argon2');
const postgres = require('postgres');
const sql = postgres();

export async function getPlaces() {
  const places = await sql`
    select * from places
  `;
  return places;
}

export async function selectUserByUsername(username, password) {
  const usersWithUsername = await sql`
  SELECT * FROM users WHERE username = ${username}
  `; //select from always returns an array, even if its one
  // console.log(usersWithUsername[0]);
  if (usersWithUsername.length === 0) return usersWithUsername;
  const passwordMatches = await argon2.verify(
    usersWithUsername[0].password_hash,
    password,
  ); //this returns boolean
  if (passwordMatches) {
    return usersWithUsername;
  } else {
    return [];
  }
}

export async function insertUser(username, passwordHash) {
  return sql`
    INSERT INTO users (username, password_hash) VALUES (${username}, ${passwordHash})
  `;
}

export async function selectSessionByToken(token) {
  return sql`
    SELECT * FROM sessions WHERE token = ${token}
  `;
}

export async function deleteSessionByToken(token) {
  return sql`
    DELETE FROM sessions WHERE token = ${token}
  `;
}

export async function insertSession(userId, token) {
  return sql`
    INSERT INTO sessions (user_id, token) VALUES (${userId}, ${token})
  `;
}

export async function insertJourney(startDate, endDate, token) {
  const search = await sql`
    SELECT user_id FROM sessions WHERE token = ${token}
  `;
  console.log(search);

  const userId = search[0].user_id;

  return sql`
    INSERT INTO journeys (start_date, end_date, user_id) VALUES (${startDate}, ${endDate}, ${userId}) RETURNING id, start_date, end_date, user_id
  `;
}
function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export async function insertEntries(tagIds, journeyId) {
  console.log('fromCrazyFunction', journeyId);
  // selectedTags shows me places_id column based tags_id
  const placesAndTags = await sql`
    SELECT places_id, tags_id FROM places_tags WHERE tags_id IN (${tagIds})
  `;
  console.log('placesandTags:', placesAndTags);
  console.log('tagIds', tagIds);

  // tag gives a random number from the places_id column
  const selectedPlacesAndTags = [];
  tagIds.forEach((tagId) => {
    // these are the placesIds based on the tagId
    const placesByTag = placesAndTags.filter((placeAndTag) => {
      return placeAndTag.tags_id === Number(tagId);
    });
    const selectedPlaceAndTag = getRandomItem(placesByTag);
    selectedPlacesAndTags.push(selectedPlaceAndTag);
    console.log('selectedplaces:', selectedPlacesAndTags);
  });

  console.log('selectedplaces:', selectedPlacesAndTags);
  const places = selectedPlacesAndTags.map((place_id) => {
    console.log(place_id);
    return place_id.places_id;
  });

  console.log('places', places);
  const tagArray = await sql`
    SELECT name, address, image, description FROM places WHERE id IN (${places}) 
  `;

  console.log('tagArray', tagArray);

  await sql`
    INSERT INTO journeys_places (journey_id, place_id)
    SELECT ${journeyId}, x
      FROM unnest(ARRAY[${places}]) x
  `;

  return tagArray;
}

export async function sessionsJoinENtries(token) {
  console.log(('token', token));
  const trip = await sql`
    SELECT 
      journeys.id as journey_id
    FROM 
      sessions,
      users,
      journeys
    WHERE 
      sessions.token = ${token} AND
      users.id = sessions.user_id AND
      journeys.user_id = users.id;
  `;
  console.log('meme', trip);

  return trip;
}

export async function personalizedPlan(journeyId) {
  console.log('from databas', journeyId);
  const plan = await sql`
    SELECT 
      places.name,  
      places.address, 
      places.image,
      places.description 
    FROM 
      places,
      journeys_places 
    WHERE 
      places.id = journeys_places.place_id AND 
      journeys_places.journey_id = ${journeyId}
  `;
  console.log('from databas', journeyId);
  return plan;
}
