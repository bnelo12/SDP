import { C } from './actions';

const defaultState = {
    isSigningIn: false,
    authChangedListener: null,
    isAuthenticated: false,
    authStatusIsKnown: false,
    userRecord: null
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.SIGNING_IN:
            return {
                ...state,
                isSigningIn: true
            }
        case C.FINISHED_SIGNING_IN:
            return {
                ...state,
                isSigningIn: false
            }
        case C.LOG_OUT:
            return state;
        case C.AUTH_STATUS_CHANGED:
            return {
                ...state,
                userRecord: action.userRecord,
                isAuthenticated: !!action.userRecord,
                authStatusIsKnown: true
            }
        case C.ADD_AUTH_CHANGED_LISTENER:
            return {
                ...state,
                authChangedListener: action.listener
            }
        case C.REMOVE_AUTH_CHANGED_LISTENER:
            return {
                ...state,
                authChangedListener: null
            }
        default: 
            return state;
    }
}