import firebase from "firebase/app";
import "firebase/auth";

import { showInvalidLoginToast } from '../toasts/actions';

export const C = {
    SIGNING_IN: "SIGNING_IN",
    FINISHED_SIGNING_IN: "FINISHED_SIGNING_IN",
    LOG_OUT: "LOG_OUT",
    AUTH_STATUS_CHANGED: "AUTH_STATUS_CHANGED",
    ADD_AUTH_CHANGED_LISTENER: "ADD_AUTH_CHANGED_LISTENER",
    REMOVE_AUTH_CHANGED_LISTENER: "REMOVE_AUTH_CHANGED_LISTENER",
}

export const subscribeOnAuthStateChanged = () => dispatch => {
    var listener = firebase.auth().onAuthStateChanged((userRecord) => {
        dispatch({type: C.AUTH_STATUS_CHANGED, userRecord});
    });
    dispatch({type: C.ADD_AUTH_CHANGED_LISTENER, listener});
}

export const unsubscribeOnAuthStateChanged = (unsubscribeCB) => dispatch => {
    unsubscribeCB();
    dispatch({type: C.REMOVE_AUTH_CHANGED_LISTENER});
}

export const login = (email, password) => dispatch => {
    dispatch({type: C.SIGNING_IN});
    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch((error) => {
            dispatch(showInvalidLoginToast(error.message))
        })
        .finally(() => {
            dispatch({type: C.FINISHED_SIGNING_IN});
        });
}

export const logout = () => dispatch => {
    dispatch({type: C.LOG_OUT});    
    firebase.auth().signOut();
}
