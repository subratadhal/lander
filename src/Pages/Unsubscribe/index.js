import React, { Component } from "react";
import validator from "validator";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback,
} from "reactstrap";
import NumberFormat from 'react-number-format';
class Unsubscribe extends Component {
  state = {
    phoneNumber: "",
    phoneNumberError: "",
    phoneNumberInputStyle: "",
    emailAddress: "",
    emailError: "",
    emailInputStyle: "",
    streetAddress: "",
    streetAddressError: "",
    streetAddressInputStyle: "",
    city: "",
    cityError: "",
    cityInputStyle: "",
    state: "",
    stateError: "",
    stateInputStyle: "",
    zip: "",
    zipError: "",
    zipInputStyle: ""


  }

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
  emailOnClick = e => {
    const email = document.getElementById("email");
    if (validator.isEmpty(email.value)) {
      this.setState({
        emailError: "Email address is required",
        emailInputStyle: "error"
      });
    } else {
      if (validator.isEmail(email.value)) {
        this.setState({
          emailError: "",
          emailAddress: email.value,
          emailInputStyle: "success"
        });

      } else {
        this.setState({
          emailError: "Not a valid email address",
          emailInputStyle: "error"
        });
      }
    }
  }
  phoneNumberOnClick = e => {
    const phoneNumber = this.state.phoneNumber;
    if (validator.isEmpty(phoneNumber)) {
      this.setState({
        phoneNumberError: "Phone Number is required",
        phoneNumber: phoneNumber,
        phoneNumberInputStyle: "error"
      });
    } else {
      if (phoneNumber.length > 9) {
        this.setState({
          phoneNumberError: "",
          phoneNumber: phoneNumber,
          phoneNumberInputStyle: "success"
        });
      } else {
        this.setState({
          phoneNumberError: "This is not a valid phone numner",
          phoneNumber: phoneNumber,
          phoneNumberInputStyle: "error"
        });
      }
    }
  };
  phoneNumberOnChange = (val) => {
    const phoneNumber = val.value;
    if (validator.isEmpty(phoneNumber)) {
      this.setState({
        phoneNumberError: "Contact Number is required",
        phoneNumber: phoneNumber,
        phoneNumberInputStyle: "error"
      });
    } else {
      if (phoneNumber.length > 9) {
        this.setState({
          phoneNumberError: "",
          phoneNumber: phoneNumber,
          phoneNumberInputStyle: "success"
        });
      } else {
        this.setState({
          phoneNumberError: "",
          phoneNumber: phoneNumber,
          phoneNumberInputStyle: ""
        });
      }
    }
  };
  streetAddressOnChange = e => {
    const streetAddress = e.target.value;
    if (validator.isEmpty(streetAddress)) {
      this.setState({
        streetAddressError: "Street Address is required",
        streetAddressInputStyle: "error"
      });
    } else {
      this.setState({
        streetAddressError: "",
        streetAddress: streetAddress,
        streetAddressInputStyle: "success"
      });
    }
  }
  cityOnChange = e => {
    const city = e.target.value;
    if (validator.isEmpty(city)) {
      this.setState({
        cityError: "City is required",
        cityInputStyle: "error"
      });
    } else {
      this.setState({
        cityError: "",
        city: city,
        cityInputStyle: "success"
      });
    }
  }
  stateOnChange = e => {
    const state = e.target.value;
    if (validator.isEmpty(state)) {
      this.setState({
        stateError: "State is required",
        stateInputStyle: "error"
      });
    } else {
      this.setState({
        stateError: "",
        state: state,
        stateInputStyle: "success"
      });
    }
  }
  zipOnChange = e => {
    const zip = e.target.value;
    if (validator.isEmpty(zip)) {
      this.setState({
        zipError: "Zip is required",
        zipInputStyle: "error"
      });
    } else {
      this.setState({
        zipError: "",
        zip: zip,
        zipInputStyle: "success"
      });
    }
  }
  addressSubmitOnClick = e => {
    const streetAddress = document.getElementById("streetAddress");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zip");

    if (
      validator.isEmpty(streetAddress.value) ||
      validator.isEmpty(city.value) ||
      validator.isEmpty(state.value) ||
      validator.isEmpty(zip.value)
    ) {
      if (validator.isEmpty(streetAddress.value)) {
        this.setState({
          streetAddressError: "Street Addres is required",
          streetAddressInputStyle: "error"
        });
      }
      if (validator.isEmpty(city.value)) {
        this.setState({
          cityError: "City is required",
          cityInputStyle: "error"
        });
      }
      if (validator.isEmpty(state.value)) {
        this.setState({
          stateError: "State is required",
          stateInputStyle: "error"
        });
      }
      if (validator.isEmpty(zip.value)) {
        this.setState({
          zipError: "Zip is required",
          zipInputStyle: "error"
        });
      }
    } else {
      this.setState({
        streetAddressError: "",
        streetAddress: streetAddress.value,
        streetAddressInputStyle: "success",
        cityError: "",
        city: city.value,
        cityInputStyle: "success",
        stateError: "",
        state: state.value,
        stateInputStyle: "success",
        zipError: "",
        zip: zip.value,
        zipInputStyle: "success"
      });
    }
  }
  render() {
    const emailError = this.state.emailError;
    const emailInputStyle = this.state.emailInputStyle;
    const phoneNumberError = this.state.phoneNumberError;
    const phoneNumberInputStyle = this.state.phoneNumberInputStyle;

    const streetAddressError = this.state.streetAddressError;
    const streetAddressInputStyle = this.state.streetAddressInputStyle;
    const cityError = this.state.cityError;
    const cityInputStyle = this.state.cityInputStyle;
    const stateError = this.state.stateError;
    const stateInputStyle = this.state.stateInputStyle;
    const zipError = this.state.zipError;
    const zipInputStyle = this.state.zipInputStyle;
    return (
      <div className="page-container">
        <Container>
          <Row>
            <Col xs="12" align="center"><h1>Unsubscribe</h1></Col>
            <Col sm="4">
              <div className="unsubscribe">
                <Form>
                  <FormGroup>
                    <Label for="email" className="bold">
                      Please enter Email for unsubscribe:
                  </Label>
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
                  <Button
                    onClick={this.emailOnClick}
                    type="button"
                    color="primary"
                    className="mt15"
                  >
                    Opt Out Email
                </Button>
                </Form>
              </div>
            </Col>
            <Col sm="4">
              <div className="unsubscribe">
                <Form>
                  <FormGroup>
                    <Label for="email" className="bold">
                      Please enter Phone Number for unsubscribe:
                  </Label>
                    <NumberFormat
                      id="phoneNumber"
                      placeholder="xxx-xxx-xxxx"
                      onValueChange={this.phoneNumberOnChange}
                      format="###-###-####"
                      className={
                        "form-control " +
                        (phoneNumberInputStyle
                          ? phoneNumberInputStyle
                          : " ")
                      }
                    />
                    {phoneNumberError !== "" ? (
                      <FormFeedback style={{ display: "block" }}>
                        {phoneNumberError}
                      </FormFeedback>
                    ) : (
                        ""
                      )}
                  </FormGroup>
                  <Button
                    onClick={this.phoneNumberOnClick}
                    type="button"
                    color="primary"
                    className="mt15"
                  >
                    Opt Out Phone #
                </Button>
                </Form>
              </div>
            </Col>
            <Col sm="4">
              <div className="unsubscribe">
                <Form>
                  <FormGroup>
                    <Label for="streetAddress" className="bold">
                      Please enter Address for unsubscribe:
                    </Label>
                    <Input
                      type="text"
                      name="streetAddress"
                      id="streetAddress"
                      autoComplete="nope"
                      placeholder="Street Address"
                      onChange={this.streetAddressOnChange}
                      className={streetAddressInputStyle}
                    />
                    {streetAddressError !== "" ? (
                      <FormFeedback style={{ display: "block" }}>
                        {streetAddressError}
                      </FormFeedback>
                    ) : (
                        ""
                      )}
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="nope"
                      placeholder="City"
                      onChange={this.cityOnChange}
                      className={cityInputStyle}
                    />
                    {cityError !== "" ? (
                      <FormFeedback style={{ display: "block" }}>
                        {cityError}
                      </FormFeedback>
                    ) : (
                        ""
                      )}
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      autoComplete="nope"
                      placeholder="State"
                      onChange={this.stateOnChange}
                      className={stateInputStyle}
                    />
                    {stateError !== "" ? (
                      <FormFeedback style={{ display: "block" }}>
                        {stateError}
                      </FormFeedback>
                    ) : (
                        ""
                      )}
                  </FormGroup>
                  <FormGroup>
                    <Input
                      type="number"
                      name="zip"
                      id="zip"
                      autoComplete="nope"
                      placeholder="Zip Code"
                      onChange={this.zipOnChange}
                      className={zipInputStyle}
                    />
                    {zipError !== "" ? (
                      <FormFeedback style={{ display: "block" }}>
                        {zipError}
                      </FormFeedback>
                    ) : (
                        ""
                      )}
                  </FormGroup>
                  <Button
                    onClick={this.addressSubmitOnClick}
                    type="button"
                    color="primary"
                    className="mt15"
                  >
                    Opt Out Email
                </Button>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Unsubscribe;
