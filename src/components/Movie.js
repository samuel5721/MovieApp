import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ id, title, prdtYear, repGenreNm}) {
    return <div>
    <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
    <ul>
        <li>제작연도 : { prdtYear }</li>
        <li>장르 : { repGenreNm }</li>
    </ul>
  </div>
}

Movie.propTypes = {
    id : PropTypes.string.isRequired,
    title : PropTypes.string.isRequired,
    prdtYear : PropTypes.number.isRequired,
    repGenreNm : PropTypes.string.isRequired,
}

export default Movie;