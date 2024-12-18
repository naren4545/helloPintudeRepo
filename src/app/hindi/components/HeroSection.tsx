"use client"
import Image from "next/image"; 
import hero from '../../assests/heroImg.svg'
import pink from '../../assests/Group 698.svg'
import React, { memo } from "react";
import dynamic from "next/dynamic";
import axios from "axios";
import HeaderButton from "../../components/home/ui/headerButton";

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

 
const HeroContent = memo(() => (
  <div className=" max-w-[734px]">
    <h1 className="font-m pt-6 md:text-[54px] md:leading-[70px] text-base font-bold md:mb-5 mb-2 ">
    डिजिटल सफलता की <br/>
    ओर कदम बढ़ाएं।
    </h1>
    <p className="font-light md:text-3xl text-xs">
    आज ही अपना व्यापार ऑनलाइन ले जाएं. 
चाहे आप एक छोटी दुकान चलाते हों या एक 
बड़ा उद्यम, हम आपको स्मार्ट एआई डिजिटल 
टूल्स प्रदान करते हैं, जो आपके ग्राहकों से जुड़ने 
और व्यापार बढ़ाने कोबेहद आसान और कम 
मेहनत वाला बना देते हैं।    </p>
<div className="pt-5"/>
    <HeaderButton className=" mt-5 shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] rounded-[57px] button py-5 md:px-7 px-4 bg-black md:text-2xl text-sm font-bold text-white md:inline hidden ">
                 <svg className=" inline mr-2 md:w-[30px] w-4 md:h-[30px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.08-.21c1.12.45 2.34.69 3.6.69.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1C10.29 22.5 1.5 13.71 1.5 2.99 1.5 2.44 1.95 1.99 2.5 1.99h3.59c.55 0 1 .45 1 1 0 1.25.24 2.48.69 3.6.17.42.08.91-.22 1.22l-2.2 2.2z"/></svg>
                 अभी मिस कॉल दें
                 </HeaderButton>

                 <a href="tel:+91 82373 58619" onClick={handleClick} className=" mt-5 shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] rounded-[57px] button py-3 md:px-7 px-4 bg-black md:text-2xl text-sm font-bold text-white md:hidden inline  ">
                 <svg className=" inline mr-2 md:w-[30px] w-4 md:h-[30px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.08-.21c1.12.45 2.34.69 3.6.69.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1C10.29 22.5 1.5 13.71 1.5 2.99 1.5 2.44 1.95 1.99 2.5 1.99h3.59c.55 0 1 .45 1 1 0 1.25.24 2.48.69 3.6.17.42.08.91-.22 1.22l-2.2 2.2z"/></svg>
                 अभी मिस कॉल दें
                 </a>

  </div>
));

HeroContent.displayName = "HeroContent";

export default function HeroSection() {
  return (
    <section className="pb-7">
      <div className="max-w-[1327px] mx-auto p-2">
        <div className="flex  items-center lg:flex-row">
          <div className="lg:w-[60%] w-full relative">
            <HeroContent />
            <Image src={pink} alt="digital connection " className="md:w-auto w-[42px] absolute bottom-0 right-0 z-[-1] " priority={true}/>

          </div>
          <div className="lg:w-[40%] w-full  ">
            <Image
              src={hero}
              alt="Local business digital connection hero image"
              className="w-full "
             // Optimized from 1000 to actual display size
              priority={true}
              quality={85} // Slightly reduced quality for better performance
              placeholder="blur" // Add blur-up placeholder
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lPAAAAABJRU5ErkJggg==" // Custom blur-up placeholder
            />
          </div>
        </div>
      </div>
    </section>
  );
}
