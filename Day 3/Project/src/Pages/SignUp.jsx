import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

import username_icon from '../Assets/images/prof.png';
import email_icon from '../Assets/images/mail.png';
import password_icon from '../Assets/images/pass.png';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    
    setUsernameError('');
    setEmailError('');
    setPasswordError('');

    
    if (!username.trim()) {
      setUsernameError('Username is required.');
    }
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      setEmailError('Invalid email address.');
    }
    if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long.');
    }
    if (username && emailPattern.test(email) && password.length >= 6) {
    }
  };

  const routeLogin = () => {
    nav('/Login');
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={username_icon} alt="Username Icon" />
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className="error">{usernameError}</div>
        </div>
        <div className="input">
          <img src={email_icon} alt="Email Icon" />
          <input
            type="email"
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
          Sign Up
        </button>
        <button className="submit" onClick={routeLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SignUp;
