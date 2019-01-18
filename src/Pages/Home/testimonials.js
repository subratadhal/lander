import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials-section">
        <Container>
          <Row>
            <Col xs="12">
              <h1>
                Customer Experiences
              </h1>
            </Col>
            <Col sm="4">
              <div className="testimonials-items">
                <article>
                  <div className="testimonials-content">
                    <p>
                      "I loved how fast and easy it was! it really helped me out that <strong>I got approved so fast.</strong>"
                  </p>
                  </div>
                  <div className="testimonials-name">
                    -Taylor
                  </div>
                </article>
              </div>
            </Col>
            <Col sm="4">
              <div className="testimonials-items">
                <article>
                  <div className="testimonials-content">
                    <p>
                      "This was an easy process and <strong>funds we available next day!</strong>"
                  </p>
                  </div>
                  <div className="testimonials-name">
                    -Joshes
                  </div>
                </article>
              </div>
            </Col>
            <Col sm="4">
              <div className="testimonials-items">
                <article>
                  <div className="testimonials-content">
                    <p>
                      "Your services was <strong>quick and simple</strong> I would use this company again and <strong>recommended this to my friends.</strong>"
                  </p>
                  </div>
                  <div className="testimonials-name">
                    -Marie
                  </div>
                </article>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Testimonials;
