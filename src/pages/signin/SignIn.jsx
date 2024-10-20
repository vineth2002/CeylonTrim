import React from "react";
import "./SignIn.css";
import { RiUserHeartLine } from "react-icons/ri";
import { TbLockSquareRoundedFilled } from "react-icons/tb";
import { Link } from 'react-router-dom';// linking

function SignIn() {
  return (
    <div className="main">
      <div className="wrapper">
        <form action="">
          <h1>Sign In</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
            <RiUserHeartLine className="icon" />
          </div>

          <div className="input-box">
            <input type="text" placeholder="Password" required />
            <TbLockSquareRoundedFilled className="icon" />
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="">Forgot password?</a>
          </div>

          <button type="submit">Sign In</button>

          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register</Link> </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
