import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
class Feature extends Component {
  render() {
    return (
      <div className="feature-section">
        <Container>
          <Row>
            <Col xs="12">
              <h1>
                A Better Personal Money Solution To Get Funds, Fast, Anywhere!
              </h1>
              <p className="main-para">
                With FastLoanAdvance, you can receive funding up to $35,000. We
                have extensive partnerships with large authorized lenders. This
                allows us to cover almost all 50 states. The loan is received
                quickly and from the privacy of your own home.
              </p>
            </Col>
            <Col sm="4">
              <div className="feature-items">
                <figure>
                  <img
                    className="quotes"
                    src={require("../../Images/thumb-1.png")}
                    alt="Quick approval"
                  />
                </figure>
                <article>
                  <h2>Quick approval</h2>
                  <p>
                    It’s easy to get the funds you need. Just fill out our
                    Online Form. It’s quick, simple and secure. You can pay off
                    debts with ease!
                  </p>
                  <Link to="/">Start Now!</Link>
                </article>
              </div>
            </Col>
            <Col sm="4">
              <div className="feature-items">
                <figure>
                  <img
                    className="quotes"
                    src={require("../../Images/thumb-2.png")}
                    alt="Fast funding on the web"
                  />
                </figure>
                <article>
                  <h2>Fast funding on the web</h2>
                  <p>
                    It’s easy to get the funds you need. Just fill out our
                    Online Form. It’s quick, simple and secure. You can pay off
                    debts with ease!
                  </p>
                  <Link to="/">Start Now!</Link>
                </article>
              </div>
            </Col>
            <Col sm="4">
              <div className="feature-items">
                <figure>
                  <img
                    className="quotes"
                    src={require("../../Images/thumb-3.png")}
                    alt="Money goes right to you bank"
                  />
                </figure>
                <article>
                  <h2>Money goes right to you bank</h2>
                  <p>
                    It’s easy to get the funds you need. Just fill out our
                    Online Form. It’s quick, simple and secure. You can pay off
                    debts with ease!
                  </p>
                  <Link to="/">Start Now!</Link>
                </article>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Feature;
