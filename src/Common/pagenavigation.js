import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "reactstrap";

class Pagenavigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Container >
                    <Row>
                        <Col xs="12">
                            <Nav>
                                <NavItem><NavLink href="/how-it-works">How It Works</NavLink></NavItem>
                                <NavItem><NavLink href="/about-us">About Us</NavLink></NavItem>
                                <NavItem><NavLink href="/why-choose-us">Why Choose Us</NavLink></NavItem>
                                <NavItem><NavLink href="/questions">Questions</NavLink></NavItem>
                                <NavItem><NavLink href="/definitions">Definitions</NavLink></NavItem>
                                <NavItem><NavLink href="/rates-and-fees">Rates & Fees</NavLink></NavItem>
                                <NavItem><NavLink href="/lending-policy">Lending Policy</NavLink></NavItem>
                                <NavItem><NavLink href="/unsubscribe">Unsubscribe</NavLink></NavItem>
                                <NavItem><NavLink href="/privacy-policy">Privacy Policy</NavLink></NavItem>
                                <NavItem><NavLink href="/terms-of-use">Terms Of Use</NavLink></NavItem>
                                <NavItem><NavLink href="/disclaimer">Disclaimer</NavLink></NavItem>
                                <NavItem><NavLink href="/contact">Contact</NavLink></NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Pagenavigation;
