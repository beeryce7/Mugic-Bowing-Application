import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

//setup for using async thunks in createSlice
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export function quaternionToEuler(q0, q1, q2, q3){
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
    battery: 0,
    seqNum: 0,
  },

  reducers: (create) => ({
    updateMugicData: create.reducer((state, action) => {
      state.data = action.payload;
    }),

    retrieveMugicData: create.asyncThunk(async (state) => {
      const msg = await window.electronAPI.retrieveMugicData()
      return msg
    }, 
    {
      fulfilled: (state, action) => {
        const msg = action.payload
        const eulerData = quaternionToEuler(msg[13], msg[14], msg[15], msg[16])
        state.data = eulerData
        state.battery = quaternionToEuler(msg[17])
        
      }
    }),
  }),

  selectors: {
    selectMugicData: (state) => state.data
  }
})

// Action creators are generated for each case reducer function
export const { updateMugicData, retrieveMugicData } = mugicDataSlice.actions


export const { selectMugicData } = mugicDataSlice.selectors

export default mugicDataSlice.reducer