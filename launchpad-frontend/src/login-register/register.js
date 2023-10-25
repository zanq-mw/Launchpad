import React from "react";
import logo from "../images/launchpadLogo.png";
import { NavLink, Link } from "react-router-dom";

class Register extends React.Component {
  render() {
    return (
      <div class="container-main">
        <div class="container-left">
          <div class="container-logo">
            <img src={logo} alt="Logo" width={"450px"} height={"500px"} />
            <p id="slogan">Launching Careers, One Opportunity at a Time</p>
          </div>
        </div>
        <div class="container-right">
          <div class="heading-container">
            <h2>Create Account</h2>
          </div>
          <div class="form-container">
            <form>
              <div class="input2">
                <label>First Name</label>
                <input type="text" name="Fname" placeholder="Jane" />
              </div>
              <div class="input2">
                <label>Last Name</label>
                <input type="text" name="Lname" placeholder="Doe" />
              </div>
              <div class="input2">
                <p class="field1">
                  <label>Year</label> <br></br>
                  <input type="text" name="Year" placeholder="3" />
                </p>
              </div>
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
              <div class="btn-cont">
                <button class="submit-btn">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;
