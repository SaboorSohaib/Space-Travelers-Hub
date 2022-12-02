import React from 'react';
import { useSelector } from 'react-redux';
// import { Col, Row } from 'react-bootstrap';
import ProfileSection from './profileSection';
import './profile.css';
import './rockets.css';

function Myprofile() {
  const { rockets } = useSelector((state) => state.rocket);
  const ProfileRockets = rockets.filter((item) => item.reserved === true);
  const rocketsToShow = ProfileRockets.map((item) => (
    <ProfileSection key={item.id} name={item.rocket_name} />
  ));
  const { missions } = useSelector((state) => state.mission);
  const ProfileMissions = missions.filter((item) => item.reserved === true);
  const missionToShow = ProfileMissions.map((item) => (
    <ProfileSection key={item.id} name={item.mission_name} />
  ));

  return (
    <div className="main-container">
      <div className="profile-section-conatiner">
        <div className="reserved-rockets">
          <h3 className="rockets-title">My Rockets</h3>
          <div className="rockets">{rocketsToShow}</div>
        </div>
        <div className="reserved-rockets">
          <h3 className="rockets-title">My Missions</h3>
          <div className="rockets">{missionToShow}</div>
        </div>
      </div>

    </div>
  );
}

export default Myprofile;

// export const Profile = () => {
//   const missionState = useSelector((state) => state.mission);
//   const reservedMission = missionState.filter((mission) => mission.reserved);

//   return (
//     <div className="profileContainer">
//       <Col className="profileColumn">
//         <h3>My Missions</h3>
//         { reservedMission.length === 0 && <p>No Reserved Missions</p>}
//         {reservedMission.map((reserved) => (
//           <Row key={reserved.mission_id} className="profileRow">
//             <h5>{ reserved.mission_name }</h5>
//           </Row>
//         ))}
//       </Col>
//     </div>

//   );
// };
