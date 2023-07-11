import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function Movie({ title, summary, genres, rating, cover_image}) {
    return <div>
    <h2>{title}</h2>
    <img src={cover_image} alt="image"></img>
    <p>{(summary.length > 500) ? summary.substr(0, 500)+"..." : summary}</p>
    <ul>
        <li>genre : { (genres !== null) ? genres.map(g => (genres[genres.length-1] === g) ? g : g+", ") : null}</li>
        <li>rating : { (rating !== null) ? rating : null} </li>
    </ul>
  </div>
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    summary : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    rating : PropTypes.number.isRequired,
    cover_image : PropTypes.string.isRequired,
}

export default Movie;