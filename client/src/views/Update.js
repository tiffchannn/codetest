import React, { useState, useEffect } from "react";
import axios from "axios";
import { navigate, Link } from "@reach/router";

import SongForm from "../components/SongForm";

const Update = (props) => {
  const [song, setSong] = useState({
    title: "",
    artist: "",
    description: "",
    imageUrl: ""
  })


  useEffect(() => {
    axios.get('/api/song/' + props.id)
      .then(res => {
        console.log("res data: ", res.data)
        setSong(res.data)
      })
      .catch(err => console.log(err))
  }, [])

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
        url={`/api/song/${props.id}`}
      />
    </div>
  )

};

export default Update;