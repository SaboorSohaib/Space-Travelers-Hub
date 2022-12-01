/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ADDROCKETS = 'react-group-project/redux/rockets/rockets';
const URL = 'https://api.spacexdata.com/v3/rockets';

export const fetchReockets = createAsyncThunk(
  ADDROCKETS,
  async () => fetch(URL).then((res) => res.json()),
);
const rocketSlice = createSlice(({
  name: 'rockets',
  initialState: {
    rockets: [],
    loading: false,
  },
  extraReducers: {
    [fetchReockets.pending]: (state) => {
      state.loading = true;
    },
    [fetchReockets.fulfilled]: (state, action) => {
      state.loading = false;
      state.rockets = action.payload;
    },
    [fetchReockets.rejected]: (state) => {
      state.loading = false;
    },
  },
}));

export default rocketSlice.reducer;
