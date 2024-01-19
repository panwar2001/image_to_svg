import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageSlice';
export const store = configureStore({
  reducer: {
    ImageData: imageReducer,
  },
})