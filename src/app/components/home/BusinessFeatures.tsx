import React from 'react';
import icon1 from '../../assests/OQT8MP1 [Converted] 1.png'
import icon2 from '../../assests/4037895 1.png'
import icon3 from '../../assests/449753-PFEFQM-95 1.png'
const BusinessFeatures = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 p-8">
      {/* Feature 1 */}
      <div className="flex max-w-[300px] mx-auto flex-col items-center bg-white rounded-lg shadow-lg p-4 text-center">
        <img
          src={icon1.src} // Update this with the actual path of the uploaded image
          alt="Feature 1"
          // Adjust size as needed
        />
        <div className="text-2xl font-bold">Boost Local<br/>
        Visibility</div>
        <p className="mt-2 text-base">
        Get your business discovered on the PinTude app by customers actively searching for products and services in the area you operate in.       </p>
      </div>

      {/* Feature 2 */}
      <div className="flex max-w-[300px] w-full mx-auto flex-col items-center bg-white rounded-lg shadow-lg p-4 text-center">
       <img src={icon2.src}   />
        <h3 className="text-2xl font-bold">Increase Foot <br/>Traffic</h3>
        <p className="mt-2 text-base max-w-[180px] mx-auto">
        Drive more people to
visit your store in person,
turning online searches into
real-world visits.        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex  max-w-[300px] mx-auto flex-col items-center bg-white rounded-lg shadow-lg p-4 text-center">
      <img src={icon3.src}   />
        <h3 className="text-2xl font-bold">Online Reputation<br/> Management</h3>
        <p className="mt-2 text-base">
        Easily keep your business
information accurate with
the PinTude Account Verification
Badge, gain better trust from
online search traffic that visits
your business page.        </p>
      </div>
    </div>
  );
};

export default BusinessFeatures;
