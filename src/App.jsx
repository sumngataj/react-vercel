import { Homepage, Contact, About, Services, Products } from './pages/index' 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  return (
    <div>
          <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
    </div>
  )
}

export default App
