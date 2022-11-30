import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketReducer from './rockets/rockets';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
  },
}, applyMiddleware(thunk));

export default store;
