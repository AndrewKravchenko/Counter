import {connect} from "react-redux";
import App from "./App";
import {MaxValueAC, NumUpAC, ResetAC, StartValueAC} from "./redux/counterReducer";

let mapStateToProps = (state: any) => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        display: state.counter.display,
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        increment: () => {
            dispatch(NumUpAC())
        },
        setStartValue: (value: number) => dispatch(StartValueAC(value)),
        setMaxValue: (value: number) => dispatch(MaxValueAC(value)),
        setDisplay: (value: number) => dispatch(MaxValueAC(value)),
        reset: () => dispatch(ResetAC()),
    }
}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)