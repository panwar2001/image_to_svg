import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    img:''
}
export const imageSlice = createSlice({
  name: 'imageData',
  initialState,
  reducers: { 
    updateImage: (state,action)=>{
        state.img =action.payload;
    }
  },
})

export const {updateImage} = imageSlice.actions;
export default imageSlice.reducer;