import { configureStore } from '@reduxjs/toolkit'
import mugicDataReducer from '../slices/mugicDataSlice'

export default configureStore({
  reducer: {
    mugicData: mugicDataReducer,
  },
})