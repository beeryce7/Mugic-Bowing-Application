import { selectRecordingData } from "../../slices/recordingDataSlice"
import { selectTeacherData } from "../../slices/loadedDataSlice"
import {useSelector} from "react-redux"

const AccuracyDisplay = () => {

    const recordingData = useSelector(selectRecordingData);
    const teacherData = useSelector(selectTeacherData);

    const YAW_WEIGHT = 0.5
    const PITCH_WEIGHT = 0
    const ROLL_WEIGHT = 0.5

    const accuracy = 100

    //gets percentage difference between two angles, accounting for if it wraps around between -180 180
    const angleDiffPercent = (x, y) => {
        rawDist = Math.abs(x - y)
        if(rawDist > 180){
            rawDist = 360 - rawDist
        }
        return rawDist * 1/180
    }

    const calculateAccuracy = (recordingData, teacherData) => {

        running_sum = 100

        recordingData.forEach((element, index) => {
            let teacherPoint = teacherData[index]
            let studentPoint = element

            running_sum += angleDiffPercent(teacherPoint[0], studentPoint[0]) * (YAW_WEIGHT/100)
            running_sum += angleDiffPercent(teacherPoint[1], studentPoint[1]) * (PITCH_WEIGHT/100)
            running_sum += angleDiffPercent(teacherPoint[2], studentPoint[2]) * (ROLL_WEIGHT/100)

        });

        return running_sum / recordingData.length
    }




    
    return (
        <>
            <div>
                Accuracy:
            </div>
            {recordingData.length > 0 && teacherData.length > 0 ? (
                <div>
                    {accuracy}%
                </div>
            ) : (
                <>
                </>
            )}
        </> 

    )
}


export default AccuracyDisplay