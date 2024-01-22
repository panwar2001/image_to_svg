import { updateConvertState, updateSvg } from "./store/imageSlice";
const image2svg=(image:any,dispatch:any)=>{
    const img = new Image();
    img.src = image;
    img.onload = ()=>{
        var canvas =document.createElement('canvas');
        var ctx:any = canvas.getContext('2d');
        ctx.webkitImageSmoothingEnabled = true;
        ctx.msImageSmoothingEnabled = true;
        ctx.imageSmoothingEnabled = true;

        const width=300;
        const height=300;
        canvas.width = width;
        canvas.height = height;

        ctx.drawImage(img, 0, 0, width, height);
        var imageData = ctx.getImageData(0, 0, width, height).data;
        let svgCode='<svg shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" xmlns="http://www.w3.org/2000/svg">';
        for (var y = 0; y < height; y++) {
        for (var x = 0; x < width; x++) {
            var pixelIndex = (y * width + x) * 4; 
            var red = imageData[pixelIndex];
            var green = imageData[pixelIndex + 1];
            var blue = imageData[pixelIndex + 2];
            svgCode+=`<path d="M${x} ${y}h1v1h-1z" fill="rgb(${red},${green},${blue})"/>`                                
        }
    }
    svgCode+='</svg>';
    dispatch(updateSvg(svgCode));
    dispatch(updateConvertState(false));
 }
}
export default image2svg;