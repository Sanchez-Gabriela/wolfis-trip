require('dotenv').config();

const argon2 = require('argon2');
const postgres = require('postgres');
const sql = postgres();

// const sights = [
//   {
//     name: 'Rathaus',
//     address: '1., Rathausplatz 1',
//     image: '/rathaus.jpg',
//     description:
//       'Nearly all-the-year you can find here some special events like the film festival, circus, Christkindlmarkt (Christmas market), Wiener Eistraum (ice-skating rink) and some other seasonal events.',
//     parent_id: 'architecture',
//   },
//   {
//     name: 'Parlament',
//     address: '1., Dr. Karl-Renner-Ring 2',
//     image: '/parlament.jpg',
//     description:
//       'with the Pallas Athene statue at the front is one of the most important splendor building at the Wiener Ringstraße. Built from 1874 to 1883 according the plans of architect Theophil Hansen in the Greek-Roman style the historical rooms are used as residence for the Austrian National and Federal council.',
//     parent_id: 'architecture',
//   },
//   {
//     name: 'Hofburg/Heldenplatz',
//     address: '1., Hofburg',
//     image: '/heldenplatz.jpg',
//     description:
//       'The Hofburg Vienna is an impressive building at the Heldenplatz with long history. It is located at Viennas splendor boulevard, the Ringstrasse, and is reachable from there through the Burgtor gate.',
//     parent_id: 'architecture',
//   },
// ];

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
