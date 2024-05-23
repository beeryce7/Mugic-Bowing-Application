import React, { useState, useRef } from "react";
import "./MugicTracker.css";
import { Stage, Layer, Line, Circle } from "react-konva";



const MugicTracker = ({mugicData, updateData}) => {

  const width = 500
  const height = 500

  // For tracking the rotation and acceleration of the MUGIC device as a state
  //  in the format: [pitch, yaw, roll, x, y, z]
  const [isConnected, setIsConnected] = useState(false)


  const[graphData, setGraphData] = useState({
    data: [{time: 0, value: 0}]
  })


  const timeStart = performance.now()


  window.electronAPI.onMugicMessage((msg) => {
    updateData(msg);
    // setMugicData({
    //   accel: [msg[1], msg[2], msg[3]],
    //   euler: [msg[4],msg[5],msg[6]],
    //   gyro: [msg[7], msg[8], msg[9]],
    //   quatern: [msg[13], msg[14], msg[15], msg[16]],
    //   battery: msg[17],
    //   seqNum: msg[24],
    // });
    if(!isConnected){
      setIsConnected(true);
    }
    
  }) 
  
  window.electronAPI.onMugicError((err) => {
    console.log("received error");
    console.log(err);
  }) 

  return (
      <div>

      </div>
  );

  
};


export default MugicTracker;