import React from 'react';
import PropTypes from 'prop-types';

const Mission = ({ missionData }) => (
  <>
    <div>
      <span>{missionData.mission_id}</span>
      <h4>{missionData.mission_name}</h4>
      <p>{missionData.description}</p>
      <span>{missionData.status}</span>
      <div>
        <button type="submit">Join Mission</button>
        <br />
      </div>
    </div>
  </>
);

Mission.propTypes = {
  missionData: PropTypes.shape.isRequired,
};

export default Mission;
