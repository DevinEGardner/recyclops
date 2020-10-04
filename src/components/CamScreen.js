import React, {useEffect, useRef} from 'react'
import Webcam from "react-webcam";
import {IconButton} from './Button'

const button = {
    background:'#519369',
    color:'#DBF1CB',
    fontSize: 25,
    width: '325px',
    height: '66px',
    margin:'auto',
    justifyContent:'center',
    alignItems:'center',
    display:'flex',
    borderRadius: 35,
}

export default function CamView(props){

    let cam = useRef(null)

    useEffect(()=>{
        document.body.style.backgroundColor = "#4F4B59";
    })

    let captureImage = ()=>{
        console.log("Image capture")
        let img = cam.current.getScreenshot();

        console.log(img)
    }

    return(
        <div style={{width:'100%', height:'100vh'}}>
            <div style={{width:'100%', maxWidth:'500px', margin:'auto', marginTop:'25px'}}>
                <div style={{marginLeft:'80%'}}>
                    <IconButton onClick={()=>{props.goHome(true); props.camView(false)}} Icon={'fa-times'} style={{...button, width: '66px' }}ButtonText=""></IconButton>
                </div>
                <Webcam 
                    width='100%'
                    screenshotFormat="image/jpeg"
                    mirrored={true}
                    style={{margin:10, borderRadius:35}}
                    ref={cam}
                />
                <br></br>
                <IconButton onClick={()=>{captureImage()}} Icon={'fa-camera'} style={{...button}} ButtonText="Snap"></IconButton>
            </div>
        </div>
    )
}