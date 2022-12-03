import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/mission.redux';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    dragons: dragonsReducer,
    mission: missionReducer,
  },
}, applyMiddleware(thunk));

export default store;
