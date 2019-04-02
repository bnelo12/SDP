import firebase from "firebase/app";
import "firebase/firestore";

import { emptyCart } from '../cart/actions';
import { incrementStep } from '../return/actions';
import { submitCollect, incrementCollectStep, beginCollect } from '../collect/actions';

export const C = {
    SUBMIT_ORDER: "SUBMIT_ORDER",
    SUBSCRIBE_TO_ORDERS_DATA: "SUBSCRIBE_TO_ORDERS_DATA",
    UNSUBSCRIBE_FROM_ORDERS_DATA: "UNSUBSCRIBE_FROM_ORDERS_DATA",
    RECEIVED_ORDERS_DATA: "RECEIVED_ORDERS_DATA",
    RECEIVED_ROBOT_STATUS: "RECEIVED_ROBOT_STATUS"
}

export const submitOrder = (request) => dispatch => {
    var {cartItems, items, email} = request;
    var order = [];
    var userOrder = {};
    userOrder.items = {};
    var updatedItems = JSON.parse(JSON.stringify(items));
    for (let item of Object.keys(cartItems)) {
        for (let i = 0; i < cartItems[item].count; i++) {
            order.push(items[item][i]);
            userOrder.items[items[item][i]] = item;
            updatedItems[item].shift(); 
        }
    }
    dispatch(submitCollect(Object.keys(userOrder.items).length === 1, false, Object.keys(userOrder.items)[0]));
    userOrder.date = (new Date()).toUTCString();
    var db = firebase.firestore();
    dispatch({type: C.SUBMIT_ORDER, items: order})
    dispatch(emptyCart(email));
    db.collection("items").doc("items").set({...updatedItems});
    db.collection("orders").doc(email).get()
        .then((doc) => {
            if (!doc.exists) {
                db.collection("orders").doc(email).set({orders:[userOrder]}).then(
                    () => dispatch(beginCollect())
                )
            } else {
                db.collection("orders").doc(email).set({orders: doc.data()["orders"].concat(userOrder)}).then(
                    () => dispatch(beginCollect())
                )
            }
        });
    db.collection("orders").doc("order").set({type: "collect"});
}

export const subscribeToOrdersData = (email) => dispatch => {
    var db = firebase.firestore();    
    var reference = db.collection("orders").doc(email)
        .onSnapshot((doc) => {
            if (doc.exists) {
                dispatch({type: C.RECEIVED_ORDERS_DATA, orders: doc.data().orders});
            }
        });
    reference = db.collection("orders").doc("robotStatus")
        .onSnapshot((doc) => {
            if (doc.exists) {
                dispatch({type: C.RECEIVED_ROBOT_STATUS, status: doc.data().ready});
                if (doc.data().ready) {
                    dispatch(incrementStep());
                    dispatch(incrementCollectStep());
                }
            }
        });
    dispatch({type: C.SUBSCRIBE_TO_ORDERS_DATA, reference})
}

export const unsubscribeFromOrdersData = (reference) => dispatch => {
    if (reference) {
        reference();
    }
    dispatch({type: C.UNSUBSCRIBE_FROM_ORDERS_DATA})
}