import React from 'react';
import { Row, Col } from "react-bootstrap"
import about1 from "../../Photos/about1.png"
import about2 from "../../Photos/about2.png"
import about3 from "../../Photos/about3.png"
import about4 from "../../Photos/about4.png"

const HederAbout = () => {

    return (
        <div className="heder-about">

            <h1>Future-proof your organization</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis harum, hic rem quam neque adipisci. Exercitationem, dicta laboriosam consectetur voluptatem aliquid est, ex magni ipsa repudiandae facilis deserunt laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat inventore, molestias perferendis nulla possimus asperiores repudiandae autem beatae dolorum ex iure saepe expedita totam. Esse excepturi ratione sapiente impedit. Nulla? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tempore, recusandae, voluptatem quod alias mollitia dolorem sequi dolore inventore, odit neque enim placeat dolor laboriosam accusantium repellendus eaque est adipisci!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et officiis harum, hic rem quam neque adipisci. Exercitationem, dicta laboriosam consectetur voluptatem aliquid est, ex magni ipsa repudiandae facilis deserunt laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat inventore, molestias perferendis nulla possimus asperiores repudiandae autem beatae dolorum ex iure saepe expedita totam. Esse excepturi ratione sapiente impedit. Nulla? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio tempore, recusandae, voluptatem quod alias mollitia dolorem sequi dolore inventore, odit neque enim placeat dolor laboriosam accusantium repellendus eaque est adipisci!</p>

            <Row className="about-div-imageMain">
                <Col md={3} sm={6}>
                    <div className="about-div-image">
                        <img src={about1} alt="" />
                    </div>
                </Col>
                <Col md={3} sm={6}>
                    <div className="about-div-image">
                        <img src={about2} alt="" />

                    </div>
                </Col>
                <Col md={3} sm={6}>
                    <div className="about-div-image">
                        <img src={about3} alt="" />

                    </div>
                </Col>
                <Col md={3} sm={6}>
                    <div className="about-div-image">
                        <img src={about4} alt="" />

                    </div>
                </Col>




            </Row>


        </div>
    )
}

export default HederAbout;