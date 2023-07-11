function Movie({ id, title, summary, genres, rating, cover_image}) {
    return <div key={id}>
    <h2>{title}</h2>
    <img src={cover_image} alt="image"></img>
    <p>{(summary.length > 500) ? summary.substr(0, 500)+"..." : summary}</p>
    <ul>
        <li>genre : { (genres !== null) ? genres.map(g => (genres[genres.length-1] === g) ? g : g+", ") : null}</li>
        <li>rating : { (rating !== null) ? rating : null} </li>
    </ul>
  </div>
}
export default Movie;