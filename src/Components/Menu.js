import React, { useState } from 'react';
import './nav.css';
import logo from '../Photos/logo.png';
import { useContext } from 'react';
import { Context } from '../Context/userContext';
import { Modal } from "react-bootstrap"
import { Link } from 'react-router-dom';



const Menu = () => {
    const {
        showMenu,
        setShowMenu,
        openCloseMenu,
        setRegistration
    } = useContext(Context)

    const openRegister = () => {
        setRegistration(true)
        setShowMenu(false)

    }

    const [najava, setNajava] = useState(false)
    const handleClose = () => {
        setNajava(false)
        setShowMenu(false)
    }
    const handleOpen = () => {
        setNajava(true)
        
    }
   
    return (
        <div>
            <div className='menu-div' onClick={openCloseMenu}>
                <div className="menu-icon">
                    <div className="crta"></div>
                    <div className="crta"></div>
                    <div className="crta"></div>
                </div>
                <span>Мени</span>

            </div>

            {showMenu ?
                <div className="bg-zatemnet">

                    <Modal show={najava}  animation={false}>
                        <Modal.Body >
                            <div className="najava-div">
                                <label htmlFor="">User Name</label>
                                <input type="text" placeholder="Enter your Username"/>

                                <label htmlFor="">Password</label>
                                <input type="password" placeholder="Enter your password"/>

                                <button className="popup-btn" onClick={handleClose}>Save Changes</button>
                            </div>
                        </Modal.Body>

                        

                    </Modal>
                    <div className="myMenu">
                        <div className="open-menu-heder">
                            <div className="logo-menu-heder">
                                <img src={logo} alt="" />
                            </div>
                            <span className="closeMenu" onClick={openCloseMenu}>X Затвори</span>
                        </div>

                        <ul>
                            <li className="najavise" onClick={openRegister} style={{ color: "#fcd232" }}>Регистрирај се</li>
                            <li className="najavise" onClick={handleOpen} style={{ color: "#fcd232" }}>Најависе</li>
                            <li><Link to="/about" onClick={handleClose}> За Нас</Link></li>
                            <li><a href="https://brainster.co/about">Галерија</a></li>
                            <li><Link to="/contact" onClick={handleClose}>Контакт</Link></li>

                        </ul>


                    </div>
                </div>


                :
                null
            }
        </div>

    )
}

export default Menu;