import React, { Component } from "react";
import { Container, Row, Col, Nav, NavItem } from "reactstrap";
import { Link } from "react-router-dom";
class Pagenavigation extends Component {
    navOnClick = e => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
    render() {
        return (
            <div className="navigation">
                <Container >
                    <Row>
                        <Col xs="12">
                            <Nav>
                                <NavItem><Link className="nav-link" to="/how-it-works" onClick={this.navOnClick}>How It Works</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/about-us" onClick={this.navOnClick}>About Us</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/why-choose-us" onClick={this.navOnClick}>Why Choose Us</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/questions" onClick={this.navOnClick}>Questions</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/definitions" onClick={this.navOnClick}>Definitions</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/rates-and-fees" onClick={this.navOnClick}>Rates & Fees</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/lending-policy" onClick={this.navOnClick}>Lending Policy</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/unsubscribe" onClick={this.navOnClick}>Unsubscribe</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/privacy-policy" onClick={this.navOnClick}>Privacy Policy</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/terms-of-use" onClick={this.navOnClick}>Terms Of Use</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/disclaimer" onClick={this.navOnClick}>Disclaimer</Link></NavItem>
                                <NavItem><Link className="nav-link" to="/contact" onClick={this.navOnClick}>Contact</Link></NavItem>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Pagenavigation;
