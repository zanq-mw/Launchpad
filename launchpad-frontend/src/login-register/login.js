import React from "react";
import logo from "../images/launchpadLogo.png";
import { NavLink, Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div class="container-main">
        <div class="container-left">
          <div class="container-logo">
            <img class="startup-logo" src={logo} alt="Logo" />
            <p id="slogan">
              Launching Careers, One <br></br>Opportunity at a Time
            </p>
          </div>
        </div>

        <div class="container-right">
          <div class="heading-container2">Welcome Back</div>

          <div class="form-container-login">
            <form action="" method="POST">
              <div class="input2">
                <label class="label">Email</label>
                <input
                  class="input"
                  type="text"
                  name="username"
                  placeholder="example@yourschool.com"
                />
              </div>
              <div class="input2">
                <label class="label">Password</label>
                <input
                  class="input"
                  type="password"
                  name="Password"
                  placeholder="***********"
                />
              </div>
              <div class="btn-cont">
                <button class="submit-btn">Log In</button>
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
}
export default Login;
