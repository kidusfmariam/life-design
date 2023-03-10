import React from 'react'
import './Hero.css'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <>

    <motion.div 
    initial={{left: 0}}
    animate={{left: "-100%"}}
    transition={{duration: 1.3, delay: 2.3}}
    className='loading loading-1'></motion.div>
    <motion.div 
    initial={{right: 0}}
    animate={{right: "-100%"}}
    transition={{duration: 1.3, delay: 2.3}}
    className='loading loading-2'></motion.div>
    <motion.div 
        initial={{opacity: 1, zIndex: 1000000}}
        animate={{opacity: 0, zIndex: -100000}}
        transition={{duration: 1.4, delay: 1.7, ease: "anticipate"}}
    className='loading-logo'>Life.</motion.div>
    <motion.div 
    initial={{y: "-500%"}}
    animate={{y: 0}}
    exit={{y: "-500%"}}
    transition={{duration: 1.2, delay: 0.4}}
    className='hero-container'>
    <img className='hero-bg-img' src="/Images/Home/landing-page-bg.jpg" alt="hero-bg-img" />
    <div className='overlay'></div>
    <div className="hero-wrapper">
        <div className='hero-content'>
            <motion.h1
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{duration: 1.2, delay: 2.6}}
            >Bring your<br/>space to <span className='yellow'>life.</span></motion.h1>
             <Link to='/contact' style={{textDecoration: 'none'}}><motion.div 
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{duration: 1.2, delay: 2.8}}
            className='hero-cta'>
              <p className='cta-text'>Feel <br/> free to<br/> reach out</p>
                <p><AiOutlineArrowRight/></p>
            </motion.div></Link> 
        </div>
    </div>
      
    </motion.div>
    </>
  )
}

export default Hero
