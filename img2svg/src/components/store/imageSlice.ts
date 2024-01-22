import { createSlice } from '@reduxjs/toolkit'
interface InitialState{ 
  img: any ,
  svg: string | boolean|number,
  convertState:boolean,
  fileName:string
}; 
const initialState:InitialState= {
    img:null,
    svg:'',
    convertState:true,
    fileName:''
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
    },
    updateFileName:(state,action)=>{
        state.fileName=action.payload.split(".")[0]+'.svg';
    }
  },
})

export const {updateImage,updateSvg,updateConvertState,updateFileName} = imageSlice.actions;
export default imageSlice.reducer;