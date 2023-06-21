import React from 'react';
import Navbar from '../component/Navbar';
import Searchbar from '../component/Searchbar';

function Admin() {
  return (
    <div className='grid grid-cols-16'>
      <div >
        <Navbar />
      </div>
      <div className='bg-slate-50 relative top-0 border-[1px] border-gray-600'>
        <Searchbar />
        nipni
      </div>
    </div>
  )
}

export default Admin;
