import './Projects.css'
import projects from '../../../projects'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
import { easeInOut, motion } from 'framer-motion'
const Projects = () => {
  return (
    <div className='projects-container'>
        <motion.div 
          initial={{height: 0}}
          animate={{height: "50vh"}}
          transition={{duration: 0.4, delay: 0.2}}
        className='projects-overlay'></motion.div>
        <div className='projects-title'>
            <motion.h1
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              transition={{duration: 0.4, delay: 2}}
            >Our <span className='yellow'>projects.</span></motion.h1>
        </div>


        <div className='projects-list'>
           {projects.map(item => (
              <ProjectCard
                id={item.id}
                key={item.id}
                image={item.image}
                title={item.title}
              />
           ))}
        </div>
    </div>

  )
}

export default Projects
