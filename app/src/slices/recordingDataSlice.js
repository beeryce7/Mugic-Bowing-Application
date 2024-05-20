import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const beginCountdown = createAsyncThunk(
    'recordingData/beginCountdown',
    async(_, {dispatch}) => {

    }
)


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
            addRecordingPointIfRecording: (state, action) => {
                if(state.isRecording){
                    state.data.push(action.payload);
                }
            },
            startRecording: (state) => {
                state.isRecording = true
                state.recordingStartTime = Date.now()
                state.data = []
            },
            stopRecording: (state) => {
                state.isRecording = false
            }
        }
    }
)

export const { clearRecording, addRecordingPointIfRecording, startRecording, stopRecording } = recordingDataSlice.actions
export default recordingDataSlice.reducer

