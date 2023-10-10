import React from 'react'
import { SKILL_LEVELS, goToProject } from '../helpers/settings'
import { FaArrowDown } from 'react-icons/fa';
import { Col, Row } from 'react-bootstrap';

const Experience = ({ skills }) => { 
  return (
    <section id="experience">
        <Row className='w-100 m-auto mb-3'>
            <p className="section_text_p1">Explore My</p>
            <h1 className="title">Experience</h1>
        </Row>
        <Row className='experience-details-containers m-auto'>
            <Row className='about-container m-auto d-flex'>
                <Col className='m-auto details-container'>
                    <h2 className="experience-sub-title">Development Skills</h2>
                    <div className="article-container">
                        {
                            skills && skills?.map(skill => (
                                <article key={skill?._id}>
                                    <img src={skill?.iconUrl} alt={skill?.skill} className="icon" />
                                    <div>
                                        <h4>{skill?.skill}</h4>
                                        <p>{SKILL_LEVELS[skill?.level]}</p>
                                    </div>
                                </article>
                            ))
                        }
                    </div>
                </Col>
            </Row>
        </Row>
        <FaArrowDown className="icon arrow" size={50} onClick={goToProject}/>
    </section>
  )
}

export default Experience