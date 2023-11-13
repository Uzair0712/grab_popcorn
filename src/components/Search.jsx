import { useRef } from "react";
import { useKey } from "../useKey";

function Search({ query, setQuery }) {
  const searchEl = useRef(null);

  useKey("Enter", function () {
    if (document.activeElement === searchEl.current) return;
    searchEl.current.focus();
    setQuery("");
  });

  return (
    <input
      type="text"
      placeholder="Search movies..."
      className="search-bar"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={searchEl}
    />
  );
}

export default Search;
