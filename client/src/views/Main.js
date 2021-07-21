import React, { useEffect, useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Main = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/song")
      .then((res) => setSongs(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <header>
        <h1>Music is my Love Language</h1>
        <button onClick={(e) => navigate("/song/add")}>Add Jams!</button>
      </header>

      {songs.map((song, idx) => {
        return (
          <div key={idx}>
            {/* Image URL */}
            <div>
              <img src={song.imageUrl} alt={song.title} />
            </div>

            {/* Song Info */}
            <div>
              <h2>{song.title}</h2>
              <p>{song.artist}</p>
              <p>{song.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Main;
