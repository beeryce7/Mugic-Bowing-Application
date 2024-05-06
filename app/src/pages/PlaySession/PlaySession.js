import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import DividerStack from '../../components/PlaySession/DividerStack';
import MugicTracker from '../../components/mugic_tracker/MugicTracker';



const PlaySession = () => {
  return (
    <div>
    <Header/>
    <div className="top-graph">Block Teacher</div>
    <div className="top-graph">Block Student</div>
    <h1>Graph Here</h1>
    <DividerStack/>
    <h2>Stats</h2>
    <li> Accuracy</li>
    <li>Angle</li>
    <h1 className="banner">
      Play Session
    </h1>
    <MugicTracker/>

    </div> 
  );
};

export default PlaySession;