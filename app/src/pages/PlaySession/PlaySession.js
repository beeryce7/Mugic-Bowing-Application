import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import MugicTracker from '../../components/mugic_tracker/MugicTracker';


const PlaySession = () => {
  return (
    <div>
    <Header/>
    <div className="top-graph"><div className="key"><div class="color-block-teacher"></div>Teacher</div></div>
    <div className="top-graph"><div className="key"><div class="color-block-student"></div>Student</div></div>
    <div className="be-on-right">00:00:00</div>
    <div className="new-graph">GRAPH</div>

    <SessionState/>
    <h2>Stats</h2>
    <li> Accuracy</li>
    <li>Angle</li>
    {/* <MugicTracker/> */}

    </div> 
  );
};

export default PlaySession;