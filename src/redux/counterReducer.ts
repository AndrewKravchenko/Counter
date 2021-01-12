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
    startValueRender: getStartValue(),
    maxValueRender: getMaxValue(),
    error: ""
}
type Statetype = {
    startValue: number,
    maxValue: number,
    display: number,
    startValueRender: number,
    maxValueRender: number,
    error: string,
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
type StartValueRenderACType = {
    type: 'SET_START_VALUE_RENDER'
    value: number
}
type MaxValueRenderACType = {
    type: 'SET_MAX_VALUE_RENDER'
    value: number
}
type ErrorACType = {
    type: 'ERROR'
    error: string
}
const SET_START_VALUE_RENDER = "SET_START_VALUE_RENDER"
const SET_MAX_VALUE_RENDER = "SET_MAX_VALUE_RENDER"
const ERROR = "ERROR"
const NUM_UP = "NUM-UP"
const SET_MAX = "SET_MAX"
const RESET = "RESET"
const SET_START = "SET_START"

type ActionType =
    NumUpACType
    | ResetACType
    | MaxValueACType
    | StartValueACType
    | ErrorACType
    | StartValueRenderACType
    | MaxValueRenderACType

export const counterReducer = (state: Statetype = initialState, action: ActionType): Statetype => {
    switch (action.type) {
        case NUM_UP: {
            const newValue = state.display + 1
            return {
                ...state,
                display: newValue
            };
        }
        case RESET: {
            return {...state, display: state.startValue};
        }
        case SET_START: {
            localStorage["start"] = action.value
            return {...state, startValue: action.value};
        }
        case SET_MAX: {
            localStorage["Max"] = action.value
            return {...state, maxValue: action.value};
        }
        case SET_START_VALUE_RENDER: {
            return {...state, startValueRender: action.value};
        }
        case SET_MAX_VALUE_RENDER: {
            return {...state, maxValueRender: action.value};
        }
        case ERROR: {
            return {...state, error: action.error};
        }
        default:
            return state;
    }
};

export const NumUpAC = (): NumUpACType => {
    return {type: NUM_UP}
}
export const ResetAC = (): ResetACType => {
    return {type: RESET}
}
export const MaxValueAC = (value: number): MaxValueACType => {
    return {type: SET_MAX, value}
}
export const StartValueAC = (value: number): StartValueACType => {
    return {type: SET_START, value}
}

export const StartValueRenderAC = (value: number): StartValueRenderACType => {
    return {type: SET_START_VALUE_RENDER, value}
}
export const MaxValueRenderAC = (value: number): MaxValueRenderACType => {
    return {type: SET_MAX_VALUE_RENDER, value}
}
export const ErrorAC = (error: string): ErrorACType => {
    return {type: "ERROR", error}
}
