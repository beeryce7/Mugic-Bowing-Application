
import React, {useEffect} from 'react';
import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
import StopOutlinedIcon from '@mui/icons-material/StopOutlined';
import RadioButtonCheckedOutlinedIcon from '@mui/icons-material/RadioButtonCheckedOutlined';

import { startRecording, stopRecording } from '../../slices/recordingDataSlice'
import { useDispatch, useSelector } from 'react-redux';
import { listenToMugicData } from '../../slices/mugicDataSlice';

const MediaControl = () => {

    const dispatch = useDispatch()
    const isRecording = useSelector((state) => state.recordingData.isRecording)
    const data = useSelector((state) => state.recordingData.data)

    const mugicData = useSelector((state) => state.mugicData.data);
  
    useEffect(() => {
       dispatch(listenToMugicData());
    }, [dispatch]);


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

        </>
    );
}

export default MediaControl;