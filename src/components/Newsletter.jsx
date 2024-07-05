import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <div className="w-full py-16 border-b-2 border-t-2 border-gray-400">
      {/* <div>
        <img src={services} className="w-full" />
      </div> */}
      <h1 className="text-center font-semibold text-2xl sm:text-3xl md:text-5xl">
        Services
      </h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center mx-auto mt-6 space-y-9 md:space-y-0">
        <div className="max-w-sm overflow-hidden sm:w-5/6 bg-white border border-gray-400 shadow-2xl">
          <img
            className="w-full h-48 object-cover border-b border-gray-400"
            src="https://images.unsplash.com/photo-1608303588026-884930af2559?q=80&w=1903&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"
          />
          <div className="relative px-6 py-4 mt-2 overflow-hidden group  border-l-4 border-black transition-all duration-300 hover:text-white">
            <div className="absolute inset-0 bg-yellow-600 transition-all duration-300 transform translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-9">
              <div className="font-bold text-xl">Planning</div>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-left">
              Our planning services ensure that every solar energy system we
              install is perfectly tailored to your specific needs and property
              characteristics. We use advanced software to model.
            </p>
          </div>
          <Link
            to="/services"
            className="flex items-center justify-center w-full p-2 bg-[#7dae07] text-white"
          >
            View Details{" "}
            <IoIosArrowDroprightCircle className="ml-2" size={20} />
          </Link>
        </div>
        <div className="max-w-sm overflow-hidden sm:w-5/6 bg-white border border-gray-400 shadow-2xl">
          <img
            className="w-full h-48 object-cover  border-b border-gray-400"
            src="https://plus.unsplash.com/premium_photo-1680302170723-1318f0a8859b?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"
          />
          <div className="relative px-6 py-4 mt-2 overflow-hidden group  border-l-4 border-black transition-all duration-300 hover:text-white">
            <div className="absolute inset-0 bg-yellow-600 transition-all duration-300 transform translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-9">
              <div className="font-bold text-xl">Design</div>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-left">
              Our design process begins with a comprehensive site assessment. We
              evaluate factors such as roof orientation, shading, and structural
              integrity to ensure your property is suitable for solar
            </p>
          </div>
          <Link
            to="/services"
            className="flex items-center justify-center w-full p-2 bg-[#7dae07] text-white"
          >
            View Details{" "}
            <IoIosArrowDroprightCircle className="ml-2" size={20} />
          </Link>
        </div>
        <div className="max-w-sm overflow-hidden sm:w-5/6 bg-white  border border-gray-400 shadow-2xl md:mt-10 lg:mt-0">
          <img
            className="w-full h-48 object-cover  border-b border-gray-400"
            src="https://plus.unsplash.com/premium_photo-1671808063421-697d6de53c2e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"
          />
          <div className="relative px-6 py-4 mt-2 overflow-hidden group  border-l-4 border-black transition-all duration-300 hover:text-white">
            <div className="absolute inset-0 bg-yellow-600 transition-all duration-300 transform translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-9">
              <div className="font-bold text-xl">Installation</div>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-left">
              We specialize in installing solar panel systems of all sizes. Our
              team conducts a thorough assessment of your property to determine
              the optimal placement and configuration of solar panels.
            </p>
          </div>
          <Link
            to="/services"
            className="flex items-center justify-center w-full p-2 bg-[#7dae07] text-white"
          >
            View Details{" "}
            <IoIosArrowDroprightCircle className="ml-2" size={20} />
          </Link>
        </div>
        <div className="max-w-sm overflow-hidden sm:w-5/6 bg-white  border border-gray-400 shadow-2xl md:mt-10 lg:mt-0">
          <img
            className="w-full h-48 object-cover  border-b border-gray-400"
            src="https://plus.unsplash.com/premium_photo-1671808063028-3a67407aeea7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1671808063028-3a67407aeea7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Sunset in the mountains"
          />
          <div className="relative px-6 py-4 mt-2 overflow-hidden group  border-l-4 border-black transition-all duration-300 hover:text-white">
            <div className="absolute inset-0 bg-yellow-600 transition-all duration-300 transform translate-x-full group-hover:translate-x-0"></div>
            <div className="relative z-9">
              <div className="font-bold text-xl">Maintenance</div>
            </div>
          </div>
          <div className="px-6 py-4">
            <p className="text-gray-700 text-left">
              Regular maintenance is essential to ensure that your solar energy
              system operates at peak efficiency. We provide comprehensive
              maintenance services, including routine inspections, cleaning,
            </p>
          </div>
          <Link
            to="/services"
            className="flex items-center justify-center w-full p-2 bg-[#7dae07] text-white"
          >
            View Details{" "}
            <IoIosArrowDroprightCircle className="ml-2" size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
}
