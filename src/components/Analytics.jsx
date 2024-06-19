import RsecLogo from '../assets/logo1.png';
import RsecLogo2 from '../assets/logo2.png';
import RsecVid from '../assets/888rsec.mp4'
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from 'react';


export default function Analytics() {

      return (
    <div className='mx-auto p-5 sm:p-10 md:p-16 relative overflow-hidden h-auto bg-fit bg-left bg-no-repeat bg-mix-blend bg-fixed bg-white' style={{ backgroundImage: `url(${RsecLogo})` }}>
      <div className='flex max-w-[1240px] justify-center items-center mx-auto relative p-4'>
            <div className='w-1/2'>
            </div>
            <div className=' w-1/2 p-6 border-2 border-black rounded-lg relative'>
            <img className='absolute top-[-15%] right-0'src={RsecLogo2} width={100}/>
              <h1 className="font-semibold lg:text-4xl">About <span className='text-[#fdd703] font-semibold uppercase'>Us</span></h1>
              <p className="text-md lg:text-xl leading-loose text-justify mt-8">
                As we stand at the cusp of a new era in energy production and sustainability, 
                it is with immense pride and boundless optimism that I introduce to you the pioneering vision 
                and groundbreaking achievements of 888 Renewable and Sustainable Energy Corporation.  <button className=' text-[#5fceeb] text-sm underline'>View More</button>
              </p>
              <video className='mt-6 border-4 rounded-lg border-black' width="650" height="420" controls>
                <source className='rounded-lg' src={RsecVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
      </div>
    </div>
  );
}