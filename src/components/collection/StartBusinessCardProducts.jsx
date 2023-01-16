import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Col } from "react-bootstrap";
import "../../assets/css/style.css";


const StartBusinessCardProducts = ({ productId, cardTitle, cardImage, cardPrice }) => {

    const navigate = useNavigate();

    return (

        <Col className="col-6 col-lg-3 mt-4">
            <Card className="sb-products" onClick={() => navigate(`/collection/detail/${productId}`)}>
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