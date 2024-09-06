import './ProjectDetails.css'
import type { Project } from '../../../CONSTANT/CONSTANT.types'

type ProjectDetailsProps = {
    projects: Project[];
    expandedProjectIndex: null | number
}

export default function ProjectDetails({projects, expandedProjectIndex}: ProjectDetailsProps) {
  return (
      
    <>
    {expandedProjectIndex !== null && (
        <div className="project-card">
        <h4>{projects[expandedProjectIndex].name}</h4>
        <p>{projects[expandedProjectIndex].description}</p>
        <p>
            <strong>Outcome:</strong> {projects[expandedProjectIndex].outcome}
        </p>
        <div className="links">
            {projects[expandedProjectIndex].youtubeLink && (
            <a href={projects[expandedProjectIndex].youtubeLink} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i> Watch Demo
            </a>
            )}
            <a href={projects[expandedProjectIndex].githubLink} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i> View Code
            </a>
        </div>
        </div>
    )}
     
    </>
       
   
  )
}