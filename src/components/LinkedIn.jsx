import React from 'react'
import { Row } from 'react-bootstrap'
import { FaLinkedin } from 'react-icons/fa'

const LinkedIn = () => {
  return (
    <Row id='linkedin p-0 m-0'>
        <div className="badge-base LI-profile-badge m-0 pl-3" data-locale="en_US" data-size="medium" data-theme="light" data-type="VERTICAL" data-vanity="toba-ojo-13439490" data-version="v1">
            <a 
                className="badge-base__link LI-simple-link" 
                href="https://ng.linkedin.com/in/toba-ojo-13439490?trk=profile-badge"
            >
                <FaLinkedin/>
            </a>
        </div>
    </Row>
  )
}

export default LinkedIn