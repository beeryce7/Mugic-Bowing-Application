import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit'

//setup for using async thunks in createSlice
const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
})

export function quaternionToEuler(q0, q1, q2, q3){
  // turn right is positive
  let yr = Math.atan2(2 * q1 * q2 + 2 * q0 * q3, q2 * q2 - q3 * q3 - q1 * q1 + q0 * q0);
  // lift up left positive
  let pr = Math.asin(2 * q2 * q3 + 2 * q0 * q1);
  // lift top is positive
  let rr = -Math.atan2(-2 * q1 * q3 + 2 * q0 * q2, q3 * q3 - q2 * q2 - q1 * q1 + q0 * q0);
  rr = rr < 0 ? rr + Math.PI : rr - Math.PI;

  return {
    yaw: Math.round(yr * 180 / Math.PI),
    pitch: Math.round(rr * 180 / Math.PI),
    roll: Math.round(pr * 180 / Math.PI),
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
    calibration: {
      yawOffset: 0,
      pitchOffset: 0,
      rollOffset: 0,
    },
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

        if(state.calibration){
          const calibratedYaw = (eulerData.yaw - state.calibration.yawOffset + 360) % 360;
          const calibratedPitch = (eulerData.pitch - state.calibration.pitchOffset + 360) % 360;
          const calibratedRoll = (eulerData.roll - state.calibration.rollOffset + 360) % 360;
  
          state.data = {
            yaw: calibratedYaw > 180 ? calibratedYaw - 360 : calibratedYaw,
            pitch: calibratedPitch > 180 ? calibratedPitch - 360 : calibratedPitch,
            roll: calibratedRoll > 180 ? calibratedRoll - 360 : calibratedRoll,
          };
        }else{
          state.data = eulerData
        }
  
        state.battery = msg[17]
        
      }
    }),
    calibrateDevice: create.asyncThunk(async () => {
      const msg = await window.electronAPI.retrieveMugicData();
      const eulerData = quaternionToEuler(msg[13], msg[14], msg[15], msg[16]);
      return {
        yawOffset: eulerData.yaw,
        pitchOffset: eulerData.pitch,
        rollOffset: eulerData.roll,
      };
    }, {
      fulfilled: (state, action) => {
        state.calibration = action.payload;
      },
    }),
  }),

  selectors: {
    selectMugicData: (state) => state.data,
    selectBattery: (state) => state.battery,
    selectIsConnected: (state) => state.battery > 1
  }
})

// Action creators are generated for each case reducer function
export const { updateMugicData, retrieveMugicData, calibrateDevice } = mugicDataSlice.actions

export const { selectMugicData, selectBattery, selectIsConnected } = mugicDataSlice.selectors

export default mugicDataSlice.reducer