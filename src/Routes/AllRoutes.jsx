import {Routes,Route} from 'react-router-dom';
import SignIn from '../SignIn/SignIn';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<SignIn/>} />
        </Routes>
    )
}

export default AllRoutes;