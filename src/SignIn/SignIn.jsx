import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import CloseIcon from '@mui/icons-material/Close';
import logo from './logo.svg';
import './signIn.css';


function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [spin, setSpin] = useState(false);
  const [spin2, setSpin2] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();


  const handleName = (e)=>{
    // setSpin(true);
    setUsername(e.target.value);
    console.log(username);
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
    <div className='min-[700px]:max-[768px]:mt-[50%] mt-7'>
        <div className='w-[320px] mx-auto lg:pt-[60px] md:pt-[30px] xs:pt-[20px] pt-[50px] px-[15px] xs:px-[30px] pb-[32px] rounded-2xl bg-primary-100 text-center transition-all'>
            <img src={logo} alt='login-logo' className='lg:w-[260px] md:w-[200px] w-[220px] mx-auto ' />
            <h2 className='mb-[30px] lg:mt-[30px] mt-[20px] text-4xl text-white font-semibold'>Sign In</h2>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Please enter correct credentials!"
                action={action}
                anchorOrigin={{ "vertical":'top', "horizontal":'right' }}
            />
            <form className='w-full m-0 grid'>
                <div className='relative mb-5'>
                    <TextField 
                        id="Username" 
                        color='primary' 
                        fullWidth 
                        type='email'
                        label="Username"
                        value={username}
                        InputLabelProps={{style : {color : 'rgb(255 255 255 / 30%)',fontFamily:"Raleway, sans-serif"} }} 
                        sx={{'& fieldset': {borderColor: "transparent",color:"white",background:'#1c1e21'}}} 
                        onChange={handleName} 
                    />
                    <div style={{visibility:spin?'visible':'hidden',opacity:spin?1:0}} className='cards'></div>
                </div>
                <div className='relative mb-5'>
                    <TextField 
                        id="Password" 
                        color='primary' 
                        fullWidth 
                        label="Password"
                        type='password' 
                        InputLabelProps={{style : {color : 'rgb(255 255 255 / 30%)',fontFamily:"Raleway, sans-serif"} }} 
                        sx={{'& fieldset': {borderColor: "transparent",color:"white",background:'#1c1e21'}}} 
                        onChange={handlePassword} 
                    />
                    <div style={{visibility:spin2?'visible':'hidden',opacity:spin2?1:0}} className='cards'></div>
                </div>
                <button className="join" type="button" onClick={handleSubmit}>
                    LOGIN
                </button>
            </form>
        </div>
    </div>
  )
}

export default SignIn;
