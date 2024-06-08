import React from 'react';
import './SessionState.css'; 
import MediaControl from './MediaControl';
import { TextField } from '@mui/material';

const SessionState = () => {
  return (
    <div className="box">

      <div className="media">
        <div className="media-items">
          <MediaControl/>
        </div>
        
        <div>Count down: <span><TextField id="outlined-basic" label="Set Countdown" variant="outlined" /></span></div>
        <div> Metronome: <TextField id="outlined-basic" label="set Metronome" variant="outlined" /></div>
      </div>
      <div className="offset-right">Start</div>
      

    </div>
  );
};

export default SessionState;