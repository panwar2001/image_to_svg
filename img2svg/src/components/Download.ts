const download=(fileName:string,svgString:string | number | boolean)=>{
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(svgString));
    element.setAttribute('download', fileName);
    element.style.display = 'none';
    document.body.appendChild(element); 
    element.click();
    document.body.removeChild(element);
}
export default download;