import './Gallery.css'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <div className='gallery-container'>
        <motion.h1
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.6, delay: 0.2}}
          viewport={{once: true}}
        >Our <span className='yellow'>gallery.</span></motion.h1>

        <div className='gallery-images'>
            <motion.img 
              initial={{opacity: 0, y: "20%"}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.2}}
              viewport={{once: true}}
            src="/Images/About/gallery-img-1.jpg" alt="" />
            <img src="/Images/About/gallery-img-2.jpg" alt="" />
            <img src="/Images/About/gallery-img-3.jpg" alt="" />
            <img src="/Images/About/gallery-img-4.jpg" alt="" />
            <img src="/Images/About/gallery-img-5.jpg" alt="" />
            <img src="/Images/About/gallery-img-6.jpg" alt="" />
           
        </div>
        <div className='project-cta'>
          <Link to='/works' style={{textDecoration: 'none'}}><button>View our projects</button></Link>  
        </div>
    </div>
  )
}

export default Gallery
