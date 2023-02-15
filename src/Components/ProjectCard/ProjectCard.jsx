import React from 'react'
import './ProjectCard.css'
import { motion } from 'framer-motion'
const ProjectCard = ({id, image, title}) => {
  return (
    <div className='project-card'>
        <motion.div 
            initial={{width: "100%"}}
            animate={{width: 0}}
            transition={{duration: .8, delay:  .5 + (id*0.2)}}
        className="white-overlay"></motion.div>
      <img className='project-img' src={image} alt={title} />
      <div className='project-card-overlay'>
            <h2>{title}</h2>
      </div>
    </div>
  )
}

export default ProjectCard
