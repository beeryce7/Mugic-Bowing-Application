import React, { useState, useRef, useEffect } from "react";
import "./Visualizer.css"
import { Stage, Layer, Line, Circle, Rect } from "react-konva";
import { Spring, animated } from "@react-spring/konva";
import { duration } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectMugicData } from "../../slices/mugicDataSlice";
import { selectTeacherData } from "../../slices/loadedDataSlice";
import useWindowDimensions from "../../utils/useWindowDimensions";


const Visualizer = () => {
    const { height, width } = useWindowDimensions();

    const chartHeight = height / 2;
    const chartWidth = width /2;

    const minYaw = 0;
    const maxYaw = 360;
    const minRoll = -180;
    const maxRoll = 180;
    const yawOffset = 0;
    const rollOffset = 180;
    const lineLifetime = 10;
    const lineLength = 20;

    const mugicData = useSelector(selectMugicData);

    //this is an array of [[yaw1,pitch1,roll1], [yaw2,pitch2,roll2] ... ] that was loaded from file
    //use to play back teacher data
    const loadedData = useSelector(selectTeacherData);


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
            x: ((mugicData.roll - minRoll) / (maxRoll - minRoll)) * chartWidth,
            y: ((mugicData.yaw - minYaw) / (maxYaw - minYaw)) * chartHeight,
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
            <Stage width={chartWidth} height={chartHeight}>

                <Layer>
                    <Circle
                        ref={circleRef}
                        x={chartWidth / 2}
                        y={chartHeight / 2}
                        radius={10}
                        fill="blue"
                    />
                    <Rect
                        x={0}
                        y={0}
                        width={chartWidth}
                        height={chartHeight}
                        stroke="black"
                        strokeWidth={2}
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