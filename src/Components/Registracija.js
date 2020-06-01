import React, { useContext } from 'react';
import { Context } from '../Context/userContext';
import { Modal, Row, Col } from "react-bootstrap";

const Register = () => {

    const { isRegistred, setRegistration, setShowMenu } = useContext(Context)
    const handleClose = () => {

        setRegistration(false);
        setShowMenu(false)
    }
    return (

        <div className="registration" >
            <Modal show={isRegistred}  animation={false}>
                <Modal.Body >
                    <form action="">
                        <Row>
                            <Col md={6}>
                                <div className="form-names">
                                    <label htmlFor="">Name</label>
                                    <input type="text" placeholder="Enter name" />

                                    <label htmlFor="">Last Name</label>
                                    <input type="text" placeholder="Enter last name" />

                                    <label htmlFor="">Email</label>
                                    <input type="text" placeholder="Enter your email" />

                                    <label htmlFor="">Phone</label>
                                    <input type="text" placeholder="Enter your phone" />

                                    <label htmlFor="">Name of Company</label>
                                    <input type="text" placeholder="Enter Company" />

                                    <label htmlFor="">User Name</label>
                                    <input type="text" placeholder="Enter your username" />

                                    <label htmlFor="">Password</label>
                                    <input type="pasword" placeholder="Enter Company" />

                                    <label htmlFor="">Message</label>
                                    <textarea name="" id="" cols="30" rows="5" placeholder="Enter your message"></textarea>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div id="group1" className="group-1">
                                    <p>Number of Employers</p>
                                    <div className="group-divs">
                                        <label htmlFor="">1</label>
                                        <input type="radio" placeholder="Enter name" name="group1" /><br />
                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">2-10</label>
                                        <input type="radio" placeholder="Enter name" name="group1" /><br />
                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">11-50</label>
                                        <input type="radio" placeholder="Enter name" name="group1" /><br />
                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">51-200</label>
                                        <input type="radio" placeholder="Enter name" name="group1" /><br />
                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">200+</label>
                                        <input type="radio" placeholder="Enter name" name="group1" /><br />
                                    </div>
                                </div>

                                <div id="group2" className="group-2">
                                    <p>Department</p>
                                    <div className="group-divs">
                                        <label htmlFor="">Human Recource</label>
                                        <input type="radio" placeholder="Enter name" name="group2" /><br />
                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">Marketing</label>
                                        <input type="radio" placeholder="Enter name" name="group2" /><br />
                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">Production</label>
                                        <input type="radio" placeholder="Enter name" name="group2" /><br />

                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">Sale</label>
                                        <input type="radio" placeholder="Enter name" name="group2" /><br />
                                    </div>

                                    <div className="group-divs">
                                        <label htmlFor="">CEO</label>
                                        <input type="radio" placeholder="Enter name" name="group2" /><br />
                                    </div>
                                    <div className="group-divs">
                                        <label htmlFor="">else</label>
                                        <input type="radio" placeholder="Enter name" name="group2" /><br />
                                    </div>
                                </div>
                            </Col>


                        </Row>
                    </form>
                </Modal.Body>

                <button className="popup-btn" onClick={handleClose} style={{ margin: "50px auto 25px auto", border: "none" }}>Save Changes</button>

            </Modal>
        </div>
    )
}

export default Register;