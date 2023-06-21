import {Routes,Route} from 'react-router-dom';
import SignIn from '../SignIn/SignIn';
import ForgetPassword from '../SignIn/ForgetPassword';
import ResetPassword from '../SignIn/ResetPassword';
import Event from '../pages/Event';
import Dashboard from '../pages/Dashboard';
import Guest from '../pages/Guest';
import Invitation from '../pages/Invitation';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>} />
            <Route path='/forgetPassword' element={<ForgetPassword/>} />
            <Route path='/resetPassword' element={<ResetPassword/>} />
            <Route path='/event' element={<Event/>} />
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/guest' element={<Guest/>} />
            <Route path='/invitation' element={<Invitation/>} />
        </Routes>
    )
}

export default AllRoutes;