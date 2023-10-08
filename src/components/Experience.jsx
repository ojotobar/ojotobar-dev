import React from 'react'
import { SKILL_LEVELS, fe, goToProject } from '../helpers/settings'
import { FaArrowDown } from 'react-icons/fa';

const Experience = ({ skills }) => {  
  const frontEndSkills = skills?.filter(skill => {
    return fe.includes(skill?.skill);
  });

  const backEndSkills = skills?.filter(skill => {
    return !fe.includes(skill?.skill);
  });

  return (
    <section id="experience">
        <p className="section_text_p1">Explore My</p>
        <h1 className="title">Experience</h1>
        <div className="experience-details-containers">
            <div className="about-containers">
                <div className="details-container">
                    <h2 className="experience-sub-title">Frontend Development</h2>
                    <div className="article-container">
                        {
                            frontEndSkills && frontEndSkills?.map(skill => (
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
                </div>
                <div className="details-container">
                    <h2 className="experience-sub-title">Backend Development</h2>
                    <div className="article-container">
                        {
                            backEndSkills && backEndSkills?.map(skill => (
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
                </div>
            </div>
        </div>
        <FaArrowDown className="icon arrow" size={50} onClick={goToProject}/>
    </section>
  )
}

export default Experience