import React from 'react';
import MissionFrame from './Mission';
import styles from './missions.css'

const Mission = () => {
  const missions = [
    {
      id: 1,
      name: 'Telstar',
      description: 'Telstar 18V was launched on a SpaceX Falcon 9 Block 5 rocket from Space Launch Complex 40 (SLC40) at Cape Canaveral Air Force Station, Space Coast, Florida, United States, on September 10, 2018, at 12:45 AM EDT (4:45 UTC). It was deployed into a subsynchronous transfer orbit.',
    },
    {
      id: 2,
      name: 'Telstar',
      description: 'Telstar 18V was launched on a SpaceX Falcon 9 Block 5 rocket from space Launch Complex 40 (SLC40) at Cape Canaveral Air Force Station, Space Coast, Florida, United States, on September 10, 2018, at 12:45 AM EDT (4:45 UTC). It was deployed into a subsynchronous transfer orbit.',
    },
    {
      id: 3,
      name: 'Telstar',
      description: 'Telstar 18V was launched on a SpaceX Falcon 9 Block 5 rocket from space Launch Complex 40 (SLC40) at Cape Canaveral Air Force Station, Space Coast, Florida, United States, on September 10, 2018, at 12:45 AM EDT (4:45 UTC). It was deployed into a subsynchronous transfer orbit.',
    },
  ];
  return (
    <table className={styles.missionWrapper}>
      <thead>
        <tr className={styles.missionRow}>
          <th className={styles.missionTable}>Mission</th>
          <th className={styles.missionTable}>Description</th>
          <th className={styles.missionTable}>Status</th>
        </tr>
      </thead>
      <tbody>
        {missions.map((item) => (
          <tr className={styles.missionRows} key={item.id}>
            <MissionFrame name={item.name} description={item.description} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Mission;
