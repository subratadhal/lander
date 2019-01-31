import React, { Component } from "react";
import {
    Container,
    Row,
    Col,
    Button,
    FormGroup,
    Label,
    Input,
    FormFeedback,
    InputGroup,
    InputGroupAddon
} from "reactstrap";
import validator from "validator";
import NumberFormat from 'react-number-format';
import TooltipItem from "../../Common/Tooltip/tooltipitem";

class NewPersonalLoan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formTypeEdit: false,
            loanPurpose: "",
            loanPurposeError: "",
            loanPurposeInputStyle: "",
            requestedLoanAmount: "",
            requestedLoanAmountError: "",
            requestedLoanAmountInputStyle: "",
            residence: "",
            residenceError: "",
            residenceInputStyle: "",
            ssn: "",
            ssnError: "",
            ssnInputStyle: "",
            confirmInfo: "",
            confirmInfoInputStyle: "",
            confirmInfoError: "",

            firstName: "",
            firstNameInputStyle: "",
            firstNameError: "",
            lastName: "",
            lastNameInputStyle: "",
            lastNameError: "",
            contactNumber: "",
            contactNumberError: "",
            contactNumberInputStyle: "",
            month: "",
            monthError: "",
            monthInputStyle: "",
            day: "",
            dayError: "",
            dayInputStyle: "",
            year: "",
            yearError: "",
            yearInputStyle: "",
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
            employmentStatus: "",
            employmentStatusError: "",
            employmentStatusInputStyle: "",
            preTaxIncome: "",
            preTaxIncomeError: "",
            preTaxIncomeInputStyle: "",
            tooltips: [
                {
                    id: 1,
                    text: 'By providing a phone number, you are agreeing that LendingTree, its Network Lenders, and/or partners may contact you at this number, or another number that you later provide. You also agree to receive calls and messages from automated dialing systems and/or by pre-recorded message, and text messages (where applicable) at these numbers. Normal cell phone charges may apply if you provide a cellular number. You may continue with our services without providing a phone number by calling x-xxx-xxx-xxxx.'
                },
                {
                    id: 2,
                    text: "Don't sweat it, your date of birth is secure with us. We use it to verify your identity."
                },
                {
                    id: 3,
                    text: 'This is your gross annual pay. If applicable, include self-employment salary. If you are on total commission, provide an annual average. Increase non-taxable income/benefits by 25%. '
                },
                {
                    id: 4,
                    text: "Don't sweat it, your SSN is secure with us. We use it to verify your identity and do a 'soft pull' of credit that in no way affects your credit score."
                }
            ]
        }
    }

    loanPurposeOnChange = e => {
        const loanPurpose = e.target.value;
        if (validator.isEmpty(loanPurpose)) {
            this.setState({
                loanPurposeError: "Please provide your purpose of loan.",
                loanPurposeInputStyle: "error",
                loanPurpose: "",
            });
        } else {
            this.setState({
                loanPurposeError: "",
                loanPurpose: loanPurpose,
                loanPurposeInputStyle: ""
            });
        }
    }
    requestedLoanAmountOnChange = e => {
        const requestedLoanAmount = e.target.value;
        if (validator.isEmpty(requestedLoanAmount)) {
            this.setState({
                requestedLoanAmountError: "Please enter an amount between $1,000 and $50,000.",
                requestedLoanAmountInputStyle: "error",
                requestedLoanAmount: "",
            });
        } else {
            this.setState({
                requestedLoanAmountError: "",
                requestedLoanAmount: requestedLoanAmount,
                requestedLoanAmountInputStyle: ""
            });
        }
    }
    residenceOnChange = e => {
        const residence = e.target.value;
        if (validator.isEmpty(residence)) {
            this.setState({
                residenceError: "Please provide your type of residence.",
                residenceInputStyle: "error",
                residenceAmount: "",
            });
        } else {
            this.setState({
                residenceError: "",
                residence: residence,
                residenceInputStyle: ""
            });
        }
    }
    ssnOnChange = (val) => {
        const ssn = val.value;
        if (validator.isEmpty(ssn)) {
            this.setState({
                ssnError: "Please enter a valid social security number.",
                ssn: ssn,
                ssnInputStyle: "error"
            });
        } else {
            if (ssn.length > 8) {
                this.setState({
                    ssnError: "",
                    ssn: ssn,
                    ssnInputStyle: ""
                });
            } else {
                this.setState({
                    ssnError: "Please enter a valid social security number.",
                    ssn: ssn,
                    ssnInputStyle: "error"
                });
            }
        }
    }
    confirmInfoOnChange = e => {
        const confirmInfo = e.target.checked;
        console.log('confirmInfo', confirmInfo);
        if (confirmInfo) {
            this.setState({
                confirmInfoError: "",
                confirmInfo: confirmInfo,
                confirmInfoInputStyle: ""
            });
        } else {
            this.setState({
                confirmInfoError: "Please confirm your information.",
                confirmInfoInputStyle: "error",
                confirmInfo: "",
            });
        }
    }
    fromTypeChangeOnClick = e => {
        this.setState({
            formTypeEdit: true
        });
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
                    firstNameError: "",
                    firstNameInputStyle: ""
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
                    lastNameError: "",
                    lastNameInputStyle: ""
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
                    contactNumberError: "",
                    contactNumber: contactNumber,
                    contactNumberInputStyle: ""
                });
            }
        }
    };
    MonthOnChange = e => {
        const month = e.target.value;
        if (validator.isEmpty(month)) {
            this.setState({
                monthError: "Month is required",
                monthInputStyle: "error"
            });
        } else {
            this.setState({
                monthError: "",
                month: month,
                monthInputStyle: ""
            });
        }
    };
    DayOnChange = e => {
        const day = e.target.value;
        if (validator.isEmpty(day)) {
            this.setState({
                dayError: "Day is required",
                dayInputStyle: "error"
            });
        } else {
            this.setState({
                dayError: "",
                day: day,
                dayInputStyle: ""
            });
        }
    };
    YearOnChange = e => {
        const year = e.target.value;
        if (validator.isEmpty(year)) {
            this.setState({
                yearError: "Year is required",
                yearInputStyle: "error"
            });
        } else {
            this.setState({
                yearError: "",
                year: year,
                yearInputStyle: ""
            });
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
                        zipCodeError: "",
                        zipCodeInputStyle: ""
                    });
                }
            } else {
                this.setState({
                    zipCodeError: "",
                    zipCodeInputStyle: ""
                });
            }
        }
    };
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
    preTaxIncomeOnChange = e => {
        const preTaxIncome = e.target.value;
        if (validator.isEmpty(preTaxIncome)) {
            this.setState({
                preTaxIncomeError: "Please enter an income.",
                preTaxIncomeInputStyle: "error",
                preTaxIncome: "",
            });
        } else {
            this.setState({
                preTaxIncomeError: "",
                preTaxIncome: preTaxIncome,
                preTaxIncomeInputStyle: ""
            });
        }
    }
    viewMyOffersOnClick = e => {

        if (!this.state.formTypeEdit) {
            const loanPurpose = document.getElementById("loanPurpose");
            const requestedLoanAmount = document.getElementById("requestedLoanAmount");
            const residence = document.getElementById("residence");
            const ssn = document.getElementById("ssn");
            const confirmInfo = document.getElementById("confirmInfo").checked;

            if (
                validator.isEmpty(loanPurpose.value) ||
                validator.isEmpty(requestedLoanAmount.value) ||
                validator.isEmpty(residence.value) ||
                validator.isEmpty(ssn.value) || (confirmInfo === false)
            ) {
                if (validator.isEmpty(loanPurpose.value)) {
                    this.setState({
                        loanPurposeError: "Please provide your purpose of loan",
                        loanPurposeInputStyle: "error"
                    });
                }
                if (validator.isEmpty(requestedLoanAmount.value)) {
                    this.setState({
                        requestedLoanAmountError: "Please enter an amount between $1,000 and $50,000.",
                        requestedLoanAmountInputStyle: "error"
                    });
                }
                if (validator.isEmpty(residence.value)) {
                    this.setState({
                        residenceError: "Please provide your type of residence.",
                        residenceInputStyle: "error"
                    });
                }
                if (validator.isEmpty(ssn.value)) {
                    this.setState({
                        ssnError: "Please enter a valid social security number.",
                        ssnInputStyle: "error"
                    });
                }
                if (!confirmInfo) {
                    this.setState({
                        confirmInfoError: "Please confirm your information.",
                        confirmInfoInputStyle: "error"
                    });
                }

            } else {
                this.setState({
                    loanPurpose: loanPurpose.value,
                    loanPurposeError: "",
                    loanPurposeInputStyle: "",
                    requestedLoanAmount: requestedLoanAmount.value,
                    requestedLoanAmountError: "",
                    requestedLoanAmountInputStyle: "",
                    residence: residence.value,
                    residenceError: "",
                    residenceInputStyle: "",
                    ssn: ssn.value,
                    ssnError: "",
                    ssnInputStyle: "",
                    confirmInfo: confirmInfo.value,
                    confirmInfoInputStyle: "",
                    confirmInfoError: "",
                });
            }
        } else {
            console.log('else');
            const loanPurpose = document.getElementById("loanPurpose");
            const requestedLoanAmount = document.getElementById("requestedLoanAmount");

            const firstName = document.getElementById("firstName");
            const lastName = document.getElementById("lastName");
            const contactNumber = document.getElementById("contactNumber");
            const month = document.getElementById("month");
            const day = document.getElementById("day");
            const year = document.getElementById("year");
            const zipCode = document.getElementById("zipCode");
            const streetAddress = document.getElementById("streetAddress");
            const city = document.getElementById("city");
            const state = document.getElementById("state");

            const employmentStatus = document.getElementById("employmentStatus");
            const preTaxIncome = document.getElementById("preTaxIncome");

            const residence = document.getElementById("residence");
            const ssn = document.getElementById("ssn");

            if (
                validator.isEmpty(loanPurpose.value) ||
                validator.isEmpty(requestedLoanAmount.value) ||
                validator.isEmpty(residence.value) ||
                validator.isEmpty(firstName.value) ||
                validator.isEmpty(lastName.value) ||
                validator.isEmpty(contactNumber.value) ||
                validator.isEmpty(month.value) ||
                validator.isEmpty(day.value) ||
                validator.isEmpty(year.value) ||
                validator.isEmpty(zipCode.value) ||
                validator.isEmpty(streetAddress.value) ||
                validator.isEmpty(city.value) ||
                validator.isEmpty(state.value) ||
                validator.isEmpty(employmentStatus.value) ||
                validator.isEmpty(preTaxIncome.value)

            ) {
                if (validator.isEmpty(loanPurpose.value)) {
                    this.setState({
                        loanPurposeError: "Please provide your purpose of loan",
                        loanPurposeInputStyle: "error"
                    });
                }
                if (validator.isEmpty(requestedLoanAmount.value)) {
                    this.setState({
                        requestedLoanAmountError: "Please enter an amount between $1,000 and $50,000.",
                        requestedLoanAmountInputStyle: "error"
                    });
                }

                if (validator.isEmpty(firstName.value)) {
                    this.setState({
                        firstNameError: "First Name is required.",
                        firstNameInputStyle: "error"
                    });
                }
                if (validator.isEmpty(lastName.value)) {
                    this.setState({
                        lastNameError: "Last Name is required.",
                        lastNameInputStyle: "error"
                    });
                }
                if (validator.isEmpty(contactNumber.value)) {
                    this.setState({
                        contactNumberError: "Contact Number is required.",
                        contactNumberInputStyle: "error"
                    });
                }
                if (validator.isEmpty(month.value)) {
                    this.setState({
                        monthError: "Month is required.",
                        monthInputStyle: "error"
                    });
                }
                if (validator.isEmpty(day.value)) {
                    this.setState({
                        dayError: "Day is required.",
                        dayInputStyle: "error"
                    });
                }
                if (validator.isEmpty(year.value)) {
                    this.setState({
                        yearError: "Year is required.",
                        yearInputStyle: "error"
                    });
                }
                if (validator.isEmpty(zipCode.value)) {
                    this.setState({
                        zipCodeError: "Zip Codeis required.",
                        zipCodeInputStyle: "error"
                    });
                }

                if (validator.isEmpty(streetAddress.value)) {
                    this.setState({
                        streetAddressError: "Street Address is required.",
                        streetAddressInputStyle: "error"
                    });
                }
                if (validator.isEmpty(city.value)) {
                    this.setState({
                        cityError: "City is required.",
                        cityInputStyle: "error"
                    });
                }
                if (validator.isEmpty(state.value)) {
                    this.setState({
                        stateError: "State is required.",
                        stateInputStyle: "error"
                    });
                }
                if (validator.isEmpty(residence.value)) {
                    this.setState({
                        residenceError: "Please provide your type of residence.",
                        residenceInputStyle: "error"
                    });
                }
                if (validator.isEmpty(ssn.value)) {
                    this.setState({
                        ssnError: "Please enter a valid social security number.",
                        ssnInputStyle: "error"
                    });
                }

                if (validator.isEmpty(employmentStatus.value)) {
                    this.setState({
                        employmentStatusError: "Employment Status is required",
                        employmentStatusInputStyle: "error"
                    });
                }

                if (validator.isEmpty(ssn.value)) {
                    this.setState({
                        preTaxIncomeError: "Please enter n income.",
                        preTaxIncomeInputStyle: "error"
                    });
                }

            } else {
                this.setState({
                    loanPurpose: loanPurpose.value,
                    loanPurposeError: "",
                    loanPurposeInputStyle: "",
                    requestedLoanAmount: requestedLoanAmount.value,
                    requestedLoanAmountError: "",
                    requestedLoanAmountInputStyle: "",
                    residence: residence.value,
                    residenceError: "",
                    residenceInputStyle: "",
                    ssn: ssn.value,
                    ssnError: "",
                    ssnInputStyle: "",

                    firstName: firstName.value,
                    firstNameInputStyle: "",
                    firstNameError: "",
                    lastName: lastName.value,
                    lastNameInputStyle: "",
                    lastNameError: "",
                    contactNumber: contactNumber.value,
                    contactNumberError: "",
                    contactNumberInputStyle: "",
                    month: month.value,
                    monthError: "",
                    monthInputStyle: "",
                    day: day.value,
                    dayError: "",
                    dayInputStyle: "",
                    year: year.value,
                    yearError: "",
                    yearInputStyle: "",

                    zipCode: zipCode.value,
                    zipCodeError: "",
                    zipCodeInputStyle: "",
                    streetAddress: streetAddress.value,
                    streetAddressError: "",
                    streetAddressInputStyle: "",
                    city: city.value,
                    cityError: "",
                    cityInputStyle: "",
                    state: state.value,
                    stateError: "",
                    stateInputStyle: "",
                    employmentStatus: employmentStatus.value,
                    employmentStatusError: "",
                    employmentStatusInputStyle: "",
                    preTaxIncome: preTaxIncome.value,
                    preTaxIncomeError: "",
                    preTaxIncomeInputStyle: ""
                });
            }
        }
    }
    render() {
        console.log(this.state);
        const formTypeEdit = this.state.formTypeEdit;
        const loanPurposeError = this.state.loanPurposeError;
        const loanPurposeInputStyle = this.state.loanPurposeInputStyle;
        const requestedLoanAmountInputStyle = this.state.requestedLoanAmountInputStyle;
        const requestedLoanAmountError = this.state.requestedLoanAmountError;
        const residenceInputStyle = this.state.residenceInputStyle;
        const residenceError = this.state.residenceError;
        const ssnInputStyle = this.state.ssnInputStyle;
        const ssnError = this.state.ssnError;
        const confirmInfoInputStyle = this.state.confirmInfoInputStyle;
        const confirmInfoError = this.state.confirmInfoError;

        const firstNameError = this.state.firstNameError;
        const firstNameInputStyle = this.state.firstNameInputStyle;
        const lastNameError = this.state.lastNameError;
        const lastNameInputStyle = this.state.lastNameInputStyle;
        const contactNumberError = this.state.contactNumberError;
        const contactNumberInputStyle = this.state.contactNumberInputStyle;
        const monthError = this.state.monthError;
        const monthInputStyle = this.state.monthInputStyle;
        const dayError = this.state.dayError;
        const dayInputStyle = this.state.dayInputStyle;
        const yearError = this.state.yearError;
        const yearInputStyle = this.state.yearInputStyle;
        const zipCodeError = this.state.zipCodeError;
        const zipCodeInputStyle = this.state.zipCodeInputStyle;
        const streetAddressError = this.state.streetAddressError;
        const streetAddressInputStyle = this.state.streetAddressInputStyle;
        const cityError = this.state.cityError;
        const cityInputStyle = this.state.cityInputStyle;
        const stateError = this.state.stateError;
        const stateInputStyle = this.state.stateInputStyle;
        const employmentStatusError = this.state.employmentStatusError;
        const employmentStatusInputStyle = this.state.employmentStatusInputStyle;
        const preTaxIncomeError = this.state.preTaxIncomeError;
        const preTaxIncomeInputStyle = this.state.preTaxIncomeInputStyle;

        return (
            <div className="account-pages">
                <Container>
                    <Row>
                        <Col sm="12">
                            <h1 className="pagetitle mb10">Let's get started on your personal loan request</h1>
                            <p>Just answer a few simple questions, confirm your information, and start comparing offers.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                            {(!formTypeEdit) ? (
                                <div className="wizard new-apply-address">
                                    <Row>
                                        <Col sm="3">Full name</Col>
                                        <Col sm="9">Charles Braxton</Col>
                                    </Row>
                                    <Row>
                                        <Col sm="3">Address</Col>
                                        <Col sm="9">1115 Ferguson Street MILFORD, MA 01757</Col>
                                    </Row>
                                    <Row>
                                        <Col sm="3">Phone number <span className="tooltip-icon" id={"Tooltip-" + this.state.tooltips[0].id}>?</span></Col>
                                        <TooltipItem key={this.state.tooltips[0].id} item={this.state.tooltips[0].text} id={this.state.tooltips[0].id} />
                                        <Col sm="9">(508) 478-7434</Col>
                                    </Row>
                                    <Row>
                                        <Col sm="3">Pre-tax income</Col>
                                        <Col sm="9">$3,000</Col>
                                    </Row>
                                    <Row>
                                        <Col sm="3">Employment status</Col>
                                        <Col sm="9">Full Time</Col>
                                    </Row>
                                    <Row>
                                        <Col sm="3">Date of birth</Col>
                                        <Col sm="9">4/17/1980</Col>
                                    </Row>
                                    <Row className="mt30">
                                        <Col sm="8">
                                            <div className="confirm-info" >
                                                <FormGroup check>
                                                    <Label check className={(confirmInfoInputStyle
                                                        ? confirmInfoInputStyle
                                                        : " ")
                                                    }>
                                                        <Input
                                                            type="checkbox"
                                                            name="confirmInfo"
                                                            id="confirmInfo"
                                                            onChange={this.confirmInfoOnChange}
                                                        /><span className="checkmark"></span>
                                                        I confirm my information is correct
                                                </Label>
                                                    {confirmInfoError !== "" ? (
                                                        <FormFeedback style={{ display: "block" }}>
                                                            {confirmInfoError}
                                                        </FormFeedback>
                                                    ) : (
                                                            ""
                                                        )}
                                                </FormGroup>

                                            </div>
                                        </Col>
                                        <Col sm="4">
                                            <Button color="secondary" onClick={this.fromTypeChangeOnClick}>Edit your info</Button>
                                        </Col>
                                    </Row>
                                </div>
                            ) : ("")}
                            <div className="wizard new-apply-address">
                                <div className="wizard-body">
                                    <Row>
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="loanPurpose" className="bold">
                                                    Why do you need a personal loan?
                                                    </Label>
                                                <Input
                                                    type="select"
                                                    name="loanPurpose"
                                                    id="loanPurpose"
                                                    onChange={this.loanPurposeOnChange}
                                                    className={loanPurposeInputStyle}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="0">Credit Card Consolidation</option>
                                                    <option value="1">Debt Consolidation</option>
                                                    <option value="2">Home Improvement</option>
                                                    <option value="3">Home Buying</option>
                                                    <option value="4">Major Purchase</option>
                                                    <option value="5">Car Financing</option>
                                                    <option value="6">Green Loan</option>
                                                    <option value="7">Business</option>
                                                    <option value="8">Vacation</option>
                                                    <option value="9">Wedding Expenses</option>
                                                    <option value="10">Moving and Relocation</option>
                                                    <option value="11">Medical Expenses</option>
                                                    <option value="12">Other</option>
                                                </Input>
                                                {loanPurposeError !== "" ? (
                                                    <FormFeedback style={{ display: "block" }}>
                                                        {loanPurposeError}
                                                    </FormFeedback>
                                                ) : (
                                                        ""
                                                    )}
                                            </FormGroup>
                                        </Col>
                                        <Col sm="6">
                                            <InputGroup className={requestedLoanAmountInputStyle}>
                                                <Label for="requestedLoanAmount">How much would you like to borrow?</Label>
                                                <InputGroupAddon addonType="prepend">
                                                    <span>$</span>
                                                </InputGroupAddon>

                                                <Input
                                                    type="number"
                                                    name="requestedLoanAmount"
                                                    id="requestedLoanAmount"
                                                    autoComplete="nope"
                                                    onChange={this.requestedLoanAmountOnChange}
                                                />
                                                {requestedLoanAmountError !== "" ? (
                                                    <FormFeedback style={{ display: "block" }}>
                                                        {requestedLoanAmountError}
                                                    </FormFeedback>
                                                ) : (
                                                        ""
                                                    )}
                                            </InputGroup>
                                        </Col>
                                    </Row>
                                    {(formTypeEdit) ? (<div>
                                        <Row>
                                            <Col sm="6">
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
                                            </Col>
                                            <Col sm="6">
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
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="6">
                                                <FormGroup>
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
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6">
                                                <FormGroup>
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
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="6">
                                                <FormGroup>
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
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6">
                                                <FormGroup>
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
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="6">
                                                <FormGroup>
                                                    <Label for="contactNumber" className="bold">
                                                        Phone Number  <span className="tooltip-icon" id={"Tooltip-" + this.state.tooltips[0].id}>?</span>
                                                    </Label>
                                                    <TooltipItem key={this.state.tooltips[0].id} item={this.state.tooltips[0].text} id={this.state.tooltips[0].id} />
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

                                                </FormGroup>
                                            </Col>
                                            <Col sm="6">
                                                <FormGroup>
                                                    <Row>
                                                        <Col>
                                                            <Label for="month" className="bold">
                                                                Date of Birth <span className="tooltip-icon" id={"Tooltip-" + this.state.tooltips[1].id}>?</span>
                                                            </Label>
                                                            <TooltipItem key={this.state.tooltips[1].id} item={this.state.tooltips[1].text} id={this.state.tooltips[1].id} />
                                                            <Input
                                                                type="select"
                                                                name="month"
                                                                id="month"
                                                                onChange={this.MonthOnChange}
                                                                className={monthInputStyle}
                                                            >
                                                                <option value="">Month</option>
                                                                <option value="01">January</option>
                                                                <option value="02">February</option>
                                                                <option value="03">March</option>
                                                                <option value="04">April</option>
                                                                <option value="05">May</option>
                                                                <option value="06">June</option>
                                                                <option value="07">July</option>
                                                                <option value="08">August</option>
                                                                <option value="09">September</option>
                                                                <option value="10">October</option>
                                                                <option value="11">November</option>
                                                                <option value="12">December</option>
                                                            </Input>

                                                            {monthError !== "" ? (
                                                                <FormFeedback style={{ display: "block" }}>
                                                                    {monthError}
                                                                </FormFeedback>
                                                            ) : (
                                                                    ""
                                                                )}
                                                        </Col>
                                                        <Col>
                                                            <Label for="day" className="bold">
                                                                &nbsp;
                                                        </Label>
                                                            <Input
                                                                type="select"
                                                                name="day"
                                                                id="day"
                                                                onChange={this.DayOnChange}
                                                                className={dayInputStyle}
                                                            >
                                                                <option value="">Day</option>
                                                                <option value="01">1</option>
                                                                <option value="02">2</option>
                                                                <option value="03">3</option>
                                                                <option value="04">4</option>
                                                                <option value="05">5</option>
                                                                <option value="06">6</option>
                                                                <option value="07">7</option>
                                                                <option value="08">8</option>
                                                                <option value="09">9</option>
                                                                <option value="10">10</option>
                                                                <option value="11">11</option>
                                                                <option value="12">12</option>
                                                                <option value="13">13</option>
                                                                <option value="14">14</option>
                                                                <option value="15">15</option>
                                                                <option value="16">16</option>
                                                                <option value="17">17</option>
                                                                <option value="18">18</option>
                                                                <option value="19">19</option>
                                                                <option value="20">20</option>
                                                                <option value="21">21</option>
                                                                <option value="22">22</option>
                                                                <option value="23">23</option>
                                                                <option value="24">24</option>
                                                                <option value="25">25</option>
                                                                <option value="26">26</option>
                                                                <option value="27">27</option>
                                                                <option value="28">28</option>
                                                                <option value="29">29</option>
                                                                <option value="30">30</option>
                                                                <option value="31">31</option>
                                                            </Input>

                                                            {dayError !== "" ? (
                                                                <FormFeedback style={{ display: "block" }}>
                                                                    {dayError}
                                                                </FormFeedback>
                                                            ) : (
                                                                    ""
                                                                )}
                                                        </Col>
                                                        <Col>
                                                            <Label for="year" className="bold">
                                                                &nbsp;
                                                        </Label>
                                                            <Input
                                                                type="select"
                                                                name="year"
                                                                id="year"
                                                                onChange={this.YearOnChange}
                                                                className={yearInputStyle}
                                                            >
                                                                <option value="">Year</option>
                                                                <option value="1999">1999</option>
                                                                <option value="1998">1998</option>
                                                                <option value="1997">1997</option>
                                                                <option value="1996">1996</option>
                                                                <option value="1995">1995</option>
                                                                <option value="1994">1994</option>
                                                                <option value="1993">1993</option>
                                                                <option value="1992">1992</option>
                                                                <option value="1991">1991</option>
                                                                <option value="1990">1990</option>
                                                                <option value="1989">1989</option>
                                                                <option value="1988">1988</option>
                                                                <option value="1987">1987</option>
                                                                <option value="1986">1986</option>
                                                                <option value="1985">1985</option>
                                                                <option value="1984">1984</option>
                                                                <option value="1983">1983</option>
                                                                <option value="1982">1982</option>
                                                                <option value="1981">1981</option>
                                                                <option value="1980">1980</option>
                                                                <option value="1979">1979</option>
                                                                <option value="1978">1978</option>
                                                                <option value="1977">1977</option>
                                                                <option value="1976">1976</option>
                                                                <option value="1975">1975</option>
                                                                <option value="1974">1974</option>
                                                                <option value="1973">1973</option>
                                                                <option value="1972">1972</option>
                                                                <option value="1971">1971</option>
                                                                <option value="1970">1970</option>
                                                                <option value="1969">1969</option>
                                                                <option value="1968">1968</option>
                                                                <option value="1967">1967</option>
                                                                <option value="1966">1966</option>
                                                                <option value="1965">1965</option>
                                                                <option value="1964">1964</option>
                                                                <option value="1963">1963</option>
                                                                <option value="1962">1962</option>
                                                                <option value="1961">1961</option>
                                                                <option value="1960">1960</option>
                                                                <option value="1959">1959</option>
                                                                <option value="1958">1958</option>
                                                                <option value="1957">1957</option>
                                                                <option value="1956">1956</option>
                                                                <option value="1955">1955</option>
                                                                <option value="1954">1954</option>
                                                                <option value="1953">1953</option>
                                                                <option value="1952">1952</option>
                                                                <option value="1951">1951</option>
                                                                <option value="1950">1950</option>
                                                                <option value="1949">1949</option>
                                                                <option value="1948">1948</option>
                                                                <option value="1947">1947</option>
                                                                <option value="1946">1946</option>
                                                                <option value="1945">1945</option>
                                                                <option value="1944">1944</option>
                                                                <option value="1943">1943</option>
                                                                <option value="1942">1942</option>
                                                                <option value="1941">1941</option>
                                                                <option value="1940">1940</option>
                                                                <option value="1939">1939</option>
                                                                <option value="1938">1938</option>
                                                                <option value="1937">1937</option>
                                                                <option value="1936">1936</option>
                                                                <option value="1935">1935</option>
                                                                <option value="1934">1934</option>
                                                                <option value="1933">1933</option>
                                                                <option value="1932">1932</option>
                                                                <option value="1931">1931</option>
                                                                <option value="1930">1930</option>
                                                                <option value="1929">1929</option>
                                                                <option value="1928">1928</option>
                                                                <option value="1927">1927</option>
                                                                <option value="1926">1926</option>
                                                                <option value="1925">1925</option>
                                                                <option value="1924">1924</option>
                                                                <option value="1923">1923</option>
                                                                <option value="1922">1922</option>
                                                                <option value="1921">1921</option>
                                                                <option value="1920">1920</option>
                                                                <option value="1919">1919</option>
                                                            </Input>

                                                            {yearError !== "" ? (
                                                                <FormFeedback style={{ display: "block" }}>
                                                                    {yearError}
                                                                </FormFeedback>
                                                            ) : (
                                                                    ""
                                                                )}
                                                        </Col>
                                                    </Row>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col sm="6">
                                                <FormGroup>
                                                    <Label for="employmentStatus" className="bold">
                                                        What is your employment status?
                                                </Label>
                                                    <Input
                                                        type="select"
                                                        name="employmentStatus"
                                                        id="employmentStatus"
                                                        onChange={this.employmentStatusOnChange}
                                                        className={employmentStatusInputStyle}
                                                    >
                                                        <option value="">Select</option>
                                                        <option value="0">Full Time</option>
                                                        <option value="1">Part Time</option>
                                                        <option value="2">Self-Employed</option>
                                                        <option value="3">Unemployed</option>
                                                        <option value="4">Other</option>
                                                    </Input>
                                                    {employmentStatusError !== "" ? (
                                                        <FormFeedback style={{ display: "block" }}>
                                                            {employmentStatusError}
                                                        </FormFeedback>
                                                    ) : (
                                                            ""
                                                        )}
                                                </FormGroup>
                                            </Col>
                                            <Col sm="6">
                                                <InputGroup className={preTaxIncomeInputStyle}>
                                                    <Label for="preTaxIncome">What’s your annuam pre-tax income? <span className="tooltip-icon" id={"Tooltip-" + this.state.tooltips[2].id}>?</span></Label>
                                                    <TooltipItem key={this.state.tooltips[2].id} item={this.state.tooltips[2].text} id={this.state.tooltips[2].id} />
                                                    <InputGroupAddon addonType="prepend">
                                                        <span>$</span>
                                                    </InputGroupAddon>

                                                    <Input
                                                        type="number"
                                                        name="preTaxIncome"
                                                        id="preTaxIncome"
                                                        autoComplete="nope"
                                                        onChange={this.preTaxIncomeOnChange}
                                                    />
                                                    {preTaxIncomeError !== "" ? (
                                                        <FormFeedback style={{ display: "block" }}>
                                                            {preTaxIncomeError}
                                                        </FormFeedback>
                                                    ) : (
                                                            ""
                                                        )}
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                    </div>) : ("")}

                                    <Row>
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="residence" className="bold">
                                                    Do you rent or own your house?
                                                    </Label>
                                                <Input
                                                    type="select"
                                                    name="residence"
                                                    id="residence"
                                                    onChange={this.residenceOnChange}
                                                    className={residenceInputStyle}
                                                >
                                                    <option value="">Select</option>
                                                    <option value="Own">I own my house</option>
                                                    <option value="Rent">I rent my house</option>
                                                    <option value="Other">Other</option>
                                                </Input>
                                                {residenceError !== "" ? (
                                                    <FormFeedback style={{ display: "block" }}>
                                                        {residenceError}
                                                    </FormFeedback>
                                                ) : (
                                                        ""
                                                    )}
                                            </FormGroup>
                                        </Col>
                                        <Col sm="6">
                                            <FormGroup>
                                                <Label for="ssn" className="bold">
                                                    Social Security Number <span className="tooltip-icon" id={"Tooltip-" + this.state.tooltips[3].id}>?</span>
                                                </Label>
                                                <TooltipItem key={this.state.tooltips[3].id} item={this.state.tooltips[3].text} id={this.state.tooltips[3].id} />
                                                <NumberFormat
                                                    id="ssn"
                                                    placeholder="xxx-xx-xxxx"
                                                    onValueChange={this.ssnOnChange}
                                                    format="###-##-####"
                                                    className={
                                                        "form-control " +
                                                        (ssnInputStyle
                                                            ? ssnInputStyle
                                                            : " ")
                                                    }
                                                />
                                                {ssnError !== "" ? (
                                                    <FormFeedback style={{ display: "block" }}>
                                                        {ssnError}
                                                    </FormFeedback>
                                                ) : (
                                                        ""
                                                    )}

                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                            <div className="wizard new-apply-address">
                                <div className="wizard-body max400">
                                    <Button
                                        onClick={this.viewMyOffersOnClick}
                                        type="button"
                                        color="primary"
                                        className="mt15"
                                    >
                                        VIEW MY OFFERS
                                        </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default NewPersonalLoan;


