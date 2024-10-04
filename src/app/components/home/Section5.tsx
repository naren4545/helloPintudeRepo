import Image from 'next/image'
import React from 'react'
import coin from '../../assests/pikaso_texttoimage_one-piece-10gm-gold-coin-and-100-pieces-10gm-silve 1.png'
export default function Section5() {
  return (
    
      <section className='bg-gradient-to-r from-[#E0D55C] to-[#F67F60]' >
      <div className="max-w-[1200px] py-9 mx-auto ">
      <div className="mx-2">
      <div className="shadow-xl px-5 py-14 rounded-[30px] text-center max-w-[760px] bg-white mx-auto">
        <h2 className='section-main-heading  mb-5'>Our Special Launch Offer<br/>
        (for Limited Time)</h2>

        <p className='max-w-[468px] mx-auto mb-5'>100 Lucky Winners Will Stand A Chance To Win A Silver Coin,
        And One Grand Winner Will Take Home A 10g Gold Coin</p>
<Image className='inline mb-4' src={coin} alt='coin'/>
<div className='mt-6'>
<a  href="tel:+91 82373 58619"  className="rounded-2xl button py-4 px-6 bg-black text-white inline  " >
              
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
              </div>
        </div>
        </div>
    </div>
    </section>
  )
}
