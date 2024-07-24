// src/Login.js
import React from 'react';
import './login.scss';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign-In</h2>
        <form>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit">Sign-In</button>
        </form>
        <div className="new-account">
          <span>New to Amazon?</span>
          <button>Create your Amazon account</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
