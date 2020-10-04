import React, {useEffect} from 'react';
import Button from './Button.js'

export default function HomeScreen(props){
    useEffect(()=>{
        document.body.style.backgroundColor = props.styles?.root.background;
    })
    
    return (
        <div style={props.styles?.root}>
            <p style={{...props.styles?.root.h1, paddingTop:'200px'}} >Recyclops</p>
            <br></br>
            <p style={{...props.styles?.root.h2, paddingTop:'90px', paddingBottom:'90px'}}>Ready to save the earth?</p>

            <Button onClick={()=>{props.goHome(false); props.camView(false)}} style={{...props.styles?.button, marginBottom:'50px'}} ButtonText="Questionaire"></Button>
            <Button onClick={()=>{props.goHome(false); props.camView(true)}} style={props.styles?.button} ButtonText="Scan Barcode"></Button>
        </div>
    )
}