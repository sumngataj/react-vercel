import {Navbar, Hero, Analytics, Cards, Newsletter, Footer} from '../components/index'

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Analytics />
            <Cards />
            <Newsletter />
            <Footer />
        </div>
    );
}