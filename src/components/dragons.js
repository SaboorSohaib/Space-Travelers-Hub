import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Dragon from './Dragon';
import { getAllDragons } from '../redux/dragons/dragons';
import './Dragons.css';

function Dragons() {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.dragons);
  const effectRan = useRef(false);

  useEffect(() => {
    if (effectRan.current || process.env.NODE_ENV !== 'development') {
      if (dragons.length === 0) {
        dispatch(getAllDragons());
      }
    } 
    return () => effectRan.current = true;
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
                reserved={dragon?.reserved}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Dragons;
