DROP DATABASE IF EXISTS tuner;
CREATE DATABASE tuner;
\c tuner;

CREATE TABLE playlists(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL
);

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT,
    time VARCHAR(10),
    is_favorite BOOLEAN,
    playlists_id INTEGER REFERENCES playlists(id)
);
