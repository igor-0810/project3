import React from 'react';
import { Link } from 'react-router-dom';




const Footer = (props) => {

    return (
        <div className="footer-mainDIv">
            <h1>Future-proof your organization</h1>
            <h5>Find out how to unlock progressin your business. Understand your current state, <br /> identify
           opportunity areas and prepare to take charge of your organization's future.</h5>

            <a href="https://brainsterquiz.typeform.com/to/kC2I9E">Take the assessment</a>
            <div className="footer-socialMedia">
                <ul className="footer-info">
                    <li><Link className="about-button" to="/about">About Us</Link></li>
                    <li><Link className="contact-button" to="/contact">Contact</Link></li>
                    <li><Link className="galery-button" to="https://www.facebook.com/pg/brainster.co/photos/">Gallery</Link></li>
                </ul>
                <div className="logo">
                    <img src={props.logo} alt="" />
                </div>
                <ul className="social-media">
                    <li><i className="fab fa-linkedin-in"></i></li>
                    <li><i className="fab fa-twitter"></i></li>
                    <li><i className="fab fa-facebook-f"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;