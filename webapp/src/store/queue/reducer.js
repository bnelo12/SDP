import { C } from './actions'

const defaultState = {
    shouldShowQueue: false,
    wasOpen: false,
    queue: {},
    dataReference: null,
    haveReceived: false,
    isWritingData: false
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
        case C.SUBSCRIBE_TO_QUEUE_DATA:
            return {
                ...state,
                dataReference: action.reference
            }
        case C.UNSUBSCRIBE_FROM_QUEUE_DATA:
            return {
                ...state,
                dataReference: null
            }
        case C.RECEIVED_QUEUE_DATA:
            return {
                ...state,
                haveReceived: true,
                queue: action.queue
            }
        default: return state;
    }
}