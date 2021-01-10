import React from 'react';
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import cl from "./Counter.module.css"
import cl1 from "../Button/Button.module.css"

type PropsType = {
    startValue: number
    maxValue: number
    display: number
    reset: () => void
    numUp: () => void
    error: string
}

export function Counter(props: PropsType) {
    return <div className={cl.counter}>
        <Display error={props.error} display={props.display}/>
        <div className={cl1.buttonCounter}>
            <Button title={'inc'} disabled={props.display === props.maxValue} onClick={props.numUp}/>
            <Button title={'reset'} disabled={props.display === props.startValue} onClick={props.reset}/>
        </div>
    </div>
}
