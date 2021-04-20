import './App.css';
import Root from './Containers/Root';
import "antd/dist/antd.css"; 
import { BrowserRouter } from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  );
}

export default App;
