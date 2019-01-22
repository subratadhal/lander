import React, { Component } from "react";
import {
    Container,
    Row,
    Col
} from "reactstrap";
import { Link } from "react-router-dom";
class Dashboard extends Component {
    render() {
        return (
            <div className="account-pages">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h1 className="pagetitle">Dashboard</h1>
                        </Col>
                        <Col sm="12">
                            <h2 className="subtitle">Recent Loan Request</h2>
                            <div className="loan-row">
                                <div className="loan-row-column">
                                    <div className="loan-column-personal">
                                        <div className="loan-column-personal-icon"></div>
                                        <div className="loan-column-personal-content">
                                            <div className="loan-column-personal-content--header">
                                                Personal Loan
                                            </div>
                                            <div className="loan-column-personal-content--text">
                                                <span>1 day ago</span>
                                                <Link to="/offers">View Result</Link>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="loan-row-column">
                                    <div className="loan-row-column--label">Amount</div>
                                    <div className="loan-row-column--value">$35,000</div>
                                </div>
                                <div className="loan-row-column">
                                    <div className="loan-row-column--label">Lenders</div>
                                    <div className="loan-row-column--value">5</div>
                                </div>
                                <div className="loan-row-column">
                                    <div className="loan-row-column--label">Offers</div>
                                    <div className="loan-row-column--value">4
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Dashboard;
