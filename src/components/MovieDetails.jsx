import { useEffect, useState } from "react";
import Message from "./Message";
import StarRating from "./StarRating";
import { useKey } from "../useKey";
const KEY = "97b1ee8d";

function MovieDetails({ id, onSelection, watchedMovies, setWatched }) {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const [rating, setRating] = useState(null);

  const isRated = watchedMovies.find(
    (movie) => movie.imdbID === id
  )?.userRating;

  useEffect(
    function () {
      async function getMovieDetails() {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&i=${id}`
          );
          if (!res.ok) throw new Error("Error while fetching data");
          const data = await res.json();
          setMovie(data);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      }
      getMovieDetails();
    },
    [id]
  );
  useKey("Escape", () => onSelection(id));

  const {
    Poster,
    Title,
    Released,
    Runtime,
    Genre,
    imdbRating,
    Actors,
    Director,
    Plot,
  } = movie;

  useEffect(
    function () {
      if (!Title) return;
      document.title = `Movie | ${Title}`;

      return function () {
        document.title = "grabPopcorns";
      };
    },
    [Title]
  );

  function onAdd() {
    const newMovie = {
      Poster,
      Title,
      Year: Released,
      imdbID: id,
      runtime: parseInt(Runtime.split(" ")[0]),
      imdbRating: parseInt(imdbRating),
      userRating: rating,
    };

    setWatched((allWatched) => [...allWatched, newMovie]);
    onSelection(id);
  }
  return (
    <>
      {isLoading ? (
        <Message msg={"Loading..."} />
      ) : (
        <div className="selected-movie-details">
          <header className="header">
            <button onClick={() => onSelection(id)}>&larr;</button>
            <img src={Poster} />
            <div className="movie-overview">
              <h2>{Title}</h2>
              <p>
                {Released} &bull; {Runtime}
              </p>
              <p>{Genre}</p>
              <p>
                <span>⭐</span>
                {imdbRating} IMDb rating
              </p>
            </div>
          </header>
          <section>
            <div className="rating">
              {isRated ? (
                <span>You rated this movie {isRated} 🌟</span>
              ) : (
                <StarRating starCount={10} color="gold" onRate={setRating} />
              )}
              {rating && <button onClick={onAdd}>+ Add to watched</button>}
            </div>
            <p>
              <em>{Plot}</em>
            </p>
            <p>Starring : {Actors}</p>
            <p>
              Directed by : <b>{Director}</b>
            </p>
          </section>
        </div>
      )}
    </>
  );
}

export default MovieDetails;
