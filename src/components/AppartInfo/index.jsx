import React from 'react';
import '../../styles/appartinfo.css';

function ApartmentInfo({ title, location, tags }) {
  return (
    <div className='appartment-info_container'>
      <div className="appartment-info">
        <h2>{title}</h2>
        <p>{location}</p>
      </div>
      <div className='appartments-tag'>
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ApartmentInfo;
