import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import DividerStack from '../../components/PlaySession/DividerStack';

const PlaySession = () => {
  return (
    <div>
    <Header/>
      <h1 className="banner"></h1>
      <h1>Graph Here</h1>
      <DividerStack/>
      <h2>Stats</h2>
      <li> Accuracy</li>
      <li>Angle</li>
    </div> 
  );
};

export default PlaySession;