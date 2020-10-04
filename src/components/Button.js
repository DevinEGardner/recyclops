import React, {useState} from 'react';

export default function Button(props){

    let [touchState, changeTouchState] = useState(false)

    return(
        <div onTouchStart={()=>{changeTouchState(true)}} onTouchEnd={()=>{changeTouchState(false)}} style={{...props.style, boxShadow: !touchState ? '' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} onClick={props.onClick}>
            {props.ButtonText}
        </div>
    )
}

export function IconButton(props){

    let [touchState, changeTouchState] = useState(false)

    return(
        <div onTouchStart={()=>{changeTouchState(true)}} onTouchEnd={()=>{changeTouchState(false)}} style={{...props.style, boxShadow: !touchState ? '' : '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} onClick={props.onClick}>
            <i className={'fa ' + props.Icon}></i> <p style={{paddingLeft: props.Icon&&props.ButtonText ? '8px' : 0}}>{props.ButtonText}</p>
        </div>
    )
}