import {Routes,Route} from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import ForgetPassword from '../SignIn/ForgetPassword';
import ResetPassword from '../SignIn/ResetPassword';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/forgetPassword' element={<ForgetPassword/>} />
            <Route path='/resetPassword' element={<ResetPassword/>} />
        </Routes>
    )
}

export default AllRoutes;