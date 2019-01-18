import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-page-article">
          <Container>
            <Row>
              <Col xs="12">
                <h5>Important Disclosures. Please Read Carefully.</h5>
                <p>The purpose of shorter duration loans is to provide the borrower temporary financial relief. Such loans are not a long-term financial solution. Persons facing serious financial difficulties should consider other alternatives or should seek out professional financial advice.</p>
                <p>This website is not an offer to lend. lender.page is not a lender and does not make loan or credit decisions. lender.page connects interested persons with a lender from its network of approved lenders. lender.page does not control and is not responsible for the actions or inactions of any lender, is not an agent, representative or broker of any lender, and does not endorse any lender. lender.page receives compensation from its lenders, often based on a ping-tree model similar to Google AdWords where the highest available bidder is connected to the consumer. Regardless, lender.page’s service is always free to you.</p>
                <p>This service is not available in all states. If you request a loan in a particular state where such loans are prohibited, or in a location where lender.page does not have an available lender, you will not be connected to a lender. In some cases, you may be given the option of obtaining a loan from a tribal lender. Tribal lenders are subject to tribal and certain federal laws while being immune from state law including usury caps. If you are connected to a tribal lender, please understand that the tribal lender’s rates and fees may be higher than state-licensed lenders. Additionally, tribal lenders may require you to agree to resolve any disputes in a tribal jurisdiction. You are urged to read and understand the terms of any loan offered by any lender, whether tribal or state-licensed, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.</p>
                <p>By submitting your information via this website, you are authorizing lender.page and its partners to do a credit check, which may include verifying your social security number, driver license number or other identification, and a review of your creditworthiness. Credit checks are usually performed by one of the major credit bureaus such as Experian, Equifax and TransUnion, but also may include alternative credit bureaus such as Teletrack, DP Bureau or others. You also authorize lender.page to share your information and credit history with a network of approved lenders and lending partners.</p>
              </Col>
              <Col xs="12">
                <h5>Lender’s Disclosure of Terms.</h5>
                <p>
                  The lender you are connected to will provide documents that contain all fees and rate information pertaining to the loan being offered, including any potential fees for late-payments and the rules under which you may be allowed (if permitted by applicable law) to refinance, renew or rollover your loan. Loan fees and interest rates are determined solely by the lender based on the lender’s internal policies, underwriting criteria and applicable law. lender.page has no knowledge of or control over the loan terms offered by a lender. You are urged to read and understand the terms of any loan offered by any lender, whether tribal or state-licensed, and to reject any particular loan offer that you cannot afford to repay or that includes terms that are not acceptable to you.
              </p>
              </Col>
              <Col xs="12">
                <h5>Late Payments Hurt Your Credit Score</h5>
                <p>
                  Please be aware that missing a payment or making a late payment can negatively impact your credit score. To protect yourself and your credit history, make sure you only accept loan terms that you can afford to repay. If you cannot make a payment on time, you should contact your lender immediately and discuss how to handle late payments.
              </p>
              </Col>
            </Row>
          </Container>
        </div>
        <footer className="footer-section">
          <Container>
            <Row>
              <Col xs="12">
                <p className="copy">
                  Copyright &#169; 2012-2019 lender.page. All Rights Reserved
              </p>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    );
  }
}

export default Footer;
