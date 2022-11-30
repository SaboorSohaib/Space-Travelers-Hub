import React from 'react';
import Mission from './mission';

const Missions = () => (
  <>
    <ul>

      <Mission missionData={
          {
            mission_id: 1,
            mission_name: 'Thaicom',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nulla et sapien luctus venenatis et sit amet neque. Ut sed auctor ante, nec commodo ligula. ',
            status: 'NOT A MEMBER',
          }
          }
      />
      <Mission missionData={
          {
            mission_id: 2,
            mission_name: 'Telstar',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nulla et sapien luctus venenatis et sit amet neque. Ut sed auctor ante, nec commodo ligula. ',
            status: 'NOT A MEMBER',
          }
          }
      />
      <Mission missionData={
          {
            mission_id: 3,
            mission_name: 'Irldium NEXT',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat nulla et sapien luctus venenatis et sit amet neque. Ut sed auctor ante, nec commodo ligula. ',
            status: 'NOT A MEMBER',
          }
          }
      />
    </ul>
  </>
);

export default Missions;
