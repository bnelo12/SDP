import firebase from "firebase/app";
import "firebase/firestore";

import { emptyCart } from '../cart/actions';
import { incrementStep } from '../return/actions';

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
    userOrder.date = (new Date()).toUTCString();
    var db = firebase.firestore();
    dispatch({type: C.SUBMIT_ORDER, items: order})
    dispatch(emptyCart(email));
    db.collection("items").doc("items").set({...updatedItems});
    db.collection("orders").doc(email).get()
        .then((doc) => {
            if (!doc.exists) {
                db.collection("orders").doc(email).set({orders:[userOrder]})
            } else {
                db.collection("orders").doc(email).set({orders: doc.data()["orders"].concat(userOrder)})
            }
        });
    db.collection("orders").doc("order").set({items: order});
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