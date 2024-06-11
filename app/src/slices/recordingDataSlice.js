import { createSlice } from "@reduxjs/toolkit";
import { retrieveMugicData } from "./mugicDataSlice";
import { quaternionToEuler } from "./mugicDataSlice";
import { POLL_RATE } from "../App";

const MAX_RECORDING_LENGTH = 30

const recordingDataSlice = createSlice({
    name: 'recordingData',

    initialState:{
        data: [],
        isRecording: false,
        countdown: {
            isCountingDown: false,
            timer: 3,
            maxTimer: 3,
        },
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
        stopRecording: (state) => {
            state.isRecording = false
            state.countdown.isCountingDown = false;
        },
        startCountdown: (state) => {
            state.countdown.isCountingDown = true;
            state.countdown.timer = state.countdown.maxTimer
        },
        tickCountdown: (state) => {
            if(state.countdown.isCountingDown){             
                if(state.countdown.timer <= 0){
                    state.countdown.isCountingDown = false
                    
                    //starts recording
                    console.log("Recording Started")
                    state.isRecording = true
                    state.recordingStartTime = Date.now()
                    state.data = []
                }
                else{
                    state.countdown.timer -= 1;
                }
            }
        },

        setCountdownSecs: (state, action) => {
            state.countdown.maxTimer = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(retrieveMugicData.fulfilled, (state, action) => {
            if(state.isRecording){
                const msg = action.payload
                const data = quaternionToEuler(msg[13], msg[14], msg[15], msg[16])
                state.data.push([data.yaw, data.pitch, data.roll]);

                //Stop mugic data upon reaching max length
                if(state.data.length >= MAX_RECORDING_LENGTH / (POLL_RATE/1000)){ 
                    state.isRecording = false;
                }
            }
        })
    },
    selectors: {
        selectRecordingData: (state) => state.data,
        selectRecordingStartTime: (state) => state.recordingStartTime,
        selectIsRecording: (state) => state.isRecording,
        selectRecordingTimer: (state) => (Math.round(state.data.length * 5)/100).toFixed(2),
        selectCountdown: (state) => state.countdown
    }
})

export const { clearRecording, startRecording, stopRecording, startCountdown, tickCountdown, setCountdownSecs } = recordingDataSlice.actions
export const { selectRecordingData, selectRecordingStartTime, selectIsRecording, selectCountdown, selectRecordingTimer } = recordingDataSlice.selectors
export default recordingDataSlice.reducer

