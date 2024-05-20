import React from 'react';
import './SessionState.css'; 
import MediaControl from './MediaControl';

const SessionState = () => {
  return (
    <div className="box">

      <div className="media">
        <div className="media-items">
          <MediaControl/>
        </div>
        <div>Count down is 3sec</div>
      </div>

    </div>
  );
};

export default SessionState;