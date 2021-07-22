import React, { useEffect, useState } from "react";
import { navigate } from "@reach/router";
import axios from "axios";
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';

const Main = () => {
	const [songs, setSongs] = useState([]);
	const [current, setCurrent] = useState(0);
	const length = songs.length;

	useEffect(() => {
		axios.get("/api/song")
			.then((res) => setSongs(res.data))
			.catch((err) => console.log(err));
	}, []);

	const deleteSong = id => {
		console.log("ID was clicked: ", id);
		axios.delete("/api/song/" + id)
			.then(res => {
				const filteredSongs = songs.filter(song => song._id !== id)
				setSongs(filteredSongs)
			})
	}

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
		console.log("Next Slide was clicked")
	}

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
		console.log("Prev was clicked")
	}


	if (!Array.isArray(songs) || songs.length <= 0) {
		return null;
	}

	return (
		<div>
			<header>
				<h1 className="header-title">Music is my Love Language</h1>
				<button onClick={(e) => navigate("/song/add")}>Add Jams!</button>
			</header>

			<div className="slider">
				<FiArrowLeft className="left-arrow" onClick={prevSlide} />
				<FiArrowRight className="right-arrow" onClick={nextSlide} />
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
											<h2>{song.title}</h2>
											<p>{song.artist}</p>
											<p>{song.description}</p>
										</div>
										<div className="main-buttons">
											<button onClick={(e) => navigate("/song/" + song._id)}>View Song</button>
											<button onClick={(e) => deleteSong(song._id)}>Delete Song</button>
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
