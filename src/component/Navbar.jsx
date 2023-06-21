import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { slide as Menu } from "react-burger-menu";
import './style.css';

let link = [
    {
        id:1,
        link:'dashboard',
        name:'Dashboard',
    },
    {
        id:2,
        link:'event',
        name:'Events',
    },
    {
        id:3,
        link:'invitation',
        name:'Invitation',
    },
    {
        id:4,
        link:'guest',
        name:'Guest',
    },
];

function Navbar({props}) {
    // const [image, setImage] = useState(false);
    const [open, setOpen] = useState(false);

    function handleStateChange(state) {
        setOpen(false)
        
      }
    
    function closeMenu() {
        setOpen(false);
      }

  return (
    <div>
        <div className='max-[425px]:hidden block'>
            <div className='w-[19%] min-[700px]:max-[1024px]:w-[30%] min-h-screen fixed top-0 left-0 p-6 min-[420px]:max-[769px]:p-3' >
            <div className='flex flex-col justify-between'>
                <div>
                    <img src="/Images/logo.svg" className='logo' alt='logo'/>
                </div>
                {/* ---- nav link ---- */}
                <div className='mt-5 min-[420px]:max-[769px]:mt-16'>
                    {link.map((item)=>
                        <NavLink key={item.id} to={`/${item.link}`} className='block py-[10px] pl-[20px] font-bold mb-3' activeclassname="active">
                            {item.name}
                            
                        </NavLink>
                    )}
                </div>
                {/* ---- admin profile ---- */}
                <div className='relative top-64 left-0'>
                    <div className='flex align-middle items-center justify-between gap-1'>
                        <div>
                            {/* {image?<img src="" alt=""/>:<div className='bg-blue-700 p-6 rounded-lg'></div>} */}
                            <div className='bg-blue-700 min-[420px]:max-[769px]:p-4 p-6 rounded-lg'></div>
                        </div>
                        <div className='flex flex-col justify-center min-[420px]:max-[769px]:gap-0 gap-1'>
                            <div className='text-sm text-gray-950 font-bold'>Yehia Mourad</div>
                            <div className='text-[0.7rem]'>yehia.mourad@outlook.com</div>
                        </div>
                        <div className='pr-3'>
                        <div className='min-[700px]:max-[1024px]:hidden'>
                            <BsThreeDots/>
                        </div>
                        <div className='min-[700px]:max-[1024px]:block hidden'>
                            <BsThreeDotsVertical/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    {/* ------ mobile view ------ */}
        <div className='max-[425px]:block hidden'>
            <Menu isOpen={open} onStateChange={(open) => handleStateChange(open)}>
            <div className='flex flex-col justify-between'>
                <div>
                    <img src="/Images/logo.svg" className='logo' alt='logo'/>
                </div>
                {/* ---- nav link ---- */}
                <div className='mt-5 min-[420px]:max-[769px]:mt-16'>
                    {link.map((item)=>
                        <NavLink onClick={() => closeMenu()} key={item.id} to={`/${item.link}`} className='menu-item block py-[10px] text-black pl-[20px] font-bold mb-3' activeclassname="active">
                            {item.name}
                            
                        </NavLink>
                    )}
                </div>
                {/* ---- admin profile ---- */}
                <div className='relative top-36 max-[425px]:top-64 left-0'>
                    <div className='flex align-middle items-center justify-between gap-1'>
                        <div>
                            {/* {image?<img src="" alt=""/>:<div className='bg-blue-700 p-6 rounded-lg'></div>} */}
                            <div className='bg-blue-700 min-[420px]:max-[769px]:p-4 p-6 rounded-lg'></div>
                        </div>
                        <div className='flex flex-col justify-center min-[420px]:max-[769px]:gap-0 gap-1'>
                            <div className='text-sm text-gray-950 font-bold'>Yehia Mourad</div>
                            <div className='text-[0.7rem] text-black'>yehia.mourad@outlook.com</div>
                        </div>
                        <div className='pr-3'>
                        <div className='min-[700px]:max-[1024px]:hidden'>
                            <BsThreeDots/>
                        </div>
                        <div className='min-[700px]:max-[1024px]:block hidden'>
                            <BsThreeDotsVertical/>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            </Menu>
        </div>
    </div>
  )
}

// <Link onClick={() => closeMenu()} className="menu-item" to="/">
// Home
// </Link>
// <Link onClick={() => closeMenu()} className="menu-item" to="/"
// >
// About
// </Link>

export default Navbar;
