import { C } from './actions';

const defaultState = {
    haveReceived: false,
    items: Object.create(null),
    dataReference: null,
    isWritingData: false
};

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SUBSCRIBE_TO_BROWSE_ITEMS_DATA:
            return {
                ...state,
                dataReference: action.reference
            }
        case C.UNSUBSCRIBE_TO_BROWSE_ITEMS_DATA:
            return {
                ...state,
                dataReference: null
            }
        case C.RECEIVED_BROWSE_ITEMS_DATA:
            return {
                ...state,
                haveReceived: true,
                items: {
                    ...state.items,
                    ...action.items
                }
            }
        case C.WRITE_BROWSE_ITEMS_DATA: {
            return {
                ...state,
                isWritingData: true
            }
        }
        case C.WRITE_BROWSE_ITEMS_DATA_SUCCESS: {
            return {
                ...state,
                isWritingData: false
            }
        }
        case C.WRITE_BROWSE_ITEMS_DATA_FAIL: {
            return {
                ...state,
                isWritingData: false
            }
        }
        case C.RESET:
            return {
                haveReceived: false,
                items: Object.create(null),
                dataReference: null,
                isWritingData: false
            }
        default: 
            return state;
    }
}