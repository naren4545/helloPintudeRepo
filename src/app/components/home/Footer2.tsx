'use client'

import Image from 'next/image'
import { useState } from 'react'
import insta from "../../assests/Group 112.svg"
import link from "../../assests/Group 113.svg"
import twitter from "../../assests/Group 114.svg"
export default function Footer2() {
  const [mobileNumber, setMobileNumber] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Mobile number submitted:', mobileNumber)
  }

  return (
    <footer className="bg-[#1C1C1C] text-white py-12 px-4">
      <div className="max-w-[1300px] mx-auto text-center">
        <h2 className="md:text-6xl text-xl font-bold mb-4">Stay Updated!</h2>
        <p className="md:text-3xl text-sm mb-8">
          Enter your mobile number to be the first to know
          <br />
          when our app launches.
        </p>

        <form onSubmit={handleSubmit} className="mb-12">
          <div className="flex  sm:flex-row  max-w-[800px] mx-auto relative">
            <input
              type="tel"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              placeholder="Enter Your Mobile Number..."
              className="flex-1 md:h-[90px] h-[50px] px-4 py-3 rounded-lg bg-white text-black placeholder-gray-500 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="md:px-8 bg-gradient-to-r from-[#F97F51] to-[#F9C051]  relative left-[-15px] px-3 py-3 md:text-2xl text-xs rounded-lg font-semibold text-white  hover:opacity-90 transition-opacity"
            >
              Notify Me
            </button>
          </div>
        </form>

        <div className="text-center mb-8">
          <p className="text-gray-300 text-xs">
            Made in India
            <br />
            for India ❤️
          </p>
        </div>

        <div className="flex text-left  sm:flex-row justify-between items-center gap-4 text-gray-400 md:text-sm text-[8px]">
          <p>Copyright © 2024 PinTude, All Rights Reserved.</p>
          
          <div className="flex gap-2 md:gap-6">
            <a 
            id="linkedin-button" data-umami-event="linkedin button"
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://hellopintude.com?utm_source=linkedin&utm_medium=social&utm_campaign=pre_launch" 
             target='_blank'
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Image alt='linkden' src={insta} className='md:w-auto w-5'/>
            </a>
            <a 
            id="facebook-button" data-umami-event="facebook button"
              href="https://www.facebook.com/sharer/sharer.php?u=https://hellopintude.com?utm_source=facebook&utm_medium=social&utm_campaign=pre_launch" 
              target='_blank'
              className="hover:text-white transition-colors"
              aria-label="Facebook"
            >
              <Image alt='facebook' src={link} className='md:w-auto w-5'/>
            </a>
            <a 
            id="twitter-button" data-umami-event="twitter button"
              href="https://twitter.com/intent/tweet?url=https://hellopintude.com?utm_source=twitter&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!" 
              target='_blank'
              className="hover:text-white transition-colors"
              aria-label="Twitter"
            >
               <Image alt='twitter' className='md:w-auto w-5' src={twitter}/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

