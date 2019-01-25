import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Alert,
    Button,
    Input
} from "reactstrap";
class Offers extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    sortByOnChange = e => {

    }
    render() {
        return (
            <div className="account-pages">
                <Container>
                    <Row>
                        <Col sm="12">
                            <Alert color="primary">
                                Sorry, we’re having truble assessing some of your account information. Your personal information is secured and you can still review
    your loan request result below. To sign in click here
                            </Alert>
                        </Col>
                        <Col sm="12">
                            <h3 className="offers-result-heading">Your personal loan search result</h3>
                        </Col>
                        <Col xs="12" sm="12" md="8">
                            <p className="common-paragraph">5 partners provided 4 offers on 01/18/2019</p>
                            <p className="common-paragraph"><strong>$35,000 refinance loan request</strong></p>
                        </Col>
                        <Col xs="12" sm="12" md="4">
                            <div className="sort-container">
                                <span>Sort by:</span>
                                <Input
                                    type="select"
                                    name="sortby"
                                    id="sortby"
                                    onChange={this.sortByOnChange}
                                >
                                    <option value="Low to High">Payment: Low to High</option>
                                    <option value="High to Low">Payment: High to Low</option>
                                </Input>
                            </div>
                        </Col>
                        <Col sm="12">
                            <div className="result-container">
                                <div className="rc-row">
                                    <div className="lender-tag">Lender</div>
                                    <div className="rc-heading">
                                        <div className="rc-company-info">
                                            <span className="rc-company-info--name">Refijet
                                                <span className="stars">
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star half-star"></span>
                                                    <span className="star clear-star"></span>
                                                    <span className="star-value">(158)</span>
                                                </span>
                                            </span>
                                            <div className="rc-company-info-phone">
                                                <div className="rc-company-info-phone--icon"></div>
                                                <div className="rc-company-info-phone--number">895-853-5896</div>
                                            </div>
                                        </div>

                                        <div className="rc-company-email">
                                            <Button
                                                onClick={this.slide3EmailAddressOnClick}
                                                type="button"
                                                color="primary"
                                                className="mt15"
                                            >
                                                Email Lender
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rc-row-2">
                                        <p>Rated Number 1 on Lender.page for 4 Consecutive Quaters</p>
                                    </div>
                                    <div className="rc-row-3">
                                        <div className="offer-loan-row">
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Loan Amount</div>
                                                <div className="offer-loan-row-column--value">$35,000</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Term</div>
                                                <div className="offer-loan-row-column--value">7 Years</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">APR</div>
                                                <div className="offer-loan-row-column--value">5.5%</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Est. Payment</div>
                                                <div className="offer-loan-row-column--value"><strong>$523</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rc-row">
                                    <div className="lender-tag">Lender</div>
                                    <div className="rc-heading">
                                        <div className="rc-company-info">
                                            <span className="rc-company-info--name">Refijet
                                                <span className="stars">
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star half-star"></span>
                                                    <span className="star clear-star"></span>
                                                    <span className="star-value">(158)</span>
                                                </span>
                                            </span>
                                            <div className="rc-company-info-phone">
                                                <div className="rc-company-info-phone--icon"></div>
                                                <div className="rc-company-info-phone--number">895-853-5896</div>
                                            </div>
                                        </div>

                                        <div className="rc-company-email">
                                            <Button
                                                onClick={this.slide3EmailAddressOnClick}
                                                type="button"
                                                color="primary"
                                                className="mt15"
                                            >
                                                Email Lender
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rc-row-2">
                                        <p>Rated Number 1 on Lender.page for 4 Consecutive Quaters</p>
                                    </div>
                                    <div className="rc-row-3">
                                        <div className="offer-loan-row">
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Loan Amount</div>
                                                <div className="offer-loan-row-column--value">$39,000</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Term</div>
                                                <div className="offer-loan-row-column--value">7 Years</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">APR</div>
                                                <div className="offer-loan-row-column--value">5.15%</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Est. Payment</div>
                                                <div className="offer-loan-row-column--value"><strong>$612</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rc-row">
                                    <div className="lender-tag">Lender</div>
                                    <div className="rc-heading">
                                        <div className="rc-company-info">
                                            <span className="rc-company-info--name">Refijet
                                                <span className="stars">
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star half-star"></span>
                                                    <span className="star clear-star"></span>
                                                    <span className="star-value">(158)</span>
                                                </span>
                                            </span>
                                            <div className="rc-company-info-phone">
                                                <div className="rc-company-info-phone--icon"></div>
                                                <div className="rc-company-info-phone--number">895-853-5896</div>
                                            </div>
                                        </div>

                                        <div className="rc-company-email">
                                            <Button
                                                onClick={this.slide3EmailAddressOnClick}
                                                type="button"
                                                color="primary"
                                                className="mt15"
                                            >
                                                Email Lender
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rc-row-2">
                                        <p>Rated Number 1 on Lender.page for 4 Consecutive Quaters</p>
                                    </div>
                                    <div className="rc-row-3">
                                        <div className="offer-loan-row">
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Loan Amount</div>
                                                <div className="offer-loan-row-column--value">$42,000</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Term</div>
                                                <div className="offer-loan-row-column--value">7 Years</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">APR</div>
                                                <div className="offer-loan-row-column--value">5.55%</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Est. Payment</div>
                                                <div className="offer-loan-row-column--value"><strong>$679</strong></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="rc-row">
                                    <div className="lender-tag">Lender</div>
                                    <div className="rc-heading">
                                        <div className="rc-company-info">
                                            <span className="rc-company-info--name">Refijet
                                                <span className="stars">
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star full-star"></span>
                                                    <span className="star half-star"></span>
                                                    <span className="star clear-star"></span>
                                                    <span className="star-value">(158)</span>
                                                </span>
                                            </span>
                                            <div className="rc-company-info-phone">
                                                <div className="rc-company-info-phone--icon"></div>
                                                <div className="rc-company-info-phone--number">895-853-5896</div>
                                            </div>
                                        </div>

                                        <div className="rc-company-email">
                                            <Button
                                                onClick={this.slide3EmailAddressOnClick}
                                                type="button"
                                                color="primary"
                                                className="mt15"
                                            >
                                                Email Lender
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="rc-row-2">
                                        <p>Rated Number 1 on Lender.page for 4 Consecutive Quaters</p>
                                    </div>
                                    <div className="rc-row-3">
                                        <div className="offer-loan-row">
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Loan Amount</div>
                                                <div className="offer-loan-row-column--value">$46,000</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Term</div>
                                                <div className="offer-loan-row-column--value">7 Years</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">APR</div>
                                                <div className="offer-loan-row-column--value">5.5%</div>
                                            </div>
                                            <div className="offer-loan-row-column">
                                                <div className="offer-loan-row-column--label">Est. Payment</div>
                                                <div className="offer-loan-row-column--value"><strong>$721</strong></div>
                                            </div>
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

export default Offers;
