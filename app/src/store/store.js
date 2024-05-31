import { configureStore } from '@reduxjs/toolkit'
import mugicDataReducer from '../slices/mugicDataSlice'
import recordingDataReducer from '../slices/recordingDataSlice'
import loadedDataReducer from '../slices/loadedDataSlice'

export default configureStore({
  reducer: {
    mugicData: mugicDataReducer,
    loadedData: loadedDataReducer,
    recordingData: recordingDataReducer,
    
  },
})