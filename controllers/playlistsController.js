const express = require("express");
const playlists = express.Router({ mergeParams: true });
const { getPlaylistsForSong } = require("../queries/playlists");

playlists.get("/", async (req, res) => {
  const { song_id } = req.params;
  try {
    const playlistForSong = await getPlaylistsForSong(song_id);
    res.status(200).json(playlistForSong);
  } catch (error) {
    return error;
  }
});

module.exports = playlists;
