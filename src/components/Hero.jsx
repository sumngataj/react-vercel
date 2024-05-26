
export default function Hero() {
    return (
    <div className='bg-[#FFEC9E] md:rounded-br-full md:border-b border-black'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Glow with us.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Make your dreams brighter.
          </p>
           

        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, incididunt ut labore et dolore magna aliqua.</p>
        <button className='bg-white w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  );
}