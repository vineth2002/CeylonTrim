import React from "react";
import "./Register.css";
import { Link } from 'react-router-dom';

function Register() {
  return (
    <div className="main">
      <div className="wrapper">
      <form action=''>
      <h1>Are You</h1>
      <div className="input-box">
      <div >
          <button className='btn'><Link to="/reg_user">Regular User</Link></button>
        </div>
        <p>or</p>
        <div >
          <button className='btn'><Link to='/owner'>Salon Owner</Link></button>
        </div>
      </div>
        
      </form>
       
      </div>
    </div>
  );
}

export default Register;
