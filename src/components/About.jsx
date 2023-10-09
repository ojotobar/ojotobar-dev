import { FaArrowDown, FaAward, FaGraduationCap } from "react-icons/fa"
import { goToExperience } from "../helpers/settings"
import { Col, Image, Row } from "react-bootstrap"

export const About = ({ me, stats, educations }) => {
  return (
    <section id="about">
        <Row className="w-100 m-auto mb-3">
            <p className="section_text_p1">Get To Know More</p>
            <h1 className="title">About Me</h1>
        </Row>
        <Row className="w-100 m-auto my-5">
            <Col md={12} lg={6} className="d-flex mb-3">
                <Image
                    src={me?.photoUrl} 
                    alt={`${me?.firstName} ${me?.lastName} Profile`} 
                    fluid
                    width={400}
                    height={400}
                    className="m-auto about-pic"
                />
            </Col>
            <Col md={12} lg={6} className="about-details-container mb-3">
                <div className="about-containers m-auto mb-2">
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
                <div className="text-container m-auto">
                    <p>{me?.biography}</p>
                </div>
            </Col>
        </Row>
        <FaArrowDown className="icon arrow" size={50} onClick={goToExperience}/>
    </section>
  )
}
