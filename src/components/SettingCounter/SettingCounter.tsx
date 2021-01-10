import React, {ChangeEvent, useState} from 'react';
import {Counter} from "../Counter/Counter";
import {Button} from "../Button/Button";
import cl from "./SettingCounter.module.css"
import cl1 from "../Button/Button.module.css"


type SettingCounterPropsType = {
    display: number
    startValue: number
    setStartValue: (start: number) => void
    maxValue: number
    setMaxValue: (max: number) => void
    reset: () => void
    numUp: () => void
}
export const SettingCounter = (props: SettingCounterPropsType) => {
    const [startValueRender, setStartValueRender] = useState<number>(props.startValue)
    const [maxValueRender, setMaxValueRender] = useState<number>(props.maxValue)
    const [error, setError] = useState('')

    const changeStartValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValueRender(e.currentTarget.valueAsNumber)
        check(e.currentTarget.valueAsNumber, maxValueRender)
    }
    const changeMaxValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValueRender(e.currentTarget.valueAsNumber)
        check(startValueRender,e.currentTarget.valueAsNumber)
    }
    const check = (begin: number, end: number) => {
        if (begin >= end) {
            setError("start Value >= max Value")
        } else if (begin && end < 0) {
            setError(" max Value < 0")
        } else if (begin < 0) {
            setError(" start Value < 0")
        } else {
            setError("")
        }
    }

    const setButtonHandler = () => {
        if (!error) {
            props.setStartValue(startValueRender)
            props.setMaxValue(maxValueRender)
            props.reset()
        }
    }

    return <><div className={cl.displayCounter}>

        <div className={cl.settings}>
            <p className={cl.settingsTitle}>max value:</p>
            <input type="number" className={error ? cl.error : cl.good} value={maxValueRender} onChange={changeMaxValueRender}/>
        </div>
        <div className={cl.settings}>
            <p className={cl.settingsTitle}>start value:</p>
            <input type="number" className={error ? cl.error : cl.good}
                   value={startValueRender}
                   onChange={changeStartValueRender}/>
        </div>
        <div className={cl1.buttonCounter}>
            <Button title={'set'}
                    disabled={(startValueRender === props.startValue && props.maxValue === maxValueRender) || error !== ""}
                    onClick={setButtonHandler}/>
        </div></div>
        <Counter startValue={props.startValue}
                 maxValue={props.maxValue}
                 reset={props.reset}
                 numUp={props.numUp}
                 error={error}
                 display={props.display}/>
    </>
}