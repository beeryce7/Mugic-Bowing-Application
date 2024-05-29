import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { quaternionToEuler } from "./mugicDataSlice";


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
        loadRecording: {
            reducer: (state, action) => {
                state.teacherData = action.payload.teacher;
                state.studentData = action.payload.student;
                state.fileName = action.payload.file;
                state.dateCreated = action.payload.date;
                state.hasStudentData = action.payload.hasStudentData;
            },
            prepare: (fileName, fileString) => { //parses fileName and fileString
                
                const lines = fileString.split('\n');
                
                const date = lines[0] ;
                const hasStudentData = (lines[1] !== "Teacher");
                const totalLines = lines[2];
                const teacherData = []
                const studentData = []

                if(!hasStudentData){
                    console.log(lines)
                    for(let i = 3; i < totalLines+2; ++i){
                        const line = lines[i].split(',');
                        teacherData.push(line)
                    }
                }

                else { //case: teacher and student data

                }
                const payload = {
                    date: date,
                    hasStudentData: hasStudentData,
                    student: studentData,
                    teacher: teacherData,
                    fileName: fileName
                }
                console.log(payload)
                return payload
            }
        },

    },
})

export const { loadRecording } = loadedDataSlice.actions
export default loadedDataSlice.reducer

