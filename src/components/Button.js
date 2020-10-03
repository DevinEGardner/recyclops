import React from 'react';

export default function Button(props){
    return(
        <div style={props.style} onClick={props.onClick}>
            {props.ButtonText}
        </div>
    )
}

export function IconButton(props){
    return(
        <div style={props.style} onClick={props.onClick}>
            <i className={props.Icon}></i> <p>{props.ButtonText}</p>
        </div>
    )
}