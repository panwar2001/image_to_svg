import {ChangeEvent } from "react";
import styled from "styled-components";
import { updateConvertState, updateImage } from "./store/imageSlice";
import {useDispatch} from 'react-redux';
const Dropzone = styled.div`
  width: 60%;
  @media screen and (max-width: 425px) { 
    width:80%;
    height:10vh;
   }
  height: 20vh;
  border: 5px dashed #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:hover {
    opacity: 0.8;
  }
  border-radius: 1em;
  background-color: transparent;
`;
const FileInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
`;
const InputZone=()=>{
  const dispatch=useDispatch();
  const InputChange = (e:ChangeEvent<HTMLInputElement>) => {
    dispatch(updateConvertState(true))
    var reader = new FileReader();
    if(e.target.files){
     reader.onload=(e:any)=>{
      dispatch(updateImage(e.target.result));
     }
     reader.readAsDataURL(e.target.files[0]);
    }
  };
return (<Dropzone>
  <FileInput
    type="file"
    onChange={InputChange}
    accept="image/*"
  />
  <img src="file.svg" height="40" width="40" />
  <br />
  <p>
    <strong>Click to upload</strong> or drag and drop
    <br />
     image to convert into svg
  </p>
</Dropzone>);
}
export default InputZone;