/* eslint-disable camelcase */

import React from 'react';
// import PropTypes from 'prop-types';

const Mission = (item) => {
  const {
    mission_id, mission_name, description, status,
  } = item;
  return (
    <div>
      <span>{mission_id}</span>
      <h4>{mission_name}</h4>
      <p>{description}</p>
      <span>{status}</span>
      <div>
        <button type="submit">Join Mission</button>
        <br />
      </div>
    </div>
  );
};

// Mission.propTypes = {
//   missionData: PropTypes.shape.isRequired,
// };

export default Mission;
