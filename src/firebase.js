import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI_ITuCXBK23y3iftNO4Id5otpdFeVl7A",
  authDomain: "gm-screen-plus.firebaseapp.com",
  databaseURL: "https://gm-screen-plus.firebaseio.com",
  projectId: "gm-screen-plus",
  storageBucket: "gm-screen-plus.appspot.com",
  messagingSenderId: "175792647916",
  appId: "1:175792647916:web:b7674c69ab2d6433e27fc9",
  measurementId: "G-R3P23WK2WS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export default firebase;
