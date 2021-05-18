const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCZV7_mlX1rYd2Vo_EFPbMHoJrCK9MXnQ0",
  authDomain: "kiei-451-f0745.firebaseapp.com",
  projectId: "kiei-451-f0745",
  storageBucket: "kiei-451-f0745.appspot.com",
  messagingSenderId: "707691730466",
  appId: "1:707691730466:web:7b755b6d3d8e78ea541c7b"} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase