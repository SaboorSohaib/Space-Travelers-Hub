import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDragons } from '../redux/dragons/dragons';
import ProfileSection from './profileSection';
import './profile.css';
import './rockets.css';
import './dragons/Dragons.css';

function Myprofile() {
  const dispatch = useDispatch();
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

  const dragons = useSelector((state) => state.dragons);
  const effectRan = useRef(false);
  useEffect(() => {
    if (effectRan.current || process.env.NODE_ENV !== 'development') {
      if (dragons.length === 0) {
        dispatch(getAllDragons());
      }
    }
    effectRan.current = true;
  }, []);

  return (
    <div className="profile-section-conatiner">
      <div className="reserved-rockets">
        <h3 className="rockets-title">My Missions</h3>
        <div className="rockets">{missionToShow}</div>
      </div>

      <div className="reserved-rockets">
        <h3 className="rockets-title">My Rockets</h3>
        <div className="rockets">{rocketsToShow}</div>
      </div>

      <div className="reserved-dragons">
        <h3 className="dragons-tit">My Dragons</h3>
        <ul className="dragons-cont">
          {dragons.filter((dragon) => dragon.reserved === true).map((dragon) => (
            <li
              key={dragon.id}
              className="dragon-n"
            >
              {dragon.name}
            </li>
          ))}
        </ul>
      </div>

    </div>

  );
}

export default Myprofile;
