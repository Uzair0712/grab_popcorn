import { useState } from "react";
import MovieList from "./MovieList";

function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <div className="box">
        <button onClick={() => setIsOpen((open) => !open)}>
          {isOpen ? "-" : "+"}
        </button>
        {isOpen && children}
      </div>
    </>
  );
}
export default Box;
