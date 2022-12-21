import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../assets/css/style.css";


const StartBusinessCardFeature = ({ cardIcon, cardTitle, cardDescription }) => {

    return (

        <Col className="col-lg-3 col-12">
            <Card className="sb-card-feature">
                <Card.Body>
                    <div className="card-icon">
                        <i className={cardIcon}></i>
                    </div>
                    <Card.Title className="card-title">{cardTitle}</Card.Title>
                    <Card.Text className="card-description">{cardDescription}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );

};

export default StartBusinessCardFeature;