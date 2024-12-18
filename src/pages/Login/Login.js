import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log("Logging in with", email, password);
      navigate('/Navbar'); // Redirect after login
    } else {
      alert("Please enter both email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-data">
        <h1>WALK-IN</h1>
        <p>BOOK YOUR INTERVIEW SLOT<br />NO LINES, NO WAITING</p>
      </div>
      <div className="login-box">
        {/* <h2>Walk-In</h2> */}
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email address or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
        <div className="extra-links">
        <button onClick={() => navigate('/ForgotPassword')} className="forgot-password-link">
  Forgotten password?
</button>

          <button onClick={() => navigate('/SignUp')} className="create-account-btn">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
