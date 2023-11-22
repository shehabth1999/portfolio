import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import './ContactStyle.css';

function ContactSection(){
    return <div id="footer" className="row">
        <div className="col-4">
            <div><h3>  GET IN TOUCH</h3></div>
            <div><h6> <FontAwesomeIcon icon={faEnvelope} />   kr@hotmail.com</h6></div>
            <div><h6> <FontAwesomeIcon icon={faPhone} />   717-562-624</h6></div>
        </div>
        <div className="col-4">
            <h5 style={{color:"black",fontSize:"32px"}}>
                CONTACT ME
            </h5>
        </div>
        <div id="icons" className="col-4  px-1 py-1">
            <FontAwesomeIcon icon={faFacebook} className="fa-2x px-2"/>
            <FontAwesomeIcon icon={faTwitter} className="fa-2x px-2" />
            <FontAwesomeIcon icon={faLinkedin} className="fa-2x px-2"/>
            <h6>Copyright @ 2019 KR</h6>
        </div>
    </div>
}

export default ContactSection;