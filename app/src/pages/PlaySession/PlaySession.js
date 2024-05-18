import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import MugicTracker from '../../components/mugic_tracker/MugicTracker';


const PlaySession = () => {
  return (
    <div>
    <Header/>
    <div className="top-graph">Block Teacher</div>
    <div className="top-graph">Block Student</div>

    <SessionState/>
    <h2>Stats</h2>
    <li> Accuracy</li>
    <li>Angle</li>
    {/* <MugicTracker/> */}

    </div> 
  );
};

export default PlaySession;