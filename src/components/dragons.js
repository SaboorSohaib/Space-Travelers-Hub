import React from 'react';
import Dragon from './Dragon';
import './Dragons.css';

function Dragons() {
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
                image={dragon.flickr_images[0]}
              />
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Dragons;
