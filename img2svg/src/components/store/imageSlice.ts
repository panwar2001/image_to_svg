import { createSlice } from '@reduxjs/toolkit'

const initialState:{ img: any  ,svg: string | null} = {
    img:null,
    svg:''
}
export const imageSlice = createSlice({
  name: 'Data',
  initialState,
  reducers: { 
    updateImage: (state,action)=>{
        state.img =action.payload;
    },
    updateSvg:(state,action)=>{
        state.svg=action.payload;
    }
  },
})

export const {updateImage,updateSvg} = imageSlice.actions;
export default imageSlice.reducer;