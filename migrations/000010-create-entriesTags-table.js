exports.up = async (sql) => {
  sql`
		CREATE TABLE entries(
			id SERIAL PRIMARY KEY,
			journey_id VARCHAR,
      place_id VARCHAR[]
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE entries
	`;
};
