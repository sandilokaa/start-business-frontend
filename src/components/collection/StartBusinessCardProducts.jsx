import React from "react";
import { Card, Col } from "react-bootstrap";
import "../../assets/css/style.css";


const StartBusinessCardProducts = ({ key, cardTitle, cardImage, cardPrice, handleClick }) => {

    return (

        <Col className="col-6 col-lg-3 mt-3">
            <Card className="sb-products" onClick={handleClick} key={key}>
                <Card.Img className="sb-products-image" src={cardImage} />
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