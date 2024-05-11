import React from 'react';
import { Link } from 'react-router-dom';
import logementsData from '../../datas/logements.json';
import '../../styles/card.css';

function Card() {
  return (
    <div className="card-container-wrapper">
      <div className="card-container">
        {logementsData.map((logement) => (
          <Link to={`/Appart/${logement.id}`} key={logement.id} className="card-link">
            <div className="card">
              <h2>{logement.title}</h2>
              <img src={logement.cover} alt={logement.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Card;