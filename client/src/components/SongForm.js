import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

// Form submission for Add and Update
const SongForm = (props) => {

  // Submit handler: utilizes props that are passed from Add and Update
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.[props.method](props.url, props.song)
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
            value={props.song.title}
            name="title"
            // Use of spread to copy songs and set appropriate attribute
            onChange={(e) => props.setSong({ ...props.song, title: e.target.value })}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Artist:</label>
          <input
            className="input-field"
            type="text"
            value={props.song.artist}
            name="artist"
            onChange={(e) => props.setSong({ ...props.song, artist: e.target.value })}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Image URL:</label>
          <input
            className="input-field"
            type="text"
            value={props.song.imageUrl}
            name="imageUrl"
            onChange={(e) => props.setSong({ ...props.song, imageUrl: e.target.value })}
          />
        </div>
        <div className="form-input">
          <label className="form-label">Description:</label>
          <input
            className="input-field"
            type="text"
            value={props.song.description}
            name="description"
            onChange={(e) => props.setSong({ ...props.song, description: e.target.value })}
          />
        </div>
        <input type="submit" value="Add Song" name="submit" className="btn" />
      </form>
    </div >
  );
};

export default SongForm;
