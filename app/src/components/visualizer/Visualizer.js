import React, { useState, useRef } from "react";
import "./Visualizer.css"
import MugicTracker from "../mugic_tracker/MugicTracker";
import { Stage, Layer, Line, Circle } from "react-konva";

const Visualizer = () => {
    const width = 500;
    const height = 500;
    const minYaw = 0;
    const maxYaw = 360;
    const minRoll = 180;
    const maxRoll = 180;


    const[mugicData, setMugicData] = useState({
        accel: [0,0,0],
        euler: [0,0,0],
        gyro: [0,0,0],
        quatern: [0,0,0,0],
        battery: 0,
        seqNum: 0,
    })

    return (
        <div>
            <MugicTracker mugicData={mugicData} setMugicData={setMugicData}/>
            <Stage width={width} height={height}>

                <Layer>
                    <Circle x={((mugicData.euler[2] + minRoll) / (maxRoll + minRoll)) / width} y={((mugicData.euler[0] + minYaw) / (maxYaw + minYaw)) / height} radius={50} fill="blue"/>
                </Layer>
            </Stage>
        </div>
    );
}

export default Visualizer;