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
// import "../../assets/css/floating.css";



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
                                Sebuah platform dropship untuk belajar dan memulai bisnis dropship dengan modal yang minim.
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
                            cardName="sb-apparel"
                            cardIcon="https://img.icons8.com/external-wanicon-solid-wanicon/64/FFFFFF/external-hoodie-autumn-clothes-accesories-wanicon-solid-wanicon.png"
                            cardTitle="Produk Apparel"
                            cardDescription="Anda tidak perlu pusing mencari produk karena kami menyediakan berbagai jenis produk apparel seperti kaos, hoodie, jaket dsb."
                        />
                        <StartBusinessCardFeature
                            cardName="sb-packaging"
                            cardIcon="https://img.icons8.com/ios-filled/50/FFFFFF/cardboard-box.png"
                            cardTitle="Packaging Custom"
                            cardDescription="Anda dapat melakukan custom packaging untuk kebutuhan branding sehingga harga jual produk anda menjadi lebih tinggi."
                        />
                        <StartBusinessCardFeature
                            cardName="sb-catalog"
                            cardIcon="https://img.icons8.com/ios-filled/50/FFFFFF/product-documents.png"
                            cardTitle="Template Katalog"
                            cardDescription="Anda mendapatkan ratusan desain katalog siap pakai dengan berbagai macam tema sehingga memudahkan anda untuk berjualan."
                        />
                        <StartBusinessCardFeature
                            cardName="sb-tutorial"
                            cardIcon="https://img.icons8.com/ios-glyphs/30/FFFFFF/live-video-on--v1.png"
                            cardTitle="Video Tutorial"
                            cardDescription="Anda mendapatkan berbagai video tutorial dalam mengolola bisnis mulai dari editing, promosi hingga closing bagi pemula."
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
                                Bersama Start Business kalian mendapatkan peluang untuk mendapatkan penghasilan tambahan dengan mudah dan praktis.
                                Kalian hanya perlu fokus promosi produk anda, untuk masalah produksi, packing dan pengiriman kami yang urus.
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


            {/* ------------------- SB Content 7 -------------------  */}

            <div id="sb-content-7">
                <Container>
                    <Row className="sb-row-conclusion">
                        <Col className="col-12 col-lg-4 sb-about-us">
                            <h1>Start Business</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                        </Col>
                        <Col className="col-12 col-lg-4 sb-navigation">
                            <h4>Navigasi</h4>
                            <div className="sb-link">
                                <a href="#Example">Home</a>
                                <a href="#Example">Collection</a>
                                <a href="#Example">About Us</a>
                                <a href="#Example">Contact Us</a>
                                <a href="#Example">Class</a>
                            </div>
                        </Col>
                        <Col className="col-12 col-lg-4 sb-contact-us">
                            <h4>Contact Us</h4>
                            <div className="icon-contact">
                                <div className="sb-location">
                                    <i class="bi bi-geo-fill"></i>
                                    <p>Semarang, Indonesia</p>
                                </div>
                                <div className="sb-whatsapp">
                                    <i class="bi bi-whatsapp"></i>
                                    <p>085975979880</p>
                                </div>
                                <div className="sb-email">
                                    <i class="bi bi-envelope-at-fill"></i>
                                    <p>startbusinessind@gmail.com</p>
                                </div>
                            </div>
                        </Col>
                        <hr />
                    </Row>
                    <Row className="sb-row-ownership">
                        <Col className="col-12 col-lg-6 sb-copyright">
                            <h6>© 2022 Geopardy. All rights reserved!. Powered by Sandi Loka</h6>
                        </Col>
                        <Col className="col-12 col-lg-6 sb-media-social">
                            <div className="icon">
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-tiktok"></i>
                                <i class="bi bi-youtube"></i>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content 7 -------------------  */}


            {/* ------------------- SB Content 8 -------------------  */}


            {/* ------------------- End SB Content 8 -------------------  */}

        </HomeLayout>

    );

};

export default Home;