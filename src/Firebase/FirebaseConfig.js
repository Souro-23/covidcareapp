import firebase from "firebase/app";
import "firebase/auth"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDZdQ6uQ3DZyayhMcJE-oDhQ64IdJ9ULZQ",
  authDomain: "covidcareapp-1305.firebaseapp.com",
  databaseURL: "https://covidcareapp-1305-default-rtdb.firebaseio.com",
  projectId: "covidcareapp-1305",
  storageBucket: "covidcareapp-1305.appspot.com",
  messagingSenderId: "306064815167",
  appId: "1:306064815167:web:2ec7fc3fa5a4dbeb7eb48a",
  measurementId: "G-T5629N4TRJ",
};

const app = firebase.initializeApp(firebaseConfig);


export const auth = app.auth()

export default firebase;
