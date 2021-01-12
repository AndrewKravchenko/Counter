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
    startValueRender: number
    setStartValueRender: (startRender: number) => void
    maxValueRender: number
    setMaxValueRender: (maxRender: number) => void
    error: string
    setError: (error: string) => void
}
export const SettingCounter = (props: SettingCounterPropsType) => {
    // const [startValueRender, setStartValueRender] = useState<number>(props.startValue)
    // const [maxValueRender, setMaxValueRender] = useState<number>(props.maxValue)
    // const [error, setError] = useState('')

    const changeStartValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        props.setStartValueRender(e.currentTarget.valueAsNumber)
        check(e.currentTarget.valueAsNumber, props.maxValueRender)
    }
    const changeMaxValueRender = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValueRender(e.currentTarget.valueAsNumber)
        check(props.startValueRender,e.currentTarget.valueAsNumber)
    }
    const check = (begin: number, end: number) => {
        if (begin >= end) {
            props.setError("start Value >= max Value")
        } else if (begin && end < 0) {
            props.setError(" max Value < 0")
        } else if (begin < 0) {
            props.setError(" start Value < 0")
        } else {
            props.setError("")
        }
    }

    const setButtonHandler = () => {
        if (!props.error) {
            props.setStartValue(props.startValueRender)
            props.setMaxValue(props.maxValueRender)
            props.reset()
        }
    }

    return <><div className={cl.displayCounter}>

        <div className={cl.settings}>
            <p className={cl.settingsTitle}>max value:</p>
            <input type="number" className={props.error ? cl.error : cl.good}
                   value={props.maxValueRender}
                   onChange={changeMaxValueRender}/>
        </div>
        <div className={cl.settings}>
            <p className={cl.settingsTitle}>start value:</p>
            <input type="number" className={props.error ? cl.error : cl.good}
                   value={props.startValueRender}
                   onChange={changeStartValueRender}/>
        </div>
        <div className={cl1.buttonCounter}>
            <Button title={'set'}
                    disabled={(props.startValueRender === props.startValue && props.maxValue === props.maxValueRender) || props.error !== ""}
                    onClick={setButtonHandler}/>
        </div></div>
        <Counter startValue={props.startValue}
                 maxValue={props.maxValue}
                 reset={props.reset}
                 numUp={props.numUp}
                 error={props.error}
                 display={props.display}/>
    </>
}