import React, { useState, useEffect } from "react";
import {
    Row,
    Col,
    Container,
    Image
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import CurrencyFormatter from "../../assets/js/currencyFormatter";
import { useLocation } from "react-router-dom";
import axios from "axios";
import SelectColor from "../../assets/images/select-color.png";
import TableSizeChart from "../../assets/images/table-size-chart.png";
import TableSizeChartResponsive from "../../assets/images/table-size-chart-resp.png";
import ReactImageMagnify from 'react-image-magnify';

const ProductDetail = () => {

    const [productData, setProductData] = useState();
    
    const [materialsDescription, setMaterialsDescription] = useState([]);

    const params = useLocation();

    const productId = (params.pathname).split('/')[3];

    const onSearch = async () => {

        try {

            const getProductsDataRequest = await axios.get(
                `http://localhost:2000/api/v1/products/${productId}`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*"
                    }
                }
            );

            const getProductstDataResponse = getProductsDataRequest.data;

            setMaterialsDescription([...getProductstDataResponse.data.handleGetProductById.description.split(".")])

            setProductData(getProductstDataResponse.data.handleGetProductById);

        } catch (err) {
            alert(err.message);
        }

    };

    useEffect(() => {

        onSearch();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productId]);

    // console.log(materialsDescription)

    return (

        <HomeLayout>

            {/* ------------------- SB Content Product Detail -------------------  */}

            <div id="sb-product-detail">
                <Container>
                    <Row  key={productId}>
                        <Col className="col-9 col-lg-5 sb-image-detail">
                            <div className="sb-product-image">
                                {/* <Image className="product-image" src={productData ? productData.picture : null} alt="startbusiness-select-color" /> */}

                                <ReactImageMagnify
                                    enlargedImagePosition="over"
                                    enlargedImageContainerClassName="product-preview"
                                    fadeDurationInMs={100}
                                    {...{
                                        smallImage: {
                                            alt: 'Start Business Product',
                                            isFluidWidth: true,
                                            src: productData ? productData.picture : null
                                        },
                                        largeImage: {
                                            src: productData ? productData.picture : null,
                                            width: 1400,
                                            height: 1400
                                        }
                                    }} 
                                />
                            </div>
                        </Col>
                        <Col className="col-3 col-lg-2 sb-image-preview">
                            <div className="sb-product-image-preview">
                                <a href={productData ? productData.picture : null}>
                                    <Image className="product-image-preview" src={productData ? productData.picture : null} alt="startbusiness-select-color" />
                                </a>
                            </div>
                        </Col>
                        <Col className="col-12 col-lg-5 sb-description-detail">
                            <div className="sb-product-name">
                                <h1>
                                    {productData ? productData.name : null}
                                </h1>
                            </div>
                            <div className="sb-product-price">
                                <p>
                                    {productData ? CurrencyFormatter(productData.price) : null}
                                </p>
                            </div>
                            <div className="sb-product-materials">
                                <p>Description</p>
                                {
                                    materialsDescription.map((materialsItem, index) => {
                                        return (
                                            <ul key={index}>
                                                <li>
                                                    {materialsItem}
                                                </li>
                                            </ul>
                                        )
                                    })
                                }
                            </div>
                            <div className="sb-product-color">
                                <p>Select Color</p>
                                <Image className="select-color" src={SelectColor} alt="startbusiness-select-color" />
                            </div>
                            <div className="sb-product-attention">
                                <p>Attention</p>
                                <ul>
                                    <li>
                                        {productData ? productData.attention : null}
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12 col-lg-12 sb-size-chart">
                            <div className="table-size-chart">
                                <p>Additional Information</p>
                                <Image className="size-chart" src={TableSizeChart} alt="startbusiness-size-chart" />
                                <Image className="size-chart-responsive" src={TableSizeChartResponsive} alt="startbusiness-size-chart" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content Product Detail -------------------  */}

        </HomeLayout>

    );

};

export default ProductDetail;