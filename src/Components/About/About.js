import React from 'react';
import HederAbout from './HederAbout';
import Nav from "../Nav"
import "./about.css"
import Footer from "../Footer"
import logo1 from "../../Photos/logo1.png"

const About = () => {

    return (
        <div className="about-main-div">
            <Nav logo={logo1}/>
            <HederAbout/>
            <Footer logo={logo1}/>
        </div>
    )
}

export default About;