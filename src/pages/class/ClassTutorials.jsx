import React from "react";
import {
    Row,
    Col,
    Container
} from "react-bootstrap";
import HomeLayout from "../../layouts/home/HomeLayout";
import StartBusinessRecomendedCard from "../../components/class/StartBusinessRecomendedCard";
import StartBusinessAllTutorialCard from "../../components/class/StartBusinessAllTutorialCard";
import { recomendedData } from "../../assets/data/recomendedTutorial";
import { allTutorialsData } from "../../assets/data/allTutorials";

const ClassTutorials = () => {

    return (

        <HomeLayout>

            {/* ------------------- SB Content Header Class Tutorials -------------------  */}

            <div id="sb-class-tutorials-header">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-12">
                            <div className="tutorials-header">
                                <i className="bi bi-stack"></i>
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
                            <h1>Recomended for you ({recomendedData.Collections.length})</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        {
                            recomendedData.Collections.map((recomended) => {
                                return (

                                    <StartBusinessRecomendedCard
                                        key={recomended.id}
                                        cardImage={recomended.properties.image}
                                        cardTitle={recomended.properties.name}
                                        cardDescription={recomended.properties.description}
                                        cardLink={recomended.properties.link}
                                    />

                                );
                            })
                        }
                    </Row>
                </Container>
            </div>

            {/* ------------------- End SB Content Recomended Tutorials -------------------  */}


            {/* ------------------- SB Content All Tutorials -------------------  */}
            
            <div id="sb-all-tutorials">
                <Container>
                    <Row>
                        <Col className="col-12 col-lg-6 sb-header-all">
                            <h1>All Tutorials For You ({allTutorialsData.Collections.length})</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        {
                            allTutorialsData.Collections.map((tutorials) => {
                                return (

                                    <StartBusinessAllTutorialCard
                                        key={tutorials.id}
                                        cardImage={tutorials.properties.image}
                                        cardTitle={tutorials.properties.name}
                                        cardDescription={tutorials.properties.description}
                                        cardLink={tutorials.properties.link}
                                    />

                                );
                            })
                        }
                    </Row>
                </Container>
            </div>


            {/* ------------------- End SB Content All Tutorials -------------------  */}

        </HomeLayout>

    );

};

export default ClassTutorials;