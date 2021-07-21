import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

// import SongFrom from '../components/SongForm';

const Update = (props) => {
  const { id } = props;
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    axios.get('/api/song/' + id)
      .then(res => {
        setTitle(res.data.title)
        setArtist(res.data.artist)
        setImageUrl(res.data.imageUrl)
        setDescription(res.data.description)
      })
  }, [])

  const updateSong = e => {
    e.preventDefault();

    axios.put('/api/song/' + id, {
      title,
      artist,
      imageUrl,
      description
    })
      .then(res => {
        console.log('Song was successfully updated\n' + res)
        navigate('/')
      })
      .catch(err => {
        console.log("Errors: ", err)
      })
  }

  return (
    <div>
      <h1>Update A Song</h1>
      <p>
        <Link to="/" className="home-link">Home</Link>
      </p>
      <div>
        <form onSubmit={updateSong}>
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
          <input type="submit" value="Update Song" name="submit" />
        </form>
      </div >
    </div>
  )

};

export default Update;