import {connect} from "react-redux";
import App from "./App";
import {
    ErrorAC,
    MaxValueAC,
    MaxValueRenderAC,
    NumUpAC,
    ResetAC,
    StartValueAC,
    StartValueRenderAC
} from "./redux/counterReducer";

let mapStateToProps = (state: any) => {
    return {
        startValue: state.counter.startValue,
        maxValue: state.counter.maxValue,
        display: state.counter.display,
        startValueRender: state.counter.startValueRender,
        maxValueRender: state.counter.maxValueRender,
        error: state.counter.error
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
        setStartValueRender: (value: number) => dispatch(StartValueRenderAC(value)),
        setMaxValueRender: (value: number) => dispatch(MaxValueRenderAC(value)),
        setError: (error: string) => (dispatch(ErrorAC(error)))
    }
}


export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App)