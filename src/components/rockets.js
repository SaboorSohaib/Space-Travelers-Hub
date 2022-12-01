/* eslint-disable camelcase */
import React from 'react';
import { useDispatch } from 'react-redux';
import { leaveRocket, reserveRocket } from '../redux/rockets/rockets';
import './rockets.css';

const Rockets = (item) => {
  const {
    flickr_images, rocket_name, description, id, reserved,
  } = item;
  const dispatch = useDispatch();
  return (
    <div className="rocket-container">
      <div>
        <img src={flickr_images} className="rocket-img" alt="Rocket" />
      </div>
      <div className="rocket-info">
        <h3>{rocket_name}</h3>
          <p>
            <span
              className="reserve-span"
              style={{
                backgroundColor: reserved ? ' #4e4eff' : 'gray',
                color: reserved ? '#fff' : '#000',
                padding: reserved ? '3px' : '0',
                marginRight: reserved ? '11px' : '0',
                borderRadius: reserved ? '5px' : '0',
              }}
            >
              {reserved && 'Reserved'}
            </span>
            {description}
          </p>
        <button
          style={{
            backgroundColor: reserved ? 'gray' : '#4e4eff',
          }}
          className="rocket-btn"
          type="button"
          onClick={reserved ? () => dispatch(leaveRocket(id)) : () => dispatch(reserveRocket(id))}
        >
          {reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

export default Rockets;
