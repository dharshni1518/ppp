import { useState } from "react";

function RatingWidget({ productId, onRatingSubmit }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleSubmit = () => {
    if (rating < 1 || rating > 5) return;
    onRatingSubmit(productId, rating);
    setRating(0); // Reset rating after submission
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          onClick={() => setRating(star)}
          style={{ cursor: "pointer", color: star <= (hoveredRating || rating) ? "gold" : "gray", fontSize: "20px" }}
        >
          ★
        </span>
      ))}
      <button onClick={handleSubmit} style={{ marginLeft: "10px" }}>Submit</button>
    </div>
  );
}

export default RatingWidget;
