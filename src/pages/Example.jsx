import React, { useState } from 'react';
import { slide as Menu } from "react-burger-menu";
import { Link } from 'react-router-dom';
import './page.css';

function Example() {
    const [open, setOpen] = useState(false);

    function handleStateChange(state) {
        setOpen(true)
        
      }
    
    function closeMenu() {
        setOpen(false);
      }

  return (
    <div>
      <Menu isOpen={open} onStateChange={(open) => handleStateChange(open)}>
        <Link onClick={() => closeMenu()} className="menu-item" to="/">
          Home
        </Link>
        <Link onClick={() => closeMenu()} className="menu-item" to="/"
        >
          About
        </Link>
      </Menu>
    </div>
  )
}

export default Example
