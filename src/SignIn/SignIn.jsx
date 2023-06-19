import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
import MuiAlert from '@mui/material/Alert';
import logo from './logo.svg';
import axios from 'axios';
import './signIn.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [spin, setSpin] = useState(false);
  const [spin2, setSpin2] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const location = useLocation();


  const handleName = (e)=>{
    setSpin(true);
    setEmail(e.target.value);
  }

  const handlePassword = (e)=>{
    setSpin2(true);
    setPassword(e.target.value);
    if(email===''){
      setOpen(true);
    }
    
  }

  const handleSubmit = ()=>{
    if(email==='' || password===''){
      setOpen(true);
    }
    const data ={email, password}
    axios.post('http://localhost:5000/api/v1/auth/login',data)
    .then((res)=>{console.log(res);
        setOpen2(true)})
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleClose2 = (event, reason) =>{
    if(reason === 'clickaway'){
        return;
    }
    setOpen2(false);
  }


  useEffect(()=>{
    setTimeout(()=>{
      setSpin(false);
      setSpin2(false);
    },1000);
    location.pathname==='/'?document.body.classList.add('body'):document.body.classList.remove('body');
  },[email, password, location.pathname]);

  return (
    <div className='min-[700px]:max-[768px]:mt-[50%] mt-7'>
        <div className='min-[10px]:max-[420px]:w-[320px] w-[400px] mx-auto lg:pt-[60px] md:pt-[30px] xs:pt-[20px] pt-[50px] px-[15px] xs:px-[30px] pb-[32px] rounded-2xl bg-primary-100 text-center transition-all'>
            <img src={logo} alt='login-logo' className='lg:w-[260px] md:w-[200px] w-[220px] mx-auto ' />
            <h2 className='mb-[30px] lg:mt-[30px] mt-[20px] text-4xl text-white font-semibold'>Sign In</h2>

            {/* --- login successfull message --- */}
            <Snackbar
                open={open2}
                autoHideDuration={6000}
                onClose={handleClose2}
                // message="Please enter correct credentials!"
                // action={action}
                anchorOrigin={{ "vertical":'top', "horizontal":'right' }}
            >
                <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                    Successfully logged in!
                </Alert>
            </Snackbar>
            {/* ------- end ------ */}

            {/* --- error message --- */}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                anchorOrigin={{ "vertical":'top', "horizontal":'right' }}
            >
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    Please enter correct credentials!
                </Alert>
            </Snackbar>
            {/* ------ end ----- */}

            <form className='w-full m-0 grid'>
                <div className='relative mb-5'>
                    <TextField 
                        id="Email" 
                        fullWidth 
                        type='email'
                        value={email}
                        label="Email"
                        InputLabelProps={{style : {color : 'rgb(255 255 255 / 30%)',fontFamily:"Raleway, sans-serif"} }} 
                        sx={{background:'#1c1e21',borderColor:'blue','& fieldset': {color:"white !important",background:'#1c1e21',position:'absolute',zIndex:-1}
                        }} 
                        onChange={handleName} 
                    />
                    <div style={{visibility:spin?'visible':'hidden',opacity:spin?1:0}} className='cards'></div>
                </div>
                <div className='relative mb-5'>
                    <TextField 
                        id="Password"  
                        fullWidth 
                        label="Password"
                        value={password}
                        type='password' 
                        InputLabelProps={{style : {color : 'rgb(255 255 255 / 30%)',fontFamily:"Raleway, sans-serif"} }} 
                        sx={{background:'#1c1e21',borderColor:'blue','& fieldset': {color:"white !important",background:'#1c1e21',position:'absolute',zIndex:-1}
                        }} 
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
