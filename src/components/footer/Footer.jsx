import React from "react";
import {
    Row,
    Col,
    Container
} from "react-bootstrap";
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";


const FooterGeneral = () => {

    return (

        <div id="sb-content-7">
            <Container>
                <Row className="sb-row-conclusion">
                    <Col className="col-12 col-lg-4 sb-about-us">
                        <h1>Start Business</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </Col>
                    <Col className="col-12 col-lg-4 sb-navigation">
                        <h4>Navigasi</h4>
                        <div className="sb-link">
                            <a href="#Example">Home</a>
                            <a href="#Example">Collection</a>
                            <a href="#Example">About Us</a>
                            <a href="#Example">Contact Us</a>
                            <a href="#Example">Class</a>
                        </div>
                    </Col>
                    <Col className="col-12 col-lg-4 sb-contact-us">
                        <h4>Contact Us</h4>
                        <div className="icon-contact">
                            <div className="sb-location">
                                <i class="bi bi-geo-fill"></i>
                                <p>Semarang, Indonesia</p>
                            </div>
                            <div className="sb-whatsapp">
                                <i class="bi bi-whatsapp"></i>
                                <p>085975979880</p>
                            </div>
                            <div className="sb-email">
                                <i class="bi bi-envelope-at-fill"></i>
                                <p>startbusinessind@gmail.com</p>
                            </div>
                        </div>
                    </Col>
                    <hr />
                </Row>
                <Row className="sb-row-ownership">
                    <Col className="col-12 col-lg-6 sb-copyright">
                        <h6>© 2022 Start Business. All rights reserved!.</h6>
                    </Col>
                    <Col className="col-12 col-lg-6 sb-media-social">
                        <div className="icon">
                            <i class="bi bi-instagram"></i>
                            <i class="bi bi-tiktok"></i>
                            <i class="bi bi-youtube"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    );

};

export default FooterGeneral;