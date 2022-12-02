import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const url = 'https://api.spacexdata.com/v3/missions';

export const allMissions = createAsyncThunk('mission/allMissions', async (_, thunk) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return thunk.rejectWithValue(error.response.data);
  }
});

const MissionSlice = createSlice({
  name: 'mission',
  initialState: [],
  reducers: {
    joinMission: (state, action) => {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: true };
        }
        return { ...mission };
      });
      return newState;
    },
    leaveMission(state, action) {
      return state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, reserved: false };
        }
        return { ...mission };
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(allMissions.fulfilled, (state, action) => action.payload);
  },
});

export const { joinMission, leaveMission } = MissionSlice.actions;
export default MissionSlice.reducer;
