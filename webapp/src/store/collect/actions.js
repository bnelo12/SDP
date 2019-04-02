import firebase from "firebase/app";
import "firebase/firestore";

import { hideQueue } from '../queue/actions';

export const C = {
    SET_COLLECT_NUMBER: "SET_COLLECT_NUMBER",
    BEGIN_COLLECT: "BEGIN_COLLECT",
    INCREMENT_COLLECT_STEP: "INCREMENT_COLLECT_STEP",
    SUBMIT_COLLECT: "SUBMIT_COLLECT",
    FINISH_COLLECT: "FINISH_COLLECT",
    RESET: "RESET"
}

export const beginCollect = () => dispatch => {
    dispatch({type: C.BEGIN_COLLECT,});
}

export const setCollectNumber = (collectNumber) => dispatch => {
    dispatch({type: C.SET_COLLECT_NUMBER, collectNumber});
}

export const incrementCollectStep = () => dispatch => {
    dispatch({type: C.INCREMENT_COLLECT_STEP});
}

export const submitCollect = (isFinal, isWaitingForUser, position) => dispatch => {
    var db = firebase.firestore();
    db.collection("orders").doc("robotStatus").set({ready: false});
    db.collection("orders").doc("collect").set({isFinal, isWaitingForUser, position});
    dispatch({type: C.SUBMIT_COLLECT});
}

export const finishCollect = () => dispatch => {
    var db = firebase.firestore();
    db.collection("orders").doc("robotStatus").set({ready: true});
    db.collection("orders").doc("collect").set({isWaitingForUser: true});
    db.collection("orders").doc("order").set({type: "none"});
    dispatch(hideQueue());
    dispatch({type: C.FINISH_COLLECT});
}