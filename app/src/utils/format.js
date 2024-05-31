
export const buildTeacherFile = (recordingData, recordingStartTime) => {
  var str = ""

  str += recordingStartTime.toString() + "\n"
  str += "Teacher" + "\n"
  str += recordingData.length.toString() + "\n"

  recordingData.forEach(element => {
    str += element.toString() + "\n"
  })
  return str
}

export const buildTeacherStudentFile = (loadedData, recordingData, recordingStartTime) => {
  var str = ""
  
  str += recordingStartTime.toString() + "\n"
  str += "TeacherStudent" + "\n"
  str += loadedData.length.toString() + ";" + recordingData.length.toString() + "\n";

  for(let i = 0; i < loadedData.length; ++i){

    const currentRecordingData = (i < recordingData.length) ? recordingData[i].toString() : ""
    str += loadedData[i].toString() + ";" + currentRecordingData + "\n"
  }
  console.log(str)
  return str
}