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
                const totalDataPoints = parseInt(lines[2]);
                const teacherData = []
                const studentData = []

                if(!hasStudentData){

                    for(let i = 3; i < totalDataPoints+3; ++i){ //offset of 3

                        const line = lines[i].split(',');
                        teacherData.push(line)
                    }
                }

                else { //case: teacher and student data

                }
                const payload = {
                    payload:{
                        date: date,
                        hasStudentData: hasStudentData,
                        student: studentData,
                        teacher: teacherData,
                        file: fileName
                    }
                }
                console.log(payload)
                return payload
            }
        },

    },
    selectors: {
        selectFileName: (state) => state.fileName
    }
})
export default loadedDataSlice.reducer


export const { loadRecording } = loadedDataSlice.actions
//export const { selectFileName } = loadedDataSlice.getSelectors((state) => state.loadedData)
//console.log(selectFileName)


