import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dragon from './Dragon';
import { getAllDragons } from '../redux/dragons/dragons';
import './Dragons.css';

function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);

  useEffect(() => {
    if (dragons.length === 0) {
      dispatch(getAllDragons());
    }
  }, []);

  return (
    <div>
      <ul className="dragons-container">
        {
          dragons.map((dragon) => (
            <li key={dragon.id}>
              <Dragon
                id={dragon.id}
                description={dragon.description}
                name={dragon.name}
                image={dragon.flickr_images}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Dragons;
