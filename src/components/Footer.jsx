
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <div className='bg-[#282424] mt-8'>
    <div className='max-w-screen-xl mx-auto py-6 flex flex-col text-white'>
      <div className='flex flex-col w-full'>
        <div className='flex justify-between items-start space-x-5 border-b border-white pb-6 mt-6 text-gray-300 text-sm'>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-xl'>Socials</h2>
              <div className='flex items-center justify-between'>
                <FaFacebookF size={25}/>
                <FaLinkedinIn size={25}/>
              </div>
            </div>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-xl'>Products</h2>
              <p>Solar Panels</p>
              <p>Hydro</p>
            </div>
            <div className='flex flex-col space-y-2'>
              <h2 className='text-xl'>About Us</h2>
              <p className='text-md '>About 888RSEC</p>
            </div>
            <div className='flex flex-col'>
              <h2 className='text-xl underline'>Contact Us</h2>
            </div>
        </div>
      </div>
      <div className='flex justify-between items-center mt-6'>
      <h2>All Rights Reserved.</h2>
      <h2> 2024 © 888RSEC</h2>
      </div>
    </div>
    </div>
  );
}

