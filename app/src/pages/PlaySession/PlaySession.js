import React from 'react';
import './PlaySession.css'; 
import Header from '../../components/PlaySession/Header';
import SessionState from '../../components/PlaySession/SessionState';
import MugicTracker from '../../components/mugic_tracker/MugicTracker';


const PlaySession = () => {
  return (
    <div>
    <Header/>
    <div className="top-graph"><div className="key"><div class="color-block-teacher"></div><div className="change-font">Teacher</div></div></div>
    <div className="top-graph"><div className="key"><div class="color-block-student"></div><div className="change-font">Student</div></div></div>
    <div className="be-on-right">00:00:00</div>
    <div className="new-graph">GRAPH</div>

    <SessionState/>
    <div className="offset-right"><div className="lower-box"> <h1>Stats</h1>
    <li> Accuracy</li>
    <li>Angle</li></div></div>
    {/* <MugicTracker/> */}

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