import Laptop from '../assets/header.png';
import { IoIosArrowDropright, IoIosArrowDroprightCircle } from "react-icons/io";

export default function Analytics() {
      return (
    <div className='w-full bg-[#102437] rounded-3xl py-16 px-4'>
      <div className='max-w-[1200px] mx-auto grid md:grid-cols-2'>
        <div>
          <h1 className="md:text-4xl text-white">Why Solar Power? <br /> Saves You A Lot</h1>
        </div>
         <div className="flex justify-end items-end"> {/* Aligns content to bottom right */}
            <button className="bg-[#117866] text-xs hover:bg-[#117866] text-white py-2 px-4 rounded-full">
              Get Started
            </button>
          </div>
        </div>
       <div className='flex items-center justify-between max-w-[1200px] mx-auto mt-20 space-x-9'>
          <div className='p-4 rounded-2xl hover:bg-[#2d3e4f] transition ease-in-out cursor-pointer'>
            <p className='text-[#FFF] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#FFF] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
            <IoIosArrowDropright className="text-white mt-6" size={20}/>
          </div>
           <div className='bg-[#2d3e4f] p-4 rounded-2xl'>
            <p className='text-[#FFF] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#FFF] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
            <IoIosArrowDroprightCircle className="text-white mt-6" size={20} />
          </div>
           <div className='p-4 rounded-2xl hover:bg-[#2d3e4f] transition ease-in-out cursor-pointer'>
            <p className='text-[#FFF] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#FFF] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
            <IoIosArrowDropright className="text-white mt-6" size={20} />
          </div>
        </div>
        <div className='flex flex-col max-w-[1240px] mx-auto mt-20 bg-white rounded-3xl px-12 py-8'>
        <div className='flex items-start justify-between border-b border-[#102437] pb-8'>
          <h1 className='text-3xl flex-1'>Electricity production rate</h1>
          <ul className='list-disc text-xs flex-1 space-y-3'>
            <li className='text-md text-[#117866]'>SOLAR POWER ENERGY</li>
            <p classname=''>The design and installation of PV systems on a large scale enable us to move away from other polluting and unsustainable energy sources.   
              Since the solar industry is growing, that means that the need for skilled workers is also growing! Remote Energy (RE) is a 501 (c)(3) 
              for-impact organization that trains women and men worldwide to harness the power of the sun and develop the technical PV design and installation 
              skills required to bring clean power and positive change to their communities. 
            </p>
          </ul>
        </div>
        <div className='flex items-center justify-between mt-8'>
          <div>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
            <IoIosArrowDropright className="text-white mt-6" size={20}/>
          </div>
           <div className=''>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
            <IoIosArrowDroprightCircle className="text-white mt-6" size={20} />
          </div>
           <div>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
            <IoIosArrowDropright className="text-white mt-6" size={20} />
          </div>
        </div>
        </div>
    </div>
  );
}