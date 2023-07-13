import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';

import MovieDetail from "../components/MovieDetail.js";
import Header from '../components/Header.js';
import Aside from './../components/Aside';

function Home() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovieDetail = async () => {
    const response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=61f0454ae242d4ad2af7ce1bc8fa06f0&openStartDt=2023&movieNm=${id}`);
    const json = await response.json();
    setMovie(json.movieListResult.movieList[0]);
    setLoading(false);
  };

  useEffect(() => {
    getMovieDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
  <div className="Detail">
    <Header />
    <Aside />
    {loading ? <h2>loading...</h2> :
      <MovieDetail 
        key={Number(movie.movieCd)}
        title={movie.movieNm}
        repGenreNm={movie.repGenreNm}
        nationAlt={movie.nationAlt}
        openDt={movie.openDt}
      />
    }
  </div>
  );
}

export default Home;