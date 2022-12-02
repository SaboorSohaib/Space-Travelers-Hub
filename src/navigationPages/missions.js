/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import { allMissions } from '../redux/missions/mission.redux';
import Mission from '../components/myMission';

const Missions = () => {
  const dispatch = useDispatch();
  const missionState = useSelector((state) => state.mission);

  useEffect(() => {
    dispatch(allMissions());
  }, []);

  return (
    <Row className="ms-2">
      <Col className="col-3">
        <h2>Mission</h2>
      </Col>
      <Col className="col-6">
        <h2>Description</h2>
      </Col>
      <Col>
        <h2>Status</h2>
      </Col>
      <Col />
      {missionState.map((mission) => {
        const {
          mission_id, mission_name, description, reserved,
        } = mission;
        return (
          <Mission
            key={mission_id}
            missionId={mission_id}
            missionName={mission_name}
            description={description}
            reserved={reserved}
          />
        );
      })}
    </Row>
  );
};

export default Missions;
