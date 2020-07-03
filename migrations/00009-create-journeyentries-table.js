exports.up = async (sql) => {
  sql`
		CREATE TABLE journeyentries(
			journey_id VARCHAR NOT NULL,
      place_id VARCHAR NOT NULL,
      date DATE NOT NULL,
      order VARCHAR NOT NULL
		)	
	`;
};

exports.down = async (sql) => {
  sql`
		DROP TABLE journeyentries
	`;
};
