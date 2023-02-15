import './Projects.css'
import projects from '../../../projects'
import ProjectCard from '../../Components/ProjectCard/ProjectCard'
const Projects = () => {
  return (
    <div className='projects-container'>
        <div className='projects-overlay'></div>
        <div className='projects-title'>
            <h1>Our <span className='yellow'>projects.</span></h1>
        </div>


        <div className='projects-list'>
           {projects.map(item => (
              <ProjectCard
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
