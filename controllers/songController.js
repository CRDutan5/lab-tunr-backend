const express = require("express");
const songs = express.Router();
const {
  getAllSongs,
  getSong,
  createSong,
  deleteSong,
  updateSong,
} = require("../queries/songs");

const playlistsController = require("./playlistsController");
songs.use("/:song_id/playlists", playlistsController);

songs.get("/", async (req, res) => {
  const allSongs = await getAllSongs();
  if (allSongs[0]) {
    res.status(200).json(allSongs);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

songs.get("/:id", async (req, res) => {
  const { id } = req.params;
  const song = await getSong(id);
  if (song) res.json(song);
  else res.status(404).json({ error: "Error fetching specified id" });
});

songs.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedSong = await updateSong(id, req.body);
  res.json(updatedSong);
});

songs.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSong = await deleteSong(id);
  if (deletedSong.id) res.json(deletedSong);
  else res.status(400).json({ error });
});

songs.post("/", async (req, res) => {
  try {
    const song = await createSong(req.body);
    res.json(song);
  } catch (error) {
    return error;
  }
});

module.exports = songs;
