
import React, { useState} from 'react';
import './MediaControl.css';

import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Typography, Snackbar } from '@mui/material';
import { buildTeacherFile, buildTeacherStudentFile } from '../../utils/format';
import { loadRecording, selectLoadedType, selectTeacherData} from '../../slices/loadedDataSlice';
import { selectIsRecording, selectRecordingStartTime, startCountdown, stopRecording, selectCountdown, selectRecordingData, clearRecording, } from '../../slices/recordingDataSlice'
import { useDispatch, useSelector } from 'react-redux';

const MediaControl = () => {

    const dispatch = useDispatch()
    const isRecording = useSelector(selectIsRecording)
    const recordingData = useSelector(selectRecordingData)
    const recordingStartTime = useSelector(selectRecordingStartTime)
    const countdown = useSelector(selectCountdown)
    const loadedType = useSelector(selectLoadedType)
    const teacherData = useSelector(selectTeacherData)

    const [secondsElapsed, setSecondsElapsed] = useState(0)
    const [loadSnackbarOpen, setLoadSnackbarOpen] = React.useState(false)

    var interval = 0

    const updateTimeElapsed = () => {
        setSecondsElapsed(Math.round((Date.now() - recordingStartTime) / 1000))
    }

    const handleRedo= () => {
        dispatch(clearRecording())
    };

    const handleStop = () => {
        dispatch(stopRecording())
    };

    const handleRecord = () => {
        dispatch(startCountdown())
    };

    const handleSave = () => {
        let fileString = ""
    
        console.log("saving file")
        
        if(loadedType == "None"){
          fileString = buildTeacherFile(recordingData, recordingStartTime);
        }
        else{ // student data contained in recording slice
          fileString = buildTeacherStudentFile(teacherData, recordingData, recordingStartTime)
        }
        window.electronAPI.saveFile(fileString)
      }
    
    const handleLoad = async () => {
        const {fileName, message, cancelled} = await window.electronAPI.loadFile();
        if(!cancelled){
            dispatch(loadRecording(fileName, message))
            setLoadSnackbarOpen(true)
        }

    }

    const iconStyles = {
        width: { xs: '50px', sm: '80px', md: '100px' },
        height: { xs: '50px', sm: '80px', md: '100px' },      
        cursor: 'pointer',
        p: 3/4,
    };

    return (
        <>
            {!isRecording && (!countdown.isCountingDown) ? (
                <Box className="icon-container">
                    <RadioButtonCheckedOutlinedIcon
                        onClick={handleRecord}
                        sx={{
                            ...iconStyles,
                            color: 'red',
                        }}
                    />
                    <Typography variant="subtitle1">
                        RECORD
                    </Typography>
                </Box>
            ) : (
                <Box className="icon-container">
                    <StopOutlinedIcon
                        onClick={handleStop}
                        sx={{
                            ...iconStyles,
                        }}
                    />
                    <Typography variant="subtitle1">
                        STOP
                    </Typography>
                </Box>
            )}
            <Box className="icon-container">
                <ReplayIcon
                    onClick={handleRedo}
                    sx={{
                        ...iconStyles,
                    }}
                />
                <Typography variant="subtitle1" >
                    REDO
                </Typography>
            </Box>
            <Box className="icon-container">
                <SaveIcon
                    onClick={handleSave}
                    sx={{
                        ...iconStyles,
                    }}
                />
                <Typography variant="subtitle1" >
                    SAVE
                </Typography>
            </Box>

            <Snackbar
                open={loadSnackbarOpen}
                message="File Loaded!"
                autoHideDuration={2000}
                onClose={()=>setLoadSnackbarOpen(false)}
            />
        </>
    );
}

export default MediaControl;