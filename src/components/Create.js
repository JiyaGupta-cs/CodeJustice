import React from 'react'
import Sidebar from './Sidebar'
import Webcam from "react-webcam";
import { useRef } from 'react';

const Create = () => {
    const webRef=useRef(null);
    let img = "";
    const showImage=()=>{
         img = webRef.current.getScreenshot();
    }
    
  return (
    <div className='Create'>
      {/* <script src="https://unpkg.com/webcam-easy/dist/webcam-easy.min.js"></script> */}
      <Sidebar/>

      <div style={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
<Webcam ref={webRef}  style={{marginTop:'50px'}} /> 
<br />
<button style={{backgroundColor:'#9264d9', padding:'20px', color:'white', borderRadius:'2px', border:'2px solid white', fontSize:'18px', fontWeight:'800', width:'500px'}} onClick={()=>{
    showImage();
}}>CLICK IMAGE OR SHOOT VIDEO</button>
<br />
{/* <img src={img} alt="" /> */}
</div>
    </div>
  )
}

export default Create
