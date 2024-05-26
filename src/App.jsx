import React from 'react';
import Analytics from "./components/Analytics"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import Cards from './components/Cards';


function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <Cards />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
