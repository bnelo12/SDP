import { C } from './actions'

const defaultState = {
    items: []
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SUBMIT_ORDER:
            return {
                ...state,
                items: action.items
            }
        default: return state;
    }
}