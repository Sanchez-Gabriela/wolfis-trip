exports.up = async (sql) => {
  sql`
    CREATE TABLE journeys_places(
      id SERIAL PRIMARY KEY,
      journey_id INT NOT NULL REFERENCES journeys (id) ON DELETE CASCADE ON UPDATE CASCADE,
      place_id INT NOT NULL REFERENCES places (id) ON DELETE CASCADE ON UPDATE CASCADE
    )	
  `;
};

exports.down = async (sql) => {
  sql`
    DROP TABLE journeys_places
  `;
};
