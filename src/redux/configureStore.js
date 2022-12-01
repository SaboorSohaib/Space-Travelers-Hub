import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    dragons: dragonsReducer,
  },
}, applyMiddleware(thunk));

export default store;
