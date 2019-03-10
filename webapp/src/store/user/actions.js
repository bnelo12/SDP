import firebase from "firebase/app";
import "firebase/auth";

export const C = {
    SIGNING_IN: "SIGNING_IN",
    FINISHED_SIGNING_IN: "FINISHED_SIGNING_IN",
    LOG_OUT: "LOG_OUT",
    AUTH_STATUS_CHANGED: "AUTH_STATUS_CHANGED",
    SUBSCRIBE_TO_AUTH_STATE: "SUBSCRIBE_TO_AUTH_STATE",
    UNSUBSCRIBE_TO_AUTH_STATE: "UNSUBSCRIBE_TO_AUTH_STATE",
    ADD_INVALID_LOGIN_TOAST: "ADD_INVALID_LOGIN_TOAST",
    FINISHED_ADDING_INVALID_LOGIN_TOAST: "FINISHED_ADDING_INVALID_LOGIN_TOAST"    
}

export const subscribeOnAuthStateChanged = () => dispatch => {
    var listener = firebase.auth().onAuthStateChanged((userRecord) => {
        dispatch({type: C.AUTH_STATUS_CHANGED, userRecord});
    });
    dispatch({type: C.SUBSCRIBE_TO_AUTH_STATE, listener});
}

export const unsubscribeOnAuthStateChanged = (unsubscribeCB) => dispatch => {
    unsubscribeCB();
    dispatch({type: C.UNSUBSCRIBE_TO_AUTH_STATE});
}

export const login = (email, password) => dispatch => {
    dispatch({type: C.SIGNING_IN});
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
           dispatch(addInvalidLoginToast(error.message))
        })
        .finally(() => {
            dispatch({type: C.FINISHED_SIGNING_IN});
        });
}

export const logout = () => dispatch => {
    dispatch({type: C.LOG_OUT});    
    firebase.auth().signOut();
}

export const finishedAddingInvalidLoginToast = () => dispatch => {
    dispatch({type: C.FINISHED_ADDING_INVALID_LOGIN_TOAST});  
}

export const addInvalidLoginToast = (message) => dispatch => {
    dispatch({type: C.ADD_INVALID_LOGIN_TOAST, message});
}
