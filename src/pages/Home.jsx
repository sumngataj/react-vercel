import {Navbar, Hero, Analytics, Cards, Newsletter, Featured, Footer} from '../components/index'
import { IoIosArrowDropupCircle } from "react-icons/io";

export default function Home() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div>
            <Navbar />
            <Hero />
            <Analytics />
            <Cards />
            {/* <Newsletter /> */}
            <Featured />
            <Footer />
            <IoIosArrowDropupCircle className='fixed z-10 bottom-6 right-8 text-white cursor-pointer' size={40} onClick={scrollToTop}/>
        </div>
    );
}