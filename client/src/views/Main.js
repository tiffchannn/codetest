import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";

const Main = () => {
	const [songs, setSongs] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:8000/api/song")
			.then((res) => setSongs(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteSong = id => {
		console.log("ID was clicked: ", id);
		axios.delete("http://localhost:8000/api/song/" + id)
			.then(res => {
				const filteredSongs = songs.filter(song => song._id !== id)
				setSongs(filteredSongs)
			})
	}

	return (
		<div>
			<header>
				<h1>Music is my Love Language</h1>
				<button onClick={(e) => navigate("/song/add")}>Add Jams!</button>
			</header>

			{songs.map((song, idx) => {
				return (
					<div key={idx}>
						<div>
							<img
								src={song.imageUrl}
								alt={song.title}
								onClick={(e) => navigate("/song/" + song._id)}
							/>
						</div>

						<div>
							<h2>{song.title}</h2>
							<p>{song.artist}</p>
							<p>{song.description}</p>
						</div>
						<div className="main-buttons">
							<button onClick={(e) => navigate("/song/" + song._id)}>View Song</button>
							<button onClick={(e) => deleteSong(song._id)}>Delete Song</button>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Main;
