import React from 'react';
import Dragon from './Dragon';
import './Dragons.css';

function Dragons() {
  const dragons = [
    {
      id: 1,
      name: 'Dragon 1',
      description: 'Dragon is a reusable spacecraft developed by SpaceX, an American private space transportation company based in Hawthorne, California. Dragon is launched into space by the SpaceX Falcon 9 two-stage-to-orbit launch vehicle. The Dragon spacecraft was originally designed for human travel, but so far has only been used to deliver cargo to the International Space Station (ISS).',
      flickr_images: [],
    },
  ];
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
