import React from "react";
import { Card } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";

function OrchidCard({ orchid, onOrchidClick }) {
  const { name, image, origin, color, rating, isSpecial, isNatural, category } =
    orchid;

  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;
    
    for (let i = 1; i <= maxStars; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} style={{ color: "#ffc107" }} />);
      } else {
        stars.push(<FaRegStar key={i} style={{ color: "#ffc107" }} />);
      }
    }
    
    return stars;
  };

  const handleClick = () => {
    if (onOrchidClick) {
      onOrchidClick(orchid);
    }
  };
  return (
    <Card
      className="m-2 orchid-card"
      style={{ width: "18rem", cursor: "pointer" }}
      onClick={handleClick}
    >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          <strong>Origin:</strong> {origin}
          <br />
          <strong>Color:</strong> {color}
          <br />
          <strong>Category:</strong> {category}
          <br />
          <strong>Rating:</strong> {renderStars(rating)}
          <br />
          {isSpecial && <span className="badge bg-warning">Special</span>}
          {isNatural ? (
            <span className="badge bg-success ms-1">Natural</span>
          ) : (
            <span className="badge bg-secondary ms-1">Hybrid</span>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default OrchidCard;
