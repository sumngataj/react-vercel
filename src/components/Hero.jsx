import HeroIcon from "../assets/bghero.jpg"
import { useState, useEffect } from 'react';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  let slides = [
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1677934856407-b937f6ba41dd?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://power-save.com/wp-content/uploads/2020/11/Hydropower-as-Renewable-Energy-Source-2048x1365.jpg",
    "https://images.unsplash.com/photo-1630142896875-d71a6ee6db03?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ]
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval); // Cleanup function to clear interval on component unmount
  }, [current]);

  return (
    <div className="overflow-hidden relative lg:h-screen">
      <div
        className={`flex transition ease-in-out duration-40 bg-pink-500 opacity-90`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s) => {
          return <img className=' w-full h-full object-cover object-bottom' src={s} />;
        })}
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* <div className="absolute top-0 h-full w-full justify-between items-center flex text-green-500 px-10 text-3xl">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div> */}
      <div className="flex justify-center text-center w-full absolute top-[35%] text-5xl text-white">
          <h1>Unveiling the Future with 888 Renewable <br/> & <br/> Sustainable Energy Corporation.</h1>
      </div>

      <div className="hidden md:flex absolute bottom-0 py-4 justify-center gap-3 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-3 h-3 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}