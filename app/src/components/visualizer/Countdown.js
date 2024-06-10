import { Text } from "react-konva";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCountdown } from "../../slices/recordingDataSlice";


const Countdown = () => {

    const countdownString = useSelector(selectCountdown)

    return (
        <Text>countdownString</Text>
        
    )


}
export default Countdown
