import React from 'react';
import { useParams } from 'react-router-dom';
import logementsData from '../../datas/logements.json';

function Appart() {
  const { id } = useParams();

  const appartement = logementsData.find((logement) => logement.id === id);

  return (
    <div>
      <h1> Fiche appartement {id}</h1>
      {appartement && (
        <div>
          <h2>{appartement.title}</h2>
          <img src={appartement.cover} alt={appartement.title} />
          <p>Description: {appartement.description}</p>
        </div>
      )}
    </div>
  );
};

export default Appart;