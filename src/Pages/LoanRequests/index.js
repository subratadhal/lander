import React, { Component } from "react";
import {
    Container,
    Row,
    Col

} from "reactstrap";
import { Link } from "react-router-dom";
import DonutChartWrapper from "../../Common/Chart/donutChart";
class LoanRequests extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const donutChartValue1 = 40;
        const donutChartValue2 = 60;
        const donutChartValue3 = 80;
        return (
            <div className="account-pages">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h1 className="pagetitle">Your Loan Request</h1>
                        </Col>



                        <Col sm="12">
                            <div className="wizard ">
                                <div className="wizard-header">Incomplete Requests</div>
                                <div className="wizard-body">
                                    <div className="loan-request-row">
                                        <div className="loan-request-column">
                                            <div className="loan-request-icon">
                                                <DonutChartWrapper value={donutChartValue1} />
                                            </div>
                                            <div className="loan-request-text">
                                                <h3>Began a request for a personal loan </h3>
                                                <p>Let's pick up where you left off</p>
                                                <small>Yesterday</small>
                                            </div>
                                        </div>
                                        <div className="loan-request-column">
                                            <Link to="/offers" className="loan-request-action">Finish request <span>&#x203A;</span></Link>
                                        </div>
                                    </div>
                                    <div className="loan-request-row">
                                        <div className="loan-request-column">
                                            <div className="loan-request-icon">
                                                <DonutChartWrapper value={donutChartValue2} />
                                            </div>
                                            <div className="loan-request-text">
                                                <h3>Began a request for a personal loan </h3>
                                                <p>Let's pick up where you left off </p>
                                                <small>2d ago</small>
                                            </div>
                                        </div>
                                        <div className="loan-request-column">
                                            <Link to="/offers" className="loan-request-action">Finish request <span>&#x203A;</span></Link>
                                        </div>
                                    </div>
                                    <div className="loan-request-row">
                                        <div className="loan-request-column">
                                            <div className="loan-request-icon">
                                                <DonutChartWrapper value={donutChartValue3} />
                                            </div>
                                            <div className="loan-request-text">
                                                <h3>Began a request for a personal loan</h3>
                                                <p>Let's pick up where you left off</p>
                                                <small>15 Jan</small>
                                            </div>
                                        </div>
                                        <div className="loan-request-column">
                                            <Link to="/offers" className="loan-request-action">Finish request <span>&#x203A;</span></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wizard ">
                                <div className="wizard-header">Complete Requests</div>
                                <div className="wizard-body ">
                                    <div className="loan-request-row">
                                        <div className="loan-request-column">
                                            <div className="loan-request-icon">
                                                <span className="money-icon"></span>
                                            </div>
                                            <div className="loan-request-text">
                                                <h3>Submitted a $10,000 personal loan request</h3>
                                                <p>Received <strong>3</strong> Lender matches</p>
                                                <small>Yesterday</small>
                                            </div>
                                        </div>
                                        <div className="loan-request-column">
                                            <Link to="/offers" className="loan-request-action">View results <span>&#x203A;</span></Link>
                                        </div>
                                    </div>
                                    <div className="loan-request-row">
                                        <div className="loan-request-column">
                                            <div className="loan-request-icon">
                                                <span className="money-icon"></span>
                                            </div>
                                            <div className="loan-request-text">
                                                <h3>Submitted a $20,000 personal loan request</h3>
                                                <p>Received <strong>0</strong> Lender matches</p>
                                                <small>1 day ago</small>
                                            </div>
                                        </div>
                                        <div className="loan-request-column">
                                            <Link to="/offers" className="loan-request-action">View results <span>&#x203A;</span></Link>
                                        </div>
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

export default LoanRequests;
