import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import TextField from '@mui/material/TextField';
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
            <div className='bg-primary-100 p-6 min-[10px]:max-[420px]:w-[320px] w-[400px] mx-auto rounded'>
            {/* --- reset password message --- */}
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
                        <TextField 
                            id="Password1" 
                            fullWidth 
                            type='password'
                            value={password1}
                            label="New Password"
                            InputLabelProps={{style : {color : 'rgb(255 255 255 / 30%)',fontFamily:"Raleway, sans-serif"} }} 
                            sx={{background:'#1c1e21',borderColor:'blue','& fieldset': {color:"white !important",background:'#1c1e21',position:'absolute',zIndex:-1}
                            }} 
                            onChange={handlePass1} 
                        />
                        <div style={{visibility:spin?'visible':'hidden',opacity:spin?1:0}} className='cards'></div>
                    </div>
                    <div className='relative mb-5'>
                        <TextField 
                            id="Password2" 
                            fullWidth 
                            type='password'
                            value={password2}
                            label="Confirm Password"
                            InputLabelProps={{style : {color : 'rgb(255 255 255 / 30%)',fontFamily:"Raleway, sans-serif"} }} 
                            sx={{background:'#1c1e21',borderColor:'blue','& fieldset': {color:"white !important",background:'#1c1e21',position:'absolute',zIndex:-1}
                            }} 
                            onChange={handlePass2} 
                        />
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
