import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Aside() {

    const [loading, setLoding] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=61f0454ae242d4ad2af7ce1bc8fa06f0&openStartDt=2023`);
        const json = await response.json();
        setMovies(json.movieListResult.movieList);
        setLoding(false);
    }

    useEffect(() => {
        getMovies();
    }, [])


    return <aside>
        <form>
          <input></input>
          <button>검색</button>
        </form>
        {loading ? <p>please wait...</p> :
        <ul>
          {movies.map(movie => <li><Link to={`/movie/${movie.movieNm}`}>{movie.movieNm}</Link></li>)}
        </ul>
        }
    </aside>
}

export default Aside;