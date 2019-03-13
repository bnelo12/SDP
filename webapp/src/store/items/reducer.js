import { C } from './actions'

const defaultState = {
    items: {},
    dataReference: null,
    haveReceived: false,
    isWritingData: false
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SUBSCRIBE_TO_ITEMS_DATA:
            return {
                ...state,
                dataReference: action.reference
            }
        case C.UNSUBSCRIBE_FROM_ITEMS_DATA:
            return {
                ...state,
                dataReference: null
            }
        case C.RECEIVED_ITEMS_DATA:
            return {
                ...state,
                haveReceived: true,
                items: action.items
            }
            case C.WRITE_ITEMS_DATA: {
                return {
                    ...state,
                    isWritingData: true
                }
            }
            case C.WRITE_ITEMS_DATA_SUCCESS:
                return {
                    ...state,
                    isWritingData: false
                }
            case C.WRITE_ITEMS_DATA_FAIL:
                return {
                    ...state,
                    isWritingData: false
                }
        default: return state;
    }
}