const getStartValue = () => {
    return localStorage["start"] ? Number(localStorage["start"]) : 0
}
const getMaxValue = () => {
    return localStorage["Max"] ? Number(localStorage["Max"]) : 0
}
const initialState = {
    startValue: getStartValue(),
    maxValue: getMaxValue(),
    display: getStartValue(),
}
type Statetype = {
    startValue: number,
    maxValue: number,
    display: number
}
type NumUpACType = {
    type: 'NUM-UP'
}
type ResetACType = {
    type: 'RESET'
}
type MaxValueACType = {
    type: 'SET_MAX'
    value: number
}
type StartValueACType = {
    type: 'SET_START'
    value: number
}
const SET_NUMBER = "SET_NUMBER"
const SET_MAX = "SET_MAX_VALUE"
const RESET = "RESET"
const SET_START = "SET_START"

type ActionType = NumUpACType | ResetACType | MaxValueACType | StartValueACType

export const counterReducer = (state: Statetype = initialState, action: ActionType): Statetype => {
    switch (action.type) {
        case "NUM-UP": {
            const newValue = state.display + 1
            return {
                ...state,
                display: newValue
            };
        }
        case "RESET": {
            return {...state, display: state.startValue};
        }
        case "SET_START": {
            localStorage["start"] = action.value
            return {...state, startValue: action.value};
        }
        case "SET_MAX": {
            localStorage["Max"] = action.value
            return {...state, maxValue: action.value};
        }
        default:
            return state;
    }
};

export const NumUpAC = (): NumUpACType => {
    return {type: "NUM-UP"}
}
export const ResetAC = (): ResetACType => {
    return {type: "RESET"}
}
export const MaxValueAC = (value: number): MaxValueACType => {
    return {type: "SET_MAX", value}
}
export const StartValueAC = (value: number): StartValueACType => {
    return {type: "SET_START", value}
}

const addN = (n: number) =>{
    return (a: number) => a + n
}
const add5 = (addN(5))
add5 (5)