exports.up = async (sql) => {
  sql`
		CREATE TABLE journeys(
			id SERIAL PRIMARY KEY,
			start_date DATE NOT NULL,
      end_date DATE NOT NULL,
      user_id VARCHAR NOT NULL
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE journeys
	`;
};
