
import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB7ZRObXLN62nGvp0erlC_DyK_JLxrR-vc",
  authDomain: "clp-game.firebaseapp.com",
  databaseURL: "https://clp-game.firebaseio.com",
  projectId: "clp-game",
  storageBucket: "clp-game.appspot.com",
  messagingSenderId: "131593891144",
  appId: "1:131593891144:web:c8e976bebcdd7e21b1d77d",
  measurementId: "G-FGJKV8XGEM"
}

try {
  firebase.initializeApp(config)
} catch (err) {
  // we skip the "already exists" message which is
  // not an actual error when we're hot-reloading
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase