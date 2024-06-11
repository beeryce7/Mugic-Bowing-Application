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
import { selectRecordingData, selectIsRecording, selectCountdown } from "../../slices/recordingDataSlice";


const Visualizer = ({isRecordPage = false}) => {
    const { height, width } = useWindowDimensions();

    const chartHeight = height * 0.7;
    const chartWidth = width ;

    const minYaw = -180;
    const maxYaw = 180;
    const minRoll = -90;
    const maxRoll = 90;
    const yawOffset = 0;
    const rollOffset = 180;
    const lineLifetime = 10;
    const lineLength = 20;

    const mugicData = useSelector(selectMugicData);

    //this is an array of [[yaw1,pitch1,roll1], [yaw2,pitch2,roll2] ... ] that was loaded from file
    //use to play back teacher data
    const loadedData = useSelector(selectTeacherData);
    const recordingData = useSelector(selectRecordingData)
    const isRecording = useSelector(selectIsRecording)
    const countdown = useSelector(selectCountdown)

    // Points in lineData will be in the format [x1, y1, x2, y2, x3, y3]
    const[lineData, setLineData] = useState([]);

    //update dot whenever mugicData is changed
    useEffect(() => {
        // useEffect is called based on the changing state of mugicData
        const newPoint = {
            x: ((mugicData.roll - minRoll) / (maxRoll - minRoll)) * chartWidth,
            y: ((mugicData.yaw - minYaw) / (maxYaw - minYaw)) * chartHeight,
        };

        //only draw lines if 1. not recording and data is empty and countdown is false, B while recording
        if((!isRecording && !countdown.isCountingDown && recordingData.length == 0) || (isRecording && !countdown.isCountingDown)){

            // setLineData is simular to accumulate, reused Aaron's variable
            setLineData((prevData) => [...prevData, newPoint.x, newPoint.y]);
        }

        //console.log(chartHeight, chartWidth, mugicData.yaw)
    }, [mugicData])

    useEffect(()=> {
        console.log(recordingData)
        if(recordingData.length == 0){
            console.log("check")
            handleClearLine()
        }
    }, [recordingData])

    const handleClearLine = () => {
        setLineData([])
    }


    return (
        <div>
            <Stage width={chartWidth} height={chartHeight}>

                <Layer>
                    <Countdown
                        x={chartWidth / 2}
                        y={chartHeight / 2}
                        clearLine={handleClearLine}
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
