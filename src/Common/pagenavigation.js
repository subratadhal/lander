import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
class Pagenavigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Container >
                    <Row>
                        <Col xs="12">
                            <Nav>
                                <NavItem><Link className="nav-link" to="/how-it-works">How It Works</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/about-us">About Us</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/why-choose-us">Why Choose Us</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/questions">Questions</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/definitions">Definitions</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/rates-and-fees">Rates & Fees</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/lending-policy">Lending Policy</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/unsubscribe">Unsubscribe</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/privacy-policy">Privacy Policy</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/terms-of-use">Terms Of Use</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/disclaimer">Disclaimer</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/contact">Contact</Link></NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Pagenavigation;
