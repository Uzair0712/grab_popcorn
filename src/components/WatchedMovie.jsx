function WatchedMovie({ watched, setWatched }) {
  function handleDelete() {
    setWatched((allWatched) =>
      allWatched.filter((cur) => cur.imdbID !== watched.imdbID)
    );
  }

  return (
    <li className="watched-item">
      <img src={watched.Poster} alt="avengers" />
      <div>
        <h3>{watched.Title}</h3>
        <div className="watched-text">
          <p>
            <span>⭐</span> <span>{watched.imdbRating}</span>
          </p>
          <p>
            <span>🌟</span> <span>{watched.userRating}</span>
          </p>
          <p>
            <span>⏳</span> <span>{watched.runtime}</span>
          </p>
          <button onClick={handleDelete}>&times;</button>
        </div>
      </div>
    </li>
  );
}

export default WatchedMovie;
