exports.up = async (sql) => {
  sql`
		CREATE TABLE sessions(
			id SERIAL PRIMARY KEY,
			user_id VARCHAR NOT NULL,
			token VARCHAR NOT NULL
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE sessions
	`;
};
