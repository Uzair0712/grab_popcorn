function average(arr) {
  return arr.reduce((acc, cur) => acc + cur, 0) / arr.length || 0;
}

function WatchedSummary({ watched }) {
  const numMovies = watched.length;
  const avgImdbRating = average(watched.map((cur) => cur.imdbRating));
  const avgUserRating = average(watched.map((cur) => cur.userRating));
  const avgRuntime = average(watched.map((cur) => cur.runtime));

  return (
    <div className="summary">
      <h3>Movies you watched</h3>
      <div className="summary-details">
        <p>
          <span>#️⃣</span> <span>{numMovies} movies</span>
        </p>
        <p>
          <span>⭐</span> <span>{avgImdbRating.toFixed(1)}</span>
        </p>
        <p>
          <span>🌟</span> <span>{avgUserRating.toFixed(1)}</span>
        </p>
        <p>
          <span>⏳</span> <span>{Math.round(avgRuntime)} mins</span>
        </p>
      </div>
    </div>
  );
}

export default WatchedSummary;
