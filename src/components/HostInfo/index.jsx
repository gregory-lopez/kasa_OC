import '../../styles/hostinfo.css'

import React from 'react';

function HostInfo({ name, picture }) {

  const [firstName, lastName] = name.split(' ');

  return (
    <div className="host-info">
      <div className='host-name'>
        <p>{firstName}</p>
        <p>{lastName}</p>
      </div>
      <div className='host-picture'>
      <img src={picture} alt={name} />
      </div>
    </div>
  );
}

export default HostInfo;
