import React from 'react';

const Rockets = (item) => {
  const { flickerImage, rocketName, description } = item;
  return (
    <div>
      <div>
        <img src={flickerImage} className="rocket-img" alt="Rocket" />
      </div>
      <div>
        <h3>{rocketName}</h3>
        <p>{description}</p>
        <button className="rocket-btn" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rockets;
