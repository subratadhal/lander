import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Button, Form, Label, Input,
    InputGroup, InputGroupAddon, FormFeedback
} from "reactstrap";
import validator from "validator";
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            emailError: "",
            emailInputStyle: ""
        }
    }
    submitForgotPassword = e => {
        const email = document.getElementById("email");
        if (!validator.isEmail(email.value)) {
            if (validator.isEmpty(email.value)) {
                this.setState({
                    emailError: "Email address is required",
                    emailInputStyle: "error"
                });
            } else {
                this.setState({
                    emailError: "Not a valid email address",
                    emailInputStyle: "error"
                });
            }
        } else {
            this.setState({
                emailAddress: email.value,
                emailError: "",
                emailInputStyle: "success"
            });

        }
    };
    EmailAddressOnChange = e => {
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
                    emailInputStyle: ""
                });
            }
        }
    };
    render() {
        const emailError = this.state.emailError;
        const emailInputStyle = this.state.emailInputStyle;
        return (
            <div className="page-container">
                <Container>
                    <Row>
                        <Col sm="12" className="full-page-container">
                            <div className="box-container">
                                <h2>Change or Reset Password</h2>

                                <Form className="box-form">
                                    <p>Enter your email address and we’ll send you a link to reset your password.</p>
                                    <InputGroup className={emailInputStyle}>
                                        <Label for="exampleEmail">Email Address</Label>
                                        <InputGroupAddon addonType="prepend">
                                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAA6lBMVEUAAACZxCKVwh6WwB6VwSOVwR+WwR6Vwh+Uwh6VwSCWwiCTwiCqqgCUwB+UwSCZzDOUwSCVwh+WwR6VwR+PvyCdxCeVwR6VwSGVwSCUwyKWwx6VwR+VwB6VwR+TvyCVwR+VwR+UxB6UvBuVwR6VwiCUwiCUwR+XxSOq1SuVwB6VwSCA/wD//wCVwSCWwB+OxhyVwR+TwRyVwSCXvx2VwR+VvyCWwh+WwB+SvR2XvyCWxCGTxB2Ywh6YwRyVwR6Tvx2SwyGZzBqVwh+WwiCVwR+WwB+Uwx6Vwh+fvyCUwR6VwSCVwR+SvxsAAAAmufzqAAAATXRSTlMAHlRVHc13w0NnaEcDkpkFiJpmtRANsEbKJiLITcZAOscrE7lgWL0WBp+RAgGApwmtLXgsY0iiSSMgJxoqJcE0Lwq7P76zTLcIVlfMHKKJlI0AAAABYktHRACIBR1IAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH4wEVCzMqJSYOlgAAAMFJREFUKM+V0dcSgjAUBNBVkdixoMSKYsPee+/1/79HLAgIL+5LJmcymWQv8Gdsdoc5dgZO1ipOEJfbdIfHS0B8/gBnUF8wxCkOhCO8jqMxFng5BBr/ciKZguqIpzMfFrM5aA4pX3itxVIZeodcqdZQbzRbMDrAtjvtrrpRvdcHBsMR0O/pfUwnn4MMnWo+o/PvOxeUUZ1frnT/WhPp7ZvtztCDuI8+XT4cf2oTTmfFhYupz6vSp3X/NzCW87r/O/YHE4YPxFKhN0gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDEtMjFUMTA6NTE6NDIrMDE6MDDRV8K9AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTAxLTIxVDEwOjUxOjQyKzAxOjAwoAp6AQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=" alt="Email Address" />
                                        </InputGroupAddon>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="nope"
                                            placeholder="Email Address"
                                            onChange={this.EmailAddressOnChange}
                                        />
                                        {emailError !== "" ? (
                                            <FormFeedback style={{ display: "block" }}>
                                                {emailError}
                                            </FormFeedback>
                                        ) : (
                                                ""
                                            )}
                                    </InputGroup>
                                    <Button color="primary" onClick={this.submitForgotPassword}>Continue</Button>
                                </Form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default ForgotPassword;
