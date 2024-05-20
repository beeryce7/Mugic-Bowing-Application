
import React, {useEffect, useState} from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import { startRecording, stopRecording } from '../../slices/recordingDataSlice'
import { useDispatch, useSelector } from 'react-redux';
import { listenToMugicData } from '../../slices/mugicDataSlice';

const MediaControl = () => {

    const dispatch = useDispatch()
    const isRecording = useSelector((state) => state.recordingData.isRecording)
    const recordingStartTime = useSelector((state) => state.recordingData.recordingStartTime)
    const data = useSelector((state) => state.recordingData.data)
    const mugicData = useSelector((state) => state.mugicData.data);

    const [secondsElapsed, setSecondsElapsed] = useState(0)

    const updateTimeElapsed = () => {
        if(isRecording){
            setSecondsElapsed(Math.round((Date.now() - recordingStartTime) / 1000))
        }
        else{
            setSecondsElapsed(0)
        }
    }
  
    useEffect(() => {
       dispatch(listenToMugicData());
    }, [dispatch]);

    useEffect(() => {
        const interval = setInterval(() => updateTimeElapsed(), 1000)
    })




    const handlePlay = () => {
        console.log("hdslao")
    };

    const handleStop = () => {
        dispatch(stopRecording())
        console.log("hdslao")
    };

    const handleRecord = () => {
        dispatch(startRecording())
        console.log("hdslao")
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
            <p>
                {secondsElapsed}
            </p>

        </>
    );
}

export default MediaControl;