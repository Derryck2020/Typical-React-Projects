import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
	const [movies, setMovies] = useState([]);

	async function fetchMovies() {
		const response = await fetch('https://swapi.dev/api/films/');
		const data = await response.json();
		const changeMoviesProps = data.results.map((movieData) => {
			return {
				id: movieData.episode_id,
				title: movieData.title,
				openingText: movieData.opening_crawl,
				releaseDate: movieData.release_data,
			};
		});
		setMovies(changeMoviesProps);
	}

	return (
		<>
			<section>
				<button onClick={fetchMovies}>Fetch Movies</button>
			</section>
			<section>
				<MoviesList movies={movies} />
			</section>
		</>
	);
}

export default App;
