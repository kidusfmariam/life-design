import './OurProjects.css'
import {BsArrowRight} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const OurProjects = () => {
  return (
    <div className='our-projects container'>
      <div className="our-projects-container">
        <div className='our-projects-content'>
            <motion.h1
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2, delay: 0.4}}
                viewport={{once: true}}
            >Our<br/>
            <span className='yellow'>Projects</span></motion.h1>
            <motion.p
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2, delay: 0.7}}
                viewport={{once: true}}
            >Start exploring our portfolio to get inspired and book a consultation today!</motion.p>
            <Link to='/works' style={{textDecoration: 'none'}}><motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 1.2, delay: 0.9}}
                viewport={{once: true}}
            className='our-projects-cta'>
                <p>View Our Projects</p>
                <p><BsArrowRight/></p>
            </motion.div></Link>
        </div>
        <div className='our-projects-img'>
            <motion.div 
                initial={{left: 0}}
                whileInView={{left: "400%"}}
                transition={{duration: .6, delay: 0.6}}
                viewport={{once: true}}
            className='overlay-2'></motion.div>
            <img src="/Images/Home/landing-page-projects-cta.jpg" alt="landing-page-projects-cta.jpg" />
        </div>
      </div>
    </div>
  )
}

export default OurProjects
