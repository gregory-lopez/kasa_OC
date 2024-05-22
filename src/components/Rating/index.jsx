import React from 'react';
import filledStarImage from '../../assets/filled_star.png';
import emptyStarImage from '../../assets/empty_star.png';
import '../../styles/rating.css';

function Rating({ rating }) {
  const roundedRating = Math.round(rating); // Arrondi à la note entière la plus proche
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<img key={i} src={filledStarImage} alt="Filled Star" />);
    } else {
      stars.push(<img key={i} src={emptyStarImage} alt="Empty Star" />);
    }
  }

  return <div className="rating">{stars}</div>;
}

export default Rating;
