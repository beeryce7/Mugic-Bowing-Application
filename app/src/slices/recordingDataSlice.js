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
            recordingStartTime: 0,
        },
        reducers: {
            clearRecording(state) {
                state.data = [];
            },
            addRecordingPointIfRecording(state, action){
                console.log(action.payload)
                if(state.isRecording){
                    state.data.push(action.payload);
                }
            },
            startRecording(state){
                state.isRecording = true
                state.recordingStartTime = Date.now()
            },
            stopRecording(state) {
                state.isRecording = false
            }
        }
    }
)

export const { clearRecording, addRecordingPointIfRecording, startRecording, stopRecording } = recordingDataSlice.actions
export default recordingDataSlice.reducer

