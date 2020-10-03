import React, {useEffect} from 'react';
import Button from './Button.js'

export default function QuestionScreen(props){
    useEffect(()=>{
        document.body.style.backgroundColor = props.styles?.root.background;
    })

    return(
    <div style={props.styles?.root}>
        <p style={props.styles?.root?.h1}>{props.Title}</p>
        <br></br>
        <p style={props.styles?.root?.h2}>{props.Question}</p>
        <div style={props.styles?.buttoncontainer}>
            {props.Options.map((e,i)=>{
                console.log(e)
                let buttonProps = {
                    style: props.styles?.button,
                    ButtonText: e.text,
                    onClick: (e) => {
                        console.log(e)
                    }
                }
                return (<Button {...buttonProps}></Button>)
            })}
        </div>

        <Button onClick={()=>{props.goBack()}} style={ {... props.styles?.button, width:'164px', position:'absolute', left:'25px', bottom:'40px'}} ButtonText="Go Back"></Button>
    </div>
    )
}