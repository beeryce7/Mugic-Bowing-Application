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
import Countdown from "./Countdown";


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
        // useEffect is called based on the changing state of mugicData
        const newPoint = {
            x: ((mugicData.roll - minRoll) / (maxRoll - minRoll)) * chartWidth,
            y: ((mugicData.yaw - minYaw) / (maxYaw - minYaw)) * chartHeight,
        };
        // setLineData is simular to accumulate, reused Aaron's variable
        setLineData((prevData) => [...prevData, newPoint.x, newPoint.y]);
    }, [mugicData])

    return (
        <div>
            <Stage width={width} height={height}>

                <Layer>
                    <Countdown
                        x={width / 2}
                        y={height / 2}
                    />
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
                        width={chartWidth}
                        height={chartHeight}
                        stroke="black"
                        strokeWidth={2}
                    />
                    {!isRecordPage && loadedData.length > 0 &&  (
                        // if there is loadedData and it is playSession we show the loaded visual
                        <LoadedDataVisual
                            chartHeight={chartHeight}
                            chartWidth={chartWidth}
                        />
                    )}
                    <Line
                        // since lineData is accumulated by useEffect the dataset grows so this would reflect that
                        // other variables are for styling
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
