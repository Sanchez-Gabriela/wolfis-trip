exports.up = async (sql) => {
  sql`
		CREATE TABLE places(
			id SERIAL PRIMARY KEY,
			name VARCHAR,
			address VARCHAR,
			image VARCHAR,
			description TEXT
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE places
	`;
};
