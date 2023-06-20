import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate  } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Cookies from 'js-cookie';
import './signIn.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function ForgetPassword() {
    const [email, setEmail] = useState('');
    const [spin, setSpin] = useState(false);
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleName= (e)=>{
        setSpin(true);
        setEmail(e.target.value);
    }

    const handleSubmit = (e)=>{
        setOpen(true);
        console.log(email);
        navigate('/resetPassword', { replace: true })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    }

    useEffect(()=>{
        const name = Cookies.get('user');
        console.log(name);
        setTimeout(()=>{
            setSpin(false);
          },1000);
        location.pathname==='/forgetPassword'?document.body.classList.add('body1'):document.body.classList.remove('body1');
    },[email,location.pathname])

  return (
    <div className='grid place-items-center align-middle min-h-screen'>
        <div className='w-full'>
            <div className='text-center text-3xl font-bold text-primary-200 mb-7'>Forgot Password</div>
            <div className='bg-white p-6 min-[10px]:max-[420px]:w-[320px] w-[400px] mx-auto rounded'>
            {/* --- email sent message --- */}
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                // message="Please enter correct credentials!"
                // action={action}
                anchorOrigin={{ "vertical":'top', "horizontal":'right' }}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%',fontSize:"16px",fontFamily:'Raleway, sans-serif'}}>
                    You will recieve a reset email !
                </Alert>
            </Snackbar>
                <form className='w-full m-0 grid'>
                    <div className='relative mb-5'>
                        <label for='Email' className='text-left w-full text-black font-bold'>Email Address</label><br/>
                        <input type='email' value={email} className='w-full bg-transparent border-[1px] border-gray-400 h-[53px] rounded-lg focus:outline-0 pl-4 mt-1 text-lg' id='Email' placeholder='' onChange={handleName} />
                        <div style={{visibility:spin?'visible':'hidden',opacity:spin?1:0}} className='cards'></div>
                    </div>
                    <button className="join" type="button" onClick={handleSubmit}>
                    SEND RESET CODE
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword;
