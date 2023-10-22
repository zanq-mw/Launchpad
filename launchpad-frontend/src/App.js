import Login from "./login-register/login";
import SignUp from "./login-register/register";
import './App.css';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path ='/' element={<Login />}/>
            <Route path ='/signup' element={<SignUp />}/>
            </Routes>
      </Router>
    </div>
  );
}
export default App;
