import RsecVid from '../assets/888rsec.mp4';
import RsecLogo from '../assets/logo1.png';
import {useState} from 'react';
import first from '../assets/1.jpg';
import second from '../assets/2.jpg';
import third from '../assets/3.jpg';
import fourth from '../assets/4.jpg';
export default function Cards() {
  const [more, setMore] = useState(false)
      
  const handleReadMore = () => {
      setMore(!more)
    }
  return (
    <div className='h-auto p-20 bg-cover bg-fixed'  style={{ backgroundImage: `url(${'https://images.unsplash.com/photo-1588575553315-6feef5326ec0?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'})` }}>
    <div className='w-full bg-[#7dae07] rounded-3xl py-16 px-4 h-auto'>
      <div className='max-w-[1200px] mx-auto'>
        <div>
          <h1 className="md:text-5xl text-white font-semibold">WHY <span className='text-[#fdd703] font-semibold'>888</span>RSEC ?</h1>
          <br />
          <p className='text-white leading-relaxed text-justify text-xl'>Our portfolio boasts a diverse range of projects, from solar farms that capture the sun’s rays to transform them into clean electricity, to wind turbines that harness the power of the wind, and hydroelectric plants that utilize water’s might. Each project is a testament to our unwavering commitment to innovation, excellence, and sustainability. <button onClick={handleReadMore} className={`text-sm underline text-[#5fceeb] ${more ? 'hidden' : 'visible'}`}>Read More</button></p>
         
          <br />
          <p className={`text-white leading-relaxed text-justify text-xl transition-shadow ease-in-out ${more ? 'visible' : 'hidden'}`}>But our ambitions go beyond energy production. At 888 Renewable and Sustainable Energy Corporation, we are dedicated to creating a world where sustainable energy is not a luxury but a given. Through our community outreach programs, we strive to educate and empower individuals and communities to make sustainable choices and advocate for policies that promote renewable energy use.
            <br /><br />
            As we look to the future, we are filled with hope and excitement for what lies ahead. The challenges of climate change and environmental degradation are daunting, but they are not insurmountable. With your continued support and partnership, we believe that 888 Renewable and Sustainable Energy Corporation can lead the way in creating a sustainable future for all. <button onClick={handleReadMore} className='text-sm underline text-[#5fceeb]'>View Less</button>
          </p>
        </div>
         {/* <div className="flex justify-end items-end"> 
           <img src={RsecLogo} width={300} />
          </div> */}
        </div>
        <div className='flex flex-col max-w-[1240px] mx-auto mt-12 bg-white rounded-3xl px-12 py-8'>
             <h1 className='text-3xl text-center font-semibold'>Company Mission</h1>
        <div className='flex items-start justify-between border-b border-[#102437] pb-8 relative'>
          <div>
          <ul className='list-disc text-xs flex-1 space-y-3'>
            <p className='text-md text-[#7dae07]'>Our Mission</p>
            <p className='text-xl text-justify leading-relaxed'><span className='font-bold'>At 888</span> Renewable and Sustainable Energy Corporation, we are not just a company; we are a beacon of hope and innovation in the quest for a greener, more sustainable future. Our mission is to harness the power of renewable resources to create energy solutions that are not only efficient and reliable but also environmentally friendly and sustainable for generations to come.
            </p>
          </ul>
          </div>
          <img src={RsecLogo} width={200}  />
        </div>
        <h1 className='text-3xl mt-8 text-center font-semibold'>People behind it</h1>
         <div className='flex flex-wrap md:grid-cols-4 p-4 mt-8 border-b border-[#102437] pb-8 justify-center'>
            <div className='relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4'>
                <img src={second} width={150} height={150} className='rounded-full object-cover' />
                <p className='text-center font-semibold'>Chairman of the Board <br /> Gen. Willy Bonilla</p>
            </div>
            <div className='relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4'>
                <img src={first} width={150} height={150} className='rounded-full object-cover' />
                  <p className='text-center font-semibold'>Board of Directors <br />Edwin Robin</p>
            </div>
            <div className='relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4'>
                <img src={third} width={150} height={150} className='rounded-full object-cover' />
                  <p className='text-center font-semibold'>Board of Directors <br />Eng’r Edwin Chavez - PEE</p>
            </div>
            <div className='relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4'>
                <img src={fourth} width={150} height={150} className='rounded-full object-cover' />
                  <p className='text-center font-semibold'>Board of Directors<br /> Alex Lopez</p>
            </div>
                <div className='relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4'>
                <img src={fourth} width={150} height={150} className='rounded-full object-cover' />
                  <p className='text-center font-semibold'>Board of Directors<br />Blank</p>
            </div>
                <div className='relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4'>
                <img src={fourth} width={150} height={150} className='rounded-full object-cover' />
                  <p className='text-center font-semibold'>Board of Directors <br />Blank</p>
            </div>
                <div className='relative flex flex-col items-center space-y-6 w-full md:w-1/4 p-4'>
                <img src={fourth} width={150} height={150} className='rounded-full object-cover' />
                  <p className='text-center font-semibold'>Board of Directors <br />Robert Tagulao</p>
            </div>

            </div>
        {/* <div className='flex items-center justify-between mt-8'>
          <div>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
          </div>
           <div className=''>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
          </div>
           <div>
            <p className='text-[#102437] text-xl'>LOREM IPSUM TITLE</p>
            <p className='text-[#102437] text-sm mt-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
              molestiae delectus culpa hic assumenda, voluptate reprehenderit
              dolore autem cum ullam sed odit perspiciatis.
            </p>
 
          </div>
        </div> */}
        </div>
        </div>
        </div>
  );
}
