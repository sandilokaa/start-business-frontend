import React from "react";
import {
    Button,
    Container,
    Nav,
    Form,
    Navbar
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../assets/css/style.css";

const NavbarGeneral = () => {

    return (
        <Navbar className="navbar" expand="lg" fixed="top">
            <Container>
                <Navbar.Brand className="nav-brand" href="#">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav-item" >Home</Nav.Link>
                        <Nav.Link className="nav-item" >Collection</Nav.Link>
                        <Nav.Link className="nav-item" >About Us</Nav.Link>
                        <Nav.Link className="nav-item" >Contact Us</Nav.Link>
                        <Nav.Link className="nav-item" >Class</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Link to="/login">
                            <Button className="btn-authentication">Login</Button>
                        </Link>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );

};

export default NavbarGeneral;