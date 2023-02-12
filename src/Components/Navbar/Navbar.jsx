import { useState } from 'react'
import './Navbar.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'
const Navbar = () => {

  const[menu, setMenu] = useState(false)
  return (
    <>
    <motion.nav
      initial={{top: "-100%"}}
      animate={{top: 0}}
      transition={{duration: 1.5, delay: 2.5}}
    >
      <div className='nav-wrapper'>
        <div className='logo'>
          <span>Life.</span>
        </div>
        <div className='nav-items'>
          <p>Home</p>
          <p>Works</p>
          <p>About</p>
          <p>Contact</p>
          <div className='menu-btn' onClick={() => setMenu(!menu)}><AiOutlineMenu/></div>
        </div>
      </div>
    </motion.nav>

    <div className={`menu-sm ${menu ? 'collapsed' : ''}`}>
      <div className='close-btn' onClick={() => setMenu(!menu)}><AiOutlineClose/></div>
      <div className="menu-sm-items">
          <p>Home</p>
          <p>Works</p>
          <p>About</p>
          <p>Contact</p>
      </div>

    </div>
    </>
  )
}

export default Navbar
