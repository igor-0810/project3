import React from 'react';
import Nav  from './Nav';
import Header from './Header';
import Filtering from './Filtering';
import CardContainer from './CardContainer';
import Footer from './Footer';
import Register from './Registracija';
import FiltersMobile from './filtersMobile';
import logo from "../Photos/logo.png"

const LandingPage = () => {

    return (
        <div className="lp-mainDiv">
            <Nav  logo={logo}/>
            <Header/>
            <Register/>
            <Filtering/>
            <FiltersMobile/>
            <CardContainer/>
            <Footer logo={logo}/>
        </div>
    )
}

export default LandingPage;