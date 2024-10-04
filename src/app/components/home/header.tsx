import React from 'react';
import logo from '../../assests/PinTude_Logo_v4_Transparent 1.png'
import Image from 'next/image';
import Hamburger from './HamBurger';

const Navbar = () => {
  return (
    <header className='reletive'>
      <Hamburger/>
        <div className='max-w-[1200px] mx-auto'>
    <nav className="flex lg:justify-between justify-center items-center p-4 bg-white ">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image src={logo} alt="Pintude Logo" className="" /> {/* Replace with your logo */}
        
      </div>

      {/* Links Section */}
      <div className="lg:flex space-x-6 text-black text-sm hidden ">
        <a href="#" className="hover:text-gray-700">About us</a>
        <a href="#" className="hover:text-gray-700">Blogs</a>
        <a href="#" className="hover:text-gray-700">Contact</a>

        <div className='ml-3'>
        <a
          href="#"
          className="border text-sm border-black px-4 py-2 rounded-[7px] hover:bg-gray-100 transition-colors"
        >
          Sign up
        </a>
      </div>
      </div>

      {/* Sign Up Button */}
     
    </nav>
    </div>
    </header>
  );
};

export default Navbar;
