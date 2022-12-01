/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ROCKETS = 'react-group-project/redux/rockets/rockets';
const URL = 'https://api.spacexdata.com/v3/rockets';

const fetchRockets = createAsyncThunk(ROCKETS, async () => fetch(URL).then((res) => res.json()));
const rocketSlice = createSlice({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: 'loading',
  },
  reducers: {
    reserveRocket: (state, action) => {
      const rockets = state.rockets.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, reserved: true };
          return item;
        }
        return item;
      });
      return { ...state, rockets };
    },
    leaveRocket: (state, action) => {
      const rockets = state.rockets.map((item) => {
        if (item.id === action.payload) {
          item = { ...item, reserved: false };
          return item;
        }
        return item;
      });
      return { ...state, rockets };
    },
  },
  extraReducers: {
    [fetchRockets.fulfilled]: (state, action) => {
      state.rockets = action.payload;
      state.loading = 'fulfilled';
    },
  },
});

export const { reserveRocket, leaveRocket } = rocketSlice.actions;
export { fetchRockets };
export default rocketSlice.reducer;
