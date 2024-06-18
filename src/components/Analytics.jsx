import RsecLogo from '../assets/logo1.png';
import RsecVid from '../assets/888rsec.mp4'
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from 'react';


export default function Analytics() {

      return (
    <div className='mx-auto p-5 sm:p-10 md:p-16 relative overflow-hidden h-auto bg-fit bg-right bg-no-repeat bg-mix-blend' style={{ backgroundImage: `url(${RsecLogo})` }}>
      <div className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-1 gap-20 justify-items-center mx-auto'>
            <div>
              <h1 className="font-semibold lg:text-4xl">About Us</h1>
              <p className="text-md lg:text-xl leading-loose text-justify mt-8">
                As we stand at the cusp of a new era in energy production and sustainability, 
                it is with immense pride and boundless optimism that I introduce to you the pioneering vision 
                and groundbreaking achievements of 888 Renewable and Sustainable Energy Corporation.  <button className=' text-[#5fceeb] text-sm underline'>View More</button>
              </p>
              <video className='mt-6 border rounded-lg border-[#7dae07]' width="650" height="420" controls>
                <source src={RsecVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            

      
      </div>
    </div>
  );
}