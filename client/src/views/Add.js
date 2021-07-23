import React, { useState } from "react";
import { Link } from "@reach/router";
import SongForm from "../components/SongForm";

// Add view for displaying creation of song
const Add = (props) => {
  const [song, setSong] = useState({
    title: "",
    artist: "",
    description: "",
    imageUrl: ""
  });

  return (
    <div>
      <header className="detail-header">
        <div>
          <Link to="/" className="home-link">
            Home
          </Link>
        </div>
        <div>
          <h1>Add Song</h1>
        </div>
        <div></div>
      </header>

      {/* Passing our state as props into the SongForm */}
      <SongForm
        method="post"
        song={song}
        setSong={setSong}
        url={"/api/song"}
        title=""
        artist=""
        imageUrl=""
        description=""
      />
    </div>
  );
};

export default Add;
