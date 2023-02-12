import './Bio.css'
import { motion } from 'framer-motion'
const Bio = () => {
  return (
    <div className='bio-container'>
      <div className="bio-wrapper">
        <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: .5, delay: 0.4}}
            viewport={{once: true}}
        className='bio-p'>Established in 2005, Life Interior Design has a team of experienced designers and architects who strive to bring creativity to every project, big or small. With our focus on modern design trends and holistic behaviors, we craft unique spaces that bring out the best in your home. </motion.p>
      </div>
    </div>
  )
}

export default Bio
