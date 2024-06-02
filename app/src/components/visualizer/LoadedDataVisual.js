import React, { useEffect, useRef } from 'react';
import { selectTeacherData } from "../../slices/loadedDataSlice";
import { useSelector } from 'react-redux';
import { Stage, Layer, Line, Rect} from 'react-konva';
import useWindowDimensions from '../../utils/useWindowDimensions';


const LoadedDataVisual = () => {
    const loadedData = useSelector(selectTeacherData);
    const { height, width } = useWindowDimensions();

    const chartHeight = height / 2;
    const chartWidth = width /2;

    const minYaw = 0;
    const maxYaw = 360;
    const minRoll = -180;
    const maxRoll = 180;

    const points = loadedData.reduce((acc, [yaw, pitch, roll]) => {
        const x = ((roll - minRoll) / (maxRoll - minRoll)) * chartWidth;
        const y = ((yaw - minYaw) / (maxYaw - minYaw)) * chartHeight; 
        acc.push(x, y);
        return acc;
      }, []);


    return (
        <div>
            <Stage width={chartWidth} height={chartHeight} >
                <Layer>
                    <Rect
                        x={0}
                        y={0}
                        width={chartWidth}
                        height={chartHeight}
                        stroke="black"
                        strokeWidth={2}
                    />
                    <Line
                        points={points}
                        stroke="#1FBCFF"
                        strokeWidth={5}
                        tension={0.5}
                        lineCap="round"
                        lineJoin="round"
                    />
                </Layer>
            </Stage>
        </div>
    );
}

export default LoadedDataVisual;