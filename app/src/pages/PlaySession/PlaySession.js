import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import { Button, Grid, Snackbar } from '@mui/material';
//import DividerStack from '../../components/PlaySession/DividerStack';
import Visualizer from '../../components/visualizer/Visualizer';


const PlaySession = () => {
  return (
    <div>
        <Header/>
        
        <div className = "new-button-container">
        <Button variant="contained" className = "color-button"><div className = "text-for-button">Save as...</div></Button>
        <Button variant="contained" className = "color-button"><div className = "text-for-button">Clear</div></Button>
        <Button variant="contained" className = "color-button"><div className = "text-for-button">Redo</div></Button>
        <div className="be-on-right">00:00</div>
      </div>

        {/* <div className="top-graph"><div className="key"><div class="color-block-teacher"></div>Teacher</div></div>
        <div className="top-graph"><div className="key"><div class="color-block-student"></div>Student</div></div>
        <div className="be-on-right">00:00:00</div> */}

        <div className="new-graph">
            <Visualizer/>
        </div>

        <SessionState/>
    </div> 
  );
};

// Countdown function
/*function countdown() {
  // Get the countdown element
  const countdownElement = document.getElementById('countdown');

  // Set the initial countdown value
  let count = 3;

  // Update the countdown every second
  const timer = setInterval(function() {
      // Display the current countdown value
      countdownElement.innerText = count;

      // Decrement the count
      count--;

      // If the count reaches 0, stop the countdown
      if (count < 0) {
          clearInterval(timer);
          countdownElement.innerText = 'Countdown Complete!';
      }
  }, 1000);
}*/


export default PlaySession;