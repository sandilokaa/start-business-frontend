import React from "react";
import { Col } from "react-bootstrap";
import "../../assets/css/style.css";


const StartBusinessCardAbout = ({ cardImage, cardTitle, cardDescription, overlayClass, overlayContent }) => {

    return (

        <Col className="col-12 col-lg-6 mt-3 sb-about-detail">
            <div>
                <img src={cardImage} alt={cardTitle} />
                <div className={overlayClass}>
                    <div className={overlayContent}>
                        <h4>{cardTitle}</h4>
                        <p>{cardDescription}</p>
                    </div>
                </div>
            </div>
        </Col>

    );

};

export default StartBusinessCardAbout;