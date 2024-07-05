import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import RsecLogo from "../assets/logo2.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [lgNav, setlgNav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setlgNav(true); // Add background color
    } else {
      setlgNav(false); // Remove background color
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  //
  return (
    <div
      className={`h-20 fixed z-10 w-full transition-colors duration-300 ease-in-out ${
        lgNav ? " bg-[#7dae07] text-white shadow-md " : ""
      }`}
    >
      {/* <h1 className="block"> 
                <a href="" className="flex items-center 3 rtl:space-x-reverse">
                    <img src={Logo} className="h-20" alt="888RSEC LOGO" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">888RSEC</span>
                </a>
            </h1> */}
      <div className="flex justify-between items-center max-w-[1320px] mx-auto px-4 h-20">
        <Link to="/" className="flex items-center 3 rtl:space-x-reverse">
          <img src={RsecLogo} className="h-14" alt="888RSEC LOGO" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ml-2">
            888 RSE Corp.
          </span>
        </Link>
        <ul className="hidden lg:flex items-center justify-between space-x-5 text-white">
          <Link
            to="/#about"
            spy={true}
            smooth={true}
            duration={500}
            className="text-md font-semibold p-4"
          >
            About Us
          </Link>
          <AnchorLink smooth={true} duration={500} href="#company-profile">
            Company Profile
          </AnchorLink>
          <Link className="text-md font-semibold p-4" to="/services">
            Services
          </Link>
          <Link className="text-md font-semibold p-4" to="/products">
            Products
          </Link>
          <AnchorLink smooth={true} duration={500} href="#contact">
            Contact Us
          </AnchorLink>
        </ul>
        <button
          className={`text-md font-semibold rounded-full p-3 hidden lg:flex items-center ${
            lgNav ? "bg-white text-[#7dae07]" : "bg-[#7dae07] text-white"
          }`}
        >
          (+63)32 238-4288
        </button>
        <div onClick={handleNav} className="block lg:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full shadow-md bg-white text-black ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <Link to="/" className="flex items-center rtl:space-x-reverse mx-4">
            <img src={RsecLogo} className="h-14" alt="888RSEC LOGO" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-black ml-2 mt-1">
              888 RSE Corp.
            </span>
          </Link>
          <ul className="uppercase">
            <li className="p-4 border-b border-gray-200 cursor-pointer">
              About Us
            </li>
            <li className="p-4 border-b border-gray-200 cursor-pointer">
              Services
            </li>
            <li className="p-4 border-b border-gray-200 cursor-pointer">
              Products
            </li>
            <li className="p-4 border-b border-gray-200 cursor-pointer">
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
const AnchorLink = ({ href, children }) => {
  return (
    <li className="text-md font-semibold p-4">
      <a href={href} className="cursor-pointer">
        {children}
      </a>
    </li>
  );
};
