exports.up = async (sql) => {
  sql`
		CREATE TABLE places_tags (
			places_id INT,
			tags_id INT
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE places_tags
	`;
};
