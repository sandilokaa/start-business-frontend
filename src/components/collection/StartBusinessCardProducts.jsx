import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../assets/css/style.css";


const StartBusinessCardProducts = ({ cardTitle, cardImage, cardPrice, handleClick }) => {

    return (

        <Col className="col-6 col-lg-3 mt-4">
            <Card className="sb-products" onClick={handleClick}>
                <Card.Img className="sb-products-image" src={cardImage} loading="lazy"/>
                <Card.Body>
                    <Card.Title className="sb-products-title">{cardTitle}</Card.Title>
                    <Card.Text className="sb-products-price">
                        {cardPrice}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    );

};

export default StartBusinessCardProducts;