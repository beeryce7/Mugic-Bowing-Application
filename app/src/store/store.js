import { configureStore } from '@reduxjs/toolkit'
import mugicDataReducer from '../slices/mugicDataSlice'
import recordingDataReducer from '../slices/recordingDataSlice'

export default configureStore({
  reducer: {
    mugicData: mugicDataReducer,
    recordingData: recordingDataReducer
  },
})