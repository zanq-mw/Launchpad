import Login from "./login-register/login";
import SignUp from "./login-register/register";
import "./startup.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function Startup() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}
export default Startup;
