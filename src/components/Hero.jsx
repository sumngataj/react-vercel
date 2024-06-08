import HeroIcon from "../assets/bghero.jpg"
import { FaArrowRight } from "react-icons/fa6";
export default function Hero() {
    const data = [
    { label: '2018', value: 500 },
    { label: '2019', value: 450 },
    { label: '2020', value: 380 },
    { label: '2021', value: 300 },
    { label: '2022', value: 270 },
    { label: '2023', value: 0 },
  ];

  // Find the maximum value for scaling
  const maxValue = Math.max(...data.map((item) => item.value));
    return (
    <div className='w-full'>
      <div className='flex items-center justify-around max-w-[1200px] h-screen mx-auto'>
        <div>
        <p className='text-sm bg-[#ebf3f2] text-[#117866] rounded-full w-auto p-2 border-2'>~ Lorem ipsum dolor sit amet consectetur elit</p>
        <h1 className='md:text-5xl sm:text-6xl text-3xl'>
          <p>Solar energy.</p>
          <p>the smartest way</p>
        </h1>
        
        <div className="flex items-center justify-center space-x-4 mt-20">
          <div className="flex flex-col">
            <ul class="space-y-6 font-semibold">
              <li>100%</li>
              <li>75%</li>
              <li>50%</li>
              <li>25%</li>
              <li>0%</li>
            </ul>
          </div>
           {data.map((item, index) => (
        <div key={index} className="">
          <div className="bg-[#117866] h-40 border border-gray-300 rounded-lg" style={{ width: '50px', height: '14rem' }}>
            <div
              className="h-full bg-[#ecedef]"
              style={{ height: `${(item.value / maxValue) * 100}%` }}
            ></div>
          </div>
           <div className="text-center mt-2 italic">{item.label}</div>
        </div>
      ))}
      </div>
        </div>
        <div className=''>
            <div className="flex items-center justify-center bg-cover bg-center bg-fixed rounded-xl h-[90vh] md:w-96" style={{ backgroundImage: `url(${HeroIcon})` }}>
              <button className='flex items-center justify-center rounded-xl w-auto bg-[#ff7a00] mx-auto p-4 text-white text-sm'>Explore More <FaArrowRight size={16}/></button>
            </div>
        </div>
      </div>
    </div>
  );
}