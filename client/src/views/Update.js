import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

const Update = (props) => {

  const [song, setSong] = useState({
    title: "",
    artist: "",
    description: "",
    imageUrl: ""
  });

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
      <header className="detail-header">
        <div>
          <Link to="/" className="home-link">Home</Link>
        </div>
        <div>
          <h1>Update A Song</h1>
        </div>
        <div></div>
      </header>

      <SongForm
        method="put"
        song={song}
        setSong={setSong}
        url={`/api/song/${props.id}`}
      />

    </div>
  )

};

export default Update;