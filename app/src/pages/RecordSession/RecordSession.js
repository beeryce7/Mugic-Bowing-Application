import React from 'react';
import './RecordSession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import { Button, Grid, Snackbar } from '@mui/material';
//import DividerStack from '../../components/PlaySession/DividerStack';
import Visualizer from '../../components/visualizer/Visualizer';

const RecordSession = () => {
  return (
    <div>
    <Header/>
      <div className="be-on-right">00:00</div>
      
      <div className="new-graph">
            <Visualizer/>
        </div>

    <SessionState/>

    </div> 
  );
};



export default RecordSession;