import React from 'react'
import './ProjectCard.css'
const ProjectCard = ({id, image, title}) => {
  return (
    <div className='project-card'>
      <img className='project-img' src={image} alt={title} />
      <div className='project-card-overlay'>
            <h2>{title}</h2>
      </div>
    </div>
  )
}

export default ProjectCard
