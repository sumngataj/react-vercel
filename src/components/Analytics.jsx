import RsecLogo from '../assets/logo1.png';
import RsecLogo2 from '../assets/logo2.png';
import RsecVid from '../assets/888rsec.mp4'
import { FaCirclePlay } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { useState } from 'react';


export default function Analytics() {
      const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
      return (
    <div className='relative flex overflow-hidden h-sreen shadow-2xl mx-auto py-8 '>
          <div className='w-full relative flex justify-center items-center '>
            <button type="button" onClick={openModal}  className='w-full hover:opacity-90 transition ease-in-out'><FaCirclePlay size={100} className='absolute inset-0 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' />
            <img src="https://plus.unsplash.com/premium_photo-1680085770875-881edf31094e?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='object-cover h-[40rem] w-full '/>
            </button>
            </div>
            <div className='w-full p-12'>
                  <h1 className='text-md md:text-5xl font-semibold'>About Us</h1>
                  <br />
                  <p className='text-md md:text-xl text-justify leading-relaxed'>As we stand at the cusp of a new era in energy production and sustainability, it is with immense pride and boundless optimism that I introduce to you the pioneering vision and groundbreaking achievements of 888 Renewable and Sustainable Energy Corporation. </p>
                  <br />
                  <p className='text-md md:text-xl text-justify leading-relaxed'>Our journey began with a simple yet profound belief: that the path to a sustainable future lies in leveraging the inexhaustible energy sources nature provides – the sun, wind, water, and earth. From this belief, we have grown into a leading force in the renewable energy sector, committed to developing and implementing cutting-edge technologies that reduce carbon footprints and combat climate change</p>
                  <br />
                  <br />
                  <button className='underline font-semibold italic'>View More</button>
            </div>
           {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative max-w-3xl w-full mx-auto rounded-lg overflow-hidden">
            <button className="absolute z-[9] top-0 right-2 text-white" onClick={closeModal}>
              <IoIosClose size={50} />
            </button>
            <video className='' width="100%" controls>
              <source src={RsecVid} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
        
            </div>
  );
}