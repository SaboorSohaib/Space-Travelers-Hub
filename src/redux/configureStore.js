import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './dragons/dragons';

const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
  }
})

export default store;