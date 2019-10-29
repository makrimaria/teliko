import Firebase from 'firebase'

let firebaseConfig = {
    apiKey: "AIzaSyAzNb2pxTTWK-zFd0q8D2c-LmEzfwzKdeI",
    authDomain: "prodigy-chat-ec236.firebaseapp.com",
    databaseURL: "https://prodigy-chat-ec236.firebaseio.com",
    projectId: "prodigy-chat-ec236",
    storageBucket: "prodigy-chat-ec236.appspot.com",
    messagingSenderId: "682606552269",
    appId: "1:682606552269:web:7afa986f09246d59a2b584"
  };

  // Initialize Firebase
let app = Firebase.initializeApp(firebaseConfig)
export const db = app.database()