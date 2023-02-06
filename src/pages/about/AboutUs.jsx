import React from "react";
import {
    Row,
    Col,
    Container,
    Image
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../../assets/css/style.css";
import { Pagination } from "swiper";
import StartBusinessCardAbout from "../../components/about/StartBusinessCardAbout";
import AboutSwiper1 from "../../assets/images/image-about-swiper-1.png";
import AboutSwiper2 from "../../assets/images/image-about-swiper-2.png";
import AboutKaosCustom from "../../assets/images/about-kaos-custom.png";
import AboutQualityControl from "../../assets/images/about-quality-control.png";

const AboutUs = () => {

    return (

        <HomeLayout>

            {/* ------------------- SB Content About Us 1 -------------------  */}

            <div id="sb-about-swiper">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-12">
                            <Swiper
                                pagination={{
                                    dynamicBullets: true,
                                }}
                                modules={[Pagination]}
                                className="mySwiper"
                            >
                                <SwiperSlide>
                                    <Image src={AboutSwiper1} alt="sb-about-swiper" loading="lazy" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={AboutSwiper2} alt="sb-about-swiper" loading="lazy" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={AboutSwiper1} alt="sb-about-swiper" loading="lazy" />
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content About Us 1 -------------------  */}



            {/* ------------------- SB Content About Us 2 -------------------  */}

            <div id="sb-about-card">
                <Container>
                    <Row>
                        <StartBusinessCardAbout
                            overlayClass="overlay-1"
                            overlayContent="content-1"
                            cardImage={AboutKaosCustom}
                            cardTitle="Kaos Custom"
                            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            "
                        />
                        <StartBusinessCardAbout
                        overlayClass="overlay-2"
                        overlayContent="content-2"
                            cardImage={AboutQualityControl}
                            cardTitle="Quality Control"
                            cardDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            "
                        />
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content About Us 2 -------------------  */}

        </HomeLayout>

    );

};

export default AboutUs;