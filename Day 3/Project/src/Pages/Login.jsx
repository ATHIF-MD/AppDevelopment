import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import username_icon from '../Assets/images/prof.png';
import password_icon from '../Assets/images/pass.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address.');
    }
    if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    }
    if (emailPattern.test(email) && password.length >= 6) {
    }
  };

  const routeSignUp = () => {
    nav('/SignUp');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">LOGIN</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={username_icon} alt="Email Icon" />
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="error">{emailError}</div>
        </div>
        <div className="input">
          <img src={password_icon} alt="Password Icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="error">{passwordError}</div>
        </div>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleSubmit}>
          Login
        </button>
        <button className="submit" onClick={routeSignUp}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Login;
