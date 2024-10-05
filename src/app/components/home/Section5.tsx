import Image from 'next/image'
import React from 'react'
import coin from '../../assests/pikaso_texttoimage_one-piece-10gm-gold-coin-and-100-pieces-10gm-silve 1.png'
import { HeadManagerContext } from 'next/dist/server/future/route-modules/app-page/vendored/contexts/entrypoints'
import HeaderButton from './ui/headerButton'
export default function Section5() {
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
    <section className="bg-gradient-to-r from-[#E0D55C] to-[#F67F60]">
      <div className="max-w-[1200px] py-9 mx-auto ">
        <div className="mx-2">
          <div className="shadow-xl px-5 py-14 rounded-[30px] text-center max-w-[760px] bg-white mx-auto">
            <h2 className="section-main-heading  mb-5">
              Our Special Limited Time Launch Offer <br />
              For 101 lucky winners
            </h2>

        <p className='max-w-[468px] mx-auto mb-5'>100 Lucky Winners Will Stand A Chance To Win A Silver Coin, And One Grand Winner Will Take Home A 10g Gold Coin</p>
<Image className='inline mb-4' src={coin} alt='coin'/>
<div className='mt-6'>
<a  href="tel:+91 82373 58619"  className=" shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] text-xs rounded-2xl button py-4 px-6 bg-black text-white inline lg:hidden " >
              
              <svg className='inline mr-3' width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect y="30" width="30" height="30" transform="rotate(-90 0 30)" fill="url(#pattern0_150_51)"/>
        <defs>
          <pattern id="pattern0_150_51" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use href="#image0_150_51" transform="scale(0.02)"/>
          </pattern>
          <image id="image0_150_51" width="50" height="50" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB/UlEQVR4nO3ZvWsUQRgH4IkERFGDIBoRPxBEECzEYGMTq4iFoqBN/gGb5B+wUkxlEwtBrMTaIo0E7ERQG7UxCtoEDGIhgooS48cj666Q4rKzd97tzcE+9S7MD2bnfefdEBqNRqPRAezACZzHBPaEQYG9uIwFrT3F6ZAqHMAd/FTNPEZCKrABV/Fd+xYwmkKIY3jt/zzBcL8CDOESfuiOi/0IsQVzuut5P06kl7rvc50hDuGt3rhR50f9oQcBPmIK6+oIMY5PXQ7wq6g523seoAhxDsuRRf3GIr5WDPEQR2oJUIS4UKFKL+F48fxWzJYcyUuYzI7uOkOcwUokxCPsbPHuQdxf9dwKrmNzbQGKhUxU2E53sT5SME9iGvtqDVAs4Ci+RELc7ltLUQX2430kxLVa93iHbcerSIhbqYcYKvZ8mbmkt1Om6GJjp9OaH3YSMBY5Zt9hV0gZNuJNpGL/LXZJw0xkSy2G1MkHBbE79res7Qgpk3eeVcyGVMlveVVHNlkDeDikCFe050GShdDaE8Ayp0KCs9hOTIeUyK+t7VruSyteBmc7CDITUiO/NLUju55uCqnB7jaDTIZUyf9PVJ12pHfs/pP9ZKk4dxoLqcO9SJCbYRBgBC9KxpjbwqCQF8fHLYJMhUGD4ewnC55lo/1sKl7LQLnRaDTCKn8ACe5K+aGW5lkAAAAASUVORK5CYII="/>
        </defs>
      </svg>
      
      Give Us A Call & Get A Chance To Win
                    
              </a>

              <HeaderButton className="shadow-[0px_0px_15px_5px_rgba(255,100,100,0.4)] rounded-2xl button py-4 px-6 bg-black text-white lg:inline hidden ">
              <svg className=" inline mr-2 w-[30px] h-[30px] fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.08-.21c1.12.45 2.34.69 3.6.69.55 0 1 .45 1 1v3.59c0 .55-.45 1-1 1C10.29 22.5 1.5 13.71 1.5 2.99 1.5 2.44 1.95 1.99 2.5 1.99h3.59c.55 0 1 .45 1 1 0 1.25.24 2.48.69 3.6.17.42.08.91-.22 1.22l-2.2 2.2z"/></svg>
                Give Us A Call & Get A Chance To Win
              </HeaderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
