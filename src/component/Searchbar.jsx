import React, { useEffect, useState } from 'react';
import {CiSearch} from 'react-icons/ci';
import { IoAdd } from "react-icons/io5";
import { useLocation } from 'react-router-dom';

function Searchbar({props}) {
  const location = useLocation();
  const [text, setText] = useState('');

  useEffect(()=>{
    if(location.pathname==='/event'){
      setText("Events")
    }else if(location.pathname==='/invitation'){
      setText("Invitations")
    }else if(location.pathname==='/guest'){
      setText("Guests")
    }
  },[text, location.pathname])

  return (
    <div className='py-2 px-1 max-[425px]:px-6 bg-white'>
      <div className='w-full flex justify-between items-center'>
        <div className='flex items-center max-[425px]:hidden'>
          {/* <div className='max-[425px]:block hidden'><Hamburger toggled={props[0]} toggle={props[1]} /></div> */}
          <div>{text}</div>
        </div>
        <div className='flex items-center max-[425px]:w-full min-[245px]:max-[425px]:justify-between max-[425px]:gap-5'>
          <div className='flex items-center gap-1 border-[1px] border-[#E8E8EA] py-2 max-[425px]:px-3 px-1 rounded-2xl'>
            <div><CiSearch style={{color:'gray'}} /></div>
            <div>
              <input id='search' className='outline-none' type='text' placeholder='Search...' />
            </div>
          </div>
          <button className='bg-blue-700 text-white flex py-1 min-[425px]:py-3 px-1 min-[425px]:px-8 min-[425px]:gap-3 items-center rounded-2xl' onClick={props[2]}>
            <span><IoAdd style={{fontSize:'24px',fontWeight:'bold'}}/></span><span className='text-sm font-bold max-[425px]:hidden'>Add new</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Searchbar;
