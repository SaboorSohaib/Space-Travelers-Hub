import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import './mission.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Button, Col, Row, Alert,
} from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/missions/mission.redux';

const Mission = ({
  missionName, description, reserved, missionId,
}) => {
  const dispatch = useDispatch();

  const joinMissionHandler = (id) => {
    dispatch(joinMission(id));
  };

  const leaveMissionHandler = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <Row className="ps-2 mission">
      <Col className="col-3 column">
        <h4>{missionName}</h4>
      </Col>
      <Col className="col-6 column">
        <p>{description}</p>
      </Col>
      <Col className="d-flex align-items-center justify-content-center column">
        {reserved
          ? (
            <Alert variant="success" className="p-1 active_member">
              Active Member
            </Alert>
          )
          : (
            <Alert variant="secondary" className="p-1 not_a_member">
              Not a member
            </Alert>
          )}

      </Col>
      <Col className="d-flex align-items-center justify-content-center">
        {reserved
          ? <Button variant="danger" className="leave_btn" onClick={() => leaveMissionHandler(missionId)}>Leave Mission</Button>
          : <Button variant="primary" className="join_btn" onClick={() => joinMissionHandler(missionId)}>Join Mission</Button>}
      </Col>
    </Row>
  );
};

Mission.propTypes = {
  missionName: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  missionId: PropTypes.string.isRequired,
};

export default Mission;
