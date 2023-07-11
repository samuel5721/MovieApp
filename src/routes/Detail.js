import React, { useEffect, useState } from 'react';
import { Params, useParams } from 'react-router-dom';

import Movie from "../components/Movie.js";

function Home() {
    const { id } = useParams();

    const getMovieDetail = async () => {
        const response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=61f0454ae242d4ad2af7ce1bc8fa06f0&openStartDt=2023&movieNm=${id}`);
        const json = await response.json();
        console.log(json.movieListResult.movieList[0]);
    };
    //api 변경
    

    useEffect(() => {
        getMovieDetail();
    }, [])

    return (
    <div className="Detail">
      loading...
    </div>
  );
}

export default Home;