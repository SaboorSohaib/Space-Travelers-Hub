import React from 'react';
import { useSelector } from 'react-redux';
import ProfileSection from './profileSection';
import './rockets.css';

function Myprofile() {
  const { rockets } = useSelector((state) => state.rocket);
  const ProfileRockets = rockets.filter((item) => item.reserved === true);
  const rocketsToShow = ProfileRockets.map((item) => (
    <ProfileSection key={item.id} name={item.rocket_name} />
  ));

  return (
    <div className="main-container">
      <div className="profile-section-conatiner">
        <div className="reserved-rockets">
          <h3 className="rockets-title">My Rockets</h3>
          <div className="rockets">{rocketsToShow}</div>
        </div>
      </div>

    </div>
  );
}

export default Myprofile;
