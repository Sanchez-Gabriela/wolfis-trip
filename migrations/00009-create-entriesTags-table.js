exports.up = async (sql) => {
  sql`
    CREATE TABLE entriesTags(
      id SERIAL PRIMARY KEY,
      journey_id BIGINT,
      place_id VARCHAR
    )	
  `;
};

exports.down = async (sql) => {
  sql`
    DROP TABLE entriesTags
  `;
};
