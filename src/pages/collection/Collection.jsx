import React, { useEffect, useState, useRef } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    InputGroup
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import StartBusinessCardCategories from "../../components/collection/StartBusinessCardCategories";
import StartBusinessCardProducts from "../../components/collection/StartBusinessCardProducts";
import axios from "axios";

const Collection = () => {

    const [productsData, setProductsData] = useState();

    // const nameField = useRef();

    const onSearch = async () => {

        // const getProductData = nameField.current.value;

        try {

            const getProductsDataRequest = await axios.get(
                `https://63a944b7f4962215b590a7ea.mockapi.io/api/v1/products/search`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

            const getProductstDataResponse = getProductsDataRequest.data;

            setProductsData(getProductstDataResponse);

        } catch (err) {
            // alert(err.message);
        }

    };

    useEffect(() => {
        onSearch();
    });

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
                                    // ref={nameField}
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
                        {productsData != null ?
                            productsData.map((item) => {
                                return (
                                    <StartBusinessCardProducts
                                        key={item.id}
                                        cardImage={item.picture}
                                        cardTitle={item.name}
                                        cardPrice={item.price}
                                    />
                                );
                            }) : null
                        }
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content Related Products -------------------  */}

        </HomeLayout>

    );

};


export default Collection;
