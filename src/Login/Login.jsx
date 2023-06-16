import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import logo from './logo.svg';
// import axios from 'axios';
import './login.css';


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spin, setSpin] = useState(false);
  const [spin2, setSpin2] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();


  const handleName = (e)=>{
    setSpin(true);
    setUsername(e.target.value);
  }

  const handlePassword = (e)=>{
    setSpin2(true);
    setPassword(e.target.value);
    if(username===''){
      setOpen(true);
    }
    // axios.post('http://localhost:5000/api/v1/auth/login',data)
    // .then((res)=>console.log(res))
  }

  const handleSubmit = ()=>{
    console.log(username,password)
    if(username==='' || password===''){
      setOpen(true);
    }
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );



  useEffect(()=>{
    setTimeout(()=>{
      setSpin(false);
      setSpin2(false);
    },1000);
    location.pathname==='/'?document.body.classList.add('body'):document.body.classList.remove('body');
  },[username, password, location.pathname]);

  return (
    <div>
      <div className="card">
          <img src={logo} alt='login-logo' />
          <h2>Sign Up</h2>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Please enter correct credentials!"
            action={action}
            anchorOrigin={{ "vertical":'bottom', "horizontal":'right' }}
            // style={{backgroundColor:'#f53d3d'}}
          />
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
            <button className="control" type="button" onClick={handleSubmit}>
              JOIN NOW
            </button>
          </form>
        </div>
    </div>
  )
}

export default Login;
