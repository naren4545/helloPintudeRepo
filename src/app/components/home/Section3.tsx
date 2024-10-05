import React from 'react'
import CustomSection from "./ui/CustomSection"
import img1 from '../../assests/local illustration 1.png'
import img2 from '../../assests/Idea_1 1.png'
import img3 from '../../assests/4045676 1.png'
import img4 from '../../assests/3556960 1.png'
import img5 from '../../assests/6285106 1.png'
export default function Section3() {
  return (
    <section>
 <div className='max-w-[1200px] mx-auto my-10 p-6'>

<h2 className='section-main-heading pt-8 text-center pb-6'>Features</h2>


<CustomSection opp={false} imageSrc={img1.src} heading="Reach More Local Customers" para="PinTude helps people nearby discover your business,
increasing foot traffic and sales." />

<CustomSection opp={true} imageSrc={img2.src} heading="Affordable & Effective" para="For just ₹500 per year, you get access to powerful
digital marketing tools that help boost your
business's visibility." />


<CustomSection opp={false} imageSrc={img3.src} heading="Tailored For Local Businesses" para="Unlike other tools, PinTude focuses on helping small and local businesses thrive in the digital world.
A minimal investment for benefits that far outweigh the cost." />

<CustomSection opp={true} imageSrc={img4.src} heading="All-In-One Dashboard" para="Manage your business listings, customer feedbacks,
broadcast and updates about your business offers
and deals using our easy-to-navigate dashboard." />


<CustomSection opp={false} imageSrc={img5.src} heading="Easy To Use" para="Whether you're a small shop owner or manage multiple
locations, PinTude’s user-friendly platform lets you
effortlessly manage your online presence." />

 </div>

      
    </section>
  )
}
