import React from 'react';
import cl from "./Display.module.css"
type DisplayType = {
    display: number
    error: string
}

export function Display(props: DisplayType) {
    return (
        <h1 className={`${cl.displayCounter}  ${props.error ? cl.error : ""}`} >
            {props.error ? props.error : props.display}
        </h1>
    )
}