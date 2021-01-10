import {connect} from "react-redux";
import {SettingCounter} from "./SettingCounter";
import {MaxValueRenderAC, StartValueRenderAC} from "./SettingCounterReducer";

let mapStateToProps = (state: any) => {
    debugger
    return {
        StartValueRenderAC: state.counter.StartValueRenderAC,
        MaxValueRenderAC: state.counter.MaxValueRenderAC,
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        setStartValueRender: (value: number) => dispatch(StartValueRenderAC(value)),
        setMaxValueRender: (value: number) => dispatch(MaxValueRenderAC(value)),

    }

}

export const SettingCounterContainer = connect(mapStateToProps, mapDispatchToProps)(SettingCounter)