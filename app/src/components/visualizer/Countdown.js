import { Text } from "react-konva";
import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectCountdown } from "../../slices/recordingDataSlice";
import { tickCountdown } from "../../slices/recordingDataSlice";
import { useDispatch } from "react-redux";
import { calibrateDevice } from "../../slices/mugicDataSlice";


const Countdown = ({x, y, clearLine}) => {

    const countdown = useSelector(selectCountdown)
    const dispatch = useDispatch()

    useEffect(() => {
        let cdIntervalId

        if(countdown.isCountingDown){
            clearLine()
            cdIntervalId = setInterval(() => {
                dispatch(tickCountdown())
                dispatch(calibrateDevice())
            }, 1000)
        }

        return () => {
            console.log("clear interval")
            clearInterval(cdIntervalId)
        }

    }, [countdown.isCountingDown])


    if (!countdown.isCountingDown) {
        return (<></>)
    }
    else{
        return (<>
            <Text
                text={countdown.timer >= 1 ? countdown.timer : "Start!"}
                x={x}
                y={y}
                fontSize={countdown.timer >= 1 ? 150 : 100}
                align="center"
                verticalAlign="middle"
            />
        </>)
    }


}
export default Countdown
