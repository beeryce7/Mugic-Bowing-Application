import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'
import {addRecordingPointIfRecording} from './recordingDataSlice';

//setup for using async thunks in createSlice
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

/*
export const listenToMugicData = createAsyncThunk(
  'mugicData/listenToMugicData',
  async (_, { dispatch }) => {
    
    window.electronAPI.onMugicMessage((msg) => {
      let q0 = msg[13]
      let q1 = msg[14]
      let q2 = msg[15]
      let q3 = msg[16]
  
      let yr = -Math.atan(-2 * q1 * q2 + 2 * q0 * q3, q2 * q2 - q3 * q3 - q1 * q1 + q0 * q0);
      let pr = Math.asin(2 * q2 * q3 + 2 * q0 * q1);
      let rr = Math.atan2(-2 * q1 * q3 + 2 * q0 * q2, q3 * q3 - q2 * q2 - q1 * q1 + q0 * q0);

      setTimeout(() => {
        dispatch(updateMugicData({
          yaw: Math.round(yr * 180 / Math.PI),
          pitch: Math.round(pr * 180 / Math.PI),
          roll: Math.round(rr * 180 / Math.PI),
        }));

        dispatch(addRecordingPointIfRecording(
          [Math.round(yr * 180 / Math.PI), Math.round(pr * 180 / Math.PI), Math.round(rr * 180 / Math.PI)]
        ));
      }, 300);
      
    });
    
  }
);
*/

function quaternionToEuler(q0, q1, q2, q3){
  let yr = -Math.atan(-2 * q1 * q2 + 2 * q0 * q3, q2 * q2 - q3 * q3 - q1 * q1 + q0 * q0);
  let pr = Math.asin(2 * q2 * q3 + 2 * q0 * q1);
  let rr = Math.atan2(-2 * q1 * q3 + 2 * q0 * q2, q3 * q3 - q2 * q2 - q1 * q1 + q0 * q0);

  return {
    yaw: Math.round(yr * 180 / Math.PI),
    pitch: Math.round(pr * 180 / Math.PI),
    roll: Math.round(rr * 180 / Math.PI),
  }
}


export const mugicDataSlice = createAppSlice({
  name: 'mugicData',

  initialState: {
    data: {
        yaw: 0,
        pitch: 0,
        roll: 0,
    },
  },

  reducers: (create) => ({
    updateMugicData: create.reducer((state, action) => {
      state.data = action.payload;
    }),
    retrieveMugicData: create.asyncThunk(async (state) => {
      console.log("retrieving data")
      let msg = await window.electronAPI.retrieveMugicData()
      return msg
    }, 
    {
      fulfilled: (state, action) => {
        let msg = action.payload
        state.data = quaternionToEuler(msg[13], msg[14], msg[15], msg[16])
      }
    }),
  }),

  selectors: {
    selectData: (state) => state.data
  }
})

// Action creators are generated for each case reducer function
export const { updateMugicData, retrieveMugicData } = mugicDataSlice.actions


export const { selectData } = mugicDataSlice.selectors

export default mugicDataSlice.reducer