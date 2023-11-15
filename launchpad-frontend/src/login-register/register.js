import React from "react";
import logo from "../images/launchpadLogo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fname: e.target.Fname.value,
      lname: e.target.Lname.value,
      year: e.target.Year.value,
      program: e.target.Program.value,
      username: e.target.username.value,
      password: e.target.Password.value,
    };
    console.log(formData);

    const response = await fetch("/signup", {
      method: "POST",
      dataType: "json",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS, POST, GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
      body: JSON.stringify(formData),
    });

    const responseData = await response.json();
    console.log(responseData.message);

    if (responseData.message === "User already exists") {
      alert("User Already Exists");
    } else if (responseData.message === "User registered successfully") {
      console.log("User registered successfully");
      navigate("/landing");
    } else {
      console.log("Something is Wrong");
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="input2">
              <label className="label">First Name</label>
              <input
                className="input"
                type="text"
                name="Fname"
                placeholder="Jane"
                required
              />
            </div>
            <div className="input2">
              <label className="label">Last Name</label>
              <input
                className="input"
                type="text"
                name="Lname"
                placeholder="Doe"
                required
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
                  placeholder="0"
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
                    required
                  />
                </p>
              </div>
            </div>

            <div className="input2">
              <label className="label">Email</label>
              <input
                className="input"
                type="email"
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
            <div>
              <button type="submit" className="submit-btn">
                Sign Up
              </button>
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

export default Register;
