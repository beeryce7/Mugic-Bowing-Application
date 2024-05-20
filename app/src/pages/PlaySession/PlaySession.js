import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
//import DividerStack from '../../components/PlaySession/DividerStack';
import Visualizer from '../../components/visualizer/Visualizer';


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
    <Visualizer/>

    </div> 
  );
};

export default PlaySession;