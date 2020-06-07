import firebase from "firebase";

export const firebaseconfig = {
  // apiKey: process.env.REACT_APP_firebase_apiKey,
  // authDomain: process.env.REACT_APP_firebase_authDomain,
  // databaseURL: process.env.REACT_APP_firebase_databaseURL,
  // projectId: process.env.REACT_APP_firebase_projectId,
  // storageBucket:  process.env.REACT_APP_firebase_storageBucket,
  // messagingSenderId: process.env.REACT_APP_firebase_messagingSenderId,
  // appId: process.env.REACT_APP_firebase_appId,
  apiKey: "AIzaSyAB8mlPFhEuPCKEQjEjfx8Mc3PyZcXxmKE",
  authDomain: "firesafetyproject-c39ce.firebaseapp.com",
  databaseURL: "https://firesafetyproject-c39ce.firebaseio.com",
  projectId: "firesafetyproject-c39ce",
  storageBucket: "firesafetyproject-c39ce.appspot.com",
  messagingSenderId: "329989648653",
  appId: "1:329989648653:web:8448d1a24fc0286f48c044"
};
export const firebaseinit = firebase.initializeApp(firebaseconfig)

export const userId = "JSvziki9NgcaWoDQmi3zK9oyRN82";

export function firebaseref(ref) {
  return firebaseinit.database().ref(ref)
}
