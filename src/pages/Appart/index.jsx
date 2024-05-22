import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import logementsData from '../../datas/logements.json';
import Caroussel from '../../components/Caroussel'; 
import AppartInfo from '../../components/AppartInfo';
import Collapse from '../../components/Collapse';
import HostInfo from '../../components/HostInfo';
import Rating from '../../components/Rating';
import '../../styles/appart-layout.css'; // Importer le fichier de style pour la mise en page

function Appart() {
  const { id } = useParams();
  const appartement = logementsData.find((logement) => logement.id === id);

  if (!appartement) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="appart-page_wrapper">
      <Caroussel 
          images={appartement.pictures}
          title={appartement.title} 
          />
      {appartement && (
        <div>
            <div className="appart-page-info_container">
              <AppartInfo
                title={appartement.title}
                location={appartement.location}
                tags={appartement.tags}
              />
            <div className="appart-page-host-info_container">
              <HostInfo name={appartement.host.name} picture={appartement.host.picture} />
              <Rating rating={appartement.rating} />
            </div>
          </div>
          <div className="appart-page-collapse_container">
            <Collapse title="Description" content={appartement.description} className="collapse-appart" />
            <Collapse title="Équipements" content={() => (
              <ul>
                {appartement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            )} className="collapse-appart" />
          </div>
      </div>
      )}
    </div>
  );
}

export default Appart;
