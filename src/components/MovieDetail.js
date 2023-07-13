import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ title, repGenreNm, nationAlt, openDt}) {
    return <div>
    <h1>{title}</h1>
    <p> '{title}'은(는) {(nationAlt !== '기타') ? `${nationAlt}에서 제작된` : null} {openDt.substr(0, 4)}년 {openDt.substr(4, 2)}월 {openDt.substr(6, 2)}일 상영되는 {repGenreNm} 영화이다.</p>
    <p><Link to={`/`}>메인으로 돌아가기</Link></p>
  </div>
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    repGenreNm : PropTypes.string.isRequired,
    nationAlt : PropTypes.string.isRequired,
    openDt : PropTypes.string.isRequired
}

export default Movie;