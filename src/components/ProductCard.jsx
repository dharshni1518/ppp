import RatingWidget from "./RatingWidget";

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", width: "250px" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%" }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>⭐ Average Rating: {product.avgRating.toFixed(1)} ({product.totalRatings} reviews)</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

export default ProductCard;
