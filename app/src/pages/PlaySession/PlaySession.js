import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/home/Header';
import MugicTracker from '../../components/mugic_tracker/MugicTracker';

const PlaySession = () => {
  return (
    <div>
    <Header/>
      <h1 className="banner">
        Play Session
      </h1>
      <MugicTracker/>
    </div> 
  );
};

export default PlaySession;