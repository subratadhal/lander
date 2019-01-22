import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Alert,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormFeedback,
} from "reactstrap";
import validator from "validator";
import NumberFormat from 'react-number-format';
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            firstNameInputStyle: "",
            firstNameError: "",
            lastName: "",
            lastNameInputStyle: "",
            lastNameError: "",
            zipCode: "",
            zipCodeError: "",
            zipCodeInputStyle: "",
            streetAddress: "",
            streetAddressError: "",
            streetAddressInputStyle: "",
            city: "",
            cityError: "",
            cityInputStyle: "",
            state: "",
            stateError: "",
            stateInputStyle: "",
            contactNumber: "",
            contactNumberError: "",
            contactNumberInputStyle: "",
            ownRent: "",
            ownRentError: "",
            ownRentInputStyle: "",
            annualIncome: "",
            annualIncomeError: "",
            annualIncomeInputStyle: "",
            employmentStatus: "",
            employmentStatusemploymentStatusError: "",
            employmentStatusInputStyle: "",
            businessOwner: "",
            businessOwnerError: "",
            businessOwnerInputStyle: "",
            veteranSurviving: "",
            veteranSurvivingError: "",
            veteranSurvivingInputStyle: "",
        }
    }
    FirstNameOnChange = e => {
        const firstName = e.target.value;
        if (validator.isEmpty(firstName)) {
            this.setState({
                firstNameError: "First Name is required",
                firstNameInputStyle: "error"
            });
        } else {
            var regexp1 = new RegExp("^[^0-9]+$");
            if (!regexp1.test(firstName)) {
                this.setState({
                    firstNameError: "Number not allowed",
                    firstNameInputStyle: "error"
                });
            } else {
                this.setState({
                    firstNameError: "",
                    firstName: firstName,
                    firstNameInputStyle: ""
                });
            }
        }
    };
    LastNameOnChange = e => {
        const lastName = e.target.value;
        if (validator.isEmpty(lastName)) {
            this.setState({
                lastNameError: "Last Name is required",
                lastNameInputStyle: "error"
            });
        } else {
            var regexp1 = new RegExp("^[^0-9]+$");
            if (!regexp1.test(lastName)) {
                this.setState({
                    lastNameError: "Number not allowed",
                    lastNameInputStyle: "error"
                });
            } else {
                this.setState({
                    lastNameError: "",
                    lastName: lastName,
                    lastNameInputStyle: ""
                });
            }
        }
    };
    zipCodeOnChange = e => {
        const zipCode = e.target.value;
        if (validator.isEmpty(zipCode)) {
            this.setState({
                zipCodeError: "Zip Code is required",
                zipCodeInputStyle: "error"
            });
        } else {
            var regexp1 = new RegExp("^[^0-9]+$");
            if (!regexp1.test(zipCode)) {
                if (validator.isLength(zipCode, { min: 5, max: undefined })) {
                    this.setState({
                        zipCodeError: "",
                        zipCode: zipCode,
                        zipCodeInputStyle: ""
                    });
                } else {
                    this.setState({
                        zipCodeError: "Please enter at least 5 characters.",
                        zipCodeInputStyle: "error"
                    });
                }
            } else {
                this.setState({
                    zipCodeError: "Please enter at number only.",
                    zipCodeInputStyle: "error"
                });
            }
        }
    };
    streetAddressOnChange = e => {
        const streetAddres = e.target.value;
        if (validator.isEmpty(streetAddres)) {
            this.setState({
                streetAddressError: "Street Addres is required",
                streetAddressInputStyle: "error"
            });
        } else {
            this.setState({
                streetAddressError: "",
                streetAddress: streetAddres,
                streetAddressInputStyle: ""
            });
        }
    };
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
                cityInputStyle: ""
            });
        }
    };
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
                stateInputStyle: ""
            });
        }
    };
    ContactNumberOnChange = (val) => {
        const contactNumber = val.value;
        if (validator.isEmpty(contactNumber)) {
            this.setState({
                contactNumberError: "Contact Number is required",
                contactNumber: contactNumber,
                contactNumberInputStyle: "error"
            });
        } else {
            if (contactNumber.length > 9) {
                this.setState({
                    contactNumberError: "",
                    contactNumber: contactNumber,
                    contactNumberInputStyle: ""
                });
            } else {
                this.setState({
                    contactNumberError: "This is not a valid contact numner",
                    contactNumber: contactNumber,
                    contactNumberInputStyle: "error"
                });
            }
        }
    };
    ownRentOnChange = e => {
        const ownRent = e.target.value;
        if (validator.isEmpty(ownRent)) {
            this.setState({
                ownRentError: "Own or Rent is required",
                ownRentInputStyle: "error"
            });
        } else {
            this.setState({
                ownRentError: "",
                ownRent: ownRent,
                ownRentInputStyle: ""
            });
        }
    }
    annualIncomeOnChange = e => {
        const annualIncome = e.target.value;
        if (validator.isEmpty(annualIncome)) {
            this.setState({
                annualIncomeError: "Annual Income is required",
                annualIncomeInputStyle: "error"
            });
        } else {
            this.setState({
                annualIncomeError: "",
                annualIncome: annualIncome,
                annualIncomeInputStyle: ""
            });
        }
    }
    employmentStatusOnChange = e => {
        const employmentStatus = e.target.value;
        if (validator.isEmpty(employmentStatus)) {
            this.setState({
                employmentStatusError: "Employment Status is required",
                employmentStatusInputStyle: "error"
            });
        } else {
            this.setState({
                employmentStatusError: "",
                employmentStatus: employmentStatus,
                employmentStatusInputStyle: ""
            });
        }
    }
    businessOwnerOnChange = e => {
        const businessOwner = e.target.value;
        if (validator.isEmpty(businessOwner)) {
            this.setState({
                businessOwnerError: "Business Owner is required",
                businessOwnerInputStyle: "error"
            });
        } else {
            this.setState({
                businessOwnerError: "",
                businessOwner: businessOwner,
                businessOwnerInputStyle: ""
            });
        }
    }
    veteranSurvivingOnChange = e => {
        const veteranSurviving = e.target.value;
        if (validator.isEmpty(veteranSurviving)) {
            this.setState({
                veteranSurvivingError: "Veteran Surviving is required",
                veteranSurvivingInputStyle: "error"
            });
        } else {
            this.setState({
                veteranSurvivingError: "",
                veteranSurviving: veteranSurviving,
                veteranSurvivingInputStyle: ""
            });
        }
    }
    saveChangesOnClick = e => {
        const firstName = document.getElementById("firstName");
        const lastName = document.getElementById("lastName");
        const streetAddress = document.getElementById("streetAddress");
        const city = document.getElementById("city");
        const state = document.getElementById("state");
        const zipCode = document.getElementById("zipCode");
        const contactNumber = document.getElementById("contactNumber");
        const ownRent = document.getElementById("ownRent");
        const annualIncome = document.getElementById("annualIncome");
        const employmentStatus = document.getElementById("employmentStatus");
        const businessOwner = document.getElementById("businessOwner");
        const veteranSurviving = document.getElementById("veteranSurviving");
        if (
            validator.isEmpty(firstName.value) ||
            validator.isEmpty(lastName.value) ||
            validator.isEmpty(streetAddress.value) ||
            validator.isEmpty(city.value) ||
            validator.isEmpty(state.value) ||
            validator.isEmpty(zipCode.value) ||
            validator.isEmpty(contactNumber.value) ||
            validator.isEmpty(ownRent.value) ||
            validator.isEmpty(annualIncome.value) ||
            validator.isEmpty(employmentStatus.value) ||
            validator.isEmpty(businessOwner.value) ||
            validator.isEmpty(veteranSurviving.value)

        ) {
            if (validator.isEmpty(firstName.value)) {
                this.setState({
                    firstNameError: "First Name is required",
                    firstNameInputStyle: "error"
                });
            }
            if (validator.isEmpty(lastName.value)) {
                this.setState({
                    lastNameError: "Last Name is required",
                    lastNameInputStyle: "error"
                });
            }
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
            if (validator.isEmpty(zipCode.value)) {
                this.setState({
                    zipCodeError: "Zip Code is required",
                    zipCodeInputStyle: "error"
                });
            }
            if (validator.isEmpty(contactNumber.value)) {
                this.setState({
                    contactNumberError: "Contact Number is required",
                    contactNumberInputStyle: "error"
                });
            }
            if (validator.isEmpty(ownRent.value)) {
                this.setState({
                    ownRentError: "Own or Rent is required",
                    ownRentInputStyle: "error"
                });
            }
            if (validator.isEmpty(annualIncome.value)) {
                this.setState({
                    annualIncomeError: "Annual Income is required",
                    annualIncomeInputStyle: "error"
                });
            }
        } else {
            this.setState({
                firstName: firstName.value,
                firstNameInputStyle: "",
                firstNameError: "",
                lastName: lastName.value,
                lastNameInputStyle: "",
                lastNameError: "",
                zipCode: zipCode.value,
                zipCodeError: "",
                zipCodeInputStyle: "",
                contactNumber: contactNumber.value,
                contactNumberError: "",
                contactNumberInputStyle: "",
                ownRent: ownRent.value,
                ownRentError: "",
                ownRentInputStyle: "",
                annualIncome: annualIncome.value,
                annualIncomeError: "",
                annualIncomeInputStyle: "",
                employmentStatus: employmentStatus.value,
                employmentStatusemploymentStatusError: "",
                employmentStatusInputStyle: "",
                businessOwner: businessOwner.value,
                businessOwnerError: "",
                businessOwnerInputStyle: "",
                veteranSurviving: veteranSurviving.value,
                veteranSurvivingError: "",
                veteranSurvivingInputStyle: "",
                streetAddressError: "",
                streetAddress: streetAddress.value,
                streetAddressInputStyle: "",
                cityError: "",
                city: city.value,
                cityInputStyle: "",
                stateError: "",
                state: state.value,
                stateInputStyle: ""
            });
        }
    }
    render() {
        console.log(this.state);
        const firstNameError = this.state.firstNameError;
        const firstNameInputStyle = this.state.firstNameInputStyle;
        const lastNameError = this.state.lastNameError;
        const lastNameInputStyle = this.state.lastNameInputStyle;
        const zipCodeError = this.state.zipCodeError;
        const zipCodeInputStyle = this.state.zipCodeInputStyle;
        const streetAddressError = this.state.streetAddressError;
        const streetAddressInputStyle = this.state.streetAddressInputStyle;
        const cityError = this.state.cityError;
        const cityInputStyle = this.state.cityInputStyle;
        const stateError = this.state.stateError;
        const stateInputStyle = this.state.stateInputStyle;
        const contactNumberError = this.state.contactNumberError;
        const contactNumberInputStyle = this.state.contactNumberInputStyle;
        return (
            <div className="account-pages">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h1 className="pagetitle">Account Settings</h1>
                        </Col>
                        <Col sm="12">
                            <Alert color="info">
                                We ask the followint personal information. not to be nosey, but so we can confidently provide you with the best credit and loan information possible.
                            </Alert>
                        </Col>
                        <Col sm="12">
                            <Form>
                                <div className="wizard ">
                                    <div className="wizard-header">Your Name</div>
                                    <div className="wizard-body max400">

                                        <FormGroup>
                                            <Label for="firstName" className="bold">
                                                First Name
                        </Label>
                                            <Input
                                                type="text"
                                                name="firstName"
                                                id="firstName"
                                                autoComplete="nope"
                                                placeholder="First Name"
                                                onChange={this.FirstNameOnChange}
                                                className={firstNameInputStyle}

                                            />
                                            {firstNameError !== "" ? (
                                                <FormFeedback style={{ display: "block" }}>
                                                    {firstNameError}
                                                </FormFeedback>
                                            ) : (
                                                    ""
                                                )}
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="lastName" className="bold">
                                                Last Name
                        </Label>
                                            <Input
                                                type="text"
                                                name="lastName"
                                                id="lastName"
                                                autoComplete="nope"
                                                placeholder="Last Name"
                                                onChange={this.LastNameOnChange}
                                                className={lastNameInputStyle}

                                            />
                                            {lastNameError !== "" ? (
                                                <FormFeedback style={{ display: "block" }}>
                                                    {lastNameError}
                                                </FormFeedback>
                                            ) : (
                                                    ""
                                                )}
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="wizard ">
                                    <div className="wizard-header">Your Address and Phone Number</div>
                                    <div className="wizard-body max400">
                                        <FormGroup>
                                            <Row>
                                                <Col>
                                                    <Label for="streetAddress" className="bold">
                                                        Street Address
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="streetAddress"
                                                        id="streetAddress"
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

                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs="12" sm="6" className="mt15">
                                                    <Label for="city" className="bold">
                                                        City
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        name="city"
                                                        id="city"
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

                                                </Col>
                                                <Col xs="12" sm="6" className="mt15">
                                                    <Label for="state" className="bold">
                                                        State
                                                    </Label>
                                                    <Input
                                                        type="select"
                                                        name="state"
                                                        id="state"
                                                        onChange={this.stateOnChange}
                                                        className={stateInputStyle}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="AL">Alabama</option>
                                                        <option value="AK">Alaska</option>
                                                        <option value="AZ">Arizona</option>
                                                        <option value="AR">Arkansas</option>
                                                        <option value="CA">California</option>
                                                        <option value="CO">Colorado</option>
                                                        <option value="CT">Connecticut</option>
                                                        <option value="DE">Delaware</option>
                                                        <option value="DC">District of Columbia</option>
                                                        <option value="FL">Florida</option>
                                                        <option value="GA">Georgia</option>
                                                        <option value="HI">Hawaii</option>
                                                        <option value="ID">Idaho</option>
                                                        <option value="IL">Illinois</option>
                                                        <option value="IN">Indiana</option>
                                                        <option value="IA">Iowa</option>
                                                        <option value="KS">Kansas</option>
                                                        <option value="KY">Kentucky</option>
                                                        <option value="LA">Louisiana</option>
                                                        <option value="ME">Maine</option>
                                                        <option value="MD">Maryland</option>
                                                        <option value="MA">Massachusetts</option>
                                                        <option value="MI">Michigan</option>
                                                        <option value="MN">Minnesota</option>
                                                        <option value="MS">Mississippi</option>
                                                        <option value="MO">Missouri</option>
                                                        <option value="MT">Montana</option>
                                                        <option value="NE">Nebraska</option>
                                                        <option value="NV">Nevada</option>
                                                        <option value="NH">New Hampshire</option>
                                                        <option value="NJ">New Jersey</option>
                                                        <option value="NM">New Mexico</option>
                                                        <option value="NY">New York</option>
                                                        <option value="NC">North Carolina</option>
                                                        <option value="ND">North Dakota</option>
                                                        <option value="OH">Ohio</option>
                                                        <option value="OK">Oklahoma</option>
                                                        <option value="OR">Oregon</option>
                                                        <option value="PA">Pennsylvania</option>
                                                        <option value="RI">Rhode Island</option>
                                                        <option value="SC">South Carolina</option>
                                                        <option value="SD">South Dakota</option>
                                                        <option value="TN">Tennessee</option>
                                                        <option value="TX">Texas</option>
                                                        <option value="UT">Utah</option>
                                                        <option value="VT">Vermont</option>
                                                        <option value="VA">Virginia</option>
                                                        <option value="WA">Washington</option>
                                                        <option value="WV">West Virginia</option>
                                                        <option value="WI">Wisconsin</option>
                                                        <option value="WY">Wyoming</option>
                                                    </Input>

                                                    {stateError !== "" ? (
                                                        <FormFeedback style={{ display: "block" }}>
                                                            {stateError}
                                                        </FormFeedback>
                                                    ) : (
                                                            ""
                                                        )}

                                                </Col>
                                            </Row>
                                            <Row >
                                                <Col xs="12" sm="6" className="mt15">

                                                    <Label for="email" className="bold">
                                                        Zip Code
                                                    </Label>
                                                    <Input
                                                        type="text"
                                                        pattern="[0-9]{5}"
                                                        name="zipCode"
                                                        id="zipCode"
                                                        placeholder="Zip Code"
                                                        onChange={this.zipCodeOnChange}
                                                        className={zipCodeInputStyle}
                                                    />
                                                    {zipCodeError !== "" ? (
                                                        <FormFeedback style={{ display: "block" }}>
                                                            {zipCodeError}
                                                        </FormFeedback>
                                                    ) : (
                                                            ""
                                                        )}
                                                </Col>
                                                <Col xs="12" sm="6" className="mt15">
                                                    <Label for="contactNumber" className="bold">
                                                        Phone Number
                                                    </Label>
                                                    <NumberFormat
                                                        id="contactNumber"
                                                        placeholder="xxx-xxx-xxxx"
                                                        onValueChange={this.ContactNumberOnChange}
                                                        format="###-###-####"
                                                        className={
                                                            "form-control " +
                                                            (contactNumberInputStyle
                                                                ? contactNumberInputStyle
                                                                : " ")
                                                        }
                                                    />
                                                    {contactNumberError !== "" ? (
                                                        <FormFeedback style={{ display: "block" }}>
                                                            {contactNumberError}
                                                        </FormFeedback>
                                                    ) : (
                                                            ""
                                                        )}
                                                </Col>
                                            </Row>
                                            <Row className="mt15">
                                                <Col>
                                                    <Label for="ownRent" className="bold">
                                                        Own or Rent?
                                                    </Label>
                                                    <Input
                                                        type="select"
                                                        name="ownRent"
                                                        id="ownRent"
                                                        onChange={this.ownRentOnChange}
                                                        className=""
                                                    >
                                                        <option value="Own">Own</option>
                                                        <option value="Rent">Rent</option>
                                                    </Input>
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="wizard ">
                                    <div className="wizard-header">Other Credit Information</div>
                                    <div className="wizard-body max400">
                                        <FormGroup>
                                            <Label for="annualIncome" className="bold">
                                                Annual Income
                                            </Label>
                                            <Input
                                                type="select"
                                                name="annualIncome"
                                                id="annualIncome"
                                                onChange={this.annualIncomeOnChange}
                                                className=""
                                            >
                                                <option value="500">500</option>
                                                <option value="1000">1000</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="employmentStatus" className="bold">
                                                Employment Status
                                            </Label>
                                            <Input
                                                type="select"
                                                name="employmentStatus"
                                                id="employmentStatus"
                                                onChange={this.employmentStatusOnChange}
                                                className=""
                                            >
                                                <option value="Employment">Employment</option>
                                                <option value="Benefits">Benefits</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="businessOwner" className="bold">
                                                Are you a business owner?
                                            </Label>
                                            <Input
                                                type="select"
                                                name="businessOwner"
                                                id="businessOwner"
                                                onChange={this.businessOwnerOnChange}
                                                className=""
                                            >
                                                <option value="yes">yes</option>
                                                <option value="no">no</option>
                                            </Input>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="veteranSurviving" className="bold">
                                                Veteran or surviving spouse of a veteran?
                                            </Label>
                                            <Input
                                                type="select"
                                                name="veteranSurviving"
                                                id="veteranSurviving"
                                                onChange={this.veteranSurvivingOnChange}
                                                className=""
                                            >
                                                <option value="yes">yes</option>
                                                <option value="no">no</option>
                                            </Input>
                                        </FormGroup>
                                    </div>
                                </div>
                                <div className="wizard ">
                                    <div className="wizard-body max400">
                                        <Button
                                            onClick={this.saveChangesOnClick}
                                            type="button"
                                            color="primary"
                                            className="mt15"
                                        >
                                            SAVE CHANGES
                                        </Button>
                                    </div>
                                </div>
                            </Form>

                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Profile;
