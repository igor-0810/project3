import React from 'react';
import { Row, Col } from 'react-bootstrap';
import "./about.css"
import contactPic from "../../Photos/contactPic.png";
import contactPic1 from "../../Photos/contactPic1.png"

const ContactBody = () => {

    return (
        <div className="contact-body-main">
            <Row>
                <Col md={6}  sm={6}>
                    <div className="contact-div-img">
                        <img src={contactPic} alt="" />
                    </div>
                    <div className="contact-img-mobile">
                        <img src={contactPic1} alt=""/>
                    </div>
                </Col>
                <Col md={6} sm={6}>
                    <div className="contact-div-info">
                        <div>
                            <h4><i className="fas fa-map-marker-alt"></i>Adress</h4>
                            <p>Andon Surkov  br.25/1, 1400 Veles, R.Macedonia</p>


                        </div>
                        <div>
                            <h4><i className="far fa-envelope"></i>Email</h4>
                            <p>igorveles2004@yahoo.com</p>

                        </div>
                        <div>
                            <h4><i className="fas fa-phone"></i>Phone</h4>
                            <p>078472490</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default ContactBody;