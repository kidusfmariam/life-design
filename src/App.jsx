import Home from "./Pages/Home"
import About from "./Pages/About"
import Works from "./Pages/Works"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar/Navbar"
import Footer from "./Components/Footer/Footer"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
function App() {

  return (
  <AnimatePresence>
    <Router>
        <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/works" element={<Works/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
        <Footer/>
    </Router>
    </AnimatePresence>
  )
}

export default App
