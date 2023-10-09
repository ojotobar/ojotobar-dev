import { FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { toEmailLink } from '../helpers/settings';

const Contact = ({ info, socials }) => {
    const linkedin = socials?.filter(s => s?.name.toLowerCase().includes("linkedin"))[0];
    return (
    <section id="contact">
        <p className="section_text_p1 mt-5">Get In Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
            <div className="contact-info-container">
                <FaEnvelope size={30} className='icon contact-icon' />
                <p><a href={toEmailLink(info?.email)}>{info?.email}</a></p>
            </div>
            <div className="contact-info-container">
                <FaLinkedin size={30} className='icon contact-icon' />
                <p><a href={linkedin?.url}>{linkedin?.name}</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact