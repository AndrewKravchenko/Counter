import React, {useState} from 'react';
import {Button} from "./Button";
import {Display} from "./Display";

export function SettingCounter() {
    let [num, setNum] = useState(0)

    const set = () => setNum(num)
    const numUp = () => setNum(num + 1)
    const reset = () => setNum(num - 1)


    return <div>
        <Display num={num}/>
        <div className="buttonCounter">

            <select className="buttonInc"></select>

            <span className="buttonInc"><Button title={'set'} disabled={num === num} onClick={set}/></span>
    </div>
</div>
}