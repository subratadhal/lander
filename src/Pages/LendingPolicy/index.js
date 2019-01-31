import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CTAForm from "../../Common/Form/ctaForm";
class LendingPolicy extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>Policy on Responsible Lending</h1>
                            <p>Lender.page wants consumers to be educated, make smart financial decisions, and to be protected from malicious personal consumer lenders and other unsavory businesses that engage in unlawful and unethical lending practices.</p>

                            <h2>Trust and Truth</h2>
                            <p>lender.page's policies and practices conform to applicable provisions of fair lending laws like the Truth in Lending Act. Before a consumer enters into a loan agreement, the lender should provide you in writing (this can be electronically) with the exact fees, rates, charges, roll over charges and other details. Visit the Rates and Fees section of this website to learn about current regulations and laws in your state.</p>

                            <h2>Fair Lending</h2>
                            <p>The Dodd-Frank Wall Street Reform Act states that all lenders must engage in "fair lending" practices. The Consumer Financial Protection Bureau enforces fair lending rules and regulations.</p>

                            <p>Current State Regulations</p>

                            <p>lender.page encourages lenders to follow applicable federal and state regulations. This includes conformity with local laws regarding interest rates, maximum loan terms, rollover limits, fees, cooling-off periods in between loans, and other loan terms. Lenders that are an extension of a federally recognized Indian Tribe act as independent sovereign nations and may not be required to follow local laws regarding rates, fees and other loan terms, although such lenders conform to federal lending laws including the Truth in Lending Act.</p>
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

export default LendingPolicy;
