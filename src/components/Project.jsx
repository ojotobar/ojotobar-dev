import { FaArrowDown } from 'react-icons/fa'
import { goToContact, goToGithubPage } from '../helpers/settings'
import { Image, Row } from 'react-bootstrap'

const Project = ({ projects }) => {
  const content = projects && projects?.map(project => (
          <div key={project?._id} className="details-container color-container mb-2">
            <div className="article-container">
              <Image 
                src={project?.pageUrl} 
                alt={project?.name}
                fluid
                thumbnail
              />
            </div>
            <h2 className="experience-sub-title project-title">{project?.name}</h2>
            <div className="btn-container">
              <button className="btn btn-color-2 project-btn" onClick={goToGithubPage}>Github</button>
              <button className="btn btn-color-2 project-btn" onClick={() => window.location.href=project?.url}>Live Demo</button>
            </div>
          </div>
        ));

  return (
    <section id="projects">
      <Row className='m-auto mb-3 w-100'>
        <p className="section_text_p1">Browse My Recent</p>
        <h1 className="title">Projects</h1>
      </Row>
      <Row xs={1} sm={1} md={2} lg={2} className="experience-details-container m-auto">
        { content }
      </Row>
      <FaArrowDown className="icon arrow" size={50} onClick={goToContact}/>
    </section>
  )
}

export default Project