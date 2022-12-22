import React from "react";
import {
    Row,
    Col,
    Container,
    Image,
    Button
} from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';
import { Link } from "react-router-dom";
import HomeLayout from "../../layouts/home/HomeLayout";
import StartBusinessCardFeature from "../../components/home/StartBusinessCardFeature";
import FAQAccordion from "../../components/home/FAQAccordion";
import ImageContent1 from "../../assets/images/image-content-1.png";
import ImageContent3 from "../../assets/images/image-content-3.png";
import ImageCrewneck from "../../assets/images/image-swiper-1.png";
import ImageHoodie from "../../assets/images/image-swiper-2.png";
import ImageKaosPolos from "../../assets/images/image-swiper-3.png";
import ImagePolo from "../../assets/images/image-swiper-4.png";
import ImageTopi from "../../assets/images/image-swiper-5.png";
import ImageToteBag from "../../assets/images/image-swiper-6.png";
import ImageJaket from "../../assets/images/image-swiper-7.png";
import DotVector from "../../assets/icons/dot-vector.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import "../../assets/css/style.css";
import "../../assets/css/swiper.css";


const Home = () => {

    return (

        <HomeLayout>

            {/* ------------------- SB Content 1 -------------------  */}

            <div id="sb-content-1">
                <Container>
                    <Row className="sb-content-1-row">
                        <Col className="col-12 col-lg-6 sb-heading-content-1">
                            <h1>
                                Cara Baru Untuk <br /> Belajar Bisnis <br />
                                <span className="dropship-style"> Dropship </span>
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum.
                            </p>
                            <Link to="/login">
                                <Button className="btn btn-start">Mulai</Button>
                            </Link>
                        </Col>
                        <Col className="col-12 col-lg-6 sb-image-content-1">
                            <Image className="image-content-1" src={ImageContent1} alt="startbusiness-image-content-1" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content 1 -------------------  */}


            {/* ------------------- SB Content 2 -------------------  */}

            <div id="sb-content-2">
                <Image src={DotVector} className="sb-dot-vector-1" />
                <Container>
                    <Row>
                        <Col className="col-lg-12 sb-heading-content-2">
                            <h5>Layanan Kami</h5>
                            <h1>Fitur Yang Disediakan</h1>
                        </Col>
                    </Row>
                    <Row>
                        <StartBusinessCardFeature
                            cardIcon="bi bi-globe-asia-australia"
                            cardTitle="Jangkauan Luas"
                            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <StartBusinessCardFeature
                            cardIcon="bi bi-send-check-fill"
                            cardTitle="Pengiriman Kemanapun"
                            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <StartBusinessCardFeature
                            cardIcon="bi bi-bullseye"
                            cardTitle="Template Katalog"
                            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                        <StartBusinessCardFeature
                            cardIcon="bi bi-camera-reels-fill"
                            cardTitle="Metode Modern"
                            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                        />
                    </Row>
                </Container>
                <Image src={DotVector} className="sb-dot-vector-2" />
            </div>

            {/* ------------------- End SB Content 2 -------------------  */}


            {/* ------------------- SB Content 3 -------------------  */}

            <div id="sb-content-3">
                <Container>
                    <Row className="sb-content-3-row">
                        <Col className="col-12 col-lg-7 sb-image-content-3">
                            <Image className="image-content-3" src={ImageContent3} alt="startbusiness-image-content-3" />
                        </Col>
                        <Col className="col-12 col-lg-5 sb-heading-content-3">
                            <h1>
                                <span className="sb-circle-content-3"></span>
                                Kembangkan Bisnismu Disini!
                            </h1>
                            <p>
                                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum.
                            </p>
                            <Link to="/login">
                                <Button className="btn btn-start">Mulai</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content 3 -------------------  */}


            {/* ------------------- SB Content 4 -------------------  */}

            <div id="sb-content-4">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-12 sb-heading-content-4">
                            <h5>Koleksi Kami</h5>
                            <h1>Koleksi Paling Laris</h1>
                        </Col>
                    </Row>

                    <Row>
                        <Col className="col-12 col-lg-12 sb-image-content-4">
                            <Swiper
                                direction={"vertical"}
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                className="swiper"
                            >
                                <SwiperSlide className="swiper-slide">
                                    <Image src={ImageCrewneck} alt="startbusiness-image-content-4" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={ImageHoodie} alt="startbusiness-image-content-4" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={ImageKaosPolos} alt="startbusiness-image-content-4" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={ImagePolo} alt="startbusiness-image-content-4" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={ImageTopi} alt="startbusiness-image-content-4" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={ImageToteBag} alt="startbusiness-image-content-4" />
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide">
                                    <Image src={ImageJaket} alt="startbusiness-image-content-4" />
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content 4 -------------------  */}


            {/* ------------------- SB Content 5 -------------------  */}

            <div id="sb-content-5">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-4 sb-heading-content-5">
                            <h1>
                                Kenalan Dulu Sama
                                <span> Start Business </span>
                            </h1>
                        </Col>
                        <Col className="col-12 col-lg-8 sb-description-content-5">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12 col-lg-12 sb-introduction-content-5">
                            <iframe className="youtube-content"
                                src="https://www.youtube.com/embed/tgbNymZ7vqY" title="startbusiness-introduction"
                            >
                            </iframe>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content 5 -------------------  */}


            {/* ------------------- SB Content 6 -------------------  */}

            <div id="sb-content-6">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-6 sb-heading-content-6">
                            <h1>Frequently Asked Questions</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Col>
                        <Col className="col-12 col-lg-6 sb-faq-accordion">
                            <Accordion defaultActiveKey="0" flush>
                                <FAQAccordion
                                    eventKey="0"
                                    accordionQuestion="Accordion Item #1"
                                    accordionAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum."
                                />
                                <FAQAccordion
                                    eventKey="1"
                                    accordionQuestion="Accordion Item #2"
                                    accordionAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum."
                                />
                                <FAQAccordion
                                    eventKey="2"
                                    accordionQuestion="Accordion Item #3"
                                    accordionAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum."
                                />
                                <FAQAccordion
                                    eventKey="3"
                                    accordionQuestion="Accordion Item #4"
                                    accordionAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum."
                                />
                                <FAQAccordion
                                    eventKey="4"
                                    accordionQuestion="Accordion Item #5"
                                    accordionAnswer="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum."
                                />
                            </Accordion>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content 6 -------------------  */}

        </HomeLayout>

    );

};

export default Home;