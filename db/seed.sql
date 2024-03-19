\c tuner;

INSERT INTO playlists(name) 
VALUES ('Carlitos Playlist'), ('Gym Workout'), ('Hip-Hop Playlist');

INSERT INTO songs(name, artist, album, time, is_favorite, playlists_id) VALUES 
    ('Smells Like Teen Spirit', 'Nirvana', 'Nevermind', '5:01', true, 1),
    ('Billie Jean', 'Michael Jackson', 'Thriller', '4:54', true, 1),
    ('Back in Black', 'AC/DC', 'Back in Black', '4:15', true, 2),
    ('Hey Jude', 'The Beatles', 'The Beatles (White Album)', '7:11', true, 1),
    ('Bohemian Rhapsody', 'Queen', 'A Night at the Opera', '5:55', true, 2),
    ('Empire State of Mind', 'Jay-Z ft. Alicia Keys', 'The Blueprint 3', '4:36', true, 3),
    ('Gold Digger', 'Kanye West ft. Jamie Foxx', 'Late Registration', '3:28', true, 3);



