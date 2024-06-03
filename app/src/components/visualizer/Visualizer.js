import React, { useState, useRef, useEffect } from "react";
import "./Visualizer.css"
import { Stage, Layer, Line, Circle, Rect } from "react-konva";
import { Spring, animated } from "@react-spring/konva";
import { duration } from "@mui/material";
import { useSelector } from 'react-redux';
import { selectMugicData } from "../../slices/mugicDataSlice";
import { selectTeacherData } from "../../slices/loadedDataSlice";
import useWindowDimensions from "../../utils/useWindowDimensions";
import LoadedDataVisual from "./LoadedDataVisual";


const Visualizer = ({isRecordPage = false}) => {
    const { height, width } = useWindowDimensions();

    const chartHeight = height;
    const chartWidth = width ;

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

    // Points in lineData will be in the format [x1, y1, x2, y2, x3, y3]
    const[lineData, setLineData] = useState([]);

    //update dot whenever mugicData is changed
    useEffect(() => {
        const newPoint = {
            x: ((mugicData.roll - minRoll) / (maxRoll - minRoll)) * chartWidth,
            y: ((mugicData.yaw - minYaw) / (maxYaw - minYaw)) * chartHeight,
        };
        setLineData((prevData) => [...prevData, newPoint.x, newPoint.y]);
    }, [mugicData])

    return (
        <div>
            {/* <MugicTracker mugicData={mugicData} updateData={updateData}/> */}
            <Stage width={chartWidth} height={chartHeight}>
                <Layer>
                    <Rect
                        x={0}
                        y={0}
                        width={chartWidth}
                        height={chartHeight}
                        stroke="black"
                        strokeWidth={2}
                    />
                    {!isRecordPage && loadedData.length > 0 &&  (
                        <LoadedDataVisual
                            chartHeight={chartHeight}
                            chartWidth={chartWidth}
                        />
                    )}
                    <Line
                        points={lineData}
                        stroke="#FF7A00"
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
