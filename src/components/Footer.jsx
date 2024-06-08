import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 flex flex-col'>
      <div clasName='flex flex-col w-full'>
        <h1 className='w-full text-3xl font-bold'>888RSEC</h1>
        <div className='flex items-center space-x-5 border-b border-black pb-6 mt-6 text-gray-400 text-sm'>
          <button>About Us</button>
          <button>Pricing</button>
          <button>Why choose us</button>
          <button>Contact Us</button>
        </div>
      </div>
      <div className='flex justify-between mt-6'>
        <div className='flex items-center space-x-4 text-sm'>
          <button>FAQs</button>
          <button>Terms and Conditions</button>
        </div>
          <div className='flex items-center space-x-4 text-sm'>
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
      </div>
    </div>
  );
}

