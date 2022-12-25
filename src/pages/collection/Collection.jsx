import React from "react";
import {
    Row,
    Col,
    Container,
    Form,
    InputGroup
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import StartBusinessCardCategories from "../../components/collection/StartBusinessCardCategories";

const Collection = () => {

    return (

        <HomeLayout>

            {/* ------------------- SB Content Search -------------------  */}

            <div id="sb-search-bar">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-12 sb-search-col">
                            <InputGroup className="mb-3 sb-search-group">
                                <Form.Control
                                    className="sb-search-control"
                                    placeholder="Cari produk disini..."
                                    aria-label="Cari produk disini..."
                                    aria-describedby="basic-addon2"
                                />
                            </InputGroup>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content Search -------------------  */}


            {/* ------------------- SB Content Categories -------------------  */}

            <div id="sb-categories">
                <Container>

                    <h1>SORT BY CATEGORIES</h1>
                    <hr />
                    <Row>
                        <StartBusinessCardCategories
                            dotIcon="sb-icon-1"
                            cardTitle="Semua"
                        />
                        <StartBusinessCardCategories
                            cardTitle="Kaos"
                        />
                        <StartBusinessCardCategories
                            cardTitle="Hoodie"
                        />
                        <StartBusinessCardCategories
                            cardTitle="Crewneck"
                        />
                        <StartBusinessCardCategories
                            cardTitle="Polo"
                        />
                        <StartBusinessCardCategories
                            cardTitle="Aksesoris"
                        />
                    </Row>
                </Container>
            </div>
            
            {/* ------------------- End SB Content Categories -------------------  */}


            {/* ------------------- SB Content Related Products -------------------  */}

            <div id="sb-related-products">
                <Container>

                    <h1>RELATED PRODUCTS</h1>
                    <hr />
                    
                    <Row>
                        <Col>
                        
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content Related Products -------------------  */}

        </HomeLayout>

    );

};


export default Collection;
