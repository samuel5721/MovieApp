import './App.css';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Movie from './movie';


function App() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoding(false);
  }

  useEffect(() => {
    getMovies()
  }, []);
  
  console.log(movies);

  return (
    <div className="App">
      {loading ? <h3>loading...</h3> :
        movies.map(movie =>
          <Movie
            key={movie.id}
            title={movie.title}
            summary={movie.summary ?? "none"}
            genres={movie.genres ?? []}
            rating={movie.rating ?? "none"}
            cover_image={movie.medium_cover_image}
          />
        )
      }
    </div>
  );
}

export default App;
