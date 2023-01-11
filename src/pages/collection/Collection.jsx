import React, { useEffect, useState, useRef } from "react";
import {
    Row,
    Col,
    Container,
    Form,
    InputGroup
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import FooterGeneral from "../../components/footer/Footer";
import StartBusinessCardCategories from "../../components/collection/StartBusinessCardCategories";
import StartBusinessCardProducts from "../../components/collection/StartBusinessCardProducts";
import axios from "axios";
import CurrencyFormatter from "../../assets/js/currencyFormatter";

const Collection = () => {

    const [productsData, setProductsData] = useState([]);
    const [category, setCategory] = useState([""]);

    const nameField = useRef();


    useEffect(() => {

        const onSearch = async () => {

            const getProductData = nameField.current.value;

            // try {

                const getProductsDataRequest = await axios.get(
                    `https://startbusiness.up.railway.app/api/v1/products?name=${getProductData}&category=${category}`,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*"
                        }
                    }
                );

                const getProductstDataResponse = getProductsDataRequest.data;

                setProductsData(getProductstDataResponse.data.handleGetAllProducts);

            // } catch (err) {
            //     alert(err.message);
            // }

        };

        onSearch();

    });



    const onReset = () => {

        setCategory("");

        nameField.current.value = "";

        window.location.reload("/collection");

    };


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
                                    ref={nameField}
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
                            cardTitle="Semua"
                            handleClick={onReset}
                        />
                        <StartBusinessCardCategories
                            cardTitle="Kaos"
                            handleClick={() => setCategory("Kaos")}
                        />
                        <StartBusinessCardCategories
                            cardTitle="Hoodie"
                            handleClick={() => setCategory("Hoodie")}
                        />
                        <StartBusinessCardCategories
                            cardTitle="Crewneck"
                            handleClick={() => setCategory("Crewneck")}
                        />
                        <StartBusinessCardCategories
                            cardTitle="Polo"
                            handleClick={() => setCategory("Polo")}
                        />
                        <StartBusinessCardCategories
                            cardTitle="Aksesoris"
                            handleClick={() => setCategory("Aksesoris")}
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
                        {
                            productsData.map((item) => {
                                return (
                                    <StartBusinessCardProducts
                                        key={item._id}
                                        cardImage={item.picture}
                                        cardTitle={item.name}
                                        cardPrice={CurrencyFormatter(item.price)}
                                    />
                                );
                            })
                        }
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content Related Products -------------------  */}


            {/* ------------------- SB Footer -------------------  */}

            <FooterGeneral />

            {/* ------------------- End SB Footer -------------------  */}

        </HomeLayout>

    );

};


export default Collection;
