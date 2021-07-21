import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";


const Detail = (props) => {
  const [song, setSong] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8000/api/song/" + props.id)
      .then(res => setSong(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <header className="detail-header">
        <div></div>
        <h1 className="song-name">{song.name}</h1>
        <p className="home-link"><Link to="/" className="home-link">Back Home!</Link></p>
      </header>
      <div>
        <img src={song.imageUrl} alt={song.title} />
        <p>{song.title}</p>
        <p>{song.artist}</p>
        <p>{song.description}</p>
        <Link to={"/song/" + song._id + "/update"}>
          Edit
        </Link>
      </div>
    </div>
  )
};

export default Detail;