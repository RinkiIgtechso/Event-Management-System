import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import './signIn.css';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

function ResetPassword() {
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [spin, setSpin] = useState(false);
    const [spin2, setSpin2] = useState(false);
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const location = useLocation();

    const handlePass1 = (e)=>{
        setSpin(true);
        setPassword1(e.target.value);
    }

    const handlePass2 = (e)=>{
        setSpin2(true);
        setPassword2(e.target.value);
    }

    const handleSubmit = (e)=>{
        if(password1==='' && password2===''){
            setOpen(true);
        }else if(password1!==password2){
            setOpen(true);
        }else{
            setOpen2(true);
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
        location.pathname==='/resetPassword'?document.body.classList.add('body1'):document.body.classList.remove('body1');
    },[password1,password2,location.pathname])

  return (
    <div className='grid place-items-center align-middle min-h-screen'>
        <div className='w-full'>
            <div className='text-center text-3xl font-bold text-primary-200 mb-7'>Reset Password</div>
            <div className='bg-white p-6 min-[10px]:max-[420px]:w-[320px] w-[400px] mx-auto rounded'>
            {/* --- reset password message --- */}
            <Snackbar
                open={open2}
                autoHideDuration={6000}
                onClose={handleClose2}
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
                    Please enter correct password!
                </Alert>
            </Snackbar> 
            {/* ------ end ----- */}
                <form className='w-full m-0 grid'>
                    <div className='relative mb-5'>
                        <label for='Password1' className='text-left w-full text-gray-950 font-bold'>New Password</label><br/>
                        <input type='password' value={password1} className='w-full bg-transparent border-[1px] border-gray-400 h-[53px] rounded-lg focus:outline-0 pl-4 mt-1 text-black text-lg' id='Password1' placeholder='' onChange={handlePass1} />
                        <div style={{visibility:spin?'visible':'hidden',opacity:spin?1:0}} className='cards'></div>
                    </div>
                    <div className='relative mb-5'>
                        <label for='Password2' className='text-left w-full text-gray-950 font-bold'>Confirm Password</label><br/>
                        <input type='password' value={password2} className='w-full bg-transparent border-[1px] border-gray-400 h-[53px] rounded-lg focus:outline-0 pl-4 mt-1 text-black text-lg' id='Password2' placeholder='' onChange={handlePass2} />
                        <div style={{visibility:spin2?'visible':'hidden',opacity:spin2?1:0}} className='cards'></div>
                    </div>
                    <button className="join" type="button" onClick={handleSubmit}>
                        RESET PASSWORD
                    </button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword;
