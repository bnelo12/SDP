const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

exports.getOrder = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var docRef = db.collection("orders").doc("order");
    docRef.get().then(function(doc) {
        response.send(doc.data());
    }).catch(function(error) {
        response.send(error);
    });
});

exports.getCollect = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var docRef = db.collection("orders").doc("collect");
    docRef.get().then(function(doc) {
        response.send(doc.data());
    }).catch(function(error) {
        response.send(error);
    });
});

exports.getReturn = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var docRef = db.collection("orders").doc("return");
    docRef.get().then(function(doc) {
        response.send(doc.data());
    }).catch(function(error) {
        response.send(error);
    });
});

exports.finishOrder = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var orderRef = db.collection("orders").doc("order");
    orderRef.set({type: "none"})
        .then(() => {
            var queueRef = db.collection("queue").doc("queue");
            queueRef.get().then(doc => {
                var queue = doc.data();
                queue.users.shift();
                queueRef.set(queue);
            }).then(() => {
                response.send("success");
            })
        })
});

exports.finishReturn = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var returnRef = db.collection("orders").doc("return");
    returnRef.set({isWaitingForUser: true})
        .then(() => {
            var statusRef = db.collection("orders").doc("robotStatus");
            statusRef.set({ready: true}).then(() => response.send("success"));
            
        });
});

exports.finishCollect = functions.https.onRequest((request, response) => {
    var db = admin.firestore();
    var collectRef = db.collection("orders").doc("collect");
    collectRef.set({isWaitingForUser: true})
        .then(() => {
            var statusRef = db.collection("orders").doc("robotStatus");
            statusRef.set({ready: true}).then(() => response.send("success"));
        });
});
   
