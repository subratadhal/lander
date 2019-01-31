import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import CTAForm from "../../Common/Form/ctaForm";
class Disclaimer extends Component {
    render() {
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="8">
                            <h1>Disclaimer</h1>
                            <p>lender.page is not a lender and does not approve or deny loans or make credit decisions. lender.page provides a marketplace service only and is not acting as a representative, agent, or correspondent for any lender or service provider. lender.page does not endorse any particular lender, loan product or service provider. You are under no obligation to use lender.page’s service to initiate contact with, apply for credit from, or accept any loan product from any lender or service provider. This service is not available in all states.</p>

                            <p>By submitting your information via this website, you are authorizing lender.page and its partners to do a credit check, which may include verifying your social security number, driver license number or other identification, and a review of your creditworthiness. Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, but also may include alternative credit bureaus such as Teletrack, DP Bureau or others. You also authorize lender.page to share your information and credit history with a network of approved lenders and lending partners.</p>

                            <p>There is no fee for you to submit a loan request at lender.page. lender.page is not a lender and does not provide lending services. Based on the information you submit, lender.page will search its vast network of authorized lenders in order to connect you with a lender that may be able to serve your needs.</p>

                            <p>After your information is forwarded to an authorized lender, the lender will evaluate your information and may approve a loan for you. If your loan is approved, you will be redirected to an e-signature page on the lender’s website. All fees and rate information charged by the lender should be disclosed to you at that time. You should carefully and thoroughly review the rates and fees provided by the lender before agreeing to accept the loan or signing any documents. You are under no obligation to accept terms you are not comfortable with, and you should not accept terms that include payment amounts that are too difficult or impossible for you to meet.</p>

                            <p>If you decide the loan terms provided by the lender are acceptable and wish to proceed, you may e-signature the document. When signing, you are entering into a legally binding contract with the lender and are responsible for repayment of the loan. Your repayment obligation and any other loan-specific questions or concerns are between you and the lender, not lender.page.</p>

                            <p>Cash advances are intended as short-term financial relief and are not long-term financial solutions. If you are facing debt and credit difficulties, you should seek professional financial counseling.</p>

                            <p>Please visit the Rates & Fees page of this website to learn more about the risks involved with cash advances. You also should review local laws and regulations governing cash advances. Where possible, you are encouraged to explore alternatives to taking out a short term loan.</p>

                            <p>lender.page is not available in all states. lender.page specifically does not offer or solicit short-term cash advances in New York, Connecticut or other states where prohibited by law.</p>

                            <p>You acknowledge, agree, and authorize that (a) your information may be sent to lenders and/or third-party partners on your behalf, and (b) such lenders may obtain consumer reports and related information about you from one or more consumer reporting agencies, such as TransUnion, Experian and Equifax to evaluate your creditworthiness.</p>
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

export default Disclaimer;
