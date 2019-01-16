import React, { Component } from "react";
import logo from "../Pages/Home/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col xs="12">
              <Link to="/" className="logo">
                <img src={logo} alt="lender" />
              </Link>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
