import React from 'react'
import image from '../images/image.png'
import { useState } from 'react'
function ImageManipulation() {
    const [catheight,setCatHeight]=useState(200);
    const [catwidth,setCatWidth]=useState(200);
   const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    const [catAngle,setCatAngle]=useState(30);

    function zoomIn(){
        setCatHeight(catheight+10);
    }

    function zoomOut(){
        setCatWidth(catwidth-10);
    }
 
    function ChangeBGColor(){
        setRed(Math.random()*255);
         setGreen(Math.random()*255);
          setBlue(Math.random()*255);
    } 
     function ImageRotate(){
        // alert("HELLO");
        setCatAngle(catAngle-40);
     }
   
  return (
    <div>
        
<h2 style={{color:'black'}}>Image Manipulation</h2>
<div style={ { backgroundColor: `rgb(${red}, ${green}, ${blue})`, height:"300px",width:"300px",border:"4px solid red", marginLeft:"40px"}}>
    <img src={image} height={catheight} width={catwidth} style={{transform:`rotate(${catAngle}deg)`}}/>
</div>
<div>
    <button onClick={zoomIn}>Zoom In</button>
    <button onClick={zoomOut}>Zoom Out</button>
   <button onClick={ChangeBGColor}>ChangeColor</button>
   <button onClick={ImageRotate} >ImageRotate</button>
</div>
    </div>
  )
}

export default ImageManipulation