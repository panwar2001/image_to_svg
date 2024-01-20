import InputZone from "./InputZone";
import styled from "styled-components";
import image2svg from "./convert2svg";
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
const ImageDisplay=styled.img`

`;
const SvgDisplay=styled.div`

`;
const Dashboard=()=>{
  const svgDataUri = `data:image/svg+xml,${encodeURIComponent(svgString)}`;
    return <>
    <CenterDiv>
    <Text>Free Image to SVG Convertor</Text>
    </CenterDiv>
     <CenterDiv>
        <InputZone/>
     </CenterDiv>
     <CenterDiv>
     <Button onClick={()=>image2svg()}>Convert ...</Button>
     </CenterDiv>
     <ImageDisplay src={img} height={200} width={200}/>
     <SvgDisplay />
    </>;
}
export default Dashboard;