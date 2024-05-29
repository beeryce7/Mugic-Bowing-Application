
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

export const extractDataFromFileString = (fileString, fileName) => {

}