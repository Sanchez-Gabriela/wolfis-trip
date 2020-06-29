exports.up = async (sql) => {
  sql`
    CREATE TABLE users(
      id SERIAL PRIMARY KEY,
      username VARCHAR NOT NULL,
      password_hash VARCHAR 
    )
  `;
};

exports.down = async (sql) => {
  sql`
    DROP TABLE users
  `;
};
