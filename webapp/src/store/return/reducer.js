import { C } from './actions';

const defaultState = {
    returnActive: false,
    returnItems: [],
    returnNumber: 0,
    returnStep: 0,
    isWaitingForRobot: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.BEGIN_RETURN:
            return {
                ...state,
                returnStep: 0,
                returnActive: true
            }
        case C.SET_RETURN_NUMBER:
            return {
                ...state,
                returnNumber: action.returnNumber
            }
        case C.SUBMIT_RETURN:
            return {
                ...state,
                isWaitingForRobot: true
            }
        case C.INCREMENT_STEP:
            return {
                ...state,
                returnStep: state.returnStep + 1
            }
        case C.FINISH_RETURN:
            return {
                ...state,
                returnActive: false,
                returnNumber: 0,
                returnStep: 0,
                isWaitingForRobot: false
            }
        case C.RESET:
            return {
                returnActive: false,
                returnItems: [],
                returnNumber: 0,
                returnStep: 0,
                isWaitingForRobot: false
            }
        default: return state;
    }
}