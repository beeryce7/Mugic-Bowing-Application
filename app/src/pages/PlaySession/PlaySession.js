import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import { useSelector } from 'react-redux';
import { Button, Grid, Snackbar } from '@mui/material';
//import DividerStack from '../../components/PlaySession/DividerStack';
import Visualizer from '../../components/visualizer/Visualizer';
import LoadedDataVisual from '../../components/visualizer/LoadedDataVisual';
import { selectRecordingTimer } from '../../slices/recordingDataSlice';


const PlaySession = () => {

  const recordingTimer = useSelector(selectRecordingTimer)

  return (
    <div>
        <Header/>
        <div className="top-graph"><div className="key"><div class="color-block-teacher"></div><div className="change-font">Teacher</div></div></div>
        <div className="top-graph"><div className="key"><div class="color-block-student"></div><div className="change-font">Student</div></div></div>
        <div className="be-on-right">  {recordingTimer}</div>

        <div className="new-graph">
            <LoadedDataVisual/> 
            <Visualizer/>
        </div>
 

        <SessionState/>
    </div> 
  );
};

export default PlaySession;