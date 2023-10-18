import Login from "./pages/login";
import SignUp from "./pages/register";
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
