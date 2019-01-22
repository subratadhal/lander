import React, { Component } from "react";
import logo from "../Pages/Home/logo.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  Container, Row, Col,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Container>
          <Row>
            <Col xs="12">
              <Navbar className="header-nav" expand="md">
                <Link to="/" className="navbar-brand" tabIndex="0"><img src={logo} alt="lender" /></Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>

                    <NavItem >
                      <Link className="nav-link block-link" to="/login">Login</Link>
                    </NavItem>
                    <NavItem >
                      <Link className="nav-link" to="/new-personal-loan">Get a new loan</Link>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        Account
                      </DropdownToggle>
                      <DropdownMenu right>
                        <ul>
                          <NavItem >
                            <Link className="nav-link " to="/dashboard">Dashboard</Link>
                          </NavItem>
                          <NavItem >
                            <Link className="nav-link " to="/profile">Profile</Link>
                          </NavItem>
                          <NavItem >
                            <Link className="nav-link " to="/">SignOut</Link>
                          </NavItem>
                        </ul>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                </Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
