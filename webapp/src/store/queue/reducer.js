import { C } from './actions'

const defaultState = {
    shouldShowQueue: false,
    wasOpen: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SHOW_QUEUE:
            return {
                ...state,
                wasOpen: true,
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