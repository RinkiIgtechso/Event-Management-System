import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo from './logo.svg';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spin, setSpin] = useState(false);
  const [spin2, setSpin2] = useState(false);
  const location = useLocation();


  const handleName = (e)=>{
    setSpin(true);
    setUsername(e.target.value);
  }

  const handlePassword = (e)=>{
    setSpin2(true);
    setPassword(e.target.value);
  }

  const handleClick=()=>{
    console.log(username, password);
  }

  useEffect(()=>{
    setTimeout(()=>{
      setSpin(false);
      setSpin2(false);
    },1000);

    location.pathname=='/'?document.body.classList.add('body'):document.body.classList.remove('body');
    
  },[username, password]);

  return (
    <div>
      <div className="card">
          <img src={logo} />
          <h2>Sign Up</h2>
          <form className="form">
            <div className="username">
              <input
                onChange={handleName}
                autoComplete="off"
                spellCheck="false"
                className="control"
                type="email"
                placeholder="Username"
                required
              />
              <div className={`spinner ${spin ? "loading" : ""}`}></div>
            </div>
            <div className="username">
              <input
                onChange={handlePassword}
                name="password"
                spellCheck="false"
                type='password'
                className="control"
                placeholder="Password"
                required
              />
              <div className={`spinner ${spin2 ? "loading" : ""}`}></div>
            </div>
            <button className="control" type="button" onClick={handleClick}>
                JOIN NOW
            </button>
          </form>
        </div>
    </div>
  )
}

export default Login;
