import React from 'react';
import Menu from './Menu'
import "./nav.css";
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <div className="my-navbar">
            
            <Menu />
            <Link to="/" className="logo">
                <img src={props.logo} alt=""/>
            </Link>
            <div className='nav-links'>
                <a href="https://www.brainster.io/business." className="obuka-button">Обука за компании</a>
                <a href="https://www.brainster.io/business." className="vraboti-button">Вработи наши студент</a>
            </div>

        </div>
    )
}

export default Nav;