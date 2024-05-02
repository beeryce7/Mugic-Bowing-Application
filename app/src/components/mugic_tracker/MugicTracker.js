import React, { useState } from "react";
import "./MugicTracker.css";

const MugicTracker = () => {

  // For tracking the rotation and acceleration of the MUGIC device as a state
  //  in the format: [pitch, yaw, roll, x, y, z]
  const[MUGICParams, setMUGICParams] = useState({
    params: [0, 0, 0, 0, 0, 0, 0, 0]
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
    setMUGICParams({params: [msg[1], msg[2], msg[3], msg[4], msg[5], msg[6], msg[17], msg[24]]})
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
          Accel X: {MUGICParams.params[0]}<br/>
          Accel Y: {MUGICParams.params[1]}<br/>
          Accel Z: {MUGICParams.params[2]}<br/>
          Euler X: {MUGICParams.params[3]}<br/>
          Euler Y: {MUGICParams.params[4]}<br/>
          Euler Z: {MUGICParams.params[5]}<br/>
          Battery: {MUGICParams.params[6]}<br/>
          Seq Num: {MUGICParams.params[7]}<br/>
        </p>
      </div>
  );

  
};


export default MugicTracker;