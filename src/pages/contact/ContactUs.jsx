import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    Row,
    Col,
    Container,
    Form,
    InputGroup,
    Button,
    Alert
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import MapWrapped from "../../components/contact-us/MapWrapped";
import axios from "axios";


const ContactUs = () => {

    const navigate = useNavigate();

    const usernameField = useRef();
    const emailField = useRef();
    const suggestionField = useRef();

    const [trueResponse, setTrueResponse] = useState({
        isTrue: false,
        message: ""
    });

    const onSuggestion = async () => {

        try {

            const suggestionPayload = {
                username: usernameField.current.value,
                email: emailField.current.value,
                suggestion: suggestionField.current.value
            };

            const suggestionRequest = await axios.post(
                `http://localhost:2000/api/v1/suggestions`,
                suggestionPayload,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

            const suggestionResponse = suggestionRequest.data;

            setTrueResponse({
                isTrue: true,
                message: suggestionResponse.message
            });

            if (suggestionResponse.status) navigate("/contact-us");

        } catch (err) {
            alert(err.message);
        }

    };
    

    return (

        <HomeLayout>
            
            {
                trueResponse.isTrue && (
                    <Container>
                        <Row>
                            <Col className="col-12 col-lg-12">
                                <Alert variant="success" className="alert-true" onClose={() => setTrueResponse(false)} dismissible>{trueResponse.message}</Alert>
                            </Col>
                        </Row>
                    </Container>
                )
            }
            

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
                                <MapWrapped
                                    centerCoordinates={[-7.065296333352669, 110.44648526868401]}
                                    coordinatesPosition={[-7.065296333352669, 110.44648526868401]}
                                />
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
                                            ref={usernameField}

                                        />
                                    </InputGroup>
                                </div>
                                <div className="message-email">
                                    <InputGroup className="mb-3">
                                        <Form.Control
                                            className="input-email"
                                            placeholder="Email"
                                            ref={emailField}
                                        />
                                    </InputGroup>
                                </div>
                                <div className="message-criticism">
                                    <textarea class="form-control input-criticism" rows="10" placeholder="Write your message here" ref={suggestionField}></textarea>
                                </div>
                                <div className="message-button-send">
                                    <Button className="button-send" onClick={(e) => onSuggestion()}>Send</Button>
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