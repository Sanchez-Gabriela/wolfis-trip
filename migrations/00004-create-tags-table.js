exports.up = async (sql) => {
  sql`
		CREATE TABLE tags(
			id SERIAL PRIMARY KEY,
			name VARCHAR
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE tags
	`;
};
