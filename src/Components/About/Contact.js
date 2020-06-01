import React from 'react';
import Nav from "../Nav"
import logo from "../../Photos/logo.png"
import ContactBody from './ContactBody';
import "./about.css"
import { Link } from 'react-router-dom';




const Contact = () => {

    return (
        <div className="contact-main-div">
            <Nav logo={logo} />
            <ContactBody />
            <div className="footer-socialMedia">
                <ul className="footer-info">
                    <li><Link className="about-button" to="/about">About Us</Link></li>
                    <li><Link className="contact-button" to="/contact">Contact</Link></li>
                    <li><Link className="galery-button" to="https://www.facebook.com/pg/brainster.co/photos/">Gallery</Link></li>
                </ul>
                <div className="logo-contact">
                    <img src={logo} alt="" />
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

export default Contact;