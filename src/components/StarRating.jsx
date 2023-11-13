import { useState } from "react";
import Star from "./Star";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "2rem",
  color: "black",
};
const startContainerStyle = {
  display: "flex",
};

function StarRating({
  starCount = 5,
  color = "yellow",
  size = "24px",
  onRate,
}) {
  // Defining Some inline Styling based on props
  const ratingStyle = {
    fontSize: "2rem",
    color,
  };

  const [rating, setRating] = useState(null);
  const [tempRating, setTempRating] = useState(null);
  function handleRating(rating) {
    setRating(rating);
    onRate(rating);
  }
  function hadleTempRating(temp) {
    setTempRating(temp);
  }
  return (
    <div style={containerStyle}>
      <div style={startContainerStyle}>
        {Array.from({ length: starCount }, (_, i) => {
          return (
            <Star
              key={i}
              onClick={() => handleRating(i + 1)}
              onMouseEnter={() => hadleTempRating(i + 1)}
              onMouseLeave={() => setTempRating(null)}
              rated={rating >= i + 1 || tempRating >= i + 1}
              color={color}
              size={size}
            />
          );
        })}
      </div>
      <p style={ratingStyle}>{rating || tempRating || ""}</p>
    </div>
  );
}

export default StarRating;
