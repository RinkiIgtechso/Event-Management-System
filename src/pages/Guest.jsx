import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Searchbar from '../component/Searchbar';

function Guest() {
  const [show, setShow] = useState(false);

  const handleClick = ()=>{
    console.log("Guest");
  }

  return (
    <div className='flex'>
      <div className='min-[700px]:max-[1024px]:w-[30%] w-[23%]'>
        <Navbar props={[show, setShow]} />
      </div>
      <div className='relative top-0 w-[77%] min-[700px]:max-[1024px]:w-[70%]'>
        <Searchbar props={[show, setShow, handleClick]} />
        <div className='bg-gray-50 w-full p-6'>
          Guest
        </div>
      </div>
    </div>
  )
}

export default Guest;
