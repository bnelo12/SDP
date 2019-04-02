import { C } from './actions';

const defaultState = {
    collectActive: false,
    collectNumber: 0,
    collectStep: 0,
    isWaitingForRobot: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.BEGIN_COLLECT:
            return {
                ...state,
                collectStep: 0,
                collectActive: true,
                isWaitingForRobot: true
            }
        case C.SET_COLLECT_NUMBER:
            return {
                ...state,
                collectNumber: action.collectNumber
            }
        case C.SUBMIT_COLLECT:
            return {
                ...state,
                isWaitingForRobot: true
            }
        case C.INCREMENT_COLLECT_STEP:
            return {
                ...state,
                collectStep: state.collectStep + 1
            }
        case C.FINISH_COLLECT:
            return {
                ...state,
                collectActive: false,
                collectNumber: 0,
                collectStep: 0,
                isWaitingForRobot: false
            }
        case C.RESET:
            return {
                collectActive: false,
                collectNumber: 0,
                collectStep: 0,
                isWaitingForRobot: false
            }
        default: return state;
    }
}