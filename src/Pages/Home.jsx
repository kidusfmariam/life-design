import React from 'react'
import Hero from '../Components/Hero/Hero'
import Bio from '../Components/Bio/Bio'
import OurProjects from '../Components/OurProjects/OurProjects'
import Newsletter from '../Components/Newsletter/Newsletter'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: .4, ease:'easeInOut'}}
    >
      <Hero/>
      <Bio/>
      <OurProjects/>
      <Newsletter/>

    </motion.div>
  )
}

export default Home
