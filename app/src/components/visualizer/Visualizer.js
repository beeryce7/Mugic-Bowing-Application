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
    const yawOffset = 0;
    const rollOffset = 180;
    const lineLifetime = 10;
    const lineLength = 20;


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
        y: 0
    })

    // Points in lineData will be in the format [x1, y1, x2, y2, x3, y3]
    const[lineData, updateLineData] = useState([]);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const addLinePoint = (x, y) => {
        var points = [x, y, ...lineData];
        if (points.length > lineLength * 2) {
            points = points.slice(0, -2);
        }
        // lineData.push(x);
        // lineData.push(y);
        // if (lineData.length > lineLength) {
        //     lineData.shift();
        //     lineData.shift();
        // }
        updateLineData(points);
    }

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
    var lineRef = useRef(null);

    const updateDot = () => {
        updateDotData({
            x: ((mugicData.euler[2] - minRoll) / (maxRoll - minRoll)) * width,
            y: ((mugicData.euler[0] - minYaw) / (maxYaw - minYaw)) * height,
        })
        addLinePoint(dotData.x, dotData.y);
        if (circleRef.current != null) {
            circleRef.current.to({
                x: dotData.x,
                y: dotData.y,
                duration: 0.1
            })
        }
        if (lineRef.current != null) {
            lineRef.current.to({
                points: lineData,
                duration: 0
            })
        }
        else {
            console.log("no lineref")
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
                    <Line
                        ref={lineRef}
                        x={0}
                        y={0}
                        stroke="blue"
                        strokeWidth={5}
                        strokeEnabled={true}
                        opacity={0.5}
                        closed={false}
                        tension={0.1}

                    />
                </Layer>
            </Stage>
        </div>
    );
}

export default Visualizer;