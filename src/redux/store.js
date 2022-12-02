import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './missions/mission.redux';

export default configureStore({
  reducer: {
    mission: missionReducer,
  },
});
