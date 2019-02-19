import { C } from './actions';

const defaultState = {
    haveReceived: false,
    items: Object.create(null),
    dataReference: null
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
        default: 
            return state;
    }
}