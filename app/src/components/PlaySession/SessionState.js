import React, {useState} from 'react';
import './SessionState.css'; 
import MediaControl from './MediaControl';
import { TextField } from '@mui/material';
import {  setCountdownSecs } from '../../slices/recordingDataSlice';
import { useDispatch } from 'react-redux';

const SessionState = () => {

  const dispatch = useDispatch()

  return (
    
    <div className="box">

      <div className="media">
        <div className="media-items">
          <MediaControl/>
        </div>
        
        <div className="offset">
            <TextField 
              id="outlined-basic" 
              label="Set Countdown" 
              variant="outlined" 
              type="number" 
              defaultValue={3}
              InputLabelProps={{
                style: {
                  fontSize: 'var(--default-text-size)',
                  fontWeight: 'var(--main-font-weight)',
                },
              }}
              InputProps={{
                style: {
                  fontSize: 'var(--default-text-size)',
                },
                inputProps: {
                  min: 0,
                  max: 30,
                },
              }}
              onChange={(e)=> {
                if (e.target.value >= 0 && e.target.value <= 30) {
                  console.log("changed time");
                  dispatch(setCountdownSecs(e.target.value));
                }
              }}
            />
        </div>
        
      </div>
      
    </div>
  );
};

export default SessionState;