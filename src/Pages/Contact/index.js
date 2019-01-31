import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CTAForm from "../../Common/Form/ctaForm";
class Contact extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>Contact Us</h1>
                            <p>To unsubscribe, please visit our <Link to="unsubscribe">Unsubscribe</Link> Page and complete the requested information.</p>

                            <p>For questions, please visit our <Link to="questions">Questions</Link> Page for a list of answers to commonly asked questions.</p>

                            <p>For more information on how we connect you with a lender, please visit our <Link to="how-it-works">How It Works</Link> Page.</p>
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

export default Contact;
