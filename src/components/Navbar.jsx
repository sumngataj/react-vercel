import {useState, useEffect} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import RsecLogo from '../assets/logo2.png';
import {Link} from 'react-router-dom';



export default function Navbar() {
    const [nav, setNav] = useState(false)
    const [lgNav, setlgNav] = useState(false)

      const handleScroll = () => {
    if (window.scrollY > 200) {
      setlgNav(true); // Add background color
    } else {
      setlgNav(false); // Remove background color
    }
  };

     useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    const handleNav = () => {
        setNav(!nav)
    }
    //
    return (
        <div className={`flex justify-between items-center h-20 mx-auto px-4 fixed z-10 w-full transition-colors duration-300 ease-in-out ${lgNav ? ' bg-[#7dae07] text-white shadow-md ' : ''}`}>
            {/* <h1 className="block"> 
                <a href="" className="flex items-center 3 rtl:space-x-reverse">
                    <img src={Logo} className="h-20" alt="888RSEC LOGO" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">888RSEC</span>
                </a>
            </h1> */}
                <Link to="/" className="flex items-center 3 rtl:space-x-reverse">
                    <img src={RsecLogo} className="h-14" alt="888RSEC LOGO" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-2">888 RSE Corp.</span>
                </Link>
            <ul className="hidden md:flex items-center justify-between space-x-5 text-white">
                <Link to="/about" className="text-sm p-4">About Us</Link>
                <Link to="/services" className="text-sm p-4">Services</Link>
                <Link to="/products" className="text-sm p-4">Products</Link>
                <Link to="/contact" className="text-sm p-4">Contact Us</Link>
            </ul>
            {/* <button className="text-sm underline hidden md:flex items-center">Let's Talk <MdOutlineArrowOutward size={20}/></button> */}
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full shadow-md bg-[#7dae07] text-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold m-4">888 RSE Corp.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-gray-200 cursor-pointer">About Us</li>
                    <li className="p-4 border-b border-gray-200 cursor-pointer">Services</li>
                    <li className="p-4 border-b border-gray-200 cursor-pointer">Products</li>
                    <li className="p-4 border-b border-gray-200 cursor-pointer">Contact Us</li>
                </ul>
            </div>
        </div>
    );
}