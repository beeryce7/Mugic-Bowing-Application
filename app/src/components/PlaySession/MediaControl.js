
import React, {useEffect, useState} from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import { selectIsRecording, selectRecordingStartTime, startRecording, stopRecording } from '../../slices/recordingDataSlice'
import { useDispatch, useSelector } from 'react-redux';

const MediaControl = () => {

    const dispatch = useDispatch()
    const isRecording = useSelector(selectIsRecording)
    const recordingStartTime = useSelector(selectRecordingStartTime)

    const [secondsElapsed, setSecondsElapsed] = useState(0)

    var interval = 0

    const updateTimeElapsed = () => {
        setSecondsElapsed(Math.round((Date.now() - recordingStartTime) / 1000))
    }

    const handlePlay = () => {
        console.log("play")
    };

    const handleStop = () => {
        dispatch(stopRecording(), {payload:false})

        /*clearInterval(interval)
        interval = 0
        setSecondsElapsed(0)
        */

        console.log("stop")
    };

    const handleRecord = () => {
        dispatch(startRecording())
        
        /*
        interval = setInterval(() => updateTimeElapsed(), 1000)
        */
        console.log("record")
    };

    return (
        <>
            <PlayArrowOutlinedIcon
                onClick={handlePlay}
                sx={{
                    width: 1/4,
                    height: 50,
                    cursor: 'pointer',
                    p: 3/4,
                }}
            />
            {!isRecording ? (
            <RadioButtonCheckedOutlinedIcon
                onClick={handleRecord}
                sx={{
                    width: 1/5,
                    height: 50,
                    cursor: 'pointer',
                    p: 3/4,
                }}
             />
            ) : (
            <StopOutlinedIcon
                onClick={handleStop}
                sx={{
                    width: 1/4,
                    height: 50,
                    cursor: 'pointer',
                    p: 3/4, 
                }}
            />
            )}

        </>
    );
}

export default MediaControl;