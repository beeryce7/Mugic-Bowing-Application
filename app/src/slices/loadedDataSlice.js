import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quaternionToEuler } from "./mugicDataSlice";

function extractDataFromFileString(fileString){

    const lines = fileString.split('\n');
    const date = lines[0] ;
    const hasStudentData = lines[1];
    const totalLines = lines[2];
    const teacherData = []
    const studentData = []

    if(hasStudentData == "Teacher"){
        for(let i = 3; i < 3+totalLines; ++i){
            const line = lines[i].split(',');
            teacherData.push(line)
        }
    }

    else { //case: teacher and student data

    }
    return {
        date: date,
        hasStudentData: hasStudentData,
        studentData: studentData,
        teacherData: teacherData,
    }

    
}

const loadedDataSlice = createSlice({
    name: 'loadedData',

    initialState:{

        hasStudentData: false,
        dateCreated: 0,

        teacherData: [],
        studentData: [],
        fileName: "",
    },

    reducers: {
        loadRecording: (state, action) => {
            state.teacherData = action.payload.teacher;
            state.studentData = action.payload.student;
            state.fileName = action.payload.file;
            state.hasStudentData = action.payload.hasStudentData
        },
    },
})

export const { loadRecording } = recordingDataSlice.actions
export default loadedDataSlice.reducer

