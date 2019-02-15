import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Button, Form, Label, Input,
    InputGroup, InputGroupAddon, FormFeedback
} from "reactstrap";
import validator from "validator";
import { Link, Redirect } from "react-router-dom";
import generator from 'generate-password';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailAddress: "",
            emailError: "",
            emailInputStyle: "",
            password: "",
            passwordError: "",
            passwordInputStyle: "",
            passwordSuggestion: '',
            passwordSuggestionWrapper: false,
            redirectToReferrer: false
        }
    }
    loginOnClick = e => {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        if (
            !validator.isEmail(email.value) ||
            validator.isEmpty(password.value)
        ) {
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
            if (validator.isEmpty(password.value)) {
                this.setState({
                    passwordError: "Password is required",
                    passwordInputStyle: "error"
                });
            }
        } else {
            this.setState({
                emailAddress: email.value,
                emailError: "",
                emailInputStyle: "success",
                password: password.value,
                passwordError: "",
                passwordInputStyle: "sucess"
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
    passwordOnClick = e => {
        e.stopPropagation();
        this.setState({
            passwordSuggestionWrapper: true
        });
    }
    passwordMuskOnClick = e => {
        e.stopPropagation();
        this.setState({
            password: this.state.passwordSuggestion,
            passwordSuggestionWrapper: false,
            passwordError: "",
            passwordInputStyle: "success"
        });
    }
    passwordOnChange = e => {
        const password = e.target.value;
        if (validator.isEmpty(password)) {
            this.setState({
                passwordError: "Password is required",
                passwordInputStyle: "error",
                password: "",
            });
        } else {
            this.setState({
                passwordError: "",
                password: password,
                passwordInputStyle: "success"
            });
        }
    };
    passwordResetOnClick = () => {
        this.setState({
            passwordSuggestion: generator.generate({
                length: 15,
                numbers: true,
                symbols: true,
                uppercase: true
            })
        });
    }
    componentDidMount() {
        this.passwordResetOnClick();
        document.body.addEventListener('click', this.bodyOnClick);
    }
    bodyOnClick = e => {
        var class_name = e.target.classList[0];
        if ((class_name === "password-suggestion") || (class_name === "ps-password") || (class_name === "ps-reset") || (class_name === "ps-label")) {
        } else {
            this.setState({
                passwordSuggestionWrapper: false
            });
        }
    }

    render() {
        console.log(this.state);
        const emailError = this.state.emailError;
        const emailInputStyle = this.state.emailInputStyle;
        const password = this.state.password;
        const passwordError = this.state.passwordError;
        const passwordInputStyle = this.state.passwordInputStyle;
        const passwordSuggestion = this.state.passwordSuggestion;
        const passwordSuggestionWrapper = this.state.passwordSuggestionWrapper;

        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div className="page-container" onClick={this.bodyOnClick}>
                <Container>
                    <Row>
                        <Col sm="12" className="full-page-container">
                            <div className="box-container">
                                <h2>Sign in to see your savings</h2>
                                <Form className="box-form">
                                    <InputGroup className={emailInputStyle}>
                                        <Label for="email">Email Address</Label>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="email-icon"></span>
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
                                    <InputGroup className={passwordInputStyle}>
                                        <Label for="password">Password</Label>
                                        <InputGroupAddon addonType="prepend">
                                            <span className="password-icon"></span>
                                        </InputGroupAddon>
                                        <Input
                                            type="password"
                                            name="password"
                                            id="password"
                                            autoComplete="nope"
                                            placeholder="Password"
                                            onChange={this.passwordOnChange}
                                            onClick={this.passwordOnClick}
                                            value={password}
                                        />
                                        {passwordError !== "" ? (
                                            <FormFeedback style={{ display: "block" }}>
                                                {passwordError}
                                            </FormFeedback>
                                        ) : (
                                                ""
                                            )}

                                    </InputGroup>
                                    {passwordSuggestionWrapper ? (
                                        <div className="password-suggestion">
                                            <span className="ps-password" onClick={this.passwordMuskOnClick} >{passwordSuggestion}</span>
                                            <span className="ps-reset" onClick={this.passwordResetOnClick}></span>
                                            <span className="ps-label">Suggested</span>
                                        </div>
                                    ) : (
                                            ""
                                        )}
                                    <Button color="primary" onClick={this.login}>Log In</Button>{' '}

                                    {/* <p>New to LendingTree?  <Link to="/">Create a free account</Link></p>
                                    <hr /> */}
                                    <p><Link to="forgot-password">I forgot my password</Link></p>
                                </Form>

                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Login;
