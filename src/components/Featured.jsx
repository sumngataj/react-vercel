import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa6";
export default function Featured() {
    return(
        <div className='mx-auto'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d981.3375035257642!2d123.92746222689827!3d10.313847967209162!2m3!1f0!2f0!3f0!3m2!1i4000!2i9000!4f13.1!3m3!1m2!1s0x33a9990adb9282ed%3A0xe45490cfbc5faa37!2sRobinland%20Inc.!5e0!3m2!1sen!2sph!4v1718806645651!5m2!1sen!2sph" className='w-full' height="450" allowFullScreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Map"></iframe>
        <div className='max-w-[1340px] mx-auto flex flex-col items-start justify-between mt-8'>
        <div className='grid md:grid-cols-2'>
        <h1 className='text-4xl leading-relaxed font-medium underline'>Information</h1>
        <h1 className='text-xl leading-relaxed font-medium underline'>Contact Us</h1>
         <div className='flex flex-col mt-6 space-y-10'>
            {/* <ul className=" text-2xl">
                <li className='flex items-start'><FaLocationDot /><p className='text-2xl'>8th floor, Robinland Building, Zuellig Ave. <br/>Subangdaku, Mandaue City, Cebu, PH 6014</p></li>
                <li><MdEmail /><p className="text-2xl">rttagulao@888rsec.com</p></li>
                <li></li>
            </ul> */}
            <div className='flex items-start justify-start'>
                <FaLocationDot size={25} className='mt-1 mr-2'/>
                <p className='text-2xl'>8th floor, Robinland Building, Zuellig Ave. <br/>Subangdaku, Mandaue City, Cebu, PH 6014</p>
            </div>
               <div className='flex items-start justify-start'>
               <MdEmail size={25} className='mt-1 mr-2'/><p className="text-2xl">rttagulao@888rsec.com</p>
            </div>
               <div className='flex items-start justify-start'>
               <IoCall size={25} className='mt-1 mr-2' /><p className="text-2xl">(+63)32 238-4288 <br /> (+63)32 238-4288 <br /> Local 207, 208</p>
            </div>
                <div className='flex items-start justify-start'>
               <FaGlobe size={25} className='mt-1 mr-2' /><p className="text-2xl">888rsec.com</p>
            </div>
         </div>
        <div className='flex flex-col'>
          <div>
                <p className='leading-relaxed text-md'>
                    We invite you to join us on this journey. Together, we can make a difference. 
                    Together, we can build a future that is not only sustainable but  also  prosperous  
                    and full of promise. Let us embrace the power of renewable energy and  work hand in 
                    hand towards a brighter, greener tomorrow.
                </p>
                <br />
          
            </div>
            <p className='underline font-medium'>Get in touch with us through message</p>
            <div className="flex flex-col mt-4">
                <label for="email" className="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" className="p-2 rounded-lg border border-gray-400 focus:border-black focus:outline-none" />
            </div>
            <div className="flex flex-col mt-2">
                <label for="subject" className="hidden">Subject</label>
                <input type="text" name="subject" id="subject" placeholder="Subject" className="p-2 rounded-lg border border-gray-400 focus:border-black focus:outline-none" />
            </div>
            <div className="flex flex-col">
                <label for="message" className="text-sm font-medium text-gray-900 dark:text-white">Your message</label>
                <textarea id="message" rows="6" className="p-2 rounded-lg border border-gray-400 focus:border-black focus:outline-none" placeholder="Message"></textarea>
            </div>
            
            <button className='w-full rounded-md bg-[#7dae07] text-white text-md p-2 mt-6'>Send Message</button> <br/>
                  <p className='leading-relaxed text-md font-semibold italic'>
                    Thank you for your unwavering support and belief in our mission. Here’s to a future powered by renewable energy, innovation, and collective action.
                </p>
            </div>
         
            
            </div>
        

        </div>
          
        </div>
    );
}