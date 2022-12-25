import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../assets/css/style.css";


const StartBusinessCardCategories = ({ cardTitle, handleClick }) => {

    return (

        <Col className="col-6 col-lg-2 mt-3">
            <Card className="sb-categories-type" onClick={handleClick}>
                <Card.Body className="sb-categories-body">
                    <Card.Title className="sb-categories-title">{cardTitle}</Card.Title>
                </Card.Body>
            </Card>
        </Col>

    );

};

export default StartBusinessCardCategories;