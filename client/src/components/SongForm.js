import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const SongForm = (props) => {
  const [title, setTitle] = useState(props.title);
  const [artist, setArtist] = useState(props.artist);
  const [imageUrl, setImageUrl] = useState(props.imageUrl);
  const [description, setDescription] = useState(props.description);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.[props.method](props.url, {
      title,
      artist,
      imageUrl,
      description,
    })
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
      <form onSubmit={handleSubmit}>
        <div>
          <label>Song Title:</label>
          <input
            type="text"
            value={title}
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Artist:</label>
          <input
            type="text"
            value={artist}
            name="artist"
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>
        <div>
          <label>Image URL:</label>
          <input
            type="text"
            value={imageUrl}
            name="imageUrl"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Song" name="submit" />
      </form>
    </div >
  );
};

export default SongForm;
