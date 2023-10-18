import React from 'react';
import logo from '/Users/fatimajawed/Desktop/React/reacthtml/src/logo.png';
import { NavLink, Link } from 'react-router-dom';

class Login extends React.Component{
    render(){
        return(
            <div class="container-main">
                <div class="container-left">

                    <div class="container-logo">
                        <img src={logo} alt='Logo' width={'450px'} height={'500px'}  />
                        <p id="slogan">Launching Careers, One Opportunity at a Time</p>
                    </div>
                </div>
                <div class="container-right">
                    <div class="heading-container2">
                        <h2>Welcome Back!</h2>
                    </div>
                    <div class="form-container-login">
                        <form>
                            <div class = 'input2'>
                            <label>Email</label>
                            <input type='text' name='username' placeholder='example@yourschool.com' />
                            </div>
                            <div class = 'input2'>
                            <label>Password</label>
                            <input type='password' name='Password' placeholder='***********' />
                            </div>
                            <div class='btn-cont'>
                            <button class='submit-btn'>Log In</button>
                            </div>
                        </form>
                    <p> 
                        <span id="forgot-password"> <i>Forgot password?</i></span>
                    </p>
                    <div id="login-container-login">
                        <p>Already have an account?&nbsp;</p><NavLink to = '/signup'><i>Register Here</i></NavLink>
                     </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;