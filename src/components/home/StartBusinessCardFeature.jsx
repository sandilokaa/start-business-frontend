import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../assets/css/style.css";


const StartBusinessCardFeature = ({ cardName, cardIcon, cardTitle, cardDescription }) => {

    return (

        <Col className="col-lg-3 col-12">
            <Card className="sb-card-feature">
                <Card.Body>
                    <div className="card-icon">
                        <img className={cardName} src={cardIcon} alt={cardTitle}></img>
                    </div>
                    <Card.Title className="card-title">{cardTitle}</Card.Title>
                    <Card.Text className="card-description">{cardDescription}</Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );

};

export default StartBusinessCardFeature;