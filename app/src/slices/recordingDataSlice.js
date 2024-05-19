import { createSlice } from "@reduxjs/toolkit";


const recordingDataSlice = createSlice(
    {
        name: 'recordingData',
        initialState:{
            data: []
        },
        reducers: {
            clearRecording(state) {
                state.data = [];
            },
            addRecordingPoint(state, action){
                state.data.push(action.payload);
            }
        }
    }
)

export const { clearRecording, addRecordingPoint } = recordingDataSlice.actions
export default recordingDataSlice.reducer

