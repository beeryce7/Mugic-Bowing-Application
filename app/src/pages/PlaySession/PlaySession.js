import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';

const PlaySession = () => {
  return (
    <div>
    <Header/>
      <h1 className="banner">
        <SessionState/>
      </h1>
    </div> 
  );
};

export default PlaySession;