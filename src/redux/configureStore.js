import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import dragonsReducer from './dragons/dragons';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  },
}, applyMiddleware(thunk, logger));

export default store;
