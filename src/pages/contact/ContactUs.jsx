import React from "react";
import {
    Row,
    Col,
    Container,
    Form,
    InputGroup,
    Button
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";


const ContactUs = () => {

    return (

        <HomeLayout>

            {/* ------------------- SB Get In Touch -------------------  */}

            <div id="get-in-touch">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-12">
                            <h3>GET IN TOUCH</h3>
                            <hr />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Get In Touch -------------------  */}


            {/* ------------------- SB Contact & Address -------------------  */}

            <div id="contact-address">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-6">
                            <div className="icon-contact-address">
                                <h6>Contact Us</h6>
                                <div className="contact-geo">
                                    <i className="bi bi-geo-fill"></i>
                                    <p>Semarang, Indonesia</p>
                                </div>
                                <div className="contact-email">
                                    <i className="bi bi-envelope-at-fill"></i>
                                    <p>startbusinessind@gmail.com</p>
                                </div>
                                <div className="contact-whatsapp">
                                    <i className="bi bi-whatsapp"></i>
                                    <p>+(62)81234567891</p>
                                </div>
                            </div>
                            <div className="icon-media-social">
                                <h6>Follow Us</h6>
                                <i className="bi bi-instagram"></i>
                                <i className="bi bi-tiktok"></i>
                                <i className="bi bi-youtube"></i>
                            </div>
                            <div className="geo-map">
                                <h6>Ini nanti isinya map</h6>
                            </div>
                        </Col>
                        <Col className="col-12 col-lg-6">
                            <div className="message-me">
                                <h6>Leave us a message</h6>
                                <div className="message-name">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            className="input-name"
                                            placeholder="Name"
                                        />
                                    </InputGroup>
                                </div>
                                <div className="message-email">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            className="input-email"
                                            placeholder="Email"
                                        />
                                    </InputGroup>
                                </div>
                                <div className="message-criticism">
                                    <textarea class="form-control input-criticism" rows="10" placeholder="Write your message here"></textarea>
                                </div>
                                <div className="message-button-send">
                                    <Button className="button-send">Send</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Contact & Address -------------------  */}

        </HomeLayout>

    );

};

export default ContactUs;