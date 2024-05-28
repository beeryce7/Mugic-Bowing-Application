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
<<<<<<< HEAD
        
        <div className="offset">Count down: <span><TextField id="outlined-basic" label="Set Countdown" variant="outlined" /></span></div>
        <div> Metronome: <TextField id="outlined-basic" label="set Metronome" variant="outlined" /></div>
=======
        <div class="vertical-line"></div>
        <div className="move-left">Count down</div>
        <div className="offset-left">Count down is 3 sec</div>
>>>>>>> 48f9fd2594b13c9cabd519c24cfd36353b1fe052
      </div>
      

    </div>
  );
};

export default SessionState;