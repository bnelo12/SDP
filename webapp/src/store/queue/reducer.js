import { C } from './actions'

const defaultState = {
    shouldShowQueue: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SHOW_QUEUE:
            return {
                ...state,
                shouldShowQueue: true
            }
        case C.HIDE_QUEUE:
            return {
                ...state,
                shouldShowQueue: false
            }
        default: return state;
    }
}