import firebase from "firebase/app";
import "firebase/firestore";

export const C = {
    SUBSCRIBE_TO_BROWSE_ITEMS_DATA: "SUBSCRIBE_TO_BROWSE_ITEMS_DATA",
    UNSUBSCRIBE_TO_BROWSE_ITEMS_DATA: "UNSUBSCRIBE_TO_BROWSE_ITEMS_DATA",
    RECEIVED_BROWSE_ITEMS_DATA: "RECEIVED_BROWSE_ITEMS_DATA"
}

export const subscribeToBrowseItemsData = () => dispatch => {
    var db = firebase.firestore();    
    var reference = db.collection("browseItems")
        .onSnapshot(function(snapshot) {
            var newData = Object.create(null);
            for (let change of snapshot.docChanges()){
                if (change.type === "added" || change.type === "modified") {
                    newData[change.doc.id] = change.doc.data();
                }
            }
            dispatch({type: C.RECEIVED_BROWSE_ITEMS_DATA, items: newData});
        });
    dispatch({type: C.SUBSCRIBE_TO_BROWSE_ITEMS_DATA, reference})
}

export const unsubscribeToBrowseItemsData = (reference) => dispatch => {
    if (reference) {
        reference();
    }
    dispatch({type: C.UNSUBSCRIBE_TO_BROWSE_ITEMS_DATA})
}