import {Routes,Route} from 'react-router-dom';
import Login from '../Login/Login';

function AllRoutes(){
    return(
        <Routes>
            <Route path='/' element={<Login />} />
        </Routes>
    )
}

export default AllRoutes;