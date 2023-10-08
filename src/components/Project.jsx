import { FaArrowDown } from 'react-icons/fa'
import { goToContact, goToGithubPage } from '../helpers/settings'

const Project = ({ projects }) => {
  return (
    <section id="projects">
      <p className="section_text_p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
        {
          projects && projects?.map(project => (
            <div key={project?._id} className="details-container color-container">
              <div className="article-container">
                <img src={project?.pageUrl} alt={project?.name} className="project-img" />
              </div>
              <h2 className="experience-sub-title project-title">{project?.name}</h2>
              <div className="btn-container">
                <button className="btn btn-color-2 project-btn" onClick={goToGithubPage}>Github</button>
                <button className="btn btn-color-2 project-btn" onClick={() => window.location.href=project?.url}>Live Demo</button>
              </div>
            </div>
          ))
        }
        </div>
        <FaArrowDown className="icon arrow" size={50} onClick={goToContact}/>
      </div>
    </section>
  )
}

export default Project