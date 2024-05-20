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
        <div className="offset-left">Count down is 3 sec</div>
      </div>

    </div>
  );
};

export default SessionState;