import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const SongForm = (props) => {

  const [song, setSong] = useState(props.song ?? {
    title: "",
    artist: "",
    description: "",
    imageUrl: ""
  })

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.[props.method](props.url, song)
      .then((res) => {
        console.log("Response: ", res.data);
        navigate("/");
      })
      .catch((err) => {
        console.log("Errors: ", err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-input">
          <label className="form-label">Song Title:</label>
          <input
            className="input-field"
            type="text"
            value={song.title}
            name="title"
            onChange={(e) => setSong({ ...song, title: e.target.value })}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Artist:</label>
          <input
            className="input-field"
            type="text"
            value={song.artist}
            name="artist"
            onChange={(e) => setSong({ ...song, artist: e.target.value })}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Image URL:</label>
          <input
            className="input-field"
            type="text"
            value={song.imageUrl}
            name="imageUrl"
            onChange={(e) => setSong({ ...song, imageUrl: e.target.value })}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Description:</label>
          <input
            className="input-field"
            type="text"
            value={song.description}
            name="description"
            onChange={(e) => setSong({ ...song, description: e.target.value })}
          />
        </div>
        <input type="submit" value="Add Song" name="submit" className="btn" />
      </form>
    </div >
  );
};

export default SongForm;
