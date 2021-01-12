import React from 'react';
import './App.css';
import {SettingCounter} from "./components/SettingCounter/SettingCounter";

type PropsType = {
    display: number
    increment: () => void
    reset: () => void
    startValue: number
    setStartValue: (value: number) => void
    maxValue: number
    setMaxValue: (value: number) => void
    startValueRender: number
    setStartValueRender: (startRender: number) => void
    maxValueRender: number
    setMaxValueRender: (maxRender: number) => void
    error: string
    setError: (error: string) => void
}

function App(props: PropsType) {

    return (
        <div className="App">
            <SettingCounter startValue={props.startValue}
                            setStartValue={props.setStartValue}
                            maxValue={props.maxValue}
                            setMaxValue={props.setMaxValue}
                            display={props.display}
                            reset={props.reset}
                            numUp={props.increment}
                            startValueRender={props.startValueRender}
                            setStartValueRender={props.setStartValueRender}
                            maxValueRender={props.maxValueRender}
                            setMaxValueRender={props.setMaxValueRender}
                            error={props.error}
                            setError={props.setError}
            />
        </div>
    );
}


export default App;
