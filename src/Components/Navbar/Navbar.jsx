import { useState } from 'react'
import './Navbar.css'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const[menu, setMenu] = useState(false)
  return (
    <>
    <motion.nav
      initial={{top: "-100%"}}
      animate={{top: 0}}
      transition={{duration: 2, delay: 2}}
    >
      <div className='nav-wrapper'>
        <div className='logo'>
        <Link to='/' style={{textDecoration: 'none', color: "white"}}> <span>Life.</span></Link>
        </div>
        <div className='nav-items'>
          <Link to='/' style={{textDecoration: 'none', color: "white"}}><p>Home</p></Link>
          <Link to='/works' style={{textDecoration: 'none', color: "white"}}><p>Works</p></Link>
          <Link to='/about' style={{textDecoration: 'none', color: "white"}}><p>About</p></Link>
          <Link to='/contact' style={{textDecoration: 'none', color: "white"}}><p>Contact</p></Link>
          
          <div className='menu-btn' onClick={() => setMenu(!menu)}><AiOutlineMenu/></div>
        </div>
      </div>
    </motion.nav>

    <div className={`menu-sm ${menu ? 'collapsed' : ''}`}>
      <div className='close-btn' onClick={() => setMenu(!menu)}><AiOutlineClose/></div>
      <div className="menu-sm-items">
      <Link to='/' style={{textDecoration: 'none', color: "white"}}><p onClick={() => setMenu(!menu)}>Home</p></Link>
      <Link to='/works' style={{textDecoration: 'none', color: "white"}}>   <p onClick={() => setMenu(!menu)}>Works</p></Link>
      <Link to='/about' style={{textDecoration: 'none', color: "white"}}>    <p onClick={() => setMenu(!menu)}>About</p></Link>
      <Link to='/contact' style={{textDecoration: 'none', color: "white"}}>   <p onClick={() => setMenu(!menu)}>Contact</p></Link>
      </div>

    </div>
    </>
  )
}

export default Navbar
