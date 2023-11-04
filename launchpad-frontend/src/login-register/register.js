import React from "react";
import logo from "../images/launchpadLogo.png";
import { NavLink, Link } from "react-router-dom";

class Register extends React.Component {
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
          <div class="heading-container">Create Account</div>

          <div class="form-container-login2">
            <form>
              <div class="input2">
                <label>First Name</label>
                <input type="text" name="Fname" placeholder="Jane" />
              </div>
              <div class="input2">
                <label>Last Name</label>
                <input type="text" name="Lname" placeholder="Doe" />
              </div>

              <div id="year-program-container">
                <p class="field1">
                  <label>Year</label> <br></br>
                  <input
                    type="number"
                    name="Year"
                    min="0"
                    max="10"
                    placeholder="3"
                  ></input>
                </p>
                <div class="input2">
                  <p class="field2">
                    <label>Program</label>
                    <input
                      type="text"
                      name="Program"
                      placeholder="Computer Science"
                    />
                  </p>
                </div>
              </div>

              <div class="input2">
                <label>Email</label>
                <input
                  type="text"
                  name="username"
                  placeholder="example@yourschool.com"
                />
              </div>
              <div class="input2">
                <label>Password</label>
                <input
                  type="password"
                  name="Password"
                  placeholder="***********"
                />
              </div>
              <div>
                <button class="submit-btn">Sign Up</button>
              </div>
            </form>
            <div id="login-container-register">
              <p>Already have an account?&nbsp;</p>
              <NavLink to="/">
                <i>Login here</i>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
