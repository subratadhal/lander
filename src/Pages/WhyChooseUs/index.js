import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CTAForm from "../../Common/Form/ctaForm";
class WhyChooseUs extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>Why Choose Us?</h1>
                            <p>For years, we have been a resource for connecting consumers with our partnered lenders. We know there are several ways to obtain a loan. However, here are a few reasons why you should consider our service to connect with a lender:</p>

                            <p><strong>Speed</strong></p>

                            <p>Our service is fast. We may be able to connect you with a lender to offer you a loan as soon as the next business day. The next step is to complete the request form so we can speedily connect you with a lender that is ready to work with you.</p>

                            <p><strong>Safety</strong></p>

                            <p>We protect and secure your personal information.</p>

                            <p>A number of websites claim to offer some sort of quick service to connect you with lenders, but be careful! Some websites are actually designed to infect your computer with viruses and malware that steals sensitive information like your bank account number. Be aware of unsecured websites making false claims about their security technology. Also, be cautious if you see a website with all the security logos on display but without linking to the security provider’s certification page. Giving your personal information to these websites can make you an easy target for hackers and thieves.</p>

                            <p><strong>Convenience</strong></p>

                            <p>Avoid long lines and having to get out of the house to connect with a lender. You can fill out our online form from the convenience of your home. We partner with many lenders, therefore, getting connected with one of them is convenient as 1, 2, 3. Our online form serves as a connecting service to connect you with one of them.</p>
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

export default WhyChooseUs;
