import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { retrieveMugicData } from "./mugicDataSlice";
import { quaternionToEuler } from "./mugicDataSlice";

const recordingDataSlice = createSlice({
    name: 'recordingData',

    initialState:{
        data: [],
        isRecording: false,
        countdown: 3,
        recordingStartTime: Date.now(),
    },

    reducers: {
        clearRecording: (state) => {
            state.data = [];
        },
        startRecording: (state) => {
            state.isRecording = true
            state.recordingStartTime = Date.now()
            state.data = []
        },
        stopRecording: (state, action) => {

            state.isRecording = false
        }
    },

    extraReducers: (builder) => {
        builder.addCase(retrieveMugicData.fulfilled, (state, action) => {
            if(state.isRecording){
                const msg = action.payload
                const data = quaternionToEuler(msg[13], msg[14], msg[15], msg[16])
                state.data.push([data.yaw, data.pitch, data.roll]);
            }
        })
    },
    selectors: {
        selectRecordingData: (state) => state.data,
        selectRecordingStartTime: (state) => state.recordingStartTime,
        selectIsRecording: (state) => state.isRecording,
    }
})

export const { clearRecording, startRecording, stopRecording } = recordingDataSlice.actions
export const { selectRecordingData, selectRecordingStartTime, selectIsRecording } = recordingDataSlice.selectors
export default recordingDataSlice.reducer

