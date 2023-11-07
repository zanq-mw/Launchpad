import React from "react";
import logo from "../images/launchpadLogo.png";
import { NavLink, Link } from "react-router-dom";




class Register extends React.Component {

    handleSubmit = async (e) => {
      e.preventDefault();
  
      const formData = {
        username: e.target.username.value,
        Password: e.target.Password.value
      };
      console.log(formData);
  
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',

        dataType: "json",
        body: JSON.stringify(formData),
        headers: {
          "Server": "JSON-RPC 2.0 Server",
          "Allow": "OPTIONS, POST",
          "Cache-Control": "no-store",
          "Content-Type": "application/json; charset=UTF-8",
          "Content-Language": "en-US",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "OPTIONS, POST",
          "Access-Control-Allow-Headers": "Content-Type, Authorization"
            
        },
        
        
      });
  
      
      const responseData = await response.json();
      console.log(responseData);
    };
  
  
  render() {
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
          <div className="heading-container">Create Account</div>

          <div className="form-container-login2">
            <form onSubmit={this.handleSubmit}>
              <div className="input2">
                <label className="label">First Name</label>
                <input
                  className="input"
                  type="text"
                  name="Fname"
                  placeholder="Jane"
                />
              </div>
              <div className="input2">
                <label className="label">Last Name</label>
                <input
                  className="input"
                  type="text"
                  name="Lname"
                  placeholder="Doe"
                />
              </div>

              <div id="year-program-container">
                <p className="field1">
                  <label className="label">Year</label> <br></br>
                  <input
                    className="input"
                    type="number"
                    name="Year"
                    min="0"
                    max="10"
                    placeholder="3"
                  ></input>
                </p>
                <div className="input2">
                  <p className="field2">
                    <label className="label">Program</label>
                    <input
                      className="input"
                      type="text"
                      name="Program"
                      placeholder="Computer Science"
                    />
                  </p>
                </div>
              </div>

              <div className="input2">
                <label className="label">Email</label>
                <input
                  className="input"
                  type="text"
                  name="username"
                  placeholder="example@yourschool.com"
                />
              </div>
              <div className="input2">
                <label className="label">Password</label>
                <input
                  className="input"
                  type="password"
                  name="Password"
                  placeholder="***********"
                />
              </div>
              <div>
                <button type="submit" className="submit-btn">Sign Up</button>
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
