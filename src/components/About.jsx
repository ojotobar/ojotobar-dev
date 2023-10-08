import { FaArrowDown, FaAward, FaGraduationCap } from "react-icons/fa"
import { goToExperience } from "../helpers/settings"

export const About = ({ me, stats, educations }) => {
  return (
    <section id="about">
        <p className="section_text_p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
            <div className="section_pic-container">
                <img 
                    src={me?.photoUrl} 
                    alt={`${me?.firstName} ${me?.lastName} Profile`} 
                    className="about-pic" 
                />
            </div>
            <div className="about-details-container">
                <div className="about-containers">
                    <div className="details-container">
                        <FaAward className="icon" size={30}/>
                        <h3>Experience</h3>
                        <p>{Math.floor(stats?.ExperienceInYears)}+ years <br />Software Engineering</p>
                    </div>
                    <div className="details-container">
                        <FaGraduationCap className="icon" size={30}/>
                        <h3>Education</h3>
                        {
                            educations && educations.map(edu => (
                                <p key={edu?._id}>{edu?.qualificationObtained}</p>
                            ))
                        }
                    </div>
                </div>
                <div className="text-container">
                    <p>{me?.biography}</p>
                </div>
            </div>
        </div>
        <FaArrowDown className="icon arrow" size={50} onClick={goToExperience}/>
    </section>
  )
}
