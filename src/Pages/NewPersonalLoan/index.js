import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
class NewPersonalLoan extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>Profile</h1>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NewPersonalLoan;
