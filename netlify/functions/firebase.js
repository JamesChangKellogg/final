const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
apiKey: "AIzaSyAqL-ZHu1F-zkQiOw8sMA1Tpsk7YgS0o6E",
authDomain: "kelloggbuddies.firebaseapp.com",
projectId: "kelloggbuddies",
storageBucket: "kelloggbuddies.appspot.com",
messagingSenderId: "339327388559",
appId: "1:339327388559:web:6a53f95fde1d078fc1d9fa"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase