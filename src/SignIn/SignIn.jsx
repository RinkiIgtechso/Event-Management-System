import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
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

  const handleSubmit = async ()=>{
    if(email==='' || password===''){
      setOpen(true);
    }
    const data ={email, password};
    const url = "http://localhost:5000/api/v1/auth/login";
    // const credentials = {withCredentials: true};

    try{
      await axios.post(url, data)
      .then((res)=>{
        console.log(res.data.msg);
        console.log(res.cookie)
        setOpen2(true);
      }) 
    }catch(err){
      console.log(err);
      setOpen(true);
    }
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
    <div>
      <div className='pl-7 pt-1'>
        <img src='/Images/logo.svg' className='w-[100px] h-[45px]' alt='logo' />
      </div>
      <div className='grid place-items-center align-middle'>
        <div className='min-[10px]:max-[420px]:w-[320px] w-[400px] mx-auto lg:pt-[60px] md:pt-[30px] xs:pt-[20px] pt-[10px] px-[15px] xs:px-[30px] pb-[30px] rounded-2xl bg-white transition-all font-sans text-gray-950'>
            <img src='/Images/eventLogo.jpg' alt='login-logo' className='lg:w-[260px] md:w-[200px] w-[220px] h-[200px] mx-auto ' />
            <h2 className='mb-[20px] mt-[10px] text-center text-4xl text-black font-semibold'>Sign In</h2>

            {/* --- login successfull message --- */}
            <Snackbar
                open={open2}
                autoHideDuration={6000}
                onClose={handleClose2}
                // message="Please enter correct credentials!"
                // action={action}
                anchorOrigin={{ "vertical":'top', "horizontal":'right' }}
            >
                <Alert onClose={handleClose2} severity="success" sx={{ width: '100%',fontSize:"16px",fontFamily:'Raleway, sans-serif'}}>
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
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%',fontSize:"16px",fontFamily:'Raleway, sans-serif'}}>
                    Please enter correct credentials!
                </Alert>
            </Snackbar>
            {/* ------ end ----- */}

            <form className='w-full m-0 grid'>
                <div className='relative mb-5'>
                    <label for='Email' className='text-left w-full text-black font-bold'>Email</label><br/>
                    <input type='email' value={email} className='w-full bg-transparent border-[1px] border-gray-400 h-[53px] rounded-lg focus:outline-0 pl-4 mt-1 text-lg' id='Email' placeholder='' onChange={handleName} />
                    <div style={{visibility:spin?'visible':'hidden',opacity:spin?1:0}} className='cards'></div>
                </div>
                <div className='relative'>
                  <label for='Password' className='text-left w-full text-gray-950 font-bold'>Password</label><br/>
                  <input type='password' value={password} className='w-full bg-transparent border-[1px] border-gray-400 h-[53px] rounded-lg focus:outline-0 pl-4 mt-1 text-lg' id='Password' placeholder='' onChange={handlePassword} />
                  <div style={{visibility:spin2?'visible':'hidden',opacity:spin2?1:0}} className='cards'></div>
                </div>
                <div className='text-right text-sm text-blue-500 mb-4 font-extrabold'><a href="/forgetPassword">Forget Password?</a></div>
                <button className="join" type="button" onClick={handleSubmit}>
                  LOGIN
                </button>
                
            </form>
        </div>
      </div>
    </div>
  )
}

export default SignIn;
