import Movie from "./Movie";

function MovieList({ movies, onSelection }) {
  return (
    <ul className="movie-list">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelection={onSelection} />
      ))}
    </ul>
  );
}

export default MovieList;
