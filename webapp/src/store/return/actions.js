import firebase from "firebase/app";
import "firebase/firestore";

import { hideQueue } from '../queue/actions';
import { addCountToBrowseItem } from '../browseItems/actions';

export const C = {
    SET_RETURN_NUMBER: "SET_RETURN_NUMBER",
    BEGIN_RETURN: "BEGIN_RETURN",
    INCREMENT_STEP: "INCREMENT_STEP",
    SUBMIT_RETURN: "SUBMIT_RETURN",
    FINISH_RETURN: "FINISH_RETURN"
}

export const beginReturn = () => dispatch => {
    var db = firebase.firestore();
    dispatch({type: C.BEGIN_RETURN,});
    db.collection("orders").doc("return").set({isWaitingForUser: true});
    db.collection("orders").doc("order").set({type: "return"});
    dispatch({type: C.SUBMIT_RETURN});
}

export const setReturnNumber = (returnNumber) => dispatch => {
    dispatch({type: C.SET_RETURN_NUMBER, returnNumber});
}

export const incrementStep = () => dispatch => {
    dispatch({type: C.INCREMENT_STEP});
}

export const submitReturn = (isFinal, isWaitingForUser, position) => dispatch => {
    var db = firebase.firestore();
    db.collection("orders").doc("robotStatus").set({ready: false});
    db.collection("orders").doc("return").set({isFinal, isWaitingForUser, position});
    dispatch({type: C.SUBMIT_RETURN});
}

export const finishReturn = (returnNumber, returnItems, email, ordera) => dispatch => {
    var db = firebase.firestore();
    db.collection("orders").doc("robotStatus").set({ready: true});
    db.collection("orders").doc("return").set({isWaitingForUser: true});
    db.collection("orders").doc("order").set({type: "none"});
    for (var i = 0; i < returnItems.length; i++) {
        dispatch(addCountToBrowseItem(returnItems[i], 1))
    }
    dispatch(hideQueue());
    dispatch({type: C.FINISH_RETURN});
}