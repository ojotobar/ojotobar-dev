import { Col, Image, Row } from "react-bootstrap";
import { goToContact, openCV } from "../helpers/settings";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Profile = ({me, socials}) => {
    const linkedin = socials?.filter(s => s?.name.toLowerCase().includes("linkedin"))[0]?.url;
    const github = socials?.filter(s => s?.name.toLowerCase().includes("github"))[0]?.url;

    const goToLinkedIn = () => {
        window.location.href=`${linkedin}`
    };

    const goToGitHub = () => {
        window.location.href=`${github}`
    };

  return (
    <>
    <section id="profile">
        <Row className="w-100 m-auto my-5">
            <Col sm={12} md={6} className="d-flex mt-0 mb-3">
                <Image
                    src={me?.photoUrl} 
                    alt={`${me?.firstName} ${me?.lastName} Profile`} 
                    style={{borderRadius: '50%'}}
                    fluid
                    width={400}
                    height={400}
                    className="m-auto"
                />
            </Col>
            <Col sm={12} md={6} className="section_text mb-3">
                <p className="section_text_p1">Hello, I'm</p>
                <h1 className="title">{me?.firstName} {me?.lastName}</h1>
                <p className="section_text_p2">Software Engineer</p>
                <div className="btn-container">
                    <button className="btn btn-color-2" onClick={openCV}>Download CV</button>
                    <button className="btn btn-color-1" onClick={goToContact}>Contact Info</button>
                </div>
                <div id="socials-container">
                    <FaLinkedin className="icon" size={30} onClick={goToLinkedIn}/>
                    <FaGithub className="icon" size={30} onClick={goToGitHub}/>
                </div>
            </Col>
        </Row>
    </section>
    </>
  )
}

export default Profile