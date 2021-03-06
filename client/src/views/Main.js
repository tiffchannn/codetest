import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

// Displays home page with card carousel
const Main = () => {
	const [songs, setSongs] = useState([]);
	// keeps track of current card slide
	const [current, setCurrent] = useState(0);
	const length = songs.length;

	// Communicates from client to server to make API call
	useEffect(() => {
		axios.get("/api/song")
			.then((res) => setSongs(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteSong = id => {
		axios.delete("/api/song/" + id)
			.then(res => {
				const filteredSongs = songs.filter(song => song._id !== id)
				setSongs(filteredSongs)
				// Allows the carousel to go back to index 0
				setCurrent(0)
				console.log("Successfully deleted")
			})
	}

	// Determines next card slide by increasing current
	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	}

	// Determines previous card slide by decreasing current
	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	}

	return (
		<div>
			<header>
				<h1 className="header-title">Music is my Love Language</h1>
				<button onClick={(e) => navigate("/song/add")} className="main-add-btn">Add Jams</button>
			</header>

			<div className="slider">
				<FiArrowLeft className={songs.length === 0 ? "empty-list" : "left-arrow"} onClick={prevSlide} />
				<FiArrowRight className={songs.length === 0 ? "empty-list" : "right-arrow"} onClick={nextSlide} />
				{songs.map((song, idx) => {
					return (
						<div key={idx} className={idx === current ? 'slide active' : 'slide'}>
							{idx === current &&
								(
									<>
										<div>
											<img
												className="song-image"
												src={song.imageUrl}
												alt={song.title}
												onClick={(e) => navigate("/song/" + song._id)}
											/>
										</div>

										<div>
											<h2 className="song-title">{song.title}</h2>
											<p className="text">{song.artist}</p>
											<p className="text">{song.description}</p>
										</div>
										<div className="main-btns">
											<button onClick={(e) => navigate("/song/" + song._id)} className="task-btn">View Song</button>
											<button onClick={(e) => deleteSong(song._id)} className="task-btn">Delete Song</button>
										</div>
									</>
								)
							}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Main;
