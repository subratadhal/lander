import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import validator from "validator";
import {
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Input,
    FormFeedback
} from "reactstrap";
class CTAForm extends Component {
    state = {
        loanAmount: "",
        loanAmountError: "",
        loanAmountInputStyle: "",
        emailAddress: "",
        emailError: "",
        emailInputStyle: ""
    }
    loanAmountOnChange = e => {
        const loanAmount = e.target.value;
        if (validator.isEmpty(loanAmount)) {
            this.setState({
                loanAmountError: "Loan amount is required",
                loanAmountInputStyle: "error"
            });
        } else {
            this.setState({
                loanAmountError: "",
                loanAmount: loanAmount,
                loanAmountInputStyle: "success"
            });
        }
    };
    emailAddressOnChange = e => {
        const email = e.target.value;
        if (validator.isEmpty(email)) {
            this.setState({
                emailError: "Email address is required",
                emailInputStyle: "error"
            });
        } else {
            if (validator.isEmail(email)) {
                this.setState({
                    emailError: "",
                    emailAddress: email,
                    emailInputStyle: "success"
                });
            } else {
                this.setState({
                    emailError: "",
                    emailAddress: email,
                    emailInputStyle: ""
                });
            }
        }
    };
    getCashNowOnClick = e => {
        const loanAmount = document.getElementById("loanAmount");
        const email = document.getElementById("email");
        if (
            validator.isEmpty(loanAmount.value) ||
            validator.isEmpty(email.value)
        ) {
            if (validator.isEmpty(loanAmount.value)) {
                this.setState({
                    loanAmountError: "Loan amount is required",
                    loanAmountInputStyle: "error"
                });
            }
            if (validator.isEmpty(email.value)) {
                this.setState({
                    emailError: "Email is required",
                    emailInputStyle: "error"
                });
            }
            if (!validator.isEmail(email.value)) {
                this.setState({
                    emailError: "This is not a valid email",
                    emailInputStyle: "error"
                });
            }
        } else {
            if (!validator.isEmail(email.value)) {
                this.setState({
                    emailError: "This is not a valid email",
                    emailInputStyle: "error"
                });
            } else {
                this.setState({
                    loanAmountError: "",
                    loanAmount: loanAmount.value,
                    loanAmountInputStyle: "success",
                    emailError: "",
                    emailAddress: email.value,
                    emailInputStyle: "success"
                });
                this.props.history.push("/");
            }
        }
    }
    render() {
        const loanAmountError = this.state.loanAmountError;
        const loanAmountInputStyle = this.state.loanAmountInputStyle;
        const emailError = this.state.emailError;
        const emailInputStyle = this.state.emailInputStyle;
        return (
            <div className="cta-container">
                <Row className="cta-header">
                    <Col>
                        Start Your Speedy Form!
                    </Col>
                </Row>
                <Row className="cta-form">
                    <Col>
                        <Form>
                            <FormGroup>
                                <Input
                                    type="select"
                                    name="loanAmount"
                                    id="loanAmount"
                                    onChange={this.loanAmountOnChange}
                                    className={loanAmountInputStyle}
                                >
                                    <option value="">Select</option>
                                    <option value="100">$100</option>
                                    <option value="200">$200</option>
                                    <option value="300">$300</option>
                                    <option value="400">$400</option>
                                    <option value="500">$500</option>
                                    <option value="600">$600</option>
                                    <option value="700">$700</option>
                                    <option value="800">$800</option>
                                    <option value="900">$900</option>
                                    <option value="1000">$1000</option>
                                </Input>

                                {loanAmountError !== "" ? (
                                    <FormFeedback style={{ display: "block" }}>
                                        {loanAmountError}
                                    </FormFeedback>
                                ) : (
                                        ""
                                    )}
                            </FormGroup>
                            <FormGroup>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    autoComplete="nope"
                                    placeholder="Email Address"
                                    onChange={this.emailAddressOnChange}
                                    className={emailInputStyle}
                                />
                                {emailError !== "" ? (
                                    <FormFeedback style={{ display: "block" }}>
                                        {emailError}
                                    </FormFeedback>
                                ) : (
                                        ""
                                    )}
                            </FormGroup>
                            <small>
                                By clicking [Get Cash Now!], you agree that this acts as your digital signature, that you accept the <Link to="/terms-of-use">Terms Of Use</Link>, and <Link to="/privacy-policy">Privacy Policy</Link>.
                            </small>
                            <Button
                                onClick={this.getCashNowOnClick}
                                type="button"
                                color="primary"
                                className="mt15"
                            >
                                Get Cash Now!
                            </Button>
                        </Form>
                    </Col>
                </Row>
                <Row className="cta-footer">
                    <Col>
                        <Link to="https://ssl.comodo.com" className="comodo_logo" target="_blank">
                            <img src="https://ssl.comodo.com/images/comodo_secure_seal_113x59_transp.png" className="comodo_logo__img" alt="SSL Certificate" width="113" height="59" />
                        </Link>
                    </Col>
                </Row>
            </div >
        );
    }
}

export default withRouter(CTAForm);
