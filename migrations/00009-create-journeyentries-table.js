exports.up = async (sql) => {
  sql`
		CREATE TABLE journeyentries(
			id SERIAL PRIMARY KEY,
			journey_id VARCHAR NOT NULL,
      place_id VARCHAR NOT NULL,
      date DATE NOT NULL
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE journeyentries
	`;
};
