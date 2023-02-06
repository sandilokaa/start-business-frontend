import React from "react";
import {
    Row,
    Col,
    Container
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import StartBusinessRecomendedTutorial from "../../components/class/StartBusinessRecomendedTutorial";
import { statesData } from "../../assets/data/recomendedTutorial";

const ClassTutorials = () => {

    return (

        <HomeLayout>

            {/* ------------------- SB Content Header Class Tutorials -------------------  */}

            <div id="sb-class-tutorials-header">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-12">
                            <div className="tutorials-header">
                                <i class="bi bi-stack"></i>
                                <h4>Tutorials</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="col-12 col-lg-12">
                            <div className="tutorials-description">
                                <p>
                                    Disini ada
                                    <span>
                                        20++ tutorial
                                    </span>
                                    yang tersedia untuk kamu yang baru bergabung.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content Header Class Tutorials -------------------  */}


            {/* ------------------- SB Content Recomended Tutorials -------------------  */}

            <div id="sb-recomended-tutorials">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-6 sb-header-recomended">
                            <h1>Recomended for you</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        {
                            statesData.Collections.map((state) => {
                                return (

                                    <StartBusinessRecomendedTutorial
                                        cardImage={state.properties.image}
                                        cardTitle={state.properties.name}
                                        cardDescription={state.properties.description}
                                        cardLink={state.properties.link}
                                    />

                                );
                            })
                        }
                    </Row>
                </Container>
            </div>

            {/* ------------------- SB Content Recomended Tutorials -------------------  */}

        </HomeLayout>

    );

};

export default ClassTutorials;