exports.up = async (sql) => {
  sql`
		INSERT INTO sights (name, address, image, description ) VALUES
			('Rathaus', '1., Rathausplatz 1', '/rathaus.jpg', 'Nearly all-the-year you can find here some special events like the film festival, circus, Christkindlmarkt (Christmas market), Wiener Eistraum (ice-skating rink) and some other seasonal events.' ),
			('Parlament', '1., Dr. Karl-Renner-Ring 2', '/parlament.jpg', 'with the Pallas Athene statue at the front is one of the most important splendor building at the Wiener Ringstraße. Built from 1874 to 1883 according the plans of architect Theophil Hansen in the Greek-Roman style the historical rooms are used as residence for the Austrian National and Federal council.' ),
			('Hofburg/Heldenplatz', '1., Hofburg', '/heldenplatz.jpg', 'The Hofburg Vienna is an impressive building at the Heldenplatz with long history. It is located at Viennas splendor boulevard, the Ringstrasse, and is reachable from there through the Burgtor gate.' ),
			('Staatsoper', '1., Opernring 1', '/staatsoper.jpg', 'The Vienna State Opera House was opened in 1869 with a gala performance of Mozarts “Don Giovanni”. Since that time, it has been one of worlds leading and most famous opera houses. Great musicians have held the post of director, among them Gustav Mahler, Richard Strauss, Herbert von Karajan, Karl Böhm, Lorin Maazel and many others.' ),
			('Urania', '1., Uraniastraße 1', '/urania.jpg', 'In addition to incredible views of the heavens, the observatory also offers one of the most beautiful panoramas of Vienna.' )
	`;
};

exports.down = async (sql) => {
  sql`
		DELETE FROM sights
		  WHERE name IN ('Rathaus', 'Parlament', 'Hofburg/Heldenplatz')
	`;
};
