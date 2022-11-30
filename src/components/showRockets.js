import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import { fetchReockets } from '../redux/rockets/rockets';
import Rockets from './rockets';

const ShowRockets = () => {
  const { rockets, loading } = useSelector(((state) => state.rocketReducer));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReockets());
  }, [dispatch]);

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      {rockets.map((item) => {
        <Rockets
          key={item.id}
          id={item.id}
          flickr_image={item.flickr_images[0]}
          rocket_name={item.rocket_name}
          description={item.description}
        />;
      })}
    </div>
  );
};

export default ShowRockets;

// ShowRockets.propTypes = {
//   rockets: PropTypes.array.isRequired,
// };
