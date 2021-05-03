import "./App.css";
import { useEffect } from "react";
import Root from "./Containers/Root";
import "antd/dist/antd.css";
import { BrowserRouter } from "react-router-dom";
import firebase from "./Firebase/FirebaseConfig";
import "firebase/analytics";

function App() {
  useEffect(() => {
    firebase.analytics();
  }, []);
  return (
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
