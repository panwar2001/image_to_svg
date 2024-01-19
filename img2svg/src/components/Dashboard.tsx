import InputZone from "./InputZone";
import styled from "styled-components";
import {useSelector} from 'react-redux';
const Text=styled.div`
font-family: 'Oswald';
font-size:2em;
color:indigo;
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

const Dashboard=()=>{
   const img=useSelector((state)=>state.ImageData?.img);
    return <>
    <CenterDiv>
    <Text>Free Image to SVG Convertor</Text>
    </CenterDiv>
     <CenterDiv>
        <InputZone/>
     </CenterDiv>
     <CenterDiv>
     <Button>Convert ...</Button>
     </CenterDiv>
     <img src={img} height={200} width={200}/>
    </>;
}
export default Dashboard;