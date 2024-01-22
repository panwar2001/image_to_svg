import { createSlice } from '@reduxjs/toolkit'

const initialState:{ img: any  ,svg: string | boolean|number, convertState:boolean} = {
    img:null,
    svg:'',
    convertState:true
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
    },
    updateConvertState:(state,action)=>{
        state.convertState=action.payload;
    }
  },
})

export const {updateImage,updateSvg,updateConvertState} = imageSlice.actions;
export default imageSlice.reducer;