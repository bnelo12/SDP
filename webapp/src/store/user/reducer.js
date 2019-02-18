import C from '../../constants.js';

const defaultState = {
    username: null
}

export default (state=defaultState, action) => {
    switch(action.type) {
        case C.USER_LOGIN:
            return {
                ...state,
                username: action.username
            }
        case C.USER_LOGOUT:
            return {
                ...state,
                username: null
            }
        default: 
            return state;
    }
}