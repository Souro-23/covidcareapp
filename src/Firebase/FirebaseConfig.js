import firebase from "firebase/app";

export const firebaseConfig = {
  apiKey: "AIzaSyBNlG7ez_BLMOcg2SkC1pWji9Zxf2boXuA",
  authDomain: "frontend-test-server.firebaseapp.com",
  databaseURL: "https://frontend-test-server.firebaseio.com",
  projectId: "frontend-test-server",
  storageBucket: "frontend-test-server.appspot.com",
  messagingSenderId: "759286105545",
  appId: "1:759286105545:web:8068da9c439141d2119418",
  measurementId: "G-SMRX5TJ2D9",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
