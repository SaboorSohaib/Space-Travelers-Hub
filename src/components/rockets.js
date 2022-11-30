/* eslint-disable camelcase */
import React from 'react';

const Rockets = (item) => {
  const { flickr_image, rocket_name, description } = item;
  return (
    <div className="rocket-container">
      <div>
        <img src={flickr_image} className="rocket-img" alt="Rocket" />
      </div>
      <div>
        <h3>{rocket_name}</h3>
        <p>{description}</p>
        <button className="rocket-btn" type="button">Reserve Rocket</button>
      </div>
    </div>
  );
};

export default Rockets;
