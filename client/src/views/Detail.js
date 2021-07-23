import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";


const Detail = (props) => {
  const [song, setSong] = useState({});

  useEffect(() => {
    axios.get("/api/song/" + props.id)
      .then(res => setSong(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <header className="detail-header">
        <div className="home-link">
          <Link to="/" className="home-link">Home</Link>
        </div>
        <div>
          <h1 className="song-name">{song.title}</h1>
        </div>
        <div></div>

      </header>
      <div className="song-info">
        <img src={song.imageUrl} alt={song.title} className="detail-song-image" />
        <p className="detail-song-text">{song.artist}</p>
        <p className="detail-song-text">{song.description}</p>
        <Link to={"/song/" + song._id + "/update"} className="edit-link">
          Edit
        </Link>
      </div>
    </div>
  )
};

export default Detail;