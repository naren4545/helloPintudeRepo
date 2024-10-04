import Image from 'next/image'; // Make sure to import the Image component

interface CustomSectionProps {
  imageSrc: string; // Define prop types
  heading: string;
  para: string;
  opp:boolean
}

const CustomSection: React.FC<CustomSectionProps> = ({ imageSrc, heading, para, opp=false }) => {
  return (
    <div className='py-4'>
    <div className={`flex flex-col md:flex-row items-center gap-4 p-4 max-w-[900px]  ${opp?'lg:ml-auto ':"lg:mr-auto"} `}>
      {/* Left Section - Image */}
      <div className={`w-full lg:w-[30%] ${opp?'lg:order-2 order-1 lg:text-right text-left':""}`}>
        <Image
          src={imageSrc} // Use the imageSrc prop passed in
          alt="Local Customers"
          className="" // Adjust width as needed
          width={352} // Specify the width
          height={256} // Specify the height
        />
      </div>
      
      {/* Right Section - Text */}
      <div className={`w-full lg:w-[70%]   text-left ${opp?'lg:order-1 order-2 lg:text-right':""}`}>
        <h2 className="text-2xl font-bold">{heading}</h2>
        <p className="mt-2 text-xl ">{para}</p>
      </div>
    </div>
    </div>
  );
};

export default CustomSection;
