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
            />
        </div>
    );
}

export default App;
