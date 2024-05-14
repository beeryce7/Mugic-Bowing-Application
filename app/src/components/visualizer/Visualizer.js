import React, { useState, useRef } from "react";
import "./Visualizer.css"
import MugicTracker from "../mugic_tracker/MugicTracker";
import { Stage, Layer, Line, Circle } from "react-konva";
import { Spring, animated } from "@react-spring/konva";
import { duration } from "@mui/material";

const Visualizer = () => {
    const width = 500;
    const height = 500;
    const minYaw = 0;
    const maxYaw = 360;
    const minRoll = -180;
    const maxRoll = 180;


    const[mugicData, setMugicData] = useState({
        accel: [0,0,0],
        euler: [0,0,0],
        gyro: [0,0,0],
        quatern: [0,0,0,0],
        battery: 0,
        seqNum: 0,
    })

    const[dotData, updateDotData] = useState({
        x: 0,
        y: 0,
        t: 0
    })

    const updateData = (msg) => {
        setMugicData({
            accel: [msg[1], msg[2], msg[3]],
            euler: [msg[4],msg[5],msg[6]],
            gyro: [msg[7], msg[8], msg[9]],
            quatern: [msg[13], msg[14], msg[15], msg[16]],
            battery: msg[17],
            seqNum: msg[24],
        });
        updateDot();
    }

    var circleRef = useRef(null);

    const updateDot = () => {
        updateDotData({
            x: ((mugicData.euler[2] - minRoll) / (maxRoll - minRoll)) * width,
            y: ((mugicData.euler[0] - minYaw) / (maxYaw - minYaw)) * height,
            t: (dotData.t + 1) % 5
        })
        if (circleRef.current != null) {
            circleRef.current.to({
                x: dotData.x,
                y: dotData.y,
                duration: 0.1
            })
        }
        else
        {
        }
    }

    return (
        <div>
            <MugicTracker mugicData={mugicData} updateData={updateData}/>
            <Stage width={width} height={height}>

                <Layer>
                    <Circle
                        ref={circleRef}
                        x={width / 2}
                        y={height / 2}
                        radius={10}
                        fill="blue"
                    />
                </Layer>
            </Stage>
        </div>
    );
}

export default Visualizer;