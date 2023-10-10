import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { internationalizePhone, toEmailLink, toPhoneLink } from '../helpers/settings';

const Contact = ({ info }) => {
    const phoneNUmber = internationalizePhone(info?.phone);
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
                <FaPhoneAlt size={30} className='icon contact-icon' />
                <p><a href={toPhoneLink(phoneNUmber)}>{phoneNUmber}</a></p>
            </div>
        </div>
    </section>
  )
}

export default Contact