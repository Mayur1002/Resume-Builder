const firebase = require("firebase")
const firebaseConfig = {
    apiKey: "AIzaSyASVEQV73px5eua5oCxt06fdBXZLJMq9AE",
    authDomain: "resumeweb-cf63b.firebaseapp.com",
    databaseURL: "https://resumeweb-cf63b-default-rtdb.firebaseio.com",
    projectId: "resumeweb-cf63b",
    storageBucket: "resumeweb-cf63b.appspot.com",
    messagingSenderId: "977877813245",
    appId: "1:977877813245:web:2ce9dff5ee50648c21fb94"
  };

  firebase.initializeApp(firebaseConfig)
  const db = firebase.firestore()
  const User = db.collection('Users')
  module.exports = User;