import { useState } from "react";
import Box from "./components/Box";
import Logo from "./components/Logo";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MovieList from "./components/MovieList";
import WatchedMovieList from "./components/WatchedMovieList";
import WatchedSummary from "./components/WatchedSummary";
import Message from "./components/Message";
import { useMovies } from "./useMovies";
import MovieDetails from "./components/MovieDetails";
import { useLocalStorage } from "./useLocalStorage";
import Stats from "./components/NumResults";

function App() {
  const [query, setQuery] = useState("");
  const [selecteId, setSeletedId] = useState(null);
  const { movies, isLoading, error } = useMovies(query);
  const [watched, setWatched] = useLocalStorage([], "watched");

  function handleSelection(id) {
    setSeletedId((curId) => (curId === id ? null : id));
  }

  return (
    <div className="app">
      <Navbar>
        <Logo />
        <Search query={query} setQuery={setQuery} />
        <Stats numResults={movies.length} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Message msg={"Loading..."} />}
          {error && !isLoading && <Message msg={error} />}
          {!error && !isLoading && (
            <MovieList movies={movies} onSelection={handleSelection} />
          )}
        </Box>
        <Box>
          {selecteId ? (
            <MovieDetails
              id={selecteId}
              onSelection={handleSelection}
              watchedMovies={watched}
              setWatched={setWatched}
            />
          ) : (
            <>
              <WatchedSummary watched={watched} />
              <WatchedMovieList
                watchedMovies={watched}
                setWatched={setWatched}
              />
            </>
          )}
        </Box>
      </Main>
    </div>
  );
}

export default App;
