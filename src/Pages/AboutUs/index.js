import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CTAForm from "../../Common/ctaForm";
class AboutUs extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>About Us</h1>
                            <p>lender.page was created to help consumers access money without hassle and wasted time.</p>
                            <p>We understand emergencies exist that may require access to cash. That’s why we simplified the process of finding a lender to get the money you need. You no longer have to visit dozens of websites, fill out numerous requests or stand in line at a local store. We are not a lender, but submitting your information through our secure online form will help us connect you to one of the participating lenders in our network. The lenders we work with are willing to help you get the cash you need. Each lender in our network has made the approval process quick and easy, usually with no paperwork or forms to copy and fax, and a loan agreement that you can review and sign online.</p>
                            <p>We look forward to helping you with your personal lending needs.</p>
                        </Col>
                        <Col sm="4">
                            <CTAForm />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AboutUs;
