import InputZone from "./InputZone";
import styled from "styled-components";
import { useSelector,useDispatch} from 'react-redux';
import { RootState } from "./store/store";
import image2svg from "./convert2svg";
import download from "./Download";
import Footer from "./Footer";
const Text=styled.div`
font-family: 'Oswald';
font-size:2em;
justify-content:center;
text-align:center;
padding-top:.5em;
padding-bottom:1.5em;
`;
const CenterDiv=styled.div`
 display:flex;
 justify-content:center;
 align-items:center;
`;
const Button = styled.button`
  margin-top: 10px;
  background-color: indigo;
  height: 3em;
  width: 10em;
  color: white;
  font-weight: bold;
  font-size: 1em;
  border-radius: 1em;
  cursor: pointer;
`;
const ImageDisplay=styled.img`
 display:block;
 padding-top:1em;
`;
const Dashboard=()=>{
  const dispatch=useDispatch();
  const svgString=useSelector((state:RootState)=>state.Data.svg);
  const image=useSelector((state:RootState)=>state.Data.img);
  return <>
    <CenterDiv>
    <Text>Free Image to SVG Convertor</Text>
    </CenterDiv>
     <CenterDiv>
        <InputZone/>
     </CenterDiv>
     {image && <CenterDiv>
     <ImageDisplay src={image} height={200} width={250}/>
     </CenterDiv>}
     <CenterDiv>
     <Button onClick={()=>image2svg(image,dispatch)}>Convert ...</Button>
     </CenterDiv>
     {svgString!='' && <Button onClick={()=>download('free.svg',svgString)}>download svg</Button>}
     <Footer/>
    </>;
}
export default Dashboard;