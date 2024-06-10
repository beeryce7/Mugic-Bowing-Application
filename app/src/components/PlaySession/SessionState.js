import React, {useState} from 'react';
import './SessionState.css'; 
import MediaControl from './MediaControl';
import { TextField } from '@mui/material';
import { selectCountdown, setCountdownSecs } from '../../slices/recordingDataSlice';
import { useSelector, useDispatch } from 'react-redux';

const SessionState = () => {

  const countdown = useSelector(selectCountdown)
  const dispatch = useDispatch()

  return (
    
    <div className="box">

      <div className="media">
        <div className="media-items">
          <MediaControl/>
        </div>
        
        <div className="offset">
          <span>
            <TextField 
              id="outlined-basic" 
              label="Set Countdown" 
              variant="outlined" 
              type="number" 
              defaultValue={3}
              onChange={(e)=> {
                if(e.target.value > 0){
                  console.log("changed time")
                  dispatch(setCountdownSecs(e.target.value))
                }
              }}
            />
          </span>
        </div>
        
      </div>
      

    </div>
  );
};

export default SessionState;