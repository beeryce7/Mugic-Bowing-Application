
import React, { useState} from 'react';
import './MediaControl.css';

import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';
import ReplayIcon from '@mui/icons-material/Replay';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Typography } from '@mui/material';

import { selectIsRecording, selectRecordingStartTime, startCountdown, stopRecording, selectCountdown} from '../../slices/recordingDataSlice'
import { useDispatch, useSelector } from 'react-redux';

const MediaControl = () => {

    const dispatch = useDispatch()
    const isRecording = useSelector(selectIsRecording)
    const recordingStartTime = useSelector(selectRecordingStartTime)
    const countdown = useSelector(selectCountdown)

    const [secondsElapsed, setSecondsElapsed] = useState(0)

    var interval = 0

    const updateTimeElapsed = () => {
        setSecondsElapsed(Math.round((Date.now() - recordingStartTime) / 1000))
    }

    const handleRedo= () => {
        console.log("redo")
    };

    const handleStop = () => {
        dispatch(stopRecording())
    };

    const handleRecord = () => {
        dispatch(startCountdown())
    };

    const handleSave = () => {
        console.log("save");
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
        </>
    );
}

export default MediaControl;