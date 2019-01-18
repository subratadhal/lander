import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class Infopanel extends Component {
    render() {
        return (
            <div className="infopanel-section">
                <Container>
                    <Row>
                        <Col xs="12">
                            <ul className="benefits_list">
                                <li className="benefits_list__item benefits_list__item--1">Safe &amp; Secure</li>
                                <li className="benefits_list__item benefits_list__item--2">Fast Lender-Approval</li>
                                <li className="benefits_list__item benefits_list__item--3">Submit Online</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Infopanel;



