import React from "react";
import "./Owner.css";

const Owner = () => {
  return (
    <div className="register-container">
      <div className="register-image"></div>
      <div className="register-form">
        <div className="main-container">
          <h1>Create Account</h1>
          <form action="">
            
              <div className="form-group">
                <label htmlFor="fname">Full Name</label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  placeholder="Enter owner name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="salonname">Salon Name</label>
                <input
                  type="text"
                  id="salonname"
                  name="salonname"
                  placeholder="Enter salon name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="location">Address</label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  placeholder="Enter the location"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="username">User Name</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter  username"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
              </div>
            
            
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="telNo">Contact Number</label>
                <input
                  type="text"
                  id="telNo"
                  name="telNo"
                  placeholder="Enter contact number"
                  required
                />
              </div>
            

            
              <div className="form-group1">
                <p >Salon Type</p>
                <div className="salontype">
                <label for="men">For Men</label>
                <input type="radio" id="type" name="type"></input>
                <label for="men">For Women</label>
                <input type="radio" id="women" name="type"></input>
                <label for="men">Both</label>
                <input type="radio" id="both" name="type"></input>
                </div>
               
              </div>
            

            <button type="submit" className="btn1">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Owner;