import React, { useState } from "react";
import "./MugicTracker.css";

const MugicTracker = () => {

  // For tracking the rotation and acceleration of the MUGIC device as a state
  //  in the format: [pitch, yaw, roll, x, y, z]
  const[MUGICParams, setMUGICParams] = useState({
    params: [0, 0, 0, 0, 0, 0]
  })

  const[graphParams, setGraphParams] = useState({
    series: [{
      data: ''
    }],
    options: {
      chart: {
        id: 'realtime',
        height: 350,
        type: 'line',
        animations: {
          enabled: true,
          easing: 'linear',
          dynamicAnimation: {
            speed: 1000
          }
        },
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Dynamic Updating Chart',
        align: 'left'
      },
      markers: {
        size: 0
      },
      xaxis: {
        type: 'datetime',
        range: 100,
      },
      yaxis: {
        max: 100
      },
      legend: {
        show: false
      },
    },
  })

  window.electronAPI.onMugicMessage((msg) => {
    console.log("received message");
    console.log(msg);
  }) 
  window.electronAPI.onMugicError((err) => {
    console.log("received error");
    console.log(err);
  }) 

  return (
      <div>
        {/* <p>
          {isConnected ? "connected" : "not connected"}<br/>
        </p> */}
        <p>
          Pitch: {MUGICParams.params[0]}<br/>
          Yaw: {MUGICParams.params[1]}<br/>
          Roll: {MUGICParams.params[2]}<br/>
          X: {MUGICParams.params[3]}<br/>
          Y: {MUGICParams.params[4]}<br/>
          Z: {MUGICParams.params[5]}<br/>
        </p>
      </div>
  );
};


export default MugicTracker;