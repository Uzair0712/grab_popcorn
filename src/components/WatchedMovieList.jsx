import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watchedMovies, setWatched }) {
  return (
    <ul className="movie-list">
      {watchedMovies.map((watched) => (
        <WatchedMovie
          watched={watched}
          key={watched.imdbID}
          setWatched={setWatched}
        />
      ))}
    </ul>
  );
}

export default WatchedMovieList;
