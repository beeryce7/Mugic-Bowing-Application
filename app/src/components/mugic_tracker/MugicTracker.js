import React, { useState } from "react";
import "./MugicTracker.css";

const MugicTracker = () => {

  // For tracking the rotation and acceleration of the MUGIC device as a state
  //  in the format: [pitch, yaw, roll, x, y, z]
  const [isConnected, setIsConnected] = useState(false)

  const[mugicData, setMugicData] = useState({
    accel: [0,0,0],
    euler: [0,0,0],
    gyro: [0,0,0],
    quatern: [0,0,0,0],
    battery: 0,
    seqNum: 0,
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
    setMugicData({
      accel: [msg[1], msg[2], msg[3]],
      euler: [msg[4],msg[5],msg[6]],
      gyro: [msg[7], msg[8], msg[9]],
      quatern: [msg[13], msg[14], msg[15], msg[16]],
      battery: msg[17],
      seqNum: msg[24],
    })
    if(!isConnected){
      setIsConnected(true)
    }
    
  }) 
  
  window.electronAPI.onMugicError((err) => {
    console.log("received error");
    console.log(err);
  }) 

  return (
      <div>
        <h2>
          Mugic Tracker
        </h2>

        {isConnected ? (
          <div>
            <p>Acceleration: {mugicData.accel}</p>
            <p>Gyro: {mugicData.gyro}</p>
            <p>Euler Angles: {mugicData.euler}</p>
            <p>Quaternions: {mugicData.quatern}</p>
            <p>Battery: {mugicData.battery}</p>
            <p>Sequence Number: {mugicData.seqNum}</p>
          </div>
        ) : (
          <p> Not connected! </p>
        )}

      </div>
  );

  
};


export default MugicTracker;