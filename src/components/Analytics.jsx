import RsecLogo from '../assets/logo1.png';
import RsecLogo2 from '../assets/logo2.png';
import RsecVid from '../assets/888rsec.mp4'
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";
import { useState } from 'react';


export default function Analytics() {

      return (
    <div className='pb-16 pr-20 relative overflow-hidden h-auto bg-fit bg-left bg-no-repeat bg-mix-blend bg-fixed bg-[#f8e4dc]'>
   
      <div className='flex max-w-[1300px] mx-auto m-4 relative'>
     
            <div className='p-6 rounded-lg relative'>
            {/* <img className='absolute top-[-10%] right-0'src={RsecLogo2} width={100}/> */}
            <div className='relative'>
              <div className=''>
                <h1 className="font-semibold lg:text-3xl rounded-md">About <span className=''>Us</span></h1>
              </div>
              <div className='flex justify-between space-x-10'>
              <p className="text-md lg:text-xl leading-loose text-justify mt-8">
                As we stand at the cusp of a new era in energy production and sustainability, 
                it is with immense pride and boundless optimism that I introduce to you the pioneering vision 
                and groundbreaking achievements of 888 Renewable and Sustainable Energy Corporation. <br /><br />
                Our journey began with a simple yet profound belief: that the path to a sustainable future lies in leveraging 
                the inexhaustible energy sources nature provides – the sun, wind, water, and earth. 
                From this belief, we have grown into a leading force in the renewable energy sector, committed to developing and 
                implementing cutting-edge technologies that reduce carbon footprints and combat climate change
                {/* <button className=' text-[#5fceeb] text-sm underline'>View More</button> */}
              </p>
              <video className='mt-6 border-4 rounded-lg border-black h-72' width="650" controls>
                <source className='rounded-lg' src={RsecVid} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              </div>
                </div>
            </div>
      </div>
    </div>
  );
}