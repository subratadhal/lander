import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class Footer extends Component {
  render() {
    return (
      <footer className="footer-section">
        <Container>
          <Row>
            <Col xs="12">
              <p>
                Lender.page (the "website") is not an offer or solicitation to
                lend. The website only provides a service and is not an agent,
                representative, or broker of any lender and does not endorse or
                charge you for any loan or product. The website operators are
                not lenders, do not make loans of any type, and do not make
                credit decisions. The website collects personal information
                provided by you and forwards it to partners in our lender
                network. You are under no obligation to use this website or
                service to initiate, contact, nor apply for credit or any loan
                product with any service provider or lender. Loan amounts vary
                from $100 and $35,000 but not all lenders can provide up to
                $35,000. Providing your information on the website does not
                guarantee you will be approved for a loan or credit product.
                Cash transfer times may vary between lenders and may depend on
                your individual financial institution. In some circumstances
                faxing may be required. If you have any questions, contact your
                lender directly for details, questions, or concerns regarding
                your loan or credit product. Short-term cash loans are meant to
                provide you with short-term financing to solve immediate cash
                needs and should not be considered a long-term solution. This
                service and lenders are not available in all states. Lenders may
                perform credit checks with the three credit reporting bureaus:
                Experian, Equifax, or Trans Union or may perform alternative
                credit checks or consumer reports through alternative providers.
                By submitting your request, you acknowledge, agree, and
                authorize that (a) your information may be sent to lenders
                and/or third-party partners on your behalf, and (b) such lenders
                may obtain consumer reports and related information about you
                from one or more consumer reporting agencies, such as
                TransUnion, Experian and Equifax to evaluate your
                creditworthiness.
              </p>
              <p className="copy">
                Copyright &#169; 2015 - 2019 Lender.page - all rights reserved
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
