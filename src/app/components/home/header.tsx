"use client";
import React from 'react';
import logo from '../../assests/PinTude_Logo_v4_Transparent 1.png'
import Image from 'next/image';
import Hamburger from './HamBurger';
import HeaderButton from './ui/headerButton';
import Logo from './ui/Logo';
import axios from 'axios';

const Navbar = () => {
      const handleClick = async () => {
        try {
             // Sending the POST request to track button click analytics
            await axios.post('https://api.reportzai.com/api/call-analytics');
            // // alert('Button click recorded successfully!');
  
        } catch (error) {
            // console.error('Error recording button click:', error);
            // alert('Failed to record button click');
        }
    };

  return (
    <header className='reletive'>
      
        <div className='max-w-[1200px] mx-auto'>
    <nav className="flex flex-col lg:flex-row lg:justify-between justify-center items-center p-4 bg-white ">
      {/* Logo Section */}
      <div className="flex h-[146px]  items-center justify-center lg:justify-start w-full space-x-2 lg:w-auto relative">
        <Image src={logo} alt="Pintude Logo" className="hidden" /> {/* Replace with your logo */}
        <Logo/>
      </div>

      {/* Links Section */}
      <div className="lg:flex space-x-6 text-black text-sm lg:mt-0 mt-9  hidden">
        {/* <a href="#" className="hover:text-gray-700">About us</a>
        <a href="#" className="hover:text-gray-700">Faq</a> 
        <a href="#" className="hover:text-gray-700">Contact</a> */}

        {/* <div className='ml-3 '> 
        <a    onClick={handleClick}
                onTouchStart={handleClick}  
         href="tel:+91 82373 58619"
          className="border inline lg:hidden text-sm border-black px-4 py-2 rounded-[7px] hover:bg-gray-100 transition-colors" 
        >
         Give a missed call
        </a>
        <HeaderButton className=' mt-5 border hidden lg:inline text-sm border-black px-4 py-2 rounded-[7px] hover:bg-gray-100 transition-colors'> Give a missed call</HeaderButton>
      </div> */}
      </div>

      {/* Sign Up Button */}
     
    </nav>
    </div>
    </header>
  );
};

export default Navbar;
