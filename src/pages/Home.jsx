import {Navbar, Hero, Analytics, Cards, Newsletter, Featured, Footer} from '../components/index'
import { IoIosArrowDropupCircle } from "react-icons/io";
import {useState, useEffect} from "react";

export default function Home() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
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

    return (
        <div>
            <Navbar />
            <Hero />
            <Analytics />
            <Cards />
            {/* <Newsletter /> */}
            <Featured />
            <Footer />
            <IoIosArrowDropupCircle className={`fixed z-10 bottom-6 right-8 text-white cursor-pointer${lgNav ? ' text-[#7dae07]' : ''}`} size={40} onClick={scrollToTop}/>
        </div>
    );
}