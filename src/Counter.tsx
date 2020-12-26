import React, {useState} from 'react';
import {Button} from "./Button";
import {Display} from "./Display";

export function Counter() {
    let [num, setNum] = useState(0)

    const numUp = () => setNum(num + 1)
    const reset = () => setNum(0)

    return <div className="counter">
        <Display num={num}/>
        <div className="buttonCounter">
            <Button title={'inc'} disabled={num === 5} onClick={numUp}/>
            <Button title={'reset'} disabled={num === 0} onClick={reset}/>
        </div>
    </div>
}