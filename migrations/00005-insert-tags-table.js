exports.up = async (sql) => {
  sql`
    INSERT INTO tags (name) VALUES
    ('sight'), ('classical music'), ('palace'), ('park'), ('church'), ('markt'), ('coffee house'), ('typical food'), ('vegan food'), ('museum'), ('theater'), ('clubs')
  `;
};

exports.down = async (sql) => {
  sql`
		DELETE FROM tags WHERE name IN 'sight', 'classical music', 'palace', 'park', 'church', 'markt', 'coffee house', 'typical food', 'vegan food', 'museum', 'theater', 'clubs'
	`;
};
