import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import Movie from "../components/Movie.js";
import Header from '../components/Header.js';
import Aside from '../components/Aside.js';

function Home() {
  const [loading, setLoding] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=61f0454ae242d4ad2af7ce1bc8fa06f0&openStartDt=2023`);
    const json = await response.json();
    setMovies(json.movieListResult.movieList);
    setLoding(false);
  }

  useEffect(() => {
    getMovies()
  }, []);
  
  console.log(movies);

  return (
    <div className="Home">
      <Header />
      <Aside movies={movies}/>
      <section>
        {loading ? <h3>loading...</h3> :
          movies.map(movie =>
            <Movie
              key={Number(movie.movieCd)}
              id={movie.movieNm}
              title={movie.movieNm}
              prdtYear={Number(movie.prdtYear)}
              repGenreNm={movie.repGenreNm}
            />
          )
        }
      </section>
    </div>
  );
}

export default Home;