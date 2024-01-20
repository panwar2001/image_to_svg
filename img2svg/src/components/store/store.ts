import { configureStore } from '@reduxjs/toolkit'
import imageReducer from './imageSlice';
export const store = configureStore({
  reducer: {
    Data: imageReducer,
  },
})
export type RootState=ReturnType<typeof store.getState>;
