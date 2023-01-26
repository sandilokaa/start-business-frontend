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

import AboutSwiper1 from "../../assets/images/image-about-swiper-1.png";

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
                                    <Image src={AboutSwiper1} alt="sb-about-swiper" loading="lazy"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={AboutSwiper1} alt="sb-about-swiper" loading="lazy"/>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Image src={AboutSwiper1} alt="sb-about-swiper" loading="lazy"/>
                                </SwiperSlide>
                            </Swiper>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content About Us 1 -------------------  */}

        </HomeLayout>

    );

};

export default AboutUs;