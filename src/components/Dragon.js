import React from 'react';

function Dragon(props) {
  const dragon = props;
  return (
    <div className='dragon'>
      <img src={dragon.image} alt="Dragon" />
      <div className="dragon-details">
        <h3 className="dragon-name">{dragon.name}</h3>
        <p className="dragon-description">{dragon.description}</p>
        <button className='dragon-button' type="button">Reserve Dragon</button>
      </div>
    </div>
  );
}

export default Dragon;
