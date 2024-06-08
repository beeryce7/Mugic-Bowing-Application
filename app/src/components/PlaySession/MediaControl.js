
import React, {useEffect, useState} from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import { startRecording, stopRecording } from '../../slices/recordingDataSlice'
import { useDispatch, useSelector } from 'react-redux';

const MediaControl = () => {

    const dispatch = useDispatch()
    const isRecording = useSelector((state) => state.recordingData.isRecording)
    const recordingStartTime = useSelector((state) => state.recordingData.recordingStartTime)

    const [secondsElapsed, setSecondsElapsed] = useState(0)

    var interval = 0

    const updateTimeElapsed = () => {
        setSecondsElapsed(Math.round((Date.now() - recordingStartTime) / 1000))
    }

    const handlePlay = () => {
        console.log("play")
    };

    const handleStop = () => {
        dispatch(stopRecording())

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
                    width: 110,
                    height: 110,
                    cursor: 'pointer',
                    p: 3/4,
                }}
            />
            {!isRecording ? (
            <RadioButtonCheckedOutlinedIcon
                onClick={handleRecord}
                sx={{
                    width: 100,
                    height: 100,
                    cursor: 'pointer',
                    p: 3/4,
                }}
             />
            ) : (
            <StopOutlinedIcon
                onClick={handleStop}
                sx={{
                    width: 110,
                    height: 110,
                    cursor: 'pointer',
                    p: 3/4, 
                }}
            />
            )}

        </>
    );
}

export default MediaControl;