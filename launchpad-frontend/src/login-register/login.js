import React from "react";
import logo from "../images/launchpadLogo.png";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./startup.css";

function Login({ userId, setUserId }) {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      username: e.target.username.value,
      password: e.target.Password.value,
    };
    console.log(formData);

    const response = await fetch("/api/login", {
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

    if (responseData.message === "User Logged In successfully") {
      console.log(responseData.user_info.userId);
      setUserId(responseData.user_info.userId);
      navigate("/landing");
    } else if (responseData.message === "Incorrect Password") {
      alert("Incorrect Password");
    } else if (responseData.message === "User does not exist") {
      alert("User does not exist");
    } else {
      console.log("Email already in use");
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
        <div className="heading-container2">Welcome Back</div>

        <div className="form-container-login">
          <form onSubmit={handleSubmit}>
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
              <button className="submit-btn">Log In</button>
            </div>
          </form>
          <p>
            <span id="forgot-password">
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
