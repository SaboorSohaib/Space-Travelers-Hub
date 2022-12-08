import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rockets';
import Rockets from './rockets';
import './rockets.css';

function ShowRockets() {
  const { rockets, loading } = useSelector((state) => state.rocket);
  const dispatch = useDispatch();
  useEffect(() => {
    if (loading === 'loading') {
      dispatch(fetchRockets());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      {rockets.map((item) => (
        <Rockets
          key={item.id}
          id={item.id}
          flickr_images={item.flickr_images[0]}
          rocket_name={item.rocket_name}
          description={item.description}
          reserved={item.reserved}
        />
      ))}
    </div>
  );
}

export default ShowRockets;
