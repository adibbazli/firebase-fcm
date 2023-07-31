
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.1.0/firebase-messaging-compat.js');

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBlo6y6evat7l1KRvF3R7ptnfvd6wJXMwE",
    authDomain: "test-push-message-e7f90.firebaseapp.com",
    projectId: "test-push-message-e7f90",
    storageBucket: "test-push-message-e7f90.appspot.com",
    messagingSenderId: "506456702082",
    appId: "1:506456702082:web:8f9d2fd50f484ccfb7c89b",
    measurementId: "G-XXZ2G21RRF"
};

// initialize at custom folder
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

console.log("I am ready! (Firebase 10.1.0)");

// Handle incoming messages
messaging.onBackgroundMessage(function (payload) {
    console.log("Message received on background: ", payload);
    // Handle the push message here
});