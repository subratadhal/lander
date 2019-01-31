import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CTAForm from "../../Common/Form/ctaForm";
class RatesAndFees extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>Rates & Fees</h1>
                            <p>Lender.page’s service is always free. The rates and fees applicable to your loan will be set by your lender. lender.page is not a lender and does not provide lending services directly to consumers. lender.page uses the information you submit to quickly and conveniently connect you with a lender.</p>
                            <p>Full Disclosure of Terms</p>
                            <p>The Truth in Lending Act requires full disclosure of all loan fees and interest rates. Your lender should disclose all fees and rates to you before you accept your loan. If you accept the loan terms, most lenders will direct you to an e-signature page to complete the loan process. Please take the time to read your loan agreement before accepting and signing it.</p>
                            <p>Late Payment Policy</p>
                            <p>Lenders may have different policies regarding late payments. Review the late payment policy detailed in your loan agreement before signing. All lenders must abide by applicable laws, rules, and regulations regarding late payment fees. Select your state from the list below to review the laws and regulations governing late payments by a particular state.</p>
                            <p>Non-payment Policy</p>
                            <p>Additional fees or charges may apply in the event that you are unable to repay your loan. lender.page tries to work with reputable lenders dedicated to using lawful, fair and reasonable means to pursue collections of overdue accounts. Find your state in the list down below to review the legal repercussions applicable to you in the case of non-payment.</p>
                            <p>Loan Renewal Policy</p>
                            <p>Loan renewal policies are largely governed by state law. In states where rollovers are allowed, additional interest and late fees can add substantial to your final loan amount, so these should be avoided whenever possible. Find your state’s laws and regulations governing rollovers and extensions from the list below. Read the lender’s terms in considering renewal options before signing the loan agreement.</p>
                            <p>Please note that this list is for informational purposes only, is not intended to be legal advice, and may not be accurate or up to date at all times. If you have a specific question about laws or regulations applicable to you, please ask your lender directly or consult a legal adviser. Some states do not have any lending statutory provisions pertaining to personal loans.</p>
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

export default RatesAndFees;
