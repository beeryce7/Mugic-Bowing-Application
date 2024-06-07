import React, { useEffect, useRef } from 'react';
import { selectTeacherData } from "../../slices/loadedDataSlice";
import { useSelector } from 'react-redux';
import { Stage, Layer, Line, Rect} from 'react-konva';
import useWindowDimensions from '../../utils/useWindowDimensions';


const LoadedDataVisual = ({ chartHeight, chartWidth }) => {
    const loadedData = useSelector(selectTeacherData);

    const minYaw = 0;
    const maxYaw = 360;
    const minRoll = -180;
    const maxRoll = 180;

    const points = loadedData.reduce((acc, [yaw, pitch, roll]) => {
        // purpose is to gather calculated graph points from loadedData 
        // and return it in array format

        // calculation for x and y was done by Aaron
        // accumulate is an empty array [] 
        const x = ((roll - minRoll) / (maxRoll - minRoll)) * chartWidth;
        const y = ((yaw - minYaw) / (maxYaw - minYaw)) * chartHeight; 
        acc.push(x, y);
        return acc;
        // beneath is an empty array for accumulate
    }, [] );


    return (
        <Line
            // line is from Konva and this styles and puts the array points into a visual
            points={points}
            stroke="#1FBCFF"
            strokeWidth={5}
            tension={0.5}
            lineCap="round"
            lineJoin="round"
        />
    );
}

export default LoadedDataVisual;