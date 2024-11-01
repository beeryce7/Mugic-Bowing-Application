import React from 'react';
import './RecordSession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import { Button, Grid, Snackbar } from '@mui/material';
import { useSelector } from 'react-redux';
import { selectRecordingTimer } from '../../slices/recordingDataSlice';
import Visualizer from '../../components/visualizer/Visualizer';

const RecordSession = () => {

  const recordingTimer = useSelector(selectRecordingTimer)

  return (
    <div>
    <Header/>

    <Grid item xs={6}> 
      <div className="be-on-right">
        {recordingTimer}
      </div>
    </Grid>
    
  
    
    
    <div className="new-graph">
      <Visualizer 
        isRecordPage={true}
      />
    </div>

    <SessionState/>

    </div> 
  );
};



export default RecordSession;