import React, { useState, useRef, useEffect } from "react";
import "./Visualizer.css"
import MugicTracker from "../mugic_tracker/MugicTracker";
import { Stage, Layer, Line, Circle } from "react-konva";
import { Spring, animated } from "@react-spring/konva";
import { duration } from "@mui/material";
import { useSelector } from 'react-redux';


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

    const mugicData = useSelector((state) => state.mugicData.data);


    //update dot whenever mugicData is changed
    useEffect(() => {
        updateDot()
    }, [mugicData])



    const[dotData, updateDotData] = useState({
        x: 0,
        y: 0
    })

    // Points in lineData will be in the format [x1, y1, x2, y2, x3, y3]
    const[lineData, updateLineData] = useState([]);

    const delay = ms => new Promise(res => setTimeout(res, ms));

    const addLinePoint = (x, y) => {
        lineData.push(x);
        lineData.push(y);
        if (lineData.length > lineLength) {
            lineData.shift();
            lineData.shift();
        }
        updateLineData(lineData);
    }

    var circleRef = useRef(null);
    var lineRef = useRef(null);

    const updateDot = () => {
        updateDotData({
            x: ((mugicData.roll - minRoll) / (maxRoll - minRoll)) * width,
            y: ((mugicData.yaw - minYaw) / (maxYaw - minYaw)) * height,
        })
        addLinePoint(dotData.x, dotData.y);
        if (circleRef.current != null) {
            circleRef.current.to({
                x: dotData.x,
                y: dotData.y,
                duration: 0.05
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
            {/* <MugicTracker mugicData={mugicData} updateData={updateData}/> */}
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