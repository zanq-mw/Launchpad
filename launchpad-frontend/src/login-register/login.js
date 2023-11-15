import React from "react";
import logo from "../images/launchpadLogo.png";
import { NavLink } from "react-router-dom";
import "./startup.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="container-main">
      <div className="container-left">
        <div className="container-logo">
          <img className="startup-logo" src={logo} alt="Logo" />
          <p id="slogan">
            Launching Careers, One <br></br>Opportunity at a Time
          </p>
        </div>
      </div>

      <div className="container-right">
        <div className="heading-container2">Welcome Back</div>

        <div className="form-container-login">
          <form>
            <div className="input2">
              <label className="label">Email</label>
              <input
                className="input"
                type="text"
                name="username"
                placeholder="example@yourschool.com"
                required
              />
            </div>
            <div className="input2">
              <label className="label">Password</label>
              <input
                className="input"
                type="password"
                name="Password"
                placeholder="***********"
                required
              />
            </div>
            <div className="btn-cont">
              <button
                className="submit-btn"
                onClick={() => navigate("/landing")}
              >
                Log In
              </button>
            </div>
          </form>
          <p>
            <span id="forgot-password">
              {" "}
              <i>Forgot password?</i>
            </span>
          </p>
          <div id="login-container-login">
            <p>Already have an account?&nbsp;</p>
            <NavLink to="/signup">
              <i>Register Here</i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
