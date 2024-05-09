import React, { useState, useRef } from "react";
import { MugicTracker } from "../mugic_tracker/MugicTracker.js";
import { Stage, Layer, Line, Circle } from "react-konva";

const Visualizer = () => {
    const width = 500
    const height = 500

    return (
        <Stage width={width} height={height}>

          <Layer>
            <Circle x={0} y={0} radius={50} fill="blue"/>
          </Layer>
        </Stage>
    );
}