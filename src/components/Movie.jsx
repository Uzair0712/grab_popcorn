function Movie({ movie, onSelection }) {
  return (
    <li className="movie-item" onClick={() => onSelection(movie.imdbID)}>
      <img src={movie.Poster} alt="avengers" />
      <div>
        <h3>{movie.Title}</h3>
        <div>
          <span>🎰</span> <span>{movie.Year}</span>
        </div>
      </div>
    </li>
  );
}

export default Movie;
