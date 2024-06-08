import {useState} from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { MdOutlineArrowOutward } from "react-icons/md";
import Logo from "../assets/888logo.png"



export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center h-24 max-w-[1200px] mx-auto px-4 shadow-md lg:shadow-none">
            <h1 className="block md:hidden"> 
                <a href="" class="flex items-center 3 rtl:space-x-reverse">
                    <img src={Logo} class="h-20" alt="888RSEC LOGO" />
                    {/* <span class="self-center text-2xl font-semibold whitespace-nowrap ">888RSEC</span> */}
                </a>
            </h1>
            <ul className="hidden md:flex space-x-5">
            <h1 className=""> 
                <a href="" class="flex items-center 3 rtl:space-x-reverse">
                    <img src={Logo} class="h-14" alt="888RSEC LOGO" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap ">888RSEC</span>
                </a>
            </h1>
                <li className="text-sm p-4">About Us</li>
                <li className="text-sm p-4">Pricing</li>
                <li className="text-sm p-4">Why Choose us</li>
                <li className="text-sm p-4">Contact Us</li>
            </ul>
            <button className="text-sm underline hidden md:flex items-center">Let's Talk <MdOutlineArrowOutward size={20}/></button>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full shadow-md bg-white text-black ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#FFBF00] m-4">LOGO.</h1>
                <ul className="uppercase p-4">
                    <li className="p-4 border-b border-black">Home</li>
                    <li className="p-4 border-b border-black">Company</li>
                    <li className="p-4 border-b border-black">Projects</li>
                    <li className="p-4 border-b border-black">About</li>
                    <li className="p-4">Contact</li>
                </ul>
            </div>
        </div>
    );
}