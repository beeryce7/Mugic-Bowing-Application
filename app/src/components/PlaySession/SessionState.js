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
        <div className="text-container">
          Count down 3 secs
        </div>
      </div>
      
    </div>
  );
};

export default SessionState;