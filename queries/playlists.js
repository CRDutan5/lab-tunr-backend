const db = require("../db/dbConfig");

const getPlaylistsForSong = async (song_id) => {
  try {
    const playlists = await db.any(
      "SELECT playlists.* FROM playlists INNER JOIN songs ON playlists.id = songs.playlists_id WHERE songs.id = $1",
      song_id
    );
    return playlists;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getPlaylistsForSong,
};
