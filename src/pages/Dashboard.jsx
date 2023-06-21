import React, {useState} from 'react';
import Navbar from '../component/Navbar';
import Searchbar from '../component/Searchbar';
import './page.css';

function Dashboard() {
  const [show, setShow] = useState(false);

  const handleClick = ()=>{
    console.log("Dashboard");
  }

  return (
    <div className='flex'>
      <div className='min-[700px]:max-[1024px]:w-[30%] w-[19%]' id='border'>
        <Navbar props={[show, setShow]} />
      </div>
      <div className='relative top-0 w-[81%] min-[700px]:max-[1024px]:w-[70%] min-h-screen bg-gray-50 '>
        <Searchbar props={[show, setShow, handleClick]} />
        <div className='bg-gray-50 w-full py-6 min-[700px]:max-[1024px]:px-6 px-16 grid grid-cols-1 min-[700px]:grid-cols-3 gap-6'>
          <div className='bg-white min-[700px]:max-[1024px]:py-5 py-8 text-center rounded-xl'>
            <p className='text-blue-700 font-extrabold min-[700px]:max-[1024px]:text-xl text-3xl mb-1'>25</p>
            <p className='font-bold min-[700px]:max-[1024px]:text-xs text-sm'>EVENTS</p>
          </div>
          <div className='bg-white min-[700px]:max-[1024px]:py-5 py-8 text-center rounded-xl'>
            <p className='text-blue-700 font-extrabold min-[700px]:max-[1024px]:text-xl text-3xl mb-1'>332</p>
            <p className='font-bold min-[700px]:max-[1024px]:text-xs text-sm'>NEW GUESTS</p>
          </div>
          <div className='bg-white min-[700px]:max-[1024px]:py-5 py-8 text-center rounded-xl'>
            <p className='text-blue-700 font-extrabold min-[700px]:max-[1024px]:text-xl text-3xl mb-1'>427</p>
            <p className='font-bold min-[700px]:max-[1024px]:text-xs text-sm'>INVITATIONS SENT</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;
