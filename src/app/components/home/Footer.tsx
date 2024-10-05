import React from 'react'
import NewsletterSection from './NewsletterSection'
import logo from '../../assests/PinTude_Logo_v4_Transparent 1.png'
import Image from 'next/image';
import Logo from './ui/Logo';
export default function Footer() {

    const shareLinks = {
        facebook:
          "https://www.facebook.com/sharer/sharer.php?u=https://hellopintude.com?utm_source=facebook&utm_medium=social&utm_campaign=pre_launch",
        twitter:
          "https://twitter.com/intent/tweet?url=https://hellopintude.com?utm_source=twitter&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!",
        instagram:
          "https://www.instagram.com/?url=https://hellopintude.com?utm_source=instagram&utm_medium=social&utm_campaign=pre_launch",
        linkedin:
          "https://www.linkedin.com/shareArticle?mini=true&url=https://hellopintude.com?utm_source=linkedin&utm_medium=social&utm_campaign=pre_launch",
        email:
          "mailto:social@pintude.co.in?subject=Join+PinTude+Pre-Launch&body=Check+out+PinTude:+https://hellopintude.com?utm_source=newsletter&utm_medium=email&utm_campaign=pre_launch",
        sms: "sms:?&body=Check+out+PinTude:+https://hellopintude.com?utm_source=sms&utm_medium=sms&utm_campaign=pre_launch",
        telegram:
          "https://telegram.me/share/url?url=https://hellopintude.com?utm_source=telegram&utm_medium=social&utm_campaign=pre_launch&text=Check+out+PinTude!+Join+the+pre-launch+now!",
      };

  return (
    <footer>
      <div className="max-w-[1200px] py-9 mx-auto ">

{/* <NewsletterSection/> */}
<div className='py-8 my-5 max-w-[1120px] mx-auto border-footer '>

<p className='text-xl font-medium text-center'>Made in India <br/>For India❤️</p>
</div>

<div className="grid grid-cols-1 place-items-center pt-5 lg:place-items-start md:grid-cols-4 gap-8 mt-10">
          
          <div className=" md:col-span-1 relative top-[12px] h-[146px] ">
             <Image className='invisible' src={logo} alt='logo'/> 

            <Logo/>
          </div>

          
          <div className='hidden lg:block'>
           
          </div>

         
          {/* <div className='max-w-[200px] w-full'>
          <h3 className=" text-xl font-semibold  mb-8">Company</h3>
            <ul className="space-y-1 text-base font-light footer-ul">
              <li>
                <a href="#" className=" ">Home</a>
              </li>
              <li>
                <a href="#" className=" ">About us</a>
              </li>
              <li>
                <a href="#" className=" ">Careers</a>
              </li>
              <li>
                <a href="#" className=" ">Contact Us</a>
              </li>
            </ul>
          </div>

         
          <div className='max-w-[200px] w-full '>
            <h3 className=" text-xl font-semibold  mb-8">Information</h3>
            <ul className="space-y-1 text-base font-light footer-ul">
              <li>
                <a href="#" className=" ">My Account</a>
              </li>
              <li>
                <a href="#" className=" ">Blogs</a>
              </li>
              <li>
                <a href="#" className=" ">Help</a>
              </li>
            </ul>
          </div> */}
          <div className='hidden lg:block'></div>
          
<div className="mb-6 flex items-center h-full">
                
                <div className="flex mt-4 space-x-4 justify-center lg:justify-start">
                 
                  {/* Twitter */}
                  <a
                    href={shareLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"/><path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"/></svg>
                   </a>
                  {/* LinkedIn */}
                  <a
                    href={shareLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><radialGradient id="yOrnnhliCrdS2gy~4tD8ma" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"/><stop offset=".328" stop-color="#ff543f"/><stop offset=".348" stop-color="#fc5245"/><stop offset=".504" stop-color="#e64771"/><stop offset=".643" stop-color="#d53e91"/><stop offset=".761" stop-color="#cc39a4"/><stop offset=".841" stop-color="#c837ab"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><radialGradient id="yOrnnhliCrdS2gy~4tD8mb" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"/><stop offset=".999" stop-color="#4168c9" stop-opacity="0"/></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"/><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"/><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"/><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"/></svg>
                  </a>
                  {/* Email */}
                  <a
                    href={shareLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="48px" height="48px"><path fill="#0288D1" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"/><path fill="#FFF" d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"/></svg>                  </a>
                  {/* SMS */}
                  <a
                    href={shareLinks.email}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
  <svg
    width="48px" height="48px"
    viewBox="0 0 26 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="26" height="23" fill="url(#pattern0_30_118)" />
    <defs>
      <pattern
        id="pattern0_30_118"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use href="#image0_30_118" transform="matrix(0.0207692 0 0 0.0234783 -0.0384616 -0.0869565)" />
      </pattern>
      <image
        id="image0_30_118"
        width="50"
        height="50"
        href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAA01JREFUaEPtWE1IFVEU/s6MFga1iDc/vJ7thKDoZ1ObIHBZBFHUziAohEpokZSVIYUUWBAklNCi2oVUGyGCNkFtWlnkLlqUPO4dRaKooHHeqSu+mMZ5b0bnB7G523vP953v/N2ZS1ghi1aIDhRCllsmi4wUGckoAiu/tAzD2KFp2kEAHQC0jAIZF9YD8KFWqz2empoaDzMKzYht2+eYeRCAHpcpp3MeEfUJIYaCfAuEWJbVCeAFsGzvmBoRdQohXvrFLBBi2/YDZj6aU4SXRMPM9x3HOdZUiGEY2zVNGwGwc0ks2RuNE1G3EOJNUyHzm5ppmseJSNXiuux9i8Xwg4iuCCFuAFDN/89qOn5LpVJZ1/VbAA7Hosru0Jiu66eq1eqnRhSx7hHLsvYDGAawMTtfQ5GrzNznOM7DKN4FQkzT7CeiESml4zculUprdV2/CuB0DmNZlc6w53n909PT3/x+WJZlMnO34zjKl78rbPy+B7Dhz4kBKeVtADW/QQ7DILSZ1XVgmmYXEd0EIKWUW+II2Tx/6PX8hJgIpDaLYdCwmQ3D6NA07S4AdcepNbFYIcrIBXAHwAUp5fdAuZVbWlquM3NXVA1H7Ic2c6VSaZudnVVfGecBrPZhLElI3f4jM590HOd50KkEw6BKRGeEEKNBTNu29zCzysKmkCAkElLHG2XmHsdxpJ+gXC6v8TzvMoCzMYaB6rt7ruv2zszMfPXjVCqV9a7rXgNwoslnUipCFO+XBMMgTjOXIkoxNSF1nsUMg8U0c1TLpS5EEf4CMNTa2jo4OTn5M1Bu7Z7nqREOXdd7qtXq50AZtbmuexFAL4BVUd6n1exRPA2HQZhhRDNHcWWSkSBp6DCoH4rZzMtCSKNh4L+Zo5p52QiZc4SIXjHz3G8pEfUy8+4oD2Pu51JaMX1JdKwQkih8GRgXGckgqIkgi4wkCl8Gxv9XRt4C2JpBFNOEfCel3OYHDHt8eArgQJqsaWMR0RMhxKGmQmzb3sfMY2mTp4lHRHuFEM+aClGblmWpN6NLaZKnhMXzz6YDQbyGL42WZe0ioiPM3J6SE4lgiEj9lD0KPl7XQWM9mSbyICfjQkhOgY5NU2QkdqhyOlhkJKdAx6ZZMRn5DWcmiEKIxqRpAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
                  </a>
                  {/* Telegram */}
                  <a
                    href={shareLinks.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  </a>
                </div>
              </div>

        </div>
<div>


</div>
      </div>
    </footer>
  )
}
